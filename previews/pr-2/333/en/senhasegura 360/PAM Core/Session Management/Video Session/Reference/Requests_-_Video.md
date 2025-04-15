# Requests - Video

In this document, you’ll find all the information about the session video view requests page.

## Path to access

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access Control** > **Session Video Requests** > **Requests**.

---
## Top bar
**Item**|**Description**
|---|---|
**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
**View actions**|Represented by the three vertical dots icon, it shows all the possible actions for the report.
**Print report**|Represented by the printer icon, it opens a new page for printing the report.
**Export CSV**|Represented by the paper sheet icon, it downloads the report.
**Schedule report**|Represented by the clock icon, it opens the Schedule report form.


## Search Fields

| **Item**         | **Description**|
| ------------ | ------------------------------- |
| **ID**           | Identification number of the request to be approved.       |
| **Operation**    | Type of requested operation.|
| **Access group** | Access group to which the user is a member.|
| **Requester**    | Name of the user requesting viewing.|
| **Request date** | Date and time the request was made.|
| **until**        | Final date for search requests.|
| **Status**       | The request status: Pending, Approved, Rejected, Expired, and Canceled. |
| **Governance**   | Governance code.|
| **Reason**| The reason given by the user to justify the video viewing request. |


## Report fields

* **ID**
* **Operation**
* **Access group**
* **Requester**
* **Requested on**
* **Status**
* **Expiration**
* **Governance**
* **Reason**
* **Action**:
    * **Details**: represented by the **magnifying glass** icon, opens the **Request details** window.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click the next buttons at the end of the report.
:::

### Request Details

* **Requester**: name of the user making the request, next to it is the operation that was requested and the status of the request.
* **ID**: request code.
* **Access group**: access group to which the user belongs.
* **Requested in**: date and time of the request.
* **Expiration**: the date and time the request will be available for approval before it expires.
* **Approvals**: number of approvals required.
* **Disapprovals**: number of necessary rejections.

#### Responses Section

* **Approver**: name of approvers available for request.
* **Level**: approver level.
* **Response**: response given by the approver in the request.
* **Date**: date and time the response was given.
* **Justification**: justification given by the approver.

#### Justification Section

* **Governance ID**: identification code for ITSM software (IT Service Management).
* **Reason**: the reason why the user needs access.
* Phrase with the justification given by the user.

#### Request details Section

* Additional information about the video viewing request, such as the type and host of the session to be viewed.

#### Action buttons
::: (info) (**Info**)
If the user has the role of approver, these action buttons will also be available in this report.
:::

* **Approve**: button to approve the request. Click **Yes** in the confirmation box to perform the action.
* **Reject**: button to reject the request. Click **Yes** to perform the action.

