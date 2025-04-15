# Tasks

This document provides information about the **Tasks** report screen which enables:

* **Administrators** to:  
  * Add, edit, and manage tasks quickly.  
  * View the complete history of each operation.  
  * Precisely control who can execute each task.  
  * Maintain a detailed record of all actions performed.  
* **Authorized users** to:  
  * Execute one-time tasks.

## Prerequisites

* System or **Task Manager** administrator permission to add and manage tasks.  
* System user permission to run tasks.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Tasks**.

---
## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Add task** screen. Available for administrators. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

::: (info) (Info)  
To view all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Filters by the task identification name. |
| **Created by** | Text field | Filters by the user who added the task. |
| **Included in** | Date picker | Filters by the period when the task was added. |
| **Status** | Dropdown menu | Filters by the task activation status. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |
| **Environment** | Dropdown menu | Filters by the environment to which the task was added. |
| **System** | Dropdown menu | Filters by the system to which the task was added. |
| **Tags** | Text field | Filters by the keywords associated with the task. |

## Report fields

* **ID:** task identification name.  
* **Name.**  
* **Included in.**  
* **Created by.**  
* **Status.**  
* **System.**  
* **Environment.**  
* **Tags.**  
* **Actions:**  
  * **Edit:** opens the **Edit task** screen. Available for administrators.  
  * **Executions:** opens the **Executions** screen. Available for administrators.  
  * **Schedules:** opens the **Schedule task** screen. Available for administrators.  
  * **Run task:** opens the **Run task** screen.  
  * **Disable:** opens a confirmation pop-up to disable the task with the **Yes** or **No** options. Available for administrators.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

### Add/Edit task screens

The **Add taks** and **Edit task** screens share the same fields and are available for **administrators**.

#### Main information tab

In this tab, **administrators** enter the task’s main information. 

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Task identification name**\* | Text field | Yes | Task identification name. |
| **Environment**\* | Dropdown menu | Yes | Environment where the task will be executed. |
| **System**\* | Dropdown menu | Yes | System where the task will be executed. |
| **Tags** | Text field | No | Keywords to categorize the task. |

#### Execution tab

In this tab, **administrators** select the plugin and the template that will execute the task. 

**Execution template section**

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Plugin** | Dropdown menu | No | Selects the plugin to execute the task.  |
| **Select a template to use**\* | Dropdown menu | Yes | Selects the template used to execute the task. |

<br> 
**Variables for execution section**  
<br> In this section, **administrators** configure dynamic variables that will be used during task execution.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Inserts a new variable and enables the fields: <br>- **Identifier**: unique name of the variable. Example: `SERVICE` <br>- **Value**: data that will be used during execution. Example: `apache2`  |
| **Select items** | Checkbox | Selects variables and enables the **Remove selected** button. |

<br>

**Credential for execution section**  
<br> In this section, **administrators** enter the credential used to authenticate to the device where the task will be executed.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Use a registered credential to access all devices** | Checkbox | Defines whether a credential registered in Segura will be used to authenticate to the device where the task will be executed. <br>**Note**: checking this box enables the **Access credential registered in the system** field. |
| **Access credential registered in the system** | Dropdown menu | Selects the credential registered in Segura to authenticate to the device where the task will be executed. |
| **Use own credential to connect** | Toggle button | Defines whether the credential used to authenticate to the device will also be used to connect to the device. |
| **Credential username** | Text field | Enters the username of a credential that is not registered in Segura. <br>**Note**: available when the **Use a registered credential to access all devices** option is not checked. |

:::(info) (Info)

When providing the **Credential username**, Segura will use this information to locate a credential with this username on each device to perform authentication.  
:::

#### Devices for execution tab

In this tab, **administrators** choose the devices where the tasks will be executed. 

| Item | Description |
| :---- | :---- |
| **Add** | Opens the **Devices** modal to select the desired devices. |
| **Select items** | Selects devices in the table and enables the **Remove selected** button. |

#### Review tab

This tab displays a summary of the task's configurations with the **Back** or **Save** buttons.

### Run task screen

On this screen, **authorized users** can request one-time task executions.

:::(info) (Info)

* The **Run task** option is available when there’s a **device** associated with the task execution.  
* The fields on this screen may be required or optional depending on the settings defined in the **Access policy**.

:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Justification** | Dropdown menu | Selects a justification to run the task, according to the options available on the **Access reasons** screen.  |
| **Governance Code** | Text field | Enters the governance code to register the request.  |
| **Reason** | Campo de texto | Enters a descriptive text to justify the task execution.  |

:::(info) (Info)
Approvers can view and manage requests assigned to them on the **My approvals** screen.  
:::
