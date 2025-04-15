# Provider types

This document provides information about the **Types of SAML providers** report screen for SAML authentication, which displays information about the SAML providers registered on Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication \> OpenID \> Providers.**

## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields

:::(info) (Info)  
To view all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the OpenID identification code in Segura. |
| **Type** | Dropdown menu | Filters by the type of OpenID provider. The options are *Azure, KeyCloak, Okta, and SAML provider*. |
| **Client ID** | Text field | Filters by the ClientID or EntityID of the SAML application. |
| **Enabled** | Dropdown menu | Filters by the role status in Segura. It can be **Yes** or **No**. |
| **Redirect URL** | Text field | Filters by the server redirect URL. |
| **Environment** | Dropdown menu | Filters by the environment of the OpenID provider. It can be *Local* or *Domum remote access.* |

## Report fields

* **ID.**  
* **Type.**  
* **Client ID.**  
* **Redirect URL.**  
* **Status.**  
* **Environment.**  
* **Actions**  
  * **Update provider:** directs to the **Provider Registration** window.  
  * **Delete provider:** deletes the OpenID provider.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## SAML Provider Registration

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Type** | Dropdown menu | Yes | SAML provider type options. |
| **Enabled** | Radio button | Yes | Provider status. It can be **Yes** or **No**. |
| **Environment** | Radio button | Yes | Environment to which the SAML provider will be linked. It can be **Local** or **Domum Remote Access**. |
| **Entity ID** | Text field | Yes | Field for registration of the ClientID or EntityID. |
| **SAML provider metadata URL** | Text field | Yes | Application/realm metadata URL |
| **Domain or public IP for URL Redirection** | Text field | Yes | Domain or public IP of Segura. |
| **Redirect URL** | Text field | Yes | Redirect URL. |
| **Comments** | Text field | No | Record of comments pertinent to the SAML provider. |
| **SSO Login URL** | Text field | Yes | HTTP-Redirect Bind URL for login. |
| **SSO Logout URL** | Text field | No | HTTP-Redirect Bind URL for logout. |
| **Redirect Binding Type** | Dropdown menu | No | Choose the type of **Redirect Binding** for the SAML provider. |
| **Certificate (PEM format)** | Text field | Yes | Field to paste the content of the SAML certificate. |

:::(error) (Attention)  
All configurations presented of the SAML provider must be strictly the same as those configured in the **Identity Provider (IDP)** to ensure the proper functioning of the SAML. Divergences will result in authentication failures.  
:::