# All operations

This document provides information about the **All Operations** report screen, which displays the operations carried out in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions**.  
2. In the side menu, select **Password operations > All operations.**

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Request password change** | Button | Directs to the screen **Request password change**. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters operations by their identification code within Segura. |
| **Username** | Text field | Filters operations by credential user name. |
| **Device** | Text field | Filters credential-related device operations. |
| **Vendor** | Dropdown menu | Filter operations by the device manufacturer. |
| **Product** | Text field | Filter operations by product from the chosen manufacturer. Also used for web session parameters. |
| **Site** | Dropdown menu | Filter operations by country, region, or business unit where the device is located. |
| **Tags** | Text field | Filter operations by device tags. |
| **Status** | Dropdown menu | Filter operations by operation status. The options are: *Scheduled, Awaiting approval, Canceled, Successful, Running, Error,* and *Expired*. |
| **Reconciliation credential** | Dropdown menu | Filter operations by the presence or absence of a reconciliation credential. The options are **Yes** and **No**. Clear the field to enable the option **All**. |
| **Operation** | Dropdown menu | Filter operations by type operation that was requested. |
| **Requester** | Text field | Filters operations by the name of the user who requested the operation. |
| **Schedule date** | Date picker | Filter operations by dminutes of scheduling the request. |
| **Execution date** | Date picker | Filter operations by minutes of the execution of the operation |
| **Show transaction details** | Checkbox | Add the fields **Template** and **Message** in the results displayed in the report. |

## Report fields

* **Checkbox:** check or uncheck selected operations.  
* **ID.**  
* **Username.**  
* **Device.**  
* **Product.**  
* **Site.**  
* **Tags.**  
* **Credential type.**  
* **Status.**  
* **Operation.**  
* **Reconciliation credential.**  
* **Schedule date.**  
* **Execution date.**  
* **Last attempt:** date and time of the last attempt to execute the operation.  
* **Attempts:** number of attempts that were made.  
* **Template**: the template used in execution. This field will only be displayed when the **Show transaction details** check box is selected at the time of the search.  
* **Message**: return message from execution. This field will only be displayed when the **Show transaction details** check box is selected at the time of the search.  
* **Requester.**  
* **Actions:** available actions will be displayed according to the registration status.  
  * **Request immediate execution:** immediately performs the operation.  
  * **Cancel operation**: cancels the execution of the operation.  
  * **Edit credential**: opens the [Credential registration](/v4/docs/pam-credential-how-to-set-up-a-credential-in-Segura) screen.  
  * **Edit device**: opens the [Device registration](/v4/docs/pam-device-configure-device) screen.  
  * **Restart execution:** restarts the execution of the operation.  
  * **View attempts:** open the **Operation details** screen.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Request password change - registration screen

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Credential** | Dropdown menu | Yes | List of credentials available for requesting a password change. |
| **Schedule date** | Date picker and time picker. | Yes | Date and time that the password change will be performed. |

---
### Operations details screen

| **Item** | **Description** |
| :---- | :---- |
| **Credential Type/Name and Device** | The type and name of the credential and the device on which the operation was performed. |
| **Requester** | Name of the user who made the request. |
| **Request date** | Date and time of the operation request. |
| **Schedule date** | Date and time of scheduling the operation. |
| **Operation** | Type of operation that was performed. |
| **Status** | Operation status. |
| **Number of attempts** | Information about the attempt that was made and the operation log. The data presented are: *Template*, *Version*, *Start*, *End*, *Error,* and *Logs*. |

:::(info) (**Info**)
In the case of operations already carried out, the **View password** button will be available.
:::