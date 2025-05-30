# How to create a SAML application with Okta

In this article, you'll find a tutorial to create a SAML application in the user-provider tool Okta.

### Supported Features
* SP Initiated SSO (Through Segura login interface)
* IDP-Initiated SSO (Through provider interface)

## Requirements

* Enable communication between the Segura and Okta platforms.
* Access to your Okta administration settings.
* When registering a user in Okta, that user's unique identifier must be the email address.
* The same user can’t have multiple email addresses registered with Okta.
* In the Okta integration scenario, when registering a user in Segura, the user's unique identifier must be the email address.

## Steps for Creating a SAML Application
:::(Warning) (Caution)
* Okta reserves the right to modify the development environment without prior notice. As a result, the steps outlined in this guide may vary accordingly.
:::

1. With your Okta account, sign into your Okta Administrative portal. 
2. In the top left corner menu, select **Applications > Catalog > All Integrations**.
3. Search for **Segura** SAML, SCIM  app.
4. Once the app integration is added, you will be redirected to the application's assignments page.
5. Click on the **Sign On** tab then click the **Edit** link.
6. In the **Advanced Sign-on Settings**:
    :::(Info) (Info)
    You can find both pieces of information in your Segura, under the **Settings > SAML > Providers** section. Click on the provider that was created for use with Okta.
    :::
    1.  **Segura URL** field. Example: ```https://mysenhasegura```
    2.  **Entity ID** field. Example: ```MyApp```
7. Click **Save**.
8. Stay on the **Sign On** tab, then click the "**More details**" disclosure under the SAML 2.0 Metadata details section.
9. Copy the **Sign n URL** and download the Okta **Signing Certificate** to your computer. These will be used to complete your [Segura SAML provider](/v4/docs/administration-how-to-add-the-saml-provider-to-Segura).

## Log in on Segura with Okta integration

### Using the Segura interface

1. Access your Segura account by using your unique Segura URL. For example: `https://mysenhasegura.com`
2. On the login page, click on **Sign in with SSO**
3. Select the **Okta** icon
4. Once the Okta login page loads, enter your Okta credentials.

### Using the Okta Interface

1. Access the Okta Dashboard using your credentials.
2. Click **My Apps** on the side menu.
3. Select the **Segura** App.

* * *
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.
