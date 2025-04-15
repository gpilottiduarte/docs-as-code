# How to create the Oracle DB server Wallet

This document provides information about the step-by-step guide on how to create an Oracle DB wallet.

It’ll take six steps to configure the Oracle database so that it be accessible via Database proxy in Segura, this document is the **first step**.

![step1.alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/step1.alone.png){height="" width=""}

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
## Create an Oracle wallet
:::(info) (**Info**)
If Oracle is already configured to use a Wallet, it isn’t necessary to create a new one. In this case, you only need to create a certificate.
:::

The first wallet to be created is that of the Oracle server. This wallet is necessary to validate the certificate related to the managed credential. For this reason, it’s necessary that both are signed by the same CA.

The CA that will be used can be either a Segura internal CA, which is present in the DB Proxy configuration files, or an internal client CA. It’s crucial that the same CA is used for signing the Oracle certificate as for the credentials.

Replace the strings presented in this table with the corresponding values:

**String**|**Value**
---|---
`<ORACLE_SERVER>.key`|File name .key from Oracle server.
`<ORACLE_SERVER>.csr`|File name .csr from Oracle server.
`'/CN=<ORACLE_SERVER>'`|Oracle server name in the configuration.
`<CA>.crt`|File name .crt from CA.
`<CA>.key`|File name .key from CA.


#### Create the CA that will be used to sign Oracle certificates and credentials
:::(warning) (**Attention**)
This step is only necessary if the customer doesn’t have an internal CA, or doesn’t want to use the Segura CA.
:::

Run the following command to create the CA:
```bash
oracle$ openssl genrsa -out <CA>.key 4096
oracle$ openssl req -new -x509 -days 1826 -key <CA>.key -subj '/C=BR/OU=Class 2 Public Primary Certification Authority/O=VeriSign' -out <CA>.crt
```

#### Generate the server key and certificate from OracleDB server
Run the following command to generate the key and certificate from server:
```bash
oracle$ openssl genrsa -out <ORACLE_SERVER>.key 4096
oracle$ openssl req -new -key <ORACLE_SERVER>.key -out <ORACLE_SERVER>.csr -subj '/CN=<ORACLE_SERVER>'
oracle$ openssl x509 -req -days 730 -in <ORACLE_SERVER>.csr -CA <CA>.crt -CAkey <CA>.key -set_serial 01 -out <ORACLE_SERVER>.crt
```
:::(info) (**Info**)
The CAs files `CA.crt` and `CA.key` may originate from the user or be obtained in Segura. Regardless of which one, CAs must be inserted into Oracle.
:::

#### Convert Oracle DB certificate to pkcs12 format
Run the following command to convert the created certificate to pkcs12 format:
```bash
oracle$ openssl pkcs12 -export -out <ORACLE_SERVER>.p12 -inkey <ORACLE_SERVER>.key -in <ORACLE_SERVER>.crt -chain -CAfile <CA>.crt -passout pass:<ORACLE_CERT_PASS>
```

#### Create the Wallet OracleDB server and import the .p12 certificate into the created wallet
Replace the strings presented in this table with the corresponding values:

**String**|**Value**
---|---
`<ORACLE_WALLET_DIR>`|Path where the Oracle DB wallet will be generated. Ex: `/u01/app/wallet/<NOME_WALLET>`.
`<ORACLE_WALLET_PASS>`|Password which will be assigned to the Oracle DB wallet.
`<ORACLE_SERVER>.p12`|Name of the .p12 file generated in the previous step.
`<ORACLE_CERT_PASS>`|.p12 certificate password.


Run the following command to create a new wallet:
```bash
oracle$ orapki wallet create -wallet "<ORACLE_WALLET_DIR>" -pwd <ORACLE_WALLET_PASS> -auto_login
oracle$ orapki wallet import_pkcs12 -pkcs12file <ORACLE_SERVER>.p12 -pkcs12pwd <ORACLE_CERT_PASS> -wallet "<ORACLE_WALLET_DIR>" -pwd <ORACLE_WALLET_PASS>
```

Finishing the first step of configuring Oracle for use via Database Proxy, access the document [How to generate the database credential’s certificate and key](/v4/docs/pam-session-how-to-generate-the-database-credentials-certificate-and-key) to perform the second part and continue the configuration.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.
