The senhasegura Access Control Layer is based on permission roles.

senhasegura provides roles that make it easy to grant superpowers to administrators and the technical functions for different user types.

When the user has access to a module or has permission to act, the senhasegura has validated that this user is associated with a role that grants him these powers.

A role can give the user the following powers:

* Which modules it can access
* Run procedures related to the module
* Which module features the user can list
* View details of a record related to the module

Imagine that a user can query all credentials and devices registered in the senhasegura but cannot register new ones or delete existing ones. You will need to watch and assign the user the correct permissions to avoid abuse of privileges.

Since some operations apply to particular user profiles, which makes direct assignment difficult, the senhasegura provides a list of pre\-registered roles with access models that enforce the principle of least privilege.

That is, each role will receive only the permissions that match its responsibility.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28102%29.png)

Each ***Role*** is named as a position of responsibility that a person has.

By assigning permissions to the Role and later assigning these roles to a user, we can easily manage the operations of the senhasegura using only the 25 Roles that senhasegura provides in its default installation.

The administrator links users to the desired roles so that the user has access to the relevant modules, screens, and operations.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28103%29.png)

## Default Roles

Now that you are aware of how the entities that make up the senhasegura access control layers work and are related, let's introduce the 25 standard senhasegura roles.

InfoGo to the **Settings ➔ User Management ➔ Roles** menu and click the ***Details*** action button to check which permissions each role has.

* ***System Administrator:*** Administrative access to all modules and Orbit
* ***System User:*** Basic user with access to all modules
* ***System Auditor:*** Access for auditors to all modules
* ***Read only:*** Read\-only access to all modules
* ***DSM Administrator:*** Manages all the features of the DSM module
* ***Cloud Administrator:*** Manages all the resources of the Cloud module
* ***Information Administrator:*** Manages all information resources
* ***Behavior Administrator:*** Manages all User Behavior parameters
* ***Domum Administrator:*** Manages all Domum parameters, groups and suppliers
* ***Domum Operator:*** Responsible role for requesting access for employees and third\-party users
* ***Domum Operator \- Third\-party:*** Responsible role for requesting access for third\-party users.
* ***Domum Basic internal user:*** basic access for internal users in Domum. With this role, users can start sessions, view passwords and create credentials.
* ***Domum Third\-party user:*** Third\-party workspace
* ***Task Manager Administrator:*** Manage all features of the Task Manager module
* ***Executions Administrator:*** Manage all resources of the Execution system
* ***go Administrator:*** Manage all senhasegura.go system resources
* ***go Auditor:*** Auditor's access to the senhasegura.go system
* ***Scan Discovery Administrator:*** Manage all Discovery features
* ***Certificates Administrator:*** Manage all features of the Certificate Manager module
* ***Certificates Approver:*** Role responsible for approving a request related to the Certificate Manager module
* ***Certificates Operator:*** Responsible role for requesting actions related to the Certificate Manager module
* ***PAM Administrator:*** Manages all PAM resources
* ***PAM Operator:*** Manage PAM resources such as devices, credentials, session and access control parameters
* ***PAM User:*** Default PAM user, able to see credentials and start sessions
* ***PAM Auditor:*** Auditors' access to PAM
* ***PAM Approver:*** Role responsible for credential and session approval

## Permissions

Access the menu **Settings ➔ User Management ➔ Permissions** to view the existing permissions in the system and their respective functions:

### A2A



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 1 | Delete | A2A.Delete | Delete A2A resources |
| 2 | List | A2A.List | List all A2A resources |
| 3 | View | A2A.View | View A2A resources details |
| 4 | Write | A2A.Write | Create and update A2A resources |

### User Behavior



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 5 | List | Behavior.List | List all Behavior resources |
| 6 | Write | Behavior.Settings.Write | Update Behavior parameters |
| 7 | View | Behavior.View | View Behavior resources details |

