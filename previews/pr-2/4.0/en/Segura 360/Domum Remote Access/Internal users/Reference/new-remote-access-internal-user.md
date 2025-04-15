# New remote access - Internal user

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Request access \> Internal users**, and click **Add**.

## Settings tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Group \*** | Dropdown menu | Yes | Selects the group. |
| **User \*** | Dropdown menu | Yes | Selects the user. |

### Request details section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Justification \*** | Text field | Yes | Enter a justification for the access. |
| **Reason \*** | Dropdown menu | Yes | Select the reason for the access. The options are: *Change*, *Incident*, and *Remote work force*. |
| **Governance Code** | Text field | No | Enter the governance code. |

## Devices tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected devices. |
| **Devices table** | Table | No | The fields are: *ID*, *Device*, *Product*, *Device type*, *Site*, and *Domain*. |
| **ID** | Text field | No | ID of the device. |
| **Device** | Text field | No | Device to have access. |
| **Product** | Text field | No | Product of that device. |
| **Device type** | Text field | No | Type of the device. |
| **Site** | Text field | No | Site of the device. |
| **Domain** | Text field | No | Domain of the device. |

## Credentials tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add / Remove selected** | Button | No | Add or remove the selected credentials. |
| **Credentials table** | Table | No | The fields are: *ID*, *Credential type*, *Username*, *Device*, *Domain*, *Start session*, and *View password*. |
| **Credential type** | Text field | No | Type of the credential. |
| **Username** | Text field | No | Username assigned to the credential. |
| **Device** | Text field | No | Device assigned to the credential. |
| **Domain** | Text field | No | Domain of the credential. |
| **Start session** | Checkbox | No | Checkbox to allow the credential to start a session. |
| **View password** | Checkbox | No | Checkbox to allow the credential to view passwords. |

## Access limitation tab

### Access permission period section

| Item | Type | Description |
| ----- | ----- | ----- |
| **Start** | Date picker and Time picker | Selects the time and date when the access is allowed. |
| **Duration** | Text field | Type of the credential. |

### Access permission days section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **All days** | Toggle button and checkbox | No | If enabled, the user must request approval every day. If disabled, select the days of the week on which group members must request approval. |

### Access permission times section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **All Times** | Toggle button | No | Enables or disables the period of time in which the user will have to request approval. |
| **Custom Period** | Toggle button and time picker | No | Enables or disables a specific time range within which the user must request approval. When enabled, two-time pickers are enabled so that the beginning and end of the period can be stipulated. |

### Sessions

| Item | Type | Description |
| ----- | ----- | ----- |
| **Unlimited** | Checkbox | Selects if the amount of sessions is limited. |
| **Maximum quantity** | Quantity input | If the **Unlimited** checkbox is not ticked, select the maximum quantity of sessions allowed. |

## Review

Use the **Review** tab to check all the information entered in the previous tabs.