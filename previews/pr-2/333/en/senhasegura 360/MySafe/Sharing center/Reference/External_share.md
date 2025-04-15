# External share

In this document, you’ll find detailed information about **MySafe**’s **External share** and **External sharing history** screens.

## Requirements

* **External share** permission granted by **MySafe**’s administrator.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Sharing center > External share**.

***

## Top bar

| Item| Description|
|------|-------|
| **Show filters**| Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions**| Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report.|
| **Export CSV**         | Represented by the paper sheet icon, it downloads the report.|
| **Schedule report**    | Represented by the clock icon, it opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen.|

## Search fields

| Item| Description|
|------|------|
| **ID**| Text field that filters the externally shared items by their unique identification code.|
| **E-mail**| Text field that filters the externally shared items by the recipient’s email.|
| **Start date**| Field that filters the externally shared items by their start date. Use this field to enter the initial date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **until**| Field that filters the externally shared items by their start date. Use this field to enter the final date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **End date**| Field that filters the externally shared items by their expiration date. Use this field to enter the initial date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **until**| Field that filters the externally shared items by their expiration date. Use this field to enter the final date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **Status**| Drop-down menu that filters the externally shared items by their status. Available options are *Waiting approval, Approved, Rejected, Finished, Cancelled*, and *Error*. Clear the field to enable the **All** option. |

## Report fields

- **ID**.
- **Name**.
- **Type**.
- **Date**: date and time when the item was externally shared.
- **Recipient**.
- **Expiration**: date and time of the expiration link.
- **Max. accesses**: column indicating how many times the person can access the link within the expiration period. The possible options are **Unlimited** and a **number** indicating the number of times the person can access the link before it expires.
- **Status**.
- **Action**: in this column, you access:
  - **Revoke**: represented by the trash can icon, it opens the **Confirmation** screen to revoke the sharing with the options **Yes** and **No**. 
**Note**: this option is available only for items under the **Approved** status. In case of revocation, the expiration date of the link will be updated to the time when it was revoked.
  - **Three vertical dots icon**: drop-down menu with the options **Forward url access** and **History**. 
**Note**: this option is available only for items under the **Approved** status.
  - **History**: represented by the clock icon, it opens the **External sharing history** screen.

::: (info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

## External sharing history screen

This section contains detailed information about  the **External sharing history** screen, which displays a report with all events related to the selected externally shared item.

| Item| Description|
|---------|-------|
| **Event**  | Column that displays the action performed over the shared item. Available options are *Item shared, Item accessed, Link resent, Sharing expired*, and *Sharing revoked*. |
| **ID**     | Column that displays the event’s unique identification code.                                                          |
| **Date**   | Column that displays the date and time of the event. Formats: `MM/DD/YYYY` and `HH:MM AM/PM`.                        |

::: (info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

---