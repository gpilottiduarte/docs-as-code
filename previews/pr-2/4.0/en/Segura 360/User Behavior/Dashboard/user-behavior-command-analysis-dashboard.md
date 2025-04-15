# Command analysis

This document provides information about the **Command analysis** dashboard, which analyzes the audited commands executed during sessions on Segura.

## Prerequisites

* Administrator or system auditor permission.

## Paths to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **User Behavior**.  
2. In the side menu, select **Dashboard \> Command analysis**.

---
## Date filter

::: (info) (Info)  
By default, the filter shows data of the last 15 days.  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Date** | Dropdown menu and date picker | Selects the query period. The options are: <br>- **Today**. <br>- **Last 24 hours**. **This week**: from Monday to Sunday of the current week. <br>- **Last week**: from Monday to Sunday of the previous week. <br>- **This month**: from the first to the last day of the current month. <br>- **Last month**: from the first to the last day of the previous month. <br>- **This year**: from the first to the last day of the current year. <br>- **Last year**: from the first to the last day of the previous year. <br>- **Custom**: date selectors to choose the period. |
| **Filter** | Button | Filters information by the selected period. |

## XY charts

| Item | Description |
| :---- | :---- |
| **Commands with greater severity** | The X-axis displays the days, and the Y-axis shows the number of commands with the highest severity executed. |
| **Access with commands detected** | The X-axis displays the days, and the Y-axis shows the number of accesses with detected commands.  |

## Reports

### Last access with commands detected

Displays the following data of the 5 last accesses with audited commands detected:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who conducted the session. |
| **Device** | Displays the device from which the session was initiated. |
| **Credential** | Displays the credential used to conduct the session. |
| **Date** | Displays the date and time the session was conducted. |
| **Risk** | Displays the risk level reached by the session which can range from 0 (zero) to 100 (hundred).  |
| **Access details** | Opens the **Access details** screen with additional information about the selected session. |

### Access with greater severity

Displays the following data of the 5 last accesses with greater severity:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who conducted the session. |
| **Device** | Displays the device from which the session was initiated. |
| **Credential** | Displays the credential used to conduct the session. |
| **Date** | Displays the date and time the session was conducted. |
| **Risk** | Displays the risk level reached by the session which can range from 0 (zero) to 100 (hundred).  |
| **Access details** | Opens the **Access details** screen with additional information about the selected session. |

### Greatest aggressors

Displays the following data of users who executed the most audited commands during sessions:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user associated with the incidents. |
| **Incidents** | Displays the total number of incidents committed by the user. |
| **Sessions** | Displays the number of sessions conducted by the user. |
| **With incidents** | Displays the percentage of sessions with incidents per user. |

### Greatest aggressed

Displays the following data of devices targeted by the most sessions with audited commands:

| Item | Description |
| :---- | :---- |
| **Device** | Displays the IP address of the device targeted in the session. |
| **Incidents** | Displays the total number of incidents committed by the user. |
| **Sessions** | Displays the number of sessions conducted by the user. |
| **With incidents** | Displays the percentage of sessions with incidents per user. |