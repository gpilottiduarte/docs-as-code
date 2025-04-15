# Permissions

This document lists all the permissions that are part of the Segura installation.

## Path to access

- On Segura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
- In the side menu, select **User management > Permissions**.

## Permissions

Below, each table contains a list of all the permissions present in Segura.
| Code| Action | Permission  | Description                      |
|----|--------|-------------|----------------------------------|
| 1  | Delete | A2A.Delete  | Delete A2A resources.            |
| 2  | List   | A2A.List    | List all A2A resources.          |
| 3  | View   | A2A.View    | View A2A resources details.      |
| 4  | Write  | A2A.Write   | Create and update A2A resources. |

## Behavior

| Code | Action | Permission               | Description                           |
|----|--------|--------------------------|---------------------------------------|
| 5  | List   | Behavior.List            | List all Behavior resources.          |
| 6  | Write  | Behavior.Settings.Write  | Update Behavior parameters.           |
| 7  | View   | Behavior.View            | View Behavior resources details.      |

## Certificate Manager

| Code | Action | Permission                                 | Description                                      |
|----|--------|--------------------------------------------|--------------------------------------------------|
| 8  | Delete | CertificateManager.Certificates.Delete     | Delete certificates.                             |
| 9  | Action | CertificateManager.Certificates.Link       | Link certificates to devices.                    |
| 10 | List   | CertificateManager.Certificates.List       | List all certificates.                           |
| 11 | Action | CertificateManager.Certificates.Publish    | Publish certificates.                            |
| 12 | Action | CertificateManager.Certificates.Revocation.Check | Verifies the revocation of all certificates on OCSP. |
| 13 | View   | CertificateManager.Certificates.View       | Show certificate details.                        |
| 14 | Write  | CertificateManager.Certificates.Write      | Create and update certificates.                  |
| 15 | View   | CertificateManager.Dashboards.View         | View Certificate Manager dashboards.             |
| 16 | List   | CertificateManager.Publishing.List         | List certificates publishing.                    |
| 17 | View   | CertificateManager.Publishing.View         | View certificates publishing details.            |
| 18 | List   | CertificateManager.Reports.List            | List all certificate reports and events.         |
| 19 | View   | CertificateManager.Reports.View            | View all certificate reports and events.         |
| 20 | List   | CertificateManager.Requests.Approval.List  | List all personal requests pending approval.     |
| 21 | View   | CertificateManager.Requests.Approval.View  | List all requests pending approval.              |
| 22 | Action | CertificateManager.Requests.Approve        | Approve requests.                                |
| 23 | Delete | CertificateManager.Requests.Delete         | Delete certificate requests.                     |
| 24 | List   | CertificateManager.Requests.List           | List all requests.                               |
| 25 | View   | CertificateManager.Requests.View           | Show requests details.                           |
| 26 | Write  | CertificateManager.Requests.Write          | Edit certificates requests.                      |
| 27 | Delete | CertificateManager.Settings.Delete         | Delete settings.                                 |
| 28 | List   | CertificateManager.Settings.List           | List all settings.                               |
| 29 | View   | CertificateManager.Settings.View           | View all settings details.                       |
| 30 | Write  | CertificateManager.Settings.Write          | Create and update settings.                      |

## Change Audit

| Code | Action | Permission                    | Description                                    |
|----|--------|-------------------------------|------------------------------------------------|
| 31 | View   | ChangeAudit.Dashboards.View   | View Change Audit dashboards.                  |
| 32 | Delete | ChangeAudit.Delete            | Delete Change Audit resources.                 |
| 33 | List   | ChangeAudit.List              | List all Change Audit resources.               |
| 34 | View   | ChangeAudit.View              | View Change Audit resources details.           |
| 35 | Write  | ChangeAudit.Write             | Create and update Change Audit resources.      |

## Cloud IAM

