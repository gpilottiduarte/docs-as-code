# Password reconciliation

This document provides information about the **Password reconciliation** report screen, which displays the reconciliations carried out on Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions**.  
2. In the side menu, select **Password operations > Password reconciliation.**

## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Username** | Text field | Filters by the username of the credential on which password reconciliation occurred. |
| **Device** | Text field | Filters by the name of the device on which the reconciliation occurred. |
| **Status** | Dropdown menu | Filters by reconciliation status. The options are *Scheduled, In execution, Error* and *Executed*. Clear the field to enable the option **All**. |
| **Result** | Dropdown menu | Result of the performed reconciliation. The options are *Confirmed, Authentication Error* and *Connection Error*. Clear the field to enable the option **All**. |
| **Start** | Date picker | Filters by the initial reconciliation period to search for records. |

## Report fields

* **ID:** identification code of the reconciliation attempt.  
* **Username.**  
* **Device.**  
* **State.**  
* **Result.**  
* **Start.**  
* **End.**  
* **Message:** return message with the result of the reconciliation.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::