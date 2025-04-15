# My approvals - Access

This document provides detailed information about the **My approvals** report page. There, you can view the approvals and disapprovals you granted to all the access requests made by other users.

### Path to access

1. On senhasegura, in the upper-left corner, click **Grid Menu**, identified by the nine squares icon, and select **PAM Core**.
2. In the side menu, select **Access control** > **My approvals**.

---
## Top bar
| **Item** | **Description** |
| --- | --- |
| **Show filters**| Represented by the magnifying glass icon. It displays or hides the search fields on the screen. |
| **Update**| Represented by the counterclockwise arrow icon. It updates a page. |
| **View actions**| Represented by the icon of three vertical dots. It displays the possible actions for the page.|
| **Print report**| Represented by the printer icon. It opens a new page for printing the report.|
| **Export CSV**| Represented by the paper sheet icon. It downloads the report.|
| **Schedule report**  | Represented by the clock icon. It opens the Schedule report form.|


## Search fields

| **Item** | **Description** |
| --- | --- |
| **ID** | Identification number of the request to be approved.|
| **Credential** | Credential the user wants to access.|
| **Hostname** | Device name that the user wants access to.|
| **Requester** | The name of the user who requested the access.|
| **Operation** | The type of operation that was requested.|
| **Justification** | The access justification given by the user.|
| **Reason** | The reason why the user needs the access. Choose among the available options. |
| **Governance ID** | Software identification code ITSM (IT Service Management).|
| **Request date** | Date and time that the request was made.|
| **until** | Final date to search the results.|
| **Status** | Status requests: Approved, Cancelled, Revoked, Pending, and Rejected. |
| **Expired** | Identifies whether the request has expired. Possible values are Yes and No.|
| **Filter** | Button to filter and show the results according to your chosen preferences. |
| **Clear** | Button to clear all the text boxes with the options that were previously selected.|


## Report fields
:::(info) (**Info**)
By default, the fields **Status** and **Expired** are filled with **Pending** and **No**, respectively. To view all the requests, click **Clear** button and then **Filter** button to show all the registers.
:::

* **ID**.
* **Request date**.
* **Requester**.
* **Credential**.
* **Hostname**.
* **Operation**.
* **Governance ID**.
* **Reason**.
* **Justification**.
* **Access start**.
* **End of access**.
* **Status**.
* **Action**:
    * **View request**: represented by the **magnifying glass**, it opens the **Access request** screen.
    * **Three vertical dots icon**: displays the actions that can be performed on the request.
        * **Reject**: represented by the **X** icon. A confirmation box will be displayed. Click **Yes** to confirm the action and a **Disapprove request** page will open with the request details and a text box to justify the disapproval.
        * **Approve**: represented by the **check** icon, the **Approve request** screen will open. If necessary, change the start and end access date, and click **Approve** to confirm the action.

### Access request details

**Information tab**

* **Password**: password ofthe device that will be accessed.
* **Requester**: name of the user that is requesting the access.
* **Group**: the access group which the user belongs to.
* **Approvals required**: the number of approvals needed.
* **Disapprovals required**: the number of disapprovals needed.
* **Request date**: date and time that the request was made.
* **Status**: status requests (*Approved, Cancelled, Revoked, Pending* and *Rejected*).
Justification tab

* **Reason**: the reason why the user needs access.
* **Governance ID**: software identification code ITSM (IT Service Management).
* **Justification**: the justification given by the user to request access.
* **Request details tab**: description of the action that is going to be performed on this request.

**Responses tab**

* **Approver**: approver’s name.
* **Response**: status with the approver's answer.
* **Date**: date and time that the approval was made
* **Level**: approver’s level.
* **Justification**: justification to explain the approver’s answer.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::
