# Users

This document provides information about the **Users** report screen, which displays information about Segura users and enables interaction with various user management functionalities.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User management \> Users.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Add user** screen. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the user identification code within Segura. |
| **Name** | Text field | Filters by the user's personal name in Segura. |
| **Username** | Text field | Filters by the user's username in Segura. |
| **Department** | Dropdown menu | Filters by the departments registered in Segura. |
| **E-mail** | Text field | Filters by the email address registered in Segura. |
| **Creation type** | Dropdown menu | Filters by the type of user creation. |
| **Enabled** | Dropdown menu | Filters by the user's activation status in Segura. |

## **Report Fields**
* **ID**  
* **Name**  
* **Username**  
* **E-mail**  
* **Custom code.**  
* **Creation type**  
* **Created in:** displays the user's creation date in the format DD/MM/YYYY HH:MM.  
* **Last login:** displays the date of the user's last login in the format DD/MM/YYYY HH:MM.  
* **Enabled**  
* **Deactivation date:** displays the date when the user’s account was disabled in the format DD/MM/YYYY HH:MM.  
*  **Actions**:  
  * **Edit:** opens the **Add user** screen in edit mode.  
  * **History:** opens the **User history** window.  
  * **Forget user:** disables the account.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click on the forward buttons at the end of the report.  
:::

## Add user screen

### Settings tab
This section provides information about the **Settings** tab.
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | User's personal name in Segura |
| **Username** | Text field | Yes | User's username in Segura |
| **Set current password** | Toggle button | No | Enables/disables the option to set a password at the time of user registration.  **Default:** disabled. |
| **New password** | Text field | No | User's password in Segura |
| **Generate** | Button | No | Generates a random password based on the previously defined criteria. |
| **Configure** | Button | No | Sets the password’s criteria: *Password length, Uppercase, Lowercase, Numbers, and Symbols*. |
| **Status** | Radio buttons | No | Indicates the activation status in the user’s creation.   |
| **User group** | Dropdown menu | No | Selects the user group to which the user will belong. |

### Roles tab
This section provides information about the **Roles** tab.
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Opens the **Roles** modal. |
| **Users** | Table | No | Lists the users added and their information: *Role, Built-in,* and *Description.* |
| **Checkbox** | Checkbox | No | Selects all records displayed on the table and enables the **Remove selected** button. |

### Roles Modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Searches users based on the characters typed. |
| **Checkbox** | Checkbox | Selects all records displayed on the screen and enables the **Remove selected** button. |
| **ROLE** | Text field | Role name. |
| **BUILT-IN** | Text field | Indicates whether the role was inserted by the user or if it is a default role of Segura (Built-In). |
| **DESCRIPTION** | Text field | Role description. |

### Access policies tab
The **Access Group** tab is divided according to the modules. Each module comprises a session of the tab composed of checkboxes that refer to the access groups registered in Segura. In this tab, the access groups registered in Segura will be presented.
| Item | Description |
| :---- | :---- |
| **Title** | Each module is presented separately, with its name in bold. |
| **Checkboxes** | Selects the access group to which the user will be part of. It can be more than one. Each access group is presented below the module title and according to the name registered in Segura. |

### Review section
This tab displays a summary of the new user’s registration settings with the **Back** and **Save** buttons.