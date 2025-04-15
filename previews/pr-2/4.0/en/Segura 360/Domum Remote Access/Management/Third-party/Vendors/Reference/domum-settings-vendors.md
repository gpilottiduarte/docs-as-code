# Vendors

This document provides information about the **Vendors** screen in the **Management** menu, designed to manage and display registered vendors in **Domum Remote Access**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Management \> Third-party \> Vendors**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the [Add vendor](/v4/docs/domum-settings-vendors#addedit-vendor-screens) screen. |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters vendors by their identification code. |
| **Access policy** | Text field | Filters the access group associated with the vendor. |
| **Vendor** | Text field | Filters the records by the vendor name or contract details. |
| **Contract number** | Text field | Filters vendors by their assigned contract number. |
| **Document ID** | Text field | Filters by the corporate tax number of the vendor. |
| **Start date** | Date picker | Specifies the start date of the vendor's contract for filtering. |
| **Due date** | Date picker | Specifies the expiration date of the vendor's contract for filtering. |
| **Status** | Dropdown menu | Filters vendors by their status. The options are: **Enable** or **Disable**. Clear the field to enable the **All** option. |

### Report fields

- **ID**.  
- **Access policy**.  
- **Vendor**.  
- **Contract number**.  
- **Document ID**.  
- **Start date**.  
- **Due date**.  
- **Status**.  
- **Actions**:  
    - **Edit**: open the [Edit vendor](/v4/docs/domum-settings-vendors#addedit-vendor-screens) screen.
    - **New batch access**: opens the [New batch access](/v4/docs/new-batch-access).
    - **Panic button**: executes immediate defensive actions during incidents.  
    - **Disable**: disable the registration, on the confirmation screen, click **Yes** to confirm the action.  
    - **Dashboard**: directs to the [Vendors](/v4/docs/domum-dashboard-vendors) dashboard screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add/Edit vendor screens

This section provides information about the **Add vendor** and **Edit vendor** screens, which share the same fields.

### Registration tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Vendor\*** | Text field | Yes | Defines the vendor's name. |
| **Limited access group\*** | Dropdown menu | Yes | Select the access group. |
| **Contract Number** | Text field | No | Enter the vendor's contract. |
| **Document ID** | Text field | No | Enter the vendor's CNPJ. |
| **Start date\*** | Date picker | Yes | Selects the contract's start date and time.  |
| **Due date** | Date picker | No | Selects the contract's expiration date and time. |
| **Photo**  | Upload field | No | Selects an image for the vendor. |
| **Status\*** | Radio button | Yes | Select the vendor's activation status. The options are: **Enable** or **Disable**. |
| **Automatically grant access on full user provisioning** | Radio button | No | Select whether to enable automatic full-user access. The options are: *Default*, *Yes*, or *No*. |

### Limited users tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected users. |
| **Limited users table** | Table | No | The fields are: *Name*, *Mobile phone*, and *Domain*. |
| **Name** | Text field | No | Filters by the user's name. |
| **Mobile phone** | Text field | No | Filters by the user's phone number. |
| **Email** | Text field | No | Filters by the user's email. |

### Full users tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected users. |
| **Full users table** | Table | No | The fields are: *ID*, *Name*, *Username, Email,* and *Department*. |
| **ID** | Text field | No | Filters by the user identification code. |
| **Name** | Text field | No | Filters by the user's name. |
| **Username** | Text field | No | Filters by the Segura username. |
| **Email** | Text field | No | Filters by the user's email address. |
| **Department** | Text field | No | Filters by the user's department. |

### Location tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Allowed locations** | Checkbox | No | Filters and restricts access for all supplier-related users to specified locations.  |
| **Location table** | Table | No | The fields are: **Country** and **Region**. |
| **Country** | Dropdown menu | No | Selects the country where access will be permitted. |
| **Region** | Dropdown menu | No | Select the region within the country where access will be permitted. |

:::(Warning) (Attention)
The location accuracy is 80%. To have a higher accuracy, make sure to always have Segura updated to the latest version.
:::

### Review tab

Use the **Review** tab to check all the information entered in the previous tabs.