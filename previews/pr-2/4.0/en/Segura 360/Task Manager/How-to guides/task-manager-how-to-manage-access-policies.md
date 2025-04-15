# How to manage access policies in Task Manager

This document provides a step-by-step guide for administrators to add, edit, clone, and synchronize access policies in **Task Manager**.

::: (warning) (Attention)  
The search fields and columns *Part of password, View, Approval for viewing, Session, Approval for session,* and *Change expiration* don’t reflect current **Task Manager** settings.  
:::

## Prerequisites

* System or **Task Manager** administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Task Manager**.  
2. In the side menu, select **Access control \> Access policies**.

## Add access policy

To add an access policy that defines the tasks and the users who can execute them in **Task Manager**, follow these steps:

1. In the upper-right corner of the **Access policies** screen, click **Add**.  
2. On the **Add access policy** screen, fill in:  
   :::(error) (Alert)  
   Fields with an asterisk are required.  
   :::  
   1. **General** tab  
      1. **Access policy name\***: enter a name to identify the added access policy.  
      2. **Status**: enable or disable the access policy.  
      3. **Description**: enter a description for this access policy.  
      4. Click **Continue**.

   

   

   2. **Settings** tab  
      1. **Requires justification to run task**: enable or disable the need for the requester to enter a justification to execute the task.  
      2. **Requires approval to run task**: enable or disable the need for approval to execute the task.  
      3. **Approvals required to run:** define the number of approvals needed for a task to be executed.  
      4. **Disapprovals required to cancel:** define the number of rejections needed to cancel a task execution.  
      5. **Approval in levels:** enable or disable multi-level approval.

	:::(warning) (Attention)  
    The components of the **Result files** section don’t reflect current **Task Manager** settings.  
    :::

3. **Criteria** tab  
   1. **Device**: enable or disable device configuration in the access policy.  
      2. **Device (comma separated)**: enter the devices, separated by a comma, where the task will be executed.  
      3. **Environments**\*: select the environment where the task will be executed.  
      4. **Systems**\*: select the system where the task will be executed.  
      5. Click **Continue**.

   4. **Users** tab  
      1. Click **Add** to open the **System users** modal and select users to be added to the access policy.  
      2. Click **Continue**.
            :::(warning) (Attention)
            If the user added to the **Task Manager** access policy is part of another Segura access policy with greater restrictions,
            they may not view information within the module.
            :::

         

   5. **Approvers** tab  
      1. Click **Add** to open the **System users** modal and select task approver users linked to the access policy.  
      2. **Level**: if the **Approval in levels** is enabled:  
         * Add at least two approvers.  
         * Define the level of each approver in the flow (1, 2, or 3).  
         * The approval flow follows a sequential order.  
      3. Enable or disable the **Governance ID required when justifying?\*** field to request a task execution.

            :::(warning) (Attention)

            * Only users with minimum **PAM Operator** permission can approve task executions.  
            * The field **Always add user manager to approvers?\*** doesn’t reflect current **Task Manager** settings.  
         :::  
    
5. Click **Save**.

## Edit access policy

To edit an access policy added in **Task Manager**, follow these steps:

1. On the **Access policies** screen, identify the desired access policy or use the search filters.  
2. Click the **Actions button** and select **Edit**.  
3. On the **Edit access policy** screen, make the necessary changes.  
4. Click **Save**.

## Disable access policy

To disable an access policy added in **Task Manager**, follow these steps:

1. On the **Access policies** screen, identify the desired access policy or use the search filters.  
2. Click the **Actions button** and select **Edit**.  
3. On the **Edit access policy** screen, disable the **Status** toggle button.  
4. Click **Save**.



## Enable access reason 

To enable a disabled access policy in **Task Manager**, follow these steps:

1. On the **Access policy** screen, identify the **Status** filter and select **Disabled**.  
2. In the disabled access policies list, identify the desired access policy.  
3. Click the **Actions button** and select **Edit**.  
4. On the **Edit access policy** screen, enable the **Status** toggle button.  
5. Click **Save**.



## Clone access policy

By cloning an access policy, you reuse the settings of the selected policy, eliminating the need to manually configure a new access policy.

To clone an access policy in **Task Manager**, follow these steps:

1. On the **Access policies** screen, identify the desired access policy or use the search filters.  
2. Click the **Actions button** and select **Clone**.  
3. Click **Yes** in the confirmation pop-up.

:::(info) (Info)  
The new access policy will be displayed with the same name as the original access policy, followed by the word **(copy)** in parentheses, along with its identification code. 
For example, if you cloned an access policy called **My access policy** with ID **1**, the new policy will be called **My access policy (copy 1\)**.  
:::

## Synchronize access policies

Access policy synchronization is the process of manually updating settings across all access policies registered in the Segura database. This feature is useful when you make changes to access policy settings and want to apply them immediately.

:::(warning) (Attention)  
Access policy synchronization updates accesses according to the new registered settings. If any user is removed from a policy, or added to policies with more restrictions, they may lose access to credentials.  
:::

To synchronize access policies registered in **Task Manager**, follow these steps:

1. In the upper-right corner of the **Access policies** screen, click **Synchronize**.  
2. Click **Yes** in the confirmation pop-up.

:::(info) (Info)  
Synchronization may take a few seconds depending on the number of access policies and users registered in each policy.  
:::

---

Do you still have questions? Reach out to the [Segura community](https://community.Segura.io/)