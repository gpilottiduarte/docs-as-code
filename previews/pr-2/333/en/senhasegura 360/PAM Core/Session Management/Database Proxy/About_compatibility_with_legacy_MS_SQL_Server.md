# About compatibility with legacy MS SQL Server

By default, senhasegura's **Database Proxy** supports the following versions:

* 2016
* 2017
* 2019
* 2022 

When using the versions listed above with **MS SQL Server** in conjunction with the **DBeaver** client, no changes to the default configuration are required.

However, when using **MS SQL Server** with the **MS SQL Management Studio** client, some changes to its default configuration are necessary.

## Legacy MS SQL Server with MS SQL Management Studio

Due to differences in the pre-authentication cycle between current and legacy versions of **MS SQL Server**, only the most recent versions of MS SQL Server will be supported when using the **Database Proxy** with the **MS SQL Management Studio** client. The versions are 2022 (16.0.1125.1) and 2019 (15.0.2120.1).

If the **MS SQL Server** is used with 2017 (14.0.2060.1) legacy versions or earlier, with legacy mode active, the available tables displayed may present inconsistencies.

For more information about **MS SQL Server** versions, visit the official [link](https://learn.microsoft.com/en-us/troubleshoot/sql/releases/download-and-install-latest-updates){target=`_blank`}.

## Enabling legacy mode for Database Proxy

If it’s necessary to use the legacy version 2017 or earlier, the senhasegura **Database Proxy** has the option to enable the legacy mode in a global way, through the default configuration file located in the path `etc/senhasegura/proxy/proxy-db-mssql.conf`.

At the end of the file content, the `legacy-mode` variable is already configured with the default value of `false`. By changing this variable to `true`, the legacy mode will be enabled for all connections made via **Database Proxy** for **MS SQL Server**. 

:::(warning) (**Attention**)
With this legacy mode enabled, only legacy versions of **MS SQL Server** 2017 and/or earlier will be supported. Keep the configuration file in its original version to support versions 2019 and 2022.
:::

:::(info) (**Info**)
Any changes to the default configuration file will only take effect after restarting the **Database Proxy** for **MS SQL Server** service (proxy-db-mssql).
:::
