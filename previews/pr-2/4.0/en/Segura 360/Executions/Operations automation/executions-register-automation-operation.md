# Register automation operation

This document provides information about the **Operations attempts** report screen, which displays information about attempted password operations carried out in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions**.  
2. In the side menu, select **Operations automation > Automations.**  
3. In the report screen, on the action menu click **Add.**

---
## Settings tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Name to identify the automation. |
| **Operation** | Dropdown menu | Yes | Operation type which will be automated. |
| **Strength for passwords** | Dropdown menu | Yes | Options to choose how strong the passwords should be .The options are *High*, *Medium* and *Low*. |
| **Enabled** | Toggle button | No | Automation status. The options are **Yes** and **No**. |
| **Execution script** | Text field | Yes | Script with the settings and data that will be executed in the automation. |

## Execution tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable auto execution?** | Toggle button | No | Option for the automation to be executed automatically. The options are **Yes** and **No**. |
| **Days for executions** | Checkbox | No | Checkbox to customize the days of automatic automation execution. The options are *All days, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday* and *Saturday*. |
| **Period for execution** | Checkbox | No | Checkbox to customize the time period for automatic automation execution. The options are *All periods, 08:00 AM - 12:00 PM, 12:00 PM - 4:00 PM, 4:00 PM - 8:00 PM, 8:00 PM - 12:00 AM, 12:00 AM - 04:00 AM, 04:00 AM - 08:00 AM*. |
| **Minimum interval between runs** | Quantity input | No | Period of hours stipulated to be an interval between automation executions. |

## Review tab

This section contains the information added in the previous steps so that it can be analyzed and, if necessary, changed before finalizing the registration. The information is grouped by each tab.