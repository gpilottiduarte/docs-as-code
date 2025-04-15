# Session text

In this document, you’ll find all the information about the Session text report, which displays the input and output texts of a session, as long as it’s configured to index session texts.

To find out how to configure a session so that your texts are recorded, access the [How to configure session texts](/v3-32/docs/pam-session-how-to-configure-session-texts) document.

[Link session tab](#session-data-tab)

### Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access control** > **Session text**.

---
## Top bar
**Item**|**Description**
|---|---|
**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
**View actions**|Represented by the three vertical dots icon, it shows all the possible actions for the report.
**Print report**|Represented by the printer icon, it opens a new page for printing the report.
**Export CSV**|Represented by the paper sheet icon, it downloads the report.
**Schedule report**|Represented by the clock icon, it opens the Schedule report form.

:::(info) (**Info**)
The **question mark** icon present on the pages, when clicked, redirects you to the keyword search or to the documentation page.
:::

## Search Fields
| **Item**| **Description**|
| ------------- | ---------------- |
| **String**        | Input or output text entered in the session.             |
| **Session ID**    | Identifier of the session held.                          |
| **Session start** | Date the session started.                                |
| **until**         | End date for searching the logs.                         |
| **Local User**    | User who accessed the session.                           |
| **User IP**       | IP number of the user's home machine.                    |
| **Protocol**      | Protocol used for access.                                |
| **Host**          | Host address that refers to the session device.          |
| **Remote User**   | Credential used to access the session.                   |


## Report fields

* **Code**.
* **Session ID**: identifier of the session held.
* **Start**: session start date and time.
* **Term**: session end date and time.
* **Time**: session duration.
* **Local user**.
* **User IP**.
* **Protocol**.
* **Host**.
* **Remote User**.
* **Date/Time**: date and time of session access.
* **Input/Output**: indicates whether the text presented was an input or output.
* **String**.
* **Action**:
    * **Logs**: represented by the **four horizontal bars** icon, it opens the screen, **Session Log**, with information about the session.
    * **Three vertical dots**:
        * **View stream**: represented by the **play** icon, it opens the screen with the session video.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click  the next buttons at the end of the report.
:::

### Session Log screen
#### Session Data Tab

* **Code**: session identification code.
* **Start**: session start date and time.
* **End**: session end date and time.
* **Type**: type of session accessed.
* **Host**: IP address of the session host.
* **Username**: name of the user registered in the credential.
* **Error message**: message displayed if an access error occurs.

#### User Data Tab
* **User**: name and username of the user who performed the access.
* **User IP**: IP address of the user's machine.

#### Session Events tab

* **User**: username of the user registered in the credential.
* **Date/Time**: date and time of actions performed during the session.
* **Event**: event held in the session.
* **Observation**: observation message for each event.

#### Session Logs Tab

* **Search by term**: text box to search for a specific term used during the session.
* **To search for**: button to perform the search.
    * Image with all events and actions carried out within the session.
* **Export data**: located at the bottom of the screen, it exports session data in `.csv` format.
