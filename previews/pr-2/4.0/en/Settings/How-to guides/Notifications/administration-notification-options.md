# Notification Options

This document provides information about the **Notifications** on Segura, which displays information about the notifications that are avaliable at Segura.

## Access Control

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Created request** | A new approval request has been made by a user. Approvers will receive an email with details |
| **Request approved** | Some approver user has accepted the request |
| **Request Disapproved** | Some approver user has rejected the request |
| **Request revoked** | Some user of type approver revoked the order and the user who requested it will receive a notification with the reason for the revocation |
| **Approver management** | A user has been registered as an approver |

## Audit Trail

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Audit trail** | When a major entity is created, updated, or inactivated, a detailed log is registered and can also be notified |

## Authentication

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Authentication messages** | When a user is authenticated or some authentication process fails |
| **MFA will be ignored for this user** | When using MFA is disabled |
| **MFA won't be ignored for this user** | When using MFA is enabled |

## Certificates

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Certificate bond with device** | When a certificate is configured into a device |
| **Certificate creation** | When a certificate is created. Can be triggered by automatically issue or manual import |
| **Certificate expiration alert: Today** | Some certificates will be expired today |
| **Certificate expiration alert: 1 day** | Some certificates will be expired on 1 day |
| **Certificate expiration alert: 7 days** | Some certificates will be expired on 7 days |
| **Certificate expiration alert: 30 days** | Some certificates will be expired on 30 days |
| **Certificate expiration warning: 15 days** | Some certificates will be expired on 15 days |
| **Certificate expiration warning: 60 days** | Some certificates will be expired on 60 days |
| **Certificate expiration warning: 90 days** | Some certificates will be expired on 90 days |
| **Certificate password view** | Some user has viewed the certificate password on plain-text |
| **Certificate renewal** | A certificate has been renewed at targets devices |
| **Certificate revocation** | A certificate has been revoked at targets devices |
| **Download** | Some user has downloaded a certificate from Segura |
| **Publish profile management** | A publish profile configuration has been created or changed |
| **Request management** | A certificate request CSR has been created or changed |
| **Request password view** | A certificate request CSR password has been viewed |

## Cloud

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **IAM session without owner** | When a session in a cloud account has no owner |
| **IAM key view without owner** | When an IAM key preview occurs in a cloud account that has no owner |

## Command Audit

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Command detected - Allow** | Some user has executed an audited command |
| **Command detected - Block** | Some user has tried to execute an audited command configured to be blocked |
| **Command detected - Block and interrupt a session** | Some user has tried to execute an audited command configured to be blocked. His session was immediately interrupted |
| **Command detected - High Criticality** | Some user has tried to execute an audited command configured with high score |
| **Command detected - Medium Criticality** | Some user has tried to execute an audited command configured with medium score |
| **Command detected - Low Criticality** | Some user has tried to execute an audited command configured with low score |

## Credentials

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Credential Owner configuration** | Some credential has been created or changed to has a dedicated owner |
| **Password changed** | Some credential has it password changed manually or by Execution module template |
| **Password daily summary** | A report with credentials operations summary |
| **Password Expired** | A report with credentials with expired password |
| **Password Viewed** | A report with credentials that has been requested by users to see its plain-text passwords |
| **Password confirmed** | A report with credentials with passwords confirmed |
| **Invalid password** | A report with credentials with invalid passwords |

## Devices

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Lost of connectivity** | Devices that lost connectivity over the configured ports |
| **Connectivity restored** | Devices that recovery connectivity after been flagged as connectivity lost |

## Domum

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **New location** | Some user made Domum login from a new geoip location |
| **Unexpected location** | Some user tried to access Domum from an unauthorized geoip location |
| **Panic Button** | When the panic button was pressed |
| **Domum health check** | Status on the health of access to Domum |

## Emergency Panel

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Terminate sessions** | When the emergency button has been pressed |
| **Lockdown started** | When Lockdown was started on the system |
| **Lockdown finished** | When Lockdown was finished in the system |
| **Freezing started** | When Freezing was started on the system |
| **Freezing finished** | When Freezing was started on the system |

## Master Key

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Failed recovery attempt** | When the user tries to recover the backup and an error occurs |
| **Successful recovery attempt** | When the user successfully recovered the backup |

