# Re-authentication logs

In this document, you’ll find detailed information about the **User Behavior**’s **Re-authentication logs** screen, which allows the administrator to view a report of all identity verification events triggered in senhasegura.

## Requirements

- Administrator permission.
- **Continuous identification** feature configured. Access the document on [How to manage Continuous identification](/v3-33/docs/how-to-manage-continuous-identification) for more information.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **User Behavior**.
2. In the side menu, select **Behavior analysis > Re-authentication logs**.

---

## Top bar

| **Item**      | **Description**                                                                       |
|---------------|---------------------------------------------------------------------------------------|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update**    | Represented by the counterclockwise arrow icon, it refreshes the page.                |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report.                           |
| **Schedule report** | Represented by the clock icon, it opens the **[Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports)** screen.                  |

## Search fields

| **Item**    | **Description**                                                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ID**      | Text field that filters re-authentication events by their unique identification code.                                                            |
| **Trigger** | Text field that filters re-authentication events by the trigger that initiated them. Available options are View attempts at prohibited times, Blocked commands, Session attempts at prohibited times, High-risk sessions, Rating drop, and Token TOTP. Clear the field to enable the All option. <br> **Note:** events marked with TOTP token are related to TOTP token requests at login. |
| **User**    | Text field that filters re-authentication events by the user who re-authenticated.                                                                 |
| **Date**    | Field that filters re-authentication events by the period in which they occurred. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar. <br>If the **Time** field is enabled, use it to enter the start time of the interval.  |
| **until**   | Field that filters re-authentication events by the period in which they occurred. Format `MM/DD/YYYY`. Use this field to enter the final date of the period. The downward arrow opens a calendar. <br>If the **Time** field is enabled, use it to enter the end time of the interval. |
| **Status**  | Drop-down menu that filters re-authentication events by their status. Available options are Success and Failure. Clear the field to enable the **All** option. |

## Report fields

- **ID**.
- **Trigger**.
- **User**.
- **Date**.
- **Status**.
- **Action:** in this column, you can access:
  - **Details:** represented by the key icon, it opens the **[Details](/v3-33/docs/re-authentication-logs#details-screen)** screen that displays a report of the selected re-authentication event.

## Details screen

In this section, you’ll find all the information about the **Details** screen, which displays a report of the selected re-authentication event.

| **Item**          | **Description**                                                                                  |
|-------------------|--------------------------------------------------------------------------------------------------|
| **Username**      | Field that displays the senhasegura username associated with the re-authentication.            |
| **Status**        | Field that displays the status of the re-authentication. Possible options are **Success** and **Failure**. |
| **Trigger**       | Field that displays the trigger that initiated the re-authentication. Possible options are *View attempts at prohibited time, Blocked commands, Session attempts at prohibited time, High-risk sessions, Rating drop*, and *Token TOTP*. <br> **Note:** TOTP token-related events display records of login attempts using a TOTP token. |
| **Date**          | Field that displays the date and time when the re-authentication was triggered.                   |
| **Authentication method** | Field that displays the method used in the re-authentication.                                   |
| **Browser**       | Field that displays the browser used at the time of re-authentication.                          |
| **IP**            | Field that displays the IP address of the device where the re-authentication was performed.     |
| **Location**      | Field that displays the geographic location of the device.                                      |

## Details section

In this section of the **Details** screen, you'll find all the information about the trigger that initiated the re-authentication.

### Rating drop

When the trigger that initiates re-authentication is related to a rating drop, the following information about the events that caused the rating drop is displayed:


 
 * **Suspicious events**: the event that caused the rating drop.                           
 * **Date**: the date and time of the event.                                                                  
 * **Rating variation** : the score lost by the user due to the event.                                                 
 * **Action**: in this column, you can access:
     * **Details:** represented by the key icon, it opens the **Access details** screen.
     * **Session video:** represented by the play icon, it opens the **Video of session** screen.

### High-Risk Sessions

When the trigger that initiates re-authentication is related to a high-risk session, the following information about the sessions is displayed:


- **Credential**: the credential used during the session.
- **Device**: the device used during the session.
- **Protocol**: the protocol used during the session.
- **Proxy**: the type of proxy session.
- **Session ID**: the unique identification code of the session.
- **Start**: the start time of the session.
- **End**: the end time of the session.
- **Duration**: the duration of the session.
- **Action**:  in this column, you can access:
  - **Video of session**: represented by the play icon, opens the **Video of session** screen.
  - **Session logs**: represented by the magnifying glass icon, opens the Session logs screen.
  - **Configure auditors**: represented by the key icon, opens the **Session auditors settings** screen.
  - **Session texts**: represented by the paper icon, opens the **Session text log** screen.

### Blocked commands

When the trigger that initiates re-authentication is related to blocked commands, the following information about the commands is displayed:


Here is the information formatted as a list:

- **Command**: the command executed during the session.
- **Criticality**: the criticality level of the session.
- **Action during session**: the action performed during the session.
- **Session type**: the type of session.
- **Credential**: the credential used during the session.
- **Device**: the device used during the session.
- **Session ID**: the unique identification code of the session.
- **Start**: the start time of the session.
- **End**: the end time of the session.
- **Duration**: the duration of the session.
- **Action**: in this column, you can access
  - **Video of session**: represented by the play icon, it opens the **Video of session** screen.
  - **Edit command**: represented by the pencil and paper icon, it opens the **Command by credential** screen.
  - **Session logs**: represented by the magnifying glass icon, it opens the **Session logs** screen.
  - **Configure auditors**: represented by the key icon, it opens the **Session auditors settings** screen.
  - **Session texts**: represented by the paper icon, it opens the **Session text log** screen.

### Session attempts at prohibited times

When the trigger that initiates re-authentication is related to access attempts during prohibited hours, the following information about the access attempts is displayed:


- **Credential**: the credential used during the access attempt.
- **Device**: the device used during the access attempt.
- **Day of the week**: the day of the week when the access attempt occurred.
- **Attempt date**: the date of the access attempt.
- **Time**: the time of the access attempt.

### View atempts at prohibited times

When the trigger that initiates re-authentication is related to password viewing attempts during prohibited hours, the following information about the attempts is displayed:

Here is the information formatted as a list with the specified configuration:

- **Credential**: the credential used during the viewing attempt.
- **Device**: the device used during the viewing attempt.
- **Day of the week**: the day of the week when the viewing attempt occurred.
- **Attempt date**: the date of the viewing attempt.
- **Time**: the time of the viewing attempt.

