# Session text log

This document provides information about the **Session text** report screen, which displays the input and output texts of a session, as long as it’s configured to index session texts.

To display the texts, it’s necessary to configure the session so that the texts can be logged. More information in How to configure session texts.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu**, and select **PAM Core**.  
2. In the side menu, select **Audit > Sessions > Session text log**.

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **String** | Text field | Filters by the input or output text entered in the session. |
| **Session ID** | Text field | Filters by the identifier of the session held. |
| **Session start** | Date picker | Filters by the date the session started. |
| **Local User** | Text field | Filters by the user who accessed the session. |
| **User IP** | Text field | Filters by the IP number of the user's home machine. |
| **Protocol** | Text field | Filters by the protocol used for access. |
| **Host** | Text field | Filters by the host address that refers to the session device. |
| **Remote User** | Text field | Filters by the credential used to access the session. |

## Report fields

* **ID.**  
* **Session ID**.  
* **Start**: session start date and time.  
* **Term**: session end date and time.  
* **Time**: session duration.  
* **Local user.**  
* **User IP.**  
* **Protocol.**  
* **Host.**  
* **Remote User.**  
* **Date/Time**: date and time of session access.  
* **Input/Output**: indicates whether the text presented was an input or output   
* **String.**  
* **Actions:**  
  * **Logs**: open the [Session Log](/v4/docs/pam-session-session-logs) screen with detailed information about the session.  
  * **Watch stream**: open the screen with the session video.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::
