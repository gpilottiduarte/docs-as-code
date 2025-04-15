# Servers

This document provides information about the **Backup Server** report, which displays the settings of the backup servers within Segura.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Backup \> Servers.**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Backup server** screen to register a new server. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filter by the server's identification code in Segura. |
| **Mode** | Dropdown menu | Filter by the backup mode in Segura. The options are **Local Directory** or **SSH \- RSYNC.** |
| **Host** | Text field | Filter by the backup server host. |
| **Port** | Text field | Filters by the backup server port. |
| **Path** | Text field | Filters by the directory path on the backup server. |
| **Enabled** | Dropdown menu | Filters by the status of the backup server in Segura. The options are **Yes** or **No.** |

## Report fields
* **ID.**  
* **Mode.**  
* **Host.**  
* **Port.**  
* **Path.**  
* **Enabled.**  
*  **Actions**:  
  * **Edit:** opens the **Backup Server** screen in edit mode.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Backup server
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Mode** | Dropdown menu | Yes | Selects the backup mode. The options are **Local Directory** and **SSH \- RSYNC**. |
| **Enabled** | Radio button | Yes | Indicates the status of the backup server in Segura. The options are **Yes** and **No**.  |
| **Directory path** | Text field | Yes | Enters the backup directory path on the backup server. |

