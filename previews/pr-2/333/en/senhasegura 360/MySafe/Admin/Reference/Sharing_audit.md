# Sharing audit

In this document, you’ll find detailed information about **MySafe**’s **Sharing audit** screen, which enables the administrator to view a report of all items shared temporarily with users outside of **MySafe**.

## Requirements
- **MySafe** administrator permission.

## Paths to access
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Admin > Sharing audit**.

---

## Top bar

| **Item**| **Description**|
|-----|-----|
| **Show filters**  | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions**  | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Print report**| Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV**| Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen.|

## Search fields

| **Item**| **Description**|
|------|-----|
| **ID**| Text field that filters temporarily shared items by their unique identification code.|
| **Name**| Text field that filters temporarily shared items by their name.|
| **Type**| Drop-down menu that filters temporarily shared items by their type. Available options are *Password*, *File*, *Note*, and *API secrets*. |
| **Start date**| Field that filters the externally shared items by their start date. Use this field to enter the initial date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **until**| Field that filters the externally shared items by their start date. Use this field to enter the final date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **Expiration**| Field that filters the externally shared items by their expiration date. Use this field to enter the initial date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **until**| Field that filters the externally shared items by their expiration date. Use this field to enter the final date. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. |
| **Username**| Text field that filters the externally shared items by the **MySafe** user who shared them.|
| **Recipient**| Field that filters the externally shared items by the recipient’s email.|
| **Remaining accesses** | Text field that filters items by the number of remaining accesses to the sent access link.|
| **Status**| Drop-down menu that filters items by their sharing status. Available options are *Waiting approval, Approved, Rejected, Finished, and Cancelled*. Clear the field to enable the **All** option. |

## Report fields

- **ID**.
- **Name**.
- **Type**.
- **Date**.
- **Username**.
- **Recipient**.
- **Expiration**.
- **Max. accesses**: column indicating how many times the person can access the link within the expiration period. The possible options are **Unlimited** and a number indicating the number of times the person can access the link before it expires.
- **Status**.
- **Action**: in this column, you access:
  - **Revoke**: represented by the trash can icon, it opens the **Confirmation** screen to revoke the sharing with the options **Yes** and **No**. 
**Note**: this option is available only for items under the **Approved** status. In case of revocation, the expiration date of the link will be updated to the time when it was revoked.
  - **Three vertical dots icon**: drop-down menu with the **Forward URL access** and **History**. This option is available only for items under the **Approved** status.
  - **History**: represented by the clock icon, it opens the **External sharing history** screen.

:::(info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

---