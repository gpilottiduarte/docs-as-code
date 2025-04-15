# Notification texts

In this document, you'll find all the information about the **Notification texts** report, which displays information about senhasegura notifications.

## Path to access

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Notifications > Texts**.

## Top bar

| Item | Description |
| --- | --- |
| Show filters | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| Update | Represented by the counterclockwise arrow icon, it refreshes the page. |
| View actions | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| Print report | Represented by the printer icon, it opens a new page for printing the report. |
| Export CSV | Represented by the paper sheet icon, it downloads the report. |
| Schedule report | Represented by the clock icon, it opens the Scheduling report form. |

## Report fields

- **ID**: notification code.
- **Type**: type of notification.
- **Subject**: string with the subject of the notification.
- In the **Actio**n column, you can access the settings for the text that is sent by e-mail. To do this, click on **Edit text**, represented by the pencil and paper icon.
    - In case you haven't configured any text, the option is named **Configure Text.**

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.
:::

## Notification text registration window

By clicking on **Edit text**, you are taken to the Notification text registration window, which contains the fields below.

| Item | Descrição |
| --- | --- |
| Text type | Drop-down menu informs you of the notification's text type. As the text is registered with senhasegura, this drop-down menu is disabled. |
| Active | Radio button. Select whether you want the new text to be used. By default, this is set to **Yes**. If the option **No** is checked, the default text is used. |
| View TAGs | Label that informs you of the TAGs available for use in the email text. For more information, access the notification reference documentation. |
| Subject | Text fields for creating the string that will be used as the subject of the notification e-mail. Accepts senhasegura TAGs. |
| Message text | Text editor for creating the text that will be sent in the notification e-mail. Accepts senhasegura TAGs. |