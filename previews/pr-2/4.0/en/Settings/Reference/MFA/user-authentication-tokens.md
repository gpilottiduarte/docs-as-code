# User authentication tokens

This document provides information about the **User authentication tokens report** screen that displays information about the user 's MFA authentication tokens.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **MFA \> User authentication tokens.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Delete tokens** | Button | Deletes the selected tokens. |
| **Delete tokens and disable users** | Button | Deletes the selected tokens and users. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **User** | Text field | Filters tokens by the name of their users. |
| **Username** | Text field | Filters tokens by their users’ usernames. |
| **Validated** | Dropdown menu | Filters tokens by their activation state. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report fields
* **Checkbox:** used for the batch operations.  
* **User**  
* **Username**  
* **Set on**: displays the date when the token was set. Format: `DD/MM/YYYY` and `HH:MM`. 
* **Validated**.  
* **Rely on IP**: trusted IP address that doesn’t require the use of a token.  
* **Trust to**: maximum date for access without a token. Format: `DD/MM/YYYY` and `HH:MM`.
* **Actions:**  
  * **Delete token**: deletes the user's token from Segura.
:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.
:::