### Certificate Manager



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 8 | Delete | CertificateManager.Certificates.Delete | Delete certificates |
| 9 | Action | CertificateManager.Certificates.Link | Link certificates to devices |
| 10 | List | CertificateManager.Certificates.List | List all certificates |
| 11 | Action | CertificateManager.Certificates.Publish | Publish certificates |
| 12 | Action | CertificateManager.Certificates.Revocation.Check | Verifies the revocation of all certificates on OCSP |
| 13 | View | CertificateManager.Certificates.View | Show certificate details |
| 14 | Write | CertificateManager.Certificates.Write | Create and update certificates |
| 15 | View | CertificateManager.Dashboards.View | View Certificate Manager dashboards |
| 16 | List | CertificateManager.Publishing.List | List certificates publishing |
| 17 | View | CertificateManager.Publishing.View | View certificates publishing details |
| 18 | List | CertificateManager.Reports.List | List all certificate reports and events |
| 19 | View | CertificateManager.Reports.View | View all certificate reports and events |
| 20 | List | CertificateManager.Requests.Approval.List | List all personal requests pending approval |
| 21 | View | CertificateManager.Requests.Approval.View | List all requests pending approval |
| 22 | Action | CertificateManager.Requests.Approve | Approve requests |
| 23 | Delete | CertificateManager.Requests.Delete | Delete certificate requests |
| 24 | List | CertificateManager.Requests.List | List all requests |
| 25 | View | CertificateManager.Requests.View | Show requests details |
| 26 | Write | CertificateManager.Requests.Write | Edit certificates requests |
| 27 | Delete | CertificateManager.Settings.Delete | Delete settings |
| 28 | List | CertificateManager.Settings.List | List all settings |
| 29 | View | CertificateManager.Settings.View | View all settings details |
| 30 | Write | CertificateManager.Settings.Write | Create and update settings |

### Change Audit



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 31 | View | ChangeAudit.Dashboards.View | View Change Audit dashboards |
| 32 | Delete | ChangeAudit.Delete | Delete Change Audit resources |
| 33 | List | ChangeAudit.List | List all Change Audit resources |
| 34 | View | ChangeAudit.View | View Change Audit resources details |
| 35 | Write | ChangeAudit.Write | Create and update Change Audit resources |

### Cloud IAM



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 36 | View | Cloud.Dashboards.View | View all Cloud dashboards |
| 37 | Delete | Cloud.Iam.Delete | Delete Cloud IAM resources |
| 38 | List | Cloud.Iam.List | List all Cloud IAM resources |
| 39 | View | Cloud.Iam.View | View Cloud IAM resources details |
| 40 | Write | Cloud.Iam.Write | Create and update Cloud IAM resources |
| 41 | Delete | Cloud.Settings.Delete | Delete Cloud module Settings |
| 42 | List | Cloud.Settings.List | List all Cloud module Settings |
| 43 | View | Cloud.Settings.View | View Cloud module Settings details |
| 44 | Write | Cloud.Settings.Write | Create and update Cloud module Settings |
| 45 | List | Cloud.VirtualMachines.List | List all Virutal Machines resources |
| 46 | Action | Cloud.VirtualMachines.Session.Start | Start Virtual Machines sessions |
| 47 | View | Cloud.VirtualMachines.View | View Virutal Machines resources details |
| 48 | Action | Cloud.VirtualMachines.Sync | Request Virtual Machines resources syncronization |

### Discovery



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 49 | Delete | ScanDiscovery.Discovery.Delete | Delete Discovery resources |
| 50 | List | ScanDiscovery.Discovery.List | List Discovery resources |
| 51 | View | ScanDiscovery.Discovery.View | View Discovery resources details |
| 52 | Write | ScanDiscovery.Discovery.Write | Create and update Discovery resources |
| 53 | List | ScanDiscovery.Reports.List | List all executions audit and logs reports |
| 54 | View | ScanDiscovery.Reports.View | View all executions audit and logs reports |
| 55 | Delete | ScanDiscovery.Settings.Delete | Delete Discovery settings |
| 56 | List | ScanDiscovery.Settings.List | List all Discovery settings |
| 57 | View | ScanDiscovery.Settings.View | View all Discovery settings details |
| 58 | Write | ScanDiscovery.Settings.Write | Create and update Discovery settings |

