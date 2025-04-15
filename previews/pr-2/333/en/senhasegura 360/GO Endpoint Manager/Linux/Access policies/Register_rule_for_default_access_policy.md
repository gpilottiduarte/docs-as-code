## Register rule for default access policy

Alert!The user specified in the blocking/elevation rules must exist on the target machine where these rules will be applied. Otherwise, the rules' application may fail or behave unexpectedly.CautionGO Endpoint Manager for Linux does not grant permission to a user to access a directory or file if the operating system does not allow access.1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝** and select the **New rule** option to create a global policy.
4. In the **Access policy Register**form, on the **Main**tab, complete the fields:
	* **Identification name:**set an easily identifiable name.
	* **Enabled:**GO Endpoint Manager will apply the policy on devices if you select Yes.
	* **Guideline:**select a policy type.
	* **Checker (path or executor):**fill in with the directory path, for example, path\="/usr/bin/ls" or with the executor exec\="/usr/bin/ls".Alert!Typing incorrectly or leaving the field empty leads to the total unusability of the device. Follow [CaitSith's syntax](https://caitsith.osdn.jp/#syntax_list) to complete this field correctly.
	* **Enable audit?:** the field is required and enabled by default. Leave it enabled if you want to audit the policy actions.
	* **Include general denial rule?:**check it to allow only the registered rules and deny the binary not included.
	* **Allow or lock:**select whether the registered policy allows or denies access to the user or group.
	* **Rule text:**fill in a rule in the format of policies in CaitSith. For example, task.uid\="user".CautionThe first rule added takes precedence over rules added later. If you create a rule that allows the execution of the binary and then add another rule to block the execution of the same binary, the access policy will consider the first rule, and the second one won\`t be considered.
5. Click **Add.**
6. **Save.**

The rules registered in Access Policies and Rules for sudo undergo a filtering process to allow execution within CaitSith's access policies. The system will automatically start recording the session when the user executes any command in the access policies. You can change the general rule of a policy to include controlling directories and files by clicking on the icon in the Action column of an existing policy.



---

## Register rule for user\-friendly access policy

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝** and select the **New rule** option to create a global policy.
4. In the **Access policy Register** form, on the **Application**tab, complete the fields:
	* **Identification name:**set an easily identifiable name.
	* **Enabled:**GO Endpoint Manager will apply the policy if you select **Yes.**
	* **Enable audit?:** the field is required and enabled by default. Leave it enabled if you want to audit the policy actions.
	* **Enable session recording?:**enable the recording of registered binaries. The beginning of the session is linked to the execution of the binary, and when the execution ends, the recording does too.
	* **Include general denial rule?:**check it to allow only the registered rules and deny the binary not included.
	* **Caminho do programa:**type the program's location on the file system. For example, /usr/bin/ls
	* **O caminho é um link simbólico?:**check only if the added path is a link to a file or directory.
5. Click **Add.**
	* **Permission:** choose between allowing or locking, depending on the policy being created.
	* **Usuário ou grupo:**add who this rule is valid for.
	* **Nome do usuário ou grupo:**type the user or group name according to the option chosen in the previous field.
6. Click **Add.**
7. **Save.**



---

## Register rule for control of directories and files

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝** and select the **New rule** option to create a global policy.
4. In the **Access policy Register** form, on the **Directory and file** control tab, complete the fields:
5. In the first **Permission**field, select what users can do:
	* **Execution:** allows executing a file or accessing a directory.
	* **Read:**allows you to see and list the files and subfiles/subdirectories.
	* **Write:**allows you to edit a file or modify the contents of a directory.
6. In the **Directory or file** field, indicate the full path of the file or directory you want to be controlled.
7. In the **User** field, enter the domain security group name or the username of a local or domain user.
8. Click the **Add** button to include the permission for the control.
9. If desired, perform the previous steps to add more files and directories you want to control.
10. In the second **Block rules**field, select what users cannot do:
	* **Execution:** does not allow executing a file or accessing a directory.
	* **Read:**does not allow viewing and listing files and subfiles/subdirectories.
	* **Write:** does not allow editing a file or modifying the contents of a directory.
11. In the **Directory or file**field, indicate the full path of the directory you want to be controlled.
12. Click the **Add** button to include the permission for the control.
13. If desired, perform the previous steps to add more files and directories you want to control.
14. **Save.**



---

## Register rule for alias

The Alias tab allows creating command aliases through GO Endpoint Manager for Linux. You can create shortcuts to manage the most used commands or with very long texts to speed up the use of the terminal.

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝** and select the**New rule** option to create a global policy.
4. In the **Access policy Register** form on the **Alias**tab, complete the fields:
	* **Alias:**add the shortcut or nickname for the most used/larger commands.
	* **Command:** add the command you want to use in the terminal.
5. **Save.**



---

## Register rule for environment variables

You can dynamically use environment variables for programs or processes running on the system.

1. Access the senhasegura platform.
2. Navigate to**GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click**⁝** and select the New rule option to create a global policy.
4. In the **Access policy Register** form, on the**Environment variables**tab, complete the fields:
	* **Variable name:** add the variable name.
	* **Variable value:**add the variable value.
5. **Save.**



---

## Validate the policy on the target device

Using the policy created above, view the /sys/kernel/security/caitsith/policy file to verify the default [CaitSith](https://caitsith.osdn.jp/) rules applied to the device.


```
root\@debian:/root# cat /sys/kernel/security/caitsith/policy 
POLICY_VERSION = 20120401
stat Policy updated: 9036 (Last: 2019/12/24 00:31:57)
stat Requests denied: 10 (Last: 2019/12/23 18:55:22)
stat Memory used by policy: 4512
stat Memory used by audit: 63808
stat Memory used by query: 0
quota memory audit 16777216
quota memory query 1048576
quota audit \[1\] allowed = 0 denied = 1024 unmatched = 1024

**1**00 acl write path="/etc/oracle/tnsnames.ora"
audit 1
100 allow task.uid = 1002
200 deny 
```
senhasegura identified the 'uid' of user 'dba' used in the rule above as 1002, creating the permission '100 allow task.uid \= 1002'.

According to the rule applied above, the 'dba' user can insert a content in the target file.  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670871357844.png)

The superuser cannot write to the file since this user is in the deny rule of the created policy. Even being a superuser, the write attempt is not possible.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670871374730.png)



---

## Use cases

### Deny all but a single user from running any binary:

This policy will block any user except the **adminlinux** from running the vim.

1\. Go to **GO Endpoint Manager ➔ Policies ➔ Linux ➔ Access Policies**

2\. Click ⁝ and **New rule**

3\. Fill in the fields on the **Main** tab:

* **Guideline:**select the Binary Run option.
* **Checker:** path\="/usr/bin/vim" (here can be any other binary you want to create rules for).
* **Include general denial rule?:** check.
* **Allow or lock:** set to Allow.
* **Rule text:** task.uid\="adminlinux".

4\. Click **Add.**

5\. Click **Save**.  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670871819701.png)



---

### Block user 'JohnS' from creating files in a specified directory:

This policy will block the user 'JohnS' from creating files.

1\. Go to **GO Endpoint Manager ➔ Policies ➔ Linux ➔ Access Policies**

2\. Click ⁝ and **New rule**

3\. Fill in the fields on the **Main** tab:

* **Guideline:**select the Create file option.
* **Checker:** path\="/usr/mydir" (here can be any other binary you want to create rules for).
* **Include general denial rule?:** don't check.
* **Allow or lock:** set to Lock.
* **Rule text:** task.uid\="JohnS".

4\. Click **Add.**

* **Allow or lock:** set to Allow.
* **Rule text:** task.gid\="my group".

5\. Click **Add**.

6\. Click **Save**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670872357307.png)

CautionLeave the 'JohnS' rule above the 'my group' rule. If 'JohnS' is below, blocking him will not be possible because the ruling order prioritizes the rule at the top.

---

### User "JohnS" and everyone in "mygroup" can edit the sudoers file

1\. Go to **GO Endpoint Manager ➔ Policies ➔ Linux ➔ Access Policies**

2\. Click ⁝ and **New rule**

3\. Fill in the fields on the **Main** tab:

* **Guideline:**select the Create file option.
* **Checker:** path\="/etc/sudoers/sudoers" (here can be any other binary you want to create rules for).
* **Include general denial rule?:** check.
* **Allow or lock:** set to Allow.
* **Rule text:** task.uid\="my group".

4\. Click **Add.**

* **Allow or lock:** set to Allow.
* **Rule text:** task.gid\="JohnS".

5\. Click **Add**.

6\. Click **Save**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670873063196.png)



---

### User "JohnS" and everyone in "mygroup" can only read the sudoers file

1\. Go to **GO Endpoint Manager ➔ Policies ➔ Linux ➔ Access Policies**

2\. Click ⁝ and **New rule**

3\. Fill in the fields on the **Main** tab:

* **Guideline:**select the Read file option.
* **Checker:** path\="/etc/sudoers/sudoers" (here can be any other binary you want to create rules for).
* **Include general denial rule?:** check.
* **Allow or lock:** set to Allow.
* **Rule text:** task.uid\="my group".

4\. Click **Add.**

* **Allow or lock:** set to Allow.
* **Rule text:** task.gid\="JohnS".

5\. Click **Add**.

6\. Click **Save**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670873166069.png)



---

### Command 'ls' can only be executed through sudo

1\. Go to **GO Endpoint Manager ➔ Policies ➔ Linux ➔ Access Policies**

2\. Click ⁝ and **New rule**

3\. Fill in the fields on the **Main** tab:

* **Guideline:**select the Binary run option.
* **Checker:** **exec\="/usr/bin/ls".**
* **Include general denial rule?:** check.
* **Allow or lock:** set to Allow.
* **Rule text:** task.exe\="/usr/bin/sudo".

4\. Click **Add.**

5\. Click **Save**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1670873795273.png)

## Application

Follow these steps to create a rule for an application:

InfoCheck the [Caitsith](https://caitsith.osdn.jp/#syntax_list) documentation for more information.Your content goes here1. Access the policy report via the menu **GO Endpoint Manager ➔ Policies ➔ Linux ➔ Access Policies**
2. Click on the report action ***New general rule*** to create a global policy
3. Click on the **Application** tab
4. In the form that opens, fill in the fields as follows
* **Identification name**: Policy name. Required field. This name must be friendly to be easily identifiable. It will not be forwarded to the target device. In this example, we will fill it with “Deny TNS changes”
* **Active**: Policy status. Required field. If enabled, the policy will be enforced on target devices. Otherwise, it will not be applied. We will keep it active
* **Enable auditing?**: Indicates whether auditing of actions that fit this policy will be enabled. The field is required and is enabled by default. We will keep it active
* **Enable session recording?**: Define whether session recording will be active for this registered policy. In addition to selecting **Y****es**, it is necessary to fill in the **Path** and add the **Permission** to generate transparent session recordings.
* **Include general deny rule:**  Indicating whether the deny\-all policy should be considered when this policy is applied. By allowing actions to specific users, it is interesting that for other users this privilege is denied. We will keep checking our example. (Required field)
* **Program Path**: The program's location on the file system. **For example** /home/user/
* **Is the path a symbolic link?**: Define whether this added path is a link to a file or directory.
* **Permission**: Indicates whether we will register a permission or denial policy for the user.\*
* **User or group**: Add to whom this rule will be referred, user or group.
* **User or group name**: Fill in the user or group name according to the chosen type.\*
* **In this example, we will fill the** **path**: variable with the location of our target file. Example: path\=˝/etc/oracle/tnsnames.ora
5. Save the record and observe the result on the target device

Any commands that go through a filtering process and a rule is defined to allow execution within Access Policies (CaitSith) or Rules for sudo if the execution of the command was allowed via Access Policies, will be recorded.

Once the user runs any command that is in Access Policies, the system will automatically start recording the session.

The start of the session will be linked with the PID of the process, so when that PID and all processes spawned by that PID and terminated, the recording should be terminated.

