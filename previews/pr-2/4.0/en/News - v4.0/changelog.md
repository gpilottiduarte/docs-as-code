# v4.0 Changelog

**Release Date**: 1 April 2025

Check below the new features, improvements, and errors fixed in this version of Segura.

## 💡 New UI Changes in Version 4.0

Version 4.0 brings a complete redesign of the entire software interface, not limited to just a single module or product. We have improved navigation, updated visual elements, and optimized layouts to enhance usability and provide a more intuitive experience throughout the platform.

---

## PAM Core

#### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-3095** | Fixed a bug that occurred when users attempted to access SSH key history within the PAM Core module. |
| **SSGR-2802** | Fixed a bug causing "Internal Server Error" messages when loading the Credentials per User report with large datasets (exceeding 1 million rows). The report now handles such volumes more efficiently. |
| **SSGR-5162** | Fixed an issue with spreadsheet imports in Portuguese where the "Ativo\*" field was ignored, causing all users to be marked as inactive despite being set to "Sim." |

#### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-2912** | The Device registration workflow has been redesigned for improved usability and efficiency. |
| **SSGR-2606** | Added a new user experience for the SSH key registration process, designed to provide an optimized and intuitive workflow. This update allows users to easily configure SSH keys by navigating seamlessly through the registration steps, with improved controls for moving between stages. |
| **SSGR-760** | Added a Credentials screen to the PAM Core home screen, giving users a centralized view of their credential-related information and actions. |
| **SSGR-5202** | Improved the credential listing functionality for users with "Pam Operator" permissions by implementing an access group filter in the parent credentials section. |
| **SSGR-5805** | Added the display of TOTP Token information on the Credential View screen. This field will only be shown if the credential has a registered Secret Key; otherwise, it will remain hidden. |

### PAM Core - Sessions

#### Bug fixes

| Item | Description |
| :---- | :---- |
| **SSGR-2865** | The lockdown error has been fixed. Now, when activated, access to senhasegura is blocked, and only administrator users can access the system. |

#### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-1963** | The error has been fixed where, when searching for users, the system user data appeared in the "Users by Group" report. |
| **SSGR-2764** | The fields on the System Parameters screen have been reorganized, now arranged according to the type of session to be configured. |
| **SSGR-121** | Fields have been added to the Exceptional Access report, providing more information for the administrator. |
| **SSGR-4189** | The options "Authentication via app" and "Authentication via web" have been removed from the "Type" field when creating a RemoteApp. |
|**SSGR-5321**| The creation of an automatic notification sent to the reviewer at the beginning of the review, with information about the deadline for completing it.|
|**SSGR-5319**| The configuration was created to set a deadline for the reviews to be completed, and notifications are sent to both the reviewer and the user.|
|**SSGR-4129**| Two separate ports were created in the Database Proxy to support the current versions (2022 and 2019) on port 1433, and the older versions (2017 and below) on port 1435 of SQL Server.|
|**SSGR-5561**| The Access Policies Review and Certification report has been created, allowing the administrator to have visibility into all registered access policies and their statuses.|

#### New Features
| Item | Description |
| --- | --- |
|**SSGR-3706**| Automation was created in the process of generating user wallets in the Oracle Database Proxy.|
|**SSGR-4048**| The privileged access recertification system has been implemented, performing periodic review and validation of access.|

### PAM - Settings

#### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-3116** | Fixed the Content-Type returned by the SCIM API during integration with Microsoft. The API now correctly responds with 'application/scim+json' when requested. |
| **SSGR-3702** | Fixed an inconsistency in the IDs returned by the SCIM API. IDs now correctly match those used in API operations, eliminating user reference errors and ensuring greater reliability in SCIM integrations. |
| **SSGR-3557** | Fixed an issue with generated PDFs that did not display line and pie charts and showed incorrect values compared to those presented in the tables. |
| **SSGR-3555** | Fixed an issue during device creation where filling in the required fields erroneously accounted for all fields along with the device and credential. |
| **SSGR-3468** | Fixed an issue in the legend near the Active X In Use chart, where translations were incorrect, and words lacked proper separation, affecting both English and Portuguese versions. |
| **SSGR-3464** | Fixed an error in the Users dashboard where user creations were not correctly counted in Registered Users, and active sessions were not reflected in In Use Users after increment actions. |
| **SSGR-5144** | Fixed an issue where SCIM attribute mapping in the Azure AD integration did not function as expected. The adjustment enables proper synchronization of User Roles during automatic provisioning. |

