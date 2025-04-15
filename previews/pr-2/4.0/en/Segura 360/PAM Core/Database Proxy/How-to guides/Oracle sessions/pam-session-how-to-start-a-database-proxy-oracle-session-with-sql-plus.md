# How to start a Database Proxy Oracle session with SQL Plus

In this document, you’ll find a step-by-step guide on how to use the SQL Plus manager on the Windows or Linux operating system in a Database Proxy session.

:::(error) (**Important**)
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from [Database Proxy for Oracle - Setup guide](/v4/docs/pam-session-oracle-database-configurations) to carry out the necessary steps.
:::

## Requirements

* Download the latest version of [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Download the latest version of [Oracle sqlcl](https://www.oracle.com/br/database/sqldeveloper/technologies/sqlcl/){target=`_blank`}
* Download the latest version of SQL Plus, depending on the operating system used.
* Install on the client the packages: instantclient-basic and instantclient-sqlplus depending on the operating system used.

---
## Start a session with SQL Plus application on Windows

After downloading the packages, extract them both to the same folder.

The table shows the strings presented on the file and their definitions:

**String**|**Value**
---|---
`chcp 28591`|Code page for ISO-8859-1.
`SET NLS_LANG=.WE8ISO8859P1`|Sets and interprets the ISO-8859-1 encode.
`SET TNS_ADMIN=<path_file_folder>`|Specifies the path of the `tnsnames.ora` and `sqlnet.ora` files. Replace the <path_file_folder> with the correct path.
`sqlplus /@oraproxytcps`|Start sqlplus with a connection identified as oraproxytcps from `tnsnames.ora` file.

:::(warning) (**Attention**)
For access via the **Linux** operating system, in addition to the steps below, this step must be followed where the path of the Instant Client must be pointed to the `PATH` variable, and an environment variable `TNS_ADMIN` must be created that points to the `.ora` files folder.
:::

Create the following file `.bat` to initialize sqlplus.
```bash
chcp 28591
SET NLS_LANG=.WE8ISO8859P1
SET TNS_ADMIN=<path_file_folder>
sqlplus /@oraproxytcps
```
After completing these steps, to use **SQL Plus** to make the connection, double click on the `.bat` file created and the session will start.


## Start a session with SQL Plus application on Linux

For access via the operating system **Linux**, you need to ensure that the `PATH` and `TNS_ADMIN` variables point to the correct directories in the `.ora` files folder.
Once this is configured, use the string `sqlplus /@oraproxytcps` to connect.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.