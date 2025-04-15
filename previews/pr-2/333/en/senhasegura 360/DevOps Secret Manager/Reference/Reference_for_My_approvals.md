# Reference for My approvals

Approving users can view a report of their approvals. This screen shows the user's approvals, containing information such as status, requester, reason and expiration date, among others. You can access the content of your approvals through **Grid Menu > DevOps Secret Manager > Access Control > My Approvals.**

## Top bar

| Item                 | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report.                |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                   | Description                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**           | Filter by the request code in senhasegura.                                                                                                                                |
| **Operation**    | Filter by the name of the operation that was requested.                                                                                                                   |
| **Access group** | Filter by the access group to which the requester belongs.                                                                                                                |
| **Requester**    | Filter by the requester's name.                                                                                                                                           |
| **Request date** | Opens a calendar for you to choose the start date for the filter. You'll then filter out all the requests that were started from this date.                               |
| **until**        | Opens a calendar for you to choose the end date for the filter. You'll then filter out all the requests finalized by this date.                                           |
| **Status**       | Drop-down menu. Filters according to the status of the request. The options are *Pending, Approved, Rejected, Expired,* and *Canceled.*                                 |
| **Approver**     | Filter by the name of the user who can analyze the request.Note: on this screen, only approvals that the currently logged-in user has permission to review are displayed. |
| **Governance**   | Filter by the request's governance code.                                                                                                                                  |
| **Reason**       | Filter by the reason for the request.                                                                                                                                     |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

Below, we have the list field, which contains all the secrets, filtered or not, which are presented with the following fields:

* **ID.**
* **Operation.**
* **Access group.**
* **Requester.**
* **Requested on:**
* **Status.**
* **Expiration,**
* **Approver.**
* **Governance.**
* **Reason.**
* In the **Action** column, you have three options:
  * **Approve**: represented by the check icon, approves the request.
  * **Three vertical dots icon**: clicking on the icon opens a drop-down menu with two options:
    * **Disapprove**: represented by the X icon, disapproves the request.
    * **Details**: represented by the magnifying glass icon, opens the **Request details** window.

## Request details window

By clicking on the magnifying glass icon, you'll be taken to the **Request details** window, where you can analyze the request. The information is shown below:

### Request details section

| Item                   | Description                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Requester**    | Indicates the name of the requester, the type of request that was made, and the current status of the request.         |
| **ID**           | Indicates the request code.                                                                                            |
| **Access group** | Indicates the access group to which the requester belongs.                                                             |
| **Requested on** | Indicates the date and time the request was made. This field will be shown in the `DD:MM:YYYY HH:MM:SS` format.      |
| **Expiration**   | Indicates the expiration date and time of the request. This field will be shown in the `DD:MM:YYYY HH:MM:SS` format. |
| **Approvals**    | Indica o número de aprovações da solicitação.                                                                     |
| **Reprovals**    | Indicates the number of reprovals of the request.                                                                      |

### Responses section

In the responses section, you have a summary of the responses given by approving users.

| Item               | Description                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **Approver** | Indicates the user name and username of the approving user.                                                          |
| **Level**    | Indicates the approver's level. It can be*Level 1, Level 2,* or *Level 3.*                                       |
| **Response** | Response given by the approving user to the request. The options are: *Approved, Disapproved,* and *Not answered*. |
| **Date**     | Date of the approving user's response to the request.                                                                |
| **Reason**   | Reason given by the approving user for the request.                                                                  |

:::(info) (Info)
In cases where level approvals are being used, note that if the configuration is set to one approval, one approval per level is required. For example, if a group is registered up to level 2, one approval is required for level 1 and another for level 2. Similarly, if the group is registered up to level 3, it must obtain approvals from levels 1, 2, and 3. Each registration level requires a corresponding approval.
:::

### Reason section

| Item               | Description            |
| ------------------ | ---------------------- |
| **Governance ID** | Request governance ID. |
| **Reason**        | Reason for request.    |

Below these fields, you can also analyze the reasons that the applicant sent with the request.

### Request details section

Indicates, textually, what is the request about.

:::(info) (Info)
In case the request is pending, you can approve or disapprove it. To do this, in the bottom right corner, select **Approve** or **Disapprove**, represented by the green and red buttons, respectively.
:::