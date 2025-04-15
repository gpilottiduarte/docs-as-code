# Command execution request

This document provides information about the **Command execution request** form screen, where you can request to use a command that was registered with the Deny execution or Interrupt session.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > Audited commands** > **Command execution request**.

---
## Command execution request registration screen

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Command*** | Text field | Yes | Command requested for use. Commands must be fully specified. Ex.: `update public\.table name` |
| **Device*** | Dropdown menu | Yes | Select from the available list which device the command will be used on. The options are the devices registered in Segura. |
| **Session type*** | Dropdown menu | Yes | Select the type of session where the command will be used. The options are *All*, *Terminal Proxy* and *Database*. |
| **Justification*** | Text field | Yes | Describe why you need to use the command. |
| **Reason*** | Dropdown menu | Yes | Select the reason for requesting the command execution. The options are according to the reasons registered in Segura. |
| **Governance Code** | Text field | No | Inform the ITSM software code. |
| **Start Access*** | Date and time picker | Yes | Select the initial day and time that the command execution will be available for use. |
| **Access end*** | Date and time picker | Yes | Select the final day and time that the execution can be used. |