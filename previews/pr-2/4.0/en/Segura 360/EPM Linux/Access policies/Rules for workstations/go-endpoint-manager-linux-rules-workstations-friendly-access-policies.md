# Register user-friendly access policies

1. Access the Segura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝** and select the option **New rule for workstation.**
4. At the **Registration of rules per workstation** form, in the **Main** tab, complete the fields:
    * **Policy name:** define an easy-to-identify name. 
    * **Enabled:** if enabled, the policy will be applied across devices.
    * **Guideline:** select a policy type.
5. In the **Application** tab, complete the fields:
    * **Enable audit?:** the field is required and is enabled by default. It allows auditing of actions performed. 
    * **Enable session recording?:** mark **Yes** to have session recordings of logged binaries. The start of the session is linked to the execution of the binary only after the execution is over.
    * **Include general denial rule?:** if this option is checked, no Linux workstation user will be able to execute something not allowed by the access policy. If unchecked, all Linux workstation users will be allowed to run everything except what the rule blocks.
    * **Application path:** the location of the program on the file system. Find the path of the program using **which [the command you want]**.
    * **Is the path a symbolic link?:** check if this added path is a link to a file or directory. Find out if it's a symbolic link by typing **ls -la [the command path you want]**. 
6. Click **Add.**
    * **Permission:** choose between allowing or blocking, depending on the policy being created.
    * **User or group:** add who this rule is for, a user or group.
    * **User or group name:** fill in the name of the user or group according to the type chosen in the previous field. It must be the user's primary group.
7. Click **Add.**
8. Go to the **Workstations** tab.
9. Select **Workstations+.**
10. Choose the workstations you want to add to the segregation.
11. Click **Add.**
12. Click **Save.**

* * *
## Policies added to the device
To validate that the policy has been added to the device:

1. Access the Linux terminal.
2. Enter the command:
```shell
cat /sys/kernel/security/caitsith/policy
```
