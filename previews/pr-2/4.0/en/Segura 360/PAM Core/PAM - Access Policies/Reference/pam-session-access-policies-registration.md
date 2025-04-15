# Access policies registration

This document provides information about the **Access Policies** form screen, where you can add new groups and their access policies and/or change groups already registered.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control > Access policies > Add**.

---
## General tab  
This section provides general information about the access policy.

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Access group name*** | Text field | Yes | Access group identifier name. |
| **Status** | Toggle button | No | Enables or disables the access group status. |
| **Description** | Text field | No | General information about the access group. |

:::(info) (**Info**)  
If AD group sync is enabled, permissions for members synced by that group will be overwritten on the next sync. Manual changes (add or remove users) will be undone.  
:::

---
## Users tab  
This section provides information about the list of users included in the access policy.

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Users** | Text field | No | Search for the user's name in the list of users included in the group. |
| **Add** | Button | No | Opens the Segura users' screen, so that they can be included in the group. |
| **User table** | Table | No | Data for each member of the access group containing *checkbox fields*, *ID, Name, Username, E-mail,* *Creation type, Department, Added by* and *Added on.* |

:::(info) (**Info**)  
By default, users belonging to more than one access group will be assigned the most restrictive group settings.  
:::

---
In the **Password** and **Session** tabs, you can select the days and time range for which an approval workflow will be required. These functionalities are **independent** and can be enabled in Password, but disabled in Session, or vice versa.

## Password tab  
This section provides information about the password rules of the access policy.

:::(info) (**Info**)  
In this section, some fields will only be displayed after some specific fields are enabled.  
:::

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Allow users to view passwords** | Toggle button | No | Enables or disables permission whether the credential password can be seen by the user. |
| **Part of the password to be viewed*** | Dropdown menu | Yes | Options for how to view the password. The options are: *Full password*, *1st part of the password* and *2nd part of the password*. Members of this group will only have access to the fraction defined in this field. However, the proxy functionality can use the password, as the user doesn’t have access to the plain text password when using any of our proxy solutions.  |
| **Request users a reason before viewing a password** | Toggle button | No | Enables or disables the need for the user to register a justification to see the password. |
| **Require approval to view a password** | Toggle button | No | Enables or disables the need for approval, carried out by the registered approver, so that the user can view the password. Once enabled, you also need to define how many approvals will be required. |
| **Approvals required for viewing** | Quantity input | No | Select the number of approvals required to approve the operation for each level (doesn’t count the total number of approvals). |
| **Disapprovals required to cancel** | Quantity input | No | Select the number of disapprovals necessary to reject the operation for each level (doesn’t count the total number of disapprovals). |
| **Approval in levels** | Toggle button |  | Enables or disables the rule that approvers will be triggered in levels. When enabled, a hierarchy of approvers can be defined. |

#### Advanced Options section

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Allow emergency access without approval** | Toggle button | No | Enables or disables whether the user can perform emergency access without the need for prior approval. |
| **Users can change expiration date** | Toggle button | No | Enables or disables whether the user can change the group's expiration date.* |
| **Require approval days** | Toggle button | No | Enables or disables the need to establish the days and times that approval will be required. |
| **The date can be changed up to:** | Quantity input | No | Select the number of minutes that the date changed by the user can occur. The options are from 0 to 100\. This option is only available if the option **Users can change the expiration date** is enabled. |

:::(info) (**Info**)  
*In the credentials display window, a button will appear for the user to increase their access period up to the time indicated in this field.  
:::  

#### Require approval days section  
This section will only be available if the **Require approval days** option is enabled.

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **All days** | Toggle button and checkbox | No | If enabled, the user must request approval every day. If disabled, select the days of the week on which group members must request approval. |
| **All Times** | Toggle button | No | Enables or disables the period of time in which the user will have to request approval. |
| **Custom Period** | Toggle button and time picker | No | Enables or disables a specific time range within which the user must request approval. When enabled, two-time pickers are enabled so that the beginning and end of the period can be stipulated. |

---
## Sessions tab  
This section provides information about the session rules of the access policy.  
:::(info) (**Info**)  
In this section, some fields will only be displayed after some specific fields are enabled.  
:::

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Allow users to start sessions** | Toggle button | No | Enables or disables permission for users in the group to start a session. |
| **Enable session blocking during Freezing** | Toggle button | No | Enables or disables the permission for users in this group to have their session blocked during the session freeze period. |
| **Request users a reason before starting session** | Toggle button | No | Enables or disables the need to record a justification to start the proxy session. |
| **Require approval to start session** | Toggle button | No | Enables or disables the need for approval, carried out by the registered approver, so that the user can start a session. Once active, you also need to define how long this approval will be valid. |
| **Approvals required** | Quantity input | No | Select the number of approvals required to approve the operation for each level (does not count the total number of approvals). |
| **Disapprovals required to cancel** | Quantity input | No | Select the number of failures necessary to fail the operation for each level (does not count the total number of failures). |
| **Approval in levels** | Toggle button | No | Enables or disables the rule that approvers will be triggered in levels. Thus, a hierarchy of approvers can be defined. |

