# User group

This document provides information about the **User group** report screen, which displays information about user groups.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User management \> User group.**

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **New User group** | Button | Directs to the **User group** screen. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the user group identification code within Segura. |
| **Name** | Text field | Filters by the user group name. |
| **Registration Date** | Date picker | Filters by the period of in which the user group was created. |
| **Enabled** | Dropdown menu | Filters by the user group activation state.  |

## Report fields
* **ID.**  
* **Name.**  
* **Registration date.**  
* **Enabled.**  
* **Synchronization group:** the *Active Directory* sync group name related to the user group.  
* **Actions:**  
  * **Update user group**: opens the **User Group** screen in edit mode.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click on the forward buttons at the end of the report.  
:::

## User Group screen
This section provides information about the **User Group** screen.

### Settings tab
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | User group name. |
| **Status** | Radio buttons | Yes | Indicates the activation status in the user’s update.   |
| **Description** | Text field | No | User group description. |

### Users tab
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Opens the **Users** modal. |
| **Users** | Table | No | Lists the users added to the group and their information: *ID, Name, Username, E-mail, Creation type, Added by*, and *Added on.* |
| **Checkbox** | Checkbox | No | Selects all records displayed on the table and enables the **Remove selected** button. |

### Users modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Searches for the user based on the characters typed. |
| **Checkbox** | Checkbox | Selects all records displayed on the table. |
| **ID** | Text field | Filters by the user identification code in Segura. |
| **Name** | Text field | User's personal name in Segura |
| **USERNAME** | Text field | User's username in Segura |
| **E-MAIL** | Text field | User's e-mail address in Segura |
| **CREATION TYPE** | Text field | Type of user creation in Segura |

### Access Group tab
| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Opens the **Groups** modal. |
| **Groups** | Table | Lists the user groups added and their information: *ID, Name, Type, Added by, Profile,* and *Approval.* |
| **Checkbox** | Checkbox | Selects all records displayed on the table and enables the **Remove selected** button. |

### Groups modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Searches groups according to the characters typed. |
| **Checkbox** | Checkbox | Selects all records displayed on the table. |
| **ID** | Text field | Identification code of the user group in Segura. |
| **NAME** | Text field | Name of the user group in Segura. |
| **TYPE** | Text field | Segura module to which the user group is linked. |

### Review tab
This tab displays a summary of the new user group’s registration settings with the **Back** and **Save** buttons.