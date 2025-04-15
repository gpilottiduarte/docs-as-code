## Requirements

* Linux dependencies and versions are listed on the page [Getting started.](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-linux-getting-started)
* Administrative permission on the user's workstation.
* Users must have a user with the same username on the senhasegura platform.
* When installing GO Endpoint Manager for Linux, it is necessary to restart the machine.

Info✔ If necessary, see the article [Add a user.](https://docs.senhasegura.io/v3-33/docs/en/user-management-add-system-administrator)



---

## Install

After you meet all the requirements, you can start the installation.

## Shell

### Step (1/7\) \- Get the installer

1. Go to the [PAM Solution portal.](https://suporte.senhasegura.com.br/en/support/solutions/articles/22000270153-go-endpoint-manager-for-linux-pedm-)
2. Select the agent version that is compatible with your version of the senhasegura platform.
3. Download the agent that is compatible with your operating system.

CautionIf you want to use the solution on another unavailable Linux\-based operating system, please contact the support team to receive system\-specific instructions.### Step (2/7\) \- Validate the URL

1. Access the senhasegura platform.
2. Go to**Orbit Config Manager➔Settings➔Application.**
3. Fill in the application URL field with the URL of the senhasegura server. **Example:** https://senhasegura.mycompany

### Step (3/7\) \- Start the installation

1. Log in to your Linux machine.
2. Run the following command to install GO Endpoint Manager for Linux.

ShellShell
```
root@debian: sudo /bin/bash secpack-installer-3.28.0-0_distro.run

$ Verifying archive integrity... 100% MD5 checksums are 0K. All good. 

$ Uncompressing senhasegura security package 100% 

$ Verifying archive integrity... 100% MD5 checksums are 0K. All good. 

$ Uncompressing caitsith-installer 100% 

$ Uninstalling previous version of kernel module... 0K 

$ Building and installing kernel module.. .OK 

$ Installing caitsith—tools... 0K $ Installing debian packages... 

$ Packages installed successfully! 

$ senhasegura security pack v3.28.0—5 

$ Enter the license code:
```
Copy### Step (4/7\) \- Generate an installation key

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Settings➔Installers.**
3. Click the blue footer button **Installation Key.**
4. In the Client field, select **PEDM Linux.**
5. Copy the text from the generated user license into the**Installation Key**field.
6. You can choose to download the license by clicking**Download.**

### Step (5/7\) \- Activate GO Endpoint Manager

1. Log in to your Linux machine.
2. After the Start installation step.
3. Enter the copied key when **"Enter license code:"**is displayed.
4. Click **Enter.**
5. After entering the key, you should see this message**"Installation complete!".**

### Step (6/7\) \- Approve a workstation for installation

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔General➔Workstations.**
3. Find the workstation you install the agent.
4. Go to the action column **⁝**
5. Click the **Authorize option.**
6. Type the following command in Linux. You should see this message:

ShellShell
```
root@debian: sudo secpack-register
senhasegura security pack v3.28.0-0
Workstation already registered!
```
Copy### Step (7/7\) \- Approve the user for installation

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔General➔Users.**
3. Find the user related to a workstation where the agent is installed.
4. Go to the action column **⁝**
5. Click on the **Authorize option.**
6. Click Yes to authorize.
7. You can define an **Expiration Date** on the **Authorize Local User Usage** screen. (not mandatory field)
8. Click **Save.**



---

## 

## Related articles

Learn more about GO Endpoint Manager for Linux:

* [Introduction](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-linux-introduction)
* [Getting started](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-linux-getting-started)
* [New rule](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-linux-policies-general)



---

## Troubleshooting

If you encounter any issues, you can try the following articles:

* [Failure in the implementation of access policies](/v3-33/docs/go-endpoint-manager-linux-failure-implementation-policies).
* [Error messages when recording sessions](/v3-33/docs/go-linux-troubleshooting-error-message).

Still not able to find your answer? Send your question to our[senhasegura Community.](https://community.senhasegura.io/)

