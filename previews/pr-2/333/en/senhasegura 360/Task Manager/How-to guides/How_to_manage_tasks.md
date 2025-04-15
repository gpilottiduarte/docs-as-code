# How to manage tasks

This document provides a step-by-step guide on how to create, edit, run, schedule, disable, enable, and view the details of tasks in **Task Manager**.

## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Task Manager**.
2. In the side menu, select **Tasks**.

## Create a task

### Requirements
* Being included in an access group. For more information, access the document on [How to manage access groups](/v3-33/docs/task-manager-how-to-manage-access-groups).
---
To create a task in **Task Manager**, follow the steps below:

1. In the upper-right corner of the **Tasks** screen, click the **View actions** menu, represented by the three vertical dots icon, and select **New**.
2. On the **Task** screen, navigate through the following tabs:
    1. **Main information** tab:
        1. **Task identification name***: enter a human-readable name to identify the task created.
        2. **Environment***: click the downward arrow to select the environment where the task will be executed.
        3. **System***: click the downward arrow to select the system where the task will be executed.
        4. **Tags**: enter keywords to help identify and filter the task.
        5. **Plugin**: click the downward arrow to select the task’s executor plugin.
        6. **Select template to use***: click the downward arrow to select the template to run the task.
        7. **New variable +**: click the plus icon to add one or more variables. After clicking the plus icon, enter an **identifier** and a **value** for the variable. Click the **trash can** icon to remove the added variable.
        8. **Use a registered credential to access all devices**: check the checkbox to define that a registered credential is used to authenticate to the device where the task will be executed.
        9. **Access credential registered in the system**: this field is enabled when checking the checkbox above. Use the downward arrow to select one of the registered credentials.
        10. **Use own credential to connect**: check the checkbox to use your own credential to authenticate to the device where the task will be executed.
        11. **Credential username**: unchecking the **Use a registered credential to access all devices** field enables this field. Use it to enter a credential that is not registered in senhasegura.
        
        
      12. **Devices for execution** tab:
          1. **Devices +**: click the plus icon to open the **Devices** screen and associate one or more devices with the created task.
          2. Click **Add** to proceed with adding the devices or **Cancel** to quit the action. Click the **trash can** icon to remove an added device. 

    :::(Info) (Info)
    The items with an asterisk are mandatory.
    :::

:::(Info) (Info)
As soon as the task execution begins, a separate operation is created for each involved device. Therefore, each device will have its own execution log, and the success or failure of the task execution on one device doesn’t prevent or affect the execution of the next.
:::

3. Click **Save**.



