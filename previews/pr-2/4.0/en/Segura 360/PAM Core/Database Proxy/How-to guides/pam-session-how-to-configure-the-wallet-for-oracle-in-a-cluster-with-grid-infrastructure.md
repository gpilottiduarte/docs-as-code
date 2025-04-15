# How to configure the wallet for Oracle in a cluster with grid infrastructure

This document provides information about the step-by-step guide on how to configure the Oracle server to be used in a cluster with grid infrastructure.

It’ll take four steps to configure the Oracle database to be accessible via **Database Proxy** in Segura, this document is the **first step**.

![EN_cluster_step1.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/EN_cluster_step1.png){height="" width=""}

:::(warning) (**Attention**)
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured with minimum version 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with Segura on ports 1521 and 2484.
* Database client installed.
    * Dbeaver, minimum version: 23.1.0
    * SQLPlus, minimum version: 21.0.0.0.0
    * SQL Developer, minimum version: 23.1.0.097
* Don’t have filters enabled for the certificate.

---
## Configure the wallet for Clustered Oracle
Oracle GRID has problems with certificates generated via openssl that need to be signed by a CA due to the parameter `set_serial`, which is mandatory but creates an inconsistency in the identification of the CN.

Therefore, when this scenario occurs, it’s recommended that self-signed certificates be created for the database credential.

To configure the server wallet and enable TCPS, perform the steps below with a grid user:

#### Create a Server Wallet 
It’ll only be necessary to perform this step if there is no wallet.
```bash
orapki wallet create -wallet <ORACLE_WALLET_DIR> -pwd <ORACLE_WALLET_PASS> -auto_login
```

#### Add a self-signed certificate to the wallet
```bash
orapki wallet add -wallet <ORACLE_WALLET_DIR> -pwd <ORACLE_WALLET_PASS> -dn "CN=<ORACLE_SERVER>" -keysize 2048 -self_signed -validity 3650
```

#### Check wallet certificates
```bash
orapki wallet display -wallet <ORACLE_WALLET_DIR>
```

#### Create self-signed certificate from DB credential
```bash
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout <CREDENTIAL>.key -out <CREDENTIAL>.crt -subj "/CN=<CREDENTIAL>"
```

#### Convert the certificate to .p12
```bash
openssl pkcs12 -export -out <CREDENTIAL>.p12 -inkey <CREDENTIAL>.key -in <CREDENTIAL>.crt -passout pass:<CREDENTIAL_CERT_PASS>
```

#### Import the .p12 to the wallet
```bash
orapki wallet import_pkcs12 -pkcs12file <CREDENTIAL>.p12 -pkcs12pwd <CREDENTIAL_CERT_PASS> -wallet <ORACLE_WALLET_DIR> -pwd <ORACLE_WALLET_PASS>
```

#### Check wallet certificates
```bash
orapki wallet display -wallet <ORACLE_WALLET_DIR>
```

#### Edit the files to point to the wallet and enable TCPS
```bash
vim /u01/app/oracle/product/19.0.0/dbhome_1/network/admin/sqlnet.ora
vim /u01/app/oracle/product/19.0.0/dbhome_1/network/admin/listener.ora
```

#### Restart listeners and the Scan service
```bash
srvctl stop listener -l listener
srvctl stop scan_listener
srvctl stop scan

srvctl start scan
srvctl start scan_listener
srvctl start listener -l listener

lsnrctl status
```

After finishing the first step, access the [How to configure a device in Segura to use the Database Proxy with Oracle](/v4/docs/pam-session-how-to-configure-a-device-in-senhasegura-to-use-the-database-proxy-with-oracle-cluster) document to perform the second step and continue the configuration.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.