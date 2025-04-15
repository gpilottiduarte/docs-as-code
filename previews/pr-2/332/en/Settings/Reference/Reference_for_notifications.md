# Reference for notifications

To access the system's notifications, access **Grid Menu > Settings > Notifications > Settings**. The fields below refer to the notification search report. On the screen, you will find the following information:

## Top bar

| Item                  | Description                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Show filters**     | Represented by the magnifying glass button, it hides or shows the filter options.                                |
| **Update**           | Represented by the counterclockwise arrow, it updates the information on the screen.                             |
| **View Actions**     | Represented by the three vertical dots, it opens a drop-down menu with the options for the notifications report. |
| **New notification** | Represented by the plus icon. It opens theNew notificationwindow.                                                |
| **Print report**     | Representedby the printer icon. It opens a new page for printing the report.                                     |
| **Export CSV**       | Representedby the sheet of paper icon, downloads the report.                                                     |
| **Schedule report**  | Representedby the clock icon. It opens the window for scheduling the report.                                     |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Field         | Description                                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**     | Name of the notification registered on senhasegura.                                                                                     |
| **Added on** | Opens a calendar that allows you to choose a date. This date will be the starting day of the time interval for the notification filter. |
| **until**    | Opens a calendar that allows you to choose a date. This date will be the end day of the time interval for the notification filter.      |
| **Added by** | Filters according to the username of the person who registered the notification.                                                        |
| **Enabled**  | Drop-down menu. Filter by the notification status in senhasegura. Can be **Yes** or **No**.                                                        |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed in the fields, and **Clear**, which clears all the parameters.

Below, we have the list field, which contains all the notifications, filtered or not, displayed with the following fields:

* **ID**: registration code of the notification in senhasegura.
* **Name**.
* **Changed in**: date of the last change to that notification. If no changes have been made, the field will be empty.
* **Changed by**: user who made the last change to that notification. If no changes have been made, the field will be empty.
* **Added on**.
* **Added by.**
* **Enabled.**
* In the **Action** column, you have the option to **Change**, represented by the pencil and paper icon, and the drop-down menu, represented by the three vertical dots icon, which shows the option to enable/disable the notification.

## New notification window

In the **New notification** window, you have the following fields:

| Field                                              | Description                                                                                                                                                                                                                  |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name of the notification**                 | Notification name to be registered with senhasegura.                                                                                                                                                                         |
| **Checkboxes next to the notification name** | Four checkboxes where you can choose one or more methods to deliver notifications.<br />The options are: *E-Mail*, *Screen*, *SMS*, and *Send notifications only to contacts who have access to credentials or devices*. |

### Notification tab

| Field             | Description                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Notification** | Clicking on the icon represented by the plus sign will open the **Notifications** modal.                                             |
| **ID**           | Code of the notification registered with senhasegura.                                                                          |
| **Name**         | Name of the notification type registered with senhasegura.                                                                     |
| **Category**     | Notification type category.                                                                                                    |
| **Added on**     | Date and time when the notification type was added to that notification. It will be displayed in the `DD/MM/AAAA HH:MM:SS` format. |
| **Added by**     | Name of the user who added that type of notification.                                                                          |

### Contacts tab

| Field           | Description                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Contacts**   | Clicking on the icon represented by the plus sign will open theContactsmodal.                                                             |
| **ID**         | The contact's registration code in senhasegura.                                                                                           |
| **Name**       | User’s name.                                                                                                                             |
| **Username**   | Username of the user.                                                                                                                     |
| **E-Mail**     | E-mail address of the user.                                                                                                               |
| **Department** | The department to which the user is linked in senhasegura.                                                                                |
| **Added on**   | Date and time when the user in question was added as a contact in the notification. It will be displayed in the `DD/MM/AAAA HH:MM:SS` format. |
| **Added by**   | Name of the user who added the contact to the notification.                                                                               |

:::(info) (Info)
In both tabs, on the left side of each item you have a trash can icon. This icon deletes that contact or notification type from the record you create or edit.
:::

In the **New notification** window, in the bottom left corner, you can view the notification details. To do this, hover your mouse over the icon represented by the eye. A tooltip with the following information will appear:

* The **Created by** label displays the name and username of the user who created the notification, as well as the time and date the notification was created by this user. It will be displayed as `Created by <USER(USERNAME)> on DD/MM/AAAA HH:MM:SS`.
* The **Last change by** label displays the name and username of the user who last changed the notification, as well as the time and date the notification was created by this user. It will be displayed as `Last change by <USER(USERNAME)> in DD/MM/AAAA HH:MM:SS`.

### Notifications modal

In the **Notifications** modal, you have the top bar, which helps you filter the notifications registered with senhasegura.

| Field         | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| **ID**       | Filters by the code of the type of notification registered in senhasegura. |
| **Name**     | Filters by the name of the notification type registered in senhasegura.    |
| **Category** | Drop-down menu with categories for notification types.                     |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

Below is the list section, containing all types of notifications, filtered or not, displayed with the following fields:

* **Checkbox**: allows you to select the type of notification. You can select all or none. To select all the records, click the icon represented by a square with a check symbol; to undo the selection, click the icon represented by an empty square.
* **ID**.
* **Name**.
* **Category**.
* At the bottom of the modal, you have the **Add** button, which adds the selection to the notification, and the **Cancel** button, which closes the modal and cancels the operation.

### Contacts modal

In the **Contacts** modal, you have the top bar, which helps filter the contacts registered with senhasegura.

| Field       | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| **ID**     | Filters by the code of the contact registered in senhasegura.         |
| **Name**   | Filters by the name of the contact registered with senhasegura.       |
| **E-mail** | Filters by the contact's e-mail address as registered in senhasegura. |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

Below, we have the list field, which contains all contacts, filtered or not, which are displayed with the following fields:

* **Checkbox**: allows you to select the contacts. You can select all or none. To select all the records, click the icon represented by a square with a check symbol; to undo the selection, click the icon represented by an empty square.
* **ID**.
* **Name**.
* **E-mail.**
* At the bottom of the modal, you have the **Add** button, which is used to add the selection to the notification, and the **Cancel** button, which closes the modal and cancels the operation.