### Domum Remote Access



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 59 | Delete | Domum.Access.InternalUsers.Delete | Delete internal users' access requests. |
| 60 | List | Domum.Access.InternalUsers.List | List access requests for internal users. |
| 61 | View | Domum.Access.InternalUsers.View | View internal users' access details. |
| 62 | Write | Domum.Access.InternalUsers.Write | Create and update internal users' accesses. |
| 63 | List | Domum.Access.Requests.List | List own requests and approvals |
| 64 | View | Domum.Access.Requests.View | View all details of your requests and approvals |
| 65 | Delete | Domum.Access.ThirdPartyUsers.Delete | Delete a third\-party user access request |
| 66 | List | Domum.Access.ThirdPartyUsers.List | List access requests for third\-party users |
| 67 | View | Domum.Access.ThirdPartyUsers.View | Detail third\-party users access details |
| 68 | Write | Domum.Access.ThirdPartyUsers.Write | Create and update third\-party user access |
| 69 | View | Domum.Dashboards.View | View all Domum's dashboards |
| 70 | List | Domum.Reports.List | List all Domum's reports |
| 71 | List | Domum.Settings.List | List all Domum settings and parameters |
| 72 | Action | Domum.Settings.PanicButton | Drop all access from a group or vendor |
| 73 | List | Domum.Settings.ThirdPartyUsers.List | List third\-party users |
| 74 | Write | Domum.Settings.ThirdPartyUsers.Write | Create and update third\-party users |
| 75 | Delete | Domum.Settings.ThirdPartyUsers.Delete | Delete third\-party users |
| 76 | Write | Domum.Settings.Write | Create and update Domum settings |
| 77 | Delete | Domum.Settings.Delete | Delete Domum settings |
| 78 | View | Domum.ThirdPartyUsers.Desktop.View | View third\-party user desktop |

### DevOps Secret Manager



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 79 | Delete | DSM.Applications.Delete | Delete applications authorizations and CI/CD resources |
| 80 | List | DSM.Applications.List | List all applications authorizations and CI/CD resources |
| 81 | View | DSM.Applications.View | View applications authorizations and CI/CD resources details |
| 82 | Write | DSM.Applications.Write | Create and update applications authorizations and CI/CD |
| 83 | Delete | DSM.Automations.Delete | Delete DSM module Automations |
| 84 | List | DSM.Automations.List | List all DSM module Automations |
| 85 | View | DSM.Automations.View | View DSM module Automations details |
| 86 | Write | DSM.Automations.Write | Create and update DSM module Automations |
| 87 | View | DSM.Dashboards.View | View all DSM dashboards |
| 88 | Delete | DSM.Secrets.Delete | Delete DSM module Secrets |
| 89 | List | DSM.Secrets.List | List all DSM module Secrets |
| 90 | View | DSM.Secrets.View | View DSM module Secrets details |
| 91 | Write | DSM.Secrets.Write | Create and update DSM module Secrets |

### Executions



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 92 | List | Executions.Reports.List | List all Executions reports |
| 93 | View | Executions.Reports.View | View Executions reports details |
| 94 | Delete | Executions.Operations.Delete | Delete Executions operations resources |
| 95 | Write | Executions.Operations.Write | Create and Update Executions operations resources |
| 96 | List | Executions.Operations.List | List all Executions operations resources |
| 97 | View | Executions.Operations.View | View Executions operations resources |
| 98 | List | Executions.Settings.List | List all Executions settings |
| 99 | View | Executions.Settings.View | View Executions settings |
| 100 | Write | Executions.Settings.Write | Create and Update Executions settings |
| 101 | View | Executions.Settings.Delete | Delete Executions settings |

