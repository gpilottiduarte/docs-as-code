# How to add an access group

This document, will guide you through a step-by-step process on how to add access groups and their rules in PAM Core module.

### Requirements

* Be an admin user.
---
## Add an access group
:::(info) (**Info**)
For more information on the access groups fields, access the [Access groups - report](/v3-32/docs/pam-session-access-groups-report) documents.
:::

1. On senhasegura, in the upper-left corner, click **Grid Menu**, identified by the nine squares icon, and then select **PAM Core**.
2. In the side menu, select **Access** >  **Access groups**.
3. In the upper-right corner, click the three vertical dots icon and select **+ New**.
4. At the **Access group registration** window, fill in the mandatory fields identified with the asterisk.
    1. **Access group name***: type a name for the group identification.
    2. **Enabled***: select the option **Yes**.
    3. **Description**: if needed, type a group description.
5. At the **Settings** tab, select the desired settings for this group.
6. At the **Criteria** tab, fill in the available fields and select the **Site***, **Device type***, and **Credential type*** associated with the group.
7. At the **Users** tab, click the add icon, located on the right side of the **Users** word, and add the users associated with the group.
8. At the **Approvers** tab, click the add icon, located on the right side of **Approvers** word, and add the users associated with the group.
    :::(info) (**Info**)
    To ensure that the approver user can access the approval workflow screen, they must possess a minimum of a PAM Operator profile.
    :::
9. At the **Access limitation** tab, set up the permissions that will be valid for this group.
10. Click **Save**.

senhasegura will display a confirmation notice and the group will be displayed in the Access groups list on the main screen.

:::(info) (**Info**)
By default, when a user is registered in more than one group with different access settings, the platform will follow the restriction rule by the credential and device combined. However, if the standard option is changed, senhasegura will follow the most restricted rule for that group. To know how to change the default option, access the[ How to deactivate the restriction rule by credential and devices](/v3-32/docs/pam-session-how-to-deactivate-the-restriction-rule-by-credential-and-devices) document.
:::

---
## Next:
[System parameters - Access control](/v3-32/docs/pam-session-system-parameters-access-control)


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.