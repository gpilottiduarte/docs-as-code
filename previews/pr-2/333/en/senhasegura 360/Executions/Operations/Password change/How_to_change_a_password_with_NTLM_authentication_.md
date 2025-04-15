# How to change a password with NTLM authentication for Windows RM

In this document, you’ll find a step-by-step guide on how to perform a password change with NTLM authentication for Windows RM.

## Requirements

* Be an administrative user with permission to change password.

To carry out this type of change, it’s necessary to follow the two steps described below.

## Step 1: Create the template

1. On senhasegura platform, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **Executions**.
2. In the side menu, select **Settings** > **Template**.
3. On the report screen, click **View actions**, represented by the three vertical dots, and select **+ New**.
4. In the window that opens, **Execution template**, fill in the fields:
    1. **Name***: write a name that identifies the template.
    2. **Enabled**: in the checkbox, select **Yes**.
    3. **Executor***: in the dropdown menu, select **Ansible**.
    4. **Execution type***: in the dropdown menu, select Change Password.
    5. **Playbook**: in the dropdown menu, select **Windows NTLM change password**.
    6. **Inventory**: in the dropdown menu, select **Windows-WinRM-NTLM**.
5. Click **Save**.

A success message will be displayed, and the template created will be listed in the report.

## Step 2: Modify device connectivity

1. On senhasegura platform, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
    1. From the list, select the device that will be changed or create a new device.
        :::(info) (**Info**)
        To learn how to create or edit a device, access the [How to configure a device](/v3-33/docs/pam-devices-management) document.
        :::
    2. In the window that opens, **Device**, click on **Connectivity**.
    3. In the **Connectivity** field, select **SSH** and in the **Port** field, enter the port number for WinRM.
        :::(info) (**Info**)
        * The device must have SSH connectivity to the WinRM port, due to the connector that is used.
        * By default, the port values ​​suggested by senhasegura are: HTTP - 5985 and HTTPS - 5986.
        :::
3. Click **Save**.


senhasegura will display a success message.

The action of changing your password follows the request flow like any other type of change carried out by senhasegura. To perform the steps to change your password, access the [Request a password change](/v3-33/docs/password-change-operations) document.

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.
