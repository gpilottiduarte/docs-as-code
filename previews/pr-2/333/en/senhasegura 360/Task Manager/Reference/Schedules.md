# Schedules

In this document, you'll find all the information about the **Schedules** and **Schedule task** screens of the **Task Manager** module

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Task Manager**.
2. In the side menu, select > **Tasks >** A task from the list **> Action** column **> Three vertical dots icon > Schedules** (represented by the clock icon).

---
This section contains detailed information regarding the **Schedules** screen, which displays a report with all the executions scheduled for a selected task.

## Top bar

| **Item** | **Description**|
|----|----|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report.|
| **Print report**| Represented by the printer icon, it opens a new page for printing the report.                                        |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## Search fields

| **Item**| **Description**|
|----|----|
| **ID**| Field that filters tasks by their numerical identification code.|
| **Task**| Field that filters tasks by their registered name.|
| **Created by** | Field that filters tasks by the user who scheduled them. |
| **Status**| Field that filters operations by their status. Available options are *Waiting approval, Approved, Rejected*, and *Cancelled*. Clear the field to enable the **All** option. |

## Report fields

* **ID**. 
*  **Task**.
*  **Days**: the days selected for task execution.
*  **Periods**: the periods of the day selected for task execution.
*  **Interval**: system registered for the task execution.
*  **Tags**:  the interval, in minutes, hours, days, or months, selected for task execution.
*  **Created by**.
* **Action**: in this column, you access.
    *  **Cancel schedule**:  represented by a trash icon, it opens a pop-up **Confirmation** window for canceling the scheduling with the options **Yes** and **No**. Available only for schedules under the **Approved** and **Waiting approval** statuses. 
        
## Action button
* **Schedule running**: located in the bottom-right corner of the screen, it opens the **[Schedule task](/v3-33/docs/task-manager-schedules#schedule-task-screen)** screen.

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

### Schedule task screen
This section contains detailed information regarding the **Schedule task** screen, which enables the configuration of a task execution scheduling.

| **Item**| **Description** |
|----|----|
| **Reason** | Field for entering the reason for task execution. The downward arrow opens a list with all registered reasons. |
| **Governance code**  | Field for entering the governance code used to register access requests.|
| **Justification**| Field for entering a descriptive text with the reason for task execution. |

:::(Info) (Info)
These fields may be required if the configuration of the access group in which the task is included demands their completion. In such cases, field names will be accompanied by an asterisk.
:::

| **Item**| **Description**  |
|----|----|
| **Days for execution** | Checkboxes that enable the selection of the days on which the task should be executed. |
| **Periods for execution** | Checkboxes that enable the selection of the periods of the day during which the task should be executed. |
| **Minimum interval between runs** | Two fields that enable the selection of the minimum interval between task executions. The first field enables the selection of a number between 1 and 60. The second field enables the selection of *Minutes, Hours, Days*, or *Months*.|

