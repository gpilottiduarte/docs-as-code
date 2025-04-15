# Protected Information

This document provides information about the **Protected information** report, which displays users’ protected information within Segura.
:::(error) (Attention)  
This feature has been **deprecated as of Segura version 3.26** . Use **MySafe** to add and share your personal information.  
:::

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Backup \> Protected information.**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the protected information by their identification code within Segura. |
| **Type** | Dropdown menu | Filters by the type of protected information. The options are **Access Credential** or **Digital Certificate**. |
| **Name** | Text field | Filters by the name of the protected information. |
| **Owner** | Text field | Filters by the name of the user who owns the protected information. |
| **Integrity** | Dropdown menu | Filters by the integrity of the protected information. The options are *Empty*, *Corrupt* or *Integral*. |
| **Last backup** | Date picker | Filters protected information by the period when the last backup was held. |
| **Status** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the **All** option. |

## Report fields
* **ID.**  
* **Type.**  
* **Name.**  
* **Owner.**  
* **Category**: indicates the category in which the protected information was registered. The options are **Shared** or **Personal**.  
* **Created in:** indicates the date and time that the protected information was created. Format: `DD/MM/YYYY HH:MM:SS`  
* **Last change**: indicates the date and time that the protected information was last changed. Format: `DD/MM/YYYY HH:MM:SS`  
* **Last backup:** indicates the date and time that the last backup of the protected information was performed. Format: `DD/MM/YYYY HH:MM:SS`  
* **Enabled.**  
* **Integrity.**

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::