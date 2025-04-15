# How to manage OpenID providers

This document provides a step-by-step guide on how to add or remove OpenID providers in Segura.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication > OpenID**.  

## Add provider

1. On the **Providers** report page, in the top bar, click the **Add** button.
2. In the **Provider Registration** screen, fill in the fields below:
    1. **Type**: from the drop-down menu, select the type of OpenID provider to be used.
    :::(info) (Info)
    Please note that each provider will require specific information, so check the provider's settings whenever further information is required.
    :::
    3. **Enable**: select the status of the OpenID provider at the time of creation. By default, it is always selected as **Yes**.
    4. **Environment**: select the environment that the OpenID provider will be in.
    5. **Client ID**: client ID for connection. This ID is provided by the OpenID provider when registering a new application.
    6. **Client secret**: select the secret of the OpenID authentication provider. This secret is provided by the OpenID provider when registering a new application.
    7. **Domain or public IP for URL redirection**: insert the Segura's domain or public IP address. It is used by the OpenID provider to redirect the user back to their application after authentication.
    8. **Redirect URL**: specific endpoint in your application to which the OpenID provider will redirect the user after authentication.
    9. **Comments**: enter adding additional notes or observations about the configuration.
3. In the **Endpoints configuration** section, fill in the fields below:
    1. **OpenID endpoint configuration**: insert the endpoint that configures OpenID. It is the base URL provided by the OpenID provider. This URL describes the endpoints required for OpenID interactions. This configuration automates the discovery of endpoints in general.
    :::(info) (Info)
    This field is only required if the URL fields for the endpoints aren't filled in. The user must fill in at least one of the two available fields: `OpenID endpoint configuration` or `URL of the other endpoints`. If the URL of the other endpoints field isn't filled in, the user must fill in the `OpenID endpoint configuration` field to ensure that the services are configured correctly.

4. In the **URL of other endpoints** section, fill in the fields below:
    1. **Authorization endpoint**: insert the URL provided by the OpenID provider, used by the application to send authorization requests.
    2. **Token endpoint**: insert the URL made available by the OpenID provider, where the application sends requests to exchange the authorization code for an access token.
    3. **Userinfo endpoint**: URL made available by the OpenID provider, through which the application can request information on the authenticated user's profile, using the access token.
5. In the **Extra configurations for provider** section, fill in the fields below:
    1. **JWK endpoint (mandatory if it is not in the main openid endpoint)**: endpoint where the application can obtain the OpenID provider's public keys to validate the access token signature. This field is mandatory if these keys aren’t available on the **OpenID configuration endpoint**.
    2. **Additional issuers (separated by comma)**: a list of additional issuers that the application accepts. This is useful when the application needs to support multiple OpenID providers.
6. Click **Save**.

## Edit a provider
To update the information of a previously registered provider, follow the steps below:

1. On the **OpenID Providers** report page, locate the provider you want to update.
2. Click the **Actions** button and select **Edit**.
3. The **Provider Registration** screen will open in edit mode.

:::(info) (Info)
If the client's secret isn’t changed, the current information will be kept.
:::

4. Update the necessary information and click **Save**.

## Show a provider’s details
To view the provider's details, follow the steps below:

1. On the **OpenID Providers** report page, locate the provider you want to update.
2. Click the **Actions** button and select **Provider details**.
2. The **Provider Registration** screen will open in preview mode.
3. In this window, you can view various details of the registered provider, such as the *OpenID endpoint configuration, Authorization endpoint, Userinfo endpoint, Redirect URL, Token endpoint*, and *Comments*.
4. To view one piece of information at a time, click the eye icon next to the text field for each detail.

## Disable a provider

1. On the **OpenID Providers** report page, locate the provider you want to update.
2. Click the **Actions** button and select **Disable**.
2. In the confirmation modal, click **Yes**.
3. The **Provider Inactivated** message will confirm the operation.

***

Do you still have questions? Reach out to the [Segura Community.](https://community.Segura.io/)
