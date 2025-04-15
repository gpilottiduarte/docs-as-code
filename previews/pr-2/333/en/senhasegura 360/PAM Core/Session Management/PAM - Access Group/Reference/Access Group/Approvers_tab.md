# Approvers tab

In this document, you’ll  find all the information about the **Approvers** tab from the registration screen to a new access group. In this section, all users who will be approvers for requests made by the access group will be added.

:::(info) (**Info**)
To find out how to register an access group, access the [How to add an access group](/v3-33/docs/pam-session-how-to-add-an-access-group) document.
:::

### Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Access groups** > **+ New**.

---
## Access group registration - Approvers

* **Approvers**: when clicking on the plus icon, the window with the user from the senhasegura open for selection and addition.

:::(warning) (**Attention**)
For an approving user to access the approval workflow, they must have the minimum PAM Operator profile.
:::

#### List of selected approvers
* **ID**: user registration code number.
* **Name**: username.
* **Username**: name used by the user to log in.
* **E-mail**: user email.
* **Creation type**: the type of creation was carried out in the user registration.
* **Department**: which department the user belongs to.
* **Added by**: name of the user who registered the user.
* **Added on**: date the user was registered.
* **Level**: drop-down menu with possible approval levels. Values ​​are from 1 to 3.

When selecting an approver, the field Level from the list presents a drop-down menu with options for *Level 1*, *Level 2*, and *Level 3*. This configuration determines the sequence of calls for approval of the operation, allowing the application of a hierarchy.

For example, we can have an access group with three authorization levels. Approvers configured as *Level 1* will be the first to receive the access request.

The approvers of *Levels 2* and *3* will only be notified after the first level approvers grant access. If they don’t, then access will be denied without the other levels being notified.
Likewise, if the approver of *Level 1* grants access, but the approver of *Level 2* rejects the access request, the approver of *Level 3* won’t be notified.

It’s important to remember that if you register more than one approver for the same level, the first approver at that level who grants access will already result in a notification for the next level, thus making the process faster.
