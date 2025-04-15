This section provides reports generated from user interactions while using senhasegura. These reports are created by comparing the parameters set for session and password viewing with the user's actions throughout the session.

## User behavior parameters

There are two ways to access the parameters that interact with the reports.  
  
First:  
1\. Click the **Grid Menu**, represented by the nine squares, and click **Behavior**under the **PANEL**menu.

2\. At the bottom of the side menu, click Settings \> System parameters  \> System parameters.

Second:  
1\. Click the **Grid Menu**, represented by the nine squares, and click**Settings**under the **SYSTEM**menu.

2\. In the left\-side menu, click **System parameters \> System parameters \> User Behavior.**

**Info**  
You can print, export, or schedule all the reports described below. Select the report, and in the upper right corner of its viewing window, click **View actions**, represented by the three vertical dots icon. Then, choose the desired action.  
senhasegura will analyze schedule reports according to the defined time frame. You can select specific users for scheduling.  


## User Posture

Click Behavior \> User posture.

On the User posture screen, you’ll find a panel with information about the user profile according to the characteristics of resource use. 

* Status (Online or Offline): photo, username, access IP, and date/time of Last access.
* Behavior: Period with greater use, Total logins, Recording time, Average length of recordings, and user Locations.   
	+ InfoBy clicking on **Total logins**, the **Access control** window opens with a list of all the user’s logins filtered by **ID**and Authentication **Type**. This report can also be accessed by clicking the **Grid Menu \> PANEL \> Reports \> Access to the system \> Access history**. On the System access history screen, locate the desired user and in the **Action**column, click **List events**, represented by the magnifying glass.
	
	By clicking on **Locations**, the **Access by location** window opens with a list of all the user’s accesses grouped by location, filtered by **ID**and **Login period**. This report can also be accessed by clicking the **Grid Menu \> PANEL \> Reports \> Access to the system \> Access by location**.

  


* Sessions: number of sessions performed by the user.
* Sites: number of sessions the user conducted on each site.
* Rating evolution: the history of a user’s rating based on their behavior.
* Device type: number of sessions the user conducted on each type of device. By clicking on the graph, you access the Remote sessions report.
* Device criticality: number of sessions grouped by device criticality. By clicking on the graph, you access the Remote sessions report.
* Credential criticality: number of sessions grouped by credential criticality. By clicking on the graph, you access the Remote sessions report.
* High\-risk sessions: report containing high\-risk sessions performed by the user. By clicking on View more, identified by the square with an arrow pointing upwards, you can view session logs and video sessions of this report. To do that, click Action \> Session logs, identified by the four vertical lines, and Action \> Video of session, identified by the play icon. 
	+ InfoYou can also access the **High\-risk sessions**report in **Behavior \> Behavior analysis \> Sessions with risk****.**
* Suspicious events: report containing suspicious events. You can view session details by clicking on the magnifying glass icon, and watch the video of the session by clicking on the play icon.



---

Users Rating

  


Click Behavior \> Users Rating.

On the Users Rating report, you’ll find a ranking generated through suspicious user actions within the application. The more suspicious actions the user performs, such as presenting sessions of unusual duration, the more points the user loses. The report ranks users from lowest to highest, meaning the most suspicious users have the lowest scores.

* ID: user identifier within senhasegura.
* Name: personal identification.
* Username: a name that identifies the user.
* Last access: date and time of last access.
* Rating: user’s current rating.
* **Action:**identified by the magnifying glass icon, the View user posture opens a new window that displays the User posture report.



---

## Behavior Analysis

### Inside this menu, you’ll find reports that analyze user behavior.

### Unusual password change

Click Behavior \> Behavior Analysis \> Unusual password change.

On the Unusual password change screen, you’ll find information about manual updates to the password record that is being managed automatically by the PAM.  
  


* ID: action identifier.
* Origin: IP of the user when the password was changed.
* User: user who changed the password.
* Device: device of the used credential.
* Username: credential username.
* Credential type: type of credential used.
* Additional information: additional credential information.
* Change date/until: the time frame during which password changes occurred. For example, to view changes between September 22nd and September 25th of 2023, select 9/22/23 in the Change date field and 9/25/2023 in the until field.
* Risk: risk score assigned to this action.

## Session events

Inside this menu, you’ll find reports related to session events.

  


### Excessive number of accesses

Click Behavior \> Behavior Analysis \> Excessive number of accesses.

On the Excessive number of accesses screen, you’ll find a ranking of the most accessed credentials.

