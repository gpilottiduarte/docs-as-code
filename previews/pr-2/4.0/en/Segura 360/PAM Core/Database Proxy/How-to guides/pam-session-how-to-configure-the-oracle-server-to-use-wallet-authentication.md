# How to configure the Oracle server to use wallet authentication

This document provides information about the step-by-step guide on how to configure the Oracle server to accept connections via SSL.

It’ll take six steps to configure the Oracle database so that it’s accessible via Database proxy in Segura, this document is the **third step**.

![step3-alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/step3-alone.png){height="" width=""}

:::(warning) (**Attention**)
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured the minimum version is 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with Segura on ports 1521 and 2484.
* Certificate authority  (CA) for signing Oracle DB certificates and the database credential.
* Database client installed.
    * Dbeaver, minimum version: 23.1.0
    * SQLPlus, minimum version: 21.0.0.0.0
    * SQL Developer, minimum version: 23.1.0.097
* Don’t have filters enabled for the certificate.

---
## Configure the Oracle server
For Oracle DB to accept authentication via SSL using Oracle Wallet, some configurations are required on the server side.

#### Listener Parameter file
Identify the path to the files `sqlnet.ora` and `listener.ora`. Upon return from execution, the Listener Parameter File field will present the current path of the `listener.ora` file, and the `sqlnet.ora` file will be in the same directory.

```bash
oracle$ lsnrctl status
```

#### sqlnet.ora

Edit the file to accept connections via SSL using Oracle Wallet.
```bash
oracle$ vim /u01/app/oracle/product/19c/dbhome_1/network/admin/sqlnet.ora

WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <ORACLE_WALLET_DIR>)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
```

#### listener.ora
Edit the file to add the following content:

```bash
oracle$ vim /u01/app/oracle/product/19c/dbhome_1/network/admin/listener.ora

SSL_CLIENT_AUTHENTICATION = TRUE
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <ORACLE_WALLET_DIR>)))
LISTENER = 
	(DESCRIPTION_LIST = 
		(DESCRIPTION = 
			(ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
			(ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
			(ADDRESS = (PROTOCOL = TCPS)(HOST = 0.0.0.0)(PORT = 2484))
		)
)
```

#### lsnrctl
For the settings to take effect, you must restart the service.
```bash
oracle$ lsnrctl stop
oracle$ lsnrctl start
```
:::(Warning) (**Attention**)
After this step, Oracle DB Server will accept SSL connections through port 2484.
When a **SSL authentication** is enabled, you won’t be able to log in with **sysdba** via **sqlplus** using the password. Be sure to warn the customer about this behavior. Other users with administrator privileges can log in with a password.
:::
Finishing the third step of configuring Oracle to be used via Database Proxy, access the document [How to configure a device in Segura to use the Database Proxy with Oracle](/v4/docs/pam-session-how-to-configure-a-device-in-Segura-to-use-the-database-proxy-with-oracle) to perform the fourth step and continue the configuration.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.