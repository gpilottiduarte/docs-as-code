Syslog messages are based on UDP protocol through port 514 and are a maximum of 1024 bytes in size.

## Notification Format

All Syslog messages follow a specific format. An example of a message in Syslog format may be:


```
2018-06-18T17:49:41-03:00 vm-machine senhasegura 
1426 - Successfully authenticated.

```
This message can be divided into two parts: Header and Values.

The header is made up of date, time, hostname, and senhasegura ID information, indicating that the message is solution specific.

The values present additional event information in the format key \= value.

* ***`<13>1`:*** PRI
* ***`218-06-18T17:49:41-03:00`:*** TIMESTAMP
* ***`vm-machine`:*** HOSTNAME
* ***`senhasegura_`:*** AAP\-NAME
* ***`_1426`:*** PROCID
* ***`Successfully authenticated.`:*** MSGID

## Priorities

Priority types (PRI) are categorized according to their priority in the Syslog pattern:



| **Priority** | Criticality | Keyword | Description | Examples |
| --- | --- | --- | --- | --- |
| **0** | Emergency | emerg | The system is unusable | This level should not be used by applications. |
| **1** | Alert | alert | Some action should be taken immediately. | Loss of the primary ISP connection. |
| **2** | Critical | crit | Critical Conditions | A failure in the system’s primary application. |
| **3** | Error | err | Error Conditions | An application has exceeded its file storage limit, and attempts to write are failing. |
| **4** | Warning | warning | May indicate that an error will occur if action is not taken | A non\-root file system has only 2GB remaining. |
| **5** | Notice | notice | Abnormal events, but not in an error condition |  |
| **6** | Informational | info | Normal operation messages, which do not require action | An application has started, paused, or ended successfully. |
| **7** | Debug | debug | Debug Messages. |  |

The events configured in SYSLOG are:



