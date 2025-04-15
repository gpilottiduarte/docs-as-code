# How to install the GO Windows client via CMD

This document provides information for installing the **GO Endpoint Manager** *client* from the command line, using the `msiexec` command, in the Microsoft Windows operating system.

:::(Warning) (Warning)
When uninstalling PEDM GO Windows, the password configuration information and the senhasegura vault address remain stored in the `IsolatedStorage` folder. Therefore, there is no need to reconfigure them after reinstalling the agent. If you wish to perform a new installation of PEDM GO Endpoint Manager and need to reconfigure the senhasegura token and server address, you must delete the `IsolatedStorage` folder, located in `C:\ProgramData\IsolatedStorage`.
:::

To install the **GO Endpoint Manager** *client* using the `msiexec` command, follow the steps below:

1. Open Command Prompt, PowerShell or Bash, on Windows, in the folder where the installer (`.msi` file) of senhasegura.go is stored and execute the command:

```shell
msiexec /i "<senhasegura.go.v.3.32.0.7.msi>" /passive TOKEN=<token> URL=<IP or domain name> ADDLOCAL=Pedm,Vault,Automation /l log.txt
```

Remember to replace the values ​​indicated by the greater than and less than signs `<>`:

1. Replace `<senhasegura.go.v.3.32.0.7.msi>` with the full name of the GO installer file, and keep the quotation marks.
2. Replace `<token>` with the installation key, available in senhasegura, on the GO Endpoint Manager parameters configuration page.
3. Replace `<IP or domain name>` with the IP address of the senhasegura server, or with the domain name (when DNS is configured).

## Reinstallation

When executing the command suggested above, a folder called `IsolatedStorage`, which stores the token and the IP of the senhasegura server, will be created in `C:/ProgramData/`.

Therefore, it isn’t necessary to enter the token or the senhasegura IP during reinstallation.

To ensure a complete reinstallation, use the `REINSTALLMODE=AS` parameter:

```shell
msiexec /i "<senhasegura.go.v.3.32.0.7.msi>" /passive ADDLOCAL=Pedm,Vault,Automation /l log.txt REINSTALLMODE=AS
```

## About installation and reinstallation command parameters

| Parameter                   	| Description                                                                                                                           	  |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `/i`                     	      | Specifies the `msiexec` installation function.                                                                                            |
| `<senhasegura.go.v.3.32.0.7.msi>` | Full name (with specified version) of the senhasegura.go client installer file.                                                           |
| `/passive`               		| Establishes passive installation, which need for user interaction.                                                                        |
| `TOKEN`                  		| Installation key to relate the senhasegura.go that is being installed with the senhasegura configuration platform.                        |
| `URL`                    		| IP or domain (if DNS is configured) of the senhasegura platform server.                                                                   |
| `ADDLOCAL`               		| Parameter for defining which senhasegura.go client modules will be installed. `Pedm` is mandatory, `Vault` and `Automation` are optional. |
| `/l log.txt` (optional)       	| Generates the `log.txt` file with installation records, for troubleshooting.                                                              |