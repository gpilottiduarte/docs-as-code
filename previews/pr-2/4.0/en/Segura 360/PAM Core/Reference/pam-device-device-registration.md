# Device registration

This document provides information about the **Device** form screen, where it is possible to add new devices to be accessed in remote sessions.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Devices > All devices.**  
3. On the report screen **Devices**, click on **Actions > Add.**

---
## Information tab  
This section provides information about the device’s general information.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Device name (Hostname, IP, url ou website name, application name...)*** | Text field | Yes | The device name is how this device is referenced in Segura, such as in device groups. |
| **IP, Hostname or management URL*** | Text field | Yes | A network address, hostname, or IP address for Segura to connect to this device. |
| **Device type*** | Dropdown menu | Yes | Defines the device type. |
| **Vendor*** | Dropdown menu | Yes | Defines the manufacturer related to the device. |
| **Product*** | Dropdown menu | Yes | The chosen supplier's product. Also used for web session parameters. |
| **Site*** | Dropdown menu | Yes | Defines the division the device is listed in. |
| **Tags** | Text field | No | Words that characterize the device. |
| **Domain** | Dropdown menu | No | Defines the domain that the device will be related to. |

## Connectivity tab  
This section provides information about the device’s connectivity tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable remote application usage** | toggle button | No | Defines whether app usage will be enabled for the device. The options are **Yes** and **No**. |
| **Network Connector** | Dropdown menu | No | The network connector of the Segura **Network Connector** product that you want to use to connect to this device. |
| **Add/Remove selected** | Button | No | Adds a row to the table. |
| **Connectivity** | Table | No | The connection protocol that will be used to start a proxy session, change password, and to connect to other modules, the fields are: *Connectivity*, *Port* and *Connectivity Test*. |

## Additional Settings tab  
This section provides information about other configurations that can be made on the devices.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Criticality** | Dropdown menu | No | Indicates a change in user behavior. The options are: *Low*, *Average* and *High*. |

#### Login expressions section  
This section regular expressions can be passed to be used by the Segura platform to authenticate devices when using command-line protocols

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Add/Remove selected** | Button | No | Adds a row to the table. |
| **Connectivity** | Dropdown menu | No | Type of connection to be made. |
| **Expected expression** | Text field | No | Regular expression required for login. |
| **Fill value** | Text field | No | When in Telnet sessions, Segura isn’t able to automatically fill in username and password but with this option, it’s possible to pass these parameters. |

## Review tab  
This section contains the information that was added in the previous steps so that it can be analyzed and, if any changes are needed, made before finalizing the registration.