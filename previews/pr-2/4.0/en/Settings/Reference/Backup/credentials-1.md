# Credentials

This document provides information about the **Credentials** report, which presents information about credential backups performed in Segura.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Backup \> Credentials.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the credential identification code in Segura. |
| **Device** | Text field | Filter by the device name in Segura. The device's IP address can also be used. |
| **Username** | Text field | Filter by the user's username in Segura |
| **Integrity** | Dropdown menu | Filter the registers by their integrity state. The options are **Sim** or **No**. Clear the field to enable the **All** option. |
| **Compliance** | Dropdown menu | Filters by the credentials password compliance status in relation to the registered password policy. The options are **Yes** or **No**. |
| **Password Policy** | Dropdown menu | Filters by the password policy registered in Segura. |
| **Last backup** | Date picker | Filters by the selected period. |
| **Status** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the **All** option. |

## Report fields
* **ID.**  
* **Device.**  
* **Username.**  
* **Type:** type of user.  
* **Last change:** date and time of the last password change performed in the credential. Displayed in the format DD/MM/YYYY HH:MM:SS.  
* **Last view:** date and time of the last query performed to the credential. Format: DD/MM/YYYY HH:MM:SS.  
* **Last backup:** date and time of the last backup of the credential. Format: DD/MM/YYYY HH:MM:SS.  
* **Enabled:** credential status.  
* **Integrity.**  
* **Password Policy.**  
* **Compliance.**  
* **Detail:** displays a message with information about the credential password. If the password doesn’t meet compliance requirements, the message specifies what is missing for it to become compliant.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

