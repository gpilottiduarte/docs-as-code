# How to automate sending access links to internal users

**Domum Remote Access** offers the option to automate sending access links to internal users after adding them to a group. The feature works for manual addition and provisioning via SCIM or AD. This article provides the steps for this task.
<!-- Fix callout -->
:::(Warning) (Caution)
If the user is inactivated or removed from the group, the system blocks access through the link.
:::

---

## How to automate sending access links to internal users

To automatically send the access link to internal users, you need to select specific parameters in the initial settings of **Domum Remote Access**. Follow the steps below:

1. Access the senhasegura platform.
2. In the top left corner, click the **Grid Menu**, indicated by the nine-square box, and select **Domum Remote Access**.
3. On the side menu, select **Settings > Parameters**.
4. Select **Domum**.
5. In **Automatically grant access on Internal user provisioning***, choose **Yes**.
6. Set the **Duration** of access and select **Minutes, Hours, Days**, or **Months**.
    <!-- Fix callout and links -->
    :::(Info) (Info)
   If you don't want a specific group to follow the global settings for automatic sending, you can specify unique settings when creating or editing an [internal user group](/v3-33/docs/domum-new-internal-users-group-add-update-form).
    :::
7. Continue configuring the [initial parameters](/v3-33/docs/domum-how-to-set-the-parameters) according to your preferences.
8. Click **Save**.

A pop-up window will display a confirmation message indicating the conclusion of the process. You’ve just set the necessary parameters for sending the access link automatically. Once provisioning is complete, **Domum Remote Access** will send the link to internal users.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
