# How to configure and use GO Shell

**GO Shell** is a feature of **PEDM GO Endpoint Manager for Windows**, which allows the administrator to manage the execution of previously permitted commands, ensuring control and security of the environment.

Follow the steps below to enable specific commands in workstations with the customer **PEDM GO Endpoint Manager** installed.

1. In senhasegura, access the PEDM GO Windows commands page, through the path, **Grid Menu** > **PEDM GO Endpoint Manager** > **Policies** > **Windows** > **Commands**.
2. Click on the view actions button, represented by the three vertical dots and select, according to your needs, the option **General segregation** (applied to all workstations), or the option **Workstation segregation** (applied in a single workstation).
3. Fill the form **Register windows commands**.
* In the **Name** field, define a name for the rule to be created.
* In the **Active** field, define whether this rule will be active or not after saving.
* In the **Command** filed, write the command being configured in the rule. Example: `ipconfig`, `net session`, `tasklist` ...
4. Click on the **Save** button.

Once one, or more, commands are registered by an administrator in senhasegura, only these commands can be executed on the user's machine.

To run a command on the user's machine, open the **GO Shell** through **senhasegura.go client** and enter the desired command.

When running another command interface (CMD, PowerShell, Git Bash…), the **GO Shell** of **senhasegura.go client** will be opened instead.

It’s possible to use regular expressions (regex) to register commands that require parameters. Example: `ping .*`.

## GO Shell commands

For more information about the **GO Shell** and its allowed commands, use the `goshell` command:
* Run `goshell--commands` to view the available commands.
* Run `goshell--help` to view command options.
* Run `goshell--update` to update the list of allowed commands.