| Code  | Action         | Permission                         | Description                                          |
|-----|----------------|------------------------------------|------------------------------------------------------|
| 36  | View           | Cloud.Dashboards.View              | View all Cloud dashboards.                           |
| 37  | Delete         | Cloud.Iam.Delete                   | Delete Cloud IAM resources.                          |
| 38  | List           | Cloud.Iam.List                     | List all Cloud IAM resources.                        |
| 39  | View           | Cloud.Iam.View                     | View Cloud IAM resources details.                    |
| 40  | Write          | Cloud.Iam.Write                    | Create and update Cloud IAM resources.               |
| 41  | Delete         | Cloud.Settings.Delete              | Delete Cloud module Settings.                        |
| 42  | List           | Cloud.Settings.List                | List all Cloud module Settings.                      |
| 43  | View           | Cloud.Settings.View                | View Cloud module Settings details.                  |
| 44  | Write          | Cloud.Settings.Write               | Create and update Cloud module Settings.             |
| 45  | List           | Cloud.VirtualMachines.List         | List all Virtual Machines resource                   |
| 46  | Action         | Cloud.VirtualMachines.Session.Start| Start Virtual Machines sessions.                     |
| 47  | View           | Cloud.VirtualMachines.View         | View Virtual Machines resources details.             |
| 48  | Action         | Cloud.VirtualMachines.Sync         | Request Virtual Machines resources synchronization.  |
| 223 | View           | Cloud.Operations.View              | View all Cloud IAM operations.                       |

## Discovery

| Code  | Action | Permission                       | Description                                      |
|-----|--------|----------------------------------|--------------------------------------------------|
| 49  | Delete | ScanDiscovery.Discovery.Delete   | Delete Discovery resources.                      |
| 50  | List   | ScanDiscovery.Discovery.List     | List Discovery resources.                        |
| 51  | View   | ScanDiscovery.Discovery.View     | View Discovery resources details.                |
| 52  | Write  | ScanDiscovery.Discovery.Write    | Create and update Discovery resources.           |
| 53  | List   | ScanDiscovery.Reports.List       | List all executions audit and logs reports.      |
| 54  | View   | ScanDiscovery.Reports.View       | View all executions audit and logs reports.      |
| 55  | Delete | ScanDiscovery.Settings.Delete    | Delete Discovery settings.                       |
| 56  | List   | ScanDiscovery.Settings.List      | List all Discovery settings.                     |
| 57  | View   | ScanDiscovery.Settings.View      | View all Discovery settings details.             |
| 58  | Write  | ScanDiscovery.Settings.Write     | Create and update Discovery settings.            |

## Domum Remote Access

| Code  | Action | Permission                                 | Description                                      |
|-----|--------|--------------------------------------------|--------------------------------------------------|
| 59  | Delete | Domum.Access.InternalUsers.Delete          | Delete internal users' access requests.         |
| 60  | List   | Domum.Access.InternalUsers.List            | List access requests for internal users.        |
| 61  | View   | Domum.Access.InternalUsers.View            | View internal users' access details.            |
| 62  | Write  | Domum.Access.InternalUsers.Write           | Create and update internal users' access.       |
| 63  | List   | Domum.Access.Requests.List                 | List own requests and approvals.                |
| 64  | View   | Domum.Access.Requests.View                 | View all details of your requests and approvals.|
| 65  | Delete | Domum.Access.ThirdPartyUsers.Delete        | Delete a third-party user access request.       |
| 66  | List   | Domum.Access.ThirdPartyUsers.List          | List access requests for third-party users.     |
| 67  | View   | Domum.Access.ThirdPartyUsers.View          | Detail third-party users access details.        |
| 68  | Write  | Domum.Access.ThirdPartyUsers.Write         | Create and update third-party user access.      |
| 69  | View   | Domum.Dashboards.View                      | View all Domum's dashboards.                    |
| 70  | List   | Domum.Reports.List                         | List all Domum's reports.                       |
| 71  | List   | Domum.Settings.List                        | List all Domum settings and parameters.         |
| 72  | Action | Domum.Settings.PanicButton                 | Drop all access from a group or vendor.         |
| 73  | List   | Domum.Settings.ThirdPartyUsers.List        | List third-party users.                         |
| 74  | Write  | Domum.Settings.ThirdPartyUsers.Write       | Create and update third-party users.            |
| 75  | Delete | Domum.Settings.ThirdPartyUsers.Delete      | Delete third-party users.                       |
| 76  | Write  | Domum.Settings.Write                       | Create and update Domum settings.               |
| 77  | Delete | Domum.Settings.Delete                      | Delete Domum settings.                          |
| 78  | View   | Domum.ThirdPartyUsers.Desktop.View         | View third-party user desktop.                  |

