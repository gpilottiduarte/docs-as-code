# Requests - Audited Commands

This document contains detailed information about the **Requests** report, where you can view all the requests for command execution, whatever the status of the request.
***
### Path to access

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access control** > **Audited commands** > **Requests**.

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


### Search fields

**Item**|**Description**
|---|---|
**ID**|Identification number for the request.
**Operation**|Operation type that has been requested. In this case, it will always be ‘Command execution request’.
**Access group**|Group the user belongs.
**Requester**|Name from the user who’s requesting.
**Request date**|Date and time the request was made.
**until**|End date for search the requests.
**Status**|Request status, such as: *Pending, Approved, Rejected, Expired* and *Cancelled*.
**Governance**|ID code for ITSM software (*IT Service Management*).
**Reason**|The reason why the user needs to run the requested command. Such as: *Change, Device with no connectivity, Incident* and *Other*.

***

### Report fields

* **ID**.
* **Operation**.
* **Access group**.
* **Requester**.
* **Request on**.
* **Status**.
* **Expiration**.
* **Governance**.
* **Reason**.
* **Action**
    * **Magnifying glass icon**: opens the **Request details** page.

#### Request details page

**Item**|**Description**
|---|---|
**Requester**|Name from the user who’s requesting.
**Command execution request**|Operation type that has been requested.
**Status**|Request status.
**ID**|Identification number for the request.
**Access group**|Group the user belongs.
**Requested in**|Date and time the request was made.
**Expiration**|End date that the request will expire automatically.
**Approvals**|Number of approvals.
**Disapprovals**|Number of disapprovals.
**Approver**|Approver’s name.
**Level**|Approver’s level.
**Response**|Approver’s answer, such as: *Not answered, Approved* and *Rejected*.
**Date**|Date from the approver’s answer.
**Justification**|Approver’s justification.
**Governance ID**|ID code for ITSM software.
**Reason**|The reason why the user needs to use the requested command. Such as: *Change, Device with no connectivity, Incident* and *Other*.
**Request details**|Summary of the request information.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::