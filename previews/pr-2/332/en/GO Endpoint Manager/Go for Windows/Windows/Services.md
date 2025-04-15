GO Endpoint Manager for Windows is composed of the following:

* A centralized administration module on the senhasegura platform.
* An agent installed on the user's workstation.

There are three available applications in the custom installation process for the agent:

* + [**Core**](/v3-32/docs/en/go-endpoint-manager-windows-agent-core)
	+ [**Automation**](/v3-32/docs/en/go-endpoint-manager-windows-agent-automation)
	+ [**Vault**](/v3-32/docs/en/go-endpoint-manager-windows-agent-vault)

CautionThe option for three applications is only available in version 3\.27 (or later). The legacy version only has the GO Endpoint Manager application.

---

## Services

### Windows services

* The `LOCAL_SYSTEM` user can automatically execute the services.
* The [Microsoft Isolated Storage](https://learn.microsoft.com/en-us/dotnet/standard/io/isolated-storage) securely stores sensitive data, following the standards of Microsoft.
* Data transferred between the senhasegura platform and GO Endpoint Manager for Windows occurs through `HTTP` connection and `API REST`. This communication occurs within the GO Endpoint Manager services to prevent capture by logged\-in users.
* Exchanged messages have additional asynchronous encryption with a random key.

### go Service

It's responsible for any interaction that occurs in the system, as:

* IDS (Intrusion Detection System) service to block applications executed outside of GO Endpoint Manager for Windows.
* IDS service to block applications that communicate via TCP/IP and UDP to destinations other than the password vault.
* Possibility of identifying applications that are automatically elevating privilege without the user's knowledge or consent.
* Processing the license file and machine registration on the server, log synchronization, and folder and file monitoring.
* Prevention of workstation cloning attempts to misuse GO Endpoint Manager for Windows by a workstation or ghost user.
* Prevention of horizontal jumping through network sharing or unauthorized binary access to network resources.
* Interconnection service responsible for synchronizing any GO Endpoint Manager for Windows settings.
* Interconnection service with Windows Kernel for privilege elevation and session control.
* Recording program (Recorder).

CautionWhen you access **Task Manager** on Windows, check whether the following services are running:  
**Versions 3\.25 and 3\.26:** IDS Network, IDS Process, License, Proxy Service, Recorder, and Sync Service.  
**Version 3\.27:** go Service.



---

## Other integrations

GO Endpoint Manager for Windows integrates with DLLs and drivers that allow it to take action in Windows processes that involve user identification, such as:

* Login
* RDP Access
* UAC Elevation

InfoConfiguring the requirement of using an MFA token to increase the security level in privilege elevations is possible.

