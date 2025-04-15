# About Actions triggered by executing audited commands

When an audited command rule is applicable to a command that the user-operator wants to execute, Segura will record the time of the proxy session, and will add the risk score of this command executed in the session.

In addition, the rules defined by the administrator will apply. There are four direct actions:

* **Allow execution**: commands registered with this action will be audited and will be present in the logs. The execution is allowed.
* **Block execution**: commands registered with this action will be prevented from being executed, the system displays a message that the command is blocked and its execution is not permitted. The command will be audited and will be present in the log record. This command is inserted in the denylist.
* **Interrupt**: commands registered with this action, besides being prevented from being executed, the user will have their session interrupted instantly. The command will be audited and will be present in the log record. This command is inserted in the denylist.
    :::(info) (**Info**)
    For **Interrupt** action, it’s possible to register a number of times that the user can try to execute the command before having their session interrupted, in other words, if the number of times is 3, the user will receive the command blocked message for 2 times and on the third attempt their session will be interrupted.
    :::
* **Force**: commands registered with this action will be audited and will be present in the logs record. Only its execution will be permitted. This command is inserted in the allowlist.

:::(warning) (**Attention**)
The administrator can register an unlimited number of rules with different types of actions. Although when commands are registered with the **Force** action, only the commands in this list can be executed, all others will no longer be allowed. However, if a command has the **Force** action but is also registered with the **Block** or **Interrupt** action it **won’t** be executed.
:::

There are also indirect actions that can be configured:

* **Block Segura account**: If the rule is applicable, regardless of type, the user's access account may be locked after a series of repetitions of the command.
* **User Behavior Score**: the command can receive three types of punctuation that will feed the user, device, and behavioral statistics of credentials.