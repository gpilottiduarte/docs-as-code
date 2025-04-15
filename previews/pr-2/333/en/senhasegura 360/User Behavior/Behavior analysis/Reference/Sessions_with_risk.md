# Sessions with risk

In this document, you’ll find detailed information about the **Sessions with risk** screen, which displays a report with details on all sessions that presented a risk.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Behavior.**  
2. In the side menu, select **Behavior analysis > Sessions with risk.**
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
| **Session ID** | Text field that filters sessions by their unique identification code. |
| **User** | Text field that filters sessions by the user's personal name who conducted the session. |
| **Origin IP** | Text field that filters sessions by the IP address of the user who accessed them. |
| **Credential** | Text field that filters sessions by the credential with unusual accesses. |
| **Device** | Text field that filters sessions by the device associated with the credential used. |
| **Protocol** | Text field that filters sessions by the protocol used. |
| **Proxy** | Drop-down menu that filters sessions by the type of proxy used. Clear the field to enable the **All** option. |
| **Risk** | Text field that filters sessions by the risk score. |
| **Access interval** | Field that filters sessions by the period in which they occurred. Use this field to enter the start date of the period in `MM/DD/YYYY` format. The downward arrow opens a calendar for date selection. <br> If the **Time** field is enabled, use it to enter the start time of the interval. |
| **until** | Field that filters sessions by the period in which they occurred. Use this field to enter the final date of the period in `MM/DD/YYYY` format. The downward arrow opens a calendar for date selection. <br> If the **Time** field is enabled, use it to enter the end time of the interval.  |

## **Report fields**

* **Session ID.**   
    
* **User**.    
* **Origin IP.**    
* **Credential.**    
* **Device.**  
* **Protocol.**    
* **Proxy.**  
* **Risk.**  
* **Start:** date and time the session began. Formats: `DD/MM/YYYY` and `HH:MM AM/PM.`  
* **End:** date and time the session ended. Formats: `DD/MM/YYYY` and `HH:MM AM/PM.`    
* **Action:** in this column, you can access:    
  * **View details:** represented by the magnifying glass icon, it opens the **Session logs** screen.    
  * **Video of session:** represented by the play icon, opens the **Video of session** screen.  
    

:::(info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::