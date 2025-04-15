# Changelog v3.33

**Release date**: TBD

Check below the new features, improvements, and errors fixed in this version of senhasegura.

* * *

## ⚙ Changelog per Product

### PAM - Credential Management

#### Product Updates

| Item | Description |
|---|---|
| 2571 | Implemented automatic generation of the `identifier` field based on UUID (Universal Unique Identifier) ​​in the Additional Settings tab of the credential. If the user does not inform the `identifier` when creating the credential, the system will create a unique identifier automatically. The generated value can be modified later. |

#### New Feature

| Item | Description |
|---|---|
| 2060 | Fixed the behavior of access groups that previously did not correctly consider the sequence of approver levels, allowing the registration of approvers with levels out of order (1, 2, and 3). A validation was added that now prevents the access group from being saved if the approver levels do not follow the correct sequence. For example, it is only allowed to have approvers at levels 1 and 3 with an approver at level 2. |

### PAM - Session Management

#### Bug Fixes

| Item | Description |
|---|---|
| 2807 | Fixed the error where the livestream of HTTP sessions on the Web Proxy wasn’t closed when the user ended the session.|
| 2851 | Fixed access error with x11 connectivity on port 22.|
| 2871 |Improvement in Emergency Panel Locking. Adjustment in the Emergency Dashboard to ensure that HTTP, SSH, and TELNET web sessions are correctly blocked during the freeze period. Ensuring greater compliance with access policies during emergency situations.|
| 2960 |Fixed high CPU consumption behavior when starting Database Proxy Ms SQL Server sessions.|
| 2974 |Removal of features in Web Session Parameters. The Extra field and the Virtual HTML Keyboard and External Virtual Keyboard options were removed from the Action field in Web Session Parameters.|
| 3278 |Fixed crash error when starting MS SQL sessions using the DBeaver client.|
| 3844 |Fixed error when logging into Terminal Proxy with Telnet connection.|
|3924| Fixed the error where the Invalid Server message appeared when connecting via the Database Proxy Oracle.|
|3925| Fixed the error that didn't allow the session to be started via Database Proxy when the user has a TOTP Token.|

#### Product Updates

| Item | Description |
|---|---|
| 2364 |Change Audit now also audits sessions using the Proxy Terminal.|
| 3025 |Adjustment for acceptance of credential username containing the @ character in Terminal Proxy sessions via command prompt.|
| 2541 |Removed the Process groups individually field from System Parameters in the Access Control section. This makes the interface more intuitive and management more simplified without changing existing functionality.|
| 1757 |The permission for Video Viewing and Livestream actions has been split into two separate permissions, allowing more granular access to be defined for administrators and auditors, aligning permissions with the specific responsibilities of each user.|
| 2329 |A warning is included in sessions via Terminal Proxy and RDP Proxy, when a password is changed or expired, guiding the user on how to register a new password.|


#### New Feature

| Item | Description |
|---|---|
| 3111 |Added new connection strings for proxies when used with multi-tenant.

### PAM - Settings

#### Bug Fixes

| Item | Description |
|---|---|
| 2621 | Fixed a problem in the generation of the OAuth2 token after updating to Debian 12, where the format sent for generation was different from what was previously expected.|
| 2847 | Fixed an error when backing up credentials via RSync that occurred when the credential used contained special characters. |
| 2253 | Fixed the problem of converting the characters &, < and > to entity codes in the password field of the user form when the form is reloaded due to an error in the data.|
| 2813 | Fixed the internal server error that occurred when checking and confirming available updates, caused by an incorrect argument of type array instead of string in the task saving process. |
| 2670 | Fixed the problem that caused the description of a cloned role to appear as an editable I18N string. |

#### Product Updates

| Item | Description |
|---|---|
| 2389 | A message has been added advising the user that it's not possible to have the same email registered with Domum and PAM.|
| 1692 | Added the Deactivation Date field for the user in the user's tab.|
| 2673 | A non-parameterizable password policy has been added for the mt4adm user, applicable from version 3.33 of senhasegura. The policy includes: a maximum of three password attempts, a minimum of 12 characters, at least one lowercase letter, one uppercase letter, one number, one special character, 10 changes from the previous password, and a ban on passwords in common wordlists.|
| 1757 | The permission for Video Visualization and Livestream actions has been split into two separate permissions, allowing more granular access to be defined for administrators and auditors, aligning permissions with the specific responsibilities of each user. |
| 2445 | The libraries and tools used by senhasegura were updated. |
| 2380 | A warning has been added to the OpenID provider registration screen, informing the user that they must fill in the OpenID endpoint configuration field or the URL of other endpoints. The warning on the screen has been modified to take account of the change. It will now appear, in red, just above the indicated fields with the message “Fill in at least the OpenID endpoint configuration or the URL of other endpoints”. |
| 3914 | The Scripts, Tasks, Processes, Scheduled, and In execution, which were accessible via Grid Menu > Settings > Services > Robots and Tasks, have been removed due to an architectural change. |

