# How to start a MS SQL Server session with MS SQL Server Management Studio

In this document, you'll find a step-by-step guide on how to start an MS SQL Server-type Database Proxy session in the MS SQL Server Management Studio database manager.

:::(warning) (**Attention**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the [Credentials](/v4/docs/pam-credentials) document.
* Have the app MS SQL Server Management Studio installed.
---

:::(warning) (**Attention**)
The database is viewed according to each user's viewing permission. If the user has access permission but doesn’t have permission to view the desired database, the connection won’t be granted. Sessions will only be held if the user has viewing permission to databases.
:::

## Start the Database Proxy session

1. Open the application **MS SQL Server Management Studio**.
2. In the initial pop-up window, **Connect to Server**, fill in the fields with the following information:
4. If the pop-up doesn't open automatically, in the **Object Explorer** left menu, click on the **Connect** icon or on the icon represented by a socket plug.
    1. **Server type**: choose the Database Engine option.
    2. **Server name**: IP number of the vault that will be accessed.
    3. **Authentication**: choose the **SQL Server Authentication** option
    4.  **Logon**: enter the information as the example below: `vault_username[credential_username@device_hostname{database_port}]`
    5. Using **domain credentials** when logging into the application, the domain registered in the credential must appear before the credential username, as the example below: `vault_username[domain\credential_username@device_hostname{database_port}]`.
    :::(info) (**Info**)
    To learn how to register domain credentials, access the [Credentials](/v4/docs/pam-credentials) document.
    :::
    9. Using an **MFA** for authentication, whether with a regular or domain credential, the token must be inserted at the end: `vault_username[credential_username@device_hostname{database_port}]mfa_token`
    10. **Password**: enter your password to access the safe.
6. Click **Connect**.

At the end of all these steps, access to the proxy database is complete. Check in the side menu, **Object Browser**, all the information and folders of the accessed database.


:::(error) (**Important**)
Due to MS SQL Server Management Studio's default behavior of maintaining connections in the background even after they are disconnected, sessions via Database Proxy will only be considered as finished for Segura when the MS SQL Server Management Studio client is completely closed.
:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
