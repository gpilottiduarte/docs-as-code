# Database Proxy

This document contains detailed information about the function and purpose of using a **Database Proxy** on Segura.

## Database Proxy connection
A **Database proxy** is a type of custom database reverse proxy. It takes requests from clients such as web applications and forwards them to a database server using database-specific settings.

:::(warning) (**Attention**)
The **Database Proxy** is limited to 2.000 simultaneous connections. This limit can be changed, but this means a significant increase in memory provisioning, considering each slot uses 64kb of memory. To change this limit, reach out to the Segura support team.
:::

## Using at Segura platform
At Segura, the **Database Proxy** will be able to perform a session from a given database management system, performing the proxy between the database and the session.
Allowing the use of an SQL client to execute sessions with the following functions:

* Query filters.
* Notifications.
* Audit.

The proxy database will have new connectivity types for credentials, such as:

* MS SQL Server.
* PostgreSQL.
* Oracle.

:::(Info) (**Info**)
The Oracle database has specific configurations. Access the [Oracle database configuration](/v4/docs/pam-session-oracle-database-configurations) documents to perfom this configuration.
:::

These are currently the databases approved by Segura.

**Database**|**Version**|**Client**
|---|---|---|
Microsoft SQL Server*|Starting from Microsoft SQL Server 2016.| SQL Server Management Studio 19.1.56.0 and DBeaver 23.1.0
PostgreSQL|PostgreSQL 15.3|PG Admin 4 v7.3 and DBeaver 23.1.0
Oracle|Oracle Version 19.0.0.0.0|SQL*Plus Release 21.0.0.0.0, SQL Developer Version 23.1.0.097 - Build 097.1607 and DBeaver 23.1.0

:::(warning) (**Attention**)
*Due to driver compatibility, the Database Proxy can’t be used with versions **prior to SQL Server 2012**.
:::

In future versions, other databases will be added.

## Logs generated

For the Database Proxy, the logs generated from the session will be available in the [Session Events](/v4/docs/auditing-session-events) report, which records the events that occurred during a Database Proxy session. If the session includes [commands registered for auditing](/v4/docs/pam-session-how-to-register-new-audited-command), these will be displayed in the report. However, if the command wasn't registered, the report will only record the beginning and the end of the session.

In the video logs of Database Proxy sessions, when queries on database tables are performed, the results aren’t visible to the auditor. This is for information security. The log will only record the input of successful queries, in some cases, with the number of rows that the query returned or the query blocked by an audited command.

**Text logs** won’t be generated for any session using the Database Proxy.

:::(error) (**Important**)
From version 3.31 onwards, the Database Proxy **is automatically configured** and is ready to be used. If your database uses specific port numbers, different from the default number, access the [How to modify Database Proxy port number](/v4/docs/pam-session-how-to-set-up-a-database-proxy) document, to make the change.
:::