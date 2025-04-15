# User posture

In this document, you’ll find detailed information about the **Sessions with occurrences detected** screen, which displays dashboards with information about a specific user based on their interactions with senhasegura resources.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Behavior.**  
2. In the side menu, select **User posture.**  

***
   

## **User profile dashboard**

Dashboard that displays the user’s general information.

| Item | Description |
| :---- | :---- |
| **Status** | Located in the upper-left corner of the dashboard, it displays the user's status. The possible options are **Online** and **Offline**. |
| **Photo** | Located in the center of the dashboard, it shows a photo of the user or a person icon if the user hasn't added a photo. |
| **Name** | Below the photo or person icon, it displays the user's name. |
| **IP address** | Represented by the computer icon, it shows the user's IP address. |
| **Last access** | Represented by the clock icon, it displays the date and time of the user's last access. Formats: `MM/DD/YYYY` and `HH:MM`. |

## **Behavior dashboard**

Dashboard that displays general information about the user’s accesses.

| Item | Description |
| :---- | :---- |
| **Period with greater user** | Represented by the sun icon, it shows the time of day with the highest usage by the user. The possible options are *Morning, Afternoon*, and *Evening*. |
| **Total logins** | Represented by the padlock icon, it displays the total number of logins made by the user. Clicking on this item opens the **[Access control](/v3-33/docs/pam-session-system-parameters-access-control)** screen. |
| **Recording time** | Represented by the camera icon, it shows the total recording time of sessions in hours and minutes. This value is the sum of recordings from all sessions performed by the user. |
| **Average length** | Represented by the clock icon, it displays the average duration of each session. |
| **Locations** | Represented by the location pin icon, it shows the number of locations from which the accesses originated. Clicking on this item opens the **Access by location** screen. |

## **Sessions dashboard**

Dashboard that displays the number of remote sessions conducted by the user. Clicking on this dashboard opens the **[Remote sessions](/v3-33/docs/pam-session-remote-session)** screen.

## **Sites dashboard**

Dashboard that shows a pie chart with the number of sessions conducted at each site, i.e., each geographic location of the device. Clicking on this dashboard opens the **Remote sessions** screen.

## **Rating evolution dashboard**

Dashboard that displays an XY chart with the history of a user's assessment based on their behavior.

| Item | Description |
| :---- | :---- |
| **X axis** | Axis displaying access days. Format `MM/DD`.  |
| **Y axis** | Axis displaying the user's score on a specific day. <br>**Note**: the higher the score, the more reliable the user is.  |
| **Rating events** | Located in the upper-left corner of the dashboard and represented by the eye icon, it opens the **Rating events** report. <br>**Note**: only records related to the logged-in user are visible. |
| **Zoom in/Zoom out** | Located in the upper-right corner of the dashboard and represented by the addition and subtraction icons, they zoom in and zoom out on the data displayed in the chart.  |
| **Selection zoom** | Represented by the magnifying glass icon, it allows selecting a portion of the chart and zooming in on the selected area.  |
| **Panning** | Represented by the hand icon, it allows moving the chart.  |
| **Reset zoom** | Represented by the home icon, it returns the chart to its initial position. |
| **Menu** | Represented by the three vertical bars icon, it opens a dropdown menu where you can choose a format to download the chart. The available options are *Download SVG, Download PNG*, and *Download CSV*.  |

## **Device type dashboard**

Dashboard that displays a pie chart with the number of sessions the user conducted on each type of device. Clicking on the chart opens the **Remote sessions** screen, showing only the sessions for the selected device types.

## **Device criticality dashboard**



Dashboard that displays a pie chart with the number of sessions grouped by device criticality. Clicking on the chart opens the **Remote sessions** screen, showing only the sessions for the selected device criticalities.

## **Credential criticality dashboard**



Dashboard that displays a pie chart with the number of sessions grouped by device criticality. Clicking on the chart opens the **Remote sessions** screen, showing only the sessions for the selected device criticalities.

## **High risk sessions dashboard**

Dashboard that displays a report with the high-risk sessions conducted by the user.    
The external link icon opens the **[Sessions with risk](/v3-33/docs/sessions-with-risk)** screen.

| Item | Description |
| :---- | :---- |
| **Device** | Column that displays the IP address of the device where the session was conducted. Clicking on the desired IP address opens the **Device access profile** screen. |
| **Credential** | Column that displays the credential used in the high-risk session. Clicking on the desired credential name opens the **Credential access profile** screen. |
| **Date** | Column that displays the date and time when the session took place. Formats: `MM/DD/YYYY` and `HH:MM`. |
| **Duration** | Column that displays the duration of the high-risk session. Format: `HH:MM:SS`. |
| **Score** | Column that displays the score of the high-risk session. Clicking on the displayed number opens a pop-up screen with information about the reasons for the score. |
| **Magnifying glass icon** | Opens the **Access details** screen. |
| **Video of session** | Represented by the play icon, it opens the **[Video of session](/v3-33/docs/pam-session-view-and-download-the-session-video-2)** screen. |

## **Suspicious events dashboard**

Dashboard that displays a report with sessions where suspicious events were detected.

| Item | Description |
| :---- | :---- |
| **Detail** | Column that displays the type of suspicious event.  |
| **Date** | Column that displays the date and time when the event was recorded. Formats: `MM/DD/YYYY` and `HH:MM`. |
| **Magnifying glass icon** | Opens the **Access details** screen. |
| **Video of session** | Represented by the play icon, it opens the **Video of session** screen.  |
