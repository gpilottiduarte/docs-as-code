# My requests - Access

This document provides detailed information about the **My requests** report page.

### Path to access

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares icon, and select **PAM Core**.
2. In the side menu, select **Access control** > **My requests**.

---

## Top bar
|**Item**|**Description**|
|---|---|
| **Show filters**| Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report**|Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV**| Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the Schedule report form. |


## Search fields

| **Item** | **Description** |
| --- | --- |
| **ID** | Identification number of the request to be approved.        |
| **Operation** | The type of operation requested.                             |
| **Credential** | Credential the user wants to access.                         |
| **Hostname** | Device name that the user wants access to.                   |
| **Justification** | The justification for access given by the user.              |
| **Reason** | The reason why the user needs the access. Choose among the available options. |
| **Governance ID** | Software identification code ITSM (IT Service Management).  |
| **Request date** | Date and time that the request was made.                     |
| **until** | Final date to search the results.                             |
| **Status** | Status requests: *Approved, Cancelled, Revoked, Pending* and *Rejected*. |
| **Expired** | Identifies whether the request has already expired. Possible values are **Yes** and **No**. |

## Report fields
:::(info) (**Info**)
By default, the fields **Status** and **Expired** are filled with **Pending** and **No** respectively. To view all the requests, click the **Clear** button and then the **Filter** button to show all the registers.
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
    * **View request**: represented by the magnifying glass, it opens the **Access request** screen.

### Access request details
**Information tab**

* **Password**: password of the device that will be accessed.
* **Requester**: name of the user that requests the access.
* **Group**: the group which the user belongs to.
* **Approvals required**: the number of approvals needed.
* **Disapprovals required**: the number of disapprovals needed.
* **Request date**: date and time that the request was made.
* **Status**: status requests (*Approved, Cancelled, Revoked, Pending* and *Rejected*).

**Justification tab**

* **Reason**: the reason why the user needs access.
* **Governance ID**: software identification code ITSM (IT Service Management).
* **Justification**: the justification that was given by the user.
* **Request details tab**: description of the action that is going to be performed on this request.

**Responses tab**

* **Approver**: approver’s name.
* **Response**: status with the approver's answer.
* **Date**: date and time that the approval was made.
* **Level**: approver’s level.
* **Justification**: justification to explain the approver’s answer.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::
