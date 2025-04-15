# Review and certification of access policies

This document provides information about the **Access Policies** report, which shows the list of PAM Core access policies needing review.

**Path to access**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control \> Access policies review and certification.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Access control \> Review and certification \> Access policies.**

## **Actions Menu**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## **Search Fields**

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification number of the order of the registration of the access policies. |
| **Policy name** | Text field | Filters by the registration name of the access policy. |
| **Reviewer** | Text field | Filters by the name of the user who performed the review. |
| **Last Review** | Date picker | Filters the revisions by the period in which the last revision of the access policies was carried out. |
| **Next review** | Date picker | Filters the revisions by the period in which the policies revision will expire. |
| **Status** | Dropdown menu | Filters the policies by their state. The options are **Reviewed**, **Review pending** and **Pending approval.** Clear the field to enable the **All** option. |
| **Approval status** | Dropdown menu | Filters revisions by their status. The options are **Pending**, **Approved**, **Rejected**, **Expired** and **Cancelled.** Clear the field to enable the **All** option. |

## **Report Fields**

* **ID.**  
* **Access policies.**  
* **Type.**  
* **Reviewer.**  
* **Last Review.**  
* **Next review.**  
* **Status.**  
* **Approver:** name of the user who approved the policy.  
* **Approval status.**  
* **Actions:**  
  * **Review**: opens the **Review and certificate** screen for the review to be carried out.  
  * **History**: opens the **User review and certification history** screen.

Once a policies has been reviewed, the **Status** field will change to **Reviewed**.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---

### Review and certification screen

This screen contains the rules registered in the access policy. Here, the reviewer can exclude users, approvers, and criteria. The policy name cannot be added or changed. Comments about the decisions made during the review can be left in the Justification tab.

**General tab**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Access policy name** | Text field | Name of the access policies to be reviewed. |
| **Status** | Toggle button | Access policies status. |
| **Description** | Text field | Descriptive text of the access policies. |

**Users tab**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Users** | Table | Table that contains all users included in the access policies. |

**Approvers Tab**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Approvers** | Table | Table that contains all users included in the access policy. |
| **Governance ID required when justifying?** | Toggle button | Enables or disables whether the applicant must enter the ITMS code at the time of justification. |
| **Always add user manager to approvers?** | Toggle button | Enables or disables whether the user responsible for the registered user's department should be automatically consulted as an additional approver for this policies. This way, this user will be alerted with the other approvers in the Approvers tab. |

**Criteria tab**  
:::(info) (**Info**)  
Filters are combinations of "AND" and not alternatives of "OR".  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Site\*** | Dropdown menu | Options with the types of sites that will be visible to the policies. The available options will be as registered in Segura. |
| **Device type\*** | Dropdown menu | Options with the types of devices that will be visible to the policies. The options are defined according to the types of registered devices. |
| **Credential type\*** | Dropdown menu | Options with the types of credentials that will be visible to the policies. The options are: *All, SSH Key, Domain User, Local User* and *Local administrator*. |
| **Device** | Toggle button | Enables or disables the text field for including devices. |
| **Device (comma separated)** | Text field | Device registration name. In the [Device Field](https://docs.senhasegura.io/v4/docs/pam-session-about-filling-out-the-device-and-username-fields) document there are possible ways to fill in this field. |
| **Product** | Toggle button | Enables or disables the text field for including device models. |
| **Product (comma separated)** | Text field | Device models name. |
| **Username** | Toggle button | Enables or disables the text field for including user names. |
| **Username (separated by comma)** | Text field | Credential username. In the [Username field](https://docs.senhasegura.io/v4/docs/pam-session-about-filling-out-the-device-and-username-fields) document there are possible ways to fill in this field. |
| **Additional information** | Toggle button | Enables or disables the text field for including additional information. |
| **Additional information (separated by comma)** | Text field | Text with additional information about the registration. |
| **Device Tags** | Toggle button | Enables or disables the text field for including tags for devices. |
| **Device Tags (comma separated)** | Text field | Tags registered for devices. |
| **Credential Tags** | Toggle button | Enables or disables the text field for including tags for credentials. |
| **Credential Tags (separated by commas)** | Text field | Tags registered for credentials. |

**Justification Tab**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Justification** | Text field | Text with the reviewer’s justification. |

**Review Tab**  
There is the information that was added in the previous steps, so that it can be analyzed and if any changes are needed, it can be done before completing the registration. The information is grouped by each tab respectively.

---

### User review and certification history screen

## **Actions menu**

| Item  | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays options *Print report, Export CSV and Schedule report.* |

## **Search Fields**

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification number of the access policies registration order. |
| **Name** | Text field | Filters by the access policies registration name. |
| **Username** | Text field | Filters by the username that registered the policies. |
| **Reviewer** | Text field | Filters by the name of the user who performed the review. |
| **Last review** | Date picker | Filters revisions by the period in which the access policies was last revised. |
| **Next review** | Date picker | Filters revisions by the period in which the policies revision will expire. |
| **Status** | Dropdown menu | Filter policies by their state. The options are **Approved**, **Reviewed**, **Review pending**, **Pending approval** and **Rejected**. Clear the field to enable the option **All**. |
| **Approver** | Text field | Filters by the name of the policy approver. |
| **Approval status** | Dropdown menu | Filter reviews by your situation. The options are **Approved**, **Reviewed**, **Review pending**, **Pending approval** and **Rejected.** Clear the field to enable the option **All**. |

## **Report fields**

* **ID.**  
* **Access policies.**  
* **Type.**  
* **Created by.**  
* **Reviewer.**  
* **Last review.**  
* **Next review.**  
* **Status.**  
* **Approver:** name of the user who approved the policy.  
* **Approval status.**  
* **Actions:**  
  * **Details**: opens **History of revision and certification access policies**.

---

### History of revision and certification access policies screen

### **Actions menu**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Eye icon** | Icon | When you position the cursor over this icon, detailed information about the user who created the record and the last user who modified it is displayed. |

**General tab**  
**Access policies section**

| Item | Description |
| :---- | :---- |
| **Name** | Name of the access policy. |
| **Created by** | Username of the policy creator. |
| **View password** | Option selected for the password viewing rule for registered policy. |
| **Start session** | Option selected for the login rule for registered policy. |

**Review and certification section**

| Item | Description |
| :---- | :---- |
| **Approver** | Name of the policy approver. |
| **Date** | Date and time the approval was made. |
| **Status** | Policy status status. |
| **Justification** | Text with the justification given by the approver. |

**Users tab**

| Item | Description |
| :---- | :---- |
| **Users** | Table with information about all users included in the access policy. |

**Approvers tab**

| Item | Description |
| :---- | :---- |
| **Approvers** | Table with information on all approvers included in the access policy. |

**Criteria tab**

| Item | Description |
| :---- | :---- |
| **Site** | Option selected from the sites available in the access policy. |
| **Device type** | Option selected from available equipment in the access policy. |
| **Credential Type** | Option selected from the types of credentials available in the access policy. |
