# How to request access

This document will guide you through a step-by-step on how to request access to view a password from a credential.

## Request access
There are two types of access requests. This choice is made by the admin user when setting the **Access group** configuration:

* **Require reason to view password**: the user requests access, writes down the justification, and has immediate access. The approvers only receive an email with the user’s justification, but no action is required.
* **Require approval to view a password**: the user requests access and writes down the justification, but the access will only be possible after an approver’s action. In this case, the approver must approve the request by email or the senhasegura platform.

:::(info) (**Info**)
To know how to approve a request, access the [How to approve, disapprove, or revoke an access request](/v3-32/docs/pam-session-how-to-approve-disapprove-or-revoke-an-access-request) document.
:::

To request any of these access types, follow the steps below:

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and select **PAM Core**.
2. In the side menu, select **Credentials** >  **All**.
3. Choose the credential you want to request access on the list.
4. In the **Action** column, click on the **key** icon.
5. In the pop-up window, called **Justify**, fill in the mandatory fields identified with the asterisk:
    1. **Justification***: describe why you need access.
    2. **Reason***: choose among the available options.
    3. **Governance Code**
    4. **Start access***
    5. **Access end***
    :::(info) (**Info**)
    **Start** and **end** fields will only be available for **Require approval to view a password** type.
    The field **Access end** can’t have a value greater than **1 (one)** hour than what was chosen in the **Start access** field.
    :::
11. Click **Justify**.

When selecting the **Require reason to view password** option, the user has immediate access, and an email will be sent to the approver for their information only.

For cases that Require approval to view a password, the message **"Request sent. You need approval for view the password for this credential"**. A request was sent to the approvers will be displayed. And the access will only be possible after the approver's action.

:::(info) (**Info**)
In case the user tries to click the key icon again the message **"Access denied. Access request not yet approved will be displayed"**.
:::
To follow the status request, access the **My requests** report.

---
## Next:
My requests
[How to approve, disapprove, or revoke an access request](/v3-32/docs/pam-session-how-to-approve-disapprove-or-revoke-an-access-request)
[Requests](/v3-32/docs/pam-session-requests)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.