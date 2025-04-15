# Domum interface for limited users

This document provides information about **Domum**’s access screen for limited users, that displays shortcuts for users to access credentials on their custody, available credentials, and the history of the actions performed.

:::(Info) (Info)
The access policy and the administrator settings will determine your permissions and the functionality available on the screen.
:::

## Top bar

| Item | Description |
| ---- | ---- |
| **Search bar** | Search credentials and devices. |
| **\+ Add** | Directs to the New Access screen. |
| **User menu** | The options are: *Token*, *Mode*, *Language*, *List*, and *Sign out*. |

## Credentials tab

### My custody section

This section provides a list of all credentials that are in your custody.

| Item | Description |
| ---- | ---- |
| **Release from custody** | Releases the custody credential. |
| **Details** | Directs to the [Access details](/v4/docs/domum-interface-for-limited-users#access-details-screen) screen. |

### Available section

This section provides a list of all credentials registered for your access.

| Item | Description |
| ---- | ---- |
| **Start session** | Starts the session on the registered device. |
| **Copy password** | Directs to the [Access details](/v4/docs/domum-interface-for-limited-users#access-details-screen1) screen. |
| **Details** | Directs to the [Access details](/v4/docs/domum-interface-for-limited-users#access-details-screen1) screen. |
| **Increase access time** | Directs to the [Increase access time](/v4/docs/increase-access-time) screen. |

## History tab

This section provides a list of all sessions, credentials used by date and time, along with the action performed.

| Item | Description |
| ---- | ---- |
| **Device and action** | Name of the device with the action performed. |
| **Date and time** | Date and time the action was performed. |
| **Action** | Button of the action performed. |

## Access details screen

| Item | Description |
| ---- | ---- |
| **Credential** | Access credential. |
| **Device** | Credential device. |

### Custody information

| ID | ID of the credential. |
| ---- | ---- |
| **Username** | User name. |
| **Additional information** | Additional user information. |
| **Credential type** | Credential type. |
| **Expiration date** | Access expiration date. |
| **Última mudança** | Credential last change date. |
| **Begin of custody** | Credential custody start date. |
| **Last view** | Credential last query. |
| **Duration** | Credential duration. |

## Access details screen

| Item | Description |
| ----- | ----- |
| **User** | User that accessed. |
| **Vendor or group** | Vendor or group that the user is in. |
| **Status** | Status of the access. |
| **ID** | ID of the access. |
| **Access group** | Access group type of the access. |
| **Start date** | Date when the access started. |
| **End date** | Date when the access ended. |
| **Requester** | This field is only visible if you access this screen through the **Copy password** button. |
| **Device** | This field is only visible if you access this screen through the **Copy password** button. |
| **View password** | This button is only visible if you access this screen through the **Copy password** button. |
| **Copy password** | This button is only visible if you access this screen through the **Copy password** button. |
| **Spell password** | This button is only visible if you access this screen through the **Copy password** button. |

### Credentials section

| Item | Description |
| ----- | ----- |
| **ID** | Credential identification code. |
| **Type** | The type of credential. |
| **Username** | Username of the credential. |
| **Device** | Device associated with the credential. |
| **Init session** | Display if the credential can start a session. |
| **View password** | Display if the credential can view passwords. |

### Restriction access section

| Item | Description |
| ----- | ----- |
| **Access permission days** | Display which days the access can be made. |
| **Access permission times** | Display when the access can be made. |
| **Maximum number of sessions** | Displays the maximum number of sessions. |