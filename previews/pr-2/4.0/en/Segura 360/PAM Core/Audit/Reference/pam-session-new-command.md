# New command

This document provides information about the **Global command**, **Command by credential**, **Command by device** and **Command by group** form screen, where it’s possible to add new audited commands for global use, or segregate by credential, device, or group.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Sessions > Audited commands.**  
3. In the report screen, click on the menu **Actions > New command.**

---
## Command Section  
This section provides information that is common in any type of audited command that is being registered. Global, by credential, by device or by group.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Command identification name. |
| **Session type*** | Dropdown menu | Yes | Type of session in which that command will be audited. The options are *All*, *Terminal Proxy* and *Database*. |
| **Criticality*** | Option button | Yes | Defines the criticality of the command. The options are *Low*, *Medium* and *High***.** Clear the field to enable the option **All**. |
| **Action during session*** | Dropdown menu | Yes | Select the action that happens in the session as a result of executing the command. The options are *Allow execution*, *Deny execution*, *Interrupt session* and *Force*. |
| **Occurrences (minimum)** | Quantity selector | No | Select the number of times the command can be used until the action chosen in the previous field is performed. The options are from 1 to 10. |
| **Block and disable user?** | Dropdown menu | No | Option only enabled when the **Action during session** field is *Deny execution* or *Interrupt session*. The options are **Yes** or **No**. |
| **Command (ex: passwd \* or regular expression: .+reboot.+$)*** | Text field | Yes | Enter the regular expression of the command to be audited according to the rule. For example: `/.*passwd.*/` |
| **Description*** | Text field | Yes | General information about the audited command. |

## Command by credential screen  
### Credential Section

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Search** | Text field | No | Search for the credential in the list of included credentials. |
| **Add** | Button | No | Opens the Segura credentials screen, so they can be included. |
| **Credentials table** | Table | No | Data for each added credential containing *checkbox*, *ID, Credential Type, Username, Device,* *Device Type, Product, Vendor* and *Site fields.* |

---
## Command by device screen  
### Device Section

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Devices** | Text field | No | Search for the device in the list of included devices. |
| **Add** | Button | No | Opens the Segura devices screen, so they can be included. |
| **Device table** | Table | No | Data from each added device containing *checkbox*, *ID, Device name, Management,* *Site, Product, Type* and *Vendor fields.* |

---
## Command by group screen   
### Groups tab

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Groups** | Text field | No | Search for the group name in the list of included groups. |
| **Add** | Button | No | Opens the Segura groups screen, so they can be included. |
| **Group table** | Table | No | Data from each added group containing *checkbox*, *ID, Group, Part of password, View password, Approval for viewing, Permission for session* and *Approval for session fields.* |

---
### Review tab  
This section is common in audited command registrations by credential, device, or group. It contains the information that was added in the previous steps so that it can be analyzed and, if any changes are needed, made before finalizing the registration. The information is grouped by each tab respectively.