# List notifications

In this document, you will find all the information about the **Notifications** report.

## Path to access

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Notifications > Screen notifications > List notifications**.

## Top bar

| Item | Description |
| --- | --- |
| Show filters | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| Update | Represented by the counterclockwise arrow icon, it refreshes the page. |
| View actions | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| New notification | Represented by the sum icon, opens the Create Notification window. |
| Print report | Represented by the printer icon, it opens a new page for printing the report. |
| Export CSV | Represented by the paper sheet icon, it downloads the report. |
| Schedule report | Represented by the clock icon, it opens the https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports form. |

## Search fields

| Item | Description |
| --- | --- |
| Display date | Opens a calendar for you to select the filter start date. |
| until | Opens a calendar for you to select the end date of the filter. |
| Title | Text field. Fill in the title of the notification you want to filter. |
| Text | Text field. Fill in the body text of the notification you want to filter. |
| Author | Text field. Fill in the username that generated the notification. |

## Report fields

- **ID.**
- **Títle**
- **Text.**
- **Author.**
- **Created date: displays the date the notification was created.**
- **Exhibition date.**
- **Display time: indicates the display time, in seconds, that the notification appears on the user's screen.**
- In the **Action** column, you can view information about when the notification was sent. To do this, click on **View Notifications by User**, represented by the magnifying glass icon.

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.**
:::

## Notifications by User window

Clicking on the **View Notifications by User** option takes you to the **Notifications by User** window, which contains the following fields.

### Search field

| Item | Description |
| --- | --- |
| Title | Text field. Fill in the title of the notification you want to filter. |

### Report fields

- **ID**: notification code in senhasegura.
- **Title**.
- **Author**: name of the user who registered the notification.
- **User**: name of the user who received the notification.
- **Date Created**: date the notification was created.
- **Date Displayed**: date the notification was displayed.
- **Date Closed**: date on which the notification was closed.

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.
:::

## Create Notification window

Clicking on **New Notification** takes you to the **Create Notification** window containing the following fields.

| Item | Description |
| --- | --- |
| Title | Title of the notification that will be displayed to the user. |
| Text | Text of the notification that will be displayed to the user. |
| Display time (ms) | The time that the notification will remain on the user's screen is defined in milliseconds. Note: Fill in 0 so that the notification is not closed automatically. |
| Users to notify | Checkbox. Select the users and/or access groups who will receive the notification. |