* Target: destination device of the used credential.
* Credential: credential with excessive accesses.
* Protocol: the protocol used in the session.
* Access interval/until: the number of accesses. For example, enter 5 in the Access interval field and 10 in the until field to filter accesses within this range.
* Action: identified by the magnifying glass icon, it opens a new window that displays the Unusual accesses report.

### 



---

### Accesses at unusual time

Click Behavior \> Behavior Analysis \> Accesses at unusual time.

On the Accesses at unusual time screen, you’ll find all accesses made by the user at times different from those the user typically accesses. 

* ID: action identifier.
* Origin: IP of the user who made the access.
* User: user who accessed at an unusual time.
* Target: destination device of the used credential.
* Credential: credential used to access at an unusual time.
* Protocol: the protocol used in the session.
* Access interval/until: accesses that occurred during a specified period. For example, to view accesses between September 22nd and September 25th of 2023, select 9/22/23 in the Access interval field and 9/25/2023 in the until field.
* Duration interval/until: the duration range, in seconds, of the session. For example, to view accesses that lasted between 30 and 60 seconds, enter 30 in the Duration interval field and 60 in the until field.
* Risk:  session score according to the defined parameters.
* Action: in this menu, you have access to session logs by clicking View details, identified by the four vertical lines icon, and to Video of session by clicking on the play icon.



---

### Accesses by unusual origin

Click Behavior \> Behavior Analysis \> Accesses by unusual origin.

On this screen, you’ll find a ranking of accesses made by the user on a source device other than the device they usually access.

* Origin: IP of the user who accessed.
* User:  the user who accessed at an unusual time.
* Sessions interval/until: the range of sessions to be consulted. For example, enter 5 in the Sessions interval field and 10 in the until field to filter sessions within this range.
* Risk range/until: session score range according to the defined parameters. For example, enter 5 in the Risk range field and 10 in the until field to filter for risk scores within this range.
* Action: identified by the magnifying glass icon, it opens a new window that displays the Unusual accesses report.



---

### Accesses with unusual length

Click Behavior \> Behavior Analysis \> Accesses with unusual length.

On this screen, you’ll find a list of all accesses made by the user with a duration different from the average duration of the user's sessions.

* ID: action identifier.
* Origin: IP of the user whose access had an unusual length.
* User: the user whose access had an unusual length.
* Target: destination device of the used credential.
* Credential: credential used to access at an unusual time.
* Protocol: the protocol used in the session.
* Access interval/until:  accesses that occurred during a specified period. For example, to view accesses between September 22nd and September 25th of 2023, select 9/22/23 in the Access interval field and 9/25/2023 in the until field.
* Duration interval/until: the duration range, in seconds, of the session. For example, to view accesses that lasted between 30 and 60 seconds, enter 30 in the Duration field and 60 in the until field.
* Risk: session score according to the defined parameters and the number of behavioral anomalies found.
* Action: In this menu, you have access to session logs by clicking View details, identified by the four vertical lines icon, and to Video of session by clicking on the play icon.



---

### Unusual accesses

Click Behavior \> Behavior Analysis \> Unusual accesses.

On this screen, you’ll find a report that combines all unusual actions.

* ID: action identifier.
* Origin: IP of the user who accessed.
* User: the user who accessed at an unusual time.
* Target: destination device of the used credential.
* Credential: credential used to access at an unusual time.
* Protocol: the protocol used in the session.
* Access interval/until: accesses that occurred during a specified period. For example, to view accesses between September 22nd and September 25th of 2023, select 9/22/23 in the Access interval field and 9/25/2023 in the until field.
* Origin?: select Yes to filter for sessions with an unusual origin. Select No to filter for sessions with a usual origin. Select All to apply no filters.
* Target?: select Yes to filter for sessions with an unusual target. Select No to filter for sessions with a usual target. Select All to apply no filters.
* Credential?: select Yes to filter for sessions with an unusual credential. Select No to filter for sessions with a usual credential. Select All to apply no filters.
* Time?: select Yes to filter for sessions at an unusual time. Select No to filter for sessions at a usual time. Select All to apply no filters.
* Duration?: select Yes to filter for sessions with an unusual duration. Select No to filter for sessions with a usual duration. Select All to apply no filters.
* Risk: session score according to the defined parameters.

  




---

### 

### Sessions with riskClick Behavior \> Behavior Analysis \> Sessions with risk.On this screen, you will find a report that provides details about the sessions that presented risk.

