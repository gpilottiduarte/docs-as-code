# Batch import

This document provides information about the **Batch Import** report screen that displays information about the batch import of LDAP/AD servers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> Batch import.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Code of identification for the batch import operation in Segura. |
| **File name** | Text field | Name of the file that was uploaded. |
| **User** | Text field | User who uploaded the batch import file. |
| **Import Period** | Date picker | Filtering period for the import operation. |

## Report fields
* **ID**  
* **File name**  
* **User**  
* **Date of creation**: displays the date of creation \- when the file was uploaded with the records \- of the batch operation.  
* **Start of execution**: displays the date when the execution was started.  
* **End of execution**: displays the date when the execution was ended.  
* **Time**: displays the total time that the execution took to complete.  
* **Status**: Displays the status of the execution. You can assume the values: *Waiting*, *Ended* and *Error when processing*.  
* **Progress**: status bar that displays the progress of the execution.  
* **Error**: indicates whether or not an error occurred. It can be **Yes** or **No**.  
* **Actions**  
  * **Process details**: opens the **Import process details** window with detailed information about the entire batch import process.  
  * **Download**: downloads the file used in the batch import.

## Batch import
### Import process details
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Displays the code of the import process in Segura. |
| **File** | Text field | Displays the name of the file used in the batch import process. |
| **Request Date** | Text field | Displays the date when the batch import file was uploaded to Segura. |
| **Requester** | Text field | Displays the name of the requesting user. |
| **Locale** | Text field | Displays the locale code in which the spreadsheet was sent. **Note**: locale in an information system refers to the set of settings that define regional preferences. |
| **Message** | Text field | Displays the error or success message about the batch import process. |
| **Status** | Text field | Displays the status of the batch import process. |
| **Lines** | Text field | Displays how many lines the file has. |
| **AD Group** | Text field | Number of rows that were successfully imported. |
| **Lines with error** | Text field | Displays the number of lines with error within the file. |
| **Start** | Text field | Displays the start date and time of the batch import operation. This field will be displayed in the format DD/MM/YY HH:MM. |
| **End** | Text field | Displays the end date and time of the batch import operation. This field will be displayed in the format DD/MM/YY HH:MM. |
| **Progress** | Text field | Displays, in percentage format, the progress of the batch import process. |
| **Error** | Text field | Indicates whether any errors occurred in the batch import process. |

