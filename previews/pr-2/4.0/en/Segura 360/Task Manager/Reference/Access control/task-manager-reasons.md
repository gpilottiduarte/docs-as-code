# Access reasons

The **Access reasons** in **Task Manager** are the layer that adds context and transparency to each execution request.  
This document provides information about the **Access reasons** report screen, which enables administrators to:

* Define standardized reasons for task execution.  
* Create a transparent record of access justifications.  
* Improve audit and traceability of actions.
  
::: (warning) (Attention)  
The search field and **Type** column don’t reflect current settings, since all **Task Manager** access reasons are of type **Task execution**.  
:::

## Requirements

* System or **Task Manager** administrator permission to add and manage tasks.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Access control \> Access reason**.

---
## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Add access reason** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters access reasons by their identification code in senahsegura. |
| **Name** | Text field | Filters access reasons by their identification name. |
| **Type** | Dropdown menu | Filters access reasons by type. The options are **Task execution** and **File download**. Clear the field to enable the **All** option. |
| **Status** | Dropdown menu | Filters access reasons by their activation status. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **ID**.  
* **Name**.  
* **Type**.  
* **Status**.  
* **Actions**:  
  * **Edit**: opens the **Edit access reason** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

### Add/Edit access reason screens

The **Add access reason** and **Edit access reason** screens share the same fields and are available for administrators.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name\*** | Text field | Yes | Access reason identification name. |
| **Type\*** | Dropdown menu | Yes | Defines a type of reason for requesting a task execution. The options are *Task execution, File Download*, and *All*. |
| **Status\*** | Toggle button | Yes | General information about the access policy. |