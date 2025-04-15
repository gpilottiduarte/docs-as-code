# Triggers transfer

This document provides information about the **Transfers triggers** report screen, where you can activate the log for transferred files in a remote session.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**. 
2. In the side menu, select **Management** > **Sessions** > **Transfer triggers**.

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Status** | Dropdown menu | Filters the transfer triggers by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the option **All**. |

## Report fields

* **ID:** number to identify the transfer audit order.  
* **Trigger:** trigger type.  
* **Enabled:** trigger status.  
* **Change:** date and time the status changed.  
* **Change maker:** name from the user who changed the status.  
* **Disabling date/time:** date and time that the trigger was disabled.  
* **Disabler:** name of the user who disabled the trigger.  
* **Actions:** the action displayed varies according to the status of the trigger being searched for.  
  * **Disable**: available for triggers with status of **Active**, used to inactivate a trigger. In the confirmation window, click **Yes** to confirm the action.
    :::(info) (**Info**)
    Note that the triggers aren’t deleted, they’re only disabled. You can re-enable these triggers by       filtering the results for **Disabled** in the **Enabled** dropdown menu.
    :::
  * **Enable:** available for triggers with status of **Disabled**, used to enable the trigger. In the confirmation window, click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::
