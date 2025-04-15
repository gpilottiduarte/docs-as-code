# How to manage tasks in Task Manager

This document provides a step-by-step guide for:

* **Administrators** to add and manage tasks in **Task Manager**.  
* **Authorized users** to punctually run tasks in **Task Manager.**

## Requirements

* System or **Task Manager** administrator permission to add and manage tasks.  
* System user permission to run tasks.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Tasks**.

---
## Run task

To execute a one-time task, you must be included in an access policy that contains the task and necessary permissions. Follow these steps:

1. On the **Tasks** screen, identify the desired task or use the search filters.  
2. Click the **Actions** button and select **Run task**.  
3. On the **Run task** screen:  
   1. Select the **Justification**.  
   2. If required, fill in the **Governance Code** and **Reason** fields.  
   3. Click **Run task**.  
4. After going through the approval flow, the task will be executed automatically.

:::(warning) (Attention)  
The following steps can only be performed by users with **System administrator** or **Task Manager** **administrator** permissions.  
:::

---
## Add task

To add a task to be executed by **Task Manager**, follow these steps:

1. In the upper-right corner of the **Tasks** screen, click **Add**.  
2. On the **Add access reason** screen, fill in:  
   :::(error) (Alert)  
   Fields with an asterisk are mandatory.  
   :::  
   1. **Main information** tab  
      1. **Task identification name\*:** name to identify the task.  
      2. **Environment**\*: select the environment where the task will be executed.  
      3. **System**\*: select the system where the task will be executed.  
      4. **Tags**\*: keywords to categorize the task.  
      5. Click **Continue**.  
   2. **Execution** tab  
      1. **Plugin**: select the plugin that will execute the task.  
      2. **Select a template to use\***: select the template used to execute the task.  
      3. Click **Add** to add variables for task execution.  
      4. **Identifier:** add a unique name for the execution variable. Example: SERVICE.  
      5. **Value:** add a value for the variable. Example: apache2.

      :::(warning) (Attention)
        * The **Identifier** must be referenced in the template between hashtags. Example: [#SERVICE#].  
        * The **Value** can be fixed or requested from the user during task execution.  
        * Multiple variables can be configured for the same task.
		:::

6. **Use a registered credential to access all devices:** select the credential used to authenticate in the system.  
   7. **Access credential registered in the system:** enable or disable the use of the access credential for system authentication.  
      8. **Use own credential to connect:** Ative ou desative a opção **Utilizar a própria credencial para conectar**.  
      9. **Credential username:** alternatively, authenticate with a credential not registered in Segura. Enter the credential username in the field. Segura will use this username to search for the credential in each device where the task will be executed.  
   3. **Devices for execution** tab  
      1. Click **Add** to open the **Devices** modal and select the devices where the task will be executed.  
   4. **Review** tab  
      1. Review the task configuration.  
3. Click **Save**.

---
## Edit task

To edit a task added in **Task Manager**, follow these steps:

1. On the **Tasks** screen, identify the desired task or use the search filters.  
2. Click the **Actions button** and select **Edit**.  
3. On the **Edit task** screen, make the necessary changes.  
4. Click **Save**.

:::(Internal) (Private notes)
## Schedule task
:::


---
## Disable task

To disable a task added in **Task Manager**, follow these steps:

1. On the **Tasks** screen, identify the desired task or use the search filters.  
2. Click the **Actions button** and select **Disable**.  
5. Click **Yes** in the confirmation pop-up.

---
## Enable task 

To enable a disabled task added in **Task Manager**, follow these steps:

1. On the **Tasks** screen, identify the **Status** filter and select **Disabled.**  
2. In the disabled tasks list, identify the desired task.  
3. Click the **Actions button** and select **Enable**.  
4. Click **Yes** in the confirmation pop-up.  
     
---
## View task execution operations

To view the operations of each task execution in **Task Manager**, follow these steps:

1. On the **Operations** screen, identify the desired operation or use the search filters.  
2. Click the **Actions button** and select **View details**.  
3. On the **Operation details** screen, view the operation’s information.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).


