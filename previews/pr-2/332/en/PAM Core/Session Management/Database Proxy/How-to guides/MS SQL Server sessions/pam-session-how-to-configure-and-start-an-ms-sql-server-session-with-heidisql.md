# How to configure and start an MS SQL Server session with HeidiSQL

In this article, you will find a step-by-step guide on how to configure and start an MS SQL Server-type Database Proxy session in the HeidiSQL database manager.

:::(warning) (**Caution**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the documentation on [Credentials](/v3-32/docs/credentials).
* Have the HeidiSQL application installed.
---

## Configure the database

1. Open the **HeidiSQL** application.

1. On the home screen, in the bottom left corner, click the button **New**.

1. At **Settings** tab, fill in the fields with the following information:

    3.1.** Network type**: choose the option **Microsoft SQL Server (TCP/IP)**.  
    3.2. **Library**: choose the option **MSOLEBDSQL**.
    3.3. **Hostname/IP**: enter the IP number of the vault to be accessed.
    3.4. **User**: enter the information as the example below:
`<vault_username>[<credential_username>@<device_hostname>{<database_port>}]`
    3.5. **Password**: enter your password to access the safe.
    3.6. **Port**: enter the default port number of the database (1433). If you use a port number other than the default, enter the number used.
    4. Click **Save**.

After these steps, the saved database will be listed in the application's side menu.

## Start the Database Proxy session
1. In **HeidiSQL** application, navigate to the left-side menu.
2.  Double-click on the database you want to access.
3. Or click on the desired database and then click **Open**.

All configured databases will be available in the side menu.

---
### Next:
[How to configure the Database Proxy access device](/v3-32/docs/pam-session-how-to-configure-the-database-proxy-access-device)
[Database Proxy](/v3-32/docs/pam-session-database-proxy)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
