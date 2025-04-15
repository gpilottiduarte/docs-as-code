# Session logs

This document provides information about the **Session logs** report screen, which shows the details from the session.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Audit > Sessions > Remote Sessions**.  
3. In the list presented in the report, click the **Actions button** and select **Session logs** in the chosen session record.

---
## Session info section

| **Item**  | **Description** |
| ---- | ---- |
| **ID** | Session identification code. |
| **Start** | Session start date and time. |
| **End** | Session end date and time. |
| **Type** | Type of session accessed. |
| **Host** | IP address or hostname of the accessed device. |
| **Username** | Name of the user of the accessed credential. |
| **Error message** | Message displayed if an access error occurs. |

## RemoteApp
This section will only be available when the accessed session uses a RemoteApp macro.
| **Item**  | **Description** |
| ---- | ---- |
| **Username** | Registered username in the RemoteApp macro. |
| **Macro** | Name of the macro that was used. |

## User info section

| **Item**  | **Description** |
| ---- | ---- |
| **User** | Name and username of the user who performed the access. |
| **User IP** | IP address of the user's machine. |

## Vulnerability analysis section

| **Item**  | **Description** |
| ---- | ---- |
|**Commands with greater risk**| Name of the audited command registered in Segura. |
|**Score**| Risk score assigned to the command. |
|**Criticality**| Level of criticality of using the command. |
|**Action**| The type of action that occurs when executing the command. |
|**Typed command**| The command entered by the user. |
|**Executed in**| The minute when the command was executed during the session. |

## Session events section

| **Item**  | **Description** |
| ---- | ---- |
| **User** | Username of the user who started the session. |
| **Date/Time** | Date and time of actions performed during the session. |
| **Event** | The event was held in the session. |
| **Note** | Observation message for each event. |

## Session logs section

| **Item**  | **Description** |
| :---- | :---- |
| **Search term** | Text box to search for a specific term used during the session. |
| **Export info** | Located at the bottom of the screen, it exports session data in `.csv` format. |

:::(info) (**Info**)  
Inside the **Session logs**, there is an image with all events and actions carried out within the session.  
:::