# My execution request

This document provides information about the **My execution requests** report screen, which displays information about all your requests.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > Audited commands > My execution requests**.

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the requests by its identification code within Segura. |
| **Operation** | Text field | Filters the requests by their operation type. In this case, the type will always be “Request for command execution”. |
| **Access group** | Text field | Filters the requests by the group the user belongs to. |
| **Requester** | Text field | Filters the requests by the name of the user doing the request. |
| **Request date** | Text field | Filters the requests by date and time of request. |
| **Status** | Dropdown menu | Filter the requests by request type. Options include *Pending*, *Approved*, *Rejected*, and *Expired*. Use the text field to enter the desired information. Clear the field to enable the **All** option. |
| **Governance** | Text field | Filters the requests using the identification code for ITSM software (*IT Service Management*). |
| **Reason** | Text field | Filters the requests by the reason why the user needs to execute the requested command. |

## Report fields

* **ID.**  
* **Operation.**  
* **Access group.**  
* **Requester.**  
* **Request on:**  
* **Status.**  
* **Expiration:** date and time until which access will be possible.  
* **Governance.**  
* **Reason.**  
* **Action:**  
  * **Details:** open the [Request details](/v4/docs/pam-session-request-details-audited-commands) screen with all the information about the request.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::