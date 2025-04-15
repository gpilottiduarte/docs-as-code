This feature allows the administrator to register configurations to control the permission of Windows files and directories.

## Configure directory control

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager ➔ Policies ➔ Windows ➔ Directory and File Control**. In this menu, you can access the report of previously configured controls. These controls can be:


	* **General rule**: valid in all workstations where GO Endpoint Manager is active and approved.
	* **Segregation by workstation**: the configuration will be valid only for the workstation defined in the form.
3. To create a new control, click the **(⁝)** icon and choose the **General rule** or **Segregation by workstation** report action.
4. In the displayed form, enter the name of the new control rule.


> Caution
> 
> This registration does not allow regular expressions.
5. Enter the **full** path of the file or directory.
6. Also, choose if this control will be enabled or disabled.
7. In the **Allow**or**Deny** field, select whether the permissions displayed in the **Permission**field will be granted to users.


	* **Allow**: users or groups will have permission.
	* **Deny**: users or groups will not have permission.
8. In the **Permission**list, select the type of action you will allow.


> Caution
> 
> For all the permission rules, Go Endpoint Manager alters the permissions set for all users and groups in this directory, except for "System," which retains its permissions.


> Important
> 
> We strongly advise against changing the permission rules in directories that affect the operating system, such as "C:\\Windows", as it can affect the system's operation.


	* **Read**: permission only to view and list the files and subfiles/subdirectories.
	* **Write**: permission to edit or add the file/directory in a directory.
	* **Read \& Execute**: permission to view, execute and access the files/directory.
	* **List folder contents**: permission to view, read, and execute directory contents.
> Caution
> 
> The "List Folder Contents" permission applies only to directories. It does not apply to files.


	* **Modify**: permission to read and write the file/directory.
	* **Full Control**: permission for all the actions listed above.
9. Click **Add**to add permission for the control.


	* The form will display a **Workstation** tab if you have chosen the **Segregation by workstation** control option.
	* When accessing this tab, click the**(\+)**icon and select the workstations that will be part of this configuration from the list.
	* Click**Add.**
10. Finally, click**Save.**

Access the workstation where the control was configured and try to perform the denied or allowed permissions.



---

## Remove the permission of a user

1. Delete the configuration of the user.
2. Add generic information like "adm" or "admin" that is valid.
3. You can also choose to add the configuration again. In the **Allow**or**Deny** field, select **Deny**.

