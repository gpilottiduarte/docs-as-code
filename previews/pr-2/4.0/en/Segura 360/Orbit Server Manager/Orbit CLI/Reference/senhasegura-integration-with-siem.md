# Integration with SIEM

Segura implements a robust security event collection and processing system, enabling comprehensive monitoring of critical environment metrics. The system systematically tracks the following components:

- Unique identifiers and system table metadata
- Performance metrics and operational status of automated processes
- Detailed records of user activities and interactions
- System integrity and performance indicators

This monitoring architecture natively integrates with SIEM (Security Information and Event Management) systems, enabling centralized management and in-depth security event analysis.

## Advanced SIEM Features

The SIEM implementation provides Information Security professionals with a comprehensive set of functionalities:

- Centralized consolidation of IT environment security data
- Continuous monitoring and real-time event log analysis
- Structured methodology for incident identification, classification, and investigation
- Advanced analytical reporting system
- Intelligent mechanisms for detecting anomalous behaviors and malicious activities

### Notification System

The SIEM platform incorporates a multifaceted notification system that operates through the following channels:

- SMS messages for critical alerts
- Instant messaging systems
- Email communications
- Integrated support ticketing system

Notifications are configured through customizable rules, allowing fine-tuned triggering criteria based on identified threat patterns.

## Monitoring in Segura

The system maintains constant vigilance over critical events, including:

- Authentication and authorization processes on managed devices
- Remote access attempts and their respective origins
- Critical events related to server infrastructure
- Credential lifecycle and status in the system

## Compatibility Specifications

Segura offers extensive compatibility with SIEM solutions through the following standardized protocols:

- CEF (Common Event Format) for event normalization
- Syslog (RFC 5424) for standardized log transmission
- Native integration with Sensage platform

This technical documentation establishes fundamental guidelines for implementing and operating SIEM integration in the Segura environment, ensuring effective monitoring and agile incident response.

## Event Mapping and SIEM Parameters

The following tables provide detailed technical reference for SIEM integration, presenting structured specifications of events, fields, and configurations supported by Segura. This tabular documentation establishes fundamental parameters for implementation, allowing administrators and technical teams to properly configure critical event monitoring. Each table has been systematically organized to facilitate consultation during integration, maintenance, and environment troubleshooting processes.

## CEF Message Format

CEF is a message format created to standardize information transmission to SIEM and follows the format **|CEF:0|MT4|Segura|3.27.0-4|336.501|UPDATE INCIDENT|9|Extensions|**

| Item | Description |
|---|---|
| Version | The CEF format version. In the example above, we use '0'. |
| Company | The name of the company responsible for the product. In the example above, we use 'MT4'. |
| Product | The name of the product generating the event. In the example above, we use 'Segura'. |
| Product Version | The product version. In the example above, we use '3.27.0-4'. |
| Event ID | The ID of the occurred event. Each ID is unique to identify the event. In the example above, we use '336.501'. |
| Event Name | The type of event that occurred. In the example above, we use 'Update Incident' to indicate that an update incident occurred. |
| Severity | The severity or importance of the event. The sequence ranges from 1 to 10. The higher the number, the more severe the incident. Additionally, a list of extensions providing detailed information about the event is presented. |

## RFC 5424 Format Messages

