# How to manage notifications

senhasegura allows you to send reports by email as well as schedule them. This will enable you to schedule the sending of remote session reports to specific users, for example. These users will receive the reports in the format, days, and times configured in the schedule, so they are always updated on the new remote sessions held during the period.

## Register a new notification

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Notifications > Settings**.
3. The list of notifications registered in senhasegura will show the registered notifications.
4. To create a new notification, in the top bar, click **View actions**, represented by the three vertical dots icon, and select **New notification** from the drop-down menu.
5. In the **New notification** window, fill in the following fields:
   1. **Notification name**: a name for the new notification.
   2. Next to the **Notification name** field, select the methods you want to send the notification. The options are *Email*, *Screen*, *SMS*, and *Send notifications only to contacts who have access to the credentials or devices*. Select one or more of these options.
   3. In the **Notification** tab, click on the plus icon next to the word **Notifications** to open the **Notifications** modal. Here, select the notifications you want to send. Note that the notification you wish to send will now appear in the notifications field.
   4. In the **Contact** tab, click the plus icon next to the word **Contacts** to open the **Contacts** modal. Here, select the contacts who will receive the notifications.
6. Click **Save**.

:::(warning) (Attention)
To use the option to send SMS notifications, you must have the Zenvia integration properly configured. Without this configuration, SMS notifications won't be sent. To find out how to set up integration with Zenvia, visit the document [Integration with SMS service](/v3-32/docs/integration-with-sms-service).
:::

### Notification report for password change failure

You can program an email to be sent to reports in case the password exchange fails. This option is disabled by default. To enable it, follow the instructions below:

1. As shown above, register a new notification by choosing the **Password daily summary** option.
2. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
3. In the side menu, select **System parameters > System parameters**.
4. On the **System Settings** screen, select **Notifications** in the left sidebar.
5. In the **Daily passwords changes failures notifications** field, check the **Change default notification delivery time** checkbox.
6. In the **When to notify?** drop-down menu, select a time.
7. Click **Save**.

:::(info) (Info)
You can insert times other than those predefined in the checkboxes. To do this, select the checkbox and enter a valid time value. The system only accepts valid times; inserting an invalid value will display an error message on the screen.
:::

## Edit a notification

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Notifications > Settings**.
3. The list of notifications registered in senhasegura will show the registered notifications.
4. In the **Action** column, click **Edit**, represented by the pencil and paper icon.
5. The **New notification** window will open in edit mode.
6. Change the necessary information and click **Save**.

## Disable a notification

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Notifications > Settings**.
3. The list of notifications registered in senhasegura will show the registered notifications.
4. Identify the notification you want to disable and, in the **Action** column, click on the icon represented by the three vertical dots and select the **Disable** setting option.
5. In the confirmation modal, click **Yes**.

## Reactivate a notification

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Notifications > Settings**.
3. The list of notifications registered in senhasegura will show the registered notifications.
4. In the search menu in the top bar, click the **Enabled** drop-down menu and select the **No** option.
5. Click **Filter**.
6. The list will filter out the registered notifications that are inactive. They will be shown in red.
7. Identify the notification you want to reactivate and, in the **Action** column, click on the icon represented by the three vertical dots and select **Enable** setting.
8. In the confirmation modal, click **Yes**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).