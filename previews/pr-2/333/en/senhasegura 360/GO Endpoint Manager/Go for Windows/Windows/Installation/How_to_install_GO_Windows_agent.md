# How to install GO Windows agent

In this document, you will learn how to install the **PEDM Go Endpoint Manager for Windows** agent on your workstation.

## Requirements

* Dependencies and Windows versions described in the document [Requirements](/v3-33/docs/pt/go-endpoint-manager-windows-requirements).
* Administrative permission on the user's workstation.
* If there is a need to use functions that are linked to the use of PAM credentials, it will be necessary to have a user registered on the senhasegura platform with the same username as the workstation.

:::(info) (Info)
If you don't know the workstation username, open the Command Prompt and run `whoami`. If necessary, see the article [How to create a user](/v3-33/docs/pt/user-management-add-system-administrator). The minimum access profile for the user must be **password viewing.**
:::

---

:::(info) (Info)
You can install the **PEDM GO Endpoint Manager** agent via the command line, using the `miexec` command. Access the [command line installation and reinstallation guide](/v3-33/docs/pt/go-windows-cmd-installation).
:::

---

## 1. Get the installer

:::(Warning) (Warning)
After updatingsenhasegura, it is mandatory to update the agent, to ensure that both are on the same version.
:::

1. Access the [support portal](https://suporte.senhasegura.com.br).
2. Realize o login no site.
3. Find the version of the **PEDM GO Windows** client that is compatible with the version of your senhasegura.
4. In the **Link** column, click **Download** to download the **GO Endpoint Manager for Windows** installer.

---

## 2. Install the agent

1. On Windows, go to the user's desktop.
2. Access **File Explorer**, locate the **PEDM Go Windows** installer compressed folder. Example: `3.32.0.15`.
3. Extract the installer to the desired location and run it.
4. Select the installer language (not available in legacy):
	* Portuguese.
	* English.
6. Click **OK**.
7. Click **Next** to continue.
8. Read the **End User License Agreement ("EULA")** carefully. If you agree, check the *checkbox* **I accept the terms of the License Agreement** and click **Next**.
9. Choose the installation type:
	* **Complete**: this option installs all features, namely **Core, Automation** and **Vault**.
	* **Custom**: choose which features you want to install. The **Core** application is mandatory.
    	a. **Core**: consists of **Run** (**Elevation of Privilege**), **Control Panel**, **Network Adapters**, **Network Sharing** and **Uninstall**.
    	b. **Automation**: is a functionality that allows **GO Endpoint Manager for Windows** to perform automation, making it possible to authenticate installed applications or web pages accessed directly from the workstation. This automation can use the values ​​of a system credential to which the user has access or fixed values ​​defined in the configuration. You can run RemoteApp automations associated with credentials available to the user.
    	c. **Vault**: is responsible for enabling credential caching, viewing and copying credentials.
10. Click **Next**.
11. In the window that requests approval, select **Yes** to proceed.
12. Click **Finish.**

---

## 3. Ensure communication

After installation, it is necessary to relate the **PEDM GO Windows** agent with your senhasegura server, using a *bootstrap token* and the IP (or domain, in cases where DNS is configured) of the senhasegura server.

Enter the IP in the `Enter the backend address` field and the *token* in the `Enter the bootstrap token` field when running `senhasegura.go.exe` for the first time. This process is only necessary on the first access, after installation.

To find out what *token* is needed to activate the **PEDM GO Windows** agent, access the GO parameter settings through the path **Grid Menu** > **GO Endpoint Manager (New)** > **System Parameters** > **PEDM GO Windows**. The field with the token is the first parameter of the page and looks like `029a5fa8-1121-70a4-a41e-dcv2ab9oiuou`.

:::(error) (Warning)
If there is a balancer, you need to ensure that the DNS resolves to the correct IP.
:::
---

## 4. Configure approvals

Depending on previous configurations on the senhasegura platform or workstation sharing, messages may appear during the installation process. These messages indicate the need for workstation or user approval. These messages are not errors, they are part of the installation process. The most common message is 1002.

To complete the installation, follow the steps below if necessary:

1. [How to authorize or revoke a user.](/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-revoke-a-user)
2. [How to authorize or inactivate a workstation.](/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation)

### Approve user and workstation automatically

User and workstation approvals can be automated to avoid excessive interactions between the person installing the application and the administrator who must approve records on the senhasegura platform.

By default, **GO Endpoint Manager for Windows** does not have self-approval enabled, leaving this decision to the administrator.

:::(error) (Warning)
If automatic approval is enabled, any machine and user on the corporate network with a valid license can operate GO Endpoint Manager for Windows without administrator approval.
:::

To configure automatic approval, follow these steps:

1. In senhasegura, access the system parameters configuration page, using the path: **Grid Menu** > **GO Endpoint Manager** > **Settings** > **System Parameters** > **GO Windows** (for v3.31) or **PEDM GO Windows** (for v3.32).
2. Enable the following parameters:
	* **Allow self-approval of workstation links?**
	* **Allow auto-approval of all other links?**
	* **Allow self-approval of user's first link?**
4. Confirm the change and click **Save**.

---

## 5. Register user of GO in the PAM of senhasegura

If you need a user to use resources that require their credentials to be redeemed in senhasegura, it’s necessary to create this user in the senhasegura PAM. To do this, follow the steps below:

1. On senhasegura, access the **PEDM GO Endpoint Manager for Windows** user configuration page by clicking on the  **Grid Menu** represented by the nine squares and select**GO Endpoint Manager** > **Users**.
2. Select the user you want to enable the impersonation feature.
3. Click on the three vertical dots icon at the end of the line where the selected user is located.
4. Click on the **Create vault user** option to create this user in the senhasegura PAM.

For more information about the fields for creating a user in the senhasegura PAM, access the [PAM user guide](https://docs.senhasegura.io/v3-33/docs/pt/user-management-add- system-administrator).

:::(error) (Warning)
It’s mandatory that the username in Windows is identical to the one that will be registered when clicking on the **Create vault user**option, if a user is created in PAM with a name different from the username in Windows, the application won’t work as expected.
:::

---

Do you still have doubts? Contact [senhasegura Community](https://community.senhasegura.io/).
