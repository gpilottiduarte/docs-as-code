# Password changes

This document provides information about the **Password changes** dashboard screen, which brings information on password changes carried out on Segura.

:::(info) (**Info**)  
The dashboard can only be accessed by users who have administrator or system auditor permissions.  
:::

The credential quantities and their status are presented considering the following rules:

* Child credentials will only be considered on this dashboard if their respective parent credentials have the automatic change active. In some cases, the system doesn’t schedule a specific change for the child credential, creating and executing the change at the time of the parent credential change.  
* The "Waiting" and "Error" will not necessarily display the sum of "Updated" and "Expired," as they depend on each change's behavior.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Dashboard \> Password changes**.

---
## Password flow

| **Item** | **Description** |
| :---- | :---- |
| **Total** | Displays the total number of existing credentials. |
| **Manage** | Displays the number of credentials with manageable passwords. |
| **Not manage** | Displays the number of credentials without automatic password change enabled. |
| **Updated** | Displays the number of credentials with updated passwords. |
| **Expired** | Displays the number of credentials with expired passwords. |
| **Waiting** | Displays the number of credentials with passwords waiting to be changed. |
| **Error** | Displays the number of credentials for which an error occurred when changing the password. |

## Graphics

| **Item** | **Description** |
| :---- | :---- |
| **Changes by site** | Displays the list of sites and the status of the password change attempt. |
| **Changes executed successfully** | Displays the exchanges that were successful in their execution, divided by dates. |
| **Execution status** | Display the status of the executed changes. The options are: *No problems*, *Any problem with up to two robots simultaneously (all active)* and *Any problem with the three robots simultaneously*. |