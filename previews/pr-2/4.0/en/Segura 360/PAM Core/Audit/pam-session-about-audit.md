# Audit

This document provides information about what it is, how it works, and the main applicabilities of the **Audit**.

## What is the audit?
Segura offers an intermediate terminal executed internally on SSH proxy technologies. This intermediate terminal evaluates the command at runtime and determines, based on active rules, whether or not it can be executed on the remote device.

## Functionality 
Create different configurations that allow or inhibit the execution of specific commands.
These commands can be evaluated using **regular expressions** defined by the administrator, and if they meet the standard, an action can be taken.

:::(info) (**Info**)
It's necessary to have good knowledge of regular expressions to evaluate the commands correctly.
:::

:::(warning) (**Caution**)
If the user has started a binary on the target server, that binary will be handed over to the control of the user's operator. In this case, the audited commands are no longer evaluated. This will ensure that there are no conflicts between terminal commands, texts, and arguments used in other binaries.
:::
