# How to manage user roles

In user management, defining roles is an essential step to keep the environment organized. Roles facilitate the routine of user management by creating a predetermined set of rules that apply to all users within that particular set of roles. On Segura, you can define various roles, in addition to using those already configured.

## **Requirements**

* Have *System Administrator* privileges.

## **Register a new role**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User Management > Access control layer (ACL) > Roles**.  
3. In the **Roles** report, on the top bar, click the **Add** button.  
4. In the **Roles** screen, fill in the following fields:  
   1. In the **Settings** tab:  
      1. **Name**: fill in with a name for the role to be registered.  
      2. **Enabled**: select **Yes** to create the role active in Segura.  
      3. **Description**: fill in with a description that helps identify the role. 
      4. Click **Continue**.
   2. In the **Permissions** tab:  
      1. To add permission to the role click on the **Add** button.  
      2. In the **Permission** modal, select the permissions you want to add to the role.   
         :::(info) (Info)  
         You can filter permissions using the options in the top bar.  
         :::  
      3. Click **Add**. 
      4. Click **Continue**.
   3. In the **Users** tab:  
      1. To add a user to the role, click **Add** button.  
      2. In the **Users** modal, select the users you want to add to the role. Note that you can filter users using the options in the top bar.  
      3. Click **Add**. 
      4. Click **Continue**.
5. On the **Review** tab, click **Save**.

## **View role details**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User Management > Access control layer (ACL) > Roles**.  
3. In the **Roles** report, identify the role you want to view the details of and, click the **Actions** button and select **Details**.

The **Role Details** window will open, displaying all the details of the role in question.

## **Modify a role**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User Management > Access control layer (ACL) > Roles**.  
3. In the **Roles** report, identify the role you want to view its details, click the **Actions** button and select **Edit**.

The **Roles** window will open in edit mode. Change the necessary information and click **Save**.

:::(info) (Info)  
Built-in roles are immutable, which is why the fields appear as protected.  
:::

## **Disable a role**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **User Management > Access control layer (ACL) > Roles**.  
3. In the **Roles** report, identify the role you want to view its details, click the **Actions** button and select **Disable**.
4. In the confirmation modal, click **Yes**. 

:::(info) (Info)  
Note that no role is deleted from the instance, it becomes inactive.  
:::

## **Reactivate a role**

Since roles are not deleted from the instance, it is possible to reactivate them. To do this, follow the steps below:

1. In the **Roles** report, identify the role you want to view its details, click the **Actions** button and select **Edit**.
2. On the top bar, select **Disabled** in the **Status** drop-down menu and click on **Filter**. This action will filter the inactive roles in the instance.  
3. In the **Roles** report, identify the role you want to view its details, click the **Actions** button and select **Edit**.
4. In the **Roles** screen, in the **Settings** tab, select **Yes** for the **Enabled** option.  
5. Click **Save**.

## **Clone a role**

In some situations, it may be interesting to clone a role for specific purposes. To clone a role in the instance, follow the steps below:

1. In the **Roles** report, identify the role you want to view its details, click the **Actions** button and select **Edit**.
2. On the top bar, select **Disabled** in the **Status** drop-down menu and click on **Filter**. This action will filter the inactive roles in the instance.  
3. In the **Roles** report, identify the role you want to view its details, click the **Actions** button and select **Clone**.

The role will be cloned without user intervention. The cloned role can be identified by the suffix `(copied from #)` in its name, where `#` indicates the ID of the original role.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).