# Password changes

This document provides information about the **Password changes** report screen, which shows the list of all the operations made on the credentials with the password change configuration enabled.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Audit > Credentials > Password changes.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions**.  
2. In the side menu, select **Password operations > All operations.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Request password change** | Button | Directs to the **Request password change** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the requests by their identification code within Segura. |
| **Username** | Text field | Filters the requests by credential username. |
| **Device** | Text field | Filters requests by the credential associated. |
| **Vendor** | Dropdown menu | Filters the requests by device type manufacturer. |
| **Product** | Text field | Filters the requests by device model. |
| **Site** | Dropdown menu | Filters the requests by the name of the site associated with the device. |
| **Tags** | Text field | Filter the requests by tags registered in the credential. |
| **Status** | Dropdown menu | Filters the requests by the state they are in. The options are: *Scheduled*, *Awaiting approval*, *Canceled*, *Successfully done*, *Running*, *Error* and *Expired*. |
| **Reconciliation credential** | Dropdown menu | Filters the requests by whether or not to have an associated reconciliation credential. The options are **Yes** and **No**. |
| **Operation** | Dropdown menu | Filters the requests by the type of operation performed. |
| **Requester** | Text field | Filters the requests by the module requesting the exchange. |
| **Schedule date** | Date picker | Filters the requests by the period in which the exchanges were scheduled. |
| **Execution date** | Text field | Filters the requests by the period in which they were executed. |
| **Show transaction details** | Checkbox | Filters requests by the template used to exchange and the execution return message. When using this option, two columns with information related to each field are added to the report. |

## Report fields

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
* **Last attempt.**  
* **Attempts.**  
* **Requester.**  
* **Actions:** the available options will depend on whether the request is being executed or not.  
  * Register already executed:  
    * **Edit credential:** opens the [Credential](/v4/docs/pam-credential-credentials-registration) screen to make the necessary changes.  
    * **Edit device:** opens the [Device](/v4/docs/pam-device-device-registration) screen to make the necessary changes.  
    * **Restart execution:** when selected the request will restart immediately.  
    * **View attempts:** opens the **Operation details** screen.  
  * Register running:  
    * **Request immediate execution:** select this option for the request to be executed immediately.  
    * **Cancel operation:** cancels the request to execute the password change.  
    * **View attempts:** opens the **Operation details** screen.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Request password change screen

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Credential*** | Dropdown menu | Yes | List of credentials with auto-switch configuration configured. |
| **Schedule date** | Date and time picker | Yes | Schedule the date and time that the execution will take place. |

---
### Operation details screen

| **Item** | **Description** |
| :---- | :---- |
| **Credential** | Information of the credential’s type and username and the device’s name. |
| **View password** | Opens the View credential screen. |
| **Requester** | The module requesting the execution. |
| **Request date** | Date the request was made. |
| **Scheduling date** | Date the execution was scheduled. |
| **Operation** | The type of operation requested to be performed. |
| **Status** | The state of the execution. |

#### Attempts section

| **Item** | **Description** |
| :---- | :---- |
| **Template** | The template selected to be used in the attempts. |
| **Version** | The version number of the run. |
| **Start** | Date and time the attempt started. |
| **End** | Date and time of the end of the attempt. |
| **Error** | Information on whether or not there was an error during the attempt. |
| **Logs** | Information with logs generated about the attempt. |