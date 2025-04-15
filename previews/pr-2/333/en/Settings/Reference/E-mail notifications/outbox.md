# Outbox

In this document, you'll find all the information about the **Outbox** report.

## Path to access

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> Outbox**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | Notification code in senhasegura. |
| **Subject** | Subject of the notification e-mail. |
| **To (Name/E-mail)** | Name and/or e-mail address of the user who received the notification. |
| **From (Name/E-mail)** | Name and/or e-mail address of the user who sent the notification. |
| **Created by** | Name of the user who created the notification. |
| **Period** | Opens a calendar for you to indicate the start date for sending the filter. |
| **until** | Opens a calendar for you to indicate the end date for sending the filter. |
| **Account** | From the drop-down menu, select the e-mail account to send the notification to. Note: only e-mail accounts previously registered with senhasegura will appear. |
| **Status** | Drop-down menu. Status of the notification in the senhasegura queue. It can be: *Waiting*, *Sent*, *Canceled*, *Resent*, *Sending*, *Error sending*, or *Paused*. |
| **Opening** | Checkbox. Check to filter by e-mails that have been confirmed as read. |
| **Returned** | Checkbox. Check to filter by the emails that were returned. |

## Report fields

* **ID.**  
* **Subject.**  
* **To.**  
* **From.**  
* **Account.**  
* **Type:**  
* **Date/Time:**  
* **Status.**  
* **MTA message:**  
* **Created by.**  
* **Opening.**  
* **Resending.**  
* **Priority:**  
* In the **Action** column, you have two options:  
  * **Read e-mail**: opens the **E-mail** window with information about the e-mail that was sent.  
  * **Resend e-mail**: opens the **Resend e-mail** window, where you can configure the resending of the notification e-mail.

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click on the next button at the end of the report.
:::

## E-mail window

Clicking the **Read e-mail** option takes you to the **E-mail** window, which contains the information below.

| Item | Description |
| :---- | :---- |
| **Subject** | Subject of the notification e-mail sent. |
| **Sender** | E-mail address of the sender of the notification. |
| **Recipients** | E-mail address of the recipients of the notification. |

### Information tab

| Item | Description |
| :---- | :---- |
| **ID** | Notification code in senhasegura. |
| **Account** | Name of the account that sent the notification. |
| **Data submission** | Date on which the notification was sent. It's displayed in the format `DD/MM/YYYY HH:MM:SS` |
| **Reply-to** | Header that indicates to which e-mail address replies should be sent if they differ from the sender's address. |
| **Status** | The status of the notification e-mail can be *Waiting, Sent, Canceled, Resent, Sending, Error sending,* or *Paused*. |
| **Return-path** | Header that indicates to which e-mail address error messages should be sent in the event of failure to deliver the e-mail. |
| **Status** |  |
| **Batch** | Indicates whether the e-mail is part of a batch mailing. |
| **Type e-mail** |  |

:::(warning) (Attention)

- The **HTML Body** tab displays the body of the email in HTML format.  
- The **Body Text** tab displays the body of the message in plain text format.  
  :::

## Resend e-mail window

Clicking on **Resend e-mail** takes you to the **Resend e-mail** window, which contains the following fields.

| Item | Description |
| :---- | :---- |
| **Sender name** | Name of the sender of the notification e-mail. |
| **Sender e-mail** | E-mail address of the sender of the notification. |
| **Recipient e-mail** | Name of the recipient of the notification e-mail. |
| **Receiver e-mail** | E-mail address of the recipient of the notification. |

