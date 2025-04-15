# Tasks

In this document, you'll find all the information about the **Tasks**, **Task**, and **Run task** screens of the **Task Manager** module.

## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Task Manager**.
2. In the side menu, select **Tasks**.

---
This section contains detailed information regarding the **Tasks** screen, which displays a report with all the tasks registered in **Task Manager**.

## Top bar


| **Item** | **Description**   |
|----|----|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **New**| Represented by the plus sign, it opens the [Task](/v3-32/docs/task-manager-tasks#task-screen) screen. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen.|

## Search fields

| **Item**  | **Description** | 
|-----|----| 
| **Name** | Human-readable name of the task to be executed. | 
| **Created by** | Name of the user who created the task.  | 
| **Included in**  | Field that filters tasks by the period in which they were included in senhasegura. Use this field to enter the initial date of the task inclusion period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date. | 
| **until** | Field that filters tasks by the period in which they were included in senhasegura. Use this field to enter the final date of the task inclusion period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date. | 
| **Enabled** | State of the task. The available options are **Yes** and **No**. | 
| **Environment**  | Environment in which the task will be executed. | 
| **System** | System in which the task will be executed.  | 
| **Tags** | Keywords to help identify and filter the task. | 

## Report fields
* **ID**: the task’s numerical identification code.
* **Name**.
* **Included in**: date and time when the task was included in the system.
* **Created by**.
* **Enabled**.
* **System**.
* **Environment**.
* **Tags**.
* **Action**: in this column, you’ll find the following options:
    * **Edit**: represented by the paper and pencil icon, it opens the [Task](/v3-32/docs/task-manager-tasks#task) screen, where task settings can be edited.
    * **Three vertical dots icon**: opens a dropdown menu with the options: *[Executions](/v3-32/docs/task-manager-executions), [Schedules](/v3-32/docs/task-manager-schedules)*, [*Run task*](/v3-32/docs/task-manager-tasks#run-task-screen), and *Disable*.

:::(Info) (Info)

The report displays 30 records per page.
To go to the next screen, click the forward button at the end of the report.
:::


### Task screen

This section contains detailed information regarding the **Task** screen, which enables the configuration of a task to be executed in **Task Manager**.


#### Main information tab


**Task information section**

This section enables the input of general task information.


| **Item**| **Description** | 
|----|----| 
| **Task identification name*** | Field for entering a human-readable name for the registered task. | 
| **Environment*** | Field for entering the environment in which the task will be executed.| 
| **System***  | Field for entering the system in which the task will be executed.| 
| **Tags** | Field for entering keywords to help identify and filter the task.| 


**Template for execution section**

This section enables the selection of the plugin and template that will execute the task.

| **Item** | **Description** | 
|----|----| 
| **Plugin**| Field for entering the plugin used for task execution. The downward arrow opens a list with the registered plugins.  | 
| **Select template to use*** | Field for entering the template used for task execution. The downward arrow opens a list with the **Task Manager** type templates registered. | 

**Variables for execution section**
This section enables the optional inclusion of new variables during task execution.

| **Item** | **Description**| 
|----|----| 
| **New variable +** | Option for entering new variables. The plus icon opens the **Identifier** and **Value** fields where you can enter the identifier and value of the variables. The **trash can** icon deletes the added variable. | 

**Credential for execution section**
This section enables the input of the credential that will be used to authenticate to the device where the task will be executed.

| **Item**| **Descrição**                                                                                                                 | 
|-----|----| 
| **Use a registered credential to access all devices** | Checkbox that defines whether a registered credential should be used to authenticate to the device where the task will be executed. **Note**: checking this box enables the **Access credential registered in the system** field. | 
| **Access credential registered in the system**        | Field for entering the access credential used to authenticate to the device where the task will be executed. The downward arrow opens a list with the registered credentials. | 
| **Credential username**                               | Field for entering a credential that isn’t registered in senhasegura. **Note**: This field is only available when the checkbox **Use a registered credential to access all devices** is not checked. | 
| **Use own credential to connect**                     | Checkbox that defines whether the credential itself will be used to authenticate to the device where the task will be executed. | 

:::(Info) (Info)
When informing the **Credential username**, the system uses this information to locate a credential with this username on each device to perform authentication.
:::

#### Devices for execution tab

| **Item**   | **Description** |
|----|----|
| **Devices +** | Option for entering devices where the task will be executed. The **plus** icon opens the **Devices** screen where you can filter devices by *ID, Device name, Management, Type, Vendor, Product*, and *Site*. Use the checkbox next to the device to select it, or click the checked checkbox to select all listed devices. Use the **Add** button to proceed or the **Cancel** button to quit. |

:::(info) (Info)
The items with an asterisk are mandatory.
:::

### Run task screen

This section contains detailed information regarding the **Run task** screen, which enables the submission of a task execution request in **Task Manager**.


:::(Info) (Info)
The **Run task** option will only be available if there is a device associated with the task execution. For more information, access the document on [How to configure a device](/v3-32/docs/pam-devices-management).
:::
#### Form fields

| **Item** | **Description**|
|----|----|
| **Reason**  | Field for entering the reason for task execution. The downward arrow opens a list with all registered reasons. |
| **Governance Code** | Field for entering the governance code used to register access requests. |
| **Reason**| Field for entering a descriptive text with the reason for task execution. |

:::(Info) (Info)
The fields above may be accompanied by an asterisk to indicate that they are mandatory. Their mandatory status is defined in the **Settings** tab when [an access group is created](/v3-32/docs/task-manager-how-to-manage-access-groups).
:::

:::(Info) (Info)
After filling out this form, if  [the access group configuration](/v3-32/docs/task-manager-how-to-manage-access-groups) requires task execution to go through an approval workflow, you’ll be able to view the status of this process on the [**My requests**](/v3-32/docs/task-manager-my-requests) and [**Request details**](/v3-32/docs/task-manager-my-requests#request-details) screens. Approvers, on the other hand, will be able to view and manage requests assigned to them on the [**My approvals**](/v3-32/docs/task-manager-my-approvals) and [**Request details**](/v3-32/docs/task-manager-my-requests#request-details) screens.
:::

