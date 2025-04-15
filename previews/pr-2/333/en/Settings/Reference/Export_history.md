# Export history

In this document, you'll find all the information about the **Export history** report, which displays information about the backups performed.

## Path to access

1. In senhasegura, in the upper left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup > Export History**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the **Schedule report** form. |

## Search fields

| Item | Descrição |
| :---- | :---- |
| **Start** | Presents a calendar to choose the start date of the filter. |
| **until** | Presents a calendar to choose the end date of the filter. In the adjacent field, select the time to end the filter. |
| **Type** | Drop-down menu. Filters according to the type of export performed. The options are: *Full, Protected Information,* or *Device Passwords*. |
| **Reason** | Drop-down menu. Filters according to the mode in which the backup was performed. The options are *Manual* and *Schedule*. |
| **Requested by** | Text field. Filters according to the name of the user who requested the export. |

## Report fields

* **ID:** data export code.  
* **Type**.  
* **Reason**.  
* **Start**: date and time when the export began. It will be shown in the format `DD/MM/YYYY HH:MM`.  
* **End**: date and time when the export ended. It will be shown in the format `DD/MM/YYYY HH:MM`.  
* **Requested by**.  
* In the **Action** column, you can download the exported data. To do this, click on **Download**, represented by the down arrow icon.The export file will be in `.tar.gz` format.