# Roles

In this document, you’ll find a list of all default roles that are part of the standard senhasegura installation.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **User Management \> Roles**.

## Roles

| ID | Name | Type | Description |
| ----- | ----- | ----- | ----- |
| 1 | Default | Built-in | Allow the user to manage their password and MFA. This role is automatically added to all users. |
| 2 | System User | Built-in | Basic access to **PAM, Domum, Certificate Manager, Cloud, Task Manager**, and MySafe resources. |
| 3 | System Auditor | Built-in | Read and audit access to all modules. |
| 4 | System Administrator | Built-in | Full access to all modules. |
| 5 | DSM Administrator | Built-in | Full access to **DSM** resources. |
| 6 | Cloud Administrator | Built-in | Full access to **Cloud** resources. |
| 7 | Personal Vault Administrator | Built-in | Full access to **Protected Information** resources. |
| 8 | Behavior Administrator | Built-in | Full access to **Behavior resources** and parameters |
| 9 | Domum Administrator | Built-in | Full access to **Domum** resources. |
| 10 | Domum Operator | Built-in | Allow user to request **Domum** access for internal and third-party users. |
| 11 | Domum Operator \- Third-party | Built-in | Allow user to request **Domum** access for third-party users. |
| 12 | Domum Third-party user | Built-in | Access to third-party user's desktop and its resources. |
| 13 | Task Manager Administrator | Built-in | Full access to **Task Manager** resources. |
| 14 | Executions Administrator | Built-in | Full access to **Executions** resources. |
| 15 | go Administrator | Built-in | Full access to **senhasegura.go** resources. |
| 16 | go Auditor | Built-in | Read and audit access to senhasegura.go resources. |
| 17 | Scan Discovery Administrator | Built-in | Full access to **Discovery** resources. |
| 18 | Certificates Administrator | Built-in | Full access to **Certificate Manager** resources. |
| 19 | Certificates Approver | Built-in | Allow users to approve certificate requests on **Certificate Manager**. |
| 20 | Certificates Operator | Built-in | Allow users to manage requests, certificates, and publishing on **Certificate Manager**. |
| 21 | PAM Administrator | Built-in | Full access to **PAM** resources. |
| 22 | PAM Operator | Built-in | Allow users to manage devices, credentials, sessions, and access control parameters on **PAM** module. |
| 23 | PAM User | Built-in | Allow user to view authorized credentials' password and start sessions. |
| 24 | PAM Auditor | Built-in | Read and audit access to **PAM** resources. |
| 25 | PAM Approver | Built-in | Allow users to approve access requests on the **PAM** module. |
| 26 | Personal Credential User | Built-in | Basic access to **Personal Credential** module |
| 27 | MySafe User | Built-in | Basic access to **MySafe** |
| 28 | PAM Operator \- Multitenant | Built-in | Allows users to manage devices and credentials from their own tenant (for multitenant scenarios). |
| 29 | MySafe Administrator | Built-in | Administrative access to **MySafe** for reports and general product settings |
| 30 | Domum Basic internal user | Built-in | Basic access to internal users on **Domum**, to start sessions, view passwords, and create credentials |

