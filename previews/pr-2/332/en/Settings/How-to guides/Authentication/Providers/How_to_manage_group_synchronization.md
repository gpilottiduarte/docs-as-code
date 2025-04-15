# How to manage group synchronization

Group synchronization in an Active Directory (AD) environment refers to the process of replicating information about user groups between different domain controllers or between AD and other systems. This ensures that groups and their respective user associations are consistent throughout the environment, allowing users to have consistent access to resources and permissions, regardless of the domain controller to which they are connected.

To synchronize LDAP/AD groups in senhasegura, follow the steps below.

## Create a new LDAP/AD group

To create a new LDAP/AD group in senhasegura, do the following:

1. In senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Group Synchronization**.  
3. In the **LDAP/AD Group Synchronization** report, click on View **Actions**, represented by the three vertical dots, and select **New group**.

## LDAP/AD group window

When you click on **New group**, the **LDAP/AD Group** window will appear. Fill in your group information as shown below

### Settings tab

1. **Name**: fill in the name of your group. For example: `Group_01`.  
2. **Server**: in the drop-down menu, select the server for the group. This server must have been registered previously.  
3. **User group**: in the drop-down menu, select the user group to which this group belongs. This group must have been registered previously.  
   1. You can add a new group by clicking the sum icon next to the **User group** drop-down menu.  
4. **Enabled** indicates the group's status at the time of creation. By default, this option is set to **Yes**.  
5. **Synchronization**: indicate whether this group can be synchronized with other groups. By default, this option is set to **Off**.  
6. **DN**: indicate the DN parameter of this group. For example: `CN=John Dow,OU=Users,DC=example,DC=com`.  
7. **AD username attribute**: indicates the attributes related to the users of this group.  
8. **AD name attribute**: in the drop-down menu, select the attribute that will indicate the AD user name. The options are *Name*, *Display Name,* and *Username*.  
9. **Department**: in the drop-down menu, indicate which department this group belongs to. This department must have been registered previously.  
10. **AD query**: AD query refers to locating and retrieving information stored in AD. This can include searching for users, groups, computers, organizational units (OUs), and other directory objects. For example: `(&(objectCategory=person)(objectClass=user)(memberOf=CN=Sales,OU=Groups,DC=example,DC=com)).`

:::(info) (Info)
For more information, access the [LDAP Filter Cheat Sheet](https://cheatography.com/pamymaf/cheat-sheets/ldap-filters/).
:::

### Domum tab

1. **Enable synchronization**: Select whether you want to enable group synchronization with senhasegura Domum. By default, this option is set to **No**.  
2. **Type**: select the type of user that will be part of this group in senhasegura Domum. By default, this option is set to **Internal users.**  
3. **Group**: in the drop-down menu, select the group you want this group to be part of in senhasegura Domum.

### Roles tab

1. To add roles to the user group, click on the button represented by the plus sign next to the word **Roles**.   
2. The **Roles** modal will be opened.  
3. In the **Roles** modal, select the roles you want to add to the group.  
4. Click **Add** to add the roles or **Cancel** to cancel the operation.

To finish registering the user group, click **Save** on any tabs.

## Edit an LDAP/AD group

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Group synchronization**.  
3. In the **LDAP/AD Group Synchronization** report, identify the group you want to change and click the **Edit group**, represented by the pencil and paper icon, in the **Action** column.

The **LDAP/AD Group** window will open in edit mode. Change the settings you want and click **Save**.

## Synchronization test for LDAP/AD groups

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Group synchronization**.  
3. In the **LDAP/AD Group Synchronization** report, identify the group you want to change and, in the **Action** column, click on the icon represented by the three vertical dots and, in the drop-down menu, select the **Synchronization test** option.  
4. In the LDAP/AD Groups window, fill in the following fields:  
   1. **DN:** fill in the group's DN parameters.  
   2. **Raw View:** by selecting this option, the synchronization log will be shown in plain text format. This option is unchecked by default.  
   3. **User filter:** fill in the group's user filtering parameters.  
5. Click **Simulate**.

Just below the text box for **User filter**, a message indicating the output of the synchronization command will be displayed, showing possible synchronization errors.

If you haven't checked the **Raw View** option, the message will be shown as a table. For example:

| User | Username | Operation |
| :---- | :---- | :---- |
| `johndoe` | John Doe | `User 'johndoe' will be preserved` |
| `janedoe` | Jane Doe | `User 'janedoe' will be preserved` |

However, if you have checked the Raw View option, this output will be shown as plain text. For example: `[0] => [mensagem] => Error performing group synchronization example: 0x51 Can't contact LDAP server: ldap://ad.example.com.br:38889.`  

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).