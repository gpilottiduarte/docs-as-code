# How to manage SMTP settings

Setting up an email account in Segura allows the application to send notifications about different actions, such as changing a password before a certificate expires or suspicious access.

It’s important to include valid email addresses because approvers receive access requests by email. Likewise, requesters receive their disapproval or approval responses.

## Requirements

- **client_id, client_secret, and tenant_id:** OAuth2 of the chosen e-mail provider.

The Segura solution's registration process involves using the chosen provider's APIs.

:::(Info) (Info)
Follow the links below to obtain the `client_id`, `client_secret`, and `tenant-id` information for the API and thus register the Segura solution within your email provider.
- Office 365: [Office 365 Quickstart Register App](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).
- Office 365: [How to find your Microsoft Entra tenant ID.](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-find-tenant)
- Google Mail Workspace: [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/oauth2/native-app?hl=pt-br).
:::

:::(Warning) (Important)
You can get an overview of the possible commands by running `orbit email-oauth2-proxy -help`.
:::

## How to run the `email-oauth2-proxy` command

After obtaining the `client_id`, `client_secret`, and `tenant-id` values, configure the Segura solution, in particular the `email-oauth2-proxy` component. The example below uses the steps needed to configure Segura with the Microsoft Office 365 service.

1. Access the Segura server using `SSH` with the port `59022`.
2. Log in with the administrative user `mt4adm`.
3. Use the command `orbit email-oauth2-proxy register` with the `client_id`, `client_secret`, and `tenant-id` and the following parameters:

```shell
orbit email-oauth2-proxy register \
 --imap-server-address=outlook.office365.com \
 --imap-server-port=993 \
 --smtp-server-address=smtp.office365.com \
 --smtp-server-port=587 \
 --smtp-server-starttls \
 --oauth2-token-url="https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token " \
 --oauth2-permission-url="https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize " \
 --oauth2-scope=" https://outlook.office365.com/IMAP.AccessAsUser.All https://outlook.office365.com/SMTP.Send offline_access " \
 --oauth2-flow="client_credentials" \
 --oauth2-client-id="CLIENT_ID" \
 --oauth2-client-secret="CLIENT_SECRET" \
 --force
```

Below you can see an example of a configuration file for Microsoft Office 365:

```txt
[emailproxy]
delete_account_token_on_password_error = True
encrypt_client_secret_on_first_use = False
allow_catch_all_accounts = True
[IMAP-2993]
server_address = outlook.office365.com
server_port = 993
[SMTP-2465]
server_address = smtp.office365.com
server_port = 587
starttls = True
[@]
redirect_uri = http://<Your_Vault_Address>/email-oauth2-proxy-authorize/
redirect_list_address = http://127.0.0.1:8801/
token_url = [https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token](https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token%22%5C)
permission_url = https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize
oauth2_scope = https://outlook.office365.com/IMAP.AccessAsUser.All https://outlook.office365.com/POP.AccessAsUser.All https://outlook.office365.com/SMPT.Send offline_access
client_id = CLIENT_ID
client_secret = CLIENT_SECRET
oauth2_flow = client_credentials
```
## How to configure Segura's SMTP service

:::(Info) (Info)
You must have an active **SMTP** account with the **Default Account** field set to **Yes** so that the SMTP system can send emails.
:::

After the initial configuration of `email-oauth2-proxy`, you must configure Segura's SMTP service. To do this, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **E-mail > SMTP Configuration**.
3. Click the **Add** button to create a new SMTP service configuration.
4. Fill in the fields according to your account values:
    1. **Account name:** name of your account (for example, **Office365**).
    2. **Enabled:** leave **Yes** selected to activate the account.
    3. **Sender email:** the e-mail address that will be used to send e-mails.
    4. **Reply e-mail:** the e-mail address that will receive reply e-mails.
    5. **Reply e-mail (Return-Path):** the returning e-mail address in case of a sending error.
    6. **Confirmation mail:** the e-mail address to confirm sending.
5. **Default account:** must be set to **Yes.**
6. **Send read confirmation:** must be set to **Yes.**
7. **Force use of configuration:** must be set to **No.**
8. **Enable footer:** must be set to **No.**
9. In the **SMTP server** configuration section, indicate the settings below:
    1. **Host SMTP:** enter the address of the localhost server: `127.0.0.1`.
    2. **Port:** enter the port configured using the `orbit email-oauth2-proxy register` command. In the example above, the value is `2465`.
    3. **Use safe connection:** check **No.**
    4. **Secure connection type:** leave it disabled (blank).
    5. **Use authentication?:** check **Yes.**
    6. **Ignore certificate error:** check **Yes.**
    7. **Use Network Connector?**: indicate whether or not you want to use the Network Connector.
    8. **Network Connector:** Indicate the specific Network Connector, if applicable.
:::(Info) (Info)
- By keeping the **Network Connector** field blank, the default Network Connector, as defined in **Settings > System Parameters > Global > Application > Network Connector**, will be used.
- This parameter will only take effect if there is any configured **Network Connector**.
:::
10. Click **Send**.

## How to test the configuration

Once you have set up the SMTP connection, you need to test it. To do this, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **E-mail > SMTP Configuration**.
3. In the list of connections, identify the connection you created, click **Actions** button, and select **Test setting** from the drop-down menu.
4. In the **Test e-mail - Account** screen, enter an e-mail address to test the configuration.

In case everything is correct, you’ll see a success message.

## How to get the URL to validate the SMTP configuration

After configuring the SMTP access and testing messages, you can validate this configuration. To do this, you need to obtain the authorization access URL from the `email-oauth2-proxy` component by making a request to the Microsoft Office 365 API.

To do so, follow the steps below:

1. Run the command `orbit email-oauth2-proxy logs` in the terminal. In the command output, look for the message **"Please visit the following URL to authenticate account"** to get the validation URL.
2. Copy the full URL and paste it into a browser.
3. Log in to the account.

You should receive a message indicating that **Email OAuth 2.0** authentication succeeded.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).