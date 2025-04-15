# LDAP/AD batch import

## Path to access

1. On the senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select Settings.  
2. On the side menu, select **Authentication \> Active Directory \> Batch import.**

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon. Refreshes the page. |
| **View actions** | Represented by the three vertical dots icon. Displays the possible actions for the page. |
| **Import** | Open the Batch import window. |
| **Print report** | Represented by the printer icon. It opens a new page for printing the report. |
| **Export CSV** | Represented by the sheet of paper icon, downloads the report. |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report. |

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Batch import operation code in senhasegura. |
| **File name** | Name of the file uploaded. |
| **User** | User who uploaded the batch import file. |
| **Import period** | It opens a calendar where you can select the start date of the time period during which the results will be filtered. |
| **until** | It opens a calendar where you can select the end date of the time period during which the results will be filtered. |

## Report fields

In the list of imports, you have the following fields:

* **ID**.  
* **File name.**  
* **User.**  
* **Creation date:** displays the creation date \- when the file with the records was uploaded \- of the batch operation.  
* **Start of execution:** displays the date on which the execution was started.  
* **End of execution:** displays the date on which the execution was ended.  
* **Time:** displays the total time the execution took to complete.  
* **Status:** displays the status of the execution.  
* **Progress:** status bar showing the progress of the execution.  
* **Error:** indicates whether or not an error has occurred. It can be **Yes** or **No.**  
* In the **Action** column, you have two options:  
  * **Process details**: represented by the file icon, opens the **Batch import details** window with detailed information about the entire batch import process.  
  * **Download:** represented by the downward-facing arrow icon, downloads the file used in the batch import.

## Batch import details window

By clicking **Process details** in the **Action** column, the **Batch import details** window will open. It contains the following fields:

| Item | Description |
| :---- | :---- |
| **ID** | Displays the import process code in senhasegura. |
| **File** | Displays the name of the file used in the batch import process. |
| **Request date** | Displays the date on which the batch import file was uploaded to senhasegura. |
| **Requester** | Displays the name of the requesting user. |
| **Locale** | Displays the user's `locale` code. **Note**: `locale` in an information system refers to the settings that define regional preferences. |
| **Message** | Displays the error or success message for the batch import process. |
| **Status** | Displays the status of the batch import process. |
| **Lines** | Displays how many lines the file has. |
| **AD groups** | Displays how many AD groups the file has. |
| **Lines with error** | Displays the number of lines with errors in the file. |
| **Start** | This field displays the start date and time of the batch import operation. It will be displayed in the `DD/MM/YY HH:MM` format. |
| **End** | This field displays the end date and time of the batch import operation. It will be displayed in the `DD/MM/YY HH:MM` format. |
| **Progress** | Displays, in percentage format, the progress of the batch import process. |
| **Error** | Indicates whether an error occurred in the batch import process. |

## Batch Import window

When you click **View Actions \> Import**, a window will open to upload the configuration file for batch import. This window contains the following fields:

| Item | Description |
| :---- | :---- |
| **Information worksheet** | Label indicating that this is the information sheet. |
| **Choose file** | Button to upload the batch import file. Note: the text on the button will be displayed according to the language of the user's operating system; it doesn't have any relation with the senhasegura instance language. |
| **Template file** | Button to download the template for the import file. |
| **Import data** | Button to upload and start the batch import process. |