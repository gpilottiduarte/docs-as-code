# SAML providers

This document provides information about the **Types of OpenID providers** report screen.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication \> SAML \> Providers.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New provider** | Button | Directs to the **SAML Provider Registration** screen. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the SAML provider identification code within Segura. |
| **Type** | Dropdown menu | Filters by the type of SAML provider. Options are *Azure, KeyCloak, Okta, and SAML provider*. |
| **Entity ID** | Text field | Filters by the ClientID or EntityID of the SAML application. |
| **Enabled** | Dropdown menu | Filters by the SAML provider activation state in Segura. |
| **SAML provider metadata URL** | Text field | Filters by the server metadata URL. |
| **Environment** | Dropdown menu | Filters by the environment of the SAML provider. Options are **Local** or **Domum remote access***.* |

## Report fields
* **ID.**  
* **Type.**  
* **Entity ID.**  
* **SAML provider metadata URL.**  
* **Enabled.**  
* **Environment.**  
* **Actions:**  
  * **Update provider:** opens the **SAML Provider Registration** screen.  
  * **Delete provider:** disables the SAML provider.

## SAML Provider Registration
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Type** | Dropdown menu | Yes | Selects the SAML provider type. |
| **Enabled** | Radio button | Yes | Defines the provider activation state. |
| **Environment** | Radio button | Yes | Defines the environment to which the SAML provider will be linked. The options are **Local** or **Domum Remote Access**. |
| **Entity ID** | Text field | Yes | Defines the ClientID or EntityID. |
| **SAML provider metadata URL** | Text field | Yes | Defines the application/realm metadata URL |
| **Domain or public IP for URL Redirection** | Text field | Yes | Defines Segura’s domain or public IP of Segura. |
| **Redirect URL** | Text field | Yes | Defines the redirect URL. |
| **Comments** | Text field | No | Enters comments related to the SAML provider. |
| **SSO Login URL** | Text field | Yes | Defines the HTTP-Redirect Bind URL for login. |
| **SSO Logout URL (Sign-out URL)** | Text field | No | Defines the HTTP-Redirect Bind URL for logout. |
| **Redirect Binding Type** | Dropdown menu | No | Selects the type of **Redirect Binding** for the SAML provider. |
| **Certificate (PEM format)** | Text field | Yes | Enters the content of the SAML certificate. |
:::(error) (Attention)  
All SAML provider configurations presented must be strictly the same as those configured in the **Identity Provider (IDP)** to ensure the proper functioning of the SAML. Divergences will result in authentication failures.  
:::