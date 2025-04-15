# Overview

This functionality replaces the standard sudo, helping to simplify, centralize and manage sudo usage rules. Rules define which commands users can run as sudo and elevate privilege when the user is not part of the sudoers user group.

You can apply rules in the following scenarios:

* **New general sudo rule:** this rule will apply to all users and workstations. Users must be in the gonix group.
* **New sudo rule for workstations:** this rule will only apply to specific workstations. Users on the workstations must be in the gonix group.
* **New sudo rule for users:** this rule will only apply to specific users. It is not necessary to be in the gonix group.

:::(Warning) (Caution)
When creating rules with the same command, the new rule overrides the old one.
:::

The rules obey the following order of priority:

1. Sudo rule for users
2. Sudo rule for workstations
3. General sudo rule

* * *
## Add a user to the Gonix group
Each user who will use the rules for sudo (general, for workstations and users) has to be included to the "gonix" group. Follow the steps:

1. Access the terminal where EPM Linux is installed.
2. Enter the command to add the user to the gonix group:
```shell
sudo usermod -a -G gonix USERNAME
```
3. Enter the command to create the password for the sudo user:
```shell
sudo passwd USERNAME
```
4. Enter the command to confirm that the user is part of the gonix group:
```shell
sudo getent group gonix
```
