# Synchronized users

This document provides information about the **Synchronized Users report screen,** which displays information about the synchronization of LDAP/AD users.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> Synchronized users.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text Field | Filters by the user code in Segura. |
| **Name** | Text Field | Filters by user name. |
| **Username** | Text Field | Filters by the user's username in Segura |
| **Enabled in group** | Dropdown menu | Filters the registers by their activation state. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report Fields
* **ID**  
* **Username**  
* **Name**  
* **Group**: shows which synchronization group the user belongs to.  
* **New**: date of first synchronization.  
* **Update**: shows the date of the last update.  
* **Disabled**: shows whether the user is enabled or disabled on the AD server.  
* **Enabled in the system**: indicates the user's status in Segura.  
*  **Actions**:  
  * **View user details**: opens the window
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::