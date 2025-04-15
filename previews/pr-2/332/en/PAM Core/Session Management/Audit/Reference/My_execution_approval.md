# My execution approval

This document contains detailed information about the **My execution approvals** report, where you can view all commands execution requests, that needs your approval.

:::(info) (**Info**)
The information on this report only appears for a user with an approval role.
:::
***
### Path to access

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access control** > **Audited commands** > **My execution approvals**.

***
## Top bar
**Item**|**Description**
|---|---|
**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
**View actions**|Represented by the three vertical dots icon, it shows all the possible actions for the report.
**Print report**|Represented by the printer icon, it opens a new page for printing the report.
**Export CSV**|Represented by the paper sheet icon, it downloads the report.
**Schedule report**|Represented by the clock icon, it opens the Schedule report form.


## Search fields

**Item**|**Description**
|---|---|
**ID**|Identification number for the request.
**Operation**|Operation type that has been requested. In this case, it will always be ‘Command execution request’.
**Access group**|Group the user belongs.
**Requester**|Name from the user that is requesting.
**Request date**|Date and time that the request was made.
**until**|Final date for searching the requests.
**Status**|Request status, such as *Pending, Approved, Rejected, Expired* and *Cancelled*.
**Governance**|ID code for ITSM software (*IT Service Management*).
**Reason**|The reason why the user needs to run the requested command. Such as: *Change, Device with no connectivity, Incident* and *Other*.


### Request details page

* **ID**.
* **Operation**.
* **Access group**.
* **Requester**.
* **Requested on**.
* **Status**.
* **Expiration**.
* **Governance**.
* **Reason**.
* **Action**
    * **Approve**: represented by the check icon, it's used to approve the request. When clicked, a confirmation box opens. Click **Yes** to confirm the action.
    * **Three vertical dots icon**: displays the options **Reject** and **Details**. When rejecting request, a confirmation box will be displayed, click **Yes** to confirm the action.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::