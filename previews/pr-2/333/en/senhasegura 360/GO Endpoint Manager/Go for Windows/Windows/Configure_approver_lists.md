## Configure approver lists

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Settings➔Approvers.**
3. In the upper right corner, select the icon**(⁝) Show actions** and after, **\+New.**
4. Select **\+Approvers.**
5. In the list of users, choose which users will be approvers.
6. Select **Add.**
7. At **Level**, select from levels 1 to 3\.
8. **Save.**

InfoThe global parameter will be the default approval workflow for all applications not configured in an access list.

---

## Create access lists with approval in levels

1. Create an access list for any category **(GO Endpoint Manager➔Policies➔Windows➔Access lists).**
2. At **Workflow**, check the option **Require approval to elevate applications.**
3. After, check **Approval in levels.**
4. Set the number of **Approvals required.**
5. Set the number of **Disapprovals required to cancel.**

CautionThe number of approvals required per level does not equal the number of approval levels. You need to define how many approvers at each level will be required to approve the request.Approvals required, for example:



| Required Approvals | Approval level | Number of approvers per level | Total number of approvers |
| --- | --- | --- | --- |
| 4 | 1 | 4 | 4 |
| 4 | 2 | 4 | 8 |
| 4 | 3 | 4 | 12 |

The Access control settings are shared with **PAM Core**. If you want to allow the users themselves to approve their request, navigate to **GO Endpoint Manager➔Settings➔Parameters➔Access Control**, and check the option **Allow approvers to approve their own request?\***. Don’t forget to include the users as approvers inside GO too.



---

## Approve access requests

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Reports➔My Approvals.**
3. Click **Action.**
4. Choose whether you want to approve the request.



---

## Request access to an app on your GO

1. Access the desktop of the user's workstation
2. Launch the Core app.
3. Choose an application to elevate the privilege.
4. Right\-click and click **Execute****.**
5. Fill in the **Justification.**
6. Click **OK.**

CautionApproval is performed per workstation and not per user. Only one user needs to request approval to elevate the application, and all users on that same workstation can run the application when approved.

---

## Track access requests

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Reports➔My Requests.**
3. Click **Action** to view the request.

  




---

## Viewing Approval Workflow Records and Justifications

To view the approval workflow records related to executing applications on the GO agent:

1. Access the senhasegura platform.
2. Navigate to**GO Endpoint Manager \> Reports \> Events.**
3. Click on the magnifying glass icon under the **Action** column to view event details.

Please note that events generated from the execution of an application are classified as Execution Justification Events.

To view the approval workflow records for using **senhasegura PAM** credentials on the GO agent:

1. Access the senhasegura platform.
2. Navigate to **PAM Core \> Access Control \> Requests.**
3. Click on the magnifying glass icon under the **Action** column to view event details.
