# Register general rule

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Rules for sudo.**
3. Click **⁝** and select the option **New rule of general sudo.**
4. At the **Registration rules for sudo** form, in the **Main** tab, complete the fields:
    * **Identification name:** define a name to identify the rule.
    * **Enabled:** set the status of the rule.
    * **Commands for rule application (must be used the full path):** fill in with the  command's path that you can run as sudo and elevate privileges. To find the command's path in the Linux terminal, run **which [the command you want].**
    * **It should be NOPASSWD?:** if you check **Yes**, the user won’t be prompted for a password to run the command as sudo. If you check **No**, the user will be asked for a password to run it.
    * **Description:** add a brief description about this rule.
5. Click **Save.**
* * *
## Validate sudo rules on the target device

1. Access the Linux terminal.
2. Enter the command to verify:
```shell
cat /etc/sudoers.d/senhasegura
```

