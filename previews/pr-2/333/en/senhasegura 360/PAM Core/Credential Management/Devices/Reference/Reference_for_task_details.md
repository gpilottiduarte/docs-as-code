# Reference for task details

Whenever necessary, you can access the details of each request for batch operations awaiting your approval. To access the task details screen for requests, access **Grid Menu > Reports > Events > Bulk operations**.

## Request details

In the list of requests, in the **Action** column, you can view the details of that request by clicking on **Request details**, identified by the ID card icon.

| Field                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| **Requester**      | Name of the user who made the request.                                    |
| **Bulk operation** | Operation status. It can be*Pending*, *Approved*, or *Disapproved*. |
| **ID**             | Identification number of the request to be approved.                      |
| **Requested in**   | Date and time the request was made.                                       |
| **Expiration**     | The expiration date for the request.                                      |
| **Approvals**      | Number of approvals of the request.                                       |
| **Disapprovals**   | Number of disapprovals of the request.                                    |

## Responses

| Field                   | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| **Approver**      | Name and username of the approver user of the request.                                |
| **Level**         | Access level of the approver user.                                                    |
| **Response**      | Response to the request. It can be*Not answered*, *Approved*, or *Disapproved*. |
| **Date**          | Date of reply. If there is no response, this field will be blank.                     |
| **Justification** | Justification for the action. If there is no justification, this field will be blank. |

## Request details tab

### Information

| Field             | Description                                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**      | Application registration code on senhasegura.                                                                                                                                          |
| **Action**  | What action was requested.                                                                                                                                                             |
| **Status**  | Current status of the request. If the request has already expired, the last status of the request will be shown.<br />It can be *Pending Approved*, *Expired*, or *Disapproved*. |
| **Changes** | Displays which changes have been requested.                                                                                                                                            |

### Affected entities section

Since bulk operations can be performed on various senhasegura artifacts, it's worth noting that you can have different ways of presenting the information.

For example, when secrets come from a bulk operation in the **DevOps Secret Manager (DSM)**, there will be no Affected Entities section. Therefore, the fields for Credentials and Devices are shown below.

#### Affected entities - Devices

| Field                 | Description                                        |
| --------------------- | -------------------------------------------------- |
| **ID**          | Code of the affected entity. In case, the device. |
| **Device name** | Name of the affected device.                       |
| **Management**  | IP address or hostname of the device.              |
| **Type**        | Type of device.                                    |
| **Vendor**      | Manufacturer of the affected device                |
| **Product**     | Model of the affected device.                      |

#### Affected entities - Credentials

| Field              | Description                                           |
| ------------------ | ----------------------------------------------------- |
| **ID**       | Code of the affected entity. In case, the credential. |
| **Username** | User name of the affected credential.                 |
| **Type**     | Type of credential.                                   |
| **Domain**   | Domain of the credential                              |
| **Device**   | Device to which the credential is linked.             |

:::(Info) (Info)
For more information on a device's registration fields, access the Reference documentation for devices.
:::