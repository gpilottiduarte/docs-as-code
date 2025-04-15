# Use cases

## General
### Case 1: Allow any user to run the "cat" command as sudo.

1. Access the Segura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Rules for sudo.**
3. Click **⁝** and select the option **New rule of general sudo**.
4. At the **Registration rules for sudo** form, in the **Main** tab, complete the fields:
    * **Identification name:** define a name to identify the rule.
    * **Enabled:** mark** Yes** to indicate that you want to enable the rule.
    * **Commands for rule application (must be used the full path):** the full path must be used. Add the command path **/usr/bin/cat**.
    * **It should be NOPASSWD?:** mark **Yes** to not prompt the user to enter the password.
5. Click **Save.**

* * *
## Workstations
### Case 1: Allow any user to run the "cat" command as sudo for a specific workstation

1. Access the Segura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Rules for sudo.**
3. Click **⁝** and select the option **New sudo rule for workstation.**
4. At the **New sudo rule for workstation** form, in the **Main** tab, complete the fields:
    * **Identification name:** define a name to identify the rule.
    * **Enabled:** mark** Yes** to indicate that you want to enable the rule.
    * **Commands for rule application (must be used the full path):** the full path must be used. Add the command path **/usr/bin/cat**
    * **It should be NOPASSWD?:** mark **Yes** to not prompt the user to enter the password.
5. Go to the **Workstations** tab.
6. Select **Workstations+.**
7. Choose the workstations you want to add.
8. Click **Add.**
9. Click **Save.**
