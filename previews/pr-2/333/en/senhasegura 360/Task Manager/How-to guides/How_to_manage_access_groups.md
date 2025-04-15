# How to manage access groups

This document provides a step-by-step guide on how to create, edit, clone, and reprocess access groups in **Task Manager**.

## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Task Manager**.
2. In the side menu, select **Settings > Access groups**.

---
## Create an access group

To create an access group that will limit the tasks that users will be able to interact with in **Task Manager**, follow the steps below:

1. In the upper-right corner of the **Access group** screen, click the **View actions** menu, represented by the three vertical dots icon, and select **New**.
2. On the **Access group registration** screen:
    1. **Access group name***: enter a human-readable name for the registered access group.
    2. **Enabled***: check **Yes** or **No** to determine whether the group will be active or inactive.
    3. **Description**: write a description for this access group.


    :::(Info) (Info)
    Synced users will have their permissions overwritten if synchronization is on.   Check their synchronization groups for changes.
    :::
    
  
    4. In the **Settings** tab:
         1. **Requires reason to run task**: check the checkbox to require the requester to provide a reason for the task execution.
        1. **Requires approval to run task**: check the checkbox to demand that task execution only occurs upon approval.
        2. **Approvals required to run**: enter a number to indicate the minimum number of approvals required for the requested task execution. This field is enabled only if the **Requires approval to run task** field is checked.
        3. **Disapprovals required to cancel**: enter a number to indicate the minimum number of rejections required for the requested task execution not to occur. This field is enabled only if the **Requires approval to run task** field is checked.
        4. **Approval in levels**: check the checkbox to require the request approval to be done at multiple levels.
        5. **User can download the task resulting files**: check the checkbox to enable users in the access group to download resulting task files.
        6. **User must provide a reason for downloading files resulting by the task**: check the checkbox to require users to provide a reason for downloading the resulting task files.
        7. **Governance ID required when justifying?***: check **Yes** or **No** to define whether users should provide a governance code when justifying the task execution request.
        8. **Always add user manager to approvers?***: check **Yes** or **No** to define whether the user's manager should always be added to the approvers.

        :::(Info) (Info)
        The fields *User can download the task resulting files, User must provide a reason for downloading files resulting by the task*, and *Always add user manager to approvers?**  will be removed in future versions.
        :::


    5. In the **Criteria** tab:
        1. **Device (comma separated)**: enter the devices, separated by commas, where the task will be executed.
        2. **Environments***: use the checkboxes to select the environments where the task will be executed.
        3. **Systems***: use the checkboxes to select the systems where the task will be executed.

    6. In the **Users** tab:
        1. **Users +**: click the plus icon to open the **System users** screen, select the users to be added to the access group, and click **Add**.
        :::(Info) (Info)
         Users who are in more than one access group will have the settings applied from the most restrictive group.
         :::



    7. In the **Approvers** tab: 
        1.  **Approvers +**: click the plus icon to open the **Approvers** screen, select the approvers to be added to the access group, and click **Add**.
        :::(Warning) (Attention)
         If you have chosen multi-level approval for this access group, after adding at least two approvers, you must define the approval level for each one in the **Level**    column. The chosen level indicates the approval stage at which each approver will be notified after the task execution request.
         :::
            
         :::(Info) (Info)
         The approver user must have the minimum PAM Operator profile to access the approval workflow screen.
          :::
        :::(Info) (Info)
        The items with an asterisk are mandatory.
        :::

       




3.  Click **Save**.
    
  A pop-up window with the message **“Success. Data saved successfully!”** confirms the action.

:::(Warning) (Attention)
senhasegura works with permission levels. If the user added to the **Task Manager** access group is in another group with stricter restrictions, they may be unable to view information within the module.
:::


## Clone an access group

When cloning an access group, you inherit the settings from the selected group, thus eliminating the need to manually configure a new group.

### Requirements
* An access group registered in **Task Manager**. For more information, access the [Create an access group](/v3-33/docs/task-manager-how-to-manage-access-groups#create-an-access-group) section of this document.
---

To clone an access group in **Task Manager**, follow the steps below:

1. In the list displayed on the **Access group** screen, identify the access group you want to clone or use the filters to search for it.
2. In the **Action** column, click the **three vertical dots icon** and select **Clone**, represented by the two paper sheets icon.
3. In the **Confirmation** pop-up window, you’ll view a message similar to the one below:
**“Are you sure you want to generate a copy of this register?”**

4. Click **Yes** to confirm.

The pop-up message **“Success. Data saved successfully!”** confirms the action.

In the list on the **Access groups** screen, the new access group will be displayed with the same name as the original group, followed by the word **(copy)** within parentheses, along with its identifier code. For example, if you cloned an access group named **My group**, the new cloned group might be named **My group (copy 25)**.


## Edit an access group

### Requirements
* An access group registered in **Task Manager**. For more information, access the [Create an access group](/v3-33/docs/task-manager-how-to-manage-access-groups#create-an-access-group) section of this document.

---
To edit an access group registered in **Task Manager**, follow the steps below:

1. In the list displayed on the **Access group** screen, identify the access group you want to edit or use the filters to search for it.
2. In the **Action** column, click **Edit**, represented by the paper and pencil icon. 
3. On the **Access group registration** screen, make the necessary changes.
4. Click **Save**.

A pop-up window with the message **“Success. Data saved successfully!”** confirms the action.


## Reprocess groups

Group reprocessing is the manual process of updating configurations in all access groups registered in the senhasegura database. This feature is useful when you make changes to the settings of an access group and want to apply them immediately.

:::(Warning) (Attention)
Since group reprocessing updates the accesses according to the new configurations registered, if a user is removed from any group or added to groups with stricter restrictions, they may lose access to credentials.
:::

### Requirements
* An access group registered in **Task Manager**. For more information, access the [Create an access group](/v3-33/docs/task-manager-how-to-manage-access-groups#create-an-access-group) section of this document.

---
To reprocess access groups registered in **Task Manager**, follow the steps below:



1. In the bottom-right corner of the **Access groups** screen, click **Reprocess groups**.
2. In the **Confirmation** pop-up window, you’ll view a message similar to the one below:
**“Attention: When reprocessing the groups some users may lose access to the credentials.
Are you sure you want to continue?”**


:::(Info) (Info)
This action may take a few seconds depending on the number of access groups and users registered in each group.
:::

3. Click **Yes** to confirm.

A pop-up window with the message **“Success. Data saved successfully!”** confirms the action.

---
## Next

[How to manage tasks](/v3-33/docs/task-manager-how-to-manage-tasks)
[How to manage requests](/v3-33/docs/task-manager-how-to-manage-requests)
[How to manage approvals](/v3-33/docs/task-manager-how-to-manage-approvals)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
