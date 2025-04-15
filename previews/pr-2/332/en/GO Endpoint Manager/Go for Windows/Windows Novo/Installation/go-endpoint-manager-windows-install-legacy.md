In this article, you’ll learn how to install GO Endpoint Manager for Windows Legacy on your Workstation.



---

## Requirements

* Dependencies and Windows versions are described in the [Requirements](/v3-32/docs/go-endpoint-manager-windows-requirements) article.
* Administrative permission on the user's workstation.
* A registered user on the senhasegura platform with the same username as the workstation.InfoIf you don't know the workstation username, open CMD and run `whoami`.  
If necessary, see the [Add user](/v3-32/docs/user-management-add-system-administrator) article.The minimum access profile for the user must be**viewing passwords.**



---

## Step\-by\-step instructions

1. [Get the installer.](/v3-32/docs/go-endpoint-manager-windows-install-legacy#step-1-get-the-installer)
2. [Install the agent.](/v3-32/docs/go-endpoint-manager-windows-install-legacy#step-2-install-the-agent)
3. [Ensure communication.](/v3-32/docs/go-endpoint-manager-windows-install-legacy#step-3-ensure-communication)
4. [Generate a license to use.](/v3-32/docs/go-endpoint-manager-windows-install-legacy#step-4-generate-a-use-license)
5. [Activate the application.](/v3-32/docs/go-endpoint-manager-windows-install-legacy#step-5-activate-the-application)
6. [Configure Approvals.](/v3-32/docs/go-endpoint-manager-windows-install-legacy#step-6-configure-approvals)

Your title goes hereAlternatively, you can install **GO Endpoint Manager for Windows** with the [CMD Installation](/v3-32/docs/go-windows-cmd-installation).  




---

## Step 1: Get the installer

1. Access the [PAM Solution portal](https://suporte.senhasegura.com.br/en/support/login ).
2. Log in to the website.
3. Find the version of the GO Windows agent that is compatible with your version of the senhasegura platform.
4. In the column **Link**, click **Download** to download the installer of **GO Endpoint Manager for Windows.**

InfoThe language of the downloaded version is as per the language selected, in PAM Solutions.

  




---

## Step 2: Install the agent

1. Access the **File explorer** and click on the folder **Download**. Depending on the location configured to save the downloads, your folder may have a different name.
2. Extract the obtained installer files.
3. Open the folder and click on the Windows Installer package.
4. Click **Next.**
5. Read the **End User License Agreement ("EULA")** carefully. After reading, if you agree, select **"I accept the terms of the License Agreement",** and click on **Next.**
6. In the window that requests approval, select Yes to proceed with the installation.
7. Click**Save.**



---

## Step 3: Ensure communication

ImportantDuring licensing, confirm the existence of communication between the senhasegura platform and the GO Windows Agent. Before activating GO Windows, enter the URL registered on the platform (IP or DNS) in a browser and check if it opens.CautionIf you have a balancer, you must ensure the DNS resolves to the correct IP.1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **Orbit Config Manager.**
2. On the side menu, select **Settings ➔ Application.**
3. Verify if the URL provided in the field **Application URL** corresponds to a URL that can be accessed by all Workstations that will run the GO Endpoint Manager for Windows.
4. If necessary, change the address and confirm with the button **Save** in the footer.

ImportantYou must fill in the **Application** **URL**field with the **HTTPS** protection layer. Otherwise, the server will be unavailable.

---

## Step 4: Generate a use license

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **GO Endpoint Manager.**
2. On the side menu, select **Settings ➔ Installers.**
3. On the right footer, click on**Installation Key.**
4. In the **Client**field, select **PEDM Windows.**
5. Copy the text of the generated use license in the field below.
6. You can select it to download the license by clicking **Download.**

InfoYou can use the license file if you perform a batch installation via Microsoft Active Directory.



---

## Step 5: Activate the application

1. Access the workstation desktop.
2. Click on the GO Windows application.
3. Paste the license key you got in the previous step.
4. Click **OK.**



---

## Step 6: Configure approvals

Messages may appear during the installation process, depending on previous configurations on the senhasegura platform or how the workstation is shared. These messages indicate that workstation or user approval is required.

InfoThese messages are not errors and are part of the installation process. The most common message is 1002\.To complete the installation, follow the steps below, if necessary:

1. [How to authorize or revoke a user.](/v3-32/docs/go-endpoint-manager-how-to-authorize-or-revoke-a-user)
2. [How to authorize or inactivate a workstation.](/v3-32/docs/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation)

### Approve user and workstation automatically

User and workstation approvals can be automated to avoid excessive interactions between the person installing the system on the workstation and the administrator who must approve registrations on the senhasegura platform.

By default, GO Endpoint Manager for Windows doesn’t come with auto\-approval enabled, leaving this decision up to the administrator.

CautionIf automatic approval is enabled, any machine and user that is on the corporate network with a valid license is allowed to operate GO Endpoint Manager for Windows, without the need for administrator approval.1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **GO Endpoint Manager.**
2. On the side menu, select **Settings ➔ Parameters ➔ go Windows.**
3. Change the following parameters to **Yes**:
	1. **Allow self\-approval of the workstation links?**
	2. **Allow self\-approval of all other links?**
	3. **Allow self\-approval of the user's first link?**
4. Confirm the changes and **Save**.



---

## Next steps

* [Workstation report.](/v3-32/docs/go-endpoint-manager-workstations)
* [User report.](/v3-32/docs/go-endpoint-manager-users)
* [Access list.](/v3-32/docs/go-endpoint-manager-windows-application-access-lists)


---

Do you still have questions? Reach out to the [senhasegura Community.](https://community.senhasegura.io/)