* Session ID: the session’s unique identifier.
* User: user of the session.
* Origin IP:  IP of the user who accessed.
* Credential: credential used to perform the access.
* Device: device of the used credential.
* Protocol: the protocol used in the session.
* Proxy: proxy used to perform the session
* Risk: session score according to the defined parameters.
* Session start/until:  the time frame during which the session occurred. For example, to view sessions between September 22nd and September 25th of 2023, select 9/22/23 in the Session start field and 9/25/2023 in the until field.
* Action: In this menu, you have access to Session logs by clicking on the icon identified by four vertical lines and to Video of session by clicking on the play icon.



---

## Credential view events

In this menu, you’ll find reports related to credential view events.

  


### Excessive views

Click Behavior \> Behavior Analysis \> Excessive views.

On this screen, you’ll find a ranking of credentials with the most viewed passwords.

* Device: device of the used credential.
* Credential: credential with excessive views.
* Credential type: type of credential used.
* Additional information: additional credential information.
* Viewing interval/ until:  the time frame during which the credential views occurred. For example, for views between September 22nd and September 25th of 2023, select 9/22/23 in the Viewing interval field and 9/25/2023 in the until field.
* Risk range/until: risk score range according to defined parameters. For example, enter 5 in the Risk range field and 10 in the until field to filter for risk scores within this range.
* Action: identified by the magnifying glass icon, it opens a new window that displays the Unusual views report.



---

### Views on unusual time

Click Behavior \> Behavior Analysis \> Views on unusual time.

On this screen, you’ll find a list of all password views the user made at times other than what they usually make.

* ID: action identifier.
* Origin: IP of the user who viewed the password.
* User: user who viewed the password at an unusual time.
* Device: device of the used credential.
* Credential: credential with unusual password time views.
* Credential type: type of credential used.
* Additional information: additional credential information.
* Viewing interval/until: the time frame during which the password views occurred. For example, for views that occurred between September 22nd and September 25th of 2023, select 9/22/23 in the Viewing interval field and 9/25/2023 in the until field.
* Risk: score of the view according to the defined parameters.



---

### Unusual credential view

Click Behavior \> Behavior Analysis \> Unusual credential view

On this screen, you'll find a list of all password views made by the user on credentials different from their usual ones.

* ID: action identifier.
* Origin: IP of the user who viewed the credential.
* User: user who viewed the credential.
* Device: device of the used credential.
* Credential: credential with unusual views.
* Credential type: type of credential used.
* Additional information: additional credential information.
* Viewing interval/until: the time frame during which the credential views occurred. For example, for views that occurred between September 22nd and September 25th of 2023, select 9/22/23 in the Viewing interval field and 9/25/2023 in the until field.
* Risk: score of the view according to the defined parameters.



---

### Views with unusual origin

Click Behavior \> Behavior Analysis \> Views with unusual origin.

On this screen, you’ll find a list of all password views made from a device that is different from the one the user typically uses.

* ID: action identifier.
* Origin: IP of the user who viewed the password.
* User: user who viewed the password.
* Device: device of the used credential.
* Credential: credential with unusual origin views.
* Credential type: type of credential used.
* Additional information: additional credential information.
* Viewing interval/until: the time frame during which the credential views occurred. For example, for views that occurred between September 22nd and September 25th of 2023, select 9/22/23 in the Viewing interval field and 9/25/2023 in the until field.
* Risk: score of the view according to the defined parameters.



---

### Unusual views

Click Behavior \> Behavior Analysis \> Unusual views.

On this screen, you’ll find a report that combines all unusual password views.

* ID: action identifier.
* Origin:  IP of the user who viewed.
* User: user who made the unusual views.
* Device: device of the used credential.
* Credential: credential with unusual views.
* Additional information: additional credential information.
* Viewing interval/until: the time frame during which the credential views occurred. For example, for views that occurred between September 22nd and September 25th of 2023, select 9/22/23 in the Viewing interval field and 9/25/2023 in the until field.
* Origin?: select Yes to filter for sessions with an unusual origin. Select No to filter for sessions with a usual origin. Select All to apply no filters.
* Credential?: select Yes to filter for sessions with an unusual credential. Select No to filter for sessions with a usual credential. Select All to apply no filters.
* Time?: select Yes to filter for sessions at an unusual time. Select No to filter for sessions at a usual time. Select All to apply no filters.
* Risk: score of the view according to the defined parameters.

  


## 

