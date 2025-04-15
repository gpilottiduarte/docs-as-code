# Batch import

This document provides information about the **Batch import** report screen in **MySafe**, which displays password and note imports and allows you to perform new imports, view, and download completed imports.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu**, and select **MySafe**.   
2. In the side menu, select **Batch import**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Import** | Button | Directs to the **Add new batch import** screen. |
| **Actions** | Dropdown menu | Displays the options *Batch Import, Print report, Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters imports by their identification code in Segura. |
| **File name** | Text field | Filters imports by the name of the imported file. |
| **User** | Text field | Filters imports by the name of the user who performed the import. |
| **Import period** | Date picker | Filters imports by the period when they were performed. |

## Report fields

* **ID**.  
* **File name**.  
* **User**.  
* **Type**: displays the import source. The options are *Last Pass, Keeper, Password*, and *Note*.  
* **Creation date**: displays the date and time the import was requested.  
* **Start of execution**: displays the start date and time of the import.  
* **End of execution**: displays the end date and time of the import.  
* **Time:** import process duration.  
* **Status**: displays the import status. The options are *Waiting, Finished*, and *Error processing*.  
* **Progress**: progress bar indicating the import progress.  
* **Error**: informs the presence or absence of errors during the import process. The options are **Yes** and **No**.  
* **Actions**:  
  * **Process details**: opens the **Import details** screen displaying a record with all details of the selected import.  
  * **Download**: downloads the imported file.

:::(info) (Info) 

By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the bottom of the report. 

:::

## Process details screen 

This screen displays a record with all details of the selected import.

| Item | Description |
| ----- | ----- |
| **ID** | The imported file identification code in Segura. |
| **File** | Name of the imported file. |
| **Request date** | Date and time the import was requested. |
| **Requester** | Name of the user who performed the import. |
| **Type** | Import source. The options are *Last Pass, Keeper, Password*, and *Note*. |
| **Message** | Message with information about the import status. In case of an error, it’s described here. |
| **Status** | Import request status. The options are *Waiting, Finished*, and *Error processing*. |
| **Lines** | Number of rows in the import spreadsheet. |
| **Users** | Number of usernames in the file. |
| **Lines with error** | Number of rows in the spreadsheet that encountered an error during processing. |
| **Start** | Start date and time of the import process. |
| **End** | End date and time of the import process. |
| **Progress** | Percentage of completion of the import. |
| **Error** | Error indication in the import process. The options are **Yes** or **No**. |
| **Download log file** | Button to download the log file with detailed information for each row in the imported file. Available for imports with the **Finished** status.|

## Add new batch import screen

The **Add new batch import** screen allows batch import of passwords and notes into **MySafe** either from password managers or using the template file provided.

### Add new batch import screens - Password and Note

After clicking on **Password** or **Note**, the screen displays:

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **File\*** | Upload field | Yes | Import file in `.xlsx` format to be uploaded. |
| **Template file** | Button | No | Downloads a template import file. |

### Add new batch import screens - LastPass and Keeper

After clicking on **LastPass** or **Keeper**, the screen displays:

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| File\* | Upload field | Yes | File downloaded from LastPass or Keeper in .csv or .json format to be imported into **MySafe**. |
