# User roles

In this document, you’ll find all the information about the Roles report, which displays information about user roles.

## Access path

* On senhasegura, in the upper-left corner, click **Grid Menu**, represented by nine squares, and select **Settings**.  
* In the side menu, select **User Management \> Roles**.

## Top bar

| Item | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon. Shows or hides the search fields present on the screen. |
| **Refresh** | Represented by the counterclockwise arrow icon. Refreshes the page. |
| **Show actions** | Represented by the three vertical dots icon. Displays possible actions for the page. |
| **New** | Opens the **Roles** window to register a new role. |
| **Print report** | Represented by the printer icon. Opens a new page to print the report. |
| **Export CSV** | Represented by the paper sheet icon, downloads the report. |
| **Schedule report** | Represented by the clock icon. Opens the window to schedule the report. |

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters according to the role's identification code. |
| **Type** | Drop-down menu. Filters according to the type of registered role. Can be *Built-in* or *Custom*. |
| **Name** | Text field. Filters according to the role name. |
| **Enabled** | Radio button. Filters by the role status in senhasegura. Can be **Yes** or **No**. |

## Report fields

* **ID**.  
* **Name**.  
* **Type**.  
* **Description**: provides the role description, as registered in senhasegura.  
* **Enabled**.  
* In the **Action** column, you have four options:  
  * **Details**, represented by the magnifying glass icon, open the **Role detail** window.  
  * **Edit**: represented by the pencil and paper icon, opens the **Role** window.  
  * **Clone**: represented by two paper sheets, clones the role.  
  * **Delete**: represented by the trash can icon, deactivates the role.

## Role Window

When clicking on **Edit** or **New**, you’ll be directed to the **Roles** window. This window is divided into three tabs: *Settings, Permissions*, and *Users*.

### Settings Tab

| Item | Description |
| :---- | :---- |
| **Name** | Text field. Name of the role in senhasegura. |
| **Enabled** | Radio button. Determines if the role will be created active or inactive. Options are **Yes** or **No**. |
| **Description** | Text field. Description of the role in senhasegura. |

### Permissions Tab

| Item | Description |
| :---- | :---- |
| **Permission \+** | Opens the Permission modal. |
| **Permission** | Permission identifier. |
| **Type** | Type of permission. |
| **Module** | Module to which the permission belongs. |
| **Description** | Description of the permission. |

## Permission Modal

### Search fields

| Item | Description |
| :---- | :---- |
| **Permission** | Text field. Filters according to the permission identifier as registered in senhasegura. |
| **Type** | Drop-down menu. Filters according to the type of permission. |
| **Module** | Drop-down menu. Filters according to the module to which the permission belongs. |
| **Description** | Text field. Filters according to the permission description. |

### Report fields

* **Permission.**  
* **Type.**  
* **Module.**  
* **Description.**

### Users Tab

| Item | Description |
| :---- | :---- |
| **Users \+** | Opens the System Users modal. |
| **ID** | User code in senhasegura. |
| **Name** | User name in senhasegura. |
| **Username** | Username of this user in senhasegura. |
| **E-Mail** | The user's email address as registered in senhasegura. |
| **Creation type** | Type of user creation. |
| **Department** | Department to which the user belongs. |
| **Added by** | Name of the user who added the user in question. |
| **Added on** | Date when the user in question was added. |

## System Users Modal

### Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters according to the user code in senhasegura. |
| **Name** | Text field. Filters according to the user name in senhasegura. |
| **Username** | Text field. Filters according to the username in senhasegura. |
| **E-Mail** | Text field. Filters according to the user's email in senhasegura. |
| **Creation type** | Text field. Filters according to the type of user creation in senhasegura. |

### Report fields

* **ID.**  
* **Name.**  
* **Username.**  
* **E-Mail.**  
* **Creation type.**

## Role Detail Window

When clicking on **Details**, you will be directed to the **Role detail** window. Like the **Role** window, the **Role detail** window is divided into three tabs: *Settings, Permissions*, and *Users*.

### Settings Tab

| Item | Description |
| :---- | :---- |
| **Name** | Role name. |
| **Enabled** | Indicates the role status. Can be **Yes** or **No**. |
| **Description** | Provides a description of the role, as registered in senhasegura. |

### Permissions Tab

| Item | Description |
| :---- | :---- |
| **ID** | Permission code in senhasegura. |
| **Module** | senhasegura module to which the permission belongs. |
| **Type** | Type of permission. |
| **Permission** | Permission identifier |
| **Description** | Description of the permission. |

### Users Tab

| Item | Description |
| :---- | :---- |
| **Name** | Name of the user using the role. |
| **Username** | Username of the user using the role. |
| **E-mail** | Email address of the user using the role. |

:::(info) (Info)  
For an overview of all roles available in senhasegura, access the complete list of roles in the [Roles](/v3-33/docs/roles) document.
:::