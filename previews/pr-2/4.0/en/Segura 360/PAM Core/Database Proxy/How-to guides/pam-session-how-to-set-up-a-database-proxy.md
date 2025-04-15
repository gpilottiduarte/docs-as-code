# How to modify Database Proxy port number

:::(error) (**Important**)
On the Database Proxy installation, this configuration is automatic with a default port number. Perform these steps **only** if the port number that you use isn’t the default number.
:::

This article will guide you through a step-by-step process on how to set up a database to use it as a Database Proxy. **This configuration is only necessary when the port number that you use in your database isn’t the default number.**

---
### Requirements

* Be an admin user
* Start an SSH admin session into the vault. Access the [How to access a SSH admin session into the Segura platform](/v4/docs/administration-ssh-access) document to know how to perform this action.

---
## Set up the database
:::(warning) (**Caution**)
The command line must be typed inside an SSH admin session into the vault, using an application of your preference.
:::

1. With the **SSH** admin session initialized.
    :::(warning) (**Caution**)
    The values `bind-port` and `listen_port`, must be filled in with the port number used in your database.
    :::

#### MS SQL Server database

1. At the session home screen, open the file **proxy-db-mssql.conf**, type:
    1. `vim/etc/Segura/proxy-db-mssql.conf`
    2. Change the `bind-port` value according to the used port number.
    3. Press **ESC**.
    4. Type `:wq`.
    5. Press **Enter**.
2. At the home screen type:
    1. `systemctl restart proxy-db-mssql`
3. Close the SSH admin session.

#### PostgreSQL database

1. At the session home screen, open the file **pgbouncer.ini**, type:
    1. `vim/etc/Segura/pgbouncer.ini`
    2. Change the `listen_port` value according to the used port number.
    3. Press **ESC**.
    4. Type `:wq`.
    5. Press **Enter**.
2. At the home screen type:
    1. `systemctl restart proxy-db-postgresql`
3. Close the SSH admin session.

#### Oracle database

1. At the session home screen, open the file **proxy-db-oracle.conf**, type:
    1. `vim/etc/Segura/proxy-db-oracle.conf`
    2. Change the `bind-port` value according to the used port number.
    3. Press **ESC**.
    4. Type `:wq`.
    5. Press **Enter**.
2. At the home screen type:
    1. `systemctl restart proxy-db-oracle`
3. Close the SSH admin session.

After all these steps, the database setup is finished.

---
## Next:
[How to configure the Database Proxy access device](/v4/docs/pam-session-how-to-configure-the-database-proxy-access-device)
[Database Proxy](/v4/docs/pam-session-about-database-proxy)

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.