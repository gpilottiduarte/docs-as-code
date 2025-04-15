# How to register new audited command

This document provides information about step-by-step guide on how to register a command to be audited in a remote session.

Audited commands allow segmentation at the **Global**, **Access group**, **Device**, and **Credential** levels. The difference is that there will be no overlapping of a command based on the chain of segregating entities. It’s a sum of rules, a possibility to isolate commands belonging to certain credentials and devices from a certain manufacturer.

:::(warning) (**Caution**)
The audited commands functionality is available only for Database Proxy, Terminal Proxy, and Terminal via Web Proxy sessions.
:::

## Requirements

* Be a user with the role of pam administrator, pam operator, or system administrator.

---
## Register a command
:::(warning) (**Caution**)
Registered audited commands are loaded at the beginning of each session. If a session is already active and a new command is registered, it won't affect the already started session.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Management** > **Sessions** > **Audited commands**.
3. Click on the **Actions** menu.
    1. Choose one of the options to add a new command.

#### New global command

1. On the **Global command** screen, fill in the mandatory fields identified by the asterisk.
2. In the **Command** tab, fill in:
    1. **Name***: name to identify the command to be audited.
    2. **Session type***: select the type of session that will have the command audited, and choose from the options *All*, *Terminal Proxy*, or *Database Proxy*.
        :::(info) (**Info**)
        The option **Terminal** includes any session of the type **SSH** and **Telnet** that is accessed through a session **Web Proxy** and/or sessions accessed through **Terminal Proxy**.
        :::
    3. **Criticality***: level of criticality that the command will have, choose between the options *Low*, *Medium* and *High*.
    4. **Action during session***: the action that will occur when carrying out the command. Choose between the options *Allow execution*, *Deny execution*, *Interrupt session* and *Force*.
        :::(info) (**Info**)
        To understand each type of action that can be chosen in this field, access the Actions triggered by executing audited commands document.
        :::
    5. **Occurrences (minimum)**: the number of times the command can occur until the action is performed. Choose between *1* and *10*.
    6. **Block and disable user?**: choose between options Yes or No.
        :::(warning) (**Caution**)
        If the **Yes** option is set, the user will be disconnected and blocked instantly.
        :::
    8. **Command***: writes the regular expression of the command to be audited according to the rule.
        :::(info) (**Info**)
        The use of the asterisk * to capture all executed commands won't work. Commands must be fully specified. Ex.: `update public\.table name*`
        :::
    8. **Description***: describe the command being registered.
3. Click **Save**.

#### New command by credential

1. On the **Command by credential** screen, fill in the fields described in the **Command tab**, as the example above.
2. On the **Credentials tab**:
    1. Click on **Add** and select the credentials that will be audited by this command.
3. In the **Review** tab, check the configurations made in the previous steps.
4. Click **Save**.

#### New command by device

1. On the screen **Command by device**, fill in the fields described in the **Command tab**, as the example above.
2. On the **Device** tab:
    1. Click on **Add** and select the devices that will be audited by this command.
3. In the **Review** tab, check the configurations made in the previous steps.
4. Click **Save**.

#### New command by group

1. On the screen **Command by group**, fill in the fields described in the **Command tab**, as the example above.
2. On the **Groups** tab:
    1. Click on **Add** and select the groups that will be audited by this command.
3. In the **Review** tab, check the configurations made in the previous steps.
4. Click **Save**.

:::(info) (**Info**)
After using any command registered in any session, the command can’t be changed, the **Command*** field will be inactive and the message **"The command cannot be changed as there have already been records in the log. Use the Clone command function.”** will be available just below the field.
:::

The system displays a message confirming the command registration. All sessions started after this registration will have tracking of these commands. With each use of a registered audited command, Segura displays the message **“Auditing command. Please wait…”** and these commands will be displayed in the **Event Log** report.

:::(info) (**Info**)
If any command is registered, Segura will display only the beginning and end of the session in its [Event Log](/v4/docs/pam-session-session-events) report.
:::


---
Do you still have questions? Reach out to the [Segura community](https://community.Segura.io/){target=`_blank`}.