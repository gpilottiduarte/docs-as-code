# My access requests

This document provides information about the **My access requests** report screen, which displays all your requests for access.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > My access requests**.

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the requests by its identification code within Segura. |
| **Operation** | Text field | Filters the requests by their operation type. |
| **Credential** | Text field | Filters the requests by their credentials. |
| **Hostname** | Text field | Filters the requests by the device name you want to access. |
| **Justification** | Text field | Filters the requests by the justification for access given by the user. |
| **Reason** | Dropdown menu | Filters the requests by the reason why the user needs the access. The options are according to the reasons registered in Segura. |
| **Governance ID** | Text field | Filters the requests using the identification code for ITSM software (*IT Service Management*). |
| **Request date** | Text field | Filters requests by date and time of request. |
| **Status** | Dropdown menu | Filter the requests by request type. The options are *Pending*, *Approved*, *Rejected*, and *Expired*. Use the text field to enter the desired information. Clear the field to enable the **All** option. |
| **Expired** | Dropdown menu | Filters the requests by the expiration status of the request. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Request date.**  
* **Requester:** the user who made the request.  
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
  * **Cancel request:** cancel the request, on the window that opens click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::