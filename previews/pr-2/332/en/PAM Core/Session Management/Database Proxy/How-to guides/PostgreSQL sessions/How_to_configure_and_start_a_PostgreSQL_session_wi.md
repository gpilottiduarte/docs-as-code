# How to configure and start a PostgreSQL session with DBeaver

In this article, you will find a step-by-step guide on how to configure and start a PostgreSQL-type Database Proxy session in the DBeaver database manager.

:::(warning) (**Caution**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the [Credentials](/v3-32/docs/pam-credentials) document.
* Have the DBeaver application installed.
---

## Configure the database

1. Open the **DBeaver** application.

1. On the home screen, in the top left corner, click on the icon represented by a socket plug and the plus sign.

1. In the pop-up window that opens, **Connect to a database**, and select the database **PostgreSQL**.

1. Click **Next**.

1. At **Main** tab, fill in the fields with the following information:

    5.1. **Host**: enter the IP number of the vault to be accessed.
    5.2. **Port**: default port number of the database. If you use a port number other than the default, enter the number used.
    5.3. **Database**: enter the name of the database that will be accessed.
    5.4. **Authentication**: choose the option Database Native.
    5.5. **Username**: enter the information as the example:
`<vault_username>[<credential_username>@<device_hostname>{<database_port>}]` 
:::(warning) (**Attention**)
If you use an MFA for authentication, whether with a normal or domain credential, the token must be inserted at the end, as shown in the example:`<vault_username>[<credential_username>@<device_hostname>{<database_port>}]<tokenMFA>`
:::
    5.6. **Password**: enter your password to access the safe.
6. Click **Finish**.

Because DBeaver is a database manager that supports multiple databases, the database settings were grouped into folders in the side menu, **Database Navigator**. Click on the folder corresponding to the database **PostgreSQL**, and check if the database that was configured is present in the list.

---
## Start the Database Proxy session

1. In DBeaver application, navigate to the left side menu, **Database Navigator**.

1. Double-click on the database you want to access.

1. In the connection pop-up window that opens, enter your access password.

1. Click **OK**.

All database information will be available in the side menu below the selected database in waterfall format.

---
### Next:
[How to configure the Database Proxy access device](/v3-32/docs/pam-session-how-to-configure-the-database-proxy-access-device)
[Database Proxy](/v3-32/docs/pam-session-about-database-proxy)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