## Monitoring

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **CPU Usage - Critical** | CPU is running over 90% usage over 10 minutes |
| **CPU Usage - High** | CPU is running over 70% usage over 10 minutes |
| **Daily report of change of passwords** | A report with credentials operations summary |
| **Low disk space - High criticality** | Storage is running under 10% of free space |
| **Low disk space - Low criticality** | Storage is running under 30% of free space |
| **Low disk space - Medium criticality** | Storage is running under 20% of free space |
| **Memory Usage - Critical** | RAM is running over 90% usage over 10 minutes |
| **Memory Usage - High** | RAM is running over 70% usage over 10 minutes |
| **Space disk - Daily notification** | Storage usage daily report |
| **User downloaded the PDF with system dashboard** | Some user has downloaded a dashboard as PDF |

## Password Backup

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Backup performed** | A privileged information backup has been made using the master key. This backup execution can be executed automatically by system schedule, or manually by user request |
| **Error on backup** | An error occurred during a privileged information backup |

## Password Operation

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Activation executed** | A credential has been activated into target device by Execution module |
| **Change Executed** | A credential has taken its password changed into target device by Execution module |
| **Error on activation** | An error occurred when tried to activate into target device by Execution module |
| **Error on change** | An error occurred when tried to change password into target device by Execution module |

## Protected Information

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Information changed** | Some protected information has been changed |
| **Information expired** | Some protected information has expired |
| **Information viewed** | Some user requested protected information data. This user had access to its password, file or content |

## Remote Session

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Generate video for download** | Some user requested MP4 video generate |
| **Indexed text session** | Segura finished to index a proxy session texts |
| **Session file modified** | A session had its audit source file changed |
| **Session started** | A proxy session is started |
| **Session terminated** | A proxy session is finished |
| **Video scheduled for download** | The requested video generate has finished |
| **High Risk Session** | It was identified a high-risk session |

## Schedule Reports

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Report scheduling - Creation** | When a report schedule was created |
| **Report scheduling - Update** | When a report schedule has been updated |
| **Report scheduling - Deletion** | When a report schedule has been deleted |

## User Behavior

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Access unusual credential** | Some user is requesting a plain text view of an unusual credential for them |
| **Access unusual origin** | A proxy session started by some user from an unusual origin for that user or credential |
| **Access unusual target** | - |
| **Access with unusual average length** | A proxy session with a unusual duration time for that user or credential |
| **Accesses at unusual time** | A proxy session with a unusual starting time for that user or credential |
| **Unusual password change** | - |
| **View unusual credential** | Some user is requesting plain-text view of an unusual credential for him |
| **View unusual origin** | Some user is requesting plain-text view of an unusual origin IP |

## Workstation

| Tipo de Notificação | Descrição |
|---------------------|-----------|
| **Alert** | System alert messages related to errors |
| **Application completed** | An impersoned application execution has ended |
| **Application started** | An impersoned application execution started |
| **Application malware analysis** | - |
| **Control panel** | An impersoned control panel applet has been accessed |
| **Copy password** | A credential password has been copied |
| **Credential use for network access** | A credential has been used to access a network sharing |
| **Directory and file scan - Change** | The directory and file scan changed some permission policies based on backoffice configuration |
| **Directory and file scan - Exclusion** | The directory and file scan removed some permission policies based on backoffice configuration |
| **Directory and file scan - Inclusion** | The directory and file scan added some permission policies based on backoffice configuration |
| **Download of Segura.go version performed** | The Segura.go client has downloaded a new version from backoffice |
| **Error retrieving credentials** | An error occurred when the Segura.go client tried to request the user credential list |
| **Go offline** | The user requested to start Segura.go offline mode |
| **Go online** | The user requested to stop Segura.go offline mode |
| **Macro** | A macro was executed by some user |
| **Network Adapter** | A network adapter settings applet was accessed by some user |
| **Network share** | A network share path has been registered by some user |
| **New Segura.go version** | A new Segura.go version is available at Segura backoffice |
| **Runas** | An impersoned application execution started from Windows context menu |
| **Segura.go version approved** | The MSI installer has been approved by administrator to be installed automatically from Segura.go client |
| **Segura.go version disabled** | The MSI installer has been rejected by administrator to be installed automatically from Segura.go client |
| **Segura.go version installed** | Some workstation has installed the new version and reported to backoffice |
| **Uninstall** | The user uninstalled some application using Segura.go elevation |
| **Untrusted DLL execution attempt** | The user tried to execute an application that has a DLL considered as untrusted |
| **User** | The workstation local user has been approved to use Segura.go |
| **Using UAC** | The user used Segura.go to authenticate Windows UAC prompt |
| **View password** | The user viewed the credential password as plain-text |
| **Workstation approved** | The workstation has been approved to use Segura.go |
| **Workstation registration** | The workstation requested authorization to use Segura.go |