### GO Endpoint Manager



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 102 | View | Go.Dashboards.View | View go dashboards |
| 103 | Delete | Go.Linux.Delete | Delete Linux resources |
| 104 | List | Go.Linux.List | List all Linux resources |
| 105 | View | Go.Linux.View | View all Linux resources details |
| 106 | Write | Go.Linux.Write | Create and update Linux resources |
| 107 | List | Go.Reports.List | List all reports and events |
| 108 | View | Go.Reports.View | View all reports and events details |
| 109 | Delete | Go.Settings.Delete | Delete go settings |
| 110 | Action | Go.Settings.InstallationKey.View | View installation key |
| 111 | List | Go.Settings.List | List all go settings |
| 112 | View | Go.Settings.View | View all go module settings |
| 113 | Write | Go.Settings.Write | Create and update go settings |
| 114 | Delete | Go.Users.Delete | Delete and disapprove users |
| 115 | List | Go.Users.List | List all users |
| 116 | View | Go.Users.View | View all users |
| 117 | Write | Go.Users.Write | Write and approve users |
| 118 | Delete | Go.Windows.Delete | Delete go Windows resources |
| 119 | List | Go.Windows.List | List go Windows resources |
| 120 | View | Go.Windows.View | View go Windows resources details |
| 121 | Write | Go.Windows.Write | Create and update go Windows resources |
| 122 | Delete | Go.Workstations.Delete | Delete workstations resources |
| 123 | List | Go.Workstations.List | List all workstations resources |
| 124 | View | Go.Workstations.View | View all workstations resources details |
| 125 | Write | Go.Workstations.Write | Create and update workstations resources |

### Personal Vault



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 126 | View | PersonalVault.Dashboards.View | View information Dashboard |
| 127 | Delete | PersonalVault.Information.Delete | Delete information resources |
| 128 | List | PersonalVault.Information.List | List all information resource |
| 129 | View | PersonalVault.Information.Read | Show information resources details |
| 130 | Write | PersonalVault.Information.Write | Create and update information resources |
| 131 | List | PersonalVault.Reports.List | List all reports |
| 132 | Delete | PersonalVault.Settings.Delete | Delete settings resources |
| 133 | List | PersonalVault.Settings.List | List all settings resources |
| 134 | View | PersonalVault.Settings.Read | Show settings resources details |
| 135 | Write | PersonalVault.Settings.Write | Create and update settings resources |
| 226 | View | PersonalVault.PersonalCredential.View | Show personal credential resources details |

### PAM Core



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 136 | View | PAM.Dashboards.View | View all PAM Dashboards |
| 137 | List | PAM.PrivilegedAccounts.Custody.List | List all credentials under user's custody |
| 138 | Delete | PAM.PrivilegedAccounts.Credentials.Delete | Delete credentials |
| 139 | List | PAM.PrivilegedAccounts.Credentials.List | List all credentials |
| 140 | View | PAM.PrivilegedAccounts.Credentials.View | Show all credential details |
| 141 | View | PAM.PrivilegedAccounts.Credentials.Password.View | Get credential or SSH Key value or part |
| 142 | Write | PAM.PrivilegedAccounts.Credentials.Write | Create and update credentials |
| 143 | View | PAM.PrivilegedAccounts.PasswordChange.View | Show all password changes details |
| 144 | List | PAM.PrivilegedAccounts.PasswordChange.List | List all password changes |
| 145 | Action | PAM.PrivilegedAccounts.PasswordChange.Request | Create a request for password rotation |
| 146 | List | PAM.SessionManagement.List | List all session information |
| 147 | Action | PAM.SessionManagement.Start | Start a session |
| 148 | Action | PAM.SessionManagement.Drop | Drop a session |
| 149 | View | PAM.SessionManagement.View | Show all sessions details |
| 150 | Action | PAM.SessionManagement.Write | Create and update Session Management resources |
| 151 | View | PAM.SessionManagement.Delete | Delete Session Management resources |
| 152 | Action | PAM.SessionManagement.Audit | List and execute auditing actions |
| 153 | Delete | PAM.Devices.Delete | Delete devices |
| 154 | List | PAM.Devices.List | List all device information |
| 155 | View | PAM.Devices.View | Show device details |
| 156 | Write | PAM.Devices.Write | Create and update devices |
| 157 | List | PAM.Reports.List | List all PAM reports |
| 158 | Delete | PAM.Settings.Delete | Delete PAM settings |
| 159 | List | PAM.Settings.List | List all PAM settings |
| 160 | View | PAM.Settings.View | Show all PAM settings details |
| 161 | Write | PAM.Settings.Write | Create and update PAM settings |

