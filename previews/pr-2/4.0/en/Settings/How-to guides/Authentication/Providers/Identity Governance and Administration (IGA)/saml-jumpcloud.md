# How to integrate with JumpCloud

This tutorial provides a guide on how to integrate Segura with JumpCloud, using SAML as the authentication protocol. The configuration of the integration occurs in parallel, alternating the inclusion of information from one environment to the other, until completion.

## Requirements:

* [Administrator profile in the JumpCloud account](https://jumpcloud.com/support/add-users-to-admin-portal).
* [User group in the JumpCloud account](https://jumpcloud.com/support/get-started-user-groups#creating-user-groups) with all users who will access Segura via JumpCloud.

## Step 1: Create the application in JumpCloud

1. On the left sidebar of JumpCloud, locate the **User Authentication** section.
2. Select **SSO**.
3. Click **Add New Application**.
4. In the search field, look for **SAML**.
5. In **Custom SAML App**, click **configure**.

### In the General Info tab

1. Fill in the **Display Label** field with the name of your application.

### In the SSO tab
Add the information:

1. **IdP Entity ID**: unique identifier.
2. **SP Entity ID**: `SENHASEGURA_SERVICE_PROVIDER`
3. **ACS URLs**: `https://sua_url/flow/saml/auth/assert`
4. **SAMLSubject NameID**:  select the information that users will use to log in.
5. **SAMLSubject NameID Format**: select one of the SAML 2.0 options corresponding to the previous field.
6. **Signature Algorithm**: select **RSA-SHA256**.
7. **Default RelayState**: leave it blank.
8. **Login URL**: `https://sua_url/flow/saml/auth/assert`
9. **IDP URL**: replace the default name with another identification.

### In the User Groups tab

1. Select the group that will access the application and click **activate**.
2. A confirmation message of the new SSO connection will appear. 
3. Click **continue** to complete the process.

If successful, the application appears on the **Configured Applications** page.
:::(Info) (Info)
Click on the certificate download link in the blue pop-up message at the upper-right corner. You’ll need this information later.
:::
:::(Warning) (Caution)
Keep JumpCloud open for the next configurations.
:::

## Step 2: Enable the SAML provider in Segura

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication >  Providers**.
3. Click the **Actions** button and select **Enabled**.

## Step 3: Create a SAML provider in Segura

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. Click the **Add** button.
4. In the **SAML provider registration**:
    1. **Type**: select **SAML provider**.
    2. **Enable**: keep it as **Yes**.
    3. **Entity ID**: fill in with the same name entered in the **Display Label** field.
    4. **SAML provider metadata URL**: fill in with the URL. 
        1. Find this information in the JumpCloud **SSO** tab. Click on the **Copy Metadata URL** button.
    5. **Domain or public IP for URL Redirection**: fill in with the URL of Segura or the domain.
    6. **Redirect URL**: automatic fill-in.
    7. **SSO Logout URL (Sign-out URL)**: fill in with the URL. 
        1. Find this information in the JumpCloud **SSO** tab. Copy the information from the **IDP URL** field.
    8. **Redirect binding type**: select **POST**.
    9. For **Security SAML**:
        1. Download the provider's certificate and copy its content.
        2. **Certificate (PEM format)**: paste the certificate content.
    :::(Info) (Info)
    If you haven't saved the certificate information, go to the left sidebar menu of the application you created, click **IDP Certificate Valid**, and then select **Download certificate**.
    ::: 
5. Click **Save**.

The system displays a success message, and the provider appears listed on the home page.

## Step 4: Access Segura via JumpCloud

1. On the home page of the Segura platform, click **Sign in with SSO**.
2. Click **SAML Provider**. You’ll be redirected to the JumpCloud authentication screen to enter your credentials.
3. After authentication, click on the Segura application to access the vault.

***
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
