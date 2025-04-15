# My Notifications

This document provides information about the **My notifications \- Parameters** screen, which presents information about the on-screen notification parameters fot all the notifications and by user.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Notifications \> Screen notifications \> My notifications.**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New notification** | Button | Directs to the **Create Notification** window to create a new notification. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search Fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **Date** | Date picker | Filters the registers by the period in which they were displayed. |
| **Title** | Text field | Filters by notification title. |
| **Text** | Text field | Filters by the text in the message body. |

## Report Fields
* **ID.**  
* **Title.**  
* **Text.**  
* **Author:** name of the user authoring the notification.  
* **Date of Display:** date when the notification was displayed to the user.  
* **Display Time:** indicates the display time, in seconds, that the notification appeared on the user's screen.  
*  **Actions**:  
  * **View Notifications by User**: opens the **Notifications by User** window.  
  * **Resend**: resends the notification.
:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.
:::

## Create Notification window
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Title** | Text Field | Yes | Notification title. |
| **Text** | Text Field | Yes | Notification body message. |
| **Display time (ms)** | Text Field | Yes | Time when the notification will be displayed on the user's screen. |
| **Users to notify** | Dropdown menu | No | Selects which users will receive the notification. More than one user can be selected. |

## Notifications by User window

### Search Fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **Title** | Text Field | Filters by notification title. |

### Report Fields
* **ID:** notification code in Segura.  
* **Title.**  
* **Author:** name of the user who registered the notification.  
* **User:** name of the user who received the notification.  
* **Date of Creation:** date of creation of the notification.  
* **Date of Display:** date of display of the notification.  
* **Date Closed:** date when the notification was closed.
:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.
:::

