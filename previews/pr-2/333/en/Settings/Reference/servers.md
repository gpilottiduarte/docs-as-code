# Servers

In this document, you'll find all the information about the **Backup Servers** report, which displays information about backup servers and directories.

## **Access path**

1. In senhasegura, in the upper left corner, click on **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Servers**.

## **Top bar**

| Item | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, displays or hides the search fields present on the screen. |
| **Refresh** | Represented by the counterclockwise arrow icon, refreshes the page. |
| **Show actions** | Represented by the three vertical dots icon, displays a dropdown menu with possible actions for the page. |
| **New** | Represented by the plus icon, opens the **Backup Server** screen that registers a new backup server. |
| **Print report** | Represented by the printer icon, opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, downloads the report. |
| **Schedule report** | Represented by the clock icon, opens the **Schedule report** form. |

## **Search fields**

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters by the server code in senhasegura. |
| **Mode** | Drop-down menu. Filters by the backup mode in senhasegura. The options are **Local Directory** or **SSH \- RSYNC**. |
| **Host** | Text field. Filters by the backup server host. |
| **Port** | Text field. Filters by the backup server port. |
| **Path** | Text field. Filters by the directory path on the backup server. |
| **Enabled** | Drop-down menu. Filters by the backup server status in senhasegura. The options are **Yes** or **No**. |

## **Report fields**

* **ID.**  
* **Mode.**  
* **Host.**  
* **Port.**  
* **Path.**  
* **Enabled.**  
* In the **Action** column, you have the **Edit** option, represented by the pencil and paper icon. This option opens the **Backup Server** window in edit mode.

## **Backup server window**

When you click on **New** in the top bar or click on **Edit** in the **Action** column, you are directed to the **Backup Server** window, which contains these fields:

| Item | Description |
| :---- | :---- |
| **Mode** | Drop-down menu. Select the backup mode. The options are **Local Directory** or **SSH \- RSYNC**. |
| **Enabled** | Radio button. Select the backup server status in senhasegura. The options are **Yes** or **No**. |
| **Directory Path** | Text field. Indicate the backup directory path on the backup server. |
| **Host** | Text field. Only for the SSH \- RSYNC option. Indicate the server where the files will be saved. |
| **Port** | Text field. Only for the SSH \- RSYNC option. Indicate the SSH port of the server. |
| **Credential for authentication** | Drop-down menu. Only for the SSH \- RSYNC option. Indicate the credential to access the remote server. |