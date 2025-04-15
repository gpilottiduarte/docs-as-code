# System parameters

1. Access the Segura platform.
2. Navigate to **EPM➔Settings➔ Parameters➔go Linux**. 

## Installation settings
* **Allow self-approval of workstation link?:** indicate whether a workstation should be automatically approved when receiving a valid license from EPM.
* **Allow self-approval of user's first link?:** indicate whether a user's first login will be approved automatically if the user was previously approved on another machine with EPM Linux.
* **Allow self-approval of all other links?:** indicate whether all other users' first login will be approved automatically if the users were previously approved on another machine with EPM Linux.
* **Enable user expiration?:** indicate whether it will be mandatory to set a user authorization expiration date.
* **Days interval to expire users:** indicate the number of days for the user's authorization to expire after approval. 

* * *

## AD Bridge
* **Allow self-approval of workstation link?:** indicate whether a workstation should be automatically approved upon receiving a valid license.
* **Domain:** add the account domain configured.
* **Credential:** add an existing credential with privileges to authenticate and manage the console remotely from AD. This credential is responsible for executing the commands in the shell that will be used to apply policies, and provision users, among other features.
* **LDAP Uri:** add the AD IP address.
* **Use SSL?:** if you're using LDAPS, mark **Yes.**
* **DN Bind:** add the username used to connect to the LDAP service.
* **DN Base:** add the beginning of the LDAP server path used when looking for the user authentication in its directory.
* **User DN:** add the user's path location.
* **User filter:** use the filter **(objectClass=user)**
* **User UID:** add the variable **sAMAccountName**
* **Username:** add the variable **displayName**
* **User HOME directory path:** fill in the user's home, for example, **/home/username**
* **User shell:** fill in the shell path that will be used by users.
* **Group DN:** add a group to authenticate.
* **Group filter:** use the filter **(objectClass=group)**
* **Group name:** add the variable **sAMAccountName**

* * *

## Messages
* **Execution message:** write the statement that should appear to the user when an application is running in EPM.
* **Execution block message:** write the statement that should appear to the user when an execution is blocked in EPM.