## DevOps Secret Manager

| Code  | Action        | Permission                    | Description                                               |
|-----|---------------|-------------------------------|-----------------------------------------------------------|
| 79  | Delete        | DSM.Applications.Delete       | Delete applications authorizations and CI/CD resources.   |
| 80  | List          | DSM.Applications.List         | List all applications authorizations and CI/CD resources. |
| 81  | View          | DSM.Applications.View         | View applications authorizations and CI/CD resources details.|
| 82  | Write         | DSM.Applications.Write        | Create and update applications authorizations and CI/CD.  |
| 83  | Delete        | DSM.Automations.Delete        | Delete DSM module Automations.                             |
| 84  | List          | DSM.Automations.List          | List all DSM module Automations.                           |
| 85  | View          | DSM.Automations.View          | View DSM module Automations details.                       |
| 86  | Write         | DSM.Automations.Write         | Create and update DSM module Automations.                  |
| 87  | View          | DSM.Dashboards.View           | View all DSM dashboards.                                   |
| 88  | Delete        | DSM.Secrets.Delete            | Delete DSM module Secrets.                                 |
| 89  | List          | DSM.Secrets.List              | List all DSM module Secrets.                               |
| 90  | View          | DSM.Secrets.View              | View DSM module Secrets details.                           |
| 91  | Write         | DSM.Secrets.Write             | Create and update DSM module Secrets.                      |
| 227 | Write         | DSM.Settings.Write            | Write DSM settings.                                        |
| 228 | List          | DSM.Settings.List             | List DSM settings.                                         |
| 229 | View          | DSM.Settings.View             | View DSM settings.                                         |
| 240 | View          | DSM.Applications.DownloadKey  | Allows downloading the private key of applications.        |
| 242 | Delete        | DSM.EncryptionKeys.Delete     | Allows the deletion of encryption keys.                    |
| 243 | List          | DSM.EncryptionKeys.List       | Allows listing available encryption keys.                  |
| 244 | View          | DSM.EncryptionKeys.View       | Allows viewing details of encryption keys.                 |
| 245 | Write         | DSM.EncryptionKeys.Write      | Allows the modification of encryption key properties.      |
| 246 | Write         | DSM.EncryptionKeys.Encrypt    | Allows the operation of data encryption.                   |
| 247 | Write         | DSM.EncryptionKeys.Decrypt    | Allows the operation of data decryption.                   |

## Executions

| Code  | Action | Permission                     | Description                                    |
|-----|--------|--------------------------------|------------------------------------------------|
| 92  | List   | Executions.Reports.List        | List all Executions reports.                   |
| 93  | View   | Executions.Reports.View        | View Executions reports details.               |
| 94  | Delete | Executions.Operations.Delete   | Delete Executions operations resources.        |
| 95  | Write  | Executions.Operations.Write    | Create and Update Executions operations resources.|
| 96  | List   | Executions.Operations.List     | List all Executions operations resources.      |
| 97  | View   | Executions.Operations.View     | View Executions operations resources.          |
| 98  | List   | Executions.Settings.List       | List all Executions settings.                  |
| 99  | View   | Executions.Settings.View       | View Executions settings.                      |
| 100 | Write  | Executions.Settings.Write      | Create and Update Executions settings.         |
| 101 | View   | Executions.Settings.Delete     | Delete Executions settings.                    |

## EPM

