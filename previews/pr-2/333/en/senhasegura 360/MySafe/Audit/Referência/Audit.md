# Audit

In this document, you'll find detailed the information about the **Audit** screen of **MySafe**, which displays a report with all events related to the stored items.

## Requirements

* **MySafe** administrator permission.

## Access path

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by nine squares, and select **MySafe**.
2. In the side menu, select **Audit**.

***

## Top bar

**Item** | **Description**
|---|---|
**Show filters** | Represented by the magnifying glass icon, shows or hides the search fields on the screen.
**Refresh** | Represented by the counterclockwise arrow icon, refreshes the page.
**Show actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report.
**Print report** | Represented by the printer icon, opens a new page to print the report.
**Export CSV** | Represented by the paper icon, downloads the report.
**Schedule report** | Represented by the clock icon, opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen.

## Search fields

**Item** | **Description**
|---|---|
**Name** | Field that filters items by their name.
**Type** | Field that filters items by their type. Available types are *Password, File, Note, API secrets,* and *Private groups*. Clear the field to enable the **All** option.
**Event** | Field that filters items by the event performed. Available types are *New, Change, View, Disabling, Activation, Download,* and *Sharing.* Clear the field to enable the **All** option.
**User** | Field that filters items by the user who performed the event.
**User IP** | Field that filters items by the user's IP address who performed the event.
**Date** | Field that filters items by the period in which the event was performed. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar.
**to** | Field that filters items by the period in which the event was performed. Format `MM/DD/YYYY`. Use this field to enter the end date of the period. The downward arrow opens a calendar.
**Previous logs** | Button that opens the **Previous logs** screen. It's only available if you have previous records to access.

## Report fields

* **Name**.
* **Type**.
* **Event**.
* **User**.
* **User IP**.
* **Date**.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screens, click the forward button at the end of the report.
:::