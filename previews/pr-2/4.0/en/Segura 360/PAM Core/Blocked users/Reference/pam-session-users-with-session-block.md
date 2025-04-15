# Blocked users

This document provides information about the **Users with session block** report screen, these reports show the users who were blocked during a remote session.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**. 
2. In the side menu, select **Audit > Sessions > Blocked users**.

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters blocked users by their identification code within Segura. |
| **Session ID** | Text field | Filters blocked users by session identifier code. |
| **Status** | Dropdown menu | Filters blocked users by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the option **All**. |
| **Blocked** | Text field | Filters blocked users by the name of the blocked user. |
| **Author** | Text field | Filters blocked users by the name of the user who blocked them. |
| **Unblocker** | Text field | Filters blocked users by the name of the user who unblocked them. |
| **Date/time block** | Date picker | Filters blocked users by the period in which the blocking was carried out. |

## Report fields

* **Id**: identification number of the order of records in the report.  
* **ID.**  
* **Session ID.**  
* **Status.**  
* **Blocked.**  
* **Date/time block.**  
* **Author.**  
* **Date/time unblock**: date and time the unlock was performed.  
* **Unblocker.**  
* **Actions:**  
  * **Block/Release interactivity**: releases user interaction to restart and use the session.
    :::(info) (**Info**)
    If the **Status** field is **Disabled**, the **Action** column will be empty.
    :::

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::