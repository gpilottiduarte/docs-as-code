# How to start a Database Proxy Oracle session with DBeaver on Windows

This document will guide you through a step-by-step process on how to use the DBeaver manager in a Database Proxy session on Windows.

:::(error) (**Important**)
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from [Database Proxy for Oracle - Setup guide](/v4/docs/pam-session-oracle-database-configurations) to carry out the necessary steps.
:::


### Requirements

* Download the latest version of Instant Client - [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Download the latest version of DBeaver - [Dbeaver](https://dbeaver.io/download/){target=`_blank`}
---

---
## Star session at the DBeaver app

1. Open the **DBeaver** app.
2. On the main screen, in the left top corner, click on the icon represented by the plug and the plus sign.
3. On the pop-up window that opens, **Connect to a database**, select **Oracle**.
4. Click **Next**.
5. Click **Driver Settings**. 
6. At **Libraries** tab.
    1. replace the default library for the ones acquired at **Instant Client**.
7. Click **OK**.
8. At **DBeaver** folder, create a file named **start-dbeaver.bat** to declare the variables and open the DBeaver.
9. On the created file, type:
  
```json
chcp 65001 

set Path=C:\Program Files\Common Files\Oracle\Java\javapath;C:\windows\system32;C:\windows;C:\windows\System32\Wbem;C:\windows\System32\WindowsPowerShell\v1.0\;C:\windows\System32\OpenSSH\;C:\Program Files\PuTTY\;C:\Program Files (x86)\Yarn\bin\;C:\Program Files\nodejs\;C:\Program Files\Amazon\AWSCLIV2\;C:\Program Files\Meld\;C:\Users\user1\AppData\Local\Microsoft\WindowsApps;C:\Users\user1\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\user1\AppData\Local\Programs\Git\cmd;C:\Users\user1\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;C:\Users\user1\Documents\instantclient_21_10 set TNS_ADMIN=C:\Users\user1\Documents\dbproxy\ora-files 

dbeaver
```
10. Save this file as **start-dbeaver.bat**
11. With this file, execute a **custom** connection at the DBeaver app.
12. On **Connection settings** > **Principal** > **Custom**, fill in the information on the fields:
    1. **JDBC URL Template**: `jdbc:oracle:oci/@<ORACLEDB_HOSTNAME>`
    2. **Authentication**: choose the desired option.
        :::(warning) (**Attention**)
        If the **Oracle Database Native** option is selected, the **username** and **password** fields must remain empty. Filling in these fields will cause a connection error.
        :::

13. Click **Ok**.

Once this is done, the user can connect to the Oracle database through the Segura Database Proxy.

---
## Next:
[How to start a Database Proxy Oracle session with DBeaver on Linux](/v4/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux)

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.