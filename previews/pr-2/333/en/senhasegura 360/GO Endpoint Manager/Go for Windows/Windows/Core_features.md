GO Endpoint Manager for Windows is a Privilege Elevation and Delegation Management (PEDM) tool for Microsoft Windows.

Our tool is fully integrated with the broader senhasegura platform to allow end users to run applications requiring administrative privileges without gaining access to the privileged credential. It also performs routine {{glossary.Password}} rotations with no human intervention required. Administrators can group and audit all user activity for better governance and decision\-making.



---

## Core features

* **Policy control**, creation of policy lists based on segregations and their maintenance:


	+ Group\-based
	+ User\-based
	+ {{glossary.AD}} OU\-based
	+ Global policies
	+ Application of policies via GPOs
	+ Comprehensive criteria for identifying application groups
* **Privilege control**:


	+ Application elevation (Allowlisting)
	+ Application blocking (Denylisting)
	+ Control of unmanaged applications (Graylisting/General parameters)
	+ DLL blocking
	+ Control of parent and child processes
	+ Integration with the operating system's native prompt (UAC)
	+ Command control at the prompt level (Denylisting and Allowlisting)
	+ One\-time\-access for applications not controlled by policy
	+ Customization of privileges in tokens for elevations
* **Audit, compliance, and reporting**:


	+ Functionality for control and monitoring of directories, files, logs, and management of their permissions
	+ Tracking of events associated with executions intermediated by EPM (Reports)
* **Security**:


	+ Protect against shell escaping
	+ Protect against all types of pass\-the\-hashes and pass\-the\-tickets
	+ Protect against {{glossary.Privilege escalation}}

## **Other features**

* Automation for authentication in local/Web applications
* One\-screen workplace
* All\-in\-one solution (PAM 360\)
* Approval Workflow for executions
* Session Recording linked to access lists
* Malware Analysis (without report)
* Offline Mode
* Single sign\-on
* MFA OTP Token



---

## Read more

* Learn about GO Endpoint Manager's [architecture](/v3-33/docs/go-endpoint-manager-windows-architecture).
* How to [install](/docs/how-to-install-go-windows-agent-1) Go Endpoint Manager.

