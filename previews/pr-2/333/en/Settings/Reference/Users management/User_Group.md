# User Group

In this document, you'll find all the information about the **User Group** report, which displays information about user groups in senhasegura.

## Access path

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> User Groups**.

## Top bar

| Item | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon. Shows or hides the search fields present on the screen. |
| **Refresh** | Represented by the counterclockwise arrow icon. Refreshes the page. |
| **Show actions** | Represented by the three vertical dots icon. Displays possible actions for the page. |
| **New User group** | Represented by the plus sign. Opens the **User Group** window. |
| **Print report** | Represented by the printer icon. Opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, downloads the report. |
| **Schedule report** | Represented by the clock icon. Opens the window to schedule the report. |

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters by the user group code in senhasegura. |
| **Name** | Text field. Filters by the user group name in senhasegura. |
| **Registration date** | Composed of two fields. The first opens a calendar for selecting the initial date of the user group registration in senhasegura. |
| **until** | Composed of two fields. The first opens a calendar for selecting the final date of the user group registration in senhasegura. |
| **Enabled** | Drop-down menu. Select **Yes** or **No** to filter according to the user group status in senhasegura. |

## Report fields

* **ID**.  
* **Name**.  
* **Registration date**: displays the user group registration date in the format `DD/MM/YYYY HH:MM`.  
* **Enabled**.  
* **Synchronization group**: refers to the name of the Active Directory synchronization group related to the user group.  
* In the **Action** column, you have the option **Update User group**.   
  :::(info) (Info)   
  The report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.   
  :::

## User Groups Window

:::(warning) (Attention)  
The fields in the **User Group** window are the same as in the **Update User group** window.  
:::

When selecting the **New User group** option in the top bar, you will be directed to the **User Group** window, which contains the following fields:

### Settings Tab

| Item | Description |
| :---- | :---- |
| **Name** | Text field. Fill in with the name of the user group. |
| **Status** | Radio button. Select the status of the user group at the time of creation. |
| **Description** | Text field. Fill in with a description of the user group being created. |

### Users Tab

| Item | Description |
| :---- | :---- |
| **Plus sign** | Opens the System Users modal. |
| **Trash can icon** | Removes the added user. |
| **ID** | User code in senhasegura. |
| **Name** | User name in senhasegura. |
| **Username** | Username in senhasegura. |
| **E-Mail** | User's email address in senhasegura. |
| **Creation type** | User creation type. |
| **Added by** | Name of the user who added this user to the user group. |
| **Added on** | Date when this user was added to the user group. |

## System Users Modal

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters by the user's registration code in senhasegura. |
| **Name** | Text field. Filters by the user's name registered in senhasegura. |
| **Username** | Text field. Filters by the username registered in senhasegura. |
| **E-Mail** | Text field. Filters by the user's email address registered in senhasegura. |
| **Creation type** | Text field. Filters by the user's creation type in senhasegura. |

## Report fields

* **ID.**  
* **Name.**  
* **Username.**  
* **E-Mail.**  
* **Creation type.**

### Access Group Tab

| Item | Description |
| :---- | :---- |
| **Plus sign** | Opens the Access Groups modal. |
| **Trash can icon** | Removes the added access group. |
| **ID** | Access group registration code in senhasegura. |
| **Name** | Name of access group. |
| **Type** | Access group type in senhasegura. |
| **Added by** | Name of the user who added the access group to the user group. |
| **Profile** | Drop-down menu to select the profile for the access group. The options are *User*, *Approver*, and *User and Approver*. |
| **Approval** | Drop-down menu to select the approver level for the access group. Options are *Level 1*, *Level 2*, and *Level 3*. |

## Access Groups Modal

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters by the access group code in senhasegura. |
| **Name** | Text field. Filters by the access group name in senhasegura. |
| **Type** | Text field. Filters by the module to which the access group is linked. |

## Report fields

* **ID.**  
* **Name.**  
* **Type.**