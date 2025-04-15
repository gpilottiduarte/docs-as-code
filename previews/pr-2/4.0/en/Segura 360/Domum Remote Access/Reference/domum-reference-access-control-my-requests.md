# My access request

This document provides information about the **My requests** screen in the **Access control** menu, which displays information about the requests made by the currently logged-in user in **Domum**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.  
2. In the side menu, select **Access control \> My access request**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| ID | Text field | Filters the access request by the ID. |
| Operation | Text field | Filters the access request by the operation. |
| Access policy | Text field | Filters the access request by the access policy. |
| Requester | Text field | Filters the access request by the requester. |
| Request date | Text field | Filters the access requests by the request date. |
| Status | Dropdown menu | Filters the access request by the status of the request. The options are: *Pending*, *Approved*, *Rejected*, *Expired*, and *Cancelled*. |
| Governance | Text field | Filters the access request by the governance code. |
| Reason | Text field | Filters the access request by the reason of the request. |

### Report fields

- **ID**.  
- **Operation**.  
- **Access policy**.  
- **Requester**.  
- **Requested on**: date when the request was made.  
- **Status**. 
- **Expiration**: date when the access will expire.  
- **Governance**.  
- **Reason**.  
- **Actions**:  
    - **Details:** opens the [Request details](/v4/docs/domum-reference-access-control-my-requests#request-details-screen) screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Request details screen

| Item | Description |
| ----- | ----- |
| **Requester** | User that made the request. |
| **New Domum access** | Status of the access request. |
| **ID** | ID of the access request. |
| **Access policy** | Access policy registered on the access request. |
| **Requested in** | Date and time when the access request was made. |
| **Expiration** | Date and time when the access request will expire. |
| **Approvals** | Number of approvals for the access request. |
| **Disapprovals** | Number of rejections for the access request. |

## Responses section

| Item | Description |
| ----- | ----- |
| **Approver** | Users that can approve the request. |
| **Level** | Level of the approver. |
| **Response** | Response of the approver. |
| **Date** | Date when the approver answered the access request. |
| **Justification** | Justification of the response. |

## Justification section

| Item | Description |
| ----- | ----- |
| **Governance code** | Governance code of the access. |
| **Reason** | Reason for the access. |

## Request details section

| Item | Description |
| ----- | ----- |
| **Access ID** | Access  ID. |
| **Start date** | Date and time when the access request was made. |
| **End date** | Date and time when the access will expire. |
| **Vendor** | Vendor registered on the access request. |
| **User** | User that requested the access. |
| **Credentials** | Credentials registered on the access request. |
| **Access permission days** | Days when the access can be made. |
| **Access permission times** | Times when the access can be made. |
| **Maximum number of sessions** | Maximum number of sessions that can be started in this access. |
| **Approve request** | Button that approves the access request. |
| **Reject request** | Button that rejects the access request. |