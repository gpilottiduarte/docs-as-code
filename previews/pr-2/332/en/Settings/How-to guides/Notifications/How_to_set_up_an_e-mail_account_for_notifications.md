# How to set up an e-mail account for notifications

Setting up an email account in senhasegura allows the application to send notifications about different actions, such as changing a password before a certificate expires or suspicious access.

It’s important to include valid email addresses because approvers receive access requests by email. Likewise, requesters receive their disapproval or approval responses.

## Requirements

- **client_id, client_secret, and tenant_id:** OAuth2 of the chosen e-mail provider.
- An e-mail account with access to the SMTP protocol on Google or Outlook.
- MFA authentication is enabled on the accounts.
- Application password enabled on the accounts. For more information, visit the documentation for these services:
    - Google: [Sign in with app passwords - Google Account Help](https://support.google.com/accounts/answer/185833?hl=pt-BR)
    - Office 365: [Manage app passwords for two-step verification - Microsoft Support](https://support.microsoft.com/pt-br/account-billing/gerenciar-senhas-de-aplicativo-para-verifica%C3%A7%C3%A3o-em-duas-etapas-d6dc8c6d-4bf7-4851-ad95-6d07799387e9)

The registration process for the senhasegura solution is carried out using the APIs of the chosen provider. Visit the links below to obtain the `client_id`, `client_secret`, and `tenant-id` API information and register the senhasegura solution with your email provider.

- Office 365: [Office 365 Quickstart Register App](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).
- Office 365: [How to find your Microsoft Entra tenant ID.](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-find-tenant)
- Google Mail Workspace: [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/oauth2/native-app?hl=pt-br).
- You can get an overview of the possible commands by running `orbit email-oauth2-proxy -help`.

## Prepare email accounts
In order to register e-mail accounts with senhasegura, in addition to the requirements listed above, it’s necessary to prepare the senhasegura environment. This preparation consists of two main steps.

### Device registration and configuration

1. Have a device registered with senhasegura. This device must be integrated with the email account to be used (Google or Outlook) through the application password and MFA authentication.
2. The device must contain a valid login URL.
    1. For Google: `http://accounts.google.com/`
    2. For Outlook: `http://login.live.com/`
3. This device must have HTTP and HTTPS connectivity.

### MFA and application password configuration
When creating the MFA and application password settings, it’s essential that the user follows the instructions below:

1. Copy the generated password.
2. Remove the spaces from the password (in case the vault doesn't do this automatically).
3. Create a credential on the device mentioned in the previous requirement.
4. Use the application password as the credential password.


## How to run the `email-oauth2-proxy` command

After obtaining the `client_id`, `client_secret`, and `tenant-id` values, configure the senhasegura solution, in particular the `email-oauth2-proxy` component. The example below uses the steps needed to configure senhasegura with the Microsoft Office 365 service.

1. Access the senhasegura server using `SSH` with the port `59022`.
2. Log in with the administrative user `mt4adm`.
3. Use the command `orbit email-oauth2-proxy register` with the `client_id`, `client_secret`, and `tenant-id` and the following parameters:

```
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

```shell
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

In addition, you must configure communication with the SMTP server. To do this, access **Grid Menu > Settings > Notifications > E-mail > SMTP Configuration** and use the specific settings for Google and Office 365, as shown below:

**Google:**
- URL: `smtp.gmail.com`
- Port: 465

**Office 365:**
- URL: `smtp.office365.com`
- Port: 587


## How to configure senhasegura's SMTP service

:::(Info) (Info)
You must have an active **SMTP** account with the **Default Account** field set to **Yes** so that the SMTP system can send emails.
:::

After the initial configuration of `email-oauth2-proxy`, you must configure senhasegura's SMTP service. To do this, follow the steps below:

1. On the senhasegura platform, in the top right-hand corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. On the side menu, select **Notifications > SMTP Configuration**.
3. Create a new SMTP service configuration.
4. Fill in the fields according to your account values:
    1. **Account name:** name of your account (for example, **Office365**).
    2. **Active:** leave **Yes** selected to activate the account.
    3. **Sender e-mail:** the e-mail address that will be used to send e-mails.
    4. **Reply-To e-mail:** the e-mail address that will receive reply e-mails.
    5. **Return e-mail (Return-Path):** the returning e-mail address in case of a sending error.
    6. **Confirmation e-mail:** the e-mail address to confirm sending.
5. **Default account:** must be set to **Yes.**
6. **Send read confirmation:** must be set to **Yes.**
7. **Force use of configuration:** must be set to **No.**
8. **Enable footer:** must be set to **No.**
9. In the SMTP server configuration section, indicate the settings below:
    1. **SMTP host:** enter the address of the localhost server: `127.0.0.1`.
    2. **Port:** enter the port configured using the `orbit email-oauth2-proxy register` command. In the example above, the value is `2465`.
    3. **Use secure connection:** check **No.**
    4. **Secure connection type:** leave it disabled (blank).
    5. **Use authentication?:** check **Yes.**
    6. **Ignore certificate error:** check **Yes.**
    7. **Use Network Connector?**: indicate whether or not you want to use the Network Connector.
    8. **Network Connector:** Indicate the specific Network Connector, if applicable.
        1. By keeping the Network Connector field blank, the default Network Connector, as defined in **Settings > System Parameters > Application > Network Connector**, will be used.
        2. This parameter will only take effect if there is any configured Network Connector.
10. Click **Send**.

## How to test the configuration

Once you have set up the SMTP connection, you need to test it. To do this, follow the steps below:

1. On the senhasegura platform, in the top right corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. On the side menu, select **Notifications > SMTP Settings**.
3. In the list of connections, identify the connection you created, and in the **Action** column, click on the icon represented by the three vertical dots and select **Test configuration** from the drop-down menu.
4. In the **Test e-mail - Account** pop-up window, enter an e-mail address to test the configuration.

In case everything is correct, you’ll see a success message.

## How to get the URL to validate the SMTP configuration

After configuring the SMTP access and testing messages, you can validate this configuration. To do this, you need to obtain the authorization access URL from the `email-oauth2-proxy` component by making a request to the Microsoft Office 365 API.

To do so, follow the steps below:

1. Run the command `orbit email-oauth2-proxy logs` in the terminal. In the command output, look for the message **"Please visit the following URL to authenticate account"** to get the validation URL.
2. Copy the full URL and paste it into a browser.
3. Log in to the account.

You should receive a message indicating that **Email OAuth 2.0** authentication succeeded.

## How to set up an IMAP account

1. On the senhasegura platform, in the top right corner, click on **Grid Menu**, represented by the nine squares, and select **Settings**.
2. On the side menu, select **Notifications > IMAP/POP3 Configuration.**
3. Create a new IMAP service configuration.
4. In the **POP3/IMAP account registration** pop-up window, fill in the fields:
    1. **Account name:** enter the e-mail account name.
    2. **Keep copy on server:** check **Yes.**
    3. **Automatic check:** check **Yes.**
    4. **Active:** check **Yes.**
5. In the **Server configuration** section, fill in the fields:
    1. **Address:** enter the localhost address: `127.0.0.1`.
    2. **Port:** enter the port to be used: `2993`.
    3. **Protocol:** select **IMAP** from the drop-down menu.
    4. **Network connector (optional):** if required, specify a network connector.
    5. **Credential for authentication:** enter the credential that will be used to authenticate with the IMAP server.
    6. **Ignore certificate?:** check **Yes.**
    7. **Use secure connection:** check **No.**
    8. **Secure connection type:** leave it disabled (blank).
    9. **Use Network Connector?**: indicate whether or not you want to use the Network Connector.
    10. **Network Connector:** Indicate the specific Network Connector, if applicable.
        1. By keeping the Network Connector field blank, the default Network Connector, as defined in **Settings > System Parameters > Application > Network Connector**, will be used. 
        2. This parameter will only take effect if there is any configured Network Connector.
6. Click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).