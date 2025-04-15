# Access control history

This document provides information about the **Access control history** screen in the **Audit** menu, which helps auditors track access requests and identify the requesting user and details in **Domum Remote Access**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Audit \> Access control history**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters the history by their identification code in Segura. |
| **Date** | Date picker | Filters the history by the period during which they were added. |
| **User** | Text field | Filters the history of the user. |
| **Access ID** | Text field | Filters the history by the access code. |
| **IP** | Text field | Filters the history by the user's IP address. |
| **Justification** | Text field | Filters the history by the justification provided during access. |
| **Governance ID** | Text field | Filters the history by the governance code of access. |
| **Operation** | Dropdown menu | Filters the history by the status of the requested operation: *Approved*, *Rejected*, or *Cancelled*. Clear the field to enable the **All** option. |
| **Reason** | Dropdown menu | Filters the history by reason. You can filter pre-existing types or reasons registered by the administrator by default. Clear the field to enable the **All** option. |

### Report fields

- **ID**.  
- **Date**.  
- **User**.
- **Operation**.  
- **IP**.
- **Access ID**.  
- **Justification**.
- **Governance ID**.  
- **Reason**.  
- **Actions**:  
    - **Details**: opens the [Access details](/v4/docs/domum-access-control-history#access-details-screen) screen. 

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Access details screen

| Item | Description |
| ----- | ----- |
| **User** | User that accessed. |
| **Vendor or group** | Vendor or group that the user is in. |
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
| **View password** | Indicates whether the credential allows viewing passwords. |

## Restriction access section

| Item | Description |
| ----- | ----- |
| **Access permission days** | Displays which days access is allowed. |
| **Access permission times** | Displays the times when access is allowed. |
| **Maximum number of sessions** | Displays the maximum number of allowed sessions. |

## Justification section

| Item | Description |
| ----- | ----- |
| **Governance code** | Governance code of the access. |
| **Reason** | Reason for the access. |
| **Justification** | Justification for the access request. |