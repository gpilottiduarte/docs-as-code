# System parameters - Access Control

This document provides information about **System Parameters** form screen, which refers to the access parameters, on the **Access Control** tab.

## Path to access

:::(warning) (**Attention**)  
All fields are set with a default value, as recommended by Segura. However, you can customize your session according to your needs.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **System Parameters > Global > Access control.**

---
## Access Control tab

### General section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Password Parts*** | Quantity input | Yes | The number of parts into which the password will be divided for groups with multiple custody. You can choose between numbers 1 and 5\. By default: **2** |
| **Password display time (s)*** | Quantity input | Yes | Maximum time, in seconds, that the password window will be open. Select zero to not close. By default: **30** |
| **Time expiration reason (min)\*** | Quantity input | Yes | The time that the justification of access to a password is valid. During this period, the user won’t  need to provide another justification to access the password again. By default: **60** |
| **Time expiration approval (min)*** | Quantity input | Yes | Standard time that approval of a request will take in minutes. By default: **60** |
| **Approver can change when approval will expire?*** | Radio button | Yes | Parameter to allow for the approver to change the approval validity parameter. By default: **Yes** |
| **Allow only one group per user?*** | Radio button | Yes | Parameter to define whether or not a user can be part of more than one access group. By default: **No** |
| **List only approvers with permission?*** | Radio button | Yes | Parameter to decide whether only approvers with permission can be listed. By default: **No** |
| **Allow approvers to approve their own request?*** | Radio button | Yes | Parameter to set whether an approver can approve the request itself. By default: **No** |
| **Allow registry of duplicate credentials?*** | Radio button | Yes | Parameter to set whether duplicate credentials can be registered. By default: **No** |
| **Allow to register devices with duplicate IP?*** | Radio button | Yes | Parameter to set whether it will be allowed to register devices with duplicate IP. By default: **Yes** |
| **Allow batch approval?*** | Radio button | Yes | Parameter to set whether batch import will be allowed. By default: **No** |
| **Force access rule by device domain?*** | Radio button | Yes | Parameter to disable the most restrictive rule for groups. Each device's request follows the access group configuration of its respective group. By default: **Yes** |
| **Requires approval to change user roles?*** | Radio button | Yes | Parameter to define whether approval will be required to change user roles. If there are no approvers for User Management, the changes will be applied without approval. By default: **Yes** |
| **Make below fields required:** | Checkbox | No | Defines whether it will be mandatory for **Users** and **Approvers** to fill in the following fields. By default: **Users** and **Approvers**. |
| **Notify requester of result of the request through:** | Checkbox | No | Parameter to set whether the requester will be notified about the request via E-Mail and/or Screen. By default: **Email** and **Screen**. |
| **Notify approver of new requests through:** | Checkbox | No | Parameter to set whether the approver will be notified for requests via E-Mail and/or Screen. By default: **Email** and **Screen**. |
| **Display name for fields "Governance Code"*** | Text field | Yes | Parameter to set a message to Governance Code. By default: **Governance Code**. |

### Mobile app section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Allow use by all users*** | Radio button | Yes | Parameter to define whether all users have access to the mobile application. By default: **Yes**. |
| **Require device approval*** | Radio button | Yes | Parameter to define whether it’ll be necessary to request approval from the device being used for access. The App connection request must be approved by an administrator. By default: **No**. |

:::(info) (**Info**)  
Check the network rules to allow app connection.  
:::