#### Translation Fix

| Item | Description |
|---|---|
| 3788 | A misspelling has been corrected in the Behavior section of the System Parameters. Where it used to read Visualizção, it now reads Visualização.|
| 3769 | A translation error has been corrected where the Start Date and End Date columns in the Batch Import Processing report, accessible from Settings > User Management > Batch import, were displayed in Portuguese even when the user's language was set to English.|
| 3840 | Typos in user permissions in English have been corrected. Where it used to read List all Virutal Machines resources, it now reads List all Virtual Machines resources; where it used to read View Virtual Machines resources details, it now reads View Virtual Machines resources details, and, where it used to read Create and update to all provisioning resources, it now reads Create and update all provisioning resources.|
| 3762 | A translation error has been corrected in the English sentence on the backup screen in Orbit Config Manager > Settings > Backup. Where it used to read How will the how to send backup files? it now reads How will backup be sent?.|

### Orbit

#### Bug fixes

| Item | Description |
|---|---|
| 3414 | The orbit apt-fix --force command has been deprecated. If the administrator tries to use the command, they will receive the message: “This command is deprecated. Use orbit repository configure stable”. |

#### Product Updates

| Item | Description |
|---|---|
| 3414 | The orbit repository configure command has been implemented in order to allow the administrator to configure repositories on senhasegura.|

### Task Manager

#### Product Updates

 Item | Description |
|---|---|
| 2048 | Updated the Task Manager logo to reflect the color scheme used in other senhasegura product logos, ensuring a cohesive and recognizable visual identity across the entire product line.|

#### Removed

 Item | Description |
|---|---|
| 3069 | Removed the parameters Allow file transfer*, Maximum transfer limit (in kb)*, and File retention time (in days, 0 for unlimited)* from the System settings screen.|

### Behavior

#### Bug fixes

 Item | Description |
|---|---|
| 765 | Fixed a scaling issue in the Sessions and Views charts that was incorrectly showing more sessions and views with risk than total sessions and views.|

#### Product Updates

 Item | Description |
|---|---|
| 765 | Renamed the tables available on Dashboards > PAM Core > Behavior. Their names are now Top 5 sessions with risk. Top 5 views with risk, Last 5 sessions with risk, and Last 5 views with risk.|
| 765 | Renamed the terms accesses to sessions in charts and tables for more clarity and consistency.|

#### New Feature

 Item | Description |
|---|---|
| 785 | Added the Continuous Identification feature, which requests additional verification of the user's identity upon detecting unusual actions during a session or password viewing.|

### A2A

#### Bug fixes

 Item | Description |
|---|---|
| 2816 | Fixed the issue that resulted in an Internal Server Error when creating an authorization for an application. This error occurred after filling out the Security settings, using the * character in the Authorized IPs field, and selecting the Read and write option in PAM resource permission*, followed by clicking Save.|

#### Product Updates

 Item | Description |
|---|---|
| 2900 | Fixed the naming inconsistency in the SSH key and credential APIs' responses regarding the `identifier` field, previously named `tag`. Now, the APIs return the correct naming, consistent with the request parameters and eliminating any confusion. This update affects the `GET` and `POST` by `id` methods for the `/api/pam/credential/` endpoint and the `POST` method for `/api/pam/key`..|
| 2571 | Implemented automatic generation of the `identifier` field using UUIDs (Universally Unique Identifiers) in the Additional settings tab of credentials. If you leave the `identifier` field blank, the system will create a unique identifier for you. You can still modify this generated value later to something more meaningful or appropriate for your environment.|

### Discovery

No changes.

### PEDM - Linux

No changes.

### PEDM - AD Bridge

No changes.

### PEDM - Windows

#### Bug fixes

| Item | Description |
|---|---|
| 3463 | Fixed error 'Error on receive request operation, please check the backend system log' when opening the agent. |
| 3271 | Fixed error that displayed the message 'SQLite Error 10: disk I/O error' in the agent when attempting to synchronize policies or elevate privileges in applications. |
| 3669 | Resolved an issue that caused the message "An error occurred while trying to access the database" when running the GRRF program through senhasegura.go agent. |
| 3610 | Resolved issue where privilege elevation did not function properly on network shared drives when using senhasegura.go. |
| 2363 | Resolved an issue where the emergency access workflow in GO Windows 3.31.0.3 and 3.31.1-7 did not grant the expected application access. |

#### Product Updates

| Item | Description |
|---|---|
| 3134 | Windows 11 added to the list of supported versions for core features. |

### DSM (DevOps Secret Manager)

#### Bug fixes

| Item | Description |
|---|---|
| 2818 | Fixed the problem that allowed a start time greater than the end time to be entered in the justification window when viewing the details of a secret with a user in an access group that requires justification.|

#### Product Updates