### Provisioning



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 162 | Delete | Provisioning.Delete | Delete provisioning resources |
| 163 | List | Provisioning.List | List access to all Provisioning module resources |
| 164 | View | Provisioning.Read | Show Provisioning resources details |
| 165 | Write | Provisioning.Write | Create and update to all provisioning resrouces |

### 

### senhasegura platform \- Settings



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 167 | Delete | Settings.Authentication.Delete | Delete Authentication resources |
| 168 | List | Settings.Authentication.List | List all Authentication resources |
| 169 | View | Settings.Authentication.View | View Authentication resources details |
| 170 | Write | Settings.Authentication.Write | Create and Update Authentication resources |
| 171 | Delete | Settings.Backup.Delete | Delete Backup resources |
| 172 | List | Settings.Backup.List | List all Backup resources |
| 173 | View | Settings.Backup.View | View Backup resources details |
| 174 | Write | Settings.Backup.Write | Create and Update Backup resources |
| 175 | List | Settings.Eula.List | List all Eula resources |
| 176 | View | Settings.Eula.View | View Eula resources details |
| 177 | Delete | Settings.Notification.Delete | Delete Notification resources |
| 178 | List | Settings.Notification.List | List all Notification resources |
| 179 | View | Settings.Notification.View | View Notification resources details |
| 180 | Write | Settings.Notification.Write | Create and Update Notification resources |
| 181 | Delete | Settings.Services.Delete | Delete services and execution processes resources |
| 182 | List | Settings.Services.List | List all services and execution processes resources |
| 183 | View | Settings.Services.View | View services and execution processes resources details |
| 184 | Write | Settings.Services.Write | Create and Update services and execution processes resources |
| 185 | Delete | Settings.SystemParameters.Delete | Delete System Parameteres resources |
| 186 | List | Settings.SystemParameters.List | List all System Parameteres resources |
| 187 | View | Settings.SystemParameters.View | View System Parameteres resources details |
| 188 | Write | Settings.SystemParameters.Write | Create and Update System Parameteres resources |
| 189 | Delete | Settings.UserManagement.Delete | Delete User Management resources |
| 190 | List | Settings.UserManagement.List | List all User Management resources |
| 191 | View | Settings.UserManagement.View | View User Management resources details |
| 192 | Write | Settings.UserManagement.Write | Create and Update User Management resources |
| 193 | List | User.Desktop.List | List user Desktop reports |
| 194 | View | User.Desktop.View | View user Desktop and dashboards |
| 195 | Write | User.Settings.Write | Edit user settings |
| 224 | View | System.Dashboards.Admin | View administrative dashboards |
| 166 | Action | Reports.Schedule | Action to schedule the send of reports periodically |
| 225 | List | Reports.Telemetry.List | View telemetry reports |
| 20 | Escrita | System.EmergencyPanel.Control | Emergency panel control |

### Task Manager



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 196 | View | TaskManager.Dashboards.View | View all Task Manager module dashboards |
| 197 | List | TaskManager.Executions.List | List Task Manager executions and operations |
| 198 | View | TaskManager.Executions.View | View Task Manager executions and operations details |
| 199 | Delete | TaskManager.Settings.Delete | Delete Task Manager module Settings resources |
| 200 | List | TaskManager.Settings.List | List all Task Manager module Settings resources |
| 201 | View | TaskManager.Settings.View | Show Task Manager module Settings resources details |
| 202 | Write | TaskManager.Settings.Write | Create and update Task Manager module Settings resources. |
| 203 | Delete | TaskManager.Tasks.Delete | Delete Task Manager tasks |
| 204 | List | TaskManager.Tasks.List | List all Task Manager tasks |
| 205 | View | TaskManager.Tasks.View | View all Task Manager tasks details |
| 206 | Action | TaskManager.Tasks.Execute | Allow user to execute a task |
| 207 | Write | TaskManager.Tasks.Write | Create and update Task Manager tasks |

