# How to start a Database Proxy Oracle session with SQL Developer on Linux

In this document, you’ll find a step-by-step guide on how to use the SQL Developer manager on the Linux operating system in a Database Proxy session.

:::(error) (**Important**)
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from [Database Proxy for Oracle - Setup guide](/v4/docs/pam-session-oracle-database-configurations) to carry out the necessary steps.
:::

## Requirements

* Download version 21.8 of [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Download the latest version of [Oracle sqlcl](https://www.oracle.com/br/database/sqldeveloper/technologies/sqlcl/){target=`_blank`}
* Download the latest version of [SQL Developer](https://www.oracle.com/database/sqldeveloper/technologies/download/){target=`_blank`}
* Install on the client the package: instantclient-basic

---
## Start a session with SQL Developer application

After downloading the packages, extract them both to the same folder.

:::(warning) (**Attention**)
For access via the Linux operating system, in addition to the steps below, this step must be followed where the path of the Instant Client must be pointed to the `PATH` variable, and an environment variable `TNS_ADMIN` must be created that points to the `.ora` files folder.
:::

1. Open the application **SQLDeveloper**.
2. On the home screen, in the upper-left corner, click the **plus sign**, **New connection**.
3. In the pop-up window that opens, **Select Database Connection**, fill in the information:
    1. **Name**: add a name for the connection.
    2. **Database Type**: Oracle.
    3. On the **User Information** tab, on the **Authentication Type** field select the **SO** option.
    4. On the **Connection Type** field, select the **Custom JDBC** option.
4. On the **Details** tab, fill in the **Customize JDBC URL** field with the following information.
    1. `jdbc:oracle:oci:/@<identifier>`
        :::(info) (**Info**)
        Replace with the identifier entered in the `tnsnames.ora` file.
        :::
5. Click **Test**.
6. After the test, the message will appear in the bottom left corner **Status: Successful**.
7. Click **Connect**.

Once this is done, the user can connect to the Oracle database through the Segura Database Proxy.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.