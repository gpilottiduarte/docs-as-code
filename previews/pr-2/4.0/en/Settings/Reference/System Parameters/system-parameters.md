# System parameters

## **Access control**

Link to the reference [document](https://portal.document360.io/v3-32/docs/pam-session-system-parameters-access-control) for this section.

## **Remote sessions**

Link to the reference [document](https://portal.document360.io/v3-32/docs/pam-session-proxy-settings) for this section.

## **Security**

Link to the reference [document](https://portal.document360.io/v3-32/docs/pam-session-system-parameters-security) for this section.

## **Security settings**

Link to the reference [document](/v4/docs/security-configurator) for this section.

## **Executions**

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Executions**:

* **Number of change attempts:** between **1 to 10**.
* **Connection timeout (s):** between **1 and 300** seconds of inactivity before the connection is terminated.  
* **Read timeout(s):** between **1 to 300** seconds without a response before a command request is terminated.  
* **Total cycles per instruction:** between **1 to 10,000** cycles.  
* **Time between attempts (min):** minimum time, between **0 and 1440 minutes**, before the next attempt to change a password using a template.  
* **Time between failed attempts (min):** minimum time, between **1,440 and 10,080** minutes, before the next attempt to change a password after a previous failed attempt.  
* **Template Approval workflow:** choose **Yes** or **No** to decide whether new templates need to be approved before they can be used.

## **User Behavior**

Link to the reference [document](https://portal.document360.io/v3-33/docs/user-behavior-system-parameters) for this section.

## **Notifications**

Link to the reference [document](/v4/docs/notifications-2) for this section.

## **Application**

Link to the reference [document](/v4/docs/application-1) for this section.

## **LDAP / Active Directory**

Link to the reference [document](/v4/docs/ldapactive-directory-system-parameters) for this section.

## **EPM**

### **EPM Windows**

1. Log in to Segura.  
2. Go to **Settings ➔ System Parameters ➔ System Parameters ➔ EPM Windows**.

### **Modules**

* **Enable credentials?:** choose **Yes** or **No** to enable or disable this option.   
* **Enable applications?:** choose **Yes** or **No** to enable or disable this option.  
* **Enable uninstall?:** choose **Yes** or **No** to enable or disable uninstalling EPM.  * **Enable network sharing?:** choose **Yes** or **No** to enable or disable this option.   
* **Enable network interface?:** choose **Yes** or **No** to enable or disable this option.   
* **Enable control panel?:** choose **Yes** or **No** to enable or disable this option.

### **Installation settings**

* **Allow auto-approval for workstation links?:** choose **Yes** or **No** to decide whether a workstation request from a valid EPM license should be automatically approved.  
* **Allow auto-approval for a user's first link?:** choose **Yes** or **No** to decide whether the first request from a previously approved device should be automatically approved.  
* **Allow auto-approval of all other links?:** choose **Yes** or **No** to decide whether to automatically approve all subsequent users who request access from a previously approved device.  
* **Enable automatic updates for the client software?:** choose **Yes** or **No** to decide if EPM should update automatically if a new version is available on the server.  
* **Enable user expiration time?:** choose **Yes** or **No** to decide whether a user's access approval should expire after a set period of time.  
* **User expiration time:** Days after approval before a user expires. The time limit for a user approval form.

### **General settings**

* **Enable offline use?:** choose **Yes** or **No** to decide whether users should be able to run EPM without an internet connection.  
* **Enable UAC integration?:** choose **Yes** or **No** to enable the use of Segura during UAC operations. Users can choose to enter a credential to continue the process.  
* **Enable controlling Windows applications?:** choose **Yes** or **No** to enable or disable this option. If enabled, EPM will activate the driver that monitors Windows applications and intervene whenever an application is not in the allowlist (or is in the denylist). Only user session applications will be evaluated.  
* **Enable session recordings?:** choose **Yes** or **No** to decide whether to video record applications with elevated privileges.  
* **Deactivate certificates automatically after an intrusion attempt?:** choose **Yes** or **No** to decide whether the unique certificate that a workstation uses to communicate with the server should be disabled if the server detects an intrusion attempt.  
* **Enable application malware and reputation scans?:** choose **Yes** or **No** to decide whether you want to scan an application for malware and status.  
* **Time between credential requests:** if a Workstation is online, update a secure cache of the credential's details from time to time.
:::(info) (**Info**)
Be careful when configuring this parameter, as it can lead to a system overload. The shorter the time, the more resources this feature will use.
:::

* **VirusTotal API token:** connect to VirusTotal's API to run subsequent analyses.  
* **Enable DLL analysis?:** choose **Yes** or **No** to enable or disable this feature.  
* **New trusted directory:** add a directory you trust.  * **Directory path:** add the path to this directory in your operating system.   
* **Ignore directory during scan:** check if you want to skip a given directory during the scan.  
* **Directory path:** add the path in your operating system to the directory you want to skip.
:::(info) (**Info**)
This field accepts regular expressions.
:::

## **Workflow settings**

### **Elevation settings**

* **Users can elevate applications:** check this box to enable this function.   
* **Require a justification to elevate applications:** check this box to require users to first provide a justification before elevating the privileges of an application  
* **Require approval to elevate applications:** check this box to require approval before users can elevate the privileges of an application  
* **Approvals required:** if the previous box has been checked, decide how many approvals are required for a user to elevate the privileges of an application  
* **Denials required to cancel:** how many request denials are required to prevent a user from elevating the privileges of an application.  
* **Allow emergency access:** check this box if you want to allow emergency access.   
* **Multi-level Approval:** check this box to enable multi-level approval workflows.

### **Access request settings**

* **Require governance ID when providing a justification?:** choose **Yes** or **No** to enable or disable this option.  
* **Always require approval from a user's manager?:** choose **Yes** or **No** to decide whether the manager of a particular user should always be one of the approvers for this user's requests.

### **Network access**

* **Block access to the network?:** when enabled, denies access to any user who tries to establish a TCP or UDP connection.  
* **Block user:**  when enabled, blocks the user who tries to access the network repeatedly.   
* **Occurrences (minimum):** Failed attempts before a user is blocked. Between 1 and 10\.

### **JIT/Elevation methods**

* **Enable JIT access?:** choose **Yes** or **No** to enable or disable this option.  
* **Prevent elevation of privilege?:** choose **Yes** or **No** to decide whether Segura should deny any requests to elevate the privileges of an application outside Segura.go.   
* **Block user:** choose **Yes** or **No** to decide whether Segura should block a user who tries to elevate the privileges of an application repeatedly.  
* **Occurrences (minimum):** Failed attempts before a user is blocked. Between 1 and 10\.

### **Authentication**

* **Enable multi-factor authentication at login?:** Yes/No.  
* **Enable Single Sign-On?:** choose **Yes** or **No** to decide whether EPM can start an authenticated Segura web session in the user's default browser without a password. If an MFA token is required, Segura’s web service will request it before authentication.

### **Messages**

* **Execution message:** message shown to the user when an application is running on EPM.  
* **Execution block message:** message shown to the user when a request is blocked on EPM.

### **AD Bridge**

Link to the reference [document](/v4/docs/ad-bridge) for this section.

## **Domum**

Go to **Settings ➔ System Parameters ➔ System Parameters ➔ Domum:**

* **Employees domain:** domain used in employee's access links.  
  *  **E.g.:** int.domum.Segura.com.  
* **Third-party domains:** the domain used in the access link of the DNS server/Email settings:  
  * **E.g.:** domum.Segura.com.

### **Email settings**

* **Sender:** email account that will send the remote access link.

### **First authentication token**

Indicates how to send the first access token:

* Email  
* SMS  


## **MySafe**

Link to the reference [document](https://portal.document360.io/v3-33/docs/mysafe-admin-sharing-options) for this section.

