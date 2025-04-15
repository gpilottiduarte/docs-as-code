# Providers

This document provides information about the **Providers** report screen, which displays details about authentication providers.

## Path to access
1. On Segura, on the navigation bar, hover over the **Product Menu** and select **Settings**.  
2. In the side menu, select **Authentication \> Providers**.

## Actions menu
| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields
| Item | Type | Description |
| ----- | ----- | ----- |
| **Name** | Text field | Filters by the authentication provider name in Segura. |
| **Enabled** | Dropdown menu | Filters providers by their activation state in Segura. |

## Report Fields
* **ID**: the provider’s identification code in the system.  
* **Provider**: name of the authentication provider.  
* **Order**: number that indicates the priority sequence of the authentication providers used by the system.  
* **Enabled**..  
* **External Authentication**: indicates whether the authentication method uses third-party services to verify credentials. Providers classified as **Yes** redirect the user to an external interface, while those classified as **No** perform the authentication process internally.  
* **Actions**:  
  * **Disable**: disables an authentication provider.  
  * **Enable**: enables an authentication provider.  
  * **Edit**: opens the **Authentication Providers** screen in edit mode.

## Authentication provider
This section provides information about the **Authentication provider** screen where users can edit an authentication provider.
| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name** | Text field | Yes | Name of the authentication provider. |
| **Order** | Quantity input | Yes | Indicates the authentication provider's priority. |