| **ID** | Origin | Priority | Name | Description |
| --- | --- | --- | --- | --- |
| **1** | COSE | notice(5\) | Password Viewed | A password has been viewed by a user. |
| **2** | COSE | notice(5\) | Password changed | A password has been manually changed by a user. |
| **3** | COSE | notice(5\) | Password Expired | A password has expired and cannot be automatically changed. |
| **4** | COSE | notice(5\) | Password daily summary | Status concerning credentials daily usage |
| **5** | COSG | notice(5\) | Information viewed | Protected information is viewed by a user. |
| **6** | COSG | notice(5\) | Information changed | Protected information has been changed by a user. |
| **7** | COSG | notice(5\) | Information expired | Protected information has expired. |
| **8** | COEQ | warning(4\) | Lost of connectivity | The application has lost connectivity with a device. |
| **9** | COEQ | notice(5\) | Reestablished Connectivity | The application was able to connect to a device that was without connectivity. |
| **10** | COAU | warning(4\) | Command detected \- Low Urgency | An audited low criticality command was detected. |
| **11** | COAU | error(3\) | Command detected \- Medium Urgency | An audited command of medium criticality was detected. |
| **12** | COAU | critical(2\) | Command detected \- High Urgency | A highly critical audited command has been detected. |
| **13** | COAC | notice(5\) | New request | A user has requested access to a password. |
| **14** | COAC | notice(5\) | Request approved | A password access request has been approved. |
| **15** | COAC | notice(5\) | Request Disapproved | A password access request has been disapproved. |
| **16** | COSS | notice(5\) | Session started | A user has logged in. |
| **17** | COSS | notice(5\) | Session finished | A user has ended a session. |
| **18** | COBA | notice(5\) | Backup performed | The backup was performed correctly. |
| **19** | COBA | error(3\) | Error on backup | An error occurred while backing up. |
| **20** | COTR | error(3\) | Error on change | An error occurred while changing a password. |
| **21** | COTR | notice(5\) | Change Executed | The password was successfully changed. |
| **22** | CORE | info(6\) | Password confirmed | Reconciliation validated the password. |
| **23** | CORE | error(3\) | Invalid password | The password stored in the vault is not valid. |
| **24** | COTR | info(6\) | Activation executed | User is active successfully. |
| **25** | COTR | error(3\) | Error on activation | An error occurred while activating the user. |
| **26** | CONO | info(6\) | Change password daily report | Validation of password changes. |
| **27** | CONO | warning(4\) | Low disk space \- Low Urgency | Reaching 70 % of total disk space. |
| **28** | CONO | error(3\) | Low disk space \- Medium Urgency | When you reach 80 % of the total disk space. |
| **29** | CONO | alert(1\) | Low disk space \- High Urgency | Reaching 90 % of total disk space. |
| **30** | CONO | info(6\) | Space disk \- Daily notification | Daily Disk Space Status. |
| **31** | COSS | warning(4\) | Command detected \- Block and interrupt session | An audited command, configured as prohibited and subject to session interruption, was executed. |
| **32** | COSS | notice(5\) | Command detected \- Block | An audited command, set to prohibited, has been executed. |
| **33** | COSS | info(6\) | Command detected \- Allow | An audited command has been executed. |
| **34** | COSS | notice(5\) | Session file modified | A session file has been modified. |
| **35** | COSE | notice(5\) | Credential Owner configuration | Credential owner set. |
| **36** | COAT | notice(5\) | Audit trail | Audit trail. |
| **37** | AUTH | notice(5\) | Authentication messages | senhasegura.go Authentication Messages. |
| **38** | CONO | warning(4\) | CPU Usage \- High | CPU utilization by application is high. |
| **39** | CONO | critical(2\) | CPU Usage \- Critical | CPU utilization by application is at a critical level. |
| **40** | CONO | warning(4\) | Memory Usage \- High | Memory consumption by application is high. |
| **41** | CONO | critical(2\) | Memory Usage \- Critical | Memory consumption by application is at a critical level. |
| **42** | COOF | info(6\) | Application started | The application senhasegura.go started. |
| **43** | COOF | info(6\) | Application completed | The application senhasegura.go terminated. |
| **44** | COOF | info(6\) | Credential use for network access | A credential was used for network access. |
| **45** | COOF | info(6\) | New senhasegura.go version | There is a new version of senhasegura.go available. |
| **46** | COOF | notice(5\) | senhasegura.go version approved | There is a version of senhasegura.go approved. |
| **47** | COOF | warning(4\) | senhasegura.go version disabled | There is an inactive version of senhasegura.go. |
| **48** | COOF | notice(5\) | Download of senhasegura.go version performed | A version of senhasegura.go has been downloaded. |
| **49** | COOF | notice(5\) | senhasegura.go version installed | A version of senhasegura.go has been installed. |
| **50** | CRTC | notice(5\) | Certificate expiration alert: 30 days | Some certificates will expire until 30 days. |
| **51** | CRTC | warning(4\) | Certificate expiration alert: 7 days | Some certificates will expire in seven days. |
| **52** | CRTC | error(3\) | Certificate expiration alert: 1 day | Some certificates will expire in one day. |
| **53** | CRTC | notice(5\) | Certificate creation | A certificate has been created. |
| **54** | CRTC | notice(5\) | Certificate renewal | A certificate has been renewed. |
| **55** | CRTC | notice(5\) | Certificate revocation | A certificate has been revoked. |
| **56** | COSS | info(6\) | Session indexed text | A text has been indexed. |
| **57** | COSS | info(6\) | Generate video for download | A video has been generated for download. |
| **58** | CRTC | notice(5\) | Request password view | A request’s password has been seen. |
| **59** | CRTC | notice(5\) | Certificate password view | A certificate’s password has been seen. |
| **60** | COOF | notice(5\) | Workstation approved | A workstation has been approved to use senhasegura.go. |
| **61** | COOF | notice(5\) | Workstation registration | A workstation has requested senhasegura.go usage. |
| **62** | COOF | notice(5\) | User created | A new workstation user has been approved to use senhasegura.go. |
| **63** | COOF | notice(5\) | Using AUC | A program has requested elevation using Microsoft UAC using senhasegura.go. |
| **65** | COOF | notice(5\) | View password | A credential has been requested and seen using senhasegura.go. |
| **66** | COOF | notice(5\) | Copy password | A credential has been requested and copied using senhasegura.go. |
| **67** | COOF | notice(5\) | Runas executed | A program has been executed using senhasegura.go. |
| **68** | COOF | notice(5\) | Macro executed | A user automation has been executed using senhasegura.go. |
| **69** | COOF | notice(5\) | Control panel executed | A control panel applet has been executed using senhasegura.go. |
| **70** | COOF | notice(5\) | Network adapter executed | A network adapter has been requested using senhasegura.go. |
| **71** | COOF | notice(5\) | Network share | A network folder has been accessed using senhasegura.go. |
| **72** | COOF | notice(5\) | senhasegura.go uninstalled | senhasegura.go has been uninstalled by user decision. |
| **73** | COOF | notice(5\) | senhasegura.go goes online | senhasegura.go has turned online by user decision. |
| **74** | COOF | notice(5\) | senhasegura.go goes offline | senhasegura.go has turned offline by user decision. |
| **75** | COOF | notice(5\) | senhasegura.go alert | senhasegura.go has sent an alert. A situation in a workstation needs attention and can affect senhasegura.go usage. |
| **76** | CRTC | notice(5\) | Certificate expiration warning: 90 days | Some certificates will expire until 90 days. |
| **77** | CRTC | notice(5\) | Certificate expiration warning: 60 days | Some certificates will expire until 60 days. |
| **78** | CRTC | notice(5\) | Certificate expiration warning: 15 days | Some certificates will expire until 15 days. |
| **79** | CRTC | notice(5\) | Certificate expiration alert: Today | Some certificates will expire today. |
| **80** | CRTC | notice(5\) | Certificate link with device | A certificate was linked to a device. |
| **81** | CRTC | notice(5\) | Download | A user has downloaded a certificate. |
| **82** | CRTC | notice(5\) | Request Management | A request was approved or denied. |
| **83** | CRTC | notice(5\) | Publication Profile Management | A publication profile was created or changed. |
| **84** | CRTC | notice(5\) | Certificate Management | An action was performed in a certificate. |
| **85** | COOF | notice(5\) | Error retrieving credentials | An error occurred when retrieving credentials. |
| **86** | USBH | notice(5\) | Accesses at unusual time | Some accesses occurred at an unusual time. |
| **87** | USBH | notice(5\) | Access with unusual average length | Access occurred with unusual average length. |
| **88** | USBH | notice(5\) | Unusual accesses | A user has accessed an unusual target. |
| **89** | COOF | notice(5\) | Directory and file scan \- Inclusion | A file has been found in the directory scan. |
| **90** | COOF | notice(5\) | Directory and file scan \- Exclusion | A file has been removed from the directory scan. |
| **91** | COOF | notice(5\) | Directory and file scan \- Change | A file has been changed in the directory scan. |
| **92** | COBA | alert(1\) | Ceremony process started | The master key ceremony has started. |
| **93** | COBA | alert(1\) | User has seen his part of the key | A user saw his part of the master key. |
| **94** | COBA | alert(1\) | User downloaded the PDF with his part of the key | A user downloaded the PDF with his part of the master key. |
| **95** | COBA | alert(1\) | Ceremony process completed | The master key ceremony was completed. |
| **96** | COSS | notice(5\) | Video scheduled for download | Video scheduled for download. |
| **97** | CODS | alert(1\) | User downloaded the PDF with system dashboard. | A user downloaded the PDF with the system dashboard. |
| **98** | DOMU | notice(5\) | New location | A user logged in from a new location. |
| **99** | DOMU | notice(5\) | Unexpected location | A user logged in from an unexpected location. |
| **100** | CLOD | notice(5\) | IAM session without owner | A credential was used for a session by a user that is not the owner of the credential. |
| **101** | CLOD | notice(5\) | IAM key view without owner | A credential was viewed by a user that is not the owner of the credential. |
| **102** | COBA | error(3\) | Failed recovery attempt | The recovery attempt failed. |
| **103** | COBA | error(3\) | Successful recovery attempt | The recovery attempt was successful. |
| **112** | DOMU | error(3\) | Domum health check | The communication between the Safe and Domum cloud services was verified. |
| **118** | USBH | notice(5\) | Access unusual target | A user accessed an unusual target. |
| **119** | USBH | notice(5\) | Access unusual credential | A user accessed an unusual credential. |
| **120** | USBH | notice(5\) | View unusual origin | A user accessed a credential from an unusual origin. |
| **121** | USBH | notice(5\) | View unusual credential | A user viewed an unusual credential. |

