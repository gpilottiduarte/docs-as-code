# How to start a MS SQL Server session with MS SQL Server Management Studio

In this document, you'll find a step-by-step guide on how to start an MS SQL Server-type Database Proxy session in the MS SQL Server Management Studio database manager.

:::(warning) (**Attention**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the [Credentials](/v3-32/docs/pam-credentials) document.
* Have the app MS SQL Server Management Studio installed.
---

:::(warning) (**Attention**)
The database is viewed according to each user's viewing permission. If the user has access permission but doesn’t have permission to view the desired database, the connection won’t be granted. Sessions will only be held if the user has viewing permission to databases.
:::

## Start the Database Proxy session

1. Open the application **MS SQL Server Management Studio**.

1. In the initial pop-up window, **Connect to Server**, fill in the fields with the following information:

:::(info) (**Info**)
If the pop-up does not open automatically, in the **Object Explorer** left menu, click on the **Connect** icon or on the icon represented by a socket plug.
:::
2.1. **Server type**: choose the Database Engine option.
2.2. **Server name**: IP number of the vault that will be accessed.
2.3. **Authentication**: choose the SQL Server Authentication option
2.4. **Logon**: enter the information as the example below:
`<vault_username>[<credential_username>@<device_hostname>{<database_port>}]`
:::(info) (**Info**)
To use domain credentials when logging into the application, the domain registered in the credential must appear before the credential username, as shown in the example: `<vault_username>[<domain\credential_username>@<device_hostname>{<database_port>}]`.
To learn how to register domain credentials, access the [Credentials](/v3-32/docs/pam-credentials) document.
:::
:::(warning) (**Attention**)
If you use an MFA for authentication, whether with a normal or domain credential, the token must be inserted at the end, as shown in the example:`<vault_username>[<credential_username>@<device_hostname>{<database_port>}]<tokenMFA>`
:::

2.5. **Password**: enter your password to access the safe.

3. Click **Connect**.

At the end of all these steps, access to the proxy database is complete. Check in the side menu, Object Browser, all the information and folders of the accessed database.

:::(error) (**Important**)
Due to MS SQL Server Management Studio's default behavior of maintaining connections in the background even after they are disconnected, sessions via Database Proxy will only be considered as finished for senhasegura when the MS SQL Server Management Studio client is completely closed.
:::

---
### Next steps:
[How to configure and start an MS SQL Server session with DBeaver](/v3-32/docs/pam-session-how-to-configure-and-start-an-ms-sql-server-session-with-dbeaver)
[How to configure the Database Proxy access device](/v3-32/docs/pam-session-how-to-configure-the-database-proxy-access-device)
[Database Proxy](/v3-32/docs/pam-session-about-database-proxy)
[How to register new audited command](/v3-32/docs/pam-session-how-to-register-new-audited-command)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
