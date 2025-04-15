## Access control

Link to the reference [document](/v3-32/docs/pam-session-system-parameters-access-control) for this section.



---

## Remote sessions

Link to the reference [document](/v3-32/docs/pam-session-proxy-settings) for this section.



---

## Security

Link to the reference [document](/v3-32/docs/pam-session-system-parameters-security) for this section.



---

### Security settings

Go to **Settings ➔ System Parameters ➔ Security** to find additional security settings:

#### User accounts maintenance

* Minutes before a session expires: **0 to 120\.**
* Failed login attempts: **2 to 6**attempts before the account is locked.
* Inactive accounts **0 to 120 days** of inactivity before the account is disabled.
* Require password change on first access.
* Password expiration time: **1 to 120 days** before a password expires.

#### Multi\-factor authentication

* Require all users to use multi\-factor authentication.
* Require all users to have a digital certificate.
* Allow the use of third\-party multi\-factor authentication applications.
* Enable "Trust this computer" for **1 to 72** hours.
* Accept tokens generated up to **60 to 270** seconds before.

#### Password security level

* **Minimum password length****:** between 8 and 100 characters
* **Minimum number of numeric digits:** between 1 and 100
* **Restrict password reuse:** 0 to 100 previous passwords are stored to prevent reuse.
* **Require symbols:** if checked, passwords must contain symbols.

#### Access control by IP

* **Allow All/Deny All:**
* **IP address ranges:**
	+ Start
	+ End
	+ Action
		- Allow all
		- Deny all

#### Adaptive MFA by location

* **IP address ranges:**
	+ Start
	+ End
	+ Action
		- Require MFA
		- Skip MFA

Note***Trust This Computer*** can only be enabled for a user using the Web Interface. This option is not available for other types of proxies.



---

## Executions

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Executions**:

* **Number of change attempts****:** between **1 to 10**
* **Connection timeout (s):** between **1 and 300**seconds of inactivity before the connection is terminated.
* **Read timeout(s):** between**1 to 300**seconds without a response before a command request is terminated.
* **Total cycles per instruction:**between **1 to 10,000** cycles.
* **Time between attempts (min):** minimum time, between **0 and 1440 minutes**, before the next attempt to change a password using a template.
* **Time between failed attempts (min):** minimum time, between **1,440 and 10,080** minutes, before the next attempt to change a password after a previous failed attempt.
* **Template Approval workflow:** choose **Yes** or **No**to decide whether new templates need to be approved before they can be used.



---

## User Behavior

Link to the reference [document](/v3-33/docs/user-behavior-system-parameters) for this section.



---

### User behavior notifications

Go to **Settings ➔ Notifications ➔ Settings** to set up notifications associated with unusual user behavior. In the actions menu, add a new notification and filter by **User Behavior**. Notification options include

  


* Access at an unusual time
* Access of unusual duration
* Access from unusual origin
* Unusual password change
* Access to unusual target
* Access from unusual credential
* Request from unusual origin
* Request with unusual credential



---

## Notifications

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Notifications:**

### SMS configuration

* **Communication platform:** select Zenvia SMS.
* **Sender:** the person sending the message.
* **User:** your Zenvia SMS username.
* **Password:** your Zenvia SMS password.

