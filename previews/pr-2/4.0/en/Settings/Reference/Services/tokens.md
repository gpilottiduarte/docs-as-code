# Tokens

This document provides information about the **Tokens** report, which displays information about user tokens that are used for authentication in Segura API queries.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Services \> API \> Tokens.**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search Fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **Client** | Text Field | Filters by the token client name. |
| **Token** | Text Field | Filters by the token value. |
| **Limited access** | Dropdown menu | Filters the registers by their activation state. The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Expiration** | Date picker | Filters the registers by their expiration date. |

## Report Fields
* **ID:** token code in Segura.  
* **Client**  
* **Token**  
* **Limited access**  
* **Expiration:** shows the expiration date of the token in the format `DD/MM/YYYY HH:MM`.  
* **IPs:** IP addresses that are allowed to the token.  
* **Resources:** resources associated with the token.
:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.
:::

