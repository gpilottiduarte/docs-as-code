# Executions

This document provides information about the **Executions** report screen in **Task Manager** that enables:

* Track the status of each task.  
* Quickly identify executions with errors.  
* Monitor who requested each operation.  
* Have a complete history of all actions.

## Prerequisites

* System or **Task Manager** administrator permission to add and manage tasks.


## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Executions**.

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
| **ID** | Text field | Filters by the identification code in Segura. This code is generated when the **Run task** button is clicked on the **Tasks** screen. |
| **Task** | Text field | Filters executions by task identification name. |
| **Error** | Dropdown menu | Filters executions by the presence or absence of errors. The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Processed** | Dropdown menu | Filters executions based on their processing status. The available options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Requester** | Text field | Filters by the user who requested the task execution. |
| **Request date** | Campo de texto | Filters by the period when executions were requested. |

## Report fields

* **ID:** task identification name.  
* **Task.**  
* **Total:** total number of operations performed. For example, if the task of updating software was executed on two devices, two operations were performed. Therefore, this field will show the number **2**.  
* **Processed.**  
* **Error.**  
* **Status:** status of task execution. The options are *Executed, Approved, Rejected,* and *Pending*.  
* **Requester.**  
* **Request date:** date and time when task execution was requested.  
* **Environment:** the registered environment for task execution.  
* **System:** the registered system for task execution.  
* **Tags:** keywords associated with the task.  
* **Execution type:** indicates if the task execution is **Scheduled** or **Punctual**.  
* **Actions:**  
  * **View operations:** opens the **Operations** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::