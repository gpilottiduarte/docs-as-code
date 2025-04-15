# Access policies

In complex IT ecosystem environments, it’s essential for administrators to establish precise permission boundaries in their infrastructure, ensuring security in the execution of critical tasks.  
This document provides information about the **Access policies** report screen in **Task Manager** and ensures that administrators can:

* Select devices, environments, and systems linked to tasks.  
* Define exactly who can execute which tasks.  
* Establish customized approval flows.  
* Create intelligent protection layers.

::: (warning) (Attention)  
The search fields and columns *Part of password, View, Approval for viewing, Session, Approval for session,* and *Change expiration* don’t reflect current **Task Manager** settings.  
:::

## Requirements

* System or **Task Manager** administrator permission to add and manage tasks.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Access control \> Access policies**.

---
## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Add access policy** screen. |
| **Synchronize** | Button | Instantly applies the configurations made in access policies. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Filters access policies by their identification name. |
| **Status** | Dropdown menu | Filters access policies by their activation status. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **ID**: access policy identification code in Segura.  
* **Name**.  
* **Permission**: type of permission granted to the access policy. This field will always return the value **Execute script**.  
* **Approval**: if the **Requires approval to run task** option is enabled, the **Execute script** action will require approval, and therefore the **Approval** column will have the value **Execute script**. Otherwise, the column will be empty.  
* **Justification**: if the **Requires reason to run task** option is enabled, the Execute script action will require justification, and therefore the **Justification** column will have the value **Execute script**. Otherwise, the column will be empty.  
* **Type**: type of access policy. By default, the value will always be **Task Manager**.  
* Criteria: the environments and systems linked to the access policy.  
* **Status**.  
* **Actions**:  
  * **Edit**: opens the **Edit access policy** screen.  
  * **Clone**: creates a copy of the selected access policy.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

### Add/Edit access policy screens

The **Add access policy** and **Edit access policy** screens share the same fields and are available for administrators.

#### General tab

In this tab, administrators enter the access policy’s main information. 

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Access policy name**\* | Text field | Yes | Access policy identification name. |
| **Status** | Toggle button | No | Enables or disables the access policy. |
| **Description** | Text field | No | General information about the access policy. |

#### Settings tab

In this tab, administrators define the access policy configurations. 

::: (warning) (Attention)
The components of the **Result files** section don’t reflect the current **Task Manager** settings.
:::

**Settings section**

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Requires reason to run task** | Toggle button | No | Defines whether users included in the access policy must provide a justification to run a task.  |
| **Requires approval to run task** | Toggle button | No | Defines whether users included in the access policy must go through an approval flow to run a task. **Note:** the activation of this parameter enables the next three parameters. |
| **Approvals required to run** | Quantity input | No | Defines the number of approvals required to run a task. |
| **Disapprovals required to cancel** | Quantity input | No | Defines the number of rejections required to cancel a task execution. |
| **Approval in levels** | Toggle button | No | Enables or disables approval in levels. |

#### Criteria tab

In this tab, administrators determine which tasks will be associated with this access policy. The fields *Device, Environments,* and *Systems*, described below, are used as filters to grant access to tasks that have information registered in these fields.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Device** | Toggle button | No | Enables or disables the **Device (comma separated)** text field. |
| **Device (comma separated)** | Text field | No | Devices where the task will be executed. |
| **Environments\*** | Dropdown menu | Yes | Selects the **Task Manager** environments where the task will be executed. |
| **Systems** | Dropdown menu | Yes | Selects the **Task Manager** systems where the task will be executed. |


#### Users tab

In this tab, administrators add users to the access policy, giving them permission to request executions of tasks linked to the access policy.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Opens the **Users** modal. |
| **Select items** | Checkbox | Selects users in the table and enables the **Remove selected** button. |
| **Users** | Table | Lists added users and their information: *ID, Name, Username, E-mail, Creation type, Department, Added by,* and *Added on*. |


#### Approvers tab

In this tab, administrators add users responsible for approving requests in this access policy, also specifying their approval level.

::: (warning) (Attention)

* Only users with minimum **PAM Operator** permission can approve task executions.  
* The field **Always add user manager to approvers? \*** doesn’t reflect current **Task Manager** settings.

:::

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Opens the **Users** modal. |
| **Select items** | Checkbox | No | Selects users in the table and enables the **Remove selected** button. |
| **Approvers** | Table | No | Lists added users and their information: *ID, Name, Username, E-mail, Creation type, Department, Added by,* and *Added on*. |
| **Level** | Dropdown menu | No | Defines when the approver will be triggered to approve the request. |
| **Governance ID required when justifying?\*** | Toggle button | Yes | Defines the requirement to enter a governance code when justifying the task execution request.  |


#### Review tab

This tab displays a summary of the access policy’s configurations with the **Back** or **Save** buttons.