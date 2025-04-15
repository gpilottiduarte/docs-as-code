# Systems

This document provides information about the **Systems** report screen, which displays the systems that consume the API data.

More information in [Management](/v4/docs/a2a-management).

## Path to access 

1. On Segura, in the navigation bar, hover over the **Products menu** and select **A2A**.  
2. In the side menu, select **Management \> Systems**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV*, and *Schedule report*. |



## Search fields


| Item | Type | Description |
| ----- | ----- | ----- |
| **Environment** | Text field | Filters systems by their identification name. |
| **Status** | Dropdown menu | Filters systems by their activation state. The options are **Enabled** or **Disabled**. |

## Report fields


* **ID**: system identification code in Segura.    
* **System**.    
* **Status**.    
* **Actions**:    
  * **Edit**: opens the **Edit system** screen.    
  * **Disable**: opens the confirmation pop-up to disable the system with **Yes** or **No** options.  

:::(info) (Info)    
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the bottom of the report.    
:::  

## Add/Edit system screens  

The **Add system** and **Edit system** screens share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name\*** | Text field | Yes | System identification name. |
| **Status** | Radio button | No | Defines the system’s activation state. The options are **Enabled** and **Disabled**. <br>**Default**: Enabled. |