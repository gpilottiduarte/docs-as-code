# How to add an access policies

This document provides information about a step-by-step process on how to add access groups and their rules in PAM Core module.

## Requirements

* Be an admin user.

---
## Add an access policies

To correctly fill in the fields, more information in [Access policies registration](/v4/docs/pam-session-access-policies-registration).

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Access control** >  **Access policies**.
3. In the upper-right corner, click  **Add**.
4. At the **Access policies** registration screen, fill in the mandatory fields identified with the asterisk.
5. At the **General** tab, fill in:
    1. **Access policy name***: type a name for the group identification.
    2. **Status***: select the option **Yes**.
    3. **Description**: if needed, type a policy description.
5. At the **Users** tab, click Add, and add the users associated with the policie.
6. At the **Password** tab, select the desired configurations.
7. At the **Sessions** tab, select the desired configurations.
8. At the **Approvers** tab, click Add, and add the users associated with the policie.
    :::(info) (**Info**)
    To ensure that the approver user can access the approval workflow screen, they must possess a minimum of a PAM Operator profile.
    :::
9. At the **Criteria** tab, fill in the available fields and select the **Site***, **Device type***, and **Credential type*** associated with the group.
10. At the **Access limitation** tab, set up the permissions that will be valid for this policie.
11. At the **Review** tab, has all the configurations made in the previous tabs.
12. Click **Save**.

Segura will display a confirmation notice and the policie will be displayed in the [Access policies](/v4/docs/pam-session-access-policies) list on the main screen.

:::(info) (**Info**)
By default, when a user is registered in more than one group with different access settings, the platform will follow the restriction rule by the credential and device combined. However, if the standard option is changed, Segura will follow the most restricted rule for that policie. To know how to change the default option, access the[ How to deactivate the restriction rule by credential and devices](/v4/docs/pam-session-how-to-deactivate-the-restriction-rule-by-credential-and-devices) document.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.