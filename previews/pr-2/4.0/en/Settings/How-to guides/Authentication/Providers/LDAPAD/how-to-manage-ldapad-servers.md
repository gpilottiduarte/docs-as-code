# How to manage LDAP/AD servers

Registering an Active Directory (AD) server in Segura is an essential procedure to efficiently integrate and manage an organization's IT infrastructure. Active Directory is a widely used solution for identity and access management in corporate networks, allowing you to centralize authentication and authorization of users and devices. 

In this document, you'll find the information on how manage an Active Directory server in Segura.

## Requirements

* Have the PAM administrator role.

## Register/Edit a new AD server

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> Servers.**  
3. In the **Servers form,** you will see a list with all the servers registered in your Segura instance. To register a new server, click **Add** and follow the steps on the screen.

### Domain, device and credential tab

1. In the **Domain** drop-down menu, select the domain of your AD server.  
2. In the **Credential for Authentication** drop-down menu, select the credential that will be used for authentication on the AD server.  
3. Click **Continue**.

:::(warning) (Caution)
Both the domain and credential must be registered before the AD server.  
:::

### LDAP tab

1. In the **Host** field, fill in the host name of the AD server.  
2. In the **Port** field, fill in the port number where the AD server is listening.  
3. In the **DN Base**field, fill in the *Distinguished Name Base* of your AD server. This field is the starting point from which the system will perform the search for objects in the directory and will define the scope for LDAP searches within the AD hierarchy. For example, for the `example.com domain` the **Base DN** will be `DC=example,DC=com`.  
4. In the **Account Form** drop-down menu, select the account form you want to use for that server. This form allows administrators to configure and standardize user accounts with the correct information and permissions for the AD environment. Generally, when using AD, the **Main** option is the most used.

:::(warning) (Caution)
The account form must be registered first.  
:::

5. In the **Order** selector, select the order of servers where the authentication will be performed.  
     
   :::(info) (Info)  
   The order of the servers' configuration defines the sequence of authentication in Segura. When multiple servers are configured, the system will attempt to authenticate the user following the established order, scrolling through each server until the authentication is successful. For example, if servers A, B, and C are configured in that order, and a user exists only on server C, Segura will initiate the authentication attempt on server A, proceed to B, and finally complete the authentication on server C.  
   :::  
     
6. In the **Enabled** option, activate the toggle button so that the server is registered in Segura already active. By default, this option is enabled.  
7. In the **Member is DN?** option, activate the toggle button if the user is identified by his DN  
8. In the **Bind requires DN?** option , activate the toggle button if the association process needs to use DN. This setting is required for the case where a user is in a location apart from the base DN.  
9. In the **Use SSL?** option, activate the toggle button if you want to use the SSL protocol. By default, this option is disabled.  
10. In the **Network connector drop-down menu,** select which connector will be used with the LDAP server. You must take this extra step if your structure makes use of the network connector. The connector must be chosen from the drop-down menu in this situation.  
11. In **the Account filter format option,** specify the search criteria for restricting the results of objects. For example: `(&(objectClass=user)(sAMAccountName=johndoe)).`  
12. In this case, the fields are:  
    1. `objectClass=user`: indicates that the type of user must be *user*.  
    2. `sAMAccountName=johndoe`: the Security Account Manager (SAM) identifier of the user account must be `johndoe`.  
13. In the **Use credential domain** option, activate the toggle button if you want to use a domain credential. By default, this option is disabled.  
14. Use the **Username attribute** option only when the username attribute is different from the default. By default, this attribute is `sAMAccountName`.  
15. In **the DN Bind (leave blank to use DN Base)** option, fill in the DN that will be used as a unique identifier. For example: `CN=John Doe,OU=Users,DC=Secure,DC=com`.  
16. In the **Group** option, type the account group.  
17. In **the Group DN** option, type the DN of the account.  
18. In **the Group Attribute (GroupAttr) option,** fill in the group attributes.  
19. In **the Group scope** option, fill in the group scope.  
20. In **the Group filter** option, type a filter expression for the group. For example, `(objectClass=group)` that will return all objects on the LDAP/AD server of type group.  
21. In **the Member Attribute (MemberAttr)** option, enter the attributes of the group members.  
22. Click **Continue**.

At the end of the process, review the information on your AD server, and, if everything is correct, click **Save**.

## Test the authentication of an LDAP/AD server

1. In the **Servers** report, identify the server that you want to test for authentication, and in the **Actions** column, select the **Test authentication** option from the **Actions** drop-down menu.  
2. In the **LDAP authentication test** form, fill in the following fields:  
   1. In the **Base DN** option, fill in the value of the **Base DN**. For example: `CN=Users,DC=Segura,DC=com,DC=br`.  
      1. By default, this field is filled with the base DN of the server that was previously selected.  
      2. If the user has changed the value of the **Base DN** field, for authentication to work, it's necessary to copy this new value and change it on the server. This step is important since if the value is not modified in the edition, the value that will be used in the authentication will be the value originally registered.  
3. In the **User** option, fill in the username. For example: `johndoe`.  
4. In the **Password** option, fill in the user's password.  
5. Click **Authenticate**.

A message will be displayed below the fields indicating whether the authentication was successful or not.  