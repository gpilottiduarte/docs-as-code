# Automations

This document provides information about the report **Automations**, which displays the automations carried out in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions.**  
2. In the side menu, select **Operations Automation > Automations.** 

---
## Actions menu

| **Item** | **Description** |
| :---- | :---- |
| **Add** | Directs to the [Register automation operation](/v4/docs/executions-register-automation-operation) screen. |
| **Actions** | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by automation identification number. |
| **Name** | Text field | Filters by automation registration name. |
| **Operation** | Dropdown menu | Filters by the type of operation performed by the automation. |
| **Status** | Dropdown menu | Filters by automation status. The options are **Enable** and **Disable.** Clear the field to enable the **All** option. |
| **Autorun** | Dropdown menu | Filters by the information on whether or not the automation is configured to run automatically The options are **Yes** and **No**. |

## Report fields

* **ID.**  
* **Name.**  
* **Operation.**  
* **Execution:** indicates whether there was any execution.  
* **Days**: indicates which days the execution will take place.  
* **Periods**: indicates which periods will be executed.  
* **Interval**: indicates the interval between runs (in hours).  
* **Actions:**  
  * **Edit**: opens the [Register automation operation](/v4/docs/executions-register-automation-operation) so that the necessary changes can be made.  
  * **Execute:** it requests the scheduling of the operation execution before the period set in the registration.  
  * **Executions**: opens the [Executions](/v4/docs/executions-executions) screen.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::