# How to manage SAML providers

You can add or remove SAML providers in Segura. To do this, follow the steps below.

## Register a new provider

To add a new provider, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. Click the **Add** button.
4. In the **SAML provider registration** screen, fill in the following fields:
    1. **Type**: select your SAML provider from the drop-down menu. In case it is not listed, select the SAML provider option.
    2. **Enabled**: select **Yes**.
    3. **Environment**: to give access to Domum Segura users, select **Domum Remote Access**; to give access to local users only, select **Local**.
    4. **Entity ID**: `ClientId` or `EntityId` of the SAML application.
    5. **SAML provider metadata URL**: enter the URL that will manage the SAML metadata.
    6. **Domain or public IP for redirect URL**: enter the domain or public IP of Segura.
    7. **Redirect URL**: purely informative field to be used in SAML.
    8. **Comments**: fill in any relevant comments or observations.
    9. In the **URL Configuration** section:
       1. **SSO login URL (Sign-in URL):** indicate the URL used to log in.
       2. **SSO Sign-out URL:** indicate the URL used to log out.
       3. **Redirect Binding Type:** choose the type of Redirect Bind from the drop-down menu. The options are **REDIRECT** or **POST**.
    10. In the **Security SAML** section:
        1. **Certificate (PEM format):** text field for you to paste the contents of the `.pem` certificate.

:::(info) (Info)
To ensure that SAML works properly, all the settings mentioned in this guide must correspond exactly to those present in the IDP (Identity Provider). If there are discrepancies, authentication will fail.
:::

You can click **Save** on any of the tabs.

## Update a provider

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. Identify the record you want to update 
4. Click the **Actions** button and select **Edit**.
5. The **SAML provider registraton** window will open in edit mode.
6. Edit the necessary information and click **Save**.

## Disable a provider

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication > SAML > Providers**.
3. Identify the record you want to update 
4. Click the **Actions** button and select **Disable**.
4. In the confirmation modal, click **Yes**.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).