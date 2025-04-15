# How to create an internal user group

To grant access to internal users in Domum, you must first create an internal user group. This article is a step-by-step guide to this task.
:::(Warning) (Caution)
Creating this group won’t configure permissions for viewing passwords or remote sessions. It only indicates authorized locations as the origin of access for users who are members of this group.
The access settings are the same as configured in the [PAM module access group](/v3-32/docs/user-management-access-groups) the user belongs to.
:::

* * *
## Requirements

* Users must have a registered email address with senhasegura to become a member of the groups.

* * *

## How to create a group of internal users

1. Access the senhasegura platform.
2. In the top left corner, click the **Grid Menu**, indicated by the nine-square box, and select **Domum Remote Access**.
3. On the side menu, select **Settings > Internal users > Groups**.
4. In the top right corner, click the three vertical dots icon **(View actions)**.
5. Select the group icon **(New)**.
6. Complete the information on the form that opens in the pop-up window:
    1. In **Group name***, enter a descriptive name.
    2. In **Enabled***, choose **Yes** or **No**.
    3. In **Automatically grant access on Internal user provisioning***, choose **Default, Yes** or **No**. If you have questions about the options, consult the internal user group form information.
    :::(Warning) (Caution)
    If you don't set up automatic access, you'll need to send the link to internal users at an additional step to grant them access.
    :::
7. In the **Users** tab, click the plus icon.
    1. In the list of users, check those you’ll include in the group.
    2. Click **Add**.
8. In the **Location** tab, complete the information in the **Allowed location** section:
    1. In **Restrict access to only those locations**, check whether you want to limit user access to the specified areas. The restriction is optional.
    2. If you haven't checked the box, click **Save**.
    3. If you checked the box **Restrict access to only those locations**, select the **Country** and the **Region**.
    4. Click **Add**.
9. Click **Save**. 

A pop-up window will display a confirmation message indicating the conclusion of the process. Now, the internal user group you’ve just created appears on the **Internal user group** screen. You can edit this group by clicking the paper and pencil icon in the **Action** column on the right.

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

