# Operations

**Operations** refer to specific activities executed by **Task Manager**. For example, when performing a task that involves password changes across multiple devices, each execution of this task on an individual device is considered a distinct operation. Thus, if the password change is performed on five devices, this results in five separate operations, one for each device. This approach ensures:

* Detailed control.  
* Precise monitoring of all actions performed.  
* Security and compliance in activities managed by **Task Manager**.

This document provides information about the **Operations** report screen, which displays the operations for each task execution in **Task Manager**.

## Prerequisites

* System or **Task Manager** administrator permission to add and manage tasks.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Operations**.

---

## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

::: (info) (Info)  
To view all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters operations by their identification code in Segura.  |
| **Device** | Text field | Filters operations by the device on which they were executed. |
| **Status** | Dropdown menu | Filters operations by their status. The options are *Scheduled, In execution, Successfully completed, Error, Cancelled, Waiting approval,* and *Expired*. Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Task name:** name of the task in which the operation was performed.  
* **Environment:** the registered environment for task execution.  
* **System:** the registered system for task execution.  
* **Tags:** keywords associated with the task.  
* **Device.**  
* **Status.**  
* **Result:** the operation result.  
* **Actions:**  
  * **View details:** opens the **Operation details** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

### Operation details screen
The **Operation Details** screen of **Task Manager** displays the following details of the selected operation:
| Item | Description |
| :---- | :---- |
| **Credential and device information** | Credential type, credential username, device name, and device IP address. Ex.: **Local administrator \- usrudonopass \[centos (10.66.33.17)\]** |
| **Requester** | - **Punctual requests**: displays the name of the user requesting the operation. <br>- **Scheduled executions**: displays the value **Task Manager \- Executor**. |
| **Request date** | Date and time when the request was made. |
| **Schedule date** | Date and time for which the operation was scheduled. For punctual operations, the date and time refer to the moment when the user requested the execution. |
| **Operation** | Operation name. By default, **Task Manager**. |
| **Status** | Operation status. The options are _Scheduled, In progress, Successfully completed, Error, Cancelled, Awaiting approval_ and _Expired_. |

#### Attempt records
This section displays the operation execution attempts and their data.
For example, **1st attempt, 2nd attempt**, and so on.
| Item | Description |
| :---- | :---- |
| **Template** | Name of the template used in the operation. |
| **Version** | Template version number. |
| **Start** | Operation start date and time. |
| **End** | Operation end date and time. |
| **Error** | Indicates the presence or absence of error during operation execution. The options are **Yes** or **No**. |
| **Message** | Message indicating the operation status. Ex.: "**task manager operation executed successfully**". |
| **Logs** | Displays the records of steps executed in the operation. It's also possible to view the logs in a new browser tab by clicking the external link icon. |