### Orbit Alerts



| **ID** | Origin | Priority | Name | Description |
| --- | --- | --- | --- | --- |
| **336\.001** | Orbit | alert(1\) | Orbit task create | Orbit task creation |
| **336\.002** | Orbit | alert(1\) | Orbit task execution success | Orbit task successfully executed |
| **336\.003** | Orbit | alert(1\) | Orbit task execution error | Orbit task executed with error |
| **336\.004** | Orbit | alert(1\) | Orbit log operation | Log operation |
| **336\.500** | Orbit | alert(1\) | Orbit alert report | Orbit Alert Information |
| **336\.501** | Orbit | alert(1\) | Orbit incident report | Orbit Incident Information |

## Other Alerts



| ID | Priority | Name | Description |
| --- | --- | --- | --- |
| 1695\.001 | notice(5\) | User login | User has logged in |
| 1695\.002 | notice(5\) | User logout | User has logged out |
| 1695\.003 | notice(5\) | Session expired | User session has expired |
| 1695\.010 | notice(5\) | I18N\_REGISTER\_TWOFACTOR\_TOKEN | Two\-factor authentication token has been registered |
| 1695\.011 | notice(5\) | I18N\_VALIDATE\_TWOFACTOR\_TOKEN | Two\-factor authentication token has been validated |
| 1695\.012 | notice(5\) | I18N\_VALIDATE\_TWOFACTOR\_TOKEN | Two\-factor authentication token has been validated |
| 1695\.013 | notice(5\) | I18N\_DELETE\_TWOFACTOR\_TOKEN | Two\-factor authentication token has been deleted |
| 1695\.014 | notice(5\) | I18N\_DELETE\_TWOFACTOR\_TOKEN | Two\-factor authentication token has been deleted |

