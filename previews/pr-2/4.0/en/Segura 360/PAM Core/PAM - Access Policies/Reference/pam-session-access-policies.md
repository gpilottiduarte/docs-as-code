# Access policies

This document provides information about the **Access policies** report screen, which shows the list of groups and policies created in the **PAM Core** module.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > Access policies**.

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the [Access policies](/v4/docs/access-policies-registration) screen to add a new policy. |
| **Synchonize** | Button | Reprocess all the registered policies. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Name** | Text field | Filter the groups by registered name. |
| **Part of password** | Dropdown menu | Filters the groups by the type of password visibility allowed in the group. The options are **1st part**, **2nd part** and **Password complete**. |
| **View** | Dropdown menu | Filters the groups by password viewing permission. The options are **Yes** or **No**. |
| **Approval for viewing** | Dropdown menu | Filter the groups by requiring approval to view a password. The options are **Requires approval** and **Does not require approval**. |
| **Session** | Dropdown menu | Filters the groups based on whether the group has any restrictions on accessing the session. The options are **Yes** and **No**. |
| **Approval for session** | Dropdown menu | Filters the groups by information on whether the group needs some type of approval to access the session. The options are **Requires approval** and **Does not require approval**. |
| **Change expiration** | Dropdown menu | Filters the groups by whether it is allowed to change the group's expiration date. The options are **Yes** and **No**. |
| **Status** | Dropdown menu | Filters the groups by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the option **All**. |

## Report fields

* **ID.**  
* **Name.**  
* **Part of password.**  
* **Permission.**  
* **Approval.**  
* **Justification.**  
* **Change expiration.**  
* **Type.**  
* **Criteria.**  
* **Status.**  
* **Actions:**  
  * **Edit:** open the [Access policies](/v4/docs/access-policies-registration) form screen, in order to necessary changes be made.  
  * **Clone:** option to clone an access policy with the feature of the selected register. Click **Yes** in the confirmation box to perform this action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::