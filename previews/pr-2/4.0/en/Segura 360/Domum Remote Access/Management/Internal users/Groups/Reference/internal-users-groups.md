# Groups

This document provides information about the **Groups** screen in the **Management** menu, which is used to register new internal user groups in **Domum Remote Access**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Management \> Internal users \> Groups**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the [Add internal users group](/v4/docs/internal-users-groups#addedit-internal-users-group-screens) screen. |
| **Actions** | Dropdown menu | Displays the options *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters the user identification code in the report. |
| **Group** | Text field | Filters by the name of the internal user group. |
| **Restricted locations** | Dropdown menu | Filters by Restrict access by location. The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Status** | Dropdown menu | Filters groups by their status. The options are: **Enable** or **Disable**. Clear the field to enable the **All** option. |

### Report fields

- **ID**.  
- **Group**.  
- **Restricted locations**.  
- **Status**.  
- **Actions**:  
    - **Edit**: open the [Edit internal users group](/v4/docs/internal-users-groups#addedit-internal-users-group-screens) screen.
    - **Batch access request**: opens the [Batch access request](/v4/docs/batch-access-request) screen.
    - **Disable**: disable the registration. On the confirmation screen, click **Yes** to confirm the action.  
    - **Dashboard**: redirects to the [Internal users gruop ](/v4/docs/domum-dashboard-internal-users-groups) dashboard screen.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add/Edit internal users group screen

This section provides information about the **Add internal users group** and **Edit internal users group** screens, which share the same fields.

### General tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Group name\*** | Text field | Yes | Enter the group's name. |
| **Enabled\*** | Radio button | Yes | Enables the group. The options are: **Yes** or **No**. |
| **Automatically grant access on full user provisioning** | Radio button | No | Selects to grant automatic access after internal provisioning. The options are: *Default*, *Yes*, or *No*. |
| **Limited access group\*** | Dropdown menu | Yes | Selects an access group for limited users. |

### Full users tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected users. |
| **Full users table** | Table | No | The fields are: *ID*, *Name*, *Username*, *Email*, and *Department*. |
| **ID** | Text field | No | Filters by the user identification code. |
| **Name** | Text field | No | Filters by the user's name. |
| **Username** | Text field | No | Filters by the Segura username. |
| **Email** | Text field | No | Filters by the user's email address. |
| **Department** | Text field | No | Filters by the user's department. |

### Limited users tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected users. |
| **Limited users table** | Table | No | The fields are: *Name*, *Mobile phone*, and *Domain*. |
| **Name** | Text field | No | Filters by the user's name. |
| **Mobile phone** | Text field | No | Filters by the user's phone number. |
| **Email** | Text field | No | Filters by the user's email. |

### Location tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Allowed locations** | Checkbox | No | Filters and restricts access for all supplier-related users to specified locations.  |
| **Location table** | Table | No | The fields are: **Country** and **Region**. |
| **Country** | Dropdown menu | No | Selects the country where access will be permitted. |
| **Region** | Dropdown menu | No | Selects the region within the country where access will be permitted. |

:::(Warning) (Attention)
The location accuracy is 80%. To have a higher accuracy, make sure to always have Segura updated to the latest version.
:::

### Review tab

Use the **Review** tab to check all the information entered in the previous tabs.