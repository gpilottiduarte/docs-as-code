# How to change a password with Kerberos authentication for Windows RM

In this document, you’ll find a step-by-step guide on how to perform a password change with Kerberos authentication for Windows RM.

## Requirements

* Be an administrative user with permission to create/edit templates.

---
To carry out this type of change, it’s necessary to follow the three steps described below.

### Step 1: Create the template

1. On Segura platform, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **Executions**.
2. In the side menu, select **Settings** > **Template**.
3. On the report screen, click **View actions**, represented by the three vertical dots, and select **+ New**.
4. In the window that opens, **Execution template**, fill in the fields:
    1. **Name***: write a name that identifies the template.
    2. **Enabled**: in the checkbox, select **Yes**.
    3. **Executor***: in the dropdown menu, select **Ansible**.
    4. **Execution type***: in the dropdown menu, select **Change password**.
    5. **Playbook**: in the dropdown menu, select **Windows Kerberos change password**.
    6. **Inventory**: in the dropdown menu, select **Windows-WinRM-Kerberos**.
5. Click **Save**.

A success message will be displayed and the created template will be listed in the report.

### Step 2: Modify device connectivity

1. On Segura platform, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
3. From the list, select the device that will be changed or create a new device.
    :::(info) (**Info**)
    To learn how to create or edit a device, access the [How to configure a device](/v4/docs/pam-devices-management) document.
    :::
    1. In the window that opens, **Device**, click on **Connectivity**.
        1. In the **Connectivity** field, select **SSH** and in the **Port** field, enter the port number for WinRM.
        :::(info) (**Info**)
        * The device must have SSH connectivity to the WinRM port, due to the connector that is used.
        * By default, the port values ​​suggested by Segura are: HTTP - 5985 and HTTPS - 5986.
        :::
7. Click **Save**.

Segura will display a success message.

### Step 3: Configuring the credential

1. On Segura platform, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list, select the credential that will be edited or create a new credential.
    :::(info) (**Info**)
    To learn how to create or edit a credential, access the How to configure a credential in Segura document.
    :::
    1. In the window that opens, **Credential**, click on **Information**.
    2. In the **Domain** field, select the domain that was created for this credential.
        :::(warning) (**Attention**)
        The domain that will be used for the credentials used for authentication via Kerberos demands that the domain name is in capital letters, for example: WINRM-KERBEROS. To learn how to add a new domain, access the Domain credential settings document.
        :::
    3. In the **Additional information** field, fill in the **KDC hostname** and **ADMIN_SERVER**, as shown in the example: `{ "KDC": "hostname do Kerberos", "ADMIN_SERVER": "hostname do admin do Kerberos"}`
4. Click **Save**.


Segura will display a success message.

:::(warning) (**Attention**)
The credential hostname must be the device's FQDN.
:::

The action of changing your password follows the request flow like any other type of change carried out by Segura. To perform the steps to change your password, access the [Request a password change](/v4/docs/password-change-operations) document.

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.