| Item | Description |
|---|---|
| 2779 | Adjusted the validation of credential names to allow the use of hyphens (“-”), in accordance with Azure rules and ensure the correct execution of automation that uses secrets with this character. |

### Cloud IAM

#### Bug fixes

| Item | Description |
|---|---|
| 3639 | Fixed the display of an error message during Google Cloud account creation in the Cloud IAM module. |

### Executions

#### Bug fixes

| Item | Description |
|---|---|
| 2452 |Fixed an error in the password change template in a web application using Selenium in the Safari browser.|

#### Product Updates

| Item | Description |
|---|---|
| 2672 |Added support for Kerberos authentication, using Windows RM to change passwords for local users.|

### MySafe

#### Bug fixes

| Item | Description |
|---|---|
| 2846|Fixed an inconsistency in MySafe reports where the id filter remained visible even after all filters were cleared.|
| 2040|Fixed the issue on the MySafe homepage where the character ç would break when combined with a special character when creating an API secret with the said character in its name.|
| 2840|Fixed an issue that caused an encryption error when querying notes longer than 970 characters. The limit is now 900 characters per note.|

#### Product Updates

| Item | Description |
|---|---|
| 2048 | Updated the MySafe logo to reflect the color scheme used in other senhasegura product logos, ensuring a cohesive and recognizable visual identity across the entire product line.|
| 1786 | Added the API secrets item to the admin panel dashboards.|
| 2925 | Adapted and unified the bulk import process to the tenant model..|

#### New Feature

| Item | Description |
|---|---|
| 27 | Added the ability to temporarily share items with users outside of MySafe. To use this feature, the connection with the senhasegura vault is necessary.|
| 27 | Added the Sharing options screen within the Admin menu so that the administrator can configure external sharing of items and enter the base URL of the MySafe vault.|

### MySafe extension

#### Bug fixes

| Item | Description |
|---|---|
| 1957 | Fixed the issue where the MySafe extension would incorrectly suggest saving passwords on websites where the login fields were already populated by the extension itself.|

#### Product Updates
| Item | Description |
|---|---|
| 2388 | Added the possibility to integrate multi-factor authentication (MFA) tokens with passwords stored through the MySafe extension.|
| 1753 | Removed the Edit option for users with view-only permissions for shared passwords.|
| 1565 |Expanded the automatic detection of username and password fields in the MySafe extension to more websites. |

#### Translation fix

| Item | Description |
|---|---|
| 2508 | Fixed a typo in the word Search in the search field of the English version of the extension.|

### Domum

#### Bug fixes

| Item | Description |
|---|---|
| 2491 |Fixed error loading data in Grid Mode for third-party users.|

#### Product Updates

| Item | Description |
|---|---|
| 2925 |Adapted and unified the batch import process for the tenant model.|
| 2562 |Created the GeoIP database execution log file.|
| 2007 |Implemented generation of first access for limited users after batch import.|
| 3842 | Corrected request filtering, including LFI (Local File Inclusion) in the Domum Monitoring Center dashboard.

#### New Feature

| Item | Description |
|---|---|
| 2099 |Added new nomenclatures, Limited User and Full User, for user classification within the platform.|

#### Translation fix
| Item | Description |
|---|---|
| 2790 |Fixed the translation error in Access Reasons, all fields were changed to the default in English.|
| 3268 |Fixed the error where some strings in the module didn't display the message correctly.|

### Certificate Manager

#### Bug fixes

| Item | Description |
|---|---|
| 3328 | Fixed an issue where senhasegura was unable to authenticate successfully with Entrust during certificate lifecycle management (CLM) processes. |

#### Product Updates

| Item | Description |
|---|---|
| 3329 | Improved the Entrust integration that caused certain signing profiles to malfunction, preventing the issuance of certificates. |

#### Translation fix

| Item | Description |
|---|---|
| 2573 | Fixed a translation issue where the word Request in the actions menu (three dots) of the Certificates > Requests section wasn’t being translated into Portuguese.|

### Mobile App

#### Bug fixes

| Item | Description |
|---|---|
| 3336 | Fixed the issue that generated an invalid QR code due to the absence of a registered email. Now, if the user doesn't have an email associated with their account, they will be notified about the need to register one.|

#### Product Updates

| Item | Description |
|---|---|
| 2388 | Added the possibility to integrate multi-factor authentication (MFA) tokens with passwords stored in MySafe through the senhasegura mobile app.|
| 2230 | Added the Can't read it? Click here to type the code link on the senhasegura mobile app home screen. This feature provides an alternative for users who have difficulty using the camera, allowing them to manually enter the code if they can't scan the QR code. |

### Network Connector

#### New Feature

| Item | Description |
|---|---|
| 2404 | Added Integration of the Network Connector with Multi-Tenant functionality. |

### Arbitrator

No changes.

### Load Balancer

No changes.


* * *

## Other versions

You can see the older [documentation versions here](https://docs.senhasegura.io/docs/pt/old-versions).
