senhasegura collects information and events from the environment to monitor various product metrics, including table identifiers and the status of running robots. This data can be sent to SIEM solutions for monitoring. 

SIEM solutions provide a comprehensive view for Information Security administrators, allowing them to monitor activities in the IT environment through log data. SIEM uses these records to identify, categorize, and analyze incidents and events, generating security reports that cover suspicious or malicious activities. 

Additionally, SIEM can send alerts through different channels such as SMS, instant messaging, email, and ticket opening if it detects potential security threats based on established configuration rules.

Alerts sent by senhasegura include:

* User authentication on the device.
* Remote login on the device.
* Failures in the senhasegura server.
* Password expiration.

senhasegura is compatible with the most used SIEM tools on the market and offers support for sending messages in the following formats:

* CEF
* Syslog (RFC 5424\)
* Sensage



---

## CEF messages

CEF is a message format created to standardize the sending of information to SIEM and follows the order **CEF:0\|MT4\|senhasegura\|3\.27\.0\-4\|336\.501\|UPDATE INCIDENT\|9\|Extensions**.



| **Item** | **Description** |
| --- | --- |
| **Version** | The version of the CEF format. In the example above, we used '0'. |
| **Vendor** | The name of the company responsible for the product. In the example above, we used 'MT4'. |
| **Product** | The name of the product generating the event. In the example above, we used 'senhasegura'. |
| **Product version** | The product version. In the example above, we used '3\.27\.0\-4'. |
| **Event ID** | The ID of the event that occurred. Each ID is unique to identify the event. In the example above, we used '336501'. |
| **Event name** | The type of event that occurred. In the example above, we used 'Update Incident' to indicate that an update incident has occurred. |
| **Severity** | The severity of the event that occurred. The sequence goes from 1 to 10\. The higher the number, the more serious the incident. |

Furthermore, the system presents a list of extensions that provide detailed information about the event.



---

## RFC 5424 messages

