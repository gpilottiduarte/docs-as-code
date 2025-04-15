# Requests - Audited commands

This document provides information about the **Command execution request** report screen, where you can view all the requests for command execution, whatever the status of the request.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > Audited commands > Requests**.

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the requests by the identification number for the request. |
| **Operation** | Text field | Filters the requests by their operation type. In this case, it will always be “Command execution request”. |
| **Access group** | Text field | Filters the requests by the group the user belongs to. |
| **Requester** | Text field | Filters the requests by the name from the user that is requesting. |
| **Request date** | Text field | Filters the requests by date and time of request. |
| **Status** | Dropdown menu | Filter the requests by request type. The options are *Pending*, *Approved*, *Rejected*, and *Expired*. Use the text field to enter the desired information. Clear the field to enable the **All** option. |
| **Governance**  | Text field | Filters the requests using the identification code for ITSM software (*IT Service Management*). |
| **Reason** | Dropdown menu | Filters the requests by the reason why the user needs to execute the requested command. |

## Report fields

* **ID.**  
* **Operation.**  
* **Access group.**  
* **Requester.**  
* **Request on**.  
* **Status.**  
* **Expiration.**  
* **Governance.**  
* **Reason.**  
* **Actions:**  
  * **Details:** open the [Request Details](/v4/docs/pam-session-request-details-audited-commands) screen with all the information about the request.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::