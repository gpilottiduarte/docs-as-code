# Audited commands

This document provides information about the **Audited commands** report screen, which shows the list of commands that have been registered to be audited during a session.

## Paths to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Sessions > Audited commands**.

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **User Behavior**.  
2. In the side menu, select **Management > Audited commands**.

## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for registering new commands,  *Print report, Export CSV* and *Schedule report.* |
| **New global command** | Button | Directs to the [Global command](/v4/docs/pam-session-new-command) screen. |
| **New command by credential** | Button | Directs to the [Command by credential](/v4/docs/pam-session-new-command) screen. |
| **New command by device** | Button | Directs to the [Command by device](/v4/docs/pam-session-new-command) screen. |
| **New command by group** | Button | Directs to the [Command by group](/v4/docs/pam-session-new-command) screen. |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the audited commands by their identification code within Segura. |
| **Name** | Text field | Filters the audited commands by the identification name of the command registered within Segura. |
| **Command** | Text field | Filters the audited commands by the registered command. Example: `passwd` |
| **Criticality** | Dropdown menu | Filters the audited commands by their criticality level. The options are *Low*, *Medium,* and *High***.** Clear the field to enable the **All** option. |
| **Type** | Dropdown menu | Filters the audited commands by their registration rule type. The options are *Credential, Device, Global* and *Group*. |
| **Session type** | Dropdown menu | Filters the audited commands by the type of session that was registered. The options are *All*, *Terminal* and *Database*. |
| **Status** | Dropdown menu | Filters audited commands by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Name.**  
* **Command.**  
* **Criticality.**  
* **Type.**  
* **Session type.**  
* **Action during session**: the action that happens in the session as a result of executing the command.  
* **Occurrences**: the number of times the command must be used for the chosen action to occur.  
* **Score:** the score assigned to the command in the registration that defines its criticality.  
* **Status.**  
* **Actions:**  
  * **Edit**: open the [Command registration](/v4/docs/pam-session-new-command) screen by credential, device, group, or global, according to the type specified in the command, to make the desired changes. The **Enabled** field is only available on the edit screens.  
  * **View audit history:** open the **Event log** report screen.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

---
### Event log screen  
This section provides information about the **Event log** report screen, which lists the audited commands that were used during a session.

## Search fields
| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the audited commands by their identification code within Segura. |
| **Command** | Dropdown menu | Filters the audited commands by their name. |
| **Criticality** | Dropdown menu | Filters the audited commands by their criticality level. The options are *Low*, *Medium,* and *High*. Clear the field to enable the **All** option. |
| **Action of session** | Dropdown menu | Filters the audited commands by the action that occurred when using the command. The options are *Allow, Lock, Interrupt,* and *Force*. |
| **Local user** | Text field | Filters the audited commands by the name of the user who used the command. |
| **Audited command** | Text field | Filters the audited commands by the registered command.  Example: `passwd` |
| **Typed command** | Text field | Filters the audited commands by the line where they were entered by the user. |
| **Event date** | Date picker | Filters the audited commands by the period they were used. |

## Report fields

* **ID.**  
* **Command.**  
* **Score.**  
* **Criticality.**  
* **Action during session.**  
* **Local user.**  
* **Audited command.**  
* **Typed command.**  
* **Event date.**  
* **Executed in:** the exact time the command was used.