| Code  | Action          | Permission                     | Description                            |
|-----|-----------------|--------------------------------|----------------------------------------|
| 102 | View            | Go.Dashboards.View             | View go dashboards.                    |
| 103 | Delete          | Go.Linux.Delete                | Delete Linux resources.                |
| 104 | List            | Go.Linux.List                  | List all Linux resources.              |
| 105 | View            | Go.Linux.View                  | View all Linux resources details.      |
| 106 | Write           | Go.Linux.Write                 | Create and update Linux resources.     |
| 107 | List            | Go.Reports.List                | List all reports and events.           |
| 108 | View            | Go.Reports.View                | View all reports and events details.   |
| 109 | Delete          | Go.Settings.Delete             | Delete go settings.                    |
| 110 | Action          | Go.Settings.InstallationKey.View | View installation key.               |
| 111 | List            | Go.Settings.List               | List all go settings.                  |
| 112 | View            | Go.Settings.View               | List all go settings.                  |
| 113 | Write           | Go.Settings.Write              | Create and update go settings.         |
| 114 | Delete          | Go.Users.Delete                | Delete and disapprove users.           |
| 115 | List            | Go.Users.List                  | List all users.                        |
| 116 | View            | Go.Users.View                  | View all users.                        |
| 117 | Write           | Go.Users.Write                 | Write and approve users.               |
| 118 | Delete          | Go.Windows.Delete              | Delete EPM Windows resources.           |
| 119 | List            | Go.Windows.List                | List EPM Windows resources.             |
| 120 | View            | Go.Windows.View                | View EPM Windows resources details.     |
| 121 | Write           | Go.Windows.Write               | Create and update EPM Windows resources.|
| 122 | Delete          | Go.Workstations.Delete         | Delete workstations resources.         |
| 123 | List            | Go.Workstations.List           | List all workstations resources.       |
| 124 | View            | Go.Workstations.View           | View all workstations resources details.|
| 125 | Write           | Go.Workstations.Write          | Create and update workstations resources.|

## Protected information

:::(error) (Attention)
This feature was deprecated from the Segura 3.26 version
:::

| Code  | Action         | Permission                                | Description                                     |
|-----|----------------|-------------------------------------------|-------------------------------------------------|
| 126 | View           | PersonalVault.Dashboards.View             | View information Dashboard.                     |
| 127 | Delete         | PersonalVault.Information.Delete          | Delete information resources.                   |
| 128 | List           | PersonalVault.Information.List            | List all information resource.                  |
| 129 | View           | PersonalVault.Information.Read            | Show information resources details.             |
| 130 | Write          | PersonalVault.Information.Write           | Create and update information resources.        |
| 131 | List           | PersonalVault.Reports.List                | List all reports.                               |
| 132 | Delete         | PersonalVault.Settings.Delete             | Delete settings resources.                      |
| 133 | List           | PersonalVault.Settings.List               | List all settings resources.                    |
| 134 | View           | PersonalVault.Settings.Read               | Show settings resources details.                |
| 135 | Write          | PersonalVault.Settings.Write              | Create and update settings resources.           |
| 226 | View           | PersonalVault.PersonalCredential.View     | Show personal credential resources details.     |

## PAM Core

| Code  | Action         | Permission                                        | Description                                   |
|-----|----------------|---------------------------------------------------|-----------------------------------------------|
| 136 | View           | PAM.Dashboards.View                               | Create and update settings resources.         |
| 137 | List           | PAM.PrivilegedAccounts.Custody.List               | List all credentials under user's custody.    |
| 138 | Delete         | PAM.PrivilegedAccounts.Credentials.Delete         | Delete credentials.                           |
| 139 | List           | PAM.PrivilegedAccounts.Credentials.List           | List all credentials.                         |
| 140 | View           | PAM.PrivilegedAccounts.Credentials.View           | Show all credential details.                  |
| 141 | View           | PAM.PrivilegedAccounts.Credentials.Password.View  | Get credential or SSH Key value or part.      |
| 142 | Write          | PAM.PrivilegedAccounts.Credentials.Write          | Create and update credentials.                |
| 143 | View           | PAM.PrivilegedAccounts.PasswordChange.View        | Show all password changes details.            |
| 144 | List           | PAM.PrivilegedAccounts.PasswordChange.List        | List all password changes.                    |
| 145 | Action         | PAM.PrivilegedAccounts.PasswordChange.Request     | Create a request for password rotation.       |
| 146 | List           | PAM.SessionManagement.List                        | List all session information.                 |
| 147 | Action         | PAM.SessionManagement.Start                       | Start a session.                              |
| 148 | Action         | PAM.SessionManagement.Drop                        | Drop a session.                               |
| 149 | View           | PAM.SessionManagement.View                        | Show all sessions details.                    |
| 150 | Action         | PAM.SessionManagement.Write                       | Create and update Session Management resources.|
| 151 | View           | PAM.SessionManagement.Delete                      | Delete Session Management resources.          |
| 152 | Action         | PAM.SessionManagement.Audit                       | List and execute auditing actions.            |
| 153 | Delete         | PAM.Devices.Delete                                | Delete devices.                               |
| 154 | List           | PAM.Devices.List                                  | List all device information.                  |
| 155 | View           | PAM.Devices.View                                  | Show device details.                          |
| 156 | Write          | PAM.Devices.Write                                 | Create and update devices.                    |
| 157 | List           | PAM.Reports.List                                  | List all PAM reports.                         |
| 158 | Delete         | PAM.Settings.Delete                               | Delete PAM settings.                          |
| 159 | List           | PAM.Settings.List                                 | List all PAM settings.                        |
| 160 | View           | PAM.Settings.View                                 | Show all PAM settings details.                |
| 161 | Write          | PAM.Settings.Write                                | Create and update PAM settings.               |
| 249 | View           | PAM.SessionManagement.Recording                   | Allows viewing of session recordings.         |
| 250 | View           | PAM.SessionManagement.Livestream                  | Allows viewing of session livestream.         |