#### Product Updates

| Item ID | Description |
| --- | --- |
| **SSGR-2393** | A new role called **User Management** has been added to the system. This new role concentrates all the permissions necessary for the effective management of users, user groups, roles, departments and integration with external authentication systems. |

#### Translation Fixes

| Item ID | Description |
| --- | --- |
| **SSGR-1561** | Fixed a localization issue for users with French language preference. Information messages are now correctly displayed when clicking on information icons. |
| **SSGR-1561** | Adjusted the information message layout in the Domum access group. |
| **SSGR-3790** | The information string in **Settings \> Security policies and network \> ITSM \> Add \> GLPi ITSM** has been properly localized according to the user's chosen language. |

---

## Orbit Server Manager

#### Product Updates

| Item ID | Description |
| --- | --- |
| **SSGR-4775** | The command `orbit app maintenance` was implemented to enable or disable the application's maintenance mode. An update was also added to the status command, which now displays the state of the maintenance mode. When maintenance mode is active, scheduled automated tasks are not processed, but tasks directly added to the queue continue to be executed. |
| **SSGR-66** | A new MFA token configuration experience has been implemented, with an intuitive wizard for OTP and Radius methods. The process includes fluid navigation between steps via visual indicators, allowing users to move forward, backward or skip steps as needed. The interface has been optimized to ensure a crash-free configuration. |

#### New Feature

| Item ID | Description |
| --- | --- |
| **SSGR-5612** | Time zone selection has been added to the personal menu. |

---

## User Behavior

#### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-1813** | Screen changes made to the **User Behavior** module: The **Session settings** and **Password view settings** sections have been turned into menus and are now located under **User Behavior \> Management**.   The **Continuous identification** section has been removed from the **User Behavior** module and is now located under **Settings \> Security and network policies \> Authentication security**. |
| **SSGR-4951** | Fixed the colors of the lines and bars in the **Sessions** and **Views** graphs in **User Behavior \> Dashboard \> Behavior analysis** to reflect the Segura visual identity. |

---

## A2A

#### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-4315** | Fixed the issue that caused a "**Database Error**" when attempting to save an application with an empty "**Amazon AWS ARN**". |

---

## Discovery

#### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-3609** | The error in the Blocked field of the Discovery credentials report has been fixed, where it was not correctly reflecting the actual value of the field. |
| **SSGR-4988** | Fixed the issue where AWS type certificates were not being listed in the registration. |
| **SSGR-5001** | Corrected the typing error when saving an edited record. |

---

## Endpoint Privilege Manager

### 💡 Product Family Name Update
:::(info) (Product Name Update)
The product previously identified as **GO Endpoint Manager** has been officially renamed to **Endpoint Privilege Manager (EPM)**. This change is reflected in the product interface and associated documentation.
:::

### EPM Windows

#### Bug fixes

