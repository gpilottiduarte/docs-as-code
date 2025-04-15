# Batch import limited users

This document provides information about the **Batch import limited users** screen in the **Management** menu, where you can view all performed batch imports of this type and create a new import in **Domum Remote Access**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Management \> Batch import limited users**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Import** | Button | Directs to the [Import](/v4/docs/batch-import-limited-users#import-screen) screen. |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report*.|

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters the import by their identification code. |
| **File name** | Text field | Filters the import by the name of the file used for the import. |
| **User** | Text field | Filters the import by the name of the user who performed the import. |
| **Import period** | Date picker | Filters the import by the initial and final date of the interval for searching records. |

### Report fields

- **ID**. 
- **File name**.  
- **User**.  
- **Creation date**: the date and time of the batch access creation.  
- **Start of execution**: the date and time the import process started.  
- **End of execution**: the date and time the import process ended.  
- **Time**: the duration of the process.  
- **Status**: the status of the process.  
- **Progress**: displays the process in the form of a horizontal bar.  
- **Error**: displays whether there was an error in the process or not.  
- **Actions**:  
    - **Process details**: open the [Process details](/v4/docs/batch-import-limited-users#process-details-screen) screen.  
    - **Download**: downloads the file used for the batch import.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::  

## Import screen

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **User worksheet\*** | Upload field | Yes | Displays the **Drag and drop the file here** button to select the import file. |
| **Automatically provide access after import\*** | Radio button | Yes | Selects automatic access after import for the users contained in the worksheet. The options are: **Yes** or **No**.  |
| **Template file** | Button | No | Starts the download of the import `.xlxs` file to be filled in. |

## Process details screen

| Item | Description |
| ----- | ----- |
| **ID** | ID of the access. |
| **File** | Name of the file used in the batch import. |
| **Date** | Date and time of the import. |
| **Request** | Name of the user who performed the import. |
| **Locale** | Language chosen by the user when importing the spreadsheet into the Segura platform. |
| **Message** | Message returned at the end of the process. |
| **Status** | Status of the process. |
| **Rows** | Number of rows in the batch import spreadsheet. |
| **Users** | Number of imported users. |
| **Automatic access** | Indicates if automatic access was requested during the batch import. |
| **Rows with errors** | Number of error rows in the batch import spreadsheet. |
| **Start** | Date and time the process started. |
| **End** | Date and time the process ended. |
| **Progress** | Percentage of process progress. |
| **Error** | Indicates the presence or absence of errors in the import process. |