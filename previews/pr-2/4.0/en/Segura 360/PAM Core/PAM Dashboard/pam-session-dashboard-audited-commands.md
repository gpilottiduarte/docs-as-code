# Audited commands

This document provides information about the **Audited commands** dashboard screen, displaying all the commands, the riskiest access and who are the users and devices most affected.

:::(info) (**Info**)  
The dashboard can only be accessed by users who have administrator or system auditor permissions.  
:::

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Dashboard > Audited commands**.

---
## Command analysis

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Display period** | Date picker | Filters by the period chosen to display the data. The options are *Today, Last 24 hours, This week, Last week, This month, Last month, This year, Last year and Custom*. |

---
## Graphics

| **Item** | **Description** |
| :---- | :---- |
| **Commands with greater severity** | Displays the number of commands with the highest severity that were executed, separated by date. |
| **Access with command detected** | Displays the number of accesses to sessions with detected commands, separated by date. |

---
## Lists
### Last access with commands detected
List of the last 5 accesses that have commands detected.

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the name of the user who performed the access. |
| **Device** | Displays the device that was initiated access. |
| **Credential** | Displays the credentials used by the user to access. |
| **Date** | Displays the date and time the access was made. |
| **Risk** | Displays the degree of the risk affected by access. The number can vary from 0 (zero) to 100 (one hundred). |
| **Magnifying glass** | Open Access details screen. |

### Access with greater severity
List of the last 5 access with greater severity.

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the name of the user who performed the access. |
| **Device** | Displays the device that was initiated access. |
| **Credential** | Displays the credential used by the user to access. |
| **Date** | Displays the date and time the access was made. |
| **Risk** | Displays the degree of the risk affected by access. The number can vary from 0 (zero) to 100 (one hundred). |
| **Magnifying glass** | Open Access details screen. |

### Greatest aggressors
List of users considered the biggest aggressors.

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the name of the user who performed the access. |
| **Incidents** | Displays the number of incidents that occurred. |
| **Sessions** | Displays the number of sessions accessed by the user. |
| **With incidents** | Displays the percentage of sessions in incidents occurred. |

### Greatest aggressed
List of the most affected devices.

| **Item** | **Description** |
| :---- | :---- |
| **Device** | Displays the IP address of the accessed device. |
| **Incidents** | Displays the number of incidents that occurred. |
| **Sessions** | Displays the number of times the device has been accessed. |
| **With incidents** | Displays the percentage of sessions where incidents occurred. |

---
### Access Details screen

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the user's name, email and IP address. |
| **Credential** | Displays the username, IP address, protocol type and port used by the credential. |
| **Access** | Displays the details of the session accessed by the user. The data is the IP address of the accessing machine, the duration of the session and the device accessed with the IP address, protocol and port. |
| **Last detected commands** | Displays the list of commands carried out by the user, containing Command, Action during session, Typed command, Event date, Executed in, Criticality, Risk and an option to view the video session. |

---
When clicking on the **User**, **Device** and **Credential** items in the lists on the dashboard, the following detail screens are displayed:   

### User profile screen

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the user's name, email, IP address, last session and time without access. |
| **Cards** | Displays the information Period with greater use, Total views, Views by day, Total access, Average length and Recording time. |
| **Access** | Displays a graph with accesses made in the last 45 days, informing risky accesses. |
| **Views** | Displays a graph with queries made in the last 45 days, informing queries with risk. |
| **Last access** | Displays a list of the user's last accesses containing the Device, Credential, Date, Score and Access Details fields. |
| **Latest views** | Displays the latest view performed by this user. |

### Device profile screen

| **Item** | **Description** |
| :---- | :---- |
| **Device** | Displays the address IP of the accessed device. |
| **Cards** | Displays the information Period with greater use, Total access, Access by day, Average length. |
| **Access** | Displays a graph with accesses made in the last 45 days, informing risky accesses. |
| **Access with greater risk**  | Displays a list of accesses on that device that were the highest risk, containing User, Credential, Date, Score and Access Details fields. |
| **Last access** | Displays a list of users and credentials used that last accessed this device, containing User, Credential, Date, Score and Access Details fields. |

### Credential profile screen

| **Item** | **Description** |
| :---- | :---- |
| **Credential** | Displays data from credential username and IP address. |
| **Cards** | Displays the information Period with greater use, Total access, Access by day and Average length. |
| **Access** | Displays a graph with accesses made in the last 45 days, informing risky accesses. |
| **Access with greater risk**   | Displays a list of users who used the highest risk credential, containing User, Date, Score and Access Details fields. |
| **Last access** | Displays a list of users who last accessed with this credential, containing User, Date, Score and Access Details fields. |