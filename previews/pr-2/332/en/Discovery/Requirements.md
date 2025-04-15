# Requirements

## Windows local accounts

Settings required in the module for Windows:

- The device needs WinRM configured via HTTP (5985) or HTTPS (5986)
- senhasegura must have access to the device via Windows RM on port 5985 or 5986
- Add Lightweight Directory Access Protocol (389 or 636)
- Credential with access to run Powershell with administrative permission remotely.
- The credential must belong to the **Remote Management Users** group or have the permissions below:
    - WMI features and management features like WS-Management via Windows Remote Management.

Users in these groups are usually used to enable other users to manage servers through remote commands (via PowerShell).

The required security settings (policies) are:

- Access this computer from the network
- Add a workstation to the domain
- Bypass traverse checking
- Increase a process working set

The user must have the privilege to run the following commands:

- ComputerSystem
- PATH
- Get-ItemProperty
- Import-Module
- WebAdministration
- Where-Object
- wmic
- hostname
- NET USER/LOCALGROUP

You must also have access to the %userprofile% directory and permission to read the event log (Win32_NTLogEvent)

---

## Linux users

To perform the discovery settings in the Linux module, you will need the following requirements:

- The registered user responsible for the discovery must have permission to achieve remote access (sshd_config)
- senhasegura must have access to the SSH port of the device where the credential is located
- The **SSH client** needs to be configured on the source machine

To run the robot, you must use the following command to log into the server's ssh:

```
# orbit execution --help
Usage: orbit execution --code=STRING

Application execution process tool.

Flags:
  -h, --help             Show context-sensitive help.

  -c, --code=STRING      The Execution Process ID
  -t, --task=STRING      The Execution Task ID
  -o, --option=STRING    The Execution Process extra options
  -v, --verbose          Enable verbose mode
  -d, --debug            Enable debug mode
      --force            Force the command execution, never prompt
```

During this execution, you should pay attention to some points:

- The registered user responsible for discovering credentials must have permission (at least read) in these directories:
    - /etc
    - /home
- The registered user accountable for discovering credentials must have execution permission. Otherwise, sudo must be used

:::(info) (info)

The permission that the user has in the directory or file is what determines if the execution of commands will be possible or not.

:::


When the robot finishes executing, the results will be returned automatically.

![Untitled.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Untitled%281%29.png){height="" width=""}

:::(Internal) (Angélica)
Verificar se esse poderá entrar>>>>>>>>>>>>>>>

Permissão de execução dos comandos utilizados pelo Discovery, com sudo sem senha:

Permissão de leitura dentro do /etc

```
cat /etc/redhat-release
cat /etc/debian_version
hostname
cat /etc/shells
grep -e "^/"
cat /etc/group
cat /etc/passwd
id -g
id --groups
chage -l
cat /etc/sudoers
stat /root/
last
cat /root/.ssh/authorized_keys
ls -l /root/.ssh/
cat /usr/sbin/.ssh/authorized_keys
ls -l /usr/sbin/.ssh/

```
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
:::
