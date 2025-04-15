# How to rotate credential passwords related to Windows Task Manager

With senhasegura, you can automatically and securely rotate credentials associated with tasks scheduled in the Windows Task Scheduler. This functionality is particularly important to ensure that critical credentials are kept secure and updated regularly without manual intervention.

## Requirements

* Windows RM enabled.
    * For more information on Windows Remote Management (Windows RM), visit the document [Using Windows Remote Management](https://learn.microsoft.com/en-us/windows/win32/winrm/using-windows-remote-management).
* Two credentials properly registered with senhasegura:
    * One credential must be registered as a domain credential and be directly linked to the domain controller.
        * For more information on how to create a domain credential in senhasegura, access the document [How to use domain credentials](/v3-32/docs/pam-how-to-use-domain-credentials).
    * A credential must be local and related to the target device.
        * For more information on how to create a credential in senhasegura, visit the document [How to setup up a credential in senhasegura](/v3-32/docs/pam-how-to-set-up-a-credential-in-senhasegura).
* The device must enable Windows RM connectivity on port 5985 (HTTP) or 5986 (HTTPS).
    * For more information on how to register new devices, visit the document [How to manage devices](/v3-32/docs/pam-how-to-edit-clone-disable-or-reactivate-a-device).

## Register the template for automatic password changes

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Executions**.
2. In the sidebar, select **Settings > Templates**.
3. In the **Execution Templates** report, on the top bar, click on **View actions**, represented by the three vertical dots, and select **New** from the drop-down menu.
4. In the **Execution Template** window, fill in the fields:
    1. **Name**: a name for the password rotation template.
    2. **Enabled**: select **Yes** to create the template active in senhasegura.
    3. **Executor**: in the drop-down menu, select **Windows - RM**.
    4. **Execution type**: from the drop-down menu, select **Change password**.

In the text field called **Content**, type the following:

```
!unsecure

# List the tasks and rotate the password

powershell schtasks.exe /query /s localhost /V /FO CSV | ConvertFrom-CSV | Where-Object 
{ 
    $_."Executar como usuário" -eq "[#USERNAME#]" 
} | ForEach-Object 
{ 
    Set-ScheduledTask -TaskName $_.TaskName -User [#USERNAME#] -Password [#NEW_PASSWORD#] 
}
```
The `!unsecure` statement will only be used in cases where the connection uses the HTTP protocol.

5. Click **Save**.

## Enable password rotation
You must configure the local credential - linked to the device - to perform the automatic password change (rotation). To do this, follow the steps below:

1. Access your local credential through **Grid Menu > PAM Core > Credentials > All**.
2. Locate the local credential you created. 
3. In the **Action** column, click on the three vertical dots and select **Edit** from the drop-down menu.
4. In the **Credential** window, on the **Execution Settings** tab, configure the following fields:
    1. **Parent credential**: in the drop-down menu, select the previously created domain credential.
    2. **Change template**: in the drop-down menu, select the template created in the previous step.
    3. **Authentication settings**: uncheck the **Use own credential to connect** option and, in the drop-down menu, select the domain credential you created earlier.
5. Click **Save**.

From now on, when senhasegura changes a domain credential's password, the tasks' passwords will be updated sequentially, ensuring that they are all updated with the same password.

You can check the task's execution in the **Operations** report, which is available through **Grid Menu > Executions > List operations**.

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