## Edit a task
### Requirements
* A task registered in **Task Manager**. For more information, access the [Create a task](/v3-33/docs/task-manager-how-to-manage-tasks#create-a-task) section of this document.
---
To edit a task registered in **Task Manager**, follow the steps below:


1. In the list displayed on the **Tasks** screen, identify the task you want to edit or use the filters to search for it.
2. In the **Action** column, click **Edit**, represented by the paper and pencil icon. 
3. On the **Task** screen, make the necessary changes.
4. Click **Save**.

A pop-up window with the message **“Success. Data saved successfully!”** confirms the action.

5. Click the **X** icon in the upper-right corner of the screen to close it.


## Run a task
### Requirements
* A task registered in **Task Manager**. For more information, access the [Create a task](/v3-33/docs/task-manager-how-to-manage-tasks#create-a-task) section of this document.
* A device associated with the task.
---

To run a task registered in **Task Manager**, follow the steps below:


1. In the list displayed on the **Tasks** screen, identify the task you want to run or use the filters to search for it. 
2. In the **Action** column, click the three vertical dots icon and select **Run task**, represented by the play icon.
3. On the **Run task** screen:
    1. **Reason**: click the downward arrow to select one of the registered reasons.
    2. **Governance Code**: enter the governance code.
    3. **Reason**: enter a descriptive text with the reason for running the task.

:::(Info) (Info)
The fields above may be accompanied by an asterisk to indicate that they are mandatory. Their mandatory status is defined in the **Settings** tab when [an access group is created](/v3-33/docs/task-manager-how-to-manage-access-groups).
:::


4. Click **Run task**.

:::(Info) (Info)
If this task was registered in an access group that requires approval to run, you can find more information on how to track the approval workflow status in the document on [How to manage requests](/v3-33/docs/task-manager-how-to-manage-requests).
:::


## Schedule a task

### Requirements
* A task registered in **Task Manager**. For more information, access the [Create a task](/v3-33/docs/task-manager-how-to-manage-tasks#create-a-task) section of this document.
---
To schedule the execution of a task registered in **Task Manager**, follow the steps below:

1. In the list displayed on the **Tasks** screen, identify the task you want to schedule or use the filters to search for it. 
2. In the **Action** column, click the three vertical dots icon and select **Schedules**, represented by the clock icon.
3. On the **Schedules** screen, in the bottom-right corner, click **Schedule running**.
4. On the **Schedule task** screen:
    1. **Reason**: click the downward arrow to select one of the registered reasons.
    2. **Governance Code**: enter the governance code.
    3. **Justification**: enter a descriptive text with the reason for scheduling the task.
    4. **Days for execution**: check the checkboxes to select the days you want the task execution to occur.
    5. **Periods for execution**: check the checkboxes to select the periods of the day you want the task execution to occur.
    6. **Minimum interval between runs**: define the minimum interval between executions. In the first field, enter a number between 0 and 60, and in the second field, click the downward arrow to select *Minutes, Hours, Days*, or *Months*.

:::(Info) (Info)
The *Reason, Governance Code*, and *Justification* fields may be accompanied by an asterisk to indicate that they are mandatory. Their mandatory status is defined in the **Settings** tab when [an access group is created](/v3-33/docs/task-manager-how-to-manage-access-groups).
:::


5. Click **Save**.

:::(Info) (Info)
If this task was registered in an access group that requires approval to run, you can find more information on how to track the approval workflow status in the document on [How to manage requests](/v3-33/docs/task-manager-how-to-manage-requests).
:::



## Disable a task

### Requirements
* An active task registered in **Task Manager**. For more information, access the [Create a task](/v3-33/docs/task-manager-how-to-manage-tasks#create-a-task) section of this document.
---
To disable a task registered in **Task Manager**, follow the steps below:

1. In the list displayed on the **Tasks** screen, identify the task you want to disable or use the filters to search for it.
2. In the **Action** column, click the **three vertical dots icon** and select **Disable**, represented by the trash can icon.
3. In the **Confirmation** pop-up window, you’ll view a message similar to the one below:
**“Are you sure you want to inactivate the record: [task name]?”**

4. Click **Yes** to confirm.
The pop-up message **“Success. Task disabled successfully”** confirms the action.
5. Click the **X** icon in the upper-right corner to close the window.



## Enable a task

### Requirements
* A disabled task registered in **Task Manager**. For more information, access the [Disable a task](/v3-33/docs/task-manager-how-to-manage-tasks#disable-a-task) section of this document.

---
To enable a task registered in **Task Manager**, follow the steps below:

1. On the **Tasks** screen, locate the **Enabled** filter among the search fields and select **No**.
2. Click **Filter**.
3. From the list of disabled tasks, identify the task you want to enable or use the filters to search for it.
4. In the **Action** column, click the **three vertical dots icon** and select **Enable**, represented by the check icon.
5. In the **Confirmation** pop-up window, you’ll view a message similar to the one below:
**“Are you sure you want to enable the record: [task name]?”**

6. Click **Yes** to confirm.
The pop-up message **“Success. Task successfully activated”** confirms the action.
6. Click the **X** icon in the upper-right corner to close the window.



## View task details

### Requirements
* A task registered in **Task Manager**. For more information, access the [Create a task](/v3-33/docs/task-manager-how-to-manage-tasks#create-a-task) section of this document.
---
To view the details of a task registered in **Task Manager**, follow the steps below:


1. In the list displayed on the **Tasks** screen, identify the task you want to view or use the filters to search for it.
2. In the **Action** column, click the **three vertical dots icon** and select **Executions**, represented by the three horizontal bars icon.
3. On the **Executions** screen, view a report with the following task details:  *ID, Total, Processed, Error, Status, Requester, Request date, Environment, System, Tags, Execution type*, and *Action* column.
    1. In the **Action** column, click **View operations**, represented by the three horizontal bars icon.
    2. On the **Operations** screen, view a report with the following operation details of the selected task: *ID, Task name, Environment, System, Tags, Device, Status, Result*, and *Action* column.
        1. Identify the operation whose details you want to view, and in the **Action** column, click **View details**, represented by the magnifying glass icon.
        2. On the **Operation details** screen, view all the details regarding the operation, such as its credential and device, *Requester, Request date, Scheduling date, Operation*, and *Status*. Also view the details regarding the attempt to execute the operation such as *Template, Version, Start, End*, a message informing if the operation execution was successful, and *Logs*.

:::(Info) (Info)
You can also view the details of a task through the path **Grid Menu > Task Manager > Executions >** A task in the list **> Action** column **> View operations** (represented by the three vertical bars icon) **> Operations** screen **>** An operation in the list **> Action** column **> View details** (represented by the magnifying glass icon) **> Operation details** screen
:::

---
## Next
[How to manage access groups](/v3-33/docs/task-manager-how-to-manage-access-groups)
[How to manage requests](/v3-33/docs/task-manager-how-to-manage-requests)
[How to manage approvals](/v3-33/docs/task-manager-how-to-manage-approvals)


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).