## Values

The message value is a set in `key = value` format, separated by spaces. The keys have the same name as the [Common Event Format (CEF)](https://www.splunk.com/en_us/blog/tips-and-tricks/common-event-format-add-on.html#:~:text=The%20common%20event%20format,formatted%20as%20key%2Dvalue%20pairs.). The ones used by senhasegura are:



| **Key** | Description | Events |
| --- | --- | --- |
| **act** | Method used to access | All |
| **dhost** | Device hostname affected by event | , 2, 3, 8, 16, 17, 20, 21 |
| **dst** | Event Destination Device IP | , 2, 3, 8, 16, 17, 20, 21 |
| **duid** | Event related credential ID | , 2, 3, 13, 14, 15, 16, 17, 20,21 |
| **duser** | Event related credential username | , 2, 3, 13, 14, 15, 16, 17, 20,21 |



| **Key** | Description | Events |
| --- | --- | --- |
| **msg** | Additional Event Details | All |
| **requestMethod** | The method used for access | All |
| **sname** | Username in the senhasegura that generated the event | All |
| **spid** | The ID of the process where the event was generated | All |
| **spriv** | User type in senhasegura that generated the event | All |
| **suid** | User ID in the senhasegura that generated the event | All |
| **suser** | Username of the user who generated the event | All |

