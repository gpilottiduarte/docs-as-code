# How to manage users

User creation and management are crucial to the administration of security systems, as they allow granular control of access and actions, authentication and authorization of each user, auditing, and identity management. These practices not only help protect sensitive data from unauthorized access but also ensure that each user can only access the information and tools they need for their specific tasks.

## Requirements

* Be registered/enabled as a PAM operator or system administrator in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Users Management > Users**.  

## Create user

1. In the **Users** report, in the top bar, click the **Add** button.  
2. In the **Add Use** screen, fill in the fields as indicated.

### Settings tab

In this tab, you should enter the user's general settings.

1. **Name**: name of the user. For example, Test.  
2. **User name**: user's username. For example, senhasegurateste.  
3. **New password**: fill in a temporary password, as the user will be required to change it on their first access.  
   1. You can also leave no password set or generate a password. To generate a password, select the **Set current password** toogle button and click on the **Generate** button. To display the password, either filled in or generated, click the **Hide/Show password** button (eye button).  
   2. When creating a new password, the user must pay attention to the characters allowed:  
      1. **Latin letters** (for example: `A-Z`, `a-z`).  
      2. **Numbers** (for example: `0-9`).  
      3. **Special characters** (for example: `\! @ \# $ % ^ & \* ( ) \_ \+ \[ \] { } | ; : , . \< \> ? / \~`).  
      4. **Diacritics and Accented Characters**: (for example: `Á`, `á`, `â`, `ç`, `Ç`, `Ñ`, `Ü`).  
      5. **Nordic and Germanic characters** (for example: `Å`, `ß`, `Æ`, `Ø`).  
      6. **Cyrillic (Russian) characters** (for example: `А-Я`, `а-я`).  
      7. **Copyright symbols** (for example: `®`, `©`).

:::(info) (Info)
If the user doesn't set a password, Segura will generate a password that will be sent by e-mail.  
:::

4. **Department**: in the drop-down menu, choose the department to which the user belongs.  
5. **E-mai**l: fill in the user's email address.

:::(warning) (Important)  
If the user you want to register is already a Segura Domum user, it won't be possible to register them with the same email address used to access Domum. If you try to register, the following message will alert you: “There is already a Domum user with the e-mail address `teste@Segura.com`. Use another e-mail address.”  
:::

1. **Telephone**: fill in the user's telephone number. Use the 55-11-12345678 format.  
2. **Status**: indicate the status in which the user will be created. It can be **Active** or **Inactive**.  
3. **User groups**: from the dropdown menu, select the user group the user will part of it

### Roles tab

In this tab, you should add the user's roles.

1. Click on the **Add** button to open the **Roles** modal.  
2. In the **Roles** modal, select the role that will be added to the user.  
   1. You can select more than one role.  
3. Click **Add**.
4. Click **Continue**.

### Access policies tab

In this tab, you'll need to indicate the **Access policies** to which the user will belong. To do this, select the checkbox for each group you want to add the user to.

To finish creating the user, click **Continue**.

### Inactivate a user

It's possible to inactivate a user on Segura. This action only prevents the user from accessing the platform, keeping all their data intact. To inactivate a user, follow the steps below:

1. In the **Users** report, identify the user you want to inactivate, click **Actions** button and select **Edit**.
3. On the **Add User** report, under the **Settings** tab, select **Disable** on the Status **option** and save it.

### Reactivate a user

Once a user has been inactivated, it's possible to reactivate that same user, restoring their access and data. To reactivate a user, follow the steps below:

1. In the **Users** report, identify the user you want to inactivate, click **Actions** button and select **Edit**.
3. On the **Add User** report, under the **Settings** tab, select **Enabled** on the Status **option** and save it.

:::(info) (Info)  
The user who has been reactivated will reappear in the system as active. Note that the Deactivation date column will be blank even if this user has been deactivated previously.  
:::

## **Forget a user**

The action of forgetting a user masks all their personal data, making it impossible for any other user to access it. To forget a user, follow the steps below:

:::(error) (Alert!)  
This action is irreversible.  
:::

1. In the **Users** report, identify the user you want to forget, click the **Actions** button and select **Forget user**.
2. In the confirmation modal, read the information carefully and click **Yes**.

### Access a user’s history

You can view or print a report with the user's entire history. This type of action is essential for audits and internal control. To access a user's history, follow the steps below:

1. In the **Users** report, identify the user you want to forget, click the **Actions** button and select **History**.
2. The **User History** displays all the user's information and actions. 

## Edit a user

You can edit the data of a user already registered within Segura. This type of action is useful when contact or access information needs to be updated, for example. To change a user's settings, follow the steps below:

1. In the **Users** report, identify the user you want to inactivate, click **Actions** button and select **Edit**.
3. The **Add User** window will open in edit mode.  
4. Change the necessary data and save it.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).