senhasegura also supports syslog files that follow the [RFC 5424](https://www.rfc-editor.org/rfc/rfc5424)  standard. The header of this message format contains the following fields:

* ***priority:*** according to event type
* ***facility:*** 1 (user)
* ***App:*** senhasegura
* ***procid:*** PID of the current process
* ***message:*** event message



---

## Supported messages

These are some of the message formats that are native to senhasegura and can be exported to an external SIEM solution:

### Messages Type (SUID)



| **SUID** | Events |
| --- | --- |
| **8** | Loss / Recovered Connectivity |
| **9** | Password rotation |
| **15** | Backup complete |
| **17** | Password changed |
| **153** | Session Started / Ended |
| **164** | Password visualization |
| **dst** | IP adress of the event's target device |
| **dhost** | Hostname of the device affected by the event |

### Backup



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Backup sent to server ’localhost:/srv/backup’ via local |  |
| **suid** |  | Message Type |
| **sname** | Asynchronous Script: 8 | Backup Script ID |
| **suser** |  | Not applicable |
| **spid** |  | Notification's Unique ID |
| **dhost** | localhost | Name of the backup server |

### Lost Connectivity



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Localhost appliance (127\.0\.0\.1\) has lost SSH connectivity |  |
| **suid** |  | Message Type |
| **sname** | Asynchronous Script9 | Name of user who has lost connectivity |
| **suser** |  | Not applicable |
| **spid** |  | Notification's Unique ID |
| **dst** | .0\.1 | Device's IP address |
| **dhost** | localhost | Name of the backup server |
| **dport** |  | Device’s Port |

### Restored Connectivity



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Localhost appliance (127\.0\.0\.1\) has recovered SSH connectivity |  |
| **suid** |  | Message Type |
| **sname** | Asynchronous Script: 9 | Name of the user whose connection was lost |
| **suser** |  | Not applicable |
| **spid** |  | Notification's Unique ID |
| **dst** | .0\.1 | Device's IP address |
| **dhost** | localhost | Name of the backup server |
| **dport** |  | Device’s Port |

### Password changed



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Password localhost (127\.0\.0\.1\) \- Domain User \- root changed by user stlee |  |
| **suid** |  | Notification's Unique ID |
| **sname** | Stephen Lee | User that changed the password |
| **suser** |  | Not applicable |
| **spid** |  | Notification's Unique ID |
| **duser** | root | Username of the changed password |
| **duid** |  |  |
| **dst** | .0\.1 | Device's IP address |
| **dhost** | localhost | name of the password's device |

### Password visualization



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Password localhost (127\.0\.0\.1\) \- Domain User \- root changed by user stlee |  |
| **suid** |  | Message Type |
| **sname** | Stephen Lee | User that viewed the password |
| **suser** |  | Not applicable |
| **spid** |  | Notification's Unique ID |
| **duser** | root duid\=35 | Username of the password |
| **dst** | .0\.1 | IP address of the password's device |
| **dhost** | localhost | Name of the password's device |

### Session Ended



| **msg** | Session terminated for localhost (127\.0\.0\.1\) \- Privileged Domain User \- srv\_admin by the user Stephen Lee (stlee) |  |
| --- | --- | --- |
| **suid** |  | Message type |
| **sname** | Stephen Lee | User that terminated the session |
| **suser** | stlee | Login details of the user that terminated the session |
| **spid** |  | Notification's Unique ID |
| **dst** | .0\.1 | Device’s IP address |
| **dposrt** |  | Device’s Port |
| **duser** | srv\_admin | Login used in the remote session |

### Session Started



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Session started for localhost (127\.0\.0\.1\) \- Privileged Domain User \- root by the user Stephen Lee (stlee) |  |
| **suid** |  | Message type |
| **sname** | Stephen Lee | User Login details |
| **suser** | stlee | Login details of the user that started the session |
| **spid** |  | Notification's Unique ID |
| **dst** | .0\.1 | Device’s IP address |
| **dpt** |  | Device’s Port |
| **duser** | root | Login used in the remote session |

### Exchange performed



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Session terminated for localhost (127\.0\.0\.1\) \- Privileged Domain User \- by the user Stephen Lee (stlee) |  |
| **suid** |  | Message Type |
| **sname** | Asynchronous Script: 17 | Password change script ID |
| **suser** |  | Not applicable |
| **spid** |  | Message type |
| **dst** | .0\.1 | Device’s IP address |
| **duser** | root | User associated with the changed password |

### Command Execution and Auditing



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | An audited command has been detected! Action: ”\[system action]” |  |
| **suid** |  | User logged in |
| **sname** | Stephen Lee | User that started the session |
| **suser** | stlee | Login details of the user that started the session |
| **spid** |  | Not applicable |
| **dst** |  | Not applicable |
| **dpt** |  | Not applicable |
| **duser** |  | Not applicable |

### Privileged Information visualization



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Access detected to ’my example’. |  |
| **suid** |  | Logged User |
| **sname** | Stephen Lee | User that started the session |
| **suser** | stlee | Login of the user that started the session |
| **spid** |  | Message Type |
| **dst** |  | Not applicable |
| **dpt** |  | Not applicable |
| **duser** |  | Not applicable |

### Changes in Privileged Information



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Information ’my example’ has been changed. |  |
| **suid** |  | Logged user |
| **sname** | Stephen Lee | User that started the session |
| **suser** | stlee | Login details of the user that started the session |
| **spid** |  | Message Type |
| **dst** |  | Not applicable |
| **dpt** |  | Not applicable |
| **duser** |  | Not applicable |

### Password Request



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | User ’Stephen Lee’ has made a request. Request Details: View password action for cqss credential on win2012 device (192\.168\.10\.156\) |  |
| **suid** |  | Logged User |
| **sname** | Stephen Lee | Name of the logged user |
| **suser** | stlee | logged user’s username |
| **spid** |  | Process ID |
| **dst** | .10\.156 | Target IP address |
| **dpt** |  | Not applicable |
| **duser** | cqss | Requested user |
| **cs1Label** | GMUD | Field label |
| **cs1** |  | File ID |
| **cs2Label** | Validity Start | Field label |
| **cs2** | \-01\-19 10:41:00 | Date and time the request was sent |
| **cs3Label** | Validity End | Field label |
| **cs3** | \-01\-19 11:41:00 | Date and time the request expires |
| **cs4Label** | Approver | Field’s label |
| **cs4** | Administrator | Approver |
| **cs5Label** | Requester | Field label |
| **cs5** | Stephen | Field label |
| **Cs6** | Action | Field label |
| **Cs7** | View password | Description of the Action |

### Approved request



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Application approved by Administrator on 19/01/2017 10:44:30\. Code: S000296 Requestor: Steven Lee Requested on: 19/01/2017 10:44:13 Request detail: View password action for cqss credential on device win2012 (192\.168\.10\.156\) |  |
| **suid** |  | Logged User |
| **sname** | Leia West | Name of the logged user |
| **suser** | lwest | logged user’s username |
| **spid** |  | Process ID |
| **dst** | .10\.156 | Target IP address |
| **dpt** |  | Not used |
| **duser** | cqss | User associated with the requested credential |
| **cs1Label** | GMUD | Field label |
| **cs1** |  | File ID |
| **cs2Label** | Validity End | Field label |
| **cs2** | \-01\-19 10:41:00 | Date and time the request was sent |
| **cs3Label** | Validity End | Field label |
| **cs3** | \-01\-19 11:41:00 | Date and time the request expires |
| **cs4Label** | Approver | Field label |
| **cs4** | Administrator | Approver |
| **cs5Label** | Requester | Field label |
| **cs5** | Steven Lee | Requesting User |
| **Cs6** | Action | Field label |
| **Cs7** | View Password | Description of the Action |

### Request denied



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Access to ’test’ detected. |  |
| **suid** |  | Logged User |
| **sname** | Steven Lee | Name of the logged user |
| **suser** | stlee | logged user’s username |
| **spid** |  | Process ID |
| **dst** | .10\.156 | Target IP |
| **dpt** |  | Not used |
| **duser** | cqss | Login details of the requested user |
| **cs1Label** | GMUD | Field label |
| **cs1** |  | File ID |
| **cs2Label** | Validity Start | Field label |
| **cs2** | \-01\-19 10:41:00 | Date and time the request was sent |
| **cs3Label** | Validity End | Field label |
| **cs3** | \-01\-19 11:41:00 | Date and time the request expires |
| **cs4Label** | Approver | Field label |
| **cs4** | Administrator | Approver |
| **cs5Label** | Requester | Field label |
| **cs5** | Leia West | Requesting user |
| **Cs6** | Action | Field Label |
| **Cs7** | View password | Description of the Action |

### Command Detected \- Block and Stop Session



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | An audited command has been detected! Action: blocked the command and terminated the session |  |
| **suid** |  | Logged user |
| **sname** | Caleb | senhasgura user who started the session |
| **suser** | caleb | Username of the user that started the session |
| **spid** |  | Message Type |
| **dst** | .0\.1 | Target IP |
| **dpt** |  | Port used |
| **duser** | usrmanut | User associated with the target device |

### Command Detected \- Block



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | An audited command has been detected! Action: Notification sent and command allowed |  |
| **suid** |  | Logged User |
| **sname** | Caleb | User that started the session |
| **suser** | caleb | Username of the user that started the session |
| **spid** |  | Message Type |
| **dst** | .0\.1 | Target IP |
| **dpt** |  | Port used |
| **duser** | usrmanut | User that started the session |

### Password change error



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Error changing password ’Windows SQL Test Remote App (192\.168\.30\.55\) \- Domain User – ’stleeadm’: The device ’Windows SQL Test Remote App (192\.168\.30\.55\)’ has no Windows RPC connectivity |  |
| **suid** |  | Logged User |
| **sname** | Stephen Lee | Name of the user that started the session |
| **suser** | stlee | Username of the user that started the session |
| **spid** |  | Message Type |
| **dst** | .30\.55 | Target IP |
| **dpt** |  | Not applicable |
| **duser** | stleeadm | User that started the session |

### Changes in stored file



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | A session file has been modified! |  |
| **suid** |  | Logged user |
| **sname** | Asynchronous Script: 12 | Name of the logged user |
| **suser** | asc\_12 | Username of the logged user |
| **spid** |  | Process ID |
| **dst** |  | Not applicable |
| **dpt** |  | Not applicable |
| **duser** |  | Not applicable |
| **cs1Label** | Id | Field Label |
| **cs1** |  | File ID |
| **cs2Label** | Initial Size | Field Label |
| **cs2** |  | cs2 |
| **cs3Label** | Final size | Field label |
| **cs3** |  | Final file size in bytes |
| **cs4Label** | Initial Checksum | Field label |
| **cs4** | f5751777b74f8e2f2… | Previously file checksum |
| **cs5Label** | Final Checksum | Field’s Label |
| **cs5** | 284f1555574548901… | File's previous Checksum |

### Master Key \- Users who have viewed their part of the key



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | The user accessed his part of the key. |  |
| **suid** |  | Logged user |
| **sname** | Stephen Lee | Name of the logged user |
| **suser** | stlee | Username of the user that started the session |
| **Method** | POST |  |
| **act** | User has seen his part of the key |  |
| **ServiceName** | Backup |  |

### Master Key \- User downloads a PDF file with his part of the key



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | The User downloaded the PDF with his part of the key. |  |
| **suid** |  | User logged |
| **sname** | Stephen Lee | Name of the logged user |
| **suser** | stlee | Username of the user that started the session |
| **Method** | POST |  |
| **act** | The user downloaded the PDF with his part of the key source |  |
| **ServiceName** | Backup |  |

### Master Key \- Key Ceremony Initiated



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | The key ceremony process started. |  |
| **suid** |  | Logged user |
| **sname** | José da Silva | Name of the logged user |
| **suser** | jsilva | Username of the user that started the session |
| **spriv** | Administrator |  |
| **Method** | POST | Fixed value |
| **act** | Ceremony process started | Performed action |
| **ServiceName** | Backup |  |

### Master Key \- Key Ceremony Ended



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Ceremony process completed. |  |
| **suid** |  | Logged user |
| **sname** | José da Silva | Name of the logged user |
| **suser** | jsilva | Username of the user that started the session |
| **spriv** | Administrator |  |
| **Method** | GET |  |
| **act** | Ceremony process completed |  |
| **ServiceName** | Backup |  |

### Master Key \- Inactive Master key Guardian



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | The master key guardian is currently inactive. |  |
| **suid** |  | Logged user's ID |
| **sname** | Jane Doe | Username |
| **suser** | jdoe | User's username |
| **spriv** | User | application layer |
| **dvc** | .225\.14 | Device's IPv4 Host |
| **spid** |  | internal PID |
| **act** | Incident | Performed action |
| **dproc** | master\_key\_guardian | Name of the target process |

### Master Key \- Failed recovery



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | The recovery attempt has failed. | Invalid key parts |
| **requestMethod** | POST | Fixed value |
| **act** | Failed recovery attempt | Type of recovery failure |
| **sourceServiceName** | Master Key | Operation module |
| **originIP** | .148\.162 | Requesting user's IP address |
| **country** | Brazil | User's geolocation: country |
| **state** | Sao Paulo | User's geolocation: state |
| **city** | Taboao da Serra | User's geolocation: city |
| **latitude** |  | User's geolocation: GPS latitude |
| **longitude** |  | User's geolocation: GPS longitude |
| **partsNeeded** |  | Key parts necessary for recovery |
| **partsSent** |  | Number of attempts with the key parts sent |
| **suid** |  | Logged user's ID |
| **sname** |  | Logged user's name |
| **suser** |  | Logged user's username |
| **spriv** | User | Application layer |
| **dvc** | .2\.17 | Device's IPv4 host |
| **spid** |  | Internal PID |
| **src** | .0\.1 | Source IP Address |
| **act** | Incident | Performed Action |
| **dproc** | master\_key\_guardian | Name of the target proccess |

### Master Key \- Successful recovery



| **Key** | Example | Description |
| --- | --- | --- |
| **msg** | Successful recovery attempt. | The key parts have been validated |
| **requestMethod** | POST | Fixed value |
| **act** | Successful recovery attempt | Type of successful recovery |
| **sourceServiceName** | Master Key | Operation module |
| **originIP** | .10\.13 | Requesting user's IP address |
| **country** | Brazil | User's geolocation: country |
| **state** | Sao Paulo | User's geolocation:  state |
| **city** | Taboao da Serra | User's geolocation: city |
| **latitude** |  | User's geolocation: GPS latitude |
| **longitude** |  | User's geolocation: GPS longitude |
| **partsNeeded** |  | Key parts necessary for recovery |
| **partsSent** |  | Number of attempts with the key parts sent |
| **suid** |  | Logged user's ID |
| **sname** |  | Logged user's name |
| **suser** |  | Logged user's username |
| **spriv** | User | Application layer |
| **dvc** | .10\.20 | Device's IPv4 host |
| **spid** |  | Internal PID |
| **src** | .10\.13 | Source IP Address |
| **act** | Incident | Performed Action |
| **dproc** | master\_key\_guardian | Name of the target process |

### Reports \- Schedule Email



| **Key** | Example | Description |
| --- | --- | --- |
| **dvc** | .20\.30 | senhasegura Server's IP |
| **spid** |  | Process ID in the Operating System |
| **src** | .20\.10 | IP address of the user that performed the operation |
| **suid** |  | ID of the user that performed the operation |
| **sname** | John Doe | Name of the user that performed the operation |
| **suser** | jdoe | Username of the user who performed the operation |
| **spriv** | Administrator | Privileged user used to perform the operation |
| **msg** | Report scheduling \- Creation | Performed operation |
| **requestMethod** | POST | HTTP method used |
| **act** | Report scheduling \- Creation | Performed operation |
| **sourceServiceName** | Report scheduling | Operation category |
| **cs1Label** | User | Label for requesting User |
| **cs1** | John Doe | Requesting User |
| **cs2Label** | User ID | User ID Label |
| **cs2** |  | User ID |
| **cs3Label** | Schedule | Label for the name of the schedule |
| **cs3** | My schedule | Schedule Name |
| **cs4Label** | Schedule ID | Label for the Schedule ID |
| **cs4** |  | Schedule ID |
| **cs5Label** | Added reports | Label for the added reports |
| **cs5** | Settings **➔** Authentication **➔** Multi\-factor authentication **➔** Providers | Added reports |
| **cs7Label** | Added users | Label for the added users |
| **cs7** | jdoe \- John Doe | Users who will receive the notification |

### Reports \- Update a Schedule



| **Key** | Example | Description |
| --- | --- | --- |
| **dvc** | .20\.30 | senhasegura Server's IP address |
| **spid** |  | Process ID in Operating System |
| **src** | .20\.10 | IP address of the user that performed the operation |
| **suid** |  | ID of the user that performed the operation |
| **sname** | John Doe | Name of the user that performed the operation |
| **suser** | jdoe | Username of the user that performed the operation |
| **spriv** | Administrator | Privileged user used to perform the operation |
| **msg** | Report scheduling \- Update | Performed operation |
| **requestMethod** | POST | HTTP method used |
| **act** | Report scheduling \- Update | Performed operation |
| **sourceServiceName** | Report scheduling | Operation category |
| **cs1Label** | User | Label for requesting user name |
| **cs1** | John Doe | Requesting User |
| **cs2Label** | User ID | User ID Label |
| **cs2** |  | User ID |
| **cs3Label** | Schedule | Label for the name of the schedule |
| **cs3** | My schedule | Schedule Name |
| **cs4Label** | Schedule ID | Label for the Schedule ID |
| **cs4** |  | Schedule Name |
| **cs5Label** | Added reports | Label for the added reports |
| **cs5** | None | Added reports |
| **cs6Label** | Removed reports | Label for the removed reports |
| **cs6** | None | Removed reports |
| **cs7Label** | Added users | Label for the added users |
| **cs7** | None | Added Users |
| **cs8Label** | Removed users | Label for the removed users |
| **cs8** | None | Removed users |

### Reports \- Delete



| **Key** | Example | Description |
| --- | --- | --- |
| **dvc** | .20\.30 | senhasegura Server's IP |
| **spid** |  | Process ID in the Operating System |
| **src** | .20\.10 | IP address of the user that performed the operation |
| **suid** |  | ID of the user that performed the operation |
| **sname** | John Doe | Name of the user that performed the operation |
| **suser** | jdoe | Username of the user that performed the operation |
| **spriv** | Administrator | Privileged user used to perform the operation |
| **msg** | Report scheduling \- Deletion | Performed operation |
| **requestMethod** | POST | HTTP method used |
| **act** | Report scheduling \- Deletion | Performed operation |
| **sourceServiceName** | Report scheduling | Operation category |
| **cs1Label** | User | Label for Requesting User |
| **cs1** | John Doe | Requesting User |
| **cs2Label** | User ID | User ID Label |
| **cs2** |  | User ID |
| **cs3Label** | Schedule | Label for the name of this schedule |
| **cs3** | My schedule | Schedule Name |
| **cs4Label** | Schedule ID | Label for the Schedule ID |
| **cs4** |  | Schedule ID |

