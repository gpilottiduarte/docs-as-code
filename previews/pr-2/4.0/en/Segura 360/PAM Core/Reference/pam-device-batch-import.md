# Batch import

This document provides information about the **Batch import** of **devices** report screen, which displays the imports of devices and credentials made, and makes it possible to perform a new import, view and download the imports made.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core.**  
2. In the side menu, select **Devices > All Devices.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices**.  
2. In the side menu, select **Batch import.**

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Import** | Button | Directs to the **Batch import** screen. |
| **Actions** | Dropdown menu | Displays the options *Batch Import, Print Report, Export CSV* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the imports by their identification code within Segura. |
| **File name** | Text field | Filters the imports by the name of the file that was imported. |
| **User** | Text field | Filters the imports by the name of the user who made the import. |
| **Import period** | Date picker | Filters the imports by the period in which they were made. |

## Report fields

* **ID**.  
* **File name**.  
* **User**.  
* **Creation date**.  
* **Start of execution**: displays the start of the import.  
* **End of execution**: displays the end of the import.  
* **Time:** displays the file processing time.  
* **Status**: displays the import status. The options are *Waiting*, *Finished*, and *Error processing*.  
* **Progress**: progress bar that indicates the progress of the import.  
* **Error**: informs the presence or absence of an error in the import process. The options are **Yes** and **No**.  
* **Actions**:  
  * **Process Details**: opens the **Batch import details** screen which displays a record with all the details of the selected import.  
  * **Download**: downloads the imported file.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.  
:::

---
### Batch Import registration screen

This section provides information about the screen **Batch import** which makes it possible to import devices and credentials in batch.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Device worksheet*** | Upload field | Yes | Import file in `.csv` format to be loaded.  |
| **Template file** | Button | No | Downloads an import template file. |

:::(warning) (**Attention**)  
Read the instructions on how to fill in the worksheet, guidelines can be found on the template file. Avoid reusing worksheets, always use the most recent version.  
:::

---
### Batch import details screen
This section provides information about the **Batch import details** which displays a record with all the details of the selected import.

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Imported file identification code. |
| **File** | Name of the imported file. |
| **Request date** | Date and time the import was made. |
| **Requester** | Name of the user who performed the import. |
| **Locale** | Location of the user who performed the import. |
| **Message** | Displays a message with information about the import status. In case of an error, it will be described in this field. |
| **Status** | Status of the imported file. The options are *Processing*, *Finished*, and *Error processing*. |
| **Lines** | Number of lines existing in the file import spreadsheet. |
| **Devices** | Number of devices existing in the file. |
| **Credentials** | Number of credentials existing in the file. |
| **Lines with error** | Number of rows in the spreadsheet that presented an error during processing. |
| **Start** | Start date and time of import processing. |
| **End** | End date and time of import processing. |
| **Progress** | Import completion percentage. |
| **Error** | Error indication during import processing. The options are **Yes** and **No**. |
