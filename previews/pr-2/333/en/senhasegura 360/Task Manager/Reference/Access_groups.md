# Access groups

In this document, you'll find all the information about the **Access groups** and **Access group registration** screens of the **Task Manager** module. 


## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Task Manager**.
2. In the side menu, select **Settings > Access groups**.

---
This section contains detailed information regarding the **Access groups** screen, which displays a list of all the access groups registered in **Task Manager**.

## Top bar

| **Item** | **Description**|
|----|----|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report.|
| **New**| Represented by a plus icon, it opens the [**Access group registration**](/v3-33/docs/task-manager-access-groups#access-group-registration) screen.
| **Print report**| Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV** | Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |


## Search fields


| **Item**| **Description**|
| ----| ---- |
| **Name**| Field that filters access groups by their registered name.|
| **Part of password** | Field that filters access groups by their access to the password. Available options are *First part, Second password*, and *Complete password*. Clear the filter to enable the **All** option. |
| **View**| Field that filters access groups by their permission to view the password. Available options are **Yes** and **No**. Clear the filter to enable the **All** option.|
| **Approval for viewing** | Field that filters access groups by the type of approval for viewing. Available options are Require approval and No approval required. Available options are **Yes** and **No**. Clear the filter to enable the **All** option. |
| **Session**| Field that filters access groups by the presence of restrictions to access the session. Available options are **Yes** and **No**. Clear the filter to enable the **All** option. |
| **Approval for session** | Field that filters access groups by the need for approval to access the session. Available options are **Require approval** and **No approval required**. Available options are **Yes** and **No**. Clear the filter to enable the **All** option. |
| **Change expiration** | Field that filters access groups by their permission to change the expiration date of a request. Available options are **Yes** and **No**. Clear the filter to enable the **All** option. |
| **Enabled**| Field that filters access groups by their activation status. Available options are **Yes** and **No**. Clear the filter to enable the **All** option. |

:::(Info) (Info)
The *Part of password, View, Approval for viewing, Session, Approval for session*, and *Change expiration* search fields will be removed in future versions.
:::

## Report fields
  - **ID:** access group’s identifier code.
  - **Name**. 
  - **Part of password**. 
  - **Permission:** type of permission granted to the access group. This field will always return the value **Run script**.
  - **Approval:** if the option **Requires approval to run task** is marked, the action **Run script** will require approval, and therefore, the column **Approval** will return the value **Run script**. Otherwise, the column will be empty.
  - **Justification:** if the option **Requires reason to run task** is marked, the action **Run script** will require a justification, and therefore, the column **Justification** will return the value **Run script**. Otherwise, the column will be empty.
  - **Change Expiration.**
  - **Type:** access group type. In this report, this column will always return the value **Task Manager**.
  - **Criteria:** the environments and systems associated with the access group.
  - **Enabled.**
  - **Action:** in this column, you’ll find the following options:
    - **Edit:** represented by the paper and pencil icon, it opens the [**Access group registration**](/v3-33/docs/task-manager-access-groups#access-group-registration-screen) screen, where you can edit the configurations of the access group selected.
    - **Three vertical dots icon:** opens a drop-down menu with the **Clone** option which enables the generation of a copy of the cloned access group.

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

### Access group registration screen

This section contains detailed information regarding the **Access group registration** screen, which enables the creation and editing of an access group in **Task Manager**.

#### Form fields

| **Item**| **Description**|
|----|----|
| **Access group name***| Field for entering a human-readable name for the access group.|
| **Enabled***| Field for selecting the activation status of the access group. Available options are **Yes** and **No**.|
| **Description**| Field for entering a description for the access group.|

#### Settings tab

This tab enables the configuration of the actions allowed by this access group and the access controls that must be respected in task management.

**Execution settings**

| **Item**| **Description**|
|----|----|
| **Requires reason to run task**| Checkbox to define whether users in the access group should provide a justification when requesting task execution. |
| **Requires approval to run task**  | Checkbox to determine if task execution requests should undergo an approval workflow.|
| **Approvals required to run**| Field for setting the number of approvals required for a task execution request. Use the up and down arrows, or enter the number manually. **Note**: this field is only enabled when the **Requires approval to run task** field is checked. |
| **Disapprovals required to cancel**| Field for setting the minimum number of rejections required to prevent the execution of a task. Use the up and down arrows, or enter the number manually. **Note**: this field is only enabled when the **Requires approval to run task** field is checked. |
| **Approval in levels**| Checkbox to define whether task execution requests should undergo a multi-level approval workflow.|


**Result files**

:::(Info) (Info)
This section will be removed in future versions.
:::
This section enables the configuration of actions related to files resulting from task execution.

| **Item**| **Description**|
|----|----|
| **Users can download the task resulting files**| Checkbox to define whether users in the access group can download files resulting from the task.|
| **Users must provide a reason to download files resulting by the task** | Checkbox to define whether users should provide a reason for downloading files resulting from the task.  |

**Access request settings**
This section enables the configuration of prerequisites for requesting task execution.

| **Item**| **Description**|
|----|----|
| **Governance ID required when justifying?*** | Checkboxes to determine whether users in the access group should enter a governance code when justifying the request for task execution. Available options are **Yes** and **No**. |
| **Always add user manager to approvers?*** | Checkboxes to determine whether the user responsible for the user's department should be automatically consulted as an additional approver for this group. This means that this user will be alerted along with the other selected approvers in the **Approvers** tab. Available options are **Yes** and **No**. |

:::(Info) (Info)
The **Always add user manager to approvers?*** field will be removed in future versions.
:::


#### Criteria tab
This tab enables the configuration of criteria that determine which tasks will be associated with this access group. The fields *Device, Environments*, and *Systems*, described below, are used as filters to grant access to tasks that have the information registered in these fields.


| **Item**| **Description**|
|----|----|
| **Device (comma separated)** | Field for entering devices, separated by commas, where the task will be executed.|
| **Environments***| List with all environments registered in **Task Manager.** Use the **All** checkbox to select all environments, or check the checkboxes of the environments you want to select. |
| **Systems***| List with all systems registered in **Task Manager**. Use the **All** checkbox to select all environments, or check the checkboxes of the systems you want to select. |

#### Users tab
This tab enables the addition of users who will be part of the access group and will therefore be able to request task executions using the data registered in the group.

| **Item**| **Description** |
|----|----|
| **Users +**| Represented by the plus icon, it opens the **System users** screen, where you can search for and select the users to be added to the access group. |
| **Users list** | List with all users selected to be added to the access group. The list has the following columns: *trash can* icon to remove the selected user, *Name, Username, E-mail, Creation type, Department, Added by*, and *Added on*. |

#### Approvers tab

This tab enables the addition of users who will be responsible for approving requests in this access group, also specifying their approval levels.

| **Item**| **Description**|
|----|----|
| **Approvers +**| Represented by the plus icon, it opens the Approvers screen, where you can search for and select the users who will be the approvers of the requests associated with this access group. |
| **Users list**| List with all users selected to be added as approvers to the access group. The list displays the following columns: *trash can icon* to remove the selected approver, *Name, Username, E-mail, Creation type, Department, Added by, Added on*, and *Level*, where you can select the level from 1 to 3, at which the approver will act. |

:::(Info) (Info)
The items with an asterisk are mandatory.
:::