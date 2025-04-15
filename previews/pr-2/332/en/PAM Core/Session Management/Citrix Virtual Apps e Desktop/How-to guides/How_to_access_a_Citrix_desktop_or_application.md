# How to access a Citrix desktop or application

In this document, you’ll find a step-by-step guide on how to access a Citrix desktop or application.

:::(warning) (**Attention**)
To be able to access it, you must have completed the steps in the previous docs about Citrix Bridge Server.
:::

## Requirements

* Create a `C:\senhasegura_share` folder on the user's workstation to facilitate file sharing.

---
## Access the desktop or application

1. On the user's workstation, launch the **Remote Desktop Connection** application.
2. In the **General** tab, in the **Login Settings** section fill in the following fields:
    1. **Computer**: IP address or URL of the senhasegura server.
    2. **Username**: fill in the connection string in the format `senhasegura_user[citrix_bridge_server_user@citrix_bridge_server_ip]`
3. In the **Local Resources tab**, in the Local devices and resources section, uncheck the **Printers** option.
    1. Click **More**. 
    2. Click on the addition icon of the **Units** option for it to be expanded.
        1. Select the `C:` unit.
    3. Click **OK**.
4. Click **Connect**.
5. After connecting on the home screen, in the Select an access option field, select the application configured to run, and click Access.

After these steps, the remote session will start with the configured application running.

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.