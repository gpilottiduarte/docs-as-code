## Overview

To manage situations where it is necessary to manage permissions for applications, users, and workstations, GO Endpoint Manager for Windows offers denylists and allowlists.

Often, the administrator does not want to allow some applications (e.g., Microsoft Powershell or Windows Command Line) for all users. In these cases, you can:

* Create global deny list rules.
* Create segregation access list rules by workstation
* Allow only certain users to have access to chosen applications.
* Create access lists for [applications](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-windows-execute-apps), [automation](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-windows-agent-automation), and [uninstallers.](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-uninstallers)

InfoIt's possible to separate the submodules records of **application, automation, uninstaller, control panel**, and **DLL**using deny and allow lists. Furthermore, it's possible to segregate these records using global levels and by workstations.

---

## Priority flow in an access list

Priority order:

1. Allowlist (elevating possibility)
2. Allowlist (no elevating)
3. Denylist
4. Segregated parameter (elevating possibility)
5. Segregated parameter (no elevating)
6. Global parameter (elevating possibility)
7. Global parameter (no elevating)

ImportantThis priority flow works differently from the PAM Core module, where the denylists are more restrictive than the allowlists. In GO Endpoint Manager for Windows, allowlists override denylists.1. **Allowlist (override the other rules):**it allows the application of rules created for specific programs. Any item not included in the rule is handled through segregated parameters, if any. The execution of an application on the allowlist can be restricted through the access workflow. It's possible to define restrictions that require justification and approval to access the application.
2. **Denylist:**it denies all applications that are part of the rule and allows everything outside it.
3. **Segregated parameters:** these parameters override the general system parameter.
4. **Parameters:**these parameters are applied to all workstations. They are not applicable if there is a denylist or allowlist access list.

InfoThe administrator must register an Approving user in the system if approval is necessary.  




---

## Read more

* [Typical screen](https://docs.senhasegura.io/v3-33/docs/en/general-information-graphical-user-interface#typical-screen)
* [Automation](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-windows-agent-automation)
* [Approval workflow](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-windows-approval-workflow)

  


