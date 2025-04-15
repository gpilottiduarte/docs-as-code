# My requests

In this document, you'll find all the information about the **My requests** and **Request details** screens of the **Task Manager** module

## Requirements
* A requested task execution. For more information, access the [Run a task](/v3-32/docs/task-manager-how-to-manage-tasks#run-a-task) section of the document on [How to manage tasks](/v3-32/docs/task-manager-how-to-manage-tasks).

## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Task Manager**.
2. In the side menu, select **My requests**.

---

This section contains detailed information regarding the **My requests** screen, which displays a list of all the requests for punctual or scheduled task executions.


## Top bar

| **Item** | **Description**|
|----|----|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report.|
| **Print report**| Represented by the printer icon, it opens a new page for printing the report.                                        |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## Search fields
**Item** | **Description**
--- | ---
**ID** | Field that filters requests by their unique identification code.
**Operation** | Field that filters requests by the type of operation execution, which can be either manual or recurring scheduling.
**Access group** | Field that filters requests by the access group in which they’re registered.
**Requester** | Field that filters requests by the user who requested the task execution.
**Request date** | Field that filters requests by the period in which they were requested approval. Use this field to enter the initial date of the request period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date.
**until** | Field that filters requests by the period in which they were requested approval. Use this field to enter the final date of the request period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date.
**Status** | Field that filters requests by their approval status. Available options are *Pending, Approved, Rejected*, and *Expired*. Clear the field to enable the **All** option.
**Governance** | Field that filters requests by the governance code entered when requesting approval.
**Reason** | Field that filters requests by the reason selected when requesting approval.

## Report fields
- **ID**.
- **Operation**. 
- **Access group**.
- **Requester**.
- **Requested on**: date and time when the request was submitted.
- **Status**.
- **Expiration**.
- **Governance**.
- **Reason**.
- **Action**: in this column, you access:
  - **Details**: represented by the magnifying glass icon, it opens the [**Request details**](/v3-32/docs/task-manager-my-requests#request-details-screen) screen.

:::(Info) (Info)
The report displays 30 records per page.
To go to the next screen, click the forward button at the end of the report.
:::

### Request details screen


This section contains detailed information regarding the **Request details** screen, which displays the details of the selected task execution request.

| **Item**| **Description**|
|----|----|
| **Requester**| Name and username, within parentheses, of the user who made the request. |
| **Operation type** | Information about the type of the requested operation, which can be either manual or recurring scheduling. |
| **Status**| Request status. Possible options are *Pending, Approved, Rejected*, and *Expired*. |
| **ID**| Request identification code.|
| **Access group** | Name of the access group in which the request is registered. |
| **Request date** | Date and time when the request was submitted.|
| **Expiration**  | Date and time when the request expired.|
| **Approvals**   | Number of approvals for this request.|
| **Disapprovals**| Number of disapprovals for this request.|

#### Responses section
This section displays the information regarding the responses to your requests.

| **Item**| **Description**|
| ---- | ---- |
| **Approver**| Name and username, within parentheses, of the approver.|
| **Level**| Level at which the approver will act. The possible options are *Level 1, Level 2*, and *Level 3*.|
| **Response**   | State of the approver's response to the request. The available options are *Not answered, Approved*, and *Rejected*. |
| **Date**| Date and time of the request.|
| **Justification** | Reason for the response to the request.|

#### Justification section
This section displays the fields related to the reasons for requesting task execution.

| Item| Description |
| ----| ---- |
| **Governance ID** | Governance code entered when submitting the request. |
| **Reason**| Reason selected when submitting the request.|

#### Request details section

Plain text with information such as task ID and name, the device on which it will be executed, the credential used, and the days and periods of execution.

