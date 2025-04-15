# Executions

In this document, you'll find all the information about the **Executions** screen of the **Task Manager** module, which displays a report with all the execution requests registered and available for your user.

## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Task Manager**.
2. In the side menu, select **Executions**.

## Top bar

| **Item** | **Description** |
|----|----|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **New**| Represented by the plus sign, it opens the Task screen.  |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report.                                                     |
| **Export CSV**   | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen.  |

## Search fields
| **Item**  | **Description**  |
|----|----|
| **ID** | Field that filters execution requests by their numerical identification code. This code is generated when the **Run task** button is clicked on the **Tasks** screen.  |
| **Task**| Field that filters execution requests by their registered name. |
| **Error**  | Field that filters the execution requests with or without errors. The available options are **Yes** and **No**. Clear the field to enable the **All** option.  |
| **Processed**  | Field that filters execution requests based on whether they have been processed or not. The available options are **Yes** and **No**. Clear the field to enable the **All** option. |
| **Requester**  | Field that filters execution requests by the name of the user who requested them. |
| **Request date** | Field that filters execution requests by the period in which they were requested. Use this field to enter the initial date of the execution request period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date. |
| **until**| Field that filters execution requests by the period in which they were requested. Use this field to enter the final date of the execution request period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date. |

## Report fields
* **ID**.
* **Task**.
* **Total**: total number of operations performed. For example, if you executed the task on two devices, two operations were performed, so this field will show the number 2.
* **Processed**.
* **Error**.
* **Status**: task execution status. The available options are *Executed, Approved, Rejected*, and *Pending*. 
* **Requester**.
* **Request date**.
* **Environment**: environment registered for the task execution.
* **System**: system registered for the task execution.
* **Tags**: keywords registered to help identify and filter the task.
* **Execution type**: indicates whether the execution type is **Scheduled** or **Punctual**.
* **Action**: in this column, you access:
    *  **View operations**: represented by the three horizontal bars icon, it opens the [**Operations**](/v3-32/docs/task-manager-operations) screen, where you can view the operations performed in the selected execution.

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::