#### Advanced Options

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Allow emergency access** | Toggle button | No | Enables or disables whether the user can perform emergency access without the need for prior approval. |
| **[Change Audit] Require Change ID to start session** | Toggle button | No | Enables or disables whether the requester must register an ITMS code at the time of justification. |
| **Require approval days** | Toggle button | No | Enables or disables the need to establish the days and times that approval will be required. |

#### Require approval days

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **All days** | Toggle button | No | If enabled, the user must request approval every day. If disabled, select the days of the week on which group members must request approval. |
| **All Times** | Toggle button | No | Enables or disables the period of time in which the user will have to request approval. |
| **Custom Period** | Toggle button | No | Enables or disables a specific time range within which the user must request approval. When enabled, two-time pickers are enabled so that the beginning and end of the period can be stipulated. |

:::(warning) (**Attention**)  
When the **Approval in levels** field is enabled, there are rules that must be followed for approval and disapproval to work correctly. More information in About Approval and disapproval rule.  
:::

---
## Approvers tab  
This section provides information about the list of approvers added to the access policy.

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Approvers** | Text field | No | Search for the user's name in the list of users included in the group. |
| **Add** | Button | No | Opens the Segura approving users screen, so that they can be included in the group. |
| **Approvers table** | Table | No | Data for each member of the access group containing *checkbox fields*, *ID, Name, Username, E-mail,* *Creation type, Department, Added by*, *Added on and Level.* |
| **Level** | Dropdown menu | No | Options to choose possible approver levels. The options are *Level 1*, *Level 2* and *Level 3*. See the explanation of approver levels above. |
| **Governance ID required when justifying?*** | Toggle button | Yes | Enables or disables whether the applicant must enter the ITMS code at the time of justification. |
| **Always add user manager to approvers?*** | Toggle button | Yes | Enables or disables whether the user responsible for the registered user's department should be automatically consulted as an additional approver for this group. This way, this user will be alerted with the other approvers in the Approvers tab. |

:::(warning) (**Attention**)  
For each approver added, a level must be assigned to them. More information in About Approvers level.  
:::

---
## Criteria tab  
This section provides information about the criteria of the access policy.

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Site*** | Dropdown menu | Yes | Options with the types of sites that will be visible to the group. The available options will be as registered in Segura. |
| **Device type*** | Dropdown menu | Yes | Options with the types of devices that will be visible to the group. The options are defined according to the types of registered devices. |
| **Credential type*** | Dropdown menu | Yes | Options with the types of credentials that will be visible to the group. The options are: *All, SSH Key, Domain User, Local User* and *Local administrator*. |
| **Device** | Toggle button | No | Enables or disables the text field for including devices. |
| **Device (comma separated)** | Text field | No | Device registration name. In the [Device Field](/v4/docs/pam-session-about-filling-out-the-device-and-username-fields) document there are possible ways to fill in this field. |
| **Product** | Toggle button | No | Enables or disables the text field for including device models. |
| **Product (comma separated)** | Text field | No | Device models name. |
| **Username** | Toggle button | No | Enables or disables the text field for including user names. |
| **Username (separated by comma)** | Text field | No | Credential username. In the 
[Username field](/v4/docs/pam-session-about-filling-out-the-device-and-username-fields) document there are possible ways to fill in this field. |
| **Additional information** | Toggle button | No | Enables or disables the text field for including additional information. |
| **Additional information (separated by comma)** | Text field | No | Text with additional information about the registration. |
| **Device Tags** | Toggle button | No | Enables or disables the text field for including tags for devices. |
| **Device Tags (comma separated)** | Text field | No | Tags registered for devices. |
| **Credential Tags** | Toggle button | No | Enables or disables the text field for including tags for credentials. |
| **Credential Tags (separated by commas)** | Text field | No | Tags registered for credentials. |

:::(warning) (**Attention**)  
For filling out the **Device (comma separated)** and **Username (separated by comma)** fields, there are rules that need to be followed. More information in About Filling Out the Device and Username Fields.  
:::

---
## Access limitation tab  
This section provides information about the restriction rules for the access policy.  

#### Access permission days

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **All days** | Toggle button | No | Enables or disables the permission option for all days. By default the option **Every day** are enabled, to select specific days, disable this option and select the days. |
| **Days of the week** | Checkbox | No | When the field above is disabled, select the days of the week. |

#### Access permission times section

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **All times** | Toggle button | No | Enables or disables the permission option for all time slots. By default the option **All times** are enabled, to select specific days, disable this option and select the days. |
| **Time range** | Checkbox | No | When the field above is disabled, select time ranges. |
| **Custom** | Toggle button *and time* picker | No | Enables or disables the option to customize the access permission time. |

#### Access permission period section

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Start** | Date and time picker | No | Select the start date and time of the permission period. |
| **End** | Date and time picker | No | Select the end date and time of the permission period. |

---
## Review tab  
This section provides information added in the previous steps so that it can be analyzed and, if necessary, changed before finalizing the registration. The information is grouped by each tab.