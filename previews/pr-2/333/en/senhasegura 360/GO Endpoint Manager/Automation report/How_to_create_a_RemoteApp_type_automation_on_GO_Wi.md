# How to create a RemoteApp type automation on GO Windows

In this article, you’ll learn how to create a RemoteApp type automation to use in the GO Windows agent.

:::(Warning) (Caution)
RemoteApp automations become visible to users exclusively when they are members of the access group associated with the credential required for utilizing the RemoteApp.
:::

* * *

## Requirement
See the table of supported masks at:

* [Masks for RemoteApp on GO Windows](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-agent-automation#m%C3%A1scaras-para-o-remoteapp-no-go-windows)

* * *

## Step 1: Create the automation

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu** and select **PAM Core.**
2. On the side menu, select **Settings ➔ Access ➔ RemoteApp.**
3. In the **Action** column, click the icon **⁝**, identified by the three vertical dots, and select the option **+New.**
4. Fill in **RemoteApp** registration:
    1. Define a **Name** that is easy to identify for automation.
    2. Select the **Type** of the option **User simulation.**
    3.  Add **Tags** to help search for automation separated by a comma ",".
    4. Mark the **Enabled** option as **Yes**.
    5. Fill in  the **Application path**, per example with the path for the application on the workstation: `C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\ManagementStudio\Ssms.exe`, `%windir%\system32\cmd.exe`, etc.
    6. Fill in the **Parameters** enclosed in double quotes, for example: `"-S [hostname] -U [username] -P [password]"`
    7. The field **Script** contains the steps that will be added in Actions.
    8. In The field **Actions**, you can add the following actions: **Wait**, **Key**, **KeyPress**, **KeyRelease**, **Text**, and **Type.**
    9. Prefill in properties with the respective field name. If necessary, fill in the value. You can save or delete the added action.
    10. **Description:** add a brief description of what this automation does and what it is used for.
5. Click the **Save** button.

* * *

## Step 2: Create credential to add RemoteApp
### Requirement

* Register the device where the automation will run.

1. On the senhasegura platform,  in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **PAM Core.**
2. On the side menu, select **Credentials ➔ All.**
3. On the **View actions** icon, select **+New.**
4. Fill in the form fields **Credential registration.**
    1. Fill in with **Username** accessing the device.
    2. Select which password **Type** between the options, **Domain User**, **Local administrator**, or **Local User.**
    3. **Domain:** fill in the device domain if you have one.
    4. **Device:** select the device where the automation will run.
    5. **Additional information:** add other important information. 
    6. **Situation:** define if this credential will be active.
    7. **Password:** fill in with the password used to access the device.
    8. **Tags:** define tags to assist in the search for the credential.
5. Go to the tab **Session settings.**
6. Click in **Automation macro (RemoteApp)+.**
7. Add the automation you created.
8. Click the **Save** button.

:::(Info) (Info)
User interaction is blocked until the automation finishes running.
:::
* * *

## Run automation

1. Access the workstation desktop.
2. Start the application **GO Automation.**
3. Select the automation you want to run.
4. Right-click the automation and then click **Execute.**
5. Select the credential that will be used by the automation script.
6. Wait for the automation to run.

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
