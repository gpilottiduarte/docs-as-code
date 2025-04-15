# How to request access

This document provides information about a step-by-step on how to request access to view a password from a credential.

## Request access
There are two types of access requests. This choice is made by the admin user when setting the **Policies group** configuration:

* **Require reason to view password**: the user requests access, writes down the justification, and has immediate access. The approvers only receive an email with the user’s justification, but no action is required.
* **Require approval to view a password**: the user requests access and writes down the justification, but the access will only be possible after an approver’s action. In this case, the approver must approve the request by email or the Segura platform.

:::(info) (**Info**)
If approval is required, access the [How to approve, disapprove, or revoke an access request](/v4/docs/pam-session-how-to-approve-disapprove-or-revoke-an-access-request) document.
:::

To request any of these access types, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials** >  **All credentials**.
3. Choose the credential you want to request access on the list.
4. In the **Actions** column, click on the **Actions button** and select **View**.
5. In the **Justify** screen, fill in the mandatory fields identified with the asterisk:
    1. **Justification***: describe why you need access.
    2. **Reason***: choose among the available options.
    3. **Governance Code**
    4. **Start access***
    5. **Access end***
    :::(info) (**Info**)
    **Start** and **end** fields will only be available for **Require approval to view a password** type.
    The field **Access end** can’t have a value greater than **1 (one)** hour than what was chosen in the **Start access** field.
    :::
11. Click **Save**.

When selecting the **Require reason to view password** option, the user has immediate access, and an email will be sent to the approver for their information only.

For cases that **Require approval to view a password**, the message **"Request sent. You need approval for view the password for this credential"**. A request was sent to the approvers will be displayed, and the access will only be possible after the approver's action.

:::(info) (**Info**)
In case the user tries to select **View** again the message **"Access denied. Access request not yet approved."** will be displayed.
:::
To follow the status request, access the [My access requests](/v4/docs/pam-session-my-access-requests) report.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.