In this mode, SYSLOG messages are sent according to [RFC 5424](https://www.rfc-editor.org/rfc/rfc5424). Fields are configured with the following values:

*   **Priority:** according to event type
*   **facility:** 1 (user)
*   **App:** Segura
*   **Procid:** Current process PID
*   **Message:** event message

## Configured Messages

The following messages are configured for transmission through SIEM:

### Message Types (SUID)

| SUID | Description |
|---|---|
| 8 | Connectivity Loss/Recovery |
| 9 | Password Change executed |
| 15 | Backup performed |
| 17 | Password changed |
| 153 | Session Started/Ended |
| 164 | Password Viewed |
| dst | IP of the event target device |
| dhost | Hostname of the affected device |

### Backup

| Key | Example | Description |
|---|---|---|
| msg | Backup sent to server 'localhost:/srv/backup' via local | Message with action information |
| suid | | Message type |
| sname | Asynchronous Script: 8 | Backup script identifier |
| suser | | Not applicable |
| spid | | Unique notification identifier |
| dhost | localhost | Name of server where backup is generated |

### Connectivity Loss

| Key | Example | Description |
|---|---|---|
| msg | The device localhost (127.0.0.1) lost SSH connectivity | |
| suid | | Message type |
| sname | Asynchronous Script: 9 | Name of user who lost connectivity |
| suser | | Not applicable |
| spid | | Unique notification identifier |
| dst | .0.1 | Device IP |
| dhost | localhost | Name of server where backup is generated |
| dport | | Device port |

### Connectivity Restored

| Key | Example | Description |
|---|---|---|
| msg | The localhost equipment (127.0.0.1) has recovered SSH connectivity | |
| suid | | Message type |
| sname | Asynchronous Script: 9 | Name of the user whose session was restored |
| suser | | Not applicable |
| spid | | Unique notification identifier |
| dst | .0.1 | Device IP |
| dhost | localhost | Server name where backup is generated |
| dport | | Device port |

### Password Changed

| Key | Example | Description |
|---|---|---|
| msg | Password localhost (127.0.0.1) - Domain User - root changed by user jsilva | |
| suid | | Unique notification identifier |
| sname | Jose da Silva | Name of user who changed the password |
| suser | | Not applicable |
| spid | | Unique notification identifier |
| duser | root | Username of changed password |
| duid | | |
| dst | .0.1 | Device IP |
| dhost | localhost | Password device name |

### Password Viewed

| Key | Example | Description |
|---|---|---|
| msg | Password localhost (127.0.0.1) - Domain User - root changed by user jsilva | |
| suid | | Message type |
| sname | Jose da Silva | User who viewed the password |
| suser | | Not applicable |
| spid | | Unique notification identifier |
| duser | root duid=35 | Username of viewed password |
| dst | .0.1 | Password device IP |
| dhost | localhost | Password device name |

### Session Ended

| Key | Example | Description |
|---|---|---|
| msg | Session ended for localhost (127.0.0.1) - Privileged Domain User - srv_admin by user Jose da Silva (jsilva) | |
| suid | | Identifies message type |
| sname | Jose da Silva | User who ended the session |
| suser | jsilva | Login of user who ended the session |
| spid | | Unique notification identifier |
| dst | .0.1 | Device IP |
| dposrt | | Device port |
| duser | srv_admin | Login used in remote session |

### Session Started

| Key | Example | Description |
|---|---|---|
| msg | Session ended for localhost (127.0.0.1) - Privileged Domain User - root by user Jose da Silva (jsilva) | |
| suid | | Identifies message type |
| sname | Jose da Silva | User who started session |
| suser | jsilva | Login of user who started session |
| spid | | Unique notification identifier |
| dst | .0.1 | Device IP |
| dpt | | Device port |
| duser | root | Login used in remote session |

### Exchange Executed

| Key | Example | Description |
|---|---|---|
| msg | Session ended for localhost (127.0.0.1) - Privileged Domain User - root by user Jose da Silva (jsilva) | |
| suid | | Message type |
| sname | Asynchronous Script: 17 | Password exchange script identifier |
| suser | | Not used in this interface |
| spid | | Identifies message type |
| dst | .0.1 | Device IP |
| duser | root | User of changed password |

### Audited Commands Executed

| Key | Example | Description |
|---|---|---|
| msg | An audited command was detected! Action: "[Action taken]" | |
| suid | | Logged user |
| sname | Jose da Silva | User who started session |
| suser | jsilva | Login of user who started session |
| spid | | Not applicable |
| dst | | Not applicable |
| dpt | | Not applicable |
| duser | | Not applicable |

### Information Viewed

| Key | Example | Description |
|---|---|---|
| msg | Information 'test' viewed. | |
| suid | | Logged user |
| sname | Jose da Silva | User who started session |
| suser | jsilva | Login of user who started session |
| spid | | Message type |
| dst | | Not applicable |
| dpt | | Not applicable |
| duser | | Not applicable |

### Information Changed

| Key | Example | Description |
|---|---|---|
| msg | Information 'test' changed | |
| suid | | Logged user |
| sname | Jose da Silva | User who started session |
| suser | jsilva | Login of user who started session |
| spid | | Message type |
| dst | | Not applicable |
| dpt | | Not applicable |
| duser | | Not applicable |

### Password Access Request

| Key | Example | Description |
|---|---|---|
| msg | User 'Jose da Silva' created a request. Request details: Action to view password for credential cqss on device win2012 (192.168.10.156) | |
| suid | | Logged user |
| sname | Jose da Silva | Name of logged user |
| suser | jsilva | Login of logged user |
| spid | | Process PID |
| dst | .10.156 | Destination IP |
| dpt | | Not applicable |
| duser | cqss | Requested user |
| cs1Label | Change Request | Field label |
| cs1 | | File ID |
| cs2Label | Validity Start | Field label |
| cs2 | -01-19 10:41:00 | Request start date |
| cs3Label | Validity End | Field label |
| cs3 | -01-19 11:41:00 | Request expiration date |
| cs4Label | Approver | Field label |
| cs4 | Administrator | Approving User |
| cs5Label | Requester | Field label |
| cs5 | Jose da Silva | Requesting User |
| Cs6 | Action | Field label |
| Cs7 | View password | Action description |

### Request Approved

| Key | Example | Description |
|---|---|---|
| msg | Request approved by Administrator on 19/01/2017 10:44:30. Code: S000296 Requester: Jose da Silva Requested on: 19/01/2017 10:44:13 Request details: Action to view password for credential cqss on device win2012 (192.168.10.156) | |
| suid | | Logged user |
| sname | Maria da Silva | Name of logged user |
| suser | msilva | Login of logged user |
| spid | | Process PID |
| dst | .10.156 | Destination IP |
| dpt | | Not used |
| duser | cqss | Requested credential user |
| cs1Label | Change Request | Field label |
| cs1 | | File ID |
| cs2Label | Validity Start | Field label |
| cs2 | -01-19 10:41:00 | Request start date |
| cs3Label | Validity End | Field label |
| cs3 | -01-19 11:41:00 | Request expiration date |
| cs4Label | Approver | Field label |
| cs4 | Administrator | Approving User |
| cs5Label | Requester | Field label |
| cs5 | Jose da Silva | Requesting User |
| Cs6 | Action | Field label |
| Cs7 | View password | Action description |

### Request Denied

| Key | Example | Description |
|---|---|---|
| msg | Information 'test' viewed. | |
| suid | | Logged user |
| sname | Jose da Silva | Name of logged user |
| suser | jsilva | Login of logged user |
| spid | | Process PID |
| dst | .10.156 | Destination IP |
| dpt | | Not used |
| duser | cqss | Requested user login |
| cs1Label | Change Request | Field label |
| cs1 | | File ID |
| cs2Label | Validity Start | Field label |
| cs2 | -01-19 10:41:00 | Request start date |
| cs3Label | Validity End | Field label |
| cs3 | -01-19 11:41:00 | Request expiration date |
| cs4Label | Approver | Field label |
| cs4 | Administrator | Approving User |
| cs5Label | Requester | Field label |
| cs5 | Maria da Silva | Requesting User |
| Cs6 | Action | Field label |
| Cs7 | View password | Action description |

### Detected Command - Block and Terminate Session
| Key | Example | Description |
|---|---|---|
| msg | An audited command was detected! Action: Command blocked and session terminated | |
| suid | | Logged user |
| sname | Romario | User who initiated session |
| suser | romario | Login of user who initiated session |
| spid | | Message type |
| dst | .0.1 | Destination IP |
| dpt | | Port used |
| duser | vault | User utilized to initiate session |

### Detected Command - Block
| Key | Example | Description |
|---|---|---|
| msg | An audited command was detected! Action: Command notified and allowed | |
| suid | | Logged user |
| sname | Romario | User who initiated session |
| suser | romario | Login of user who initiated session |
| spid | | Message type |
| dst | .0.1 | Destination IP |
| dpt | | Port used |
| duser | vault | User utilized to initiate session |

### Password Change Error
| Key | Example | Description |
|---|---|---|
| msg | Error changing password 'Windows SQL Test Remote App (192.168.30.55) - Domain User – 'jsilvaadm': The device 'Windows SQL Test Remote App (192.168.30.55)' does not have Windows RPC connectivity | |
| suid | | Logged user |
| sname | José da Silva | Name of user who initiated session |
| suser | Jsilva | Login of user who initiated session |
| spid | | Message type |
| dst | .30.5 | Destination IP |
| dpt | | Not applicable |
| duser | jsilvaadm | User utilized to initiate session |

### Storage File Modified
| Key | Example | Description |
|---|---|---|
| msg | A session file was modified! | |
| suid | | Logged user |
| sname | Asynchronous Script: 12 | Logged username |
| suser | asc_12 | Logged user login |
| spid | | Process PID |
| dst | | Not applicable |
| dpt | | Not applicable |
| duser | | Not applicable |
| cs1Label | Id | Field label |
| cs1 | | File ID |
| cs2Label | Initial Size | Field label |
| cs2 | | Initial file size in bytes |
| cs3Label | Final Size | Field label |
| cs3 | | Final file size in bytes |
| cs4Label | Initial Checksum | Field label |
| cs4 | f5751777b74f8e2f2… | Previous file checksum |
| cs5Label | Final Checksum | Field label |
| cs5 | 284f1555574548901… | Current file checksum |

### Master Key - Users Who Viewed Their Key Part
| Key | Example | Description |
|---|---|---|
| msg | User viewed their part of the key request. | |
| suid | | Logged user |
| sname | José da Silva | Logged username |
| suser | jsilva | Logged user login |
| Method | POST | Fixed value |
| act | User viewed their part of the key source. | Performed action |
| ServiceName | Backup | |

### Master Key - User Downloaded PDF with Their Key Part
| Key | Example | Description |
|---|---|---|
| msg | User downloaded the PDF with their part of the key request. | |
| suid | | Logged user |
| sname | José da Silva | Logged username |
| suser | jsilva | Logged user login |
| Method | POST | Fixed value |
| act | User downloaded the PDF with their part of the key source. | Performed action |
| ServiceName | Backup | |

### Master Key - Ceremony Process Started
| Key | Example | Description |
|---|---|---|
| msg | Ceremony process started. | |
| suid | | Logged user |
| sname | José da Silva | Logged username |
| suser | jsilva | Logged user login |
| spriv | Administrator | |
| Method | POST | Fixed value |
| act | Ceremony process started. | Performed action |
| ServiceName | Backup | |

### Master Key - Ceremony Process Completed
| Key | Example | Description |
|---|---|---|
| msg | Ceremony process completed. | |
| suid | | Logged user |
| sname | José da Silva | Logged username |
| suser | jsilva | Logged user login |
| spriv | Administrator | |
| Method | GET | Fixed value |
| act | Ceremony process completed. | Performed action |
| ServiceName | Backup | |

### Master Key - Inactive Guardian
| Key | Example | Description |
|---|---|---|
| msg | Master Key - Inactive Guardian. | |
| suid | | Logged user ID |
| sname | John Doe | Username |
| suser | jdoe | User login |
| spriv | User | Application layer |
| dvc | .225.14 | Device IPv4 host |
| spid | | Internal PID |
| act | Incident | Performed action |
| dproc | master_key_guardian | Target process name |

### Master Key - Recovery Attempt Failed
| Key | Example | Description |
|---|---|---|
| msg | Recovery attempt failed. The key fractions are invalid | |
| requestMethod | POST | Fixed value |
| act | Recovery attempt failed | Type of Master Key recovery failure |
| sourceServiceName | Master Key | Operation module |
| originIP | .148.162 | Requesting user IP |
| country | Brazil | Request country geolocation |
| state | Sao Paulo | Request state geolocation |
| city | Taboao da Serra | Request city geolocation |
| latitude | | Request GPS latitude geolocation |
| longitude | | Request GPS longitude geolocation |
| partsNeeded | | Fractions needed for recovery |
| partsSent | | Number of fraction attempts sent |
| suid | | Logged user ID |
| sname | | Username |
| suser | | User login |
| spriv | User | Application layer |
| dvc | .2.17 | Device IPv4 host |
| spid | | Internal PID |
| src | .0.1 | Source IP address |
| act | Incident | Performed action |
| dproc | master_key_guardian | Target process name |

### Master Key - Successful Recovery Attempt
| Key | Example | Description |
|---|---|---|
| msg | Recovery attempt successful. The key fractions used are valid | |
| requestMethod | POST | Fixed value |
| act | Recovery attempt successful | Type of successful master key recovery |
| sourceServiceName | Master Key | Operation module |
| originIP | .10.13 | Request user IP |
| country | Brazil | Request country geolocation |
| state | Sao Paulo | Request state geolocation |
| city | Taboao da Serra | Request city geolocation |
| latitude | | Request GPS latitude geolocation |
| longitude | | Request GPS longitude geolocation |
| partsNeeded | | Fractions needed for recovery |
| partsSent | | Number of fraction attempts sent |
| suid | | Registered user ID |
| sname | | Username |
| suser | | User login |
| spriv | User | Application layer |
| dvc | .10.20 | Device IPv4 host |
| spid | | Internal PID |
| src | .10.13 | Source IP address |
| act | Incident | Performed action |
| dproc | master_key_guardian | Target process name |

### Email Report Scheduling - Creation
| Key | Example | Description |
|---|---|---|
| dvc | .20.30 | Secure password server IP |
| spid | | Operating system process ID |
| src | .20.10 | IP of user who performed operation |
| suid | | ID of user who executed operation |
| sname | John Doe | Username |
| suser | jdoe | User login |
| spriv | Administrator | Privileged user who performed operation |
| msg | Report Scheduling - Creation | Operation performed |
| requestMethod | POST | HTTP method used by client |
| act | Report Scheduling - Creation | Operation performed |
| sourceServiceName | Report Scheduling | Category of operation executed |
| cs1Label | User | Requesting username label |
| cs1 | John Doe | Requester name |
| cs2Label | User ID | User ID label |
| cs2 | | User ID |
| cs3Label | Schedule | Schedule name label |
| cs3 | My schedule | Schedule name |
| cs4Label | Schedule ID | Schedule ID label |
| cs4 | | Schedule ID |
| cs5Label | Added reports | Added reports label |
| cs5 | Settings > Authentication > Multi-factor Authentication > Providers | Added label |
| cs7Label | Added users | Added users label |
| cs7 | jdoe - John Doe | Users added to receive notification |

### Email Report Scheduling - Update
| Key | Example | Description |
|---|---|---|
| dvc | .20.30 | Secure password server IP |
| spid | | Operating system process ID |
| src | .20.10 | IP of user who performed operation |
| suid | | ID of user who executed operation |
| sname | John Doe | Username |
| suser | jdoe | User login |
| spriv | Administrator | Privileged user who performed operation |
| msg | Report Scheduling - Update | Operation performed |
| requestMethod | POST | HTTP method used by client |
| act | Report Scheduling - Update | Operation performed |
| sourceServiceName | Report Scheduling | Category of operation executed |
| cs1Label | User | Requesting username label |
| cs1 | John Doe | Requester name |
| cs2Label | User ID | User ID label |
| cs2 | | User ID |
| cs3Label | Schedule | Schedule name label |
| cs3 | My schedule | Schedule name |
| cs4Label | Schedule ID | Schedule ID label |
| cs4 | | Schedule ID |
| cs5Label | Added reports | Added reports label |
| cs5 | None | Added reports |
| cs6Label | Removed reports | Removed reports label |
| cs6 | None | Removed reports |
| cs7Label | Added users | Added users label |
| cs7 | None | Added users |
| cs8Label | Removed users | Removed users label |
| cs8 | None | Removed users |

### Email Report Scheduling - Deletion
| Key | Example | Description |
|---|---|---|
| dvc | .20.30 | Secure password server IP |
| spid | | Operating system process ID |
| src | .20.10 | IP of user who performed operation |
| suid | | ID of user who executed operation |
| sname | John Doe | Username |
| suser | jdoe | User login |
| spriv | Administrator | Privileged user who performed operation |
| msg | Report Scheduling - Deletion | Operation performed |
| requestMethod | POST | HTTP method used by client |
| act | Report Scheduling - Deletion | Operation performed |
| sourceServiceName | Report Scheduling | Category of operation executed |
| cs1Label | User | Requesting username label |
| cs1 | John Doe | Requester name |
| cs2Label | User ID | User ID label |
| cs2 | | User ID |
| cs3Label | Schedule | Schedule name label |
| cs3 | My schedule | Schedule name |
| cs4Label | Schedule ID | Schedule ID label |
| cs4 | | Schedule ID |