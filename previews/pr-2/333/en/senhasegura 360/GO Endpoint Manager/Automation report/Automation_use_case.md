# Automation use case

In this article, you’ll  learn about an automation use case:  how to register RemoteApp automation for SQL Management Studio to use on GO Windows.

:::(Warning) (Caution)
RemoteApp automations become visible to users exclusively when they are members of the access group associated with the credential required for utilizing the RemoteApp.
:::

* * *

## Step 1: Register RemoteApp

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **PAM Core.**
2. Select **Settings ➔ Access ➔ RemoteApp.**
3. Locate through the search field the automation with the name “SQL Management Studio - SQL Authentication” and click in **Filter.**
4. In column **Action**, click  the **Edit** icon, identified by the pen and paper icon.
5. Edit the **Application path** field, as per your application path. This path differs depending on the installed version.
6. Click **Save.**

:::(Warning) (Caution)
The parameter **-P [password]** only works on SSMS versions prior to 18.0.
:::

* * *

## Step 2: Create credential to add RemoteApp

### Requirement

* Register the [device](https://docs.senhasegura.io/v3-33/docs/pam-devices-management#add-a-new-device) where the automation will run.

:::(Info) (Info)
If the credential already exists, edit it by adding the previously edited RemoteApp automation.
:::

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **PAM Core.**
2. Access **Credentials ➔ All.**
3. Click the actions menu on **+New.**
4. Fill in the form fields **Credential registration.**
    1. Fill with **Username** accessing the device.
    2. Select which password **Type** between the options, **Domain User**, **Local administrator**, or **Local User.**
    3. **Domain:** fill in the device domain if you have one.
    4. **Device:** select the device where the automation will run.
    5. **Additional information:** add other important information.
    6. **Status:** define if this credential will be active or not.
    7. **Password:** fill in the password with which you access the device.
    8. **Tags:** define tags to assist in the search for the credential.
5. Go to the tab **Session settings.**
6. Click in **Automation macro (RemoteApp)+.**
7. Add the automation you created.
8. Click **Save.**

:::(Info) (Info)
User interaction is blocked until the automation finishes running.
:::

* * *
## Run automation

1. Access the workstation desktop.
2. start the application **GO Automation.**
3. Select the automation you want to run.
4. Right-click the automation and then click **Execute.**
5. Select the credential that will be used to run the automation.
6. Wait for the automation to run.

* * *

Do you still have questions? Reach out to the [senhasegura Community.](https://community.senhasegura.io/){target="_blank"}

