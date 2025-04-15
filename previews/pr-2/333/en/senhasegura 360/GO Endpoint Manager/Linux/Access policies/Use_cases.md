# Use cases

## Geral
### Case 1: This policy will block anyone, except the "user", from running the command "top"

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. In the upper right corner, click on **⁝** and choose **New rule.**
4. At the **Access policy register** form, in the **Main** tab, complete the fields:
    * **Policy name:** choose an easily identifiable name.
    * **Enabled:** if you select the option **Yes**, the policy is considered on target devices.
    * **Guideline:** select the option **Binary Run.**
    * **Checker (path or executor):** fill with path="/usr/bin/top".
    * **Enable audit?:** mark **Yes** if you want to audit the execution of the registered rules.
    * **Include general denial rule?:** check this option so that no Linux workstation user can execute something that is not allowed by the access policy.
    * **Permitir ou bloquear (allow or block):** set to **Allow.**
    * **Rule text:**  fill with task.uid=”user”
5. Click **Add.**
6. Click **Save.**


### Case 2:  Command 'ls' can only be executed through sudo

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. In the upper right corner, click on **⁝** and choose **New rule.**
4. At the **Access policy register** form, in the **Main** tab, complete the fields:
    * **Policy name:** choose an easily identifiable name.
    * **Enabled:** if you select the option **Yes**, the policy is considered on target devices.
    * **Guideline:** select the option **Binary Run.**
    * **Checker (path or executor):** fill with exec="/usr/bin/ls"
    * **Enable audit?:** mark **Yes** if you want to audit the execution of the registered rules.
    * **Include general deny rule?:** check this option so that no Linux workstation user can execute something that is not allowed by the access policy.
    * **Permitir ou bloquear (allow or block):** set to Allow.
    * **Rule text: add the executor binary:** fill with task.exe=”/usr/bin/sudo”
5. Click **Add.**
6. Click **Save.**


### Case 3: Prevent user “john” from running the df command and allow all other users from the same group

This policy will allow any user but **“john”** from the **"group"** to run the **"df"** command to view information about available space on system partitions.

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. In the upper right corner, click on **⁝** and choose **New rule.**
4. At the **Access policy register** form, in the **Main** tab, complete the fields:
    * **Policy name:** choose an easily identifiable name.
    * **Enabled:** if you select the option Yes, the policy is considered on target devices.
    * **Guideline:** select the option **Binary Run.**
    * **Checker (path or executor):** fill with path="/usr/bin/df"
    * **Enable audit?:** mark **Yes** if you want to audit the execution of the registered rules.
    * **Include general deny rule?:** leave this option unchecked to ensure that all Linux workstation users are allowed to run everything except those blocked by the rule.
    * **Permitir ou bloquear (allow or block):** set to **Block.**
    * **Rule text:** fill with task.uid=”john”  
5. Click **Add.**
    * **Permitir ou bloquear (allow or block):** set to Allow.
    * **Rule text:** fill with task.gid=”group”
6. Click **Add.**
7. Click **Save.**


### Case 4: Prevent user “john” from reading the file and allow all other users in the same group

This policy will allow any user from the **"group"** but **“john”**, who’s also part of the group, to read the file.

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. In the upper right corner, click on **⁝** and choose **New rule.**
4. At the **Access policy register** form, in the **Main** tab, complete the fields:
    * **Policy name:** choose an easily identifiable name.
    * **Enabled:** if you select the option **Yes**, the policy is considered on target devices.
    * **Guideline:** select the option **Binary Run.**
    * **Checker (path or executor):** fill with path="/tmp/file"
    * **Enable audit?:** mark **Yes** if you want to audit the execution of the registered rules.
    * **Include general deny rule?:** leave this option unchecked to ensure that all Linux workstation users are allowed to run everything except those blocked by the rule.
    * **Permitir ou bloquear (allow or block):** set to **Block.**
    * **Rule text:** fill with task.uid=”john”  
5. Click **Add.**
    * **Permitir ou bloquear (allow or block):** set to **Allow.**
    * **Rule text:** fill with task.gid=”group”
6. Click **Add.**
7. Click **Save.**
