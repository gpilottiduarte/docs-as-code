# Sessions for audit

In this document, you'll find all the information about the report **Sessions for audit**, which shows the list of sessions configured to be audited during use.

:::(info) (**Info**)
You’ll only be able to view sessions for which you are registered as an auditor.
:::

---
### Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access control** > **Sessions for audit**.
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


## Search fields

| **Item**| **Description**|
| ------------- | -------------- |
| **ID**| Identification number for the session.|
| **Session ID**| Identifier of the session.|
| **Credential**| The credential that was accessed.|
| **Device**| The IP address or hostname of the accessed device.|
| **User**| The name of the user who accessed the session.|
| **Origin IP**| The IP address of the source machine that performed the access. |
| **Protocol**| The protocol used for access.|
| **Session start** | Date and time the session started.|
| **Until**| End date for searching records.|
| **Audited?**| Status that shows whether or not the session has been audited. The options are Yes and No. |
| **Filter**| Button to perform the search according to the chosen filters. |
| **Clear**| Button to clear the filters.|

## Report fields

* **ID**.
* **User**.
* **Origin IP**.
* **Credential**.
* **Device**.
* **Protocol**.
* **Session ID**: identifier of the session held.
* **Audited?**.
* **Start**: session start date and time.
* **End**: session end date and time.
* **Time**: session duration.
* **Action**:
    * **Session logs**: represented by the four horizontal bars icon, it opens the screen with information about the session.
    * **Three vertical dots icon**: a drop-down menu with the possible actions to be performed.
        * **Bubble speech (Comment session)**: opens the screen **Comment session** with a space for the auditor to enter comments about the session.
        * **Play (Video of the session)**: opens the **Video of session** screen with session information with the possibility of viewing or downloading the video.
        :::(info) (**Info**)
        Note that when generating a video for download, a large amount of resources on the server will be consumed.
        :::
        * **Check (Audit)**: click **Yes** in the confirmation box to continue with the action. When confirming, the field **Audited?** will be changed to **Yes**, confirming that the session has been audited.
        * **Hammer (Session audit)**: opens the screen Audit log with information about the session auditors and auditors comments.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click the next buttons at the end of the report.
:::

### Session logs screen

#### Session info tab
* **ID**: session identification code.
* **Start**: session start date and time.
* **End**: session end date and time.
* **Type**: type of session accessed.
* **Host**: IP number of the session host.
* **Username**: name of the user registered in the credential.
* **Error message**: message displayed if an access error occurs.

#### User info tab
* **User**: name and username of the user who performed the access.
* **User IP**: IP address of the user's machine.

#### Session events tab
* **User**: username of the user who started the session.
* **Date/Time**: date and time of actions performed during the session.
* **Event**: the event held in the session.
* **Note**: observation message for each event.

#### Session logs tab
* **Search term**: text box to search for a specific term used during the session.
* **Search**: button to perform the search.
    * Image with all events and actions carried out within the session.
* **Export info**: located at the bottom of the screen, it exports session data in `.csv` format.