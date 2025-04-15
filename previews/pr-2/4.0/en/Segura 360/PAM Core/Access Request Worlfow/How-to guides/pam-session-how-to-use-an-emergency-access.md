# How to use an emergency access

This document provides information about a step-by-step on how to use emergency access to view a credential password.

It’s a case in which the requester can skip the approval process if there is a need for immediate emergency use of the credential.

When the policie group allows the requester to use this feature, the user will be presented with the emergency access screen right after sending the access request.

:::(info) (**Info**)
As soon as the requester confirms emergency access, Segura will send all approvers the information to which the requester had previous access. The access request will be marked with **emergency use**.
:::

---
## Request an emergency access.

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credential** >  **All credentials**.
3. Choose the credential that you want to request access on the list.
4. In the **Action** column, click on the **Actions button** and select **View**.
5. In the **Justify** screen, fill in the mandatory fields identified with the asterisk:
    1. **Justification***: describe why you need access.
    2. **Reason***: choose among the available options.
    3. **Governance Code**
    4. **Start access***
    5. **Access end***
    :::(info) (**Info**)
    **Start** and **end** fields will only be available for **Require approval to view a password** type
    The field **Access end** can’t have a value greater than **1 (one)** hour than what was chosen in the **Start access** field.
    :::
6. Click **Save**.
7. The message **“Request sent. You need approval for view the password for this credential. A request was sent to the approvers.”** will be displayed.
8. Click **Use emergency access**.
9. On the **Confirm Emergency Access** screen, write down a justification for using the emergency access.
10. Click **Use emergency access**.
11. The screen with the information to be accessed will open.

The access will be available for the same period set at the **Start access** and **End access** or until the approver **revokes** the access.

To follow your request status, access the [My access requests](/v4/docs/pam-session-my-access-requests) document.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.