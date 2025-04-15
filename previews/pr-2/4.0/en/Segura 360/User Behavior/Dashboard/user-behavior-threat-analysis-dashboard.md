# Threat analysis

This document provides information about the **Threat analysis** dashboard, which is divided into two sections that display charts for identifying and mitigating threats in the PAM environment.

* **Threats in access**: analyzes the use of audited commands during sessions.  
* **Threats in custodies**: analyzes the risks associated with the protection of privileged credentials.

## Prerequisites

* Administrator or system auditor permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **User Behavior**.  
2. In the side menu, select **Dashboard \> Threat analysis**.  
---

## Date filter

::: (info) (Info)  
By default, the filter shows data of the last 15 days.  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Date** | Dropdown menu and date picker |  Selects the query period. The options are: <br>- **Today**. <br>- **Last 24 hours**. **This week**: from Monday to Sunday of the current week. <br>- **Last week**: from Monday to Sunday of the previous week. <br>- **This month**: from the first to the last day of the current month. <br>- **Last month**: from the first to the last day of the previous month. <br>- **This year**: from the first to the last day of the current year. <br>- **Last year**: from the first to the last day of the previous year. <br>- **Custom**: date selectors to choose the period. |
| **Filter** | Button | Filters information by the selected period. |

## Threats in accesses

This section displays charts and reports of accesses that present some type of threat and enables system administrators to monitor audited commands during sessions, facilitating the identification of suspicious and anomalous behaviors.

### XY charts

| Item | Description |
| :---- | :---- |
| **Score** | The X-axis displays the days, and the Y-axis shows the risk score assigned to monitored sessions based on user behavior and the use of audited or atypical commands.  |
| **Totals** | The X-axis displays the days, and the Y-axis shows the total number of threats detected in audited sessions and their levels of criticality (Low, Medium, High), providing an overview of the number of suspicious events.  |

### Reports

#### Greater risk

Displays the following data of the sessions with the highest risk:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who conducted the session. |
| **Device** | Displays the device from which the session was initiated. |
| **Credential** | Displays the credential used to conduct the session. |
| **Date** | Displays the date and time the session was conducted. |
| **Risk** | Displays the risk level reached by the session which can range from 0 (zero) to 100 (hundred).  |
| **Access details** | Opens the **Access details** screen with additional information about the selected session. |

#### Last with risk

Displays the following data of the most recent sessions with detected risks:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who conducted the session. |
| **Device** | Displays the device from which the session was initiated. |
| **Credential** | Displays the credential used to conduct the session. |
| **Date** | Displays the date and time the session was conducted. |
| **Risk** | Displays the risk level reached by the session which can range from 0 (zero) to 100 (hundred).  |
| **Access details** | Opens the **Access details** screen with additional information about the selected session. |

## Threats in custodies

This section displays charts and reports of threats related to using and protecting credentials in custody, that is, storing and controlling privileged credentials in the PAM environment.

### XY charts

| Item | Description |
| :---- | :---- |
| **Score** | The X-axis displays the days, and the Y-axis shows the overall risk score of monitored custodies per day, based on user behavior and access to these credentials.  |
| **Total** | The X-axis displays the days, and the Y-axis shows the total number of threats detected related to custodies and their levels of criticality (Low, Medium, High), providing an overview of the volume of risk events associated with protected credentials.  |

### Reports

#### Greater risk  
Displays data of the custodies with the highest risk level, including the following details about the most vulnerable or exposed credentials:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who viewed the credential. |
| **Device** | Displays the device associated with the viewed credential. |
| **Credential** | Displays the credential used. |
| **Date** | Displays the date and time the credential was viewed. |
| **Risk** | Displays the risk level reached by the view which can range from 0 (zero) to 100 (hundred).  |
| **Access details** | Opens the **View details** screen with additional information about the selected credential view. |

#### Last with risk 
Displays the following data on the most recent threats related to custodies, highlighting the events that require immediate attention: 

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who viewed the credential. |
| **Device** | Displays the device associated with the viewed credential. |
| **Credential** | Displays the credential used. |
| **Date** | Displays the date and time the credential was viewed. |
| **Risk** | Displays the risk level reached by the view which can range from 0 (zero) to 100 (hundred).  |
| **Access details** | Opens the **View details** screen with additional information about the selected credential view. |