| Item | Description |
| --- | --- |
| **EPM-22** | Fixed: Workflow with emergency access was not functioning, preventing new requests or emergency access after expiration. Now allows new requests and emergency access. |
| **EPM-94** | Fixed: Exception occurred when closing the elevation workflow screen after access expiration. Implemented clear notifications for expired access time. |
| **SSGR-344** | Fixed: Applications like Speech Recognition and Quick Assist are now elevated correctly without errors. |
| **SSGR-478** | Improved: Normalized user token group and privilege elevation to prevent access errors in certain applications. |
| **SSGR-1594** | Fixed: Applications in denylist paths are correctly blocked from execution despite temporary paths. |
| **SSGR-1623** | Fixed: Resolved impersonation error with AD elevation by retrieving the start directory from the service. |
| **SSGR-2141** | Fixed: Corrected misleading activation messages when entering invalid data. |
| **SSGR-2324** | Fixed: Resolved issue where Malware Analysis with API Token did not generate events. |
| **SSGR-2362** | Fixed: Corrected approval flow to ensure policy precedence follows the hierarchy of User \> Workstation \> General, preventing general settings from overriding device-specific policies. |
| **SSGR-2373** | Fixed: SSH sessions now function correctly with EPM Windows 3.31.0.3 and EPM Windows Agent 3.31.1-7. |
| **SSGR-2374** | Fixed: RDP sessions now work properly under the same client and server configuration. |
| **SSGR-2383** | Fixed: The installer now generates and updates version numbers correctly, starting from 3.31.0.4. |
| **SSGR-2439** | Fixed: Application elevation in Windows Server 2016 functions correctly under version 3.28 configurations. |
| **SSGR-2460** | Fixed: Application type automations are now executed without generating errors. |
| **SSGR-2462** | Fixed: Directory and file scan configurations now show file creation and deletion actions. |
| **SSGR-2463** | Fixed: Network block access now functions in all browsers, including Edge, Chrome, and Firefox. |
| **SSGR-2539** | Fixed: Session recording errors have been resolved with updated parameters and list access settings. |
| **SSGR-2561** | Fixed: Client interface issues resolved, maintaining application availability and MFA token insertions without errors. |
| **SSGR-2563** | Fixed: Adjustments made for UAC and credential storage rules impacting offline mode. |
| **SSGR-2580** | Fixed: Automatic updates now function correctly, allowing seamless client version installations. |
| **SSGR-2581** | Fixed: Web automations are now executed with the latest Chrome version, resolving incompatibility issues. |
| **SSGR-2595** | Fixed: DLL errors during "runas" operations resolved by refining elevation flow and error logging. |
| **SSGR-2601** | Fixed: Issues with web automation execution resolved; Chrome driver updated to 121.0.6167.85. |
| **SSGR-2689** | Fixed: Addressed errors and privileges issues preventing application automation execution. |
| **SSGR-2759** | Fixed: MFA for login now operates correctly, prompting for authentication as expected. |
| **SSGR-2801** | Fixed: Errors with token and IP input during client setup have been resolved, allowing full functionality. |
| **SSGR-2861** | Fixed: Error (1332) in impersonated user application elevations corrected, ensuring credential resolution. |
| **SSGR-2897** | Fixed: Workflow approval errors during application elevation resolved, ensuring valid workflow handling. |
| **SSGR-2922** | Fixed: Resolved domain user issues with EPM Windows. |
| **SSGR-2931** | Fixed: Provided a clear message when accessing Client from an inactivated device. |
| **SSGR-2981** | Fixed: Resolved privilege elevation issues within specific directory settings. |
| **SSGR-2994** | Fixed: Corrected event report errors, ensuring complete data packets before server submissions. |
| **SSGR-3091** | Fixed: Unhandled exceptions in service logs resolved to prevent service termination. |
| **SSGR-3094** | Fixed: Access emergency option now correctly displayed under configured application approval conditions. |
| **SSGR-3100** | Fixed: Remote App automations are now executed without initialization errors. |
| **SSGR-3114** | Fixed: Justification submission for applications functions correctly, preventing server response errors. |
| **SSGR-3261** | Fixed: Elevation and justification processes are now complete successfully, addressing prior failures. |
| **SSGR-3270** | Fixed: Addressed intermittent client freezing issues, ensuring responsive operation. |
| **SSGR-3320** | Fixed: Occasional "Unexpected Error" during elevation with justification and governance ID corrected. |
| **SSGR-3361** | Fixed: Resolved "Error on process operation" preventing application elevation. |
| **SSGR-3391** | Fixed: Resolved "Object reference" errors during "run as" operations under specific conditions. |
| **SSGR-3393** | Fixed: Database error during segregated parameter saving now corrected. |
| **SSGR-3918** | Fixed: Resolved browser-related automation error occurring on the first execution with the new client version. |
| **SSGR-4225** | Fixed: Resolved a 500 error in the application approval flow that occurred whenever an approval request was sent to the server, ensuring smoother request processing and response handling. |
| **SSGR-4229** | Fixed: Addressed Recorder issues causing indefinite loading and client alerts, specifically for ONS. |
| **SSGR-4325** | Fixed: Addressed blue screen errors during mass installation by refining installer integration on Windows. |
| **EPM-154** | Fixed: Typographical error in remote session error message. Corrected to "The secret of this credential is not available right now." |

#### Product Updates

