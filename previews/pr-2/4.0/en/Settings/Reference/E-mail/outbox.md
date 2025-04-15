# Outbox

This document provides information about the **Sent Email** report, which presents the messages received by a particular SMTP account.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Email \> Outbox.**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields

:::(info) (Info)  
To view all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the identification code of the notification in Segura. |
| **Subject** | Text field | Filters by subject of the notification email. |
| **To (Name/Email)** | Text field | Filters by the name or email address of the notification recipient. |
| **From (Name/Email)** | Text field | Filters by the name or email address of the notification sender. |
| **Created by** | Text field | Filters by the name of the user who created the notification. |
| **Period** | Date picker | Filters by the selected period. |
| **Account** | Dropdown menu | Filters by the notification sending email account. **Note**: only the email accounts previously registered in Segura will appear. |
| **Status** | Dropdown menu | Filters by the email account status in Segura. The options are *Waiting, Sent, Cancelled, Resent, Sending, Error sending or Paused*. |
| **Opening** | Checkbox | Select to filter by the emails that had read confirmation. |
| **Returned** | Checkbox | Select to filter by the emails that were returned. |

## Report fields
* **ID.**  
* **Subject.**  
* **To.**  
* **From.**  
* **Account.**  
* **Type.**  
* **Date/Time.**  
* **Status.**  
* **MTA Message:**  
* **Created by.**  
* **Opening.**  
* **Resending:**  
* **Priority:**  
* **Actions:**  
  * **Read mail**: opens the **E-mail** window with the information of the email that was sent.  
  * **Resend mail**: opens the **Resend mail** window, where you can configure the resending of the notification email.

:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Read mail
| Item | Type | Description |
| :---- | :---- | :---- |
| **Subject** | Text field | Subject of the notification email sent. |
| **Sender** | Text field | Notification sender's email address. |
| **Recipients** | Text field | Notification recipients' email address. |

## Information section
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Notification code in Segura. |
| **Account** | Text field | Name of the account that sent the notification. |
| **Date Submission** | Text field | Date when the notification was sent. It is displayed in the format `DD/MM/YYYY HH:MM:SS` |
| **Reply-to** | Text field | Header that indicates to which email address replies should be sent, if different from the sender's address. |
| **Status** | Text field | Notification email status. The options are *Waiting, Sent, Cancelled, Resent, Sending running, Error sending* , or *Paused*. |
| **Return-path** | Text field | Header that indicates to which email address error messages should be sent if the email fails to be delivered. |
| **Status** | Text field | status of the e-mail. |
| **Batch** | Text field | Indicates whether the email is part of a batch send. |

:::(warning) (Caution)
- The **HTML Body** tab displays the body of the email in HTML format.  
- The **Body Text** tab displays the body of the message in flat text format.
:::

## Resend mail
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Sender name** | Text field | Yes | Name of the sender of the notification email. |
| **Sender email** | Text field | Yes | Notification sender's email address. |
| **Recipient name** | Text field | Yes | Name of the recipient of the notification email. |
| **Receiver e-mail** | Text field | Yes | Notification recipient's email address. |