### senhasegura platform \- Access Control



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 208 | Delete | AccessControl.Delete | Delete Access Control resources from all modules |
| 209 | List | AccessControl.List | List all Access Control resources from all modules |
| 210 | View | AccessControl.View | View Access Control resources details from all modules |
| 211 | Write | AccessControl.Write | Create and update Access Control resources from all modules |
| 212 | Action | AccessControl.Approval | Approve and disapprove requests |

### Settings



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 213 | View | System.AuditTracking.View | View system audit trail |
| 214 | Write | System.Settings.Write | Write system settings |

### Access Control



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 215 | List | AccessControl.Audit | Write system settings |
| 216 | List | AccessControl.CurrentUser.List | List all Access Control requests for current user |

### System Settings



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 217 | List | System.Common.List | List system commons settings |
| 218 | Write | System.Common.Write | Write system commons settings |
| 219 | List | Settings.Tenants.List | List Tenants settings |
| 220 | Write | Settings.Tenants.Write | Write Tenants settings |
| 221 | Write | System.Settings.Orbit | Orbit Accesses system settings |
| 222 | Write | System.Settings.Eula | Eula accepts and manage settings |

### Cloud



| ID | Type | Permission | Description |
| --- | --- | --- | --- |
| 223 | View | Cloud.Operations.View | View all Cloud IAM operations |

## Creating new roles

CautionThe senhasegura update process will automatically update the roles and permissions set in the default installation. The upgrade will not alter the Roles that the administrator has created! It's up to the administrator to constantly review the user and custom roles to ensure the correct assignment of powers.

InfoCreating new roles can increase the risk surface since a small error, such as one too many permissions, can give a user more power than they might otherwise have. That's why senhasegura provides roles according to the most common user types. If possible, use one of the 25 pre\-registered roles and avoid creating new ones.

The roles delivered by senhasegura roles are adequate for the administrator to distribute them to users. But sometimes, it may be necessary that a user receives less access than the registered roles offer.

An appropriate division of responsibilities is reflected in the access privileges granted to users becomes necessary for the proper, efficient, and secure execution of the activities of the senhasegura . For this, we use the concept of Segregation of Duties (SoD).

Let's use as an example a consultant who needs to look only at the operational reports of the module ***Certificate Manager*** without being able to perform actions.

In this case, we do not recommend that the roles ***System Administrator***, ***Certificates Administrator*** and ***PAM Auditor*** be assigned. This would be a great risk for the company, as it would grant you more access than necessary.

We will then create a new ***Role*** for this user.

1. Go to the menu **Settings ➔ User Management ➔ Roles** to list the registered roles;
2. Using the report action, go to the registration form and register a new role called ***Certificate Audit***.;
3. Describe the purpose of this role;
4. Go to the ***Permissions*** tab;
5. Add the permissions that this role can perform.  
You can filter permissions by: **Type**, **Module** and even **Descrip****tion**.  
In the case of this example, the permissions that will be added are:


	* ***CertificateManager.Dashboards.View:*** View Certificate Manager dashboards
	* ***CertificateManager.Reports.List:*** Lists all reports and events related to certificates
	* ***CertificateManager.Reports.View:*** View all certificate\-related reports and events
	* For permissions to be granted correctly, pay attention to the type of each:
	* ***List:*** Permissions to listing in reports
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	* 
	*
	* ***View:*** Permissions to displaying operation details
	* ***Write:*** Permissions for configuring, registering, and changing system records
	* ***Delete:*** Permissions for inactivating system records
	* ***Action:*** This type concentrates actions of administrative operations specific to each module
6. On the ***Users*** tab, add the users that should be associated with this role.  
If the user you want to associate is not yet created you can skip this step.
7. Click ***Save***

### Cloning existing Roles

You can also create a new Role based on an existing one. At the ***Roles*** report, every record has a ***Clone*** action. Clicking on it, senhasegura will create a new Role record based on the choosed record. This new Role can be edited by the administrator adding or removing permissions and users.

CautionA cloned role will not inherit users linked to the originating role.

## User Registration

To create a user, click on the quick action button ***User***, and on the screen will appear the following steps:

1. Set a username. This name is the user representation on the other screens
2. Set the username
3. Into the password field:
4. Leave password field blank if the email service was defined; or
5. Manually enter the password while the email service is not defined
6. The field ***Ignore two factor authentication?*** indicates if this user have no obligation to register and use 2FA OTP token when using the senhasegura 

