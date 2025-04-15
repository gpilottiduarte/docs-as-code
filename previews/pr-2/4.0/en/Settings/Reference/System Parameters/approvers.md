# Approvers

This document provides information about the **Approvers** report screen, which displays the users registered as approvers in Segura.

## **Path to access**
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Access control \> Manage approvers.**

## **Actions menu**
| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Approvers** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## **Search fields**
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the approvers by their identification code within Segura. |
| **Module** | Dropdown menu | Filters the approvers by the module the approver is registered in. The options are: *Executions*, *EPM*, *PAM Core*, *User management* and *DevOps Secret Manager*. Clear the field to enable the **All** option. |
| **Name** | Text field | Filters the approvers by their name. |
| **Username** | Text field | Filters the approvers by their username in Segura. |
| **Level** | Dropdown menu | Filters the approvers by the level assigned to the approver. The options are: 1, 2, and 3\. Clear the field to enable the **All** option. |
| **Added by** | Text field | Filters the approvers by the username of the person who registered the approver. |
| **Added on** | Date picker | Filters the approvers by the period in which they were registered. |

## **Report fields**
* **ID.**  
* **Module.**  
* **Name.**  
* **Username.**  
* **Level.**  
* **Added by.**  
* **Added on.**  
* **Changed by:** name of the user who changed the record.  
* **Changed in:** date and time when the record was changed.  
* **Actions:**  
  * **Disable:** deactivates the approver. In the confirmation box, click **Yes** to confirm the action.
:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## **Approvers screen**
This screen provides the necessary information for registering an approver.
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Module** | Dropdown menu | Yes | Segura module in which the approvers will be registered. |
| **Approvers** | Table | Yes | Data of each member added as an approver, containing the *checkbox*, *ID*, *Name*, *Username*, *E-mail*, and *Department* fields. |
| **Add/Remove selected** | Button | Yes | Opens the list of Segura users who have the role of approver to be added. |
