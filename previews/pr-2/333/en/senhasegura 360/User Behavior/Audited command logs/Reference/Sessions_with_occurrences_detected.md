# Sessions with occurrences detected

In this document, you’ll find detailed information about the **Sessions with occurrences detected** screen, which displays a report that combines all records of sessions where any audited command was detected.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Behavior.**  
2. In the side menu, select **Audited command logs > Sessions with occurrences detected.**
***

## **Top bar**

| Item | Description |
| ----- | ----- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## **Search fields**

| Item | Description |
| :---- | :---- |
| **Session ID** | Text field that filters commands by their unique identification code.  |
| **Local user** | Text field that filters commands by the senhasegura username. |
| **Remote device** | Text field that filters commands by the command’s target-device. |
| **Session start** | Field that filters commands by the session date. Use this field to enter the start date of the period. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. <br>If the **Time** field is enabled, use it to enter the start time of the interval. |
| **until** | Field that filters commands by the session date. Use this field to enter the final date of the period. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. <br> If the **Time** field is enabled, use it to enter the end time of the interval.  |

## **Report fields**

* **Session ID.**  
* **Local user.**  
* **Remote device.**  
* **Credential:** credential used in the session.  
* **Start:** date and time the session started. Formats: `MM/DD/YYYY` and `HH:MM AM/PM.`  
* **End:** date and time the session ended. Formats: `MM/DD/YYYY` and `HH:MM AM/PM.`  
* **Time:** session duration. Format `HH:M:SS.`  
* **Events:** number of occurrences in the session.  
* **Score:** session score.  
* **Action:** in this column, you access:  
  * **View event log:** represented by the magnifying glass icon, it opens the **Event log** screen.
  * **Three vertical dots icon:** opens a drop-down menu with the options **Video of session** and **Session logs.**  
  
    

:::(info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.

:::  