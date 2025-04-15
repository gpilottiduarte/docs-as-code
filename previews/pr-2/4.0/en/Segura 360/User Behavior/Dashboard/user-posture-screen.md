# User posture - Dashboard

This document provides information about the **User posture** dashboard, which displays the user profile, access behavior, completed sessions, accessed websites, and continuous risk assessment based on user interactions.

## Prerequisites

* Administrator or system auditor permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **User Behavior**.  
2. In the side menu, select **Dashboard \> User posture**.

---

## User filter

| Item | Type | Description |
| :---- | :---- | :---- |
| **User** | Dropdown menu | Selects the desired user. |
| **Filter** | Button | Filters information by the selected user.  |

## User profile

Card with the following information about the user:

| Item | Description |
| :---- | :---- |
| **Status** | Indicates if the user is **Enabled/Disabled** in Segura. |
| **Avatar** | Displays the user avatar. |
| **Name** | Displays the user identification name. |
| **IP address** | Displays the last IP address used to access Segura. |
| **Last access** | Displays the date and time of the user's last access. |

## User Behavior

Card with the following information about the user's access history:

| Item | Description |
| :---- | :---- |
| **Period with greater use** | Displays the time of day with the highest usage by the user. The options are *Morning, Afternoon, and Night.* |
| **Total logins** | Displays the total number of logins made by the user. Opens the **Access control** screen. |
| **Recording time** | Displays the total recording time of all sessions performed by the user. |
| **Average length** | Displays the average duration of each session performed by the user. |
| **Locations** | Displays the number of locations from which accesses were made. It opens the **Access by location** screen and is available for accesses made through **Domum Remote Access.** |

## Sessions

Card showing the number of remote sessions performed by the user.  
Opens the **Remote sessions** screen.

## Sites

Pie chart showing the number of sessions performed according to the device's site.  
Opens the **Remote sessions** screen and displays a list of sessions filtered by the selected site.

## Rating evolution

XY graph showing the history of a user's assessment based on their behavior in the last 45 days.

The X-axis displays access days, and the Y-axis displays the user's daily score.  
**Note**: the higher the score, the more trustworthy the user is.

## Device type

Pie chart showing the number of sessions the user performed by device type.   
Opens the **Remote sessions** screen displaying sessions corresponding to the chosen device types.

## Device criticality

Pie chart showing the number of sessions grouped by device criticality.   
Criticality options are *High, Medium, Low,* and *Undefined***.**   
Opens the **Remote sessions** screen displaying sessions corresponding to the selected criticality.

## Credential criticality

Pie chart showing the number of sessions grouped by credential criticality. Criticality options are *High, Medium, Low,* and *Undefined.* Clicking on any part of the chart opens the **Remote sessions** screen displaying sessions corresponding to the selected criticality.

## High risk sessions

Report with the following information about the high-risk sessions performed by the user.  
The **external link icon** opens the **Sessions with risk** screen.

| Item | Description |
| :---- | :---- |
| **Device** | Displays the address of the device where the session was performed. Clicking on the desired IP address opens the **Device access profile** screen. |
| **Credential** | Displays the credential used in the high-risk session. Clicking on the desired credential name opens the **Credential access profile** screen. |
| **Date** | Displays the date and time when the session was performed. |
| **Duration** | Displays the duration of the high-risk session. |
| **Access details** | Opens the **Access details** screen |
| **Video of session** | Opens the **Video of session** screen. |

## Suspicious events

Report with the following information about the sessions with suspicious events:

| Item | Description |
| :---- | :---- |
| **Detail** | Displays the suspicious event type. |
| **Date** | Displays the date and time when the event was performed. |
| **Access details/View details** | Opens the **Access details** screen for session-type events or the **View details** screen for password-view-type events.  |
| **Video of session** | Opens the **Video of session** or the **Justification** screen if the **Enable approval for session videos\*** is activated. Available for session-type events. |