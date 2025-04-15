# Batch import

This document provides information about the **Batch Import** report screen, which displays users' batch import operations.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User management \> Batch import.**

## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Import** | Button | Directs to the **Add file** screen. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification code of the batch import operation within Segura. |
| **File name** | Text field | Filters by the imported file name. |
| **User** | Text field | Filters by the name of the user who performed the batch import. |
| **Import Period** | Date picker | Filters by the period in which the batch import files were added |

## Report fields

* **ID.**  
* **File name.**  
* **User.**  
* **Creation date:** date of creation of the batch import.  
* **Start of execution:** start date of the batch import execution.  
* **End of execution:** end date of the batch import execution.  
* **Time:** execution duration.  
* **Status:** the status of the execution.  
* **Error:** error occurrence in the execution.  
* **Actions:**  
  * **Process details:** opens the **Batch Import Processing** screen.  
  * **Download:** downloads the batch import file.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add file screen

This section provides information about the **Add file** screen.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **User spreadsheet** | Upload field | Yes | Import file in `.csv` format for upload. |
| **Template file** | Button | No | Downloads a template import spreadsheet. |

## Process details

This section provides information about the **Processing of the batch import** screen.

* **Code**: identification code of the bulk import operation in Segura.  
* **File**: name of the file used in the bulk import operation.  
* **Progress**: percentage of completion of the import.  
* **Request Date**: date of the bulk import operation request, in `dd/mm/yy hh:mm` format.  
* **Requester**: name of the user who requested the bulk operation.  
* **Locale**: language of the bulk import file.  
* **Status**: current situation of the bulk import request.