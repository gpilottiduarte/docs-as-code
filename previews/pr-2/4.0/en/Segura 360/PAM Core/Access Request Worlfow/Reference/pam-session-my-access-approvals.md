# My access approvals

This document provides information about the **My access approvals** report screen, which displays all approvals and disapprovals you granted to all the access requests made by other users.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > My access approvals**.

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu. | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the requests by its identification code within Segura. |
| **Credential** | Text field | Filters the requests by their credentials. |
| **Hostname** | Text field | Filters the requests by the device name you want to access. |
| **Requester** | Text field | Filters the requests by the name of the user who requested the access. |
| **Operation** | Text field | Filters the requests by the type of operation. |
| **Justification** | Text field | Filters the requests by the access justification given by the user. |
| **Reason** | Dropdown menu | Filters the requests by the reason why the user needs the access. The options are according to the reasons registered in Segura. |
| **Governance ID** | Text field | Filters the requests by the software identification code ITSM (IT Service Management). |
| **Request date** | Text field | Filters the requests by the date and time that the request was made. |
| **Status** | Dropdown menu | Filter the requests by request type. The options are *Pending*, *Approved*, *Rejected*, and *Expired*. Use the text field to enter the desired information. Clear the field to enable the **All** option. |
| **Expired** | Dropdown menu | Filters the requests by the expiration status of the request. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Request date.**  
* **Requester.**  
* **Credential.**  
* **Hostname.**  
* **Operation.**  
* **Governance ID.**  
* **Reason.**  
* **Justification.**  
* **Access start:** date and time when the access can be made.  
* **End of access:** date and time when the access is over.  
* **Status.**  
* **Action:**  
  * **View request**: open the [Access request](/v4/docs/pam-session-access-request-details) screen.  
  * **Reject**: open the **Disapprove request** screen. Enter a justification, and click **Reject** to reject the request.  
  * **Approve**: open the **Approve request** screen. If necessary, change the start and end access date, and click **Approve** to approve the request.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Disapprove request

| **Item** | **Description** |
| :---- | :---- |
| **Credential** | Credential the user wants to access. |
| **Requested in** | Date and time that the request was made. |
| **Desired Access** | The type of access that was requested. |
| **Justification** | The access justification given by the user. |
| **Justification*** | Justification to explain the approver’s answer. |


### Approve request

| **Item** | **Description** |
| :---- | :---- |
| **Credential** | Credential the user wants to access. |
| **Requested in** | Date and time that the request was made. |
| **Desired Access** | The type of access that was requested. |
| **Justification** | The access justification given by the user. |
| **Start Access*** | Date and time when the access starts. |
| **Access end*** | Date and time when the access ends. |

