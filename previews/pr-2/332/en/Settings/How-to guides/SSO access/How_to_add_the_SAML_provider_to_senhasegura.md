# How to add the SAML provider to senhasegura

To finish setting up SSO for remote users in senhasegura SAML provider . In this article, you'll find a step-by-step guide for this task.

:::(Info) (Info)
senhasegura partnered with Okta to develop this documentation. The steps may vary and require adaptation for use with other providers.
:::

* * *
## Step 1: Collect information

1. In your Okta account, go to the administration area. 
:::(Info) (Info)
If you don't automatically enter the administration area, click the Admin button in the top right corner of the screen.
:::
2. In the top left corner menu, select **Applications > Applications**.
3. Find the senhasegura SAML application that you integrated.
4. Click on the application.
5. In the **Sign On** tab, locate the **Metadata details** field.
    1. Copy the displayed URL to use in the next step.
6. Still on the **Sign On** tab, click **More details**.
7. Locate the **Sign on URL** field.
    1. Copy the displayed URL to use in the next step. 

* * *
## Step 2: Choose the environment to register the SAML provider

senhasegura allows two types of environments for SAML provider registration:

* **SAML Provider in the Domum Remote Access environment**: SSO access for internal users and third-party users via Domum.
* **SAML Provider in the Local environment**: SSO access only for internal users via the local network. This option suits internal users already connected to the company's internal network.

:::(Warning) (Caution)
It’s possible to register both environments to internal users. However, it requires creating a separate application for each environment in the Okta provider. The system won’t allow registering the same application for both the **Local** and **Domum Remote Access** environments.
:::

* * *

### Option 1: Add the SAML provider for access

:::(Info) (Info)
This provisioning is exclusively for internal users.
:::

1. Access the senhasegura platform.
2. In the top left corner, click **Grid Menu**, indicated by the nine-square box, and select **Settings**.
3. On the side menu, select **Authentication > SAML > Providers**.
4. In the top right corner, click the three vertical dots icon (**View Actions**) and select **+ New provider**.
5. In the registration window, fill in the **Main Information** tab:
    1. In the **Type*** field, select **Okta**.
    2. In **Enable***, check **Yes**.
    3. In **Environment***, check **Local**.
    4. In **Entity ID***, enter the name registered in the **General Settings** when [creating the application](/v3-32/docs/administration-how-to-create-a-saml-application-with-okta). Example: ```MyAppExample```.
    5. In **SAML provider metadata URL***, paste the value Okta automatically generated in the **Metadata details** field. Example: ```https://trial-3650301.okta.com/app/exk6r8qx6pDaZv6IP697/sso/saml/metadata```.
    6. In **Domain or public IP for URL Redirection***, enter the senhasegura default URL. Example: ```https://mysenhasegura.com```. 
    :::(Warning) (Caution)
    Don’t insert the right slash at the end of the URL.
    :::
    7. The system will automatically complete the **Redirect URL*** field.
    8. In **SSO Login URL (Sign-in URL)*** , paste the value Okta automatically generated in the **Sign on URL** field. Example: ```https://trial-3650301.okta.com/app/trial-3650301_testesso1_1/exk6r8qx6pDaZv6IP697/sso/saml```.
    9. In  **SSO Logout URL (Sign-out URL)**, enter the URL of the Okta application. Example: ```https://trial-3650301.okta.com/```.
    10. In  **Redirect binding type**, select **REDIRECT**.
6. In the **Security SAML** tab:
    1. Download the provider's certificate and copy its content.
    2. In **Certificate (PEM format)**: paste the certificate content.
    :::(Info) (Info)
    If you haven't saved the certificate information, In this example, it can be found in the Okta administration area.
    ::: 
8. Click **Save**.

* * *
### Option 2: Add the SAML provider for access via Domum

:::(Info) (Info)
This provisioning works for both Domum internal and third parties users.
:::

1. Access the senhasegura platform.
2. In the top left corner, click **Grid Menu**, indicated by the nine-square box, and select **Settings**.
3. On the side menu, select **Authentication > SAML > Providers**.
4. In the top right corner, click the three vertical dots icon (**View Actions**) and select + **New provider**.
5. In the registration window, fill in the **Main Information** tab:
    1. In the **Type*** field, select **Okta**.
    2. In **Enable***, check **Yes**.
    3. In **Environment***, check **Domum Remote Access**.
    4. In **Entity ID***, enter the name registered in the **General Settings** [when creating the application](/v3-32/docs/administration-how-to-create-a-saml-application-with-okta). Example: ```MyAppExample.```
    5. In **SAML provider metadata URL***, paste the value Okta automatically generated in the **Metadata details** field. Example: ```https://trial-3650301.okta.com/app/exk6r8qx6pDaZv6IP697/sso/saml/metadata```.
    6. In **Domain or public IP for URL Redirection***, enter the senhasegura default URL. Example: ```https://mysenhasegura.com```. 
    :::(Warning) (Caution)
    Don’t insert the right slash at the end of the URL.
    :::
    7. The system will automatically complete the **Redirect URL*** field.
    8. In **SSO Login URL (Sign-in URL)*** , paste the value Okta automatically generated in the **Sign on URL** field. Example: ```https://trial-3650301.okta.com/app/trial-3650301_testesso1_1/exk6r8qx6pDaZv6IP697/sso/saml```.
    9. In  **SSO Logout URL (Sign-out URL)**, enter the URL of the Okta application. Example: ```https://trial-3650301.okta.com/```.
    10. In  **Redirect binding type**, select **REDIRECT**.
6. Click **Save**.

Now, senhasegura can offer SSO login for internal users, and the access provider will take care of the authentication.

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
