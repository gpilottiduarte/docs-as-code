# Reference for bulk actions tasks on devices

Following the path **Grid Menu > Reports > Events > Batch operations**, you can find the tasks report for **Bulk Actions** involving devices.

On the screen listing the operations awaiting approval, you will find the **Tasks** option in the **Action** column, represented by the file icon.

In the **Batch operation tasks** pop-up window, you have three icons in the top bar:

- **Show Filters**, represented by the magnifying glass icon.
- **Update**, represented by the counterclockwise arrow icon.
- **View Actions**, represented by the three vertical dots icon.
- The **Display Actions** option is used to print or save the reports searched for.

Batch operation tasks
By clicking on Show filters, the search fields will be displayed.

| Field       | Description                                                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------|
| **ID**          | Registration code for the batch operation request on the senhasegura platform.                                                 |
| **Entity ID**   | Code of the entity (device) to be searched.                                                                                     |
| **Status**      | A dropdown menu containing the request status options. These are Pending approval, Pending execution, Executing, Success, Error, and Canceled. |
| **Priority**    | A dropdown menu with the options: Highest, High, Medium, Low, and Lowest.                                                      |
| **Start date**  | It opens a calendar for selecting a start date for the search.                                                                  |
| **End date**    | It opens a calendar for selecting an end date for the search.                                                                    |

To perform the search, click the **Filter** button; to clear all the search fields and start a new query, click the **Clear** button.

The search will be presented in list form just below the search fields, with the same fields as the search, except for the **Action** column.

## Bulk operation task
In the Action column, after the search, you can see the Details option, represented by the magnifying glass icon. You’lll be taken to a new pop-up window with details about that specific task by clicking on this option. On this screen, you will have the following fields:

| Field       | Description                                                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------|
| **ID**          | Registration code for the bulk operation request on the senhasegura platform.                                                  |
| **Action**      | Description of the action that has been requested.                                                                               |
| **Status**      | Request status. It can take on the following values: *Pending approval, Pending execution, Executing, Success, Error,* and *Canceled*. |
| **Entity ID**   | Code of the entity to be searched.                                                                                               |
| **Entity name** | Name of the device that requested the batch operation.                                                                           |
| **Start date**  | Name of the device for which the batch operation request was made.                                                               |
| **End date**    | The expiration date for the request.                                                                                             |
| **Messages**    | The message that the requesting user has sent.                                                                                  |


The changes requested in the bulk operations are shown in the **Changes** section. This report has three fields:

- The field that was changed (for example: **Active**).
- The From field indicates the state before the change request (for example: **From**: **Yes**).
- To field shows the state to which the change was requested (for example: **To**: **No**).

:::(info) (Info)
If the request has more than one change, they will be listed one below the other, following the same fields.
:::