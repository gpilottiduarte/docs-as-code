# OpenID providers

This document provides information about the **Providers** report screen, which displays information about the openID providers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication \> OpenID \> Providers.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New provider** | Button | Directs to the **Provider Registration** screen**.** |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the OpenID provider identification code within Segura. |
| **Type** | Dropdown menu | Filters by the type of OpenID provider. |
| **Client ID** | Text field | Filters by the client ID in Segura. |
| **Redirect URL** | Text field | Filters by the OpenID provider redirect URL. |
| **Enabled** | Dropdown menu | Filters OpenID providers by their activation state in Segura.  |
| **Environment** | Dropdown menu | Filters by the environment in which the provider will be used. |

## Report fields
* **ID.**  
* **Type.**  
* **Client ID.**  
* **Redirect URL.**  
* **Status:** indicates the provider’s activation state in Segura.  
* **Environment**  
* **Actions:**  
  * **Update provider**: opens the **Provider Registration** window in edit mode.  
  * **Provider details**: opens the provider details screen.  
  * **Delete provider**: disables the provider.

## **Provider registration**
This section provides information about the **Provider registration** screen.
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Type** | Dropdown menu | Yes | Defines the OpenID provider type |
| **Enabled** | Radio button | Yes | Selects the provider’s activation state. |
| **Environment** | Radio button | Yes | Selects the provider’s environment. Options are **Local** and **Domum Remote Access**. |
| **Client ID** | Text field | Yes | Defines the Client ID of the OpenID provider. |
| **Client secret** | Text field | Yes | Defines the application’s client secret in the OpenID provider. |
| **Domain or public IP for URL Redirection** | Text field | Yes | Defines Segura’ public domain or IP address. Used by the OpenID provider to redirect the user back to their application after authentication. |
| **Redirect URL** | Text field | Yes | Defines the specific endpoint in the client application to which the OpenID provider redirects the user after authentication. This endpoint is responsible for receiving the authorization code or access token. |
| **Comments** | Text field | No | Enters comments, such as notes, explanations and others. |
| **OpenID endpoint configuration** | Text field | No | Defines the OpenID endpoint configuration. If Google OpenID is chosen, the field will be automatically filled with Google information. |
| **Authorization Endpoint** | Text field | No | Defines the URL provided by the OpenID provider to which the application sends the authorization request. |
| **Token endpoint** | Text field | No | Defines the URL provided by the OpenID provider to which the application sends the request to exchange the authorization code for an access token. |
| **Userinfo endpoint** | Text field | No | Defines the URL provided by the OpenID provider to which the application can request information from the authenticated user's profile using the access token. |
| **JWK endpoint (mandatory if it is not in the main openid endpoint)** | Text field | No | Defines the endpoint where the application can obtain the public keys from the OpenID provider to validate the access token signature. It is mandatory if these keys are not available on the OpenID Configuration Endpoint. |
| **Additional issuers (separated by comma)** | Text field | No | Defines a list of additional issuers that are accepted by the application. Useful when the application needs to support multiple openID providers. Issuers are separated by a comma. |
