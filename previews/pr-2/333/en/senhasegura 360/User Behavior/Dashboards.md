# Dashboards

In this document, you’ll find detailed information regarding **PAM Core**’s **User Behavior** dashboard - **Session Management**, which provides a behavior analysis of **senhasegura**’s active users.

## Requirements

- Admin or system auditor permission.

## Path to access

1. On **senhasegura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Dashboard**.
2. In the side menu, select **PAM Core > Behavior**.

***

## Behavior analysis

In the upper-right corner, you will find the field with the period to which the displayed data refers. After selecting the period in the available calendars, click on the funnel icon to filter the data. The displayed data can be filtered by the following periods:

- **Today**.
- **Last 24 hours**.
- **This week**.
- **Last week**.
- **This month**.
- **Last month**.
- **This year**.
- **Last year**.
- **Select dates**: customization of the searched period.

:::(info)(Info)
By default, the filter searches for the last 15 days.
:::

## Charts

| Item | Description |
| --- | --- |
| **Sessions** | Daily progression chart that displays the number of sessions with some degree of risk compared to the total number of sessions carried out in senhasegura. |
| **Views** | Daily progression chart that displays the number of password views with some degree of risk compared to the total number of password views made in senhasegura. |

## Reports

### Top 5 sessions with risk

List of the 5 sessions that presented the highest risk within the dates selected in the filter.

**Report columns:**

- **User**: personal name of the user who performed the session.
- **Device**: device where the session was initiated.
- **Credential**: credential used by the user to perform the session.
- **Date**: date and time the session was performed. Formats: `MM/DD/YYYY` and `HH:MM:SS`.
- **Risk**: degree of risk reached by the session. The number can range from 0 (zero) to 100 (one hundred).
- **Magnifying glass icon**: displays the Access details screen, which presents the following session data:
  - **User**: user details such as their personal name, email, and IP address.
  - **Credential**: the user's credential, the device's IP address, protocol used, and port.
  - **Access**: details of the session accessed by the user, such as the source device, session duration, target device, protocol, and port.
  - **Last detected commands**: list of audited commands executed by the user during the session.

### Top 5 views with risk

List of the 5 password views with the highest risk within the dates selected in the filter.

**Report columns:**

- **User**.
- **Device**.
- **Credential**.
- **Date**.
- **Risk**.
- **Magnifying glass icon**: displays the Access details screen, which presents the following session data:
  - **User**: user details such as their personal name, email, and IP address.
  - **Credential**: the user's credential, the device's IP address, protocol, and port.
  - **View**: user IP address, query type, date and time of the query, and IP address of the device accessed.
  - **Last view events**: report that displays the latest events performed in the query and presents the following information:
    - **User**.
    - **Device**.
    - **Credential**.
    - **Date**: date and time of the query. Formats: `MM/DD/YYYY` and `HH:MM:SS`.
    - **Risk**.

### Last 5 sessions with risk

List of the last 5 sessions with any detected risk.

**Report columns:**

- **User**.
- **Device**.
- **Credential**.
- **Date**.
- **Risk**.
- **Magnifying glass icon**: displays the **Access details** screen, which presents the following session data:
  - **User**: user details such as their personal name, email, and IP address.
  - **Credential**: the user's credential, the device's IP address, protocol, and port.
  - **Access**: details of the session accessed by the user, such as the source device, session duration, target device, protocol, and port.
  - **Last detected commands**: list of audited commands executed by the user during the session.

### Last 5 views with risk

List of the last 5 password views with any detected risk.

**Report columns:**

- **User**.
- **Device**.
- **Credential**.
- **Date**.
- **Risk**.
- **Magnifying glass icon**: displays the Access details screen, which presents the following session data:
  - **User**: user details such as their personal name, email, and IP address.
  - **Credential**: the user's credential, the device's IP address, protocol, and port.
  - **View**: user IP address, query type, date and time of the query, and IP address of the device accessed.
  - **Last view events**: report that displays the latest events performed in the query and presents the following information:
    - **User**.
    - **Device**.
    - **Credential**.
    - **Date**: date and time of the query. Formats: `MM/DD/YYYY` and `HH:MM:SS`.
    - **Risk**.
