# Behavior analysis - Dashboard

This document provides information about the **Behavior analysis** dashboard, which analyzes user behaviors when interacting with Segura features.

## Prerequisites

* Administrator or system auditor permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **User Behavior**.  
2. In the side menu, select **Dashboard \> Behavior analysis**.

---
## Date filter

::: (info) (Info)  
By default, the filter shows data of the last 15 days.  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Date** | Dropdown menu and date picker | Selects the query period. The options are:  **Today**. **Last 24 hours**. **This week**: from Monday to Sunday of the current week. **Last week**: from Monday to Sunday of the previous week. **This month**: from the first to the last day of the current month. **Last month**: from the first to the last day of the previous month. **This year**: from the first to the last day of the current year. **Last year**: from the first to the last day of the previous year. **Custom**: date selectors to choose the period. |
| **Filter** | Button | Filters information by the selected period. |

## XY Charts

| Item | Description |
| :---- | :---- |
| **Sessions** | The X-axis displays the days, and the Y-axis shows the number of sessions with some degree of risk (lines) and the total number of sessions conducted in Segura (bars). |
| **Views** | The X-axis displays the days, and the Y-axis shows the number of credential views with some degree of risk (lines) and the total number of views made in Segura (bars). |

## Reports

### Top 5 sessions with risk

Displays the following data of the 5 sessions that presented the highest risk on the dates selected in the filter:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who conducted the session. |
| **Device** | Displays the device from which the session was initiated. |
| **Credential** | Displays the credential used to conduct the session.  |
| **Date** | Displays the date and time the session was conducted. |
| **Risk** | Displays the session's risk level, which ranges from 0 (zero) to 100 (hundred). |
| **Access details** | Opens the **Access details** screen with additional information about the selected session.  |

### Top 5 views with risk

Displays the following data of the 5 credential views that presented the highest risk on the dates selected in the filter:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who viewed the credential. |
| **Device** | Displays the device associated with the viewed credential. |
| **Credential** | Displays the credential used.  |
| **Date** | Displays the date and time the credential was viewed. |
| **Risk** | Displays the risk level reached by the view. It can range from 0 (zero) to 100 (hundred). |
| **View details** | Opens the **View details** screen with additional information about the selected credential view.    |

### Last 5 sessions with risk

Displays the following data of the 5 last sessions that presented some risk on the dates selected in the filter:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who conducted the session. |
| **Device** | Displays the device from which the session was initiated. |
| **Credential** | Displays the credential used to conduct the session.  |
| **Date** | Displays the date and time the session was conducted. |
| **Risk** | Displays the session's risk level, which can range from 0 (zero) to 100 (hundred). |
| **Access details** | Opens the **Access details** screen with additional information about the selected session.  |

### Last 5 views with risk 

Displays the following data of the 5 last credential views that presented some risk on the dates selected in the filter:

| Item | Description |
| :---- | :---- |
| **User** | Displays the name of the user who viewed the credential. |
| **Device** | Displays the device associated with the viewed credential. |
| **Credential** | Displays the credential used.  |
| **Date** | Displays the date and time the credential was viewed. |
| **Risk** | Displays the risk level reached by the view. It can range from 0 (zero) to 100 (hundred). |
| **View details** | Opens the **View details** screen with additional information about the selected credential view.    |

## Access details screen

The **Access details** screen displays information about the selected session. 

| Item | Description |
| :---- | :---- |
| **User** | Displays the user details such as name, email, and IP address. Clicking on the user's name opens the **User profile** screen. |
| **Credential** | Displays the credential used, device IP address, protocol, and port. Clicking on the credential opens the **Credential access profile** screen.  |
| **Access** | Displays the details of the user's session, such as the origin device, session duration, start and end date and time, destination device, protocol, and port. |
| **Last detected commands** | Displays a list of audited commands executed by the user during the session containing *Command, Action during session, Typed command, Event date, Executed in, Criticality, Risk*, and *Video of session.* |

## View details screen

The **View details** screen displays information about the selected credential view.

| Item | Description |
| :---- | :---- |
| **User** | Displays the user details such as name, email, and IP address. Clicking on the user's name opens the **User profile** screen. |
| **Credential** | Displays the credential used, device IP address, protocol, and port. Clicking on the credential opens the **Credential access profile** screen.  |
| **View** | Displays the user IP, date and time of the query, and IP of the accessed device. destination device, protocol, and port. |
| **Last view events** | Displays the report on the latest events conducted during the view containing *User, Device, Credential, Date*, and *Risk.* |

## User profile screen

The **User profile** screen displays the following information about the selected user:

| Item | Description |
| :---- | :---- |
| **User** | Displays the *Name, Email, IP address, Last session,* and *No access for* user information.   |
| **Cards** | Displays the information *Period with greater use, Total views, Views by day,* *Total access, Average length,* and *Recording time.*  |
| **Accesses** | Displays a graph with accesses made in the last 45 days, informing views with risk. |
| **Views** | Displays a graph with credentials views made in the last 45 days, informing views with risk.  |
| **Last access** | Displays a list of the user's last accesses containing the *Device, Credential, Date, Score,* and *Access details* fields. |
| **Last views** | Displays a list of the most recent credential views. |

## Credential access profile screen

The **Credential access profile** screen displays the following information about the selected credential used to conduct a session: 

| Item | Description |
| :---- | :---- |
| **Credential** | Displays the *Name, Device, Expiration*, and *Last view* of the credential.    |
| **Cards** | Displays the information *Period with greater use, Total views,* and *Users with custody*.   |
| **Access** | Displays the user’s IP address, date and time of access, and the IP address of the accessed device.  |
| **Access with greater risk** | Displays a list of accessed credentials with the highest risk. |
| **Last access events** | Displays a list of accesses using this credential, containing the *User, Date, Score,* and *Access details* fields.   |

## 

## Credential view profile screen

The **Credential view profile** screen displays information about the selected credential: 

| Item | Description |
| :---- | :---- |
| **Credential** | Displays the *Name, Device, Expiration*, and *Last view* of the credential.    |
| **Cards** | Displays the information *Period with greater use, Total views, Accesses by day,* and *Average length*.   |
| **Views** | Displays a graph with views that presented some risk in the last 45 days.  |
| **Users with custody** | Displays information about the users with the credential custody containing *ID, User, Last view, Begin of custody,* and *Duration.* |
| **Views with greater risk** | Displays the views made with this credential that presented the highest risk. |
| **Last views** | Displays a list with the most recent views made with this credential. |

## Device access profile screen

The **Device access profile** screen displays the following information about the accessed selected device:

| Item | Description |
| :---- | :---- |
| **Device** | Displays the IP address of the accessed device.    |
| **Cards** | Displays the information *Period with greater use, Total access, Access by day,* and *Average length*.   |
| **Access** | Displays a graph with accesses made in the last 45 days, informing risky accesses.   |
| **Access with greater risk** | Displays a list with accesses to this device that presented the highest risk. |
| **Last access**  | Displays a list of users and credentials who last accessed this device, containing the *User, Credential, Date, Score,* and *Access details* fields.   |

## Device view profile screen

The **Device view profile** screen displays the following information about the device associated with the viewed credential selected:

| Item | Description |
| :---- | :---- |
| **Device** | Displays information about the device storing the viewed credential.   |
| **Cards** | Displays the information *Period with greater use, Total views,* and *Views by day*.   |
| **Views** | Displays a graph showing the credential views for this device, indicating the daily high-risk views.  |
| **Views with greater risk** | Displays a list of credential views for this device that presented the highest risk. |
| **Last views** | Displays a list of the most recent credential views for this device.  |
