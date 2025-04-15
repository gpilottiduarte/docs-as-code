# How to make a TELNET connection via Terminal Proxy

In this document, you’ll find a step-by-step guide on how to make a **TELNET** connection via **Terminal Proxy**.

## Requirements

* Have a command prompt-type application installed on the machine.

---
## Telnet connection
To make a TELNET connection to a device that has this connectivity linked to a valid credential, you’ll need to execute the `telnet` command followed by the credential and device. Follow the steps below:

1. Open the **command prompt** application of your preference.
2. Enter the following command to enter the vault:
    1. ` ssh senhasegura_user@senhasegura_vault`.
        :::(info) (**Info**)
        The `senhasegura_user` field is the username used to access the vault. The `senhasegura_vault` field can be the hostname or IP address of the vault to be accessed.
        :::
    2. Press the Enter key.
        :::(info) (**Info**)
        When accessing the device for the first time, a reliability warning will be displayed, type `yes` and press the Enter key. The warning will no longer be displayed the next time this device is accessed.
        :::
3. Enter your password.
    1. Press the Enter key.
4. The senhasegura shell home screen will be displayed.
5. Type `list` so that the list of available credentials and devices is displayed.
    :::(info) (**Info**)
    If you already know the credential (username) and the device (hostname or IP) that you want to access, it’s not necessary to use the command `list`.
    :::
6. After choosing, type:
    1. `telnet credential@target_device` (hostname or IP address).
    2. Press the Enter key.

After these steps, the TELNET session via Terminal Proxy into the desired device will have been started and ready for use.

The senhasegura Proxy Terminal also offers other types of connections, such as:

* [SSH connection via Terminal Proxy](/v3-32/docs/pam-session-how-to-make-an-ssh-connection-via-terminal-proxy).
* [Multihop SSH connection via Terminal Proxy](/v3-32/docs/pam-session-how-to-make-an-ssh-multihop-connection-via-terminal-proxy).
* [Transfer files in Terminal Proxy sessions via SFTP](/v3-32/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp).
* [File transfer in Terminal Proxy sessions via SCP](/v3-32/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp).

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.