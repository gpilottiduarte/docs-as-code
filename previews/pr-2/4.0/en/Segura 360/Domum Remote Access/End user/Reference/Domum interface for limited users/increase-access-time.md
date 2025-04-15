# Increase access time

## Path to access

1. On an available credential, click the **Increase access time** button.

## Settings tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Vendor** | Dropdown menu | Yes | Displays the vendor. |
| **User** | Dropdown menu | Yes | Displays the user. |

### Request details section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Justification \*** | Text field | Yes | Enter a justification for the access. |
| **Reason \*** | Dropdown menu | Yes | Select the reason for the access. The options are: *Change*, *Incident*, and *Remote work force*. |
| **Governance Code** | Text field | No | Enter the governance code. |

## Credentials tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **ID** | Text field | No | ID of the credential. |
| **Credential type** | Text field | No | Type of the credential. |
| **Username** | Text field | No | Username assigned to the credential. |
| **Device** | Text field | No | Device assigned to the credential. |
| **Start session** | Checkbox | No | Checkbox to allow the credential to start a session. |
| **View password** | Checkbox | No | Checkbox to allow the credential to view passwords. |

## Access limitation tab

### Access permission period section

| Item | Type | Description |
| ----- | ----- | ----- |
| **Start** | Date picker and Time picker | Select the time and date when the access is allowed. |
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

### Sessions section

| Item | Type | Description |
| ----- | ----- | ----- |
| **Unlimited** | Checkbox | Select if the amount of sessions is limited. |
| **Maximum quantity** | Quantity input | If the **Unlimited** checkbox is not ticked, select the maximum quantity of sessions allowed. |

## Review

Use the **Review** tab to check all the information entered in the previous tabs.