## Provisioning

| Code  | Action | Permission              | Description                                      |
|-----|--------|-------------------------|--------------------------------------------------|
| 162 | Delete | Provisioning.Delete     | Delete provisioning resources.                   |
| 163 | List   | Provisioning.List       | List access to all Provisioning module resources.|
| 164 | View   | Provisioning.Read       | Show Provisioning resources details.             |
| 165 | Write  | Provisioning.Write      | Create and update to all provisioning resources. |

## Settings

| Code  | Action | Permission                        | Description                                                 |
|-----|--------|-----------------------------------|-------------------------------------------------------------|
| 166 | Action | Reports.Schedule                  | Action to schedule the send of reports periodically.        |
| 167 | Delete | Settings.Authentication.Delete    | Delete Authentication resources.                            |
| 168 | List   | Settings.Authentication.List      | List all Authentication resources.                         |
| 169 | View   | Settings.Authentication.View      | View Authentication resources details.                      |
| 170 | Write  | Settings.Authentication.Write     | Create and Update Authentication resources.                 |
| 171 | Delete | Settings.Backup.Delete            | Delete Backup resources.                                    |
| 172 | List   | Settings.Backup.List              | List all Backup resources.                                  |
| 173 | View   | Settings.Backup.View              | View Backup resources details.                              |
| 174 | Write  | Settings.Backup.Write             | Create and Update Backup resources.                         |
| 175 | List   | Settings.Eula.List                | List all Eula resources.                                    |
| 176 | View   | Settings.Eula.View                | View Eula resources details.                                |
| 177 | Delete | Settings.Notification.Delete      | Delete Notification resources.                              |
| 178 | List   | Settings.Notification.List        | List all Notification resources.                            |
| 179 | View   | Settings.Notification.View        | View Notification resources details.                        |
| 180 | Write  | Settings.Notification.Write       | Create and Update Notification resources.                   |
| 181 | Delete | Settings.Services.Delete          | Delete services and execution processes resources.          |
| 182 | List   | Settings.Services.List            | List all services and execution processes resources.        |
| 183 | View   | Settings.Services.View            | View services and execution processes resources details.    |
| 184 | Write  | Settings.Services.Write           | Create and Update services and execution processes resources.|
| 185 | Delete | Settings.SystemParameters.Delete  | Delete System Parameters resources.                         |
| 186 | List   | Settings.SystemParameters.List    | List all System Parameters resources.                       |
| 187 | View   | Settings.SystemParameters.View    | View System Parameters resources details.                   |
| 188 | Write  | Settings.SystemParameters.Write   | Create and Update System Parameters resources.              |
| 189 | Delete | Settings.UserManagement.Delete    | Delete User Management resources.                           |
| 190 | List   | Settings.UserManagement.List      | List all User Management resources.                         |
| 191 | View   | Settings.UserManagement.View      | View User Management resources details.                     |
| 192 | Write  | Settings.UserManagement.Write     | Create and Update User Management resources.                |
| 193 | List   | User.Desktop.List                 | List user Desktop reports.                                  |
| 194 | View   | User.Desktop.View                 | View user Desktop and dashboards.                           |
| 195 | Write  | User.Settings.Write               | Edit user settings.                                         |
| 213 | View   | System.AuditTracking.View         | View system audit trail.                                    |
| 214 | Write  | System.Settings.Write             | Write system settings.                                      |
| 217 | List   | System.Common.List                | List system commons settings.                               |
| 218 | Write  | System.Common.Write               | Write system commons settings.                              |
| 219 | List   | Settings.Tenants.List             | List Tenants settings.                                      |
| 220 | Write  | Settings.Tenants.Write            | Write Tenants settings.                                     |
| 221 | Write  | System.Settings.Orbit             | Orbit Accesses system settings.                             |
| 222 | Write  | System.Settings.Eula              | Eula accept and manage settings.                            |
| 224 | View   | System.Dashboards.Admin           | View administrative dashboards.                             |
| 225 | List   | Reports.Telemetry.List            | View telemetry reports.                                     |
| 230 | Write  | System.EmergencyPanel.Control     | Emergency panel control.                                    |

