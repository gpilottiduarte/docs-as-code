# How to manage notifications

senhasegura enables the sending of reports via email, as well as scheduling them. This allows you to schedule the sending of, for example, the remote sessions report to certain users. These users will receive the reports when these notifications are sent, thus always staying updated about new remote sessions conducted during the period.

## Requirements

* To use the SMS notification sending option, it's necessary to have the Zenvia integration properly configured.  
  * SMS notifications won’t be sent without this configuration. To learn how to configure the Zenvia integration, access the SMS Service Integration document.  
* For email notifications, ensure that a default email is correctly configured.  
* You can find more information on how to integrate the Zenvia service with senhasegura by accessing the document [Integration with SMS service](/v3-33/docs/integration-with-sms-service).

## Register a new notification

1. In senhasegura, in the upper left corner, click **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> Settings**.  
3. The **Notification** report will display the notifications registered on senhasegura.  
4. To create a new notification, in the top bar, click on **View actions**, represented by the three vertical dots icon, and select **New notification** from the dropdown menu.  
5. In the **New notification** window, fill in the following fields:  
   1. **Notification name**: a name for the new notification.  
      1. Next to the Name field, select the means you wish to use to send the notification. The options are *Email, Screen*, and *SMS*. You must select one or more of these options.  
         2. Note that it's also possible to choose if the notification will be sent only to contacts who have access to credentials or devices.  
   2. In the **Notification** tab, click on the plus sign next to the word **Notifications** to open the **Notifications** modal. In this, select the notifications you wish to send. Notice that now the desired notification will appear within the notifications field.  
   3. In the **Contact** tab, click on the plus sign next to the word **Contacts** to open the **Contacts** modal. In this, select the contacts who will receive the notifications.  
6. Click **Save**.

:::(warning) (Attention!)  
To use the SMS notification sending option, the Zenvia integration must be properly configured. Without this configuration, SMS notifications will not be sent. To learn how to configure the Zenvia integration, access the [SMS Service Integration](/v3-33/docs/integration-with-sms-service) document.  
:::

## How to modify a notification

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> Settings**.  
3. The **Notification** report will display the notifications registered on senhasegura.  
4. In the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
5. The **New notification** window will open in edit mode.  
6. Change the necessary information and click **Save**.

## How to deactivate a notification

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> Settings**.  
3. The **Notification** report will display the notifications registered on senhasegura.  
4. Identify the notification you wish to deactivate and, in the **Action** column, click on the icon represented by three vertical dots and select **Disable configuration**.  
5. In the confirmation modal, click on **Yes**.

## How to reactivate a notification

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> Settings**.  
3. The **Notification** report will display the notifications registered on senhasegura.  
4. In the search menu, in the top bar, click on the **Enabled** dropdown menu and select the **No** option.  
5. Click **Filter**.  
6. The listing will filter the registered notifications that are deactivated. They will be shown with the text in red color.  
7. Identify the notification you wish to reactivate. In the **Action** column, click on the icon represented by three vertical dots and select **Enable setting**.  
8. In the confirmation modal, click on **Yes**.

## How to customize a notification

Some of the texts in the notification templates used by senhasegura can be modified according to your needs. To make this type of change, follow the steps below:

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> Texts**  
3. In the **Notification texts** report, identify the notification you wish to customize.  
4. In the **Action** column, click **Edit text**, represented by the pencil and paper icon.  
5. The **Notification text registration** window will open.

### Modify the text of a notification

In the **Notification text** window, you have the following options:

1. **Text type**: informs the name of the notification type being changed. For example: Request Created: Approver  
2. **Active**: select if you want the new text to be used. By default, it's marked as Yes.  
3. **Subject**: expression for the subject of the email that will be sent in the notification. For example: `Access request - [#DEVICE_HOSTNAME#] ([#DEVICE_IP#])`
4. **Message text**: rich text editor that allows editing of the default text of the notification Email.

