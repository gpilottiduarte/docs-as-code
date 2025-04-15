# Credentials by users

This document provides information about the **Credentials by users** screen in the **Audit** menu, which displays **Domum**’s connection details and lists credentials accessed by vendors or third-party users, linking requests that granted access for auditing or cancellation.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Audit \> Credentials by users**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters the items by their identification code in Segura. |
| **Vendor** | Dropdown menu | Filters the items by the vendor. Clear the field to enable the **All** option. |
| **User** | Text field | Filters the items by the user. |
| **Credential** | Text field | Filters the items by the credential. |
| **Device** | Text field | Filters the items by the credential. |
| **Expiration date** | Date picker | Filters the items by their expiration period. |
| **Status** | Dropdown menu | Filters items by their status. The options are: *Awaiting approval*, *Approved*, *Rejected*, *Finished*, *Cancelled*, or *Error*. Clear the field to enable the **All** option. |

### Report fields

- **ID**.  
- **Vendor**.  
- **User**.  
- **Credential**.  
- **Device**.  
- **Approval date**: displays the date and time when the access request was approved.  
- **Expiration date**.  
- **Status**.  
- **Actions**:  
    - **Details:** opens the [Access details](/v4/docs/domum-credentials-by-users-report#access-details-screen) screen.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Access details screen

| Item | Description |
| ----- | ----- |
| **User** | User that accessed. |
| **Vendor or Group** | Vendor or group that the user is in. |
| **Status** | Status of the access. |
| **ID** | ID of the access. |
| **Access group** | Access group type associated with the access. |
| **Start date** | Date when the access started. |
| **End date** | Date when the access ended. |

## Credentials section

| Item | Description |
| ----- | ----- |
| **ID** | Credential identification code. |
| **Type** | The type of credential. |
| **Username** | Username of the credential. |
| **Device** | Device associated with the credential. |
| **Init session** | Display if the credential can start a session. |
| **View password** | Indicates if the credential allows password viewing. |

## Restriction access section

| Item | Description |
| ----- | ----- |
| **Access permission days** | Displays which days access is allowed. |
| **Access permission times** | Displays the allowed times for access. |
| **Maximum number of sessions** | Displays the maximum number of allowed sessions. |

## Justification section

| Item | Description |
| ----- | ----- |
| **Governance code** | Governance code of the access. |
| **Reason** | Reason for the access. |
| **Justification** | Justification for the access request. |