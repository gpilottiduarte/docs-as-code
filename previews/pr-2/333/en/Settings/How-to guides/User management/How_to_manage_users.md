# How to manage users

User creation and management are crucial to the administration of security systems, as they allow granular control of access and actions, authentication and authorization of each user, auditing, and identity management. These practices not only help protect sensitive data from unauthorized access but also ensure that each user can only access the information and tools they need for their specific tasks.

## Requirements
- Be registered/enabled as a PAM operator or system administrator in senhasegura.

## Path to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **User management > Users**.

## Create user

1. In the Users report, in the top bar, click View actions, represented by the three vertical dots icon, and in the drop-down menu, select New.
2. In the User window, fill in the fields as indicated.

### Settings tab

In this tab, you should enter the user's general settings. 
1. **Name**: name of the user. For example, `Test`.
2. **User name**: user's username. For example, `senhasegurateste`.
3. **Password**: fill in a temporary password, as the user will be required to change it on their first access.
    1. You can also leave no password set or generate a password. To generate a password, select the **Set current password** checkbox and click on the **Generate a password** option. To display the password, either filled in or generated, select the **Display password** checkbox.

		
:::(info) (Info)
If the user doesn't set a password, senhasegura will generate a password that will be sent by e-mail.
:::

4. **Department**: in the drop-down menu, choose the department to which the user belongs.
5. **E-mai**l: fill in the user's email address.

:::(Warning) (Important)
If the user you want to register is already a senhasegura Domum user, it won't be possible to register them with the same email address used to access Domum. If you try to register, the following message will alert you: **“There is already a Domum user with the e-mail address `teste@senhasegura.com`. Use another e-mail address.”**
:::

6. **Telephone**: fill in the user's telephone number. Use the `55-11-12345678` format.
7. **Status**: indicate the status in which the user will be created. It can be **Active** or **Inactive**.
8. In the **User groups** section, indicate which user group this user will belong to. To do this, click on the plus icon next to the word **Add** and choose the user group from the drop-down menu.
    1. You can add more than one user group to each user.

### Roles tab

In this tab, you should add the user's roles.

1. Click on the plus icon next to the word **Roles** to open the **Roles** modal.
2. In the **Roles** modal, select the role that will be added to the user.
    1. You can select more than one role.
3. Click **Add**.

### Access groups tab

In this tab, you'll need to indicate the **Access Groups** to which the user will belong. To do this, select the checkbox for each group you want to add the user to.

To finish creating the user, click **Save**.

### Inactivate a user

It's possible to inactivate a user on senhasegura. This action only prevents the user from accessing the platform, keeping all their data intact. To inactivate a user, follow the steps below:

1. In the **Users** report, identify the user you want to inactivate and click **Edit**, represented by the pencil and paper icon, in the **Action** column.
2. The **User** window will open in edit mode.
3. In the **Status** field, select **Inactive**.
4. Click on **Save**.

### Reactivate a user

Once a user has been inactivated, it's possible to reactivate that same user, restoring their access and data. To reactivate a user, follow the steps below:

1. In the **Users** report, in the top bar, under **Active**, select No from the drop-down menu.
2. Click **Filter**.
3. In the **Inactive** users report, identify the user you want to reactivate and, in the **Action** column,  click **Edit**, represented by the pencil and paper icon.
4. The **User** window will open in edit mode.
5. In the **Status** field, select **Active**.
6. Click **Save**.

:::(info) (Info)
The user who has been reactivated will reappear in the system as active. Note that the Deactivation date column will be blank even if this user has been deactivated previously.
:::

## Forget a user

The action of forgetting a user masks all their personal data, making it impossible for any other user to access it. To forget a user, follow the steps below:

:::(error) (Attention)
This action is irreversible.
:::

1. In the **Users** report, identify the user you want to forget and, in the **Action** column, click on the three vertical dots icon and select **Forget user** from the drop-down menu.
2. In the confirmation modal, read the information carefully and click **Yes**.

### Access a users’ history

You can view or print a report with the user's entire history. This type of action is essential for audits and internal control. To access a user's history, follow the steps below:

1. In the **Users** report, identify the user  whose history you want to access.
2.  In the **Action** column, click the the three vertical dots icon and select **History**. The **User History** displays all the user's information and actions.
    1. When you click on **History**, the **User History** window opens and automatically displays the print screen. To view the report, simply cancel the print operation.

## Edit a user

You can edit the data of a user already registered within senhasegura. This type of action is useful when contact or access information needs to be updated, for example. To change a user's settings, follow the steps below:

1. In the **Users** report, identify the one whose information you want to change .
2. n the **Action** column, click **Edit**, represented by the pencil and paper icon.
3. The **User** window will open in edit mode.
4. Change the necessary data and click **Save**.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
