# How to configure the Active Directory authentication

Learn how to configure Active Directory authentication by following the steps described in this article.

## Requirements

* A user who is part of the Domain Admins group.
*  [Enable Active Directory (LDAP)](/v4/docs/user-management-enable-authentication-providers) in the list of authentication providers.
* [Create an AD Server device with LDAP](/v4/docs/pam-devices-management) in Segura
* [Create an AD user](/v4/docs/pam-credentials) whose credentials can be used to query users in the same domain.
* Integrate a Windows Server Active Directory (AD) with LDAP.

:::(info) (Info)
For security reasons, Active Directory LDAP is set as the default authentication provider. There’s no fallback for users setting local authentication.
:::

---
## Configure authentication via Active Directory
To configure authentication in Segura via Active Directory, follow these steps:

1. In the top-left corner, click **Grid Menu**, represented by the nine squares icon, and select **Settings**.
2. In the side menu, select **Authentication > Active Directory > Servers**.
3. In the top-right corner, click the **View actions** icon, represented by the three vertical dots.
4. Select **New**.
5. Fill out the **[LDAP Server](/v4/docs/authentication-ad-server-ldap)** form. 
     5.1 **Host**: enter the hostname or IP address of the AD server.
     5.2 **Port**: enter the LDAP communication port number.
     5.3 **Enabled**: keep it as **Yes**.
     5.4 **Credential for authentication**: select the credential that will be used for user authentication on the server and user synchronization between servers. 
    5.5 **DN Base**: enter the base to be used for LDAP queries.
     5.6 **Account form**: select the format for the queries.
     5.7 **Account domain**: enter the domain name of the LDAP server account.
     5.8 **Account domain (Short name)**: enter the abbreviation of the LDAP server account domain name.
     5.9 **Order**: set the server's priority. The lower the number, the higher the priority of the server.
     5.10 **Use SSL?**: indicate whether the authentication will use an SSL connection or not. If using an SSL connection, make sure to add the correct port.
     5.11 **Member is DN?**: indicate whether the object is a DN or not.
     5.12 **Bind requires DN?**: indicate whether the authentication will require the Bind-DN to authenticate and connect to the server.
6. Click **Save**.

The **LDAP/AD Servers** home page lists the server.

You can make edits to the registered information. To do so, locate the server in question and click **Edit**, identified by a pencil and paper icon, to make the necessary changes.

:::(Info) (Info)
It's possible to register multiple Active Directory servers in Segura, assigning them a priority order. Segura uses this order to authenticate users, attempting to log in first to the highest-priority server. If the first authentication attempt fails, the system moves on to the next server in the list and so on. If login fails on all registered AD servers, the user receives a notification stating that Segura was unable to authenticate their access.
:::
***
## Test authentication
:::(Warning) (Caution)
Ensure that the LDAP provider is enabled in **Settings > Authentication > Providers**. This action is necessary to perform the authentication test that follows.
:::
1. In the **Action** column, locate the saved server and click **View actions** of the corresponding server.
2. Select **Test authentication**.
3. Fill out the **LDAP Authentication Test** form with the following information: Base DN, User, and Password.
4. Click **Authenticate**.

If successful, an authentication message will be displayed on the screen, indicating that the server is ready for use.
***
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
