# Occurrences by credential

In this document, you’ll find detailed information about the **Occurrences by credential** screen, which displays a report ranking sessions based on audited commands executed and the credentials used.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Behavior.**  
2. In the side menu, select **Audited command logs > Occurrences by credential.**

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
| **Command** | Drop-down menu that filters commands by their name. The downward arrow opens a list of active commands. Clear the field to enable the **All** option.   |
| **Action of session** | Drop-down menu that filters commands by the action executed according to the audited command record. The available options are *Allow, Lock, Interrupt*, and *Force*. Clear the field to enable the **All** option. |
| **Remote device** | Text field that filters commands by the command’s target-device. |
| **Credential** | Text field that filters commands by the credential used. |
| **Session start** | Field that filters commands by the session date. Use this field to enter the start date of the period. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. <br> If the **Time** field is enabled, use it to enter the start time of the interval. |
| **until** | Field that filters commands by the session date. Use this field to enter the final date of the period. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date.  <br> If the **Time** field is enabled, use it to enter the end time of the interval.  |

## **Report fields**

* **Command.**  
* **Action during session.**  
* **Remote device.**  
* **Credential.**  
* **Sessions:** number of sessions in which this command was executed.  
* **Action:** in this column, you access:  
  * **View credenitla history**: represented by the magnifying glass icon, it opens the **[Sessions with occurrences detected](/v3-33/docs/sessions-with-occurrences-detected)** screen.  
    

:::(info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.

:::