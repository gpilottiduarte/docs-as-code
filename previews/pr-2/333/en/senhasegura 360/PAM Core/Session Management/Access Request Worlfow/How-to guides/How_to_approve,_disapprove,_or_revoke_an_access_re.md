# How to approve, disapprove, or revoke an access request

This document will guide you through a step-by-step on how to approve, disapprove or revoke a password access request. 

### Requirements

* Be a user with an approver role.

:::(info) (**Info**)
If the inbox is configured in senhasegura, approvers can reply to the email with the words APPROVE or DISAPPROVE to confirm their response, or they can click on the link described in the email.
:::

---
### Path to access
The report can be accessed through two paths:

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and select **PAM Core**.
2. In the side menu, select **Access control** >  **My approvals**.

or

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Desktop**.
2. In the side menu, select **Homepage**.
3. At the **Request** section, click **Approvals**.

:::(info) (**Info**)
By default, the fields **Status** and **Expired** are filled with **Pending** and **No** respectively. To view all the requests’ records, click **Clear** and then **Filter**.
:::

---
## Possible actions on a request

1. In the list, select the request that you want to approve or disapprove.
2. In the **Action** column, click on the three vertical dots icon and select one of the following actions:

### Reject an access request

1. Click on the **X** icon to reject a request. A confirmation box will be displayed, click **Yes**. The **Disapprove request** page will open with the request details and a text box for the justification.
2. Click **Reject**.
3. In the confirmation box, click **Yes**.
4. The message **Success. Request rejected.** will be displayed.

### Approve an access request

1. Click on the check icon to approve a request. The **Approve request** page will open and the start and end date can be changed, if necessary.
2. Click **Approve**.
3. The message **Success. Request approved.** will be displayed.

### Revoke an access request
:::(info) (**Info**)
This option is only available for requests already approved and where the **Reason** field doesn’t contain the value **Other**.
:::

1. In the Action column, click on the three vertical dots icon.
2. Click on the **X** icon to revoke a request. The **Requests** page will open with the request details and a text box for the justification.
3. Click **Revoke**.
4. The message **Success. Request revoked.** will be displayed.

:::(info) (**Info**)
If the revocation occurs during a running session, the user receives the following message warning about the revocation: **"Access denied: The remote desktop server was interrupted as the ongoing session was revoked and the connection was closed. Please contact your system administrator."**
:::

:::(info) (**Info**)
If the user is a member of an **Access group** with a level approval model, the 1st level approver will receive the email first. After their approval, the other approvers will receive the email according to the hierarchy and number of levels defined in the access group configuration.
:::

After any of these actions, the user who requested the access can view the approver's answer by accessing the [My requests](/v3-33/docs/pam-session-requests) document.

---
## Next:
[Requests](/v3-33/docs/pam-session-requests)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.