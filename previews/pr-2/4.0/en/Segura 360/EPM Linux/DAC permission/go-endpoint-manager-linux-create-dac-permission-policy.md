# How to create an access policy for DAC permission

This article will guide you through a step-by-step process on how to create a DAC permission type at the Go Linux.

## Requirements

* Be an admin user.

* * *

## Create the permission

1. At the **Segura** platform, in the upper left corner, click on the **Grid Menu ⁝⁝⁝** and select **EPM.**
2. Select **Policies ➔ Linux ➔ Access policies.**
3. In the upper right corner, click on the **View Actions** icon, represented by the three vertical dots **⁝** and select **+ New rule.**
4. This action will open a pop-up windows called **Access policy register.**

#### In the Main tab fill in the information:

1. **Policy name:** the new rule identification name.
2. **Enable:** check **Yes.**
3. **Guideline:** select **Binary Run.**
4. **Checker (path or executor):** type this command line:

`path="/bin/(diretório do app)" path.perm=(número da máscara de execução) path.perm=(grupo de usuário/usuário)`
For example: `path="/bin/passwd" path.perm=07777 path.perm=Segura.`

:::(Info) (Info)
The mask execution values are listed in the [DAC Permission](/v4/docs/go-endpoint-manager-linux-dac-permission) document.
:::

:::(Warning) (Caution)
If the admin doesn’t want to give access to a specific group or user, it must use the exclamation point ! before the equal sign. For example: `path.perm!=Segura`. This way, the rule will be applied to all the users, except the group or user specified.
:::

:::(Error) (Important)
Typing incorrectly or leaving the field empty leads to the total unusable of the device. Follow [CaitSith's syntax](https://caitsith.osdn.jp/#syntax_list) to complete this field correctly.
:::

5. **Enable audit?:** the field is required and enabled by default. Leave it enabled if you want to audit the policy actions.
6. **Include general denial rule?:** check it to allow only the registered rules and deny the binary not included.
7. **Allow or lock:** select whether the registered policy allows or denies access to the user or group.
8. **Rule text:** fill in a rule in the format of policies in CaitSith. For example:  `task.gid=(nome do grupo)` or `task.uid=(nome do usuário)`
:::(Warning) (Caution)
The first rule added takes precedence over rules added later. If you create a rule that allows the execution of the binary and then add another rule to block the execution of the same binary, the access policy will only consider the first rule, leaving the second rule  unconsidered.
:::

9. Click **Add** for each rule.
:::(Info) (Info)
The created rules will be listed on the list, below the fields, to remove any rule click on the trash bin icon, from the selected rule
:::
10. Click **Save.**


The platform will display a confirmation notice: “Success. Data saved successfully!” The permission will be display at the report at  the Access Policies homepage.


* * *

Do you still have questions? Reach out to the [Segura Community.](https://community.Segura.io/){target="_blank"}

