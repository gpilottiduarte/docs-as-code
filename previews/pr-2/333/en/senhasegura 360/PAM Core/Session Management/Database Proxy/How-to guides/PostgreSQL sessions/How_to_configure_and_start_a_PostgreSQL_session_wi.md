# How to configure and start a PostgreSQL session with DBeaver

In this document, you’ll find a step-by-step guide on how to configure and start a PostgreSQL-type Database Proxy session in the DBeaver database manager.

:::(warning) (**Caution**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the [Credentials](/v3-33/docs/pam-credentials) document.
* Have the DBeaver application installed.
---

## Configure the database

1. Open the **DBeaver** application.
2. On the home screen, in the top left corner, click on the icon represented by a socket plug and the plus sign.
3. In the pop-up window that opens, **Connect to a database**, and select the database **PostgreSQL**.
4. Click **Next**.
5. At **Main** tab, fill in the fields with the following information:
    1. **Host**: enter the IP number of the vault to be accessed.
    2. **Port**: default port number of the database. If you use a port number other than the default, enter the number used.
    3. **Database**: enter the name of the database that will be accessed.
    4. **Authentication**: choose the option Database Native.
    5. **Username**: enter the information as desired:
        1. Using a **regular credential**: `vault_username[credential_username@device_hostname{database_port}]` 
        2. Using a **MFA** for authentication, the token must be inserted at the end: `vault_username[credential_username@device_hostname{database_port}]mfa_token`
    6. **Password**: enter your password to access the safe.]
    7. At **SSL** tab, fill in the fields with the following information:
        1. **Use SSL**: select the checkbox to activate the option.
        2. In the **Advanced** section, on the **SSL mode** field: select **Allow**.
        :::(info) (**Info**)
        If you need to disable encryption for development testing, select Disable so that the data is passed in plain text.
        :::
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

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
