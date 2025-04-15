# How to automate sending access links to internal users

**Domum Remote Access** offers the option to automate sending access links to internal users after adding them to a group. The feature works for manual addition and provisioning via SCIM or AD. This article provides the steps for this task.

:::(Warning) (Attention)
If the user is inactivated or removed from the group, the system blocks access through the link.
:::

## Automate sending access links to internal users

To automatically send the access link to internal users, you need to select specific parameters in the initial settings of **Domum Remote Access**. Follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.
3. On the side menu, select **Management** > **Parameters**.
4. Select **Domum**.
5. In **Automatically grant access on Internal user provisioning***, choose **Yes**.
6. Set the **Duration** of access and select **Minutes, Hours, Days**, or **Months**.
    :::(Info) (Info)
   If you don't want a specific group to follow the global settings for automatic sending, you can specify unique settings when creating or editing an [internal user group](/v4/docs/domum-new-internal-users-group-add-update-form).
    :::
7. Continue configuring the [Parameters](/v4/docs/domum-reference-settings-parameters) according to your preferences.
10. Click **Save**.

A pop-up window will display a confirmation message indicating the conclusion of the process. You’ve just set the necessary parameters for sending the access link automatically. Once provisioning is complete, **Domum Remote Access** will send the link to internal users.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).