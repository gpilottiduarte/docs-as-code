# How to configure Task Manager

Welcome to **Task Manager**, a Segura solution that facilitates the management of critical tasks with minimal privileged access in IT environments.

This document provides a step-by-step guide for system administrators to configure **Task Manager** and ensure that:

* Only authorized people perform critical tasks.  
* Operations are executed with minimal necessary privileges.  
* Each action is traceable and controlled.

After following the steps described in this guide, administrators are ready to add tasks to **Task Manager**. More information in How to manage tasks on Task Manager.

## Requirements

* System or **Task Manager** administrator permission.  
* Device configuration with remote access port according to the system.  
* Credential configuration with permission to remotely execute scripts on the device.

---
## Add environment

:::(info) (Info)

If you already have the desired environment added to Segura, skip this step.

:::

To add an environment to Segura, follow these steps:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings.**  
2. In the side menu, select **Customization > Segmentation > Environment.**  
3. In the upper-right corner of the **Environment** screen, click **Add.**  
4. On the **Add environment** screen:
    :::(error) (Alert)
    Fields with an asterisk are required.
    :::
    1. **Name***: enter a name to identify the added environment.  
    2. **Status**: enable or disable the environment.
5. Click **Save**

:::(info) (Info)
To edit or disable an environment, access the **Environments** screen and click the **Actions button**.
:::

---
## Add system

:::(info) (Info) 
If you already have the desired system added to Segura, skip this step. 
:::

To add a system to Segura, follow these steps:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings.**  
2. In the side menu, select **Customization > Segmentation > System.**  
3. In the upper-right corner of the **System** screen, click **Add**  
4. On the **Add system** screen:
    :::(error) (Alert)
    Fields with an asterisk are required.
    :::
    1. **Name***: enter a name to identify the added system.  
    2. **Status**: enable or disable the system.
5. Click **Save**

:::(info) (Info)
To edit or disable a system, access the **System** screen and click the **Actions button**.
:::

**Result:** you've added a system to Segura and can link it to a task.

---
## Add access reason

To add a reason that can be used when requesting task execution in **Task Manager**, follow these steps:

:::(info) (Info) 
The requirement to enter an access reason when requesting task execution is defined during the creation of the access policy in which the task is included. More information in **How to manage access policies.** 
:::

1. On Segura, in the navigation bar, hover over **Products menu** and select **Task Manager.**  
2. In the side menu, select **Access control > Access reasons.**  
3. In the upper-right corner of the **Access reasons** screen, click **Add.**  
4. On the **Add access reason** screen, fill in:
    :::(error) (Alert)
    Fields with an asterisk are required.
    :::
    1. **Name***: enter a name to identify the added reason.  
    2. **Type***: choose one of the available reason types.  
    3. **Status** : enable or disable the access reason.  
4. Click **Save.**

**Result:** you've added an access reason to **Task Manager,** which other users can use when requesting a task execution.

---
## Add execution template

To add an execution template that can be used when adding a task in **Task Manager**, follow these steps:

1. On Segura, in the navigation bar, hover over **Products menu** and select **Executions.**  
2. In the side menu, select **Template Control > Templates.**  
3. In the upper-right corner of the **Templates** screen, click **Add.**  
4. On the **Execution template** screen, fill in:  
   	:::(error) (Alert)  
   Fields with an asterisk are required.  
   :::  
   1. **Name***: enter a name to identify the template. Example: "Linux \- Restart services".  
   2. **Status**: enable or disable the execution template.  
   3. **View TAGs:** click to view a legend of TAGs that can be used in the template and inserted in the **Command** field. See the example below.  
   4. **Executor***: select one of the available plugins that the template will use.  
   5. **Execution Type***: select **Task Manager.**  
   6. **Playbook**: select one of the available playbooks.  
   7. **Inventory**: select one of the available inventories.  
   8. **Content**: enter the commands that will be executed in the task.

Example of using TAGs in template creation:

```
#Check status of all services
expect "*$"
exec "service --status-all"
#Access root user
expect "*$"
exec "sudo su"
#Enter root user password
expect "*:"
exec "[#AUTH_PASSWORD#]"
#Stop service
expect "*#"
exec "service [#VARIAVEL#] stop"
#Display service status
expect "*#"
exec "service [#VARIAVEL#] status"
#Restart service
expect "*#"
exec "service [#VARIAVEL#] restart"
#End task execution
expect "*#"
end
```

:::(info) (Info)
At the top of the **Execution template** screen, access GitHub to view all **Executions** module templates.
:::
5. Click **Save**

:::(info) (Info)
To edit, clone, and access template change history, access the **Templates** screen and click the **Actions button**.
:::

**Result:** you've added an execution template in the **Executions** module which **Task Manager** can use to execute a task.

---
## Add access policy

To add an access policy that defines permissions and limitations for tasks that users can execute in **Task Manager**, follow these steps:

1. On Segura, in the navigation bar, hover over **Products menu** and select **Task Manager.**  
2. In the side menu, select **Access control > Access policies.**  
3. In the upper-right corner of the **Access policies** screen, click **Add.**  
4. On the **Add access policy** screen, fill in:  
   :::(error) (Alert)  
   Fields with an asterisk are required.  
   :::  
1. **General** tab  
   1. **Access policy name**\*: enter a name to identify the added access policy.  
   2. **Status**: enable or disable the access policy.  
   3. **Description**: enter a description for this access policy.  
   4. Click **Continue.**
:::(info) (Info)
Synchronized users will have their permissions replaced if synchronization is enabled. Check your sync groups for changes.
:::
2. **Settings** tab  
   1. **Requires justification to execute task**: enable or disable the need for the requester to enter a justification to execute the task.  
   2. **Requires approval to execute task**: enable or disable the need for approval to execute task.
:::(warning) (Attention)
The components in the **Result files** section don’t reflect current **Task Manager** settings.
:::
3. **Criteria** tab  
   1. **Device:** enable or disable device configuration in the access policy.  
   2. **Device (sep. by comma)**: enter the devices, separated by a comma, where the task will be executed.  
   3. **Environments**\*: select the environment where the task will be executed.  
   4. **Systems**\*: select the system where the task will be executed.  
   5. Click **Continue.**  
4. **Users** tab  
   1. Click **Add** to open the **System users** modal and select users to be added to the access policy.  
   2. Click **Continue.**
:::(warning) (Attention)
If the user added to the **Task Manager** access policy is part of another Segura access policy with greater restrictions, they may not view information within the module.
:::
5. **Approvers** tab  
   1. **C**lick **Add** to open the **System users** modal and select task approver users linked to the access policy.  
   2. **Governance ID required when justifying?**\*: enable or disable the need to provide a governance code when justifying task execution requests.

:::(warning) (Attention)
* After activating multi-level approval and adding at least two approvers, define each approver's approval level in the **Level** column of the **Approvers** table. The chosen level indicates the approval stage at which this approver will be notified after the task execution request.  
* Only users with minimum **PAM operator** permission can approve task execution.  
* The field **Always add user manager to approvers?*** doesn’t reflect current **Task Manager** settings.
:::
5. Click **Save.**

**Result:** you've added an access policy that defines the criteria for other users to request task execution through **Task Manager**.