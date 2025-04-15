# How to manage user roles

In user management, defining roles is an essential step to keep the environment organized. Roles facilitate the routine of user management by creating a predetermined set of rules that apply to all users within that particular set of roles. On senhasegura, you can define various roles, in addition to using those already configured.

## **Requirements**

* Have *System Administrator* privileges.

## **Register a new role**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.  
3. In the **Roles** report, on the top bar, click on **View actions**, represented by three vertical dots, and select **New** from the drop-down menu.  
4. In the **Roles** window, fill in the following fields:  
   1. In the **Settings** tab:  
      1. **Name**: fill in with a name for the role to be registered.  
      2. **Enabled**: select **Yes** to create the role active in senhasegura.  
      3. **Description**: fill in with a description that helps identify the role.  
   2. In the **Permissions** tab:  
      1. To add permission to the role click on the plus symbol next to the word **Permission**.  
      2. In the **Permission** modal, select the permissions you want to add to the role.   
         :::(info) (Info)  
         You can filter permissions using the options in the top bar.  
         :::  
      3. Click **Add**.  
   3. In the **Users** tab:  
      1. To add a user to the role, click the plus symbol next to the word **Users**.  
      2. In the **System Users** modal, select the users you want to add to the role. Note that you can filter users using the options in the top bar.  
      3. Click **Add**.  
5. Click **Save**.

## **View role details**

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.  
3. In the **Roles** report, identify the role you want to view the details of and, in the **Action** column, click on **Details**, represented by the magnifying glass icon.

The **Role Details** window will open, displaying all the details of the role in question.

## **Modify a role**

1. On senhasegura, in the upper-left corner, click on **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.  
3. In the **Roles** report, identify the role you want to view its details. In the **Action** column, click on the three vertical dots and select **Edit**, represented by the pencil and paper icon, in the drop-down menu.

The **Roles** window will open in edit mode. Change the necessary information and click **Save**.

:::(info) (Info)  
Built-in roles are immutable, which is why the fields appear as protected.  
:::

## **Delete a role**

1. On senhasegura, in the upper-left corner, click on **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.  
3. In the **Roles** report, identify the role you want to view its details. In the **Action** column, click on the three vertical dots and select **Delete**, represented by the trash can icon, in the drop-down menu.  
4. In the confirmation modal, select **Yes**. 

:::(info) (Info)  
Note that no role is deleted from the instance, it becomes inactive.  
:::

## **Reactivate a role**

Since roles are not deleted from the instance, it is possible to reactivate them. To do this, follow the steps below:

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.  
3. On the top bar, select **No** in the **Enabled** drop-down menu and click on **Filter**. This action will filter the inactive roles in the instance.  
4. In the **Roles** report, identify the role you want to reactivate and, in the **Action** column, click on the three vertical dots and select **Edit**, represented by the pencil and paper icon, in the drop-down menu.  
5. In the **Roles** window, in the **Settings** tab, select **Yes** for the **Enabled** option.  
6. Click **Save**.

## **Clone a role**

In some situations, it may be interesting to clone a role for specific purposes. To clone a role in the instance, follow the steps below:

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.  
3. In the **Roles** report, identify the role you want to clone and, in the **Action** column, click on the three vertical dots and select **Clone**, represented by the two sheets of paper, in the drop-down menu.

The role will be cloned without user intervention. The cloned role can be identified by the suffix `(copied from #)` in its name, where `#` indicates the ID of the original role.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).