# Providers

This document provides information about the **Providers** report screen that displays information about the multi-factor authentication providers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **MFA \> Providers.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Select the provider** window where you will be able to select one of the four available MFA providers. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the provider’s identification code in Segura. |
| **Name** | Text field | Filters by the name of the provider. |
| **Plugin** | Dropdown menu | Filters by the MFA authentication plugin. |
| **Enable** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the **All** option. |

## Report fields
* **ID**  
* **Name**  
* **Plugin**  
* **Enable**  
* **Date of creation:** informs the date of creation (registration) of the provider. Format `DD/MM/YYYY` and `HH:MM`. 
* **Actions**  
  * **Edit**: opens the **Provider Registration** screen in edit mode.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Select the provider
Clicking **New** will introduce you to these options:
* **RSA Authenticator.**  
* **Duo Security.**  
* **Radius.**  
* **AuthID.**
Each option leads to the indicated provider's registration window. The **RSA Authenticator** and **Duo Security** providers have the same registration fields.

## Provider registration
There are four authentication provider options.

### RSA Authenticator and Duo Security 
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Name of the authentication provider. |
| **Enabled** | Radio button | No | Sets the state of the provider. The options are **Yes** and **No**. |
| **Endpoint** | Text field | Yes | Provider endpoint URL. |
| **Client ID** | Text field | Yes | Client identifier provided by the provider. |
| **Key** | Text field | No | Authentication key for the provider. |

### Radius 
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Name of the authentication provider. |
| **Enabled** | Radio button | No | Provider status. It can be **Yes** or **No**. |
| **Hostname** | Text field | Yes | Hostname or IP of the Radius provider. |
| **Port** | Text field | Yes | Port for the Radius provider. |
| **Key** | Text field | No | Authentication key for the provider. |
| **Timeout (s)** | Picker | Yes | Indicates the provider's *timeout* time. |

### AuthID 
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Provider identifier name. |
| **Enabled** | Radio button | No | Provider status. It can be **Yes** or **No**. |
| **External ID** | Text field | Yes | External identifier provided by AuthID. |
| **API Key Value** | Text field | Yes | Password for authentication with AuthID. |

