# Roles

This document provides information about the **Roles** report screen, which displays details about the roles within user management.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User Management \> Access control layer (ACL) \> Roles.**

## Action menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Roles** screen to create a new role. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification code of the role in Segura. |
| **Type** | Dropdown menu | Filters by the role type in Segura. |
| **Name** | Text field | Filters by the name of the role in Segura. |
| **Enabled** | Dropdown menu | Filters roles by their activation state in Segura.  |

## Report fields
* **ID.**  
* **Name.**  
* **Type.**  
* **Description:** description of the role in Segura.  
* **Enabled.**  
* **Actions:**  
  * **Details:** opens the **Role details** screen**.** 
  * **Edit:** opens the **Roles** screen in edit mode. 
  * **Clone**: clones a role. When a role is cloned, it receives a default name. For example, when cloning the `Default` role, which has the identifier code `1`, the new role will appear as `Default [1000] (copied from 1)`. The type of the cloned role will be set to `Custom`, and it will have the identifier code `1000`. From this value, the codes for subsequent cloned roles will be incremented by `1`.  
  * **Delete:** deletes a role.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click on the forward buttons at the end of the report.  
:::

## Roles screen
This section provides information about the **Roles** screen where users can add or edit a role in Segura.

### Settings tab
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Name of the role in Segura. |
| **Enabled** | Radio button | Yes | Indicates the activation status in the role’s creation.   |
| **Description** | Text field | No | Description of the role in Segura. |

### Permissions tab
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Opens the **Permission** modal. |
| **Permission** | Table | No | Lists the permissions added and their information: *Permission, Type, Module,* and *Description.* |
| **Checkbox** | Checkbox | No | Selects all records displayed on the table and enables the **Remove selected** button. |

### Permissions modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Searches for permissions based on the characters typed. |
| **Checkbox** | Checkbox | Selects all records displayed on the screen. |
| **PERMISSION** | Text field | The permission identifier code within Segura. |
| **TYPE** | Text field | Permission type. |
| **MODULE** | Text field | The module to which the permission belongs. |
| **Description** | Text field | Permission description. |

### Users tab
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Opens the **Users** modal. |
| **Users** | Table | No | Lists the users added and their information: *ID, Name, Username, E-mail, Creation type, Department, Added by,* and *Added on.* |
| **Checkbox** | Checkbox | No | Selects all records displayed on the table and enables the **Remove selected** button. |

### Users modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Searches for the user according to the characters typed. |
| **Checkbox** | Checkbox | Selects all records displayed on the table. |
| **ID** | Text field | Filters by the user identification code in Segura. |
| **Name** | Text field | User's personal name in Segura. |
| **USERNAME** | Text field | User's username in Segura. |
| **E-MAIL** | Text field | User's e-mail address in Segura. |
| **CREATION TYPE** | Text field | Type of user creation in Segura. |
| **DEPARTMENT** | Text field | Department to which the user is linked in Segura. |
| **ADDED BY** | Text field | User responsible for adding other users to Segura. |
| **ADDED ON** | Text field | The date when the user was added. |

### Review tab
This tab displays a summary of the new role’s registration settings with the **Back** and **Save** buttons.

## Role details
Accessible through the **Actions** button on the role.

### Settings tab
| Item | Description |
| :---- | :---- |
| **Name** | Name of the role. |
| **Enabled** | Status of the role. |

### Permissions
| Item | Description |
| :---- | :---- |
| **ID** | Code of the role on Segura. |
| **Module** | Module to which the role belongs. |
| **Type** | Tupe of the role. For example: *list, view,* or *write*. |
| **Permission** | Technical name of the permission. |
| **Description** | Description of the role. |

### Users tab
| Item | Description |
| :---- | :---- |
| **Name** | Name of the user which belongs to the role. |
| **Username** | Username of the user which belongs to the role. |
| **Email** | Email address of the user which belongs to the role. |



