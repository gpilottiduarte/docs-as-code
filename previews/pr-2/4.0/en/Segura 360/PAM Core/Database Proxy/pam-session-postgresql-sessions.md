# PostgreSQL sessions

Currently for the PostgreSQL database there is one database manager approved by Segura,  **DBeaver**.

In the following article you will find the steps necessary to make the connection:

* [How to configure and start a PostgreSQL session with DBeaver](/v4/docs/pam-session-how-to-configure-and-start-a-postgresql-session-with-dbeaver)

:::(warning) (**Attention**)  
When using Database Proxy with PostgreSQL, when authorized IPs to authenticate to the PostgreSQL database server are restricted, it’s necessary to change the PostgreSQL `pg_hba.conf` file. This file contains the list of IPs that need to be authorized and **must** contain the senhasegura IPs.  
To learn how to include IPs in the file, access the [official document from PostgreSQL](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html).  
:::