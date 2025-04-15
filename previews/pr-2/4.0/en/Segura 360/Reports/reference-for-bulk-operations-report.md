# Bulk operations report

For a bulk operation to be carried out, an approving user must authorize it. To view pending requests, access **Grid Menu > Reports > Events > Bulk operations**. The fields below refer to the request search report.

## Bulk operations

| Field              | Description                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | Request ID number.                                                                                                                                                                    |
| **Action**        | Drop-down menu that filters according to the operation requested.                                                                                                                     |
| **Status**        | Drop-down menu that filters by the current status of the request. It can be:<br />*Pending approval, Pending approval, Pending execution, Running, Success, Error,* and *Canceled.* |
| **Creation date** | Displays a calendar that lets you choose the request creation date.                                                                                                                   |
| **until**         | Displays a calendar that lets you choose the deadline for searching requests.                                                                                                         |

To perform the search, click on the **Filter** button; to clear the fields and restart the process, click on the **Clear** button.

The bulk operations list will appear below the filter form, with the following fields:

* **ID**.
* **Action**.
* **Status**.
* **Closed tasks**: indicates the number of tasks closed in that operation.
* **Total tasks**: indicates the total number of tasks in that operation.
* **Creation date:** date the operation was created.
* **Action** column:
  * **Request details**, identified by the identity card icon.
  * **Tasks**, identified by the three horizontal bars icon.

## Request details window

When you click on **Request details** in the **Action** column, a window will open. In this window, we will see the following fields:

| Field             | Description                                                                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Requester**    | It shows the name and user name of the requester for that operation.<br />Next to this field is the type of operation, in this case,Bulk operation. <br />Then you have the status of the operation, which can be *Pending,Approved,* or *Rejected.* |
| **ID**           | Request ID on Segura.                                                                                                                                                                                                                               |
| **Requested in** | Date and time the request was made. Presented in the `DD/MM/AAAA HH:MM:SS` format.                                                                                                                                                                     |
| **Expiration**   | It indicates the expiration date of the request. Presented in the `DD/MM/AAAA HH:MM:SS` format.                                                                                                                                                        |
| **Approvals**    | It indicates the number of approvals that the request has received.                                                                                                                                                                                      |
| **Disapprovals** | It indicates the number of disapprovals that the request has received.                                                                                                                                                                                   |

### Responses session

In the same window, just below the request details, you have the **Responses** section, which shows the details of the responses given to the request.

| Field         | Description                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Approver      | Name of the user who approved or disapproved the request.<br />This field can also display the text "**Not answered", indicating that the user has not answered your request.** |
| Level         | Approver user level.                                                                                                                                                                  |
| Response      | It indicates whether the user in question has already provided an answer.                                                                                                             |
| Date          | Response date. Presented in the `DD/MM/AAAA HH:MM:SS` format.                                                                                                                       |
| Justification | Text field with the approving user's written justification. If no justification has been provided, the field will be blank.                                                           |

### Request details session

Below, you'll find **Details of the request.**

| Field             | Description                                              |
| ----------------- | -------------------------------------------------------- |
| **ID**      | Code of the request in Segura.                      |
| **Action**  | Action that was indicated in the bulk operation request. |
| **Status**  | Updated status of the request.                           |
| **Enabled** | The status of the request. Can be **Yes** or **No**.   |

:::(warning) (Caution)
Below these fields, you'll have a session that is variable. So, the fields below will vary according to the module in which the request was made, with a different type of detail for bulk operations for credentials, devices or DSM.
:::

#### Affected entities - Devices

When analyzing a bulk operation on devices, these fields will appear. Note, however, that only in this case will you be able to see these fields.

| Field            | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| **ID**          | Code of the entity added by the bulk operation request.      |
| **Device name** | Name of the device affected by the bulk operation request.   |
| **Management**  | IP address or hostname of the device.                        |
| **Type**        | Type of device affected by the bulk operation request.       |
| **Vendor**      | Vendor of the affected device by the bulk operation request. |
| **Product**     | Model of the device affected by the bulk operation request.  |

#### Justification

When analyzing a bulk operation in DSM secrets, these fields will appear. Note, however, that only in this case will you be able to see these fields.

| Field              | Description                                 |
| ------------------ | ------------------------------------------- |
| **Governance ID** | Governance code for the bulk operation.     |
| **Reason**        | Reason for carrying out the bulk operation. |

#### Affected entities - Credentials

When analyzing a bulk operation in credentials, these fields will appear. Note, however, that only in this case will you be able to see these fields.

| Field         | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| **ID**       | Code of the credential affected by the bulk operation.           |
| **Username** | Username of the credential affected by the bulk operation.       |
| **Type**     | Type of credential affected by the bulk operation.               |
| **Domain**   | Domain of the credential affected by the bulk operation.         |
| **Device**   | Device linked to the credential involved in the batch operation. |

## Bulk operation task window

When you click the **Tasks** button in the **Action** column, a window will open. In this window, you can filter the tasks for each bulk operation. The fields below refer to the search report for the tasks in the bulk operation.

| Field           | Description                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ID**         | Task's code registered in Segura.                                                                                                                                         |
| **Entity ID**  | Entity's code registered in Segura.                                                                                                                                       |
| **Status**     | Drop-down menu to filter according to approval status.                                                                                                                         |
| **Priority**   | Drop-down menu to filter according to task priority.                                                                                                                           |
| **Start date** | Opens a calendar for entering the start date of the bulk operation's execution interval. <br />This date indicates the start of the interval.                                  |
| **until**      | Opens a calendar for entering the start date of the bulk operation's execution interval. <br />This date indicates the end of the interval.                                    |
| **End date**   | Opens a calendar for entering the start date of the batch operation execution interval. <br />This date indicates the start of the end interval for bulk operation executions. |
| **until**      | Opens a calendar for entering the start date of the batch operation execution interval. <br />This date indicates the end of the end interval for bulk operation executions.   |

To perform the search, click on the **Filter** button; to clear the fields and restart the process, click on the **Clear** button.

The list of tasks in the bulk operation will appear below the filter form, with the following fields:

* **ID**.
* **Action**.
* **Entity ID**
* **Status**.
* **Priority.**
* **Start date.**
* **End date.**
* **Action** column:
  * **Details**: it opens the Bulk operation task window.

### Bulk operation task

By clicking on the **Details** button in the **Action** column, you're redirected to the Bulk operation task window. This window contains the following fields:

| Field            | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| **ID**          | Task's code, as registered in Segura.                                 |
| **Action**      | Descriptive name of the action to be performed in the task.                |
| **Status**      | Current status of the task.                                                |
| **Entity ID**   | Entity code, as registered in Segura.                                 |
| **Entity name** | Name of the entity, as registered in Segura.                          |
| **Start date**  | Start date of the bulk operation execution interval.                       |
| **End date**    | End date of the bulk operation execution interval.                         |
| **Messages**    | Text fields to show the messages related to the task.                      |
| **From**        | Field highlighted in red. It indicates the value before the task request.  |
| **To**          | Field highlighted in green. It indicates the value after the task request. |