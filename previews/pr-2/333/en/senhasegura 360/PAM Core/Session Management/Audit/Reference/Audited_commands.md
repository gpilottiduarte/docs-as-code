# Audited commands

In this document, you’ll find all the information about the **Audited commands** report, which shows the list of commands registered to be audited during a session.

---
### Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Audited commands**.

---

## Top bar
**Item**|**Description**
|---|---|
**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
**View actions**|Represented by the three vertical dots icon, it shows all the possible actions for the report.
| **New global command**| Represented by the plus sign, it adds a command with a global rule.|
| **New command by credential** | Represented by the key icon, it adds a command with a rule for credentials.|
| **New command by device**  | Represented by the computer icon, it adds a command with a device rule.|
| **New command by group**| Represented by the group icon, it adds a command with a rule for access groups.|
| **Print report**| Represented by the printer icon, it opens a new page for printing the report. |
**Print report**|Represented by the printer icon, it opens a new page for printing the report.
**Export CSV**|Represented by the paper sheet icon, it downloads the report.
**Schedule report**|Represented by the clock icon, it opens the Schedule report form.


## Search fields

| **Item**| **Description**|
| ------------- | ---------------------- |
| **ID**| Command registration order number.|
| **Name**| The given name to the registered command.|
| **Command**| Audited command.|
| **Criticality**| Level of criticality assigned to the command, with options *Low*, *Medium*, and *High*. |
| **Type**| The rule type of the command created. Options are *Credential*, *Device*, *Global*, and *Group*.|
| **Session type**  | The type of session in which the command was used. Options are *All*, *Terminal Proxy*, and *Database Proxy*. |
| **Enabled**| Command status, with options *Yes* and *No*.|


## Report fields

* **ID**.
* **Name**.
* **Command**.
* **Criticality**.
* **Type**.
* **Session type**.
* **Action during session**: action that will occur when the command is executed.
* **Occurrences**: the number of times the command must be used for the chosen action to occur.
* **Score**: based on the operation criticism.
* **Enabled**.
* **Action**:
    * **Edit**: represented by the pencil and paper icon, it opens the command registration screen by credential, device, group, or global, according to the type specified in the command. Make the desired changes and click **Save**.
        :::(info) (**Info**)
        If you need to create a command similar to an existing command, including entities already linked (such as device, credential, or access group), you can use the **Clone command** action.
        :::
    * **Three vertical dots icon**: when clicked, it opens the **View audit history** option and the report screen **Event Log** is displayed.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click the next buttons at the end of the report.
:::
