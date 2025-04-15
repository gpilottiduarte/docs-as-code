# System parameters - Access Control

In this document, you'll find all the information about **Access Control** section present in **System Parameters**.

## Path to access

:::(warning) (**Caution**)
All fields are filled in with a default value, recommended by senhasegura. However, you can make modifications as needed.
:::

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select settings.
2. In the side menu, select **System Parameters** > **System Parameters** > **Access Control**.

---
## Access Control tab
### In the General section
**Item**|**Description**
|---|---|
**Password Parts***|The number of parts into which the password will be divided for groups with multiple custody. You can choose from 1 to 5. By default: 2
**Password display time (s)***|Maximum time in seconds that the password window will be open. Select 0 to not close. By default: 30.
**Time expiration reason (min)***|The time that the justification of access to a password is worth. During this period, the user will not need to provide another justification to access the password again. By default: 60.
**Time expiration approval (min)***|Standard time that approval of a request will take in minutes. By default: 60.
**Approver can change when approval will expire?***|Parameter to allow for the approver to change the approval validity parameter. By default: Yes.
**Allow only one group per user?***|Parameter to define whether or not a user can be part of more than one access group. By default: No.
**List only approvers with permission?***|Parameter to decide whetherOnly approvers with permission can be listed. By default: No.
**Allow an approver to approve their own request?***|Parameter to setWhether an approver can approve the request itself. By default: No.
**Allow registry of duplicate credentials?***|Parameter to set whether duplicate credentials can be registered. By default: No.
**Allow to register devices with duplicate IP?***|Parameter to set whether it will be allowed to register devices with duplicate IP. By default: Yes.
**Allow batch approval?***|Parameter to set whether batch import will be allowed. By default: No.
**Requires approval to change user roles?***|Parameter to define whether approval will be required to change user roles. If there are no approvers for User Management, the changes will be applied without approval. By default: Yes.
**Force access rule by domain device***|Parameter to disable the most restrictive rule for groups. Each device's request follows the access group configuration of its respective group. By default: Yes.
**Make below fields required:**|Defines whether it will be mandatory for Users and Approvers to fill in the following fields. By default: Users and Approvers.
**Notify requester of result of the request through:**|Parameter to set whether the requester will be notified about the request via E-Mail and/or Screen. By default: Email and Screen.
**Notify approver of new requests through:**|Parameter to set whether the approver will be notified for requests via E-Mail and/or Screen. By default: Email and Screen.
**Display name for fields "Governance Code"***|Parameter to set a message to Governance Code. By default: Governance Code.

### In the Mobile app section
|**Item**|**Description**|
|---|---|
|**Allow use by all users***|Parameter to define whether all users have access to the mobile application. By default: Yes.|
|**Require device approval***|Parameter to define whether it’ll be necessary to request approval from the device being used for access. The App connection request must be approved by an administrator. By default: No.|


