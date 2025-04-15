# How to start a Database Proxy Oracle session with DBeaver on Linux

This document will guide you through a step-by-step process on how to use the DBeaver manager in a Database Proxy session on Linux.

:::(error) (**Important**)
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from [Database Proxy for Oracle - Setup guide](/v3-33/docs/pam-session-oracle-database-configurations) to carry out the necessary steps.
:::

### Requirements

* Download the latest version of Instant Client - [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Download the latest version of DBeaver - [Dbeaver](https://dbeaver.io/download/){target=`_blank`}

---
## Star session at the DBeaver app
After declaring the environment variables, the user can open DBeaver. For the connection to be of the custom type, follow the next steps:

1. Open the DBeaver app.
2. On the main screen, in the upper-left corner, click on the icon represented by the plug and the plus sign.
3. On the pop-up window that opens, **Connect to a database**, select **Oracle**.
4. Click **Next**.
5. At the **Main** > **Custom** tab fill in the field with the information:
    1. **JDB URL Template**: `jdb:oracle:oci:/@<ORACLEDB_HOSTNAME>`
6. Click on **Driver Settings**, to replace the default library for the ones acquired at **Instant Client** and for the **oraclepki.jar** file found in the **SQLcl** directory.
    1. At **Libraries** tab, add the files.
7. Click **OK**.

Once this is done, the user can connect to the Oracle database through the senhasegura Database Proxy.

---
## Next:
[How to start a Database Proxy Oracle session with DBeaver on Windows](/v3-33/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.