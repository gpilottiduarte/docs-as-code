# How to configure IDEs for the end user to connect to Oracle DB

In this document, you’ll find a step-by-step guide on how to configure the IDEs.

It’ll take five steps to configure the Oracle database so that it’s accessible via **Database proxy** in senhasegura, this document is the **fifth and last step**.

![cluster_5_EN](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cluster_5_EN.png){height="" width=""}

:::(warning) (**Attention**)
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured the minimum version is 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with senhasegura on ports 1521 and 2484.
* Database client installed.
    * Dbeaver, minimum version:23.1.0
    * SQLPlus, minimum version:21.0.0.0.0
    * SQL Developer, minimum version:23.1.0.097
* Don’t have filters enabled for the certificate.
* Download the latest version of [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}

---
## Configure the IDE
To access Oracle DB using the Database Proxy, it’s possible to use IDEs approved by senhasegura.

Some specific configurations are required on the user's workstation for this access to be possible.

1. Unzip the Instant Client files into a directory of the user's choice. For example: `C:\Users\user1\Documents\instantclient_21_13`.
2. Create a directory called **oracle_files**, in which the configuration files used for the connection via DB Proxy will be centralized. For example: `C:\Users\user1\Documents\oracle_files`.
3. Create within the directory **oracle_files** the `tnsnames.ora` file, with the content as shown below.

Replace the strings presented in this table with the corresponding values:

**String**|**Value**
---|---
`<IP_SAFEPASSWORD>`|IP address of the senhasegura instance.
`<USERNAME>`|Username of the senhasegura user.
`<USERNAME_CREDENTIAL>`|Database credential username.
`<IP_ORACLE>`|Oracle server IP address.
`<SERVICE_NAME>`|Name of the desired Oracle DB service. It can be found by running the command `lsnrctl status` at Oracle DB.
`<USER_WALLET_DIR>`|It must be replaced with the user's wallet path, which was transferred to the user's workstation in the final step of creating the user's wallet.

```bash
<IDENTIFIER>=
    (DESCRIPTION=
            (ADDRESS=
                (PROTOCOL=TCPS)
                (HOST=<IP_SENHASEGURA>)
                (PORT=2484)
     )
    (CONNECT_DATA=
            (SENHASEGURA=
                (USERNAME=<USERNAME>)
                (CREDENTIAL=<USERNAME_CREDENTIAL>)
                (DEVICE=<IP_ORACLE>)
                (PORT=2484)
                (TOTP=0000))
            (SERVER=DEDICATED)
            (SERVICE_NAME=<SERVICE_NAME>)
      )
)
```
:::(warning) (**Attention**)
To use the Oracle Database Proxy in multi-tenant it’s necessary to indicate the tenant that will be used. This data must be passed through the command line `(TENANT=XXXXXX)`, which must be inserted immediately after the TOTP, respecting the existing indentation.
:::

Create within the directory **oracle_files** the `sqlnet.ora` file, with the following content:
```bash
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <USER_WALLET_DIR>)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
```

1. Configure the environment variables to point to the Instant Client and the `tnsnames.ora` and `sqlnet.ora` files.
    1. Add to `$PATH` variable the path to the Instant Client directory: For example: `C:\Users\user1\Documents\instantclient_21_13`
    2. Create a new `$TNS_ADMIN` variable, pointing to the directory where the `tnsnames.ora` is located. For example: `C:\Users\user1\Documents\oracle_files`

Finishing the fifth step of configuring Oracle to be used via **Database Proxy**, the configuration is ready and the end user can now access the sessions.

Access the documents below to learn how to start the sessions:
[How to start a Database Proxy Oracle session with DBeaver on Linux](/v4/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows)
[How to start a Database Proxy Oracle session with DBeaver on Windows](/v4/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows)


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.
