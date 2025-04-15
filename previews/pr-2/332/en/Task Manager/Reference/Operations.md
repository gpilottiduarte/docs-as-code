# Operations

In this document, you'll find all the information about the **Operations** and **Operation details** screens of the **Task Manager** module.

## Paths to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Task Manager**.
2. In the side menu, select **Operations**. 
---


1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Task Manager**.
2. In the side menu, select **Tasks** **>** A task from the list **> Action** column **> Three vertical dots icon > Executions >** An execution from the list **> Action** column **> View operations** (represented by the three horizontal bars icon) **> Operations**.

---


This section contains detailed information regarding the **Operations** screen, which displays a report containing all the operations performed during the execution of a task by device.

## Top bar

| **Item** | **Description**|
|----|----|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.                                                      |
| **View actions**| Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Print report**| Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV**  | Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

**Search fields**

| **Item**| **Description**|
|----|----|
| **ID** | Field that filters operations by their numerical identification code.  |
| **Device** | Field that filters operations by the device in which they were performed.|
| **Status** | Field that filters operations by their status. Available options are *Scheduled, In execution, Successfully completed, Error, Cancelled, Waiting approval*, and *Expired*. Clear the field to enable the **All** option. |

## Report fields 
 
 - **ID**: 
 - **Task name**: registered name of the task in which the operation was performed.
 - **Environment**: environment registered for the task execution. 
 - **System**: system registered for the task execution. 
 - **Tags**: keywords registered to help identify and filter the task. 
 - **Device**.      
 - **Status**.
 - **Result**: the operation outcome.                                            
  - **Action**: in this column, you access:
     - **View details**: represented by the magnifying glass icon, it opens the [**Operation details**](/v3-32/docs/task-manager-operations#operation-details-screen) screen, where you can view the details of the selected operation. 

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

### Operation details screen

This section contains detailed information regarding the **Operation details** screen of the **Task Manager** module, which displays the details of a selected operation.

| **Item** | **Description**|
|----|----|
| **Credential and device information** | Type of credential, credential username, device name, and device IP address. Ex.: Local administrator - usrudonopass[ centos (10.66.33.17)] |
| **Requester**| For punctual requests, this field displays the name of the user who requested the operation, whereas, for scheduled executions, it displays **Task Manager - Executor**. |
| **Request date**   | Date and time when the request was submitted. Format: MM/DD/YYYY and HH:MM:SS. |
| **Scheduling date**| Date and time for when the operation was scheduled. For punctual operations, the date and time refer to the moment when the user requested the execution. Format: MM/DD/YYYY and HH:MM:SS. |
| **Operation**      | Name of the operation.
**Status** | Operation status. Available options are *Scheduled, In execution, Successfully completed, Error, Cancelled, Waiting approval*, and *Expired*. |

#### Attempt records

At the top of this section, you can find information about the number of attempts made to execute the operation and which specific attempt the listed data corresponds to.

For example, **1st attempt**, **2nd attempt**, and so on.

| **Item**      | **Description**                                                                                   |
|----|----|
| **Template**  | Name of the template used in the operation. |
| **Version**   | Number of the template version. |
| **Start** | Date and time when the operation started. Format: MM/DD/YYYY and  HH:MM:SS.  |
| **End** | Date and time when the operation ended. Format: MM/DD/YYYY and  HH:MM:SS. |
| **Error** | Indicates whether there was an error during the operation execution. Available options are **Yes** and **No**. |
| **Message** | Message indicating the status of the operation. Ex.: “task manager operation executed successfully.” |

#### Logs section

| **Item** | **Description** |
|----|----|
| **Logs** | External link icon, represented by an arrow coming out of a square, opens a browser tab with the logs of the steps executed in the operation. These records can also be viewed in a box below the word **Logs**. |
