# Access policies

This document provides information about the **Access policies** screen in the **Access control** menu, which displays the list of registered access policies in **Domum Remote Access**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Access control \> Access policies**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the [Add access policy](/v4/docs/access-policies#addedit-access-policies-screens) screen. |
| **Synchronize** | Button | Reprocess all the registered policies. |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Name** | Text field | Filters policies by their identification name. |
| **View** | Dropdown menu | Filters the policies with permission to view the password. The options are: **Yes** or **No**. Clear the field to enable the **All** option. |
| **Approval for viewing** | Dropdown menu | Filters the policies by approval requirement to view the password. The options are: **Requires approval** or **No required approval**. Clear the field to enable the **All** option. |
| **Session** | Dropdown menu | Filters the policies by permission to start a session. The options are: **Yes** or **No**. Clear the field to enable the **All** option. |
| **Approval for session** | Dropdown menu | Filters policies by approval requirement to start a session. The options are: **Requires approval** or **No required approval**. Clear the field to enable the **All** option. |
| **Status** | Dropdown menu | Filters the policies by activation status. The options are: **Enable** or **Disable**. Clear the field to enable the **All** option. |

### Report fields

- **ID**: displays the identification code of the access policies.  
- **Name**.  
- **Permission**: displays the permissions granted to the access policies.  
- **Approval**.  
- **Status**.  
- **Actions**:  
    - **Edit**: opens the [Edit access policy](/v4/docs/access-policies#addedit-access-policies-screens) screen to make the necessary changes.  
    - **Clone**: makes an exact copy of the record to be cloned. On the confirmation screen, click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add/Edit access policies screens

This section provides information about the **Add access policy** and **Edit access policy** screens, which share the same fields.

### General tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Access policy name \*** | Text field  | Yes | Access policy name. |
| **Status** | Radio button | No | Defines the policies’ activation state. The options are: **Enabled** or **Disabled**. |
| **Description** | Text field | No | General information about the access policies. |
| **Can Limited Users request their access?**\* | Radio button | Yes | Allows a limited user to request access. The options are: **Yes** or **No**. |

### Password tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Allow Users to View Passwords** | Toggle button | No | Allows users to view passwords.  |
| **Require approval to view a password** | Toggle button | No | Activates a workflow for password viewing approvals. |
| **Approvals required for viewing** | Quantity input | No | Defines the number of approvals required to allow viewing a password. |
| **Disapprovals required to cancel** | Quantity input | No | Defines the number of disapprovals required to reject viewing a password. |
| **Approval in levels** | Toggle button | No | Specifies that approvals are granted hierarchically at different levels. |

### Sessions tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Allow Users to Start Sessions** | Toggle button | No | Allows users to start sessions.  |
| **Require approval to start session** | Toggle button | No | Activates a workflow for session start approvals.  |
| **Approvals required** | Quantity input | No | Defines the number of approvals required to start a session. |
| **Disapprovals required to cancel** | Quantity input | No | Defines the number of disapprovals required to reject a session start. |
| **Approval in levels** | Toggle button | No | Specifies that session approvals are granted hierarchically in levels. |

### Approvers tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected approvers. |
| **Approvers table** | Table | No | Displays the list of approvers. The fields are:  *ID*, *Name*, *Username*, *Email*, *Creation type*, *Department*, *Added by*, *Added on*, and *Level*. |
| **ID** | Text field | No | Displays a unique identifier for each approver. |
| **Name** | Text field | No | Displays the full name of the approver. |
| **Username** | Text field | No | Displays the username of the approver. |
| **E-mail** | Text field | No | Shows the email address of the approver. |
| **Creation type** | Text field | No | Indicates whether the approver was added manually or via an automated process. |
| **Department** | Text field | No | Displays the department the approver is associated with. |
| **Added by** | Text field | No | Shows the name of the user who added the approver to the list. |
| **Added on** | Text field | No | Displays the date and time the approver was added to the list. |
| **Level** | Dropdown menu | No | Shows the level assigned to the approver. |
| **Governance ID required when justifying? \*** | Toggle button | Yes | Requires users to provide an ITSM code when justifying their access request. |

### Review tab

Use the **Review** tab to check all the information entered in the previous tabs.