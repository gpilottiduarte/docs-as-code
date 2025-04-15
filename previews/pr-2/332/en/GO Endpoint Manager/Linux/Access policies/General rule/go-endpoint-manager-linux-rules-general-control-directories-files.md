CautionGO Endpoint Manager for Linux does not grant permission to a directory or file to a user if the operating system does not allow access.1. Access the senhasegura platform.
2. Navigate to**GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click**⁝** and select the option **New rule** to create a general policy.
4. At the **Access policy register** form, in the **Main**tab, complete the fields:
	* **Policy name****:** define an easy\-to\-identify name.
	* **Enabled:** if enabled, the policy will be applied across devices.
	* **Guideline:**select a policy type.
5. In the **Directory and File** **control**tab, below **Permissions,**complete the fields:
	* In the **Permission** field, select what users can do:
		+ **Execution:**lets you run a file or access a directory.
		+ **Write:** lets you edit a file or modify the contents of a directory.
		+ **Read:**it only lets you see and list the files and subfiles/subdirectories.
6. In the **Directory or File** field, indicate the full path of the file or directory you want to control.
7. In the **User** field, enter the username.
8. Click **Add** to include the control permission.
9. If desired, perform the previous steps to add more files and directories to be controlled.
10. Below **Block rules**,in the **Permission**field, select what users can't do:
	* **Execution:**it doesn’t allow executing a file or accessing a directory.
	* **Write:** it doesn’t allow editing a file or modifying the contents of a directory.
	* **Read:** it doesn’t allow seeing and listing the files and subfiles/subdirectories.
11. In the **Directory or File** field, indicate the full path of the file or directory you want to control.
12. In the **User** field, enter the username.
13. Click **Add** to include the control permission.
14. If desired, perform the previous steps to add more files and directories to be controlled.
15. Click **Save.**

  


  


