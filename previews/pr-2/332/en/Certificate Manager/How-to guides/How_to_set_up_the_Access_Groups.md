# How to set up the Access Groups

This article explains how to set up **Access Groups** to use within Certificate Manager.

## Create an access group
To create a new group, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Settings** and then **Access Groups**.
3. In the upper right corner, click **View Actions** (the three vertical dots icon).
4. Select **New**; this will open the **Access group registration** form.
    1. In **Access group name**, enter the group name.
    2. Keep **Enabled** as **Yes**.
    3. If necessary, add another **Description** about the group.

### Settings tab
#### Download Settings section
1. Set the items that group users can download or not. 
    1. In **User can download the request?**, check **Yes** or **No**.
    2. In **User can download key?**, check **Yes** or **No**.
    3. In **User can download certificate?**, check **Yes** or **No**.

#### Certificate Passwords section
1. Configure the password settings.
    1. In **User can view the passwords certificate**, check the box to allow users to view passwords.
    2. In **Requires justification to view certificate password**, check the box to require users to write a justification before viewing passwords.
    3. In **Require approval to view a password**, check the box to require an approver to authorize viewing passwords.
    4. In **Approvals required for viewing**, set the number of approvals needed to authorize the view. Different approvers must authorize the request.
    5. In **Disapprovals required to cancel**, define the number of denials that, when added together, cancel the request. Different approvers must deny the request.
    6. In **Approval in levels**, check the box to define that approvals will happen in levels.
    7. From the **Part of the password to be viewed** dropdown, select among the viewing options: **Complete password**, **First password part**, or **Second password part**.

#### Certificate signature and renewal section
1. Configure the subscription settings.
    1. In **Require reason for signature**, check the box to require users to write a reason before signing certificates.
    2. In **Require approval for signature**, check the box to require an approver to authorize signing certificates.
    3. In **Approval in levels**, check the box to define that approvals will happen in levels.
    4. In **Approvals needed to sign**, define the number of approvals needed to authorize the signature. Different approvers must authorize the request.
    5. In **Disapprovals required to cancel**, define the number of denials that, when added together, cancel the request. Different approvers must deny the request.

#### Certificate Publishing section
1. Configure the publishing settings.
    1. In **Require reason to publish**, check the box to require users to write a justification before publishing certificates.
    2. In **Require approval to publish**, check the box to require an approver to authorize publishing certificates.
    3. In **Approval in levels**, check the box to define that approvals will happen in levels.
    4. In **Approvals needed to publish**, define the number of approvals needed to  authorize the publication. Different approvers must authorize the request.
    5. In **Disapprovals required to cancel**, define the number of denials that, when added together, cancel the request. Different approvers must deny the request.

#### Settings for approvals section
1. Configure other approvals settings.
    1. In **Governance ID required when justifying?**, check **Yes** or **No** to define that the user has to add a code when justifying. The code is intended to track and control user actions.
    2. In **Always add user manager to approvers?**, check **Yes** or **No** to define that the user manager of the access group in question will always be among the approvers.

### Criteria tab
You can set additional conditions to allow the group to perform actions. For instance, when completing the Organization field, you restrict that only the users of the group who are also part of that organization can take actions.
1. Fill in the **CA**, **Organization**, **DNS**, or **Tags** fields according to your scenario and needs.
2. Under **Allowed authorities**, check all authorities that can sign the certificates. You must have authorities registered.

### Users tab
1. Add all users that will be part of the access group.
    1. Click on the plus icon next to the word **Users**.
    2. In the **System users** window, locate the desired users. Use the search fields or the scroll bar.
    3. Check the box on the left next to the username.
    4. Click **Add**.
:::(Warning) (Caution)
When a user belongs to multiple access groups, the system will apply the settings of the most restrictive group.
:::

### Approvers tab
:::(Warning) (Caution)
To become an approver, a user must have the Certificates Approver profile.
:::
1. Add all approving users to the access group.
    1. Click on the plus icon next to the word **Approvers**.
    2. In the **Approvers** window, locate the desired users. Use the search fields or the scroll bar.
    3. Check the box on the left next to the username.
    4. Click **Add**.
2. Click **Save** to confirm the settings.

On the **Access groups'** main page, you'll see the group you just created.
***
## Edit a group
To edit a group, follow these steps:

1. On the **Access groups'** main page, locate the group you want.
2. In the corresponding **Action** column, click **Edit** (the pencil icon).
3. Update the form.
4. Click **Save** to confirm the changes.
:::(Info) (Info)
The counterclockwise arrow icon  in the top right corner refreshes the screen.
:::
***
## Clone a group
Cloning serves to copy all the settings of an existing group, speeding up the creation process.
To clone a group, follow these steps:

1. On the **Access groups'** main page, locate the group you want to clone.
2. In the corresponding **Action** column, click **View Actions** (the three vertical dots icon).
3. Select **Clone**.
4. Click **Yes** to confirm the cloning.

The new group will appear listed on the **Access groups'** main page with the word copy in parentheses.
***
## Deactivate a group
To deactivate a group, follow these steps:

1.  On the **Access groups'** main page,  locate the group to deactivate.
2.  In the corresponding **Action** column, click **Edit** (the pencil icon).
3.  In **Enabled**, set to **No**.
4.  Click **Save** to confirm the deactivation.

The group will disappear from the list on the main page because the search field **Enabled** is set to **Yes** as default. Select **No** if you want to find the group you deactivated.

You can always select **Edit** to enable the group again.
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