This text should contain the e-mail tags.

```
Hello [#APPROVER#],
The user [#REQUESTER#] requested [#ACTION#] of the user [#CREDENTIAL_USERNAME#] on the device [#DEVICE_HOSTNAME#] ([#DEVICE_IP#]).
[#ACTION_LIST#]
Reason: [#REASON#]
Code Governance: [#GOVERNANCE_ID#]
Justification: [#JUSTIFICATION#]
Period: [#START_TIME#] to [#END_TIME#]
To approve access to the system or click one of the links below:
[#LINK_APPROVE#] [#LINK_REJECT#]
Or reply to this email with one of the words:
APPROVE
REJECT
```

5. Click on **Save**.

### TAGs

An essential portion for creating notification email texts are the TAGs. They serve as placeholders for certain information about the user who will receive the report/notification. The TAGs used in senhasegura are:

Here's the text with the requested modifications:  

*   `[#REQUEST_CODE#]`: Request code on format S000000.  
*   `[#REQUEST_STATUS#]`: Request status.  
*   `[#REQUESTER#]`: User who is requesting access to password.  
*   `[#REQUEST_DATE#]`: Date of request.  
*   `[#APPROVER#]`: Name of the approver who will receive the request email.  
*   `[#ANSWERED_BY#]`: Name of approver who responded to the request.  
*   `[#ANSWER_DATE#]`: Date when the request was answered by the approver.  
*   `[#ACTION#]`: Requested action.  
*   `[#ACTION_LIST#]`: Action requested on list format.  
*   `[#ACTION_LIST_SYSLOG#]`: Action requested on list format using syslog template.  
*   `[#URL_APPROVE#]`: URL to approve access to password.  
*   `[#LINK_APPROVE#]`: Link to approve access to password.  
*   `[#URL_REJECT#]`: URL to reject access to password.  
*   `[#LINK_REJECT#]`: Link to reject access to password.  
*   `[#DEVICE_HOSTNAME#]`: Device hostname.  
*   `[#DEVICE_IP#]`: Device IP.  
*   `[#CREDENTIAL_USERNAME#]`: Credential username.  
*   `[#CREDENTIAL_TYPE#]`: Credential type.  
*   `[#REASON#]`: Specified reason.  
*   `[#JUSTIFICATION#]`: Reason specified by requester.  
*   `[#GOVERNANCE_ID#]`: Governance ID.  
*   `[#START_DATETIME#]`: Start date and time of requested access period on 08/27/2024 15:14:05 format.  
*   `[#END_DATETIME#]`: End date and time of requested access period on 08/27/2024 15:14:05 format.  
*   `[#START_DATETIME_STR#]`: Start date and time of requested access period on Tuesday, August 27 03:14 PM format.  
*   `[#END_DATETIME_STR#]`: End date and time of requested access period on Tuesday, August 27 03:14 PM format.  
*   `[#START_DATE#]`: Start date of requested access period on 08/27/24 format.  
*   `[#END_DATE#]`: End date of requested access period on 08/27/24 format.  
*   `[#START_TIME#]`: Start time of requested access period on 3:14 pm format.  
*   `[#END_TIME#]`: End time of requested access period on 3:14 pm format.  
*   `[#CREDENTIAL#]`: Credential involved on request.  
*   `[#RESPONSIBLE#]`: Name of certificate responsible.  
*   `[#CERT_ENVIRONMENTS#]`: Certificate environments separated by comma.  
*   `[#CERT_SYSTEMS#]`: Certificate systems separated by comma.  
*   `[#CERT_TAGS#]`: Certificate tags separated by comma.  
*   `[#CERT_DESC#]`: Certificate description.  
*   `[#COMMONNAME#]`: Certificate common name.  
*   `[#ISSUED_BY#]`: Certificate issuer information.  
*   `[#VALIDITY_INIT#]`: Certificate validity start date.  
*   `[#VALIDITY_END#]`: Certification expiration date.