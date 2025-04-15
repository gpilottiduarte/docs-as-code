# Identity management providers (IGA)

This document provides information about the **Identity management providers** screen, which presents information about the IGA providers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Identity management (IGA) \> Providers.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Register Identity Management Provider** window. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the provider's registration code in Segura. |
| **Name** | Text field | Filters by the name of the provider in Segura. |
| **Tags** | Text field | Filters by the tags associated with the provider. |
| **Protocol** | Dropdown menu | Filters by the provider's authentication protocol. |
| **Registration Date** | Date picker | Filters according to the selected period. |
| **Enabled** | Dropdown menu | Filters by the role status in Segura. It can be **Yes** or **No**. |

## Report fields
* **ID**  
* **Name**  
* **Tags**.  
* **Protocol**.  
* **Authentication method**: indicates the authentication method used by the provider.  
* **Registration Date**  
* **Enabled**  
* **Add users do Domum**?: indicates whether the authentication provider performs synchronization of users with Segura Domum.  
* **Actions**  
  * **Edit provider**: opens the **Register Identity Management Provider** window in edit mode.  
  * **Provider details**: opens the provider breakdown window.  
  * **Delete provider**: deletes the provider.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Register Identity Management Provider
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Name of the authentication provider. |
| **Protocol** | Dropdown menu | Yes | Authentication protocol used by the provider. |
| **Add users to Domum?** | Dropdown menu | Yes | Indicates which users will be synchronized with **Segura Domum.** |
| **Enabled** | Radio button | Yes | Indicates whether the provider is active. It can be **Yes** or **No**. |
| **Description** | Text field | No | Description of the authentication provider. |
| **Tags** | Text field | No | Tags associated with the authentication provider. |
| **Authentication method** | Dropdown menu | Yes | Indicates which authentication method the provider is using. |
| **Date/Time Expiration**  | Date picker | No | Indicates the expiration date and time. |
| **Allowed IPs (Put \* to allow any IP)** | Text field | No | Indicates which IPs are allowed on the provider. |
| **Add** | Button | No | Adds an entry below the IP logs. |
| **Address** | Text field | No | Indicates the allowed IP address. |
| **Checkbox** | Checkbox | No | Selects all records displayed on the screen. |
| **Allowed HTTP referers (empty list for any source)** | Text field | No | Indicates which referrers are allowed on the provider. |
| **Add** | Button | No | Adds an entry below the IP logs. |
| **REFERER** | Text field | No | Indicates the HTTP Referers, which will be allowed to authenticate. |
| **Checkbox** | Checkbox | No | Selects all records displayed on the screen. |

## Register Identity Management Provider
| Item | Type | Description |
| :---- | :---- | :---- |
| **Provider** | Text field | Name of the authentication provider. |
| **Authentication method** | Text field | Authentication method used by the provider. |
| **Status** | Text field | Provider status in Segura. |
| **Description** | Text field | Description of the provider in Segura. |
| **Tags** | Text field | Provider identification tags in Segura. |
| **Base URL** | Text field | Provider base URL. |
| **Token URL** | Text field | URL to the provider's authentication token. |
| **Client ID** | Text field | Client identification. |
| **Client Secret** | Text field | Client Secret. |

## Provider Details

In the **Providers** report, available via **Settings \> Provisioning \> Identity Management (IGA) \> Providers**, you can click on **Provider Details** in the **Action** column to open the **Register Identity Management Provider**, which contains the following fields:

| Item | Type | Description |
| :---- | :---- | :---- |
| **Provider** | Text field | Authentication provider used. |
| **Authentication method** | Text field |  Authentication method used |
| **Status** | Text field | Activation status at the time of inquiry. It can be Enabled or Disabled. |
| **Description** | Text field | Description of provider. |
| **Tags** | Text field | Tags related to the provider. |
| **Base URL** | Text field | Endpoint for request. For example: `https://dominio.com/iso/scim/v2` |
| **Token URL** | Text field | Endpoint to generate the authentication token. For example: `https://dominio.com/iso/oauth2/token` |
| **Client ID** | Text field | Customer identification value. Used for queries via API. |
| **Client Secret** | Text field | Value of the client's secret. Used for queries via API. |