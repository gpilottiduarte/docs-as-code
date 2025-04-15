# Review and certification

This document provides information about the **Review and certification** form screen, which adds the review period for an access or user policy.

## **Path to access**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Access control \> Review and certification \> Review and certification.**

:::(warning) (**Attention**)   
To add reviewers to the Access Policies, you need to configure them as the owner of a specific Access policies.  
:::

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Enable review and certification process** | Toggle button | Yes | Enables the review and certification process for access policies and users. |
| **Access policies review interval** | Quantity selector and drop-down menu | No | The interval that the reviewer will have to perform the review of the access policies, the options are *Days*, *Months* and *Years*. |
| **Users review interval** | Quantity selector and drop-down menu | No | The interval that the reviewer will have to perform the review of the users, the options are *Days*, *Months* and *Years*. |
| **Add** | Button | No | Opens the **Add owners** screen to choose the reviewers. |
| **Reviewers' table** | Table | No | Data for each reviewer containing the *ID, Name, Username, Email, Added by, Added on, Assigned access policies,* and *Assigned user groups* *fields*. |

### **Add owner screen** 

#### Users tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | Yes | Opens the **Users** screen to choose the users who will own it. |
| **Owners table** | Table | No | Data for each user containing the *ID, Name, Username, Email, Added by,* and *Added on* *fields*. |

#### User groups tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | Yes | Opens the **Users** screen to choose the groups. |
| **User groups table** | Table | No | Data for each user containing the *ID, Name, Synchronization Group,* and *Added on* *fields*. |
| **Review users not assigned to user group**\* | Checkbox | Yes | Assigns users who aren’t related to any group to the reviewer. |

#### Access policies tab  

:::(info) (**Info**)  
Users entered into more than one access policy of the same module may have different settings than expected.  
:::

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **PAM Core** | Checkbox | No | Options of the existing access policies in Segura. |

### **Review tab**

Show the information that was added in the previous steps. That way you can analyze and, if needed any change, it can be done before finalizing the registration. The information is grouped by each tab respectively.  