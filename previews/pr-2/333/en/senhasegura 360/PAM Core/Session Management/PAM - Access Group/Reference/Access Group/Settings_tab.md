# Settings tab

In this document, you’ll find all the information about the **Settings** tab on the registration screen for a new access group. In this section, it will be decided what rule will be for viewing the password, configuring a remote session, and access requests.

:::(info) (**Info**)
To find out how to register an access group, access the [How to add an access group](/v3-33/docs/pam-session-how-to-add-an-access-group) document.
:::

### Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Access groups** > **+ New**.

---
## Access group registration - Settings
In the **Password View Settings** and **Remote Session Settings** sections, you can select the days and time range for which an approval workflow will be required.

These functionalities are independent and can be active in **Password View Settings** but not in **Remote Session Settings**, or vice versa.

Therefore, to enable the approval workflow on certain days of the week and times in **Password View Settings**, the **Require approval to view a password** option must be enabled.

To enable the approval workflow on certain days of the week and times in **Remote Session Settings**, the **Require approval to start session** option must be enabled.

#### Section: Password preview settings

* **Users can view a password**: determines that the credential password can be seen by the user.
* **Require reason to view password**: check whether it’s necessary to register a justification to see the password.
* **Require approval to view a password**: check whether another user must act as an approver to check the password. Once active, you must also define how long this approval will be valid.
* **Approval in levels required to view**: number of approvals required to approve the operation for each level (doesn’t count the total number of approvals).
* **Disapprovals required to cancel**: number of disapprovals required to disapprove the operation for each level (doesn’t count the total number of disapprovals).
* **Approval in levels**: check whether approvers will be triggered in levels. So, you can define a hierarchy of approvers.
* **Allow emergency access without approval**: indicate whether the applicant can use the emergency access without a need of approval.
* **Users can change expiration date up to**: indicate whether the user can change the access group’s expiration date.
    :::(info) (**Info**)
    In the credentials display window, a button will appear for the user to increase their access period to the time indicated in this field.
    :::
* **Part of the password to be viewed**: allows the requested password to be displayed in parts. Members of this group will only have access to the fraction defined in this field. This doesn’t prevent the password from being used by the proxy functionality, as the user doesn’t have access to the plain text password when using any of our proxy solutions.
* **Require approval days**: indicate the days and times that approval will be required.

#### Section: Remote Session Settings

* **Users can start session**: check if member users are allowed to start a proxy session using the credentials this group allows.
* **Require reason to start session**: check whether it’s necessary to record a justification to start the proxy session.
* **Require approval to start session**: check whether another user must act as an approver to start the proxy session. Once active, you must also define how long this approval is valid.
* **Approvals required**: number of approvals required to approve the operation according to the approval level (doesn’t count the total number of approvals).
* **Disapprovals required to cancel**: number of disapprovals required to disapprove the operation according to the approval level (doesn’t count the total number of disapprovals). 
* **Approval in levels**: check whether approvers will be triggered in levels. So, you can define a hierarchy of approvers.
* **Allow emergency access**: indicate if the applicant has the ability to interrupt the approval workflow by giving their approval for the operation.
* **[Change Audit] Require Change ID to start session**: check whether the applicant must register an ITMS code at the time of justification.
* Require approval days: indicate the days and times that approval will be required.

#### Important - Approval and disapproval rule
The rules explained here apply to the fields in the Password preview settings and Remote session settings sections.

When the **Approval in levels** field is enabled, the number specified in the **Approvals required** and **Disapprovals required** fields will indicate the quantity required at each level of approval and disapprovals. In other words, if the number of approvals is set to 2, each level will need to have two approvals. If at any level there is only 1 approval, the requirement won’t be met, and the password can’t be viewed and the session can’t be started.

On the other hand, if the **Approval in levels** field isn’t activated, the number of approvals or disapprovals required will be the general value chosen in the corresponding fields.

Additionally, when using **Approval in levels**, lower-level approvers will initially be notified. Only after approvals have been made by them, the approvers with higher levels will be notified to take their approval actions.

#### Section: Access Request Settings
:::(info) (**Info**)
The fields in this section come with a default value filled in, which can be changed as needed.
:::

* **Governance ID required when justifying?***: check whether the applicant must enter an ITMS code at the time of justification.
* **Always add the user manager to approvers?***: check whether the user responsible for the user's department should be automatically queried as an additional approver to this group. Therefore, this user will be alerted with the other approvers in the tab Approvers.
* **Block during freezings?***: check this, so the users in this group can have their session blocked during the session freeze period.

These fields establish the guidelines that all group members must follow in order to access privileged information belonging to this group.
