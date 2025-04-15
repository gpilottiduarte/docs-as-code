# Users

This document provides information about the **Users** screen in the **Management** menu,  which displays a report of third-party users registered in **Domum Remote Access**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Management \> Internal users \> Users**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the [Add user](/v4/docs/domum-internal-users#add-user-screen) screen. |
| **Actions** | Dropdown menu | Displays the options *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters the user identification code in the report. |
| **Internal users groups** | Dropdown menu | Filters the associated group. |
| **User** | Text field | Filters the Segura username. |
| **Mobile phone** | Text field | Filters the registered phone number. |
| **Email** | Text field | Filters the registered email address. |
| **Custom code** | Text field | Filters the personal code for second-factor authentication. |
| **Document** | Text field | Filters the identification document. |
| **Status** | Dropdown menu | Filters users by their status. The options are: **Enable** or **Disable**. Clear the field to enable the **All** option. |
| **Photo** | Dropdown menu | Filters users with/without a photo. The options are: **Yes** or **No**. Clear the field to enable the **All** option. |
| **User type**  | Dropdown menu | Filters the user type. The options are: **Limited user** or **Full user**. Clear the field to enable the **All** option. |

### Report fields

- **ID**.  
- **Internal users groups**.  
- **User**.  
- **Mobile phone**.  
- **Email**.  
- **Custom code**.  
- **Document**.  
- **Status**.  
- **Photo**.  
- **User type**.  
- **Actions**:  
    - **Request access**: directs to the [New remote access - Internal user](/v4/docs/new-remote-access-internal-user) screen.  
    - **Dashboard**: directs to the [Internal users](/v4/docs/domum-dashboard-internal-users) screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add user screen

Select either **Full user** or **Limited user** in the batch access request screen.

### Full user

**Full user** access with complete role and group permissions. Manual association with a vendor/internal group is required after creation.

### Settings tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name\*** | Text field | Yes | Enter the user’s name. |
| **Username\*** | Text field | Yes | Enter a username for the user. |
| **Set current password** | Toggle button | No | Enables the **Password** field and sets a new password manually. |
| **New password** | Text field | No | Enter manually or generate a new password. |
| **Department** | Dropdown menu | No | Defines the department to which the user belongs. |
| **Email** | Text field | No | Enter the user's email address. |
| **Telephone** | Text field | No | Enter the user's phone number. |
| **Status** | Radio button | No | Select the user's activation status. The options are: **Enable** or **Disable**. |
| **User group** | Dropdown menu | No | Selects which user group this user will join.  |

### Roles tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected roles. |
| **Roles table** | Table | No | The fields are: **Built-in** and **Description**. |
| **Built-in** | Text field | No | Indicates if the role is a default installation role on Segura. |
| **Description** | Text field | No | Description of the permission. |

### Access policies tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **PAM Core** | Checkbox | No | Access policy options registered within Segura for the **PAM Core** module. |
| **Protected Information** | Checkbox | No | Access policy options registered within Segura for the **Protected Information** module. |
| **Task Manager** | Checkbox | No | Access policy options registered within Segura for the **Task Manager** module. |
| **Certificate Manager** | Checkbox | No | Access policy options registered within Segura for the **Certificate Manager** module. |
| **Cloud IAM** | Checkbox | No | Access policy options registered within Segura for the **Cloud IAM** module. |
| **DSM** | Checkbox | No | Access policy options registered within Segura for the **DSM** module. |

### Review tab

Use the **Review** tab to check all the information entered in the previous tabs.

## Limited user

This section provides information about the **Limited User** and **Update third-party user** screens, which share the same fields. Access to the platform is restricted, with limited permissions, and requires manual association with a vendor/internal group after creation.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Internal user group\*** | Dropdown menu | Yes | Select the user group. |
| **Name\*** | Text field | Yes | Defines a user's name. |
| **Mobile phone\*** | Text field | Yes | Enter the user's mobile phone number. |
| **Email\*** | Text field | Yes | Enter the user's email address. |
| **Document** | Text field | No | Enter the user's document. |
| **Photo** | Dropdown menu | No | Selects an image for the user. |
| **Status\*** | Dropdown menu | Yes | Selects the status of the access. The options are: **Enable** or **Disable**.  |