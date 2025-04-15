# How to manage LDAP/AD servers

senhasegura allows you to use Active Directory (AD) for identity management. If you want to use AD with senhasegura, follow the steps below.

## Register an LDAP/AD server

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Servers**.  
3. In the **LDAP/AD Servers** form, click on **View actions** in the taskbar in the top-right corner and select **New** from the drop-down menu.  
4. In the **LDAP/AD Server** window, fill in the fields below:  
   1. **Host**: enter the address of the LDAP host.  
   2. **Port**: enter the port of the LDAP host.  
   3. **Enabled**: indicate whether the server is active or not. By default, this option is set to **Yes**.  
   4. **Credential for authentication:** select the credential that will be used to authenticate to the LDAP server from the drop-down menu.  
   5. **Network connector**: select from the drop-down menu which connector will be used with the LDAP server.  
   6. **DN base**: enter the starting location of the directory from which the search or operation will begin. This will be the starting point for searching, adding, modifying, or deleting objects on the LDAP server.  
   7. **Account form**: select the type of account form from the drop-down menu. The options are: *DN, Username, Backslash*, and *Main*.  
   8. **Account filter format: specify the search criteria to narrow down the results. For example:** `(&(objectClass=user)(sAMAccountName=johndoe))`.  
      1. In this case, the fields are:  
         1. `objectClass=user`: the type of the object must be `user`.  
         2. `sAMAccountName=johndoe`: the user's SAM (Security Account Manager) account name must be `johndoe`.  
   9. **Account domain**: specify the domain of the account. For example, `johndoe@senhasegura.com`.  
   10. **Account domain (Short Name)**: enter the account's short name, specifically. For example: `SENHASEGURA\johndoe`.  
   11. **Use Credential Domain**: indicate whether you want to use a domain credential. By default this option is set to **No**.  
   12. **Username attribute**: enter the account's unique username.  
   13. **DN Bind (leave blank to use the DN base):** enter the DN that will be used as the unique identifier. For example**:** `"CN=John Doe,OU=Users,DC=senhasegura,DC=com".`  
   14. **Member is DN?**: select **Yes** if the user is identified by their DN  
   15. **Bind requires DN?:** select **Yes** if the bind process needs to use DN.  
   16. **Group:** enter the account group.  
   17. **Group DN:** enter the account's DN.  
   18. **Group Attribute (GroupAttr):** enter the attributes of the group.  
   19. **Group scope:** enter the group scope.  
   20. **Group filter:** enter a filter expression for the group. For example: `(objectClass=group)` which will return all objects within the LDAP/AD server that are of type `group`.  
   21. **Member attribute (MemberAttr):** enter the attributes of the group members.  
   22. **Order:**  
   23. **Use SSL?:** select whether you want to use the SSL protocol. By default this option is set to **No.**  
5. Click **Save**.

## Edit an LDAP/AD server

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Servers**.  
3. In the **LDAP/AD Servers** form, select the server you want to edit and, in the **Action** column, click **Edit**, represented by the pencil and paper icon.

The **LDAP/AD Server** window will open in edit mode and you can modify the necessary attributes. Then click **Save** to save the changes.

## Test the authentication of an LDAP/AD server

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Servers**.  
3. In the **LDAP/AD Servers** form, select the server you want to edit and, in the **Action** column, click on the three vertical dots icon and select **Test authentication** from the drop-down menu.  
4.  In the **LDAP Authentication Test** window, fill in the following fields:  
   1. **Base DN**: fill in the Base DN value. For example: `CN=Users,DC=safe password,DC=com,DC=br`.  
   2. **User**: fill in the username. For example: `johndoe.`  
   3. **Password**: fill in the user's password.  
5. Click **Authenticate**.

A message will appear below the fields indicating whether authentication succeeded or failed.  

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).