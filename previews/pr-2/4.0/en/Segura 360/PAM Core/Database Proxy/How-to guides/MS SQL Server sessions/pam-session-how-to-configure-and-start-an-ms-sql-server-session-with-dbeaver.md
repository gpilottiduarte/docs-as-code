# How to configure and start an MS SQL Server session with DBeaver

In this document, you will find a step-by-step guide on how to configure and start an MS SQL Server-type Database Proxy session in the DBeaver database manager.

:::(warning) (**Caution**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the [Credentials](/v4/docs/pam-credentials) document.
* Have the DBeaver application installed.
---

## Configure the database

1. Open the **DBeaver** application.
2. On the home screen, in the top left corner, click on the icon represented by a socket plug and the plus sign.
3. In the pop-up window that opens, **Connect to a database** and select the database **SQL Server**.
4. Click **Next**.
5. At **Main** tab, fill in the fields with the following information:
    1. **Host**: enter the IP number of the vault to be accessed.
    2. **Port**: default port number of the database. If you use a port number other than the default, enter the number used.
    3. **Database/Schema**: enter the name of the database that will be accessed.
    4. **Authentication**: choose the option SQL Server Authentication.
    5. **Username**: enter the information as desired:
        1. Using a **regular credential**:  `vault_username[credential_username@device_hostname{database_port}]`
        2. Using **domain credentials** when logging into the application, the domain registered in the credential must appear before the credential username, as the example below: `vault_username[domain\credential_username@device_hostname{database_port}]`.
            :::(info) (**Info**)
            To learn how to register domain credentials, access the [Credentials](/v4/docs/pam-credentials) document.
            :::
        7. Using an **MFA** for authentication, whether with a regular or domain credential, the token must be inserted at the end: `vault_username[credential_username@device_hostname{database_port}]mfa_token`
    8. **Password**: enter your password to access the safe.
6. Click **Finish**.

Because DBeaver is a database manager that supports multiple databases, the database settings were grouped into folders in the side menu, **Database Navigator**. Click on the folder corresponding to the database **MS SQL Server** and check if the database that was configured is present in the list.

---

## Start the Database Proxy session
1. In **DBeaver** application, navigate to the left side menu, **Database Navigator**.

1. Double-click on the database you want to access.

3. In the connection pop-up window that opens, enter your access password.
4. Click **OK**.

All database information will be available in the side menu below the selected database in waterfall format.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
