# How to make an SSH connection via Terminal Proxy

In this document, you’ll find a step-by-step guide on how to make an SSH connection via Terminal Proxy.

## Requirements

* Have a command prompt-type application installed on the machine.

---

## SSH connection
To make an SSH connection to a device that has this connectivity linked to a valid credential, you’ll need to run the command `ssh` followed by the credential and device as is done in a standard SSH connection. Follow the steps below:

1. Open the **command prompt** app of your preference.
2. Enter the following command to enter the vault:
    1. `ssh senhasegura_user@senhasegura_vault`
        :::(info) (**Info**)
        The `senhasegura_user` field is the username used to access the vault. The `senhasegura_vault` field can be the hostname or IP address of the vault to be accessed.
        :::
    2. Press the Enter key.
    :::(info) (**Info**)
    When accessing the device for the first time, a reliability warning will be displayed, type `yes` and press the Enter key. The warning will no longer be displayed the next time this device is accessed.
    :::
6. Enter your password.
    1. Press the **Enter** key.
        :::(warning) (**Attention**)
        When your password is reset or expires, the terminal will display a message warning that the password needs to be changed and display the steps that the user must take to register a new password through the web interface.
        :::
7. The **senhasegura shell** home screen will be displayed.
8. Type `list` so that the list of available credentials and devices is displayed.
    :::(info) (**Info**)
    If you already know the credential (username) and the device (hostname or IP) that you want to access, it’s not necessary to use the command `list`.
    :::
9. After choosing, type:
    1. `ssh credencial@target_device` (hostname or IP address).
    2. Press the **Enter** key.

After these steps, the connection via SSH to a device is ready for use.

---
## Multi-tenant access
Multi-tenant access is only possible through Proxy 2.0. To enable it, access the document [How to manage proxy settings - Enable Proxy 2.0](/v3-33/docs/orbit-cli-how-to-manage-the-proxy-system-settings) to perform this action.

:::(warning) (**Attention**)
If the tenant isn’t informed, the system will consider the senhasegura tenant.
:::

#### Connection to the proxy terminal with single-tenant:
`senhasegura_user@senhasegura_vault`

#### Connection to the proxy terminal with multi-tenant:
`senhasegura_user%tenant_name@senhasegura_vault`

---
## Access using Proxy 2.0
When accessing a device with **more than one** connectivity type registered through Proxy 2.0 using Terminal Proxy, users will be presented with a protocol selection screen, the options being SSH or Telnet.

1. Follow the steps described in the SSH Connection section.
2. On the senhasegura shell home screen, type in the desired connectivity option:
    1. SSH port **22**, type `1`, and press **Enter**.
    2. Telnet port **23**, type `2`, and press **Enter**.
3. After choosing, type:
    1. `ssh credential@hostname` or `ssh credential@IP` for SSH connectivity.
    2. `telnet credential@hostname` or `telnet credential@IP` for Telnet connectivity.
4. Press **Enter**.

After these steps, the connection to a device is ready for use.

---
## Access using SSH key
There is also the possibility of accessing with SSH keys, using the following syntax according to the desired access, replacing the strings with the values ​​described in the table below.
:::(info) (**Info**)
To learn how to configure SSH keys, access the documents on this topic available at [SSH Keys](/v3-33/docs/pam-how-to-set-up-an-ssh-key).
:::
**String**|**Description**
|---|---|
`ssh_key_name`|Name of the credential registered via SSH key.
`senhasegura_vault`|Hostname or IP address of the senhasegura vault.
`target_device`|Hostname or IP address of the device you want to access.

#### Instance access:
`ssh ssh_key_name@senhasegura_vault`

#### Access to another device:
:::(warning) (**Attention**)
When accessing another device with an SSH key, always use the word `key\`.
:::
`ssh key\ssh_key_name@target_device`

#### Access to another device or when a key and credential have the same name.
`ssh key\ssh_key_name@target_device`

:::(warning) (**Attention**)
Depending on the operating system used, the use of the backslash ( \ ) is necessary for the command to work correctly.
:::

To access the target device in applications that don’t provide interactive prompts or if you don’t want to go through the senhasegura shell screen, use the Multihop. Access the specific documentation to learn how to make this type of connection.

The senhasegura Terminal Proxy also offers other types of connections, such as:

* [SSH Multihop connection via Terminal Proxy](/v3-33/docs/pam-session-how-to-make-an-ssh-multihop-connection-via-terminal-proxy)
* [TELNET connection via Terminal Proxy](/v3-33/docs/pam-session-how-to-make-a-telnet-connection-via-terminal-proxy)
* [Transfer files in Terminal Proxy sessions via SFTP](/v3-33/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp)
* [Transfer files in Terminal Proxy sessions via SCP](/v3-33/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp)

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.