InfoFor more information, access [Zenvia](https://www.zenvia.com)'s website.



---

## Application

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Application.**

### Application connection settings

* **Network connector:** select **senhasegura self\-managed****\- NCagent:30200**. This is the default agent to connect to third\-party systems.

Important* In case you want to back up your credentials (secrets), you must specify a network connector.
* It isn’t possible to back up the database and videos (system).
* In case you’re a SaaS customer, you must allow communication from senhasegura to your server across your firewall for the protocols used.
InfoIf the target device has no network connector, but senhasegura's application has connector settings, you can still use it to:

* change passwords.
* start sessions.
* send data to the SIEM.
* run a connectivity test.
### Credentials and device settings

* **Force password change after a batch import?:**choose**Yes** or **No** to decide whether passwords should be changed after importing multiple credentials at once.
* **Use the additional information of a unique key?:****Yes** or **No**.
* **Use the credential type of a unique key?:****Yes**or **No.**
* **Additional fields (1 and 2\):** choose a name for the additional fields.

### Reports settings

* **Data entries per page:** default number of entries (between 1 and 1,000\) listed on each report page.
* **Data entries per page (máx.):** maximum number of entries (between 1 and 1,000\) a user can choose to see on each report page.
* **Hide filters by default?:****Yes** or**No**.
* **Add hours and minutes to the data filter?:** choose **Yes** or **No** to decide whether users should be able to filter results by specific time periods.

### General application settings

* **Default language****:**select one of the available languages:
	+ Deutsch
	+ English
	+ Español
	+ Français \[BETA]
	+ Polski
	+ Português
* **Enable login banner?:** choose **Yes** or **No** to show or hide a login message.
* **Redirect on module change?**: choose **Yes**or **No**to determine whether, when you change modules, the page for that new module will load automatically rather than requiring additional clicks to navigate to the desired screen.
* **Login banner:** write a message to be shown to users immediately after login.
* **Remote backup credential:** select one of the registered credentials by its IP address, Hostname, or Username.

### Trusted IP Address Settings

* **Application IP address:** add a trusted IP address.
* **Trusted IP addresses:** a list of all IP addresses that are trusted by the platform.

### Master key ceremony

* **Require MFA in Master key ceremonies?:** choose **Yes** or **No** to decide whether an authentication token should be required when performing the master key ceremony.

ImportantUnchecking this option will reduce the security of your vault.



---

## LDAP / Active Directory

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ LDAP / Active Directory.**

### LDAP service settings

* **Disable users without a group when synchronizing?:**choose**Yes** or **No** to decide whether a user who has not been added to any groups should be deactivated in the sync process.
* **Use a vault credential on authentication?:** choose **Yes**or **No** to decide whether a credential is required to perform an authentication.

### Login options

* **Update username when logging in?:** choose **Yes** or **No** to enable or disable this option.
* **Update email address when logging in?:** choose **Yes** or**No** to enable or disable this option.
* **Update local password when logging in?:** choose **Yes**or **No**to enable or disable this option.
* **Enable local user after login?:** choose **Yes**or **No** to enable or disable this option.
* **Block inactive users from logging in?:** choose **Yes** or **No** to enable or disable this option.

### Domain settings

* **New domain:** add a new domain.
* **Domain:**domain name.
* **Domain (Short Name):**an alias for the domain name.

NoteYou cannot delete a domain that is still associated with a device or credential.



---

## GO Endpoint Manager

### GO Endpoint Manager for Windows

1. Log in to senhasegura.
2. Go to **Settings ➔ System Parameters ➔ System Parameters ➔ go Windows**.

#### Modules

* **Enable credentials?:**choose **Yes** or **No** to enable or disable this option.
* **Enable applications?:** choose **Yes** or **No** to enable or disable this option.
* **Enable uninstall?:** choose **Yes** or **No** to enable or disable uninstalling GO Endpoint Manager.
* **Enable network sharing?:** choose **Yes** or **No** to enable or disable this option.
* **Enable network interface?:** choose **Yes** or **No** to enable or disable this option.
* **Enable control panel?:** choose **Yes** or **No** to enable or disable this option.

#### Installation settings

* **Allow auto\-approval for workstation links?:**choose **Yes**or **No**to decide whether a workstation request from a valid GO Endpoint Manager license should be automatically approved.
* **Allow auto\-approval for a user's first link?:** choose **Yes**or **No**to decide whether the first request from a previously approved device should be automatically approved.
* **Allow auto\-approval of all other links?:**choose **Yes**or **No**to decide whether to automatically approve all subsequent users who request access from a previously approved device.
* **Enable automatic updates for the client software?:** choose **Yes** or **No**to decide if GO Endpoint Manager should update automatically if a new version is available on the server.
* **Enable user expiration time?:** choose **Yes** or **No** to decide whether a user's access approval should expire after a set period of time.
* **User expiration time:** Days after approval before a user expires. The time limit for a user approval form.

#### General settings

* **Enable offline use?:** choose **Yes**or **No**to decide whether users should be able to run GO Endpoint Manager without an internet connection.
* **Enable UAC integration?:** choose **Yes**or **No**to enable the use of senhasegura during UAC operations. Users can choose to enter a credential to continue the process.
* **Enable controlling Windows applications?:**choose **Yes**or **No**to enable or disable this option. If enabled, GO Endpoint Manager will activate the driver that monitors Windows applications and intervene whenever an application is not in the allowlist (or is in the denylist). Only user session applications will be evaluated.
* **Enable session recordings?:**choose **Yes**or **No**to decide whether to video record applications with elevated privileges.
* **Deactivate certificates automatically after an intrusion attempt?:** choose **Yes**or **No**to decide whether the unique certificate that a workstation uses to communicate with the server should be disabled if the server detects an intrusion attempt.
* **Enable application malware and reputation scans?:** choose **Yes**or **No**to decide whether you want to scan an application for malware and status.
* **Time between credential requests:** if a Workstation is online, update a secure cache of the credential's details from time to time.

NoteBe careful when configuring this parameter, as it can lead to a system overload. The shorter the time, the more resources this feature will use.* **VirusTotal API token:** connect to VirusTotal's API to run subsequent analyses.
* **Enable DLL analysis?:** choose **Yes**or **No**to enable or disable this feature.
* **New trusted directory:** add a directory you trust.
* **Directory path:** add the path to this directory in your operating system.
* **Ignore directory during scan:** check if you want to skip a given directory during the scan.
* **Directory path:**add the path in your operating system to the directory you want to skip.

NoteThis field accepts regular expressions.### Workflow settings

#### Elevation settings

* **Users can elevate applications:** check this box to enable this function.
* **Require a justification to elevate applications:** check this box to require users to first provide a justification before elevating the privileges of an application
* **Require approval to elevate applications:** check this box to require approval before users can elevate the privileges of an application
* **Approvals required:**if the previous box has been checked, decide how many approvals are required for a user to elevate the privileges of an application
* **Denials required to cancel:** how many request denials are required to prevent a user from elevating the privileges of an application.
* **Allow emergency access:** check this box if you want to allow emergency access.
* **Multi\-level Approval:** check this box to enable multi\-level approval workflows.

#### Access request settings

* **Require governance ID when providing a justification?:** choose **Yes**or **N****o**to enable or disable this option.
* **Always require approval from a user's manager?:** choose **Yes**or **No**to decide whether the manager of a particular user should always be one of the approvers for this user's requests.

#### Network access

* **Block access to the network?:** when enabled, denies access to any user who tries to establish a TCP or UDP connection.
* **Block user:**  when enabled, blocks the user who tries to access the network repeatedly.
* **Occurrences (minimum):** Failed attempts before a user is blocked. Between 1 and 10\.

#### JIT/Elevation methods

* **Enable JIT access?:**choose **Yes**or **No**to enable or disable this option.
* **Prevent elevation of privilege?:**choose **Yes**or **No**to decide whether senhasegura should deny any requests to elevate the privileges of an application outside senhasegura.go.
* **Block user:** choose **Yes**or **No**to decide whether senhasegura should block a user who tries to elevate the privileges of an application repeatedly.
* **Occurrences (minimum):** Failed attempts before a user is blocked. Between 1 and 10\.

#### Authentication

* **Enable multi\-factor authentication at login?:** Yes/No.
* **Enable Single Sign\-On?:**choose **Yes** or **No**to decide whether GO Endpoint Manager can start an authenticated senhasegura web session in the user's default browser without a password. If an MFA token is required, senhasegura’s web service will request it before authentication.

#### Messages

* **Execution message:** message shown to the user when an application is running on GO Endpoint Manager.
* **Execution block message:** message shown to the user when a request is blocked on GO Endpoint Manager.

### GO Endpoint Manager for Linux

Go to **GO Endpoint Manager ➔ Settings ➔ Parameters ➔ go Linux** and open the GO Endpoint Manager tab.

* **Allow auto\-approval of workstation links?:**automatically approves a workstation with a valid Go Endpoint Manager license.
* **Allow auto\-approval for a user's first link?:** automatically approves the first request from a previously approved device.
* **Allow auto\-approval of all other links?:** automatically approves all subsequent users who request access from a previously approved device.
* **Enable user expiration time?:** a user's access approval automatically expires after a set period of time.
* **User expiration time:**Days after approval before a user expires. The time limit for a user approval form.

#### AD Bridge

* **Allow auto\-approval of a workstation link?:** automatically approves an integration from a workstation with a valid Go Endpoint Manager license.
* **Domain:** the domain of your account.
* **Credential****:** previously created credential for this integration.
* **LDAP Uri:** add your IP address to AD.
* **Use SSL?:** if you are using LDAPS, choose **Yes**.
* **DN Bind:** username used to connect to the LDAP service.
* **DN Base:** the beginning of the path that the LDAP server should use to search for a user's authentication in the directory.
* **User DN:** location of the user path.
* **User filter:** how to find the user. Populate this field with the following filter: **(objectClass\=user)**
* **User UID:** populate this field with the following variable: **sAMAccountName**
* **Username:**populate this field with the following variable: **displayName**
* **User's HOME directory path:** populate this field with the following path: **"/home/$sAMAccountName"**
* **User shell:**populate this field with the following path:**"bin/bash****"**
* **Group DN:** fill in to force group authentications.
* **Group filter:** how to find a group. Populate this field with the following filter: (objectClass\=group)
* **Group name:** populate this field with the following variable: **sAMAccountName**

#### Messages

* **Execution message**: message shown to the user when an application is running on GO Endpoint Manager.
* **Execution block message:**message shown to the user when a request is blocked on GO Endpoint Manager.



---

## Task Manager

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Task Manager**:

* **Enable file transfer:** choose **Yes**or **No**to decide whether file transfers will be allowed when using **Task****Manager**.
* **Maximum transfer limit (in KB):** maximum limit allowed when transferring files.
* **File retention time (in days):**how long the files should be kept in the system. Type 0 to make it unlimited.



---

## Domum

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Domum:**

* **Employees domain:**domain used in employee's access links.
	+ **E.g.:**int.domum.senhasegura.com.
* **Third\-party domains****:**the domain used in the access link of the DNS server/Email settings:
	+ **E.g.:**domum.senhasegura.com.

### Email settings

* **Sender:** email account that will send the remote access link.

### First authentication token

Indicates how to send the first access token:

* Email
* SMS
* ---

## MySafe

Link to the reference [document](/v3-33/docs/mysafe-admin-sharing-options) for this section.

  


