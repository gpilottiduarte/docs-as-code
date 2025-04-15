# Register alias policies

When creating a **New rule for workstations**, the **Alias** tab allows the creation of aliases (alternative names for commands) through EPM Linux. You can create shortcuts to manage the most used commands, streamlining the use of the terminal.

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies**.
3. Click **⁝** and select the option **New rule for workstation**.
4. At the **Registration of rules per workstation** form, in the **Main** tab, complete the fields:
* **Policy name:** define an easy-to-identify name. 
* **Enabled:** if enabled, the policy will be applied across devices.
* **Guideline:** select a policy type.
* **Allow or block:** set to **Allow**.
* **Rule text:** fill with handler="/usr/bin/secpack-trec-triggered"
5. Click **Add**. 
6. Go to the **Alias** tab.
:::(Warning) (Caution)
Be careful when filling out the alias for commands that may affect the use of the system.
:::
7. Complete the fields:
* **Alias:** fill in the full path of the command you want to use.
* **Command:** fill in the full path of the command you want to replace.

8. Go to the **Workstations** tab.
9. Select **Workstations+**.
10. Choose the workstations you want to add to the segregation.
11. Click **Add**.
12. Click **Save**.

:::(Info) (Info)
In the Linux terminal, use **which [the command you want]** to find out the path of the binary.
:::

* * *
## Check created aliases
1. Access the Linux terminal.
2. Enter the command: 
```shell
cat /etc/senhasegura/aliases
```
