# How to manage SAML providers

You can add or remove SAML providers in senhasegura. To do this, follow the steps below.

## Register a new provider

To add a new provider, follow the steps below:

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. In the upper right corner, click on **View actions**, represented by the three vertical dots, and select **New provider**.
4. In the **SAML Provider Registration** window, fill in the following fields:

### General information tab

1. Type: select your SAML provider from the drop-down menu. In case it is not listed, select the SAML provider option.
2. **Enabled**: select **Yes**.
3. **Environment**: to give access to Domum senhasegura users, select D**omum Remote Access**; to give access to local users only, select **Local**.
4. **Entity ID**: `ClientId` or `EntityId` of the SAML application.
5. **SAML provider metadata URL**: enter the URL that will manage the SAML metadata.
6. **Domain or public IP for redirect URL**: enter the domain or public IP of senhasegura.
7. **Redirect URL**: purely informative field to be used in SAML.
8. **Comments**: fill in any relevant comments or observations.
9. In the **URL Configuration** section:
   1. **SSO login URL (Sign-in URL):** indicate the URL used to log in.
   2. **SSO Sign-out URL:** indicate the URL used to log out.
   3. **Redirect Binding Type:** choose the type of Redirect Bind from the drop-down menu. The options are **REDIRECT** or **POST**.

### Security SAML tab

1. **Certificate (PEM format):** text field for you to paste the contents of the `.pem` certificate.

:::(info) (Info)
To ensure that SAML works properly, all the settings mentioned in this guide must correspond exactly to those present in the IDP (Identity Provider). If there are discrepancies, authentication will fail.
:::

You can click **Save** on any of the tabs.

## Update provider

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. Identify the record you want to update and, in the **Action** column, click **Update provider**, represented by the pencil and paper icon.
4. The **SAML Provider Record** window will open in edit mode.
5. Edit the necessary information and click **Save**.

## Delete provider

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. Identify the record you want to update. In the **Action** column, click on the icon with three vertical dots and select **Delete provider**, represented by the trash can icon.
4. In the confirmation modal, click **Yes**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).