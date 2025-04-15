# My apps


This document provides information about the **My apps** report screen, which displays the user's applications (browser extension and Segura app) that have access to **MySafe** and allows the creation and management of authorization keys.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Integrations \> My apps**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add application** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters applications by their identification code in Segura. |
| **Name** | Text field | Filters applications by their identification name. |
| **Application type** | Dropdown menu | Filters applications by their type. The options are **Mobile app** and **Extension**. Clear the field to enable the **All** option. |
| **Device** | Text field | Filters applications by the device on which they are being used. |
| **Version** | Text field | Filters applications by their Segura version. For example, enter `3.30.0.10` to search for extension applications in Segura version 3.30.0.10. |
| **Creation date** | Date picker | Filters applications by the period when they were added to **MySafe**. |
| **Expiration date** | Date picker | Filters applications by the expiration period. |
| **Status** | Dropdown menu | Filters applications by their activation status. Options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Name.**  
* **Application type.**  
* **Device.**  
* **Version.**  
* **Creation date.**  
* **Last used.**  
* **Expiration date.**  
* **Actions**:  
    * **Edit**: opens the **Edit application** screen, allowing the editing of the application name or expiration date.  
    * **Revoke**: opens the confirmation pop-up for revoking access with the options **Yes** or **No**.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

### **Add/Edit Application screen**

The **Add application** and **Edit application** screens share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name\*** | Text field | Yes | Identification name of the application that will connect to **MySafe**. |
| **Expiration date** | Date/Time picker | No | Date and time when the access will expire. <br>**Note**: if an expiration date isn’t defined, the key will remain valid until users log out of the application or revoke it manually. |
| **Application type\*** | Radio button | Yes | Type of application that will connect to **MySafe**. The options are **Mobile app** or **Extension**. |
