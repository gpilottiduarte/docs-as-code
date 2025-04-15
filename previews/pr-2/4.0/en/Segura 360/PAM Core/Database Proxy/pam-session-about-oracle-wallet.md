# About Oracle wallet

## What is an Oracle Wallet?

An Oracle Wallet is a set of files that act as a wallet for storing private keys, certificates and authentication credentials.

The files present in the wallet are encrypted and protected by a password to guarantee only authorized access to their content.
To learn more about Oracle Wallet, visit the [Oracle documentation](https://docs.oracle.com/cd/E92519_02/pt856pbr3/eng/pt/tsvt/concept_UnderstandingOracleWallet.html?pli=ul_d96e224_tsvt){target=`_blank`}.

## Why use an Oracle Wallet?

As it’s a secure repository of authentication credentials, the Oracle Wallet was created to solve problems related to security and credential management in Oracle environments and is commonly used to store certificates.


In the case of the Database Proxy, the authentication steps are performed using SSL, therefore the wallets are necessary to store the certificates involved at all ends.
There are two ways to create an Oracle Wallet:

* **ORAPKI**: CLI tool available on OracleDB, is only available to users who have a valid Oracle license.
* **OpenSSL**: users who don’t possess an Oracle license can use this tool to create their certificates.

## How does Oracle Database Proxy authentication work?
![autenticacao_oracle.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/autenticacao_oracle.png){height="" width=""}