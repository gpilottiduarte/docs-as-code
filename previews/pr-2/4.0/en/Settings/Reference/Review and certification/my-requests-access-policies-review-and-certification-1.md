# My requests - Access policies review and certification

This document provides information about the **My requests** report screen, with the requests for review of access policies made. 

**Path to access**

1. On Segura, in the navigation bar, hover over the **Product menu** and select **Approval workflow**.  
2. In the side menu, select **Review and certification \> Access policies \> My requests.**

## **Actions menu**

| Item  | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV* and *Schedule report.* |

## **Search Fields**

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification number of the access policies registration order. |
| **Access policies** | Text field | Filter by the registration name of the access policies. |
| **Status** | Dropdown menu | Filter requests for your situation. The options are **Pending**, **Approved**, **Rejected**, **Expired** and **Cancelled.** Clear the field to enable the option **All**. |
| **Expiration** | Date picker | Filters by the request expiration period. |
| **Request date** | Date picker | Filter by the date the request was made. |

## **Report fields**

* **ID.**  
* **Operation**: the operation that was requested.  
* **Type**: The type of request made.  
* **Access policies.**  
* **Requester**: name of the requesting user.  
* **Request date.**  
* **Status.**  
* **Expiration.**  
* **Actions:**  
  * **Details**: opens **Details** screen.  
    

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
| **Start session** | Displays whether or not the policies will be able to start a session. |

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
| **Approvers table** | Data for each user containing *the fields* *ID, Name, Username, Email, Creation type, Department, Added by*, *Added on* and *Action*. |

**Criteria tab**

| Item  | Description |
| :---- | :---- |
| **Site** | Sites included in the access policies registration. |
| **Device type** | Type of device included in the access policies registration. |
| **Credential type** | Types of credentials included in the access policy registration. |
