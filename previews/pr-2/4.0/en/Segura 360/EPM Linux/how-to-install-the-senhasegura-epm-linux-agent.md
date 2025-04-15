# How to install the Segura EPM Linux agent

## Requirements

* Debian 7 or later.  
* `dkms` package installed.

## Installation best practices

:::(Info) (Info)
- It's recommended that you make a backup or snapshot of your device's data in order to receive the EPM for Linux installation. Some kernels are customized or contain unknown drivers that may affect the behavior of this solution.  
- To use the solution on another Linux-based operating system, contact the support team for system-specific instructions.
:::

To ensure a successful installation, check the installed versions by running the commands:

- `uname -r`, to check the name and version of the current kernel on the machine.  
- `ls -la /usr/src/kernels`, to list which source kernels are installed on the machine. Note that there must be a kernel with the same name and version as the one obtained with the previous command.  
  * If this command doesn't return any kernels or displays the error that the folder in question doesn't exist, use the `command dpkg -l | grep linux-image`.  
- `ls -la /boot`, to list the boot files needed by Linux. Note that there must be a file with the same name and version as the kernel obtained in the previous commands.

## EPM Linux compatibility

Segura also supports **Red Hat (versions 7.9 and 8.9), SUSE, and CentOS (version 6\)**. You'll need the following packages for SUSE and Red Hat distros: kernel-devel, perl, and dkms.

:::(warning) (Caution)  
The CentOS operating system has been officially discontinued and will no longer receive security updates and official support. Access the [official documentation](https://www.centos.org/) for more information on the migration process and alternatives.  
:::

## Dependencies

The `dkms` package normally contains all the packages needed to use **EPM for Linux**. However, due to your company's policies, hardening processes, or the operating system used, it may be necessary to install these packages individually: gcc, make, libcurl4, libconfig9, and linux-headers. If you need to install these packages, you can follow  the instructions below:

* For **Debian-based** distros: `sudo apt install gcc make libcurl4 libconfig9 linux-headers`  
* For **Red Hat-based distros** (like **CentOS** and **SUSE**): `sudo yum install gcc make libcurl4 libconfig9 linux-headers`.

## Install the Segura EPM Linux agent

1. Access the **PAM Solution** portal.  
2. Select the version of the agent compatible with your version of Segura.  
3. Download the agent according to your distribution.

To perform the installation on Linux, type the following commands into the shell:

```shell
$ chmod +x secpack-installer-XXXXXX.run
$ sudo ./secpack-installer-XXXXXX.run
```

After running the commands, you’ll see the installation output of the **EPM Linux** agent. It should look like the one below:

```shell
SUDO Automation is in progress. Please wait...
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing Segura security package  100% 
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing caitsith-installer  100% 
Uninstalling previous version of kernel module...OK
Building and installing kernel module...OK
Installing caitsith-tools...OK
Installing PAM module...
Segura security pack v3.31.0-2
Enter the address of the vault:
```

Note that you need to enter the address of the vault where you are going to install **EPM Linux**. Enter the IP address or URL of the vault you’re using, like this:

```shell
SUDO Automation is in progress. Please wait...
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing Segura security package  100% 
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing caitsith-installer  100% 
Uninstalling previous version of kernel module...OK
Building and installing kernel module...OK
Installing caitsith-tools...OK
Installing PAM module...
Segura security pack v3.31.0-2
Enter the address of the vault: 192.168.1.1
Enter installation token:
```

Press `ENTER` to proceed with the installation.

The prompt will then indicate that you need to pass the installation token. To obtain this token, follow the steps below:

1. On Segura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares icon, and select **EPM**.  
2. In the side menu, select **Parameters**.  
3. On the **System Parameters** screen, select **EPM**.  
4. Copy the installation token available right below the **Installation Configuration** option.

Back in the Linux system, paste the installation token or type it into the prompt. You’ll get a shell message similar to the one below:

```shell
SUDO Automation is in progress. Please wait...
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing Segura security package  100% 
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing caitsith-installer  100% 
Uninstalling previous version of kernel module...OK
Building and installing kernel module...OK
Installing caitsith-tools...OK
Installing PAM module...
Segura security pack v3.31.0-2
Enter the address of the vault: 192.168.1.1
Enter installation token: 018b6d5c-8f4e-7197-9701-errew43289qwsj
```

Press ENTER to proceed with the installation. If everything goes as expected, you should see a success message at the prompt like the one below:

```shell
Adicionando grupo gonix...
Este equipamento foi registrado com sucesso.
Installing systemd service...
Installation completed!
```

## Segura EPM Linux compatibility table

| Distro | Version |
| :---- | :---- |
| **Ubuntu** | 22.4. |
| **Debian** | 7 and later. |
| **Red Hat** | 6, 7.9, and 8.9. |
| **CentOS** | 6 and later. |
| **SUSE** | 11 and 12\. |
| **Oracle Linux** | 8 and later |

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).  