| Item | Description |
| --- | --- |
| **EPM-194** | Improved: Added compatibility of EPM Windows Automation module with latest Chromium version to support new Chrome updates. |
| **SSGR-373** | Improved: Added MFA parameter for application elevation with options for OTP and Smart Card authentication. |
| **SSGR-972** | Improved: Added "Client" filter in Events report to specify platform reports. |
| **SSGR-3135** | Improved: Enhanced approval workflow for viewing/copying credential passwords, maintaining expected functionality. |

#### New Feature

| Item | Description |
| --- | --- |
| **SSGR-1525** | Improved: Enabled policy application based on users, OUs, and security groups, increasing configuration flexibility. |
| **EPM-411** | Introduced a new password change interface in Windows for EPM users. When a password expires, users are guided through a graphical interface to set a new password, enhancing the password reset process within the multi-factor authentication (MFA) flow, ensuring compliant security policies, and generating detailed audit logs. |

#### Security

| Item | Description |
| --- | --- |
| **SSGR-3200** | Improved: Enhanced privacy by ensuring the EPM installation token is no longer visible in logs during some installations conditions, aligning with security best practices. |

---

### EPM Linux

#### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-4224** | Fixed an error where, in certain situations, the installation of the EPM Linux client triggered the error message "too many arguments." |
| **EPM-23** | Fixed an error where, on older supported systems (Red Hat 6, Suse 11, and CentOS 6), Access Policies were not applied correctly, including the execution control of the `vim` process and the blocking of the `ls` process for specific users. The problem where the command to view active policies on the device did not display results on these distributions was also fixed. |

#### Product Updates

| Item | Description |
| --- | --- |
| **EPM-444** | Multifactor Authentication (MFA) support has been added for EPM Linux domain users. The new feature allows the configuration of different MFA methods (TOTP, FIDO2, Push Notification) for users authenticated via Active Directory. |
| **EPM-441** | A new silent installer has been added for EPM Linux, allowing installation without the need for manual intervention. This update enables batch installation on multiple devices simultaneously, eliminating dependence on MDM and individual physical/remote access, significantly optimizing the rollout process in large corporate environments. |
| **2838** | MFA authentication has been implemented for EPM Linux users. |
| **EPM-218** | Added support for Ubuntu 22.04 LTS and Oracle Linux 8/9 to the list of operating systems compatible with EPM  Linux. |
| **EPM-36**| Added support for Red Hat 7.9 and Red Hat 8.9 to the list of operating systems compatible with EPM Linux. |

#### New Feature

| Item | Description |
| --- | --- |
| **SSGR-1777** | An option to clone a profile has been added to the Credentials Profile screen. |

#### Translation fixes

| Item | Description |
| --- | --- |
| **SSGR-2837** | The error with the Approve icon in the Action column on the Operations List screen has been fixed, where the label always appeared in Portuguese regardless of the selected language. |
| **SSGR-4185** | The translation of the All operations screen name has been corrected. |
| **SSGR-4125** | The translation of the search results in the fields Change template, Enabling template, and Disabling template in the Configure Device Execution Profile window has been corrected. |
| **SSGR-4127** | Fixed the translation error in the cloning confirmation string. |

---

## MySafe

### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-2846** | Fixed the issue where the header of **MySafe** printed reports displayed the filter **id** even after clearing all filters. |
| **SSGR-4004** | Fixed the issue that prevented the completion of password import from LastPass. |

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-2144** | Added email notifications for **MySafe** users who receive a shared item from **MySafe**. In this email, the user receives a link that directs them to the screen with the shared item. |

## MySafe Browser Extension

### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-2935** | Implemented an error message informing the user of the **extension**'s connection failure with **MySafe**. |

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-1885** | Added a feature that opens the extension in **Current tab** mode when the user has saved credentials for the website they are browsing. |
| **SSGR-1885** | Added a badge indicating the number of saved passwords for the current tab. |
| **SSGR-1885** | Added search behavior to automatically focus on the field when clicking the magnifying glass and filter records in real-time as the user types, eliminating the need to press Enter to perform the search. |
| **SSGR-1885** | Added automatic clearing of the search filter after clicking the **Back** button. |
| **SSGR-1885** | Added an option to disable a password. |
| **SSGR-1885** | Added a **Help** button in the **Settings** menu that redirects to the extension's documentation. |
| **SSGR-1885** | Added the functionality to open the vault connected to the extension in a new tab when clicking the Segura logo or the **MySafe** name. |
| **SSGR-1885** | The **Login** action was renamed to **Fill credentials** to more accurately reflect that the extension only fills in the username and password fields on the open tab, without opening the website or clicking the login button. |
| **SSGR-1885** | Added an error message if the user clicks on **Fill credentials** without any fields to fill in on the page. |
| **SSGR-1885** | Added automatic clearing of the username and password fields before filling them in to prevent authentication errors caused by duplicate or concatenated data. |
| **SSGR-1885** | Added automatic password strength calculation while typing. |
| **SSGR-1885** | Added the functionality to change the criteria for generating the random password by Segura. |
| **SSGR-1885** | Changed the **Tags** component to display each tag as a chip or badge instead of plain text, improving the visibility and identification of the tags. |
| **SSGR-1885** | Added the functionality to auto-fill the URL field with the current tab's URL during password creation. |
| **SSGR-1885** | Changed the color of example values in the fields to a lighter shade to avoid the impression that the fields are already filled. |
| **SSGR-33** | Added compatibility of the **MySafe** extension with the Firefox browser. |
| **SSGR-2983** | Added the automatic reauthentication feature: when clicking the login field, if the extension session has expired, the extension will open automatically and request reauthentication. |
| **SSGR-3340** | Adjusted the timeout parameters for the extension's connection to the vault: 30 days for session expiration and 7 days for inactivity expiration. |

---

## Segura mobile app

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-2337** | Added email notifications for **MySafe** users who receive a shared item from **MySafe**. In this email, the user receives a link that directs them to the screen with the shared item. |
| **SSGR-2337** | Added the option to filter passwords and notes by **Tags**. |
| **SSGR-2337** | Added the option for Segura to generate a random password and configure the password criteria. |
| **SSGR-2337** | Added automatic password strength calculation during typing/generation. |

---

## Domum Remote Access

### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-3384** | Fixed a bug where the **Internal Users** report wasn't updating after a new internal user was created. |

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-1570** | Improved **Domum** e-mails to now have more data related to vaults and environments. |
| **SSGR-2306** | Improved **Domum**'s error message when a user tries to log in from a blocked location. |
| **SSGR-3142** | Updated **Domum's** side menu labels. |
| **SSGR-34** | Improved **Domum**'s desktop interface for limited users. |

### New Feature

| Item | Description |
| --- | --- |
| **SSGR-3085** | Added a home page in Domum. |

### Translation fix

| Item | Description |
| --- | --- |
| **SSGR-5481** | Fixed a bug where, when viewing the full password in **Domum**, the button name was displayed in Portuguese despite the language of the vault. |

---

## Certificate Manager

### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-2349** | Fixed a bug where, by exporting the `.csv` file of the **Automated Certificates**, the **Status** column was blank. |
| **SSGR-4205** | Fixed a bug where strings were not properly written on the **Publishing profile** menu. |
| **SSGR-4592** | Fixed a bug where certificates couldn't be published in IIS servers after updating Segura to version 3.33. |
| **SSGR-4545** | Fixed a bug where A1 certificates weren't being discovered. |
| **SSGR-4815** | Fixed a bug where the user couldn't publish certificates using the Apache plugin. |

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-4903** | Updated the product to standardize the **Status** column from specific reports. |

### Translation fix

| Item | Description |
| --- | --- |
| **SSGR-4193** | Fixed a bug where two menus had strings shown in French despite the language of the vault. |
| **SSGR-4195** | Fixed a bug where the timer was only shown in Portuguese despite the language of the vault. |
| **SSGR-4194** | Fixed a bug where strings were shown in Portuguese despite the language of the vault on the **Certification Information** menu. |

---

## Network Connector

### Bug fixes

| Item | Description |  
|------|-------------|  
| **SSGR-2455** | Resolved an issue where disabled connectors were still visible in the NC detail view, potentially causing confusion during audits. The interface now accurately reflects only active connectors, enhancing clarity and user experience. |

### Product Updates

| Item | Description |  
|------|-------------|  
| **SSGR-5961** | Updated Network Connector reports so that the fingerprint column width remains fixed when clicking to reveal the fingerprint. |

---

## DevOps Secret Manager

### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-3285** | Fixed an error where, when creating an application and navigating to the authorizations, the application was not visible for interaction. |
| **SSGR-4085** | Fixed an error in the display of duplicate name error messages when creating DSM and A2A applications. Previously, when creating a DSM application with a name that already existed in A2A, the message was displayed in Portuguese regardless of the language configured in the vault. |
| **SSGR-4084** | Fixed an capitalization error on the "New Secret" button in the Portuguese interface, which was previously displayed as "new secret" without the initial capital letter. |
| **SSGR-4003** | Fixed an error in the interface where the **New** button on the DSM automations screen was displayed in English, regardless of the language configured in the vault. |
| **SSGR-3560** | Fixed an error in the **Secrets consultation by day** and **Secrets consultation by week** line charts, which were not updating properly even after receiving new data. |
| **SSGR-3560** | Fixed an error where the charts did not respect the limit of 10 categories and failed to group additional categories under the **Other** label. |
| **SSGR-3510** | Fixed an error in the **Enabled** filter, which previously worked only for the cards but did not correctly update the quantity values in the donut charts or the proportions in the donut, line, and pie charts. |
| **SSGR-3500** | Fixed an issue in the **Secrets Consultation By Day** chart, which previously remained visible even when no data was available, instead of hiding the information and displaying the message **No Information To Display.** |
| **SSGR-4191** | Fixed a bug in the registration of secrets that occurred when associating two credentials with two IPs. |
| **SSGR-4170** | Fixed a bug where some translations in DSM were not displayed correctly in the secret details tabs. |
| **SSGR-4816** | Fixed an error where profile settings were removed during GitLab integration via CLI, and authorization permissions did not allow proper access to the application's provisioned secrets. |

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-2906** | The endpoint for listing Secrets in DSM was improved to include important details of the linked credentials. |
| **SSGR-2942** | The encoding of data encrypted by DSM was enhanced. Cryptographic keys now return data in base64 format instead of plain text. |
| **SSGR-1791** | An "IP" field was added to the return variable for database credentials. |
| **SSGR-5316** | The title of the dashboard tab in the DSM side menu was changed from "Dashboard" to "Dashboards," properly reflecting the existence of multiple dashboards in the module. |
| **SSGR-3491** | The color scheme of the pie chart was fixed to align with the new Segura visual identity. The update also includes improvements to the sorting of legends, ensuring the correct display of the maximum 10 categories, and fixes a bug where devices with the string **Other** caused failures in chart grouping and rendering. |
| **SSGR-3525** | A new advanced search system has been implemented for Secrets, with specific support for different types of credentials. |

### Translation fixes

| Item | Description |
| --- | --- |
| **SSGR-5134** | Standardization of the terms **Secret** and **Segredo** in all **DevOps Secret Manager** versions. |
| **SSGR-5137** | Standardized the name of the button for viewing previous versions. Changed the name of **View versions** and **Previous versions** to **History**. |

---

## Cloud IAM

### Bug fixes

| Item | Description |
| --- | --- |
| **SSGR-4158** | Fixed a bug where the user was receiving errors when connecting an AWS account in **Cloud IAM** version 4.0. |
| **SSGR-4159** | Fixed a bug where a non-formatted string was shown when the user connected a Google Cloud account in **Cloud IAM**. |

### Product Updates

| Item | Description |
| --- | --- |
| **SSGR-5766** | Added the columns **Environments** and **Systems** in the **Credentials** report. |

### New Feature

| Item | Description |
| --- | --- |
| **SSGR-4796** | Added a new **Identities machine** report in the **Report** panel. |

### Deprecated

| Item | Description |
| --- | --- |
| **SSGR-1330** | All features related to OpsWorks in **Cloud IAM** are deprecated. |

---

## Task Manager

No changes.

---

## Arbitrator

No changes.

---

## Load Balancer

No changes.

---

## Segura APIs

| Item | Description |
| --- | --- |
| **SSGR-3368** | Implemented the restriction that prevents the creation of credentials via API with special characters in the `identifier` field. This change ensures consistency between operations performed via API and the graphical interface, preventing usability issues and potential security vulnerabilities, ensuring that `identifiers` follow the same pattern in both interfaces. |
| **SSGR-4522** | Fixed an issue that caused the automatic update of the identifier when updating a credential with `username`, `hostname`, and `ip` values. Now, the `identifier` will only be updated if the user explicitly enters a new value when updating the credential. |

---

## Other versions

You can see the older [documentation versions here](https://docs.senhasegura.io/docs/pt/old-versions).  