## Task Manager

| Code  | Action  | Permission                      | Description                                          |
|-----|---------|---------------------------------|------------------------------------------------------|
| 196 | View    | TaskManager.Dashboards.View     | View all Task Manager module dashboards.             |
| 197 | List    | TaskManager.Executions.List     | List Task Manager executions and operations.         |
| 198 | View    | TaskManager.Executions.View     | View Task Manager executions and operations details. |
| 199 | Delete  | TaskManager.Settings.Delete     | Delete Task Manager module Settings resources.       |
| 200 | List    | TaskManager.Settings.List       | List all Task Manager module Settings resources.     |
| 201 | View    | TaskManager.Settings.View       | Show Task Manager module Settings resources details. |
| 202 | Write   | TaskManager.Settings.Write      | Create and update Task Manager module Settings resources. |
| 203 | Delete  | TaskManager.Tasks.Delete        | Delete Task Manager tasks.                            |
| 204 | List    | TaskManager.Tasks.List          | List all Task Manager tasks.                          |
| 205 | View    | TaskManager.Tasks.View          | View all Task Manager tasks details.                  |
| 206 | Action  | TaskManager.Tasks.Execute       | Allow user to execute a task.                         |
| 207 | Write   | TaskManager.Tasks.Write         | Create and update Task Manager tasks.                 |

## Access control

| Code  | Action  | Permission                      | Description                                                       |
|-----|---------|---------------------------------|-------------------------------------------------------------------|
| 208 | Delete  | AccessControl.Delete            | Delete Access Control resources from all modules.                 |
| 209 | List    | AccessControl.List              | List all Access Control resources from all modules.               |
| 210 | View    | AccessControl.View              | View Access Control resources details from all modules.           |
| 211 | Write   | AccessControl.Write             | Create and update Access Control resources from all modules.      |
| 212 | Action  | AccessControl.Approval          | Approve and disapprove requests.                                  |
| 215 | List    | AccessControl.Audit             | Write system settings. (Note: the description might be incorrect) |
| 216 | List    | AccessControl.CurrentUser.List  | List all Access Control requests for current user.                |

## MySafe

| Code  | Action  | Permission                  | Description                                                      |
|-----|---------|-----------------------------|------------------------------------------------------------------|
| 231 | List    | MySafe.Item.List            | List all information resource.                                   |
| 232 | View    | MySafe.Item.View            | Show personal credential resources details.                      |
| 233 | Write   | MySafe.Item.Write           | Create and update information resources.                         |
| 234 | Delete  | MySafe.Item.Delete          | Delete information resources.                                    |
| 235 | List    | MySafe.Settings.List        | List all settings resources.                                     |
| 236 | Write   | MySafe.Settings.Write       | Create and update settings resources.                            |
| 237 | Delete  | MySafe.Settings.Delete      | Delete settings resources.                                       |
| 238 | List    | MySafe.Reports.List         | List all reports.                                                |
| 239 | View    | MySafe.Dashboards.View      | View information Dashboard.                                      |
| 241 | View    | MySafe.Dashboards.Admin     | View administrative dashboards.                                  |
| 248 | Write   | MySafe.Item.ExternalShare   | Allows the user to share items, temporarily, with people who do not have access to MySafe. |