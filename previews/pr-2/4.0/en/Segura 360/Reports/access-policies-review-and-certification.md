# Access policies review and certification

 document provides information about the **Review and certification of access policies** report screen, which shows the list of PAM Core access policies. 

**Path to access**

1. On Segura, in the navigation bar, hover over the **Product menu** and select **Reports**.  
2. In the side menu, select **Review and certification \> Access policies review and certification.**

## **Actions menu**

| Item  | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV* and *Schedule report.* |

## **Search Fields**

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification number of the access policies registration order. |
| **Access policies** | Text field | Filters by the access policies registration name. |
| **Reviewer** | Text field | Filters by the name of the user who performed the review. |
| **Last review** | Date picker | Filter reviews for the period in which the latest revision of the access policies was carried out. |
| **Next review** | Date picker | Filters revisions by the period in which the policies revision will expire. |
| **Status** | Dropdown menu | Filter reviews by policy situation. The options are **Approved, Reviewed**, **Review pending**, **Pending approval** and **Rejected.** Clear the field to enable the option **All**. |

## **Report fields**

* **ID.**  
* **Access policies.**  
* **Type.**  
* **Owner.**  
* **Reviewer.**  
* **Last review.**  
* **Next review.**  
* **Status.**  
* **Approver:** name of the user who approved the policy.  
* **Approval status.**  
* **Actions:** the option in this column will only be available for records that have the status of **Revised.**  
  * **Details**: opens **Details** screen with details about the review.  
    

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

**Details screen**

### 

### **Actions menu**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Eye icon** | Icon | When you position the cursor over this icon, detailed information about the user who created the record and the last user who modified it is displayed. |

**General tab**  
**Access Policies section**

| Item  | Description |
| :---- | :---- |
| **Name** | Displays the name of the access policies. |
| **Created by** | Displays the name of the user who created the access policies. |
| **View password** | Displays whether or not the policies can view the password. |
| **Start session** | Displays whether or not the policies will be able to start session. |

## **Review and certification section**

| Item  | Description |
| :---- | :---- |
| **Approver** | Displays the name of the request approver. |
| **Date** | Date and time the approval was made. |
| **Status** | Displays the status of the request. |
| **Justification** | Displays the justification description. |

**Users tab**  
:::(info) (**Info**)  
Users who are entered into **more than one** access policy will have the most restrictive policy settings applied.  
:::

| Item  | Description |
| :---- | :---- |
| **Users table** | Data for each user containing *the fields* *ID, Name, Username, Email, Creation type, Department, Added by*, *Added on* and *Action*. |

**Approvers tab**  
:::(info) (**Info**)  
The approver must have at least the PAM Operator profile to access the approval workflow screen.  
:::

| Item  | Description |
| :---- | :---- |
| **Approvers Table** | Data for each user containing *the fields* *Code, Name, Username, Email, Creation type, Department, Added by*, *Added on* and *Action*. |

**Criteria tab**

| Item  | Description |
| :---- | :---- |
| **Site** | Sites included in the access policies registration. |
| **Device type** | Type of device included in the access policies registration. |
| **Credential type** | Types of credentials included in the access policies registration. |