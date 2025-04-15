In this article, you’ll learn how to install the GO Endpoint Manager for Windows on your Workstation.



---

## Requirements

* Dependencies and Windows versions are described in the article [Requirements.](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-requirements)
* Administrative permission on the user's Workstation.
* A user registered on the senhasegura platform with the same username as the workstation.InfoIf you don't know the workstation username, open CMD and run `whoami`.  
If necessary, see the article on [How to create a user](/v3-33/docs/user-management-add-system-administrator).The minimum access profile for the user must be **password view.**



---

## Step\-by\-step instructions

1. [Get the installer.](/v3-33/docs/go-endpoint-manager-windows-install#step-1-get-the-installer)
2. [Install the agent.](/v3-33/docs/go-endpoint-manager-windows-install#step-2-install-the-agent)
3. [Ensure communication.](/v3-33/docs/go-endpoint-manager-windows-install#step-3-ensure-communication)
4. [Generate a license to use.](/v3-33/docs/go-endpoint-manager-windows-install#step-4-generate-a-use-license)
5. [Activate the application.](/v3-33/docs/go-endpoint-manager-windows-install#step-5-activate-the-application)
6. [Configure Approvals.](/v3-33/docs/go-endpoint-manager-windows-install#step-6-configure-approvals)

Your title goes hereAlternatively, you can install **GO Endpoint Manager for Windows** with the [CMD Installation](/v3-33/docs/go-windows-cmd-installation).  
  


  




---

## Step 1: Get the Installer

CautionAfter updating the senhasegura platform, it is mandatory to update the GO Endpoint Manager for Windows to ensure that both are in the same version.1. Access [PAM Solution portal](https://suporte.senhasegura.com.br/en/support/login ).
2. Log in to the website.
3. Find the version of the GO Windows agent that is compatible with your version of the senhasegura platform.
4. In the column of **Link**, click in **Download** to download the installer of **GO Endpoint Manager para Windows.**



---

## Step 2: Install the agent

1. Go to the user's desktop.
2. Access the **File explorer** and click on the folder **Download**. Depending on the location configured to save the downloads, your folder may have a different name.
3. Extract the obtained installer files.
4. Open the folder and click on the Windows Installer package.
5. Select installer language (not available on legacy):
	1. Portuguese.
	2. English.
6. Click in **OK.**
7. Click **Next** to continue.
8. Read the **End User License Agreement ("EULA")** carefully. After reading, if you agree, select the checkbox **"I accept the terms of the License Agreement",**and click on **Next.**
9. Choose the type of installation:
	1. **Customized:**check which features you want to install. The Core option is already checked by default.
		1. **Core:** it's composed by **Execute (Elevation of Privilege)**, **Control Panel**, **Network Adapters**, **Network Sharing**, and **Uninstall**.
		2. **Automation:** is a feature that allows GO Endpoint Manager for Windows to perform automations, being possible to perform authentication on installed applications or web pages accessed directly from the workstation. This automation can use the values of a system credential to which the user has access or fixed values defined in the configuration. And permit to run RemoteApp automations associated with credentials available to the user.
		3. **Vault:** is responsible for enabling the cache of credentials, for viewing and copying the credentials.
	2. **Complete:** this option installs the features **Core**, **Automation**, and **Vault.**CautionThis option is available in the 3\.27 and higher versions.
10. Click **Next.**
11. In the window that requests approval, select Yes to proceed with the installation.
12. Click in **Save.**



---

## Step 3: Ensure communication

ImportantDuring licensing, confirm the existence of communication of the senhasegura platform and the GO Windows Agent. Before activating GO Windows, enter the URL registered on the platform (IP or DNS) in a browser and check if it opens.CautionIf you have a balancer, you need to ensure that the DNS resolves to the correct IP.1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **Orbit Config Manager.**
2. On the side menu, select **Settings ➔ Application.**
3. Verify if the URL provided in the field **Application URL** corresponds to a URL that is accessible to all Workstations that will run GO Endpoint Manager for Windows.
4. If necessary, change the address and confirm with the button **Save** in the footer.
ImportantIt’s mandatory that the field **Application URL** is filled with the protective layer **HTTPS**, otherwise, the server will be unavailable.

---

## Step 4: Generate a use license

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **GO Endpoint Manager.**
2. On the side menu, select **Settings ➔ Installers.**
3. On the right footer, click on **Installation Key.**
4. In field **Clien****t**, select **PEDM Windows.**
5. Copy the text of the generated use license in the field below.
6. You can choose to download the license by clicking **Download.**

InfoThe license file can be used if you perform a batch installation via Microsoft Active Directory.



---

## Step 5: Activate the application

1. Access the workstation desktop.
2. Click on the GO Windows application.
3. Paste the license key you got in the previous step.
4. Click **OK.**



---

## Step 6: Configure approvals

Depending on previous configurations on the senhasegura platform or on how the workstation is shared, it’s possible that messages will appear during the installation process. These messages indicate that workstation or user approval is required.

InfoThese messages aren’t errors, they’re part of the installation process. The most common message is 1002\.To complete the installation, follow the steps below if necessary:

1. [How to authorize or revoke a user.](/v3-33/docs/go-endpoint-manager-how-to-authorize-or-revoke-a-user)
2. [How to authorize or inactivate a workstation.](/v3-33/docs/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation)

### Approve user and workstation automatically

User and workstation approvals can be automated to avoid excessive interactions between the person installing the application and the administrator who must approve registrations on the senhasegura platform.

By default, GO Endpoint Manager for Windows doesn’t come with auto\-approval enabled, leaving this decision up to the administrator.

CautionIf automatic approval is enabled, any machine and user on the corporate network with a valid license can operate GO Endpoint Manager for Windows without administrator approval.To configure automatic approval, follow these steps:

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **GO Endpoint Manager.**
2. On the side menu, select **Settings ➔ Parameters ➔ go Windows.**
3. Change the following parameters to **Yes:**
	1. **Allow workstation links auto\-approval?**
	2. **Allow auto\-approval of all other links?**
	3. **Allow user first link self\-approval?**
4. Confirm the change and click **Save.**



---

## Next steps

* [Troubleshooting.](/v3-33/docs/pedm-troubleshooting)
* [Workstation report.](/v3-33/docs/go-endpoint-manager-workstations)
* [User report.](/v3-33/docs/go-endpoint-manager-users)
* [Access list.](/v3-33/docs/go-endpoint-manager-windows-application-access-lists)


---

Do you still have questions? Reach out to the [senhasegura Community.](https://community.senhasegura.io/)

