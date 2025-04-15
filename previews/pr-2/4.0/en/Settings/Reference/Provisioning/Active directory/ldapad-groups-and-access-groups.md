# LDAP/AD Groups x User groups

This document provides information about the **AD/LDAP Groups x Access Groups report screen.**

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> AD/LDAP Groups x Access Groups.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Add,* which opens the **LDAP/AD Groups window***;* *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Filters by the name of the group in Segura. |
| **Server** | Text field | Filters by the address of the LDAP/AD server. |
| **User Groups** | Text field | Filters by the group registered by the user on the server and which will serve as a bridge with the Segura groups. |
| **Access Group (Approver)** | Text field | Filters by the groups that are set as Approver. |
| **Access Group (User)** | Text field | Filters by the groups that are set as User. |
| **Active synchronization** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the **All** option. |
| **Enabled** | Dropdown menu | Filters by the group synchronization status in Segura. It can be **Yes** or **No**. |

## Report fields
* **ID.**  
* **Name.**  
* **Server.**  
* **User Groups.**  
* **Last synchronization.**  
* **Active synchronization.**  
* **Access Group (Approver).**  
* **Access Group (User).**  
* **Enabled.**  
*  **Actions**:  
  * **Edit group**: opens the **LDAP/AD Groups** window in edit mode.  
  * **Users:** opens the **Synchronized users** form.  
  * **Synchronization log:** opens the **AD/LDAP group synchronization** logs report.  
  * **Synchronization test:** opens the **LDAP/AD group synchronization simulation** form to test the group synchronization.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::