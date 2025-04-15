This feature allows the administrator to register configurations to scan directories and files to monitor inclusions, changes, and exclusions made by a user.



---

## Create general or workstation rules

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager ➔ Policies ➔ Windows ➔ Directory and file scan.**
3. Click on the **Actions****(****⁝)**menu.
4. Choose between **General rule** or **Segregation for the workstation**.
5. Fill in the fields of the **Directory and file scan section**.
6. In the **General**tab, enter:
	* **Name:** define a name for this rule.
	* **Status:** define whether the rule will be active or not.
	* **Path of directories:** the folder or file you want to scan. E.g.: C:\\windows\\System32\.
	* **File name or regular expression:** the file name you want to scan or a regular expression.
	* **Registered paths:** list with added paths, files, and regular expressions.

InfoTo search for a file, include the file name. To search for folders, include the folder name. You can use regular expressions to search for files.



---

## Directory and file scan events

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Report➔Windows➔Events.**

Four actions are audited in events:

* **Inclusion:**the creation of a file.
* **Rename:** rename an existing file.
* **Delete:**delete an existing file.
* **Change:** the username System will be applied to all change records.



---

## Ignore the directory in the application scan

This feature sets added directories aside in the Core Run menu scan.

### Register directories to be ignored

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Settings➔Parameters➔go Windows.**
3. Go to **Directory to be ignored****.**
4. Register the **Directory path** you want to set aside in the scan.
5. Click **Save.**