CautionThis field is not available if the current user is trying to change their own account and it only appears in the edition mode.
7. Confirm that user status is active in the ***Status*** field;
8. Confirm that administrator user has access to Orbit through the ***Access to Orbit*** field;

CautionBe careful about accounts in charge to manage the Orbit Portal. Do not grant without concern a user to do this. Orbit Portal has many services control's. See the Orbit documentation for more details.
9. On the ***Roles*** tab, select the roles that should be assigned to this user.  
As an example, suppose this user should only *consult credentials and perform remote sessions*, in this screen, the role ***PAM User*** should be added.;

CautionIt is possible to add more than one role to a user. However, the administrator must be careful that the roles added do not conflict with the user's activities, giving them higher powers than their responsibilities.
10. On the ***Access Groups*** tab, select the access group the user will be part of, that is, the limit of credentials the user will be able to interact with.
11. Save user with ***Save*** button;

It is now necessary to perform this user validation. Ask the user who owns this account to access senhasegura and log in first. They will be prompted to change the temporary password in compliance with the default security criteria.

### Forgetting a user

senhasegura provides a mechanism to guarantee the right to be forgotten, by being notified by a user that he wishes his data to be removed from the application.

Besides if requested by the user senhasegura can provide a complete report of the data that has been collected from him like:

* Name
* Telephone
* E\-mail
* List of accesses with IP, browser, location and time.

This report can be extracted as an action from the user's screen.

Whenever a report is issued or a user is forgotten alerts are sent to Syslog and e\-mail notifications can also be registered.

To forget a user go to **Settings ➔User management ➔ Users** in the line of the user you wish to forget, go to the Action column and choose ***Forget user***.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28104%29.png)Users form 

  


### Import Users

To import users to senhasegura , go to the menu: **Settings ➔ System users ➔ Batch import**.

Click the ***Choose File*** button to select the file to import and select the desired file and click the ***Open*** button.

Click the ***Import Users*** button to complete the import.

InfoImport spreadsheet templates can be obtained by clicking on the ***With Users*** buttons, for a template with example users and ***Empty***, for an unfilled template file.

## Tokens

Any user can configure his own account to use two steps authentication. You can also force all users to use it at specific actions.

You can see how many users is using two steps authentication, and either cancel tokens, under the report **Settings ➔ Authentication ➔ Multi\-factor authentication**.

### Inactivating a user

To inactivate a user, see the following steps:

1. Go to the user's report on: **Settings ➔ System users ➔ Users**;
2. Filter the report with the desired filtered and locate the registry of the user you wish to inactivate;
3. Click on the action button ***Change***;
4. In the user's form, change the key ***State*** to ***Inactive***;
5. Save changes by clicking on the ***Save*** button

CautionWhen inactivating a user, he will be disconnected from his Web session, as well as all the other proxy sessions in execution. For the senhasegura.go , it will be necessary to wait for application records update time.

Only the senhasegura user account will be inactivated. In case senhasegura is configured to use a external authenticator provider, the provider will not be informed of the inactivation

## Auditing

The permission system audit reports are divided into reports that help identify the permissions that a user has, and reports that help identify changes that have occurred in the permission system.

So the administrator will be able to identify security holes that have occurred or are still vulnerable.

Through the module ***Reports***, you will have access to several audit reports of senhasegura . At this book, we will focus only on the reports pertinent to the The Access Control Layer.

In the ***Permissions*** menu you have access to the following reports:

* Roles by user:


	+ Check which roles have been assigned to each user
	+ Even inactive users are considered
	+ The filter can be user\-based, role\-based, or both
* Permissions by user


	+ Check which permissions have been granted to each user
	+ The filter can be based on user, permission or both
* Audit logs


	+ View history of changes made to roles
	+ You can identify which users made the change when they made it and what was changed
	+ Filter by period, user, and operation
* Permissions migration


	+ See which roles compared to the permission system of previous versions of the senhasegura were added, kept, or removed
	+ The filter can be based on user code, permission or status
