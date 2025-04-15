# Notifications

This document provides information about the **Global Notifications** report, which displays information about the Segura's global notifications and allows managing notifications.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Notifications \> Global notifications.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **New Notification** window. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Filters according to the name of the notification. |
| **Added on** | Date picker | Filters according to the indicated period. |
| **Added by** | Text field | Filters according to the user who added the notification. |
| **Enabled** | Dropdown menu | Filters the registers by their activation state. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report fields
* **ID:** notification code in Segura.  
* **Name**  
* **Changed in:** date of amendment of the notification. It's displayed in the format DD/MM/YYYY HH:MM.  
* **Changed by:** Displays the name of the user who last changed the notification.  
* **Added on:** date when the notification was added to Segura. It's displayed in the format DD/MM/YYYY HH:MM.  
* **Added by**  
* **Enabled**  
* Actions  
  * **Edit:** opens the **New Notification** window in edit mode.  
  * **Disable: disables** a setting if it is active.  
  * **Enable:** activates a setting if it is inactive.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## New Notification

### General section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Notification Name** | Text field | Yes | Text field for registration of the name of the notification. |
| **E-mail** | Toggle button | No | Enables sending email notifications. |
| **Screen** | Toggle button | No | Enables sending screen notifications. |
| **SMS** | Toggle button | No | Enables sending SMS notifications. |
| **Send notifications only to contacts who have access to credentials or devices** | Toggle button | No | Select to receive notifications only from the user's access group credentials/devices. |

### Notification section
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Performs the search in the notification records. |
| **Checkbox** | Checkbox | Selects all records displayed on the screen. |
| **Add** | Button | Opens a modal for selecting the notifications registered in Segura. |
| **ID** | Text field | Notification code in Segura. |
| **NAME** | Text field | Notification name in Segura. |
| **CATEGORY** | Text field | Name of the category to which the notification belongs. |
| **ADDED ON** | Text field | Date when the notification was added. |
| **ADDED BY** | Text field | Name of the user who added the notification. |

### Notifications Modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Notification code in Segura. |
| **Name** | Text field | Notification type name as registered in Segura. |
| **Category** | Text field | Notification category. |

### Contacts section
| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Contacts** modal for selecting users who will be the contact for the notification. |
| **Contacts table** | Table | Data for each contact, containing *checkbox, ID, Name, Username, E-mail, and Department* fields. |

### Contacts table
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | User's code in Segura |
| **NAME** | Text field | User's name in Segura |
| **USERNAME** | Text field | User's username in Segura |
| **E-MAIL** | Text field | User's email address. |
| **DEPARTMENT** | Text field | User's department in Segura |

### Review section
The review session allows the user to check the new user's registration information before performing the action. To save, click **Save**.