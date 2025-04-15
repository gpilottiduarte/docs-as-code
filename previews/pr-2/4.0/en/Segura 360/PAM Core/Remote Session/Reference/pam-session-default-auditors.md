# Default auditors

This document provides information about the **Audited commands** report screen, which shows the list of auditors that have been registered to audit high-risk sessions.

More information about audit types in [About audit](/v4/docs/pam-session-about-audit) and about auditors types in [About Auditors](/v4/docs/about-auditors).

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Audit > Default Auditors.**

---
## Actions menu

| Item  | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the Default auditors registration screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters auditors by their identification code within Segura. |
| **Name** | Text field | Filters auditors by the name registered in Segura. |
| **E-mail** | Text field | Filter auditors by their registration email. |
| **Department** | Text field | Filters auditors by the department in which the user is registered. |
| **Added by** | Text field | Filters auditors by the name of the user who added the auditor. |
| **Created in** | Date picker | Filters auditors by the period they were added. |
| **Status** | Dropdown menu | Filters auditors by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the option **All**. |

## Report fields

* **ID.**  
* **Name.**  
* **E-mail.**  
* **Department.**  
* **Added by.**  
* **Created in.**  
* **Enabled**  
* **Actions:**  
  * **Disable**: disable the auditor. On the confirmation screen, click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Default Auditors registration screen

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Users** | Text field | No | Search for the auditor's name in the list of included auditors. |
| **Add** | Button | No | Opens the Segura users screen, so that auditors can be included. |
| **Auditor table** | Table | No | Data for each added auditor containing *fields, check box*, *ID, Name, Username, E-mail* and *Department.* |