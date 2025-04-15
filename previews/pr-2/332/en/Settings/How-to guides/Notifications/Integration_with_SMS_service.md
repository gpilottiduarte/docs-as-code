# Integration with SMS service

senhasegura has integration with Zenvia SMS service.

:::(warning) (Caution)
To use this feature, you need a Zenvia account.
:::

To configure this feature, go to **Settings ➔ System parameters ➔ System** parameters, and click on the tab Notifications, as in the picture below.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-PSIVAS02.png){height="" width=""}

1. In the field **SMS Broker**, select the service Zenvia
2. Then enter the name that will appear in the message in the **Sender** field
3. In the field **User**, enter the **Zenvia** username of the responsible for notifications
4. Enter the **password** of this user in the field Password, and finally, click **Save**

With this setting, you will need to adjust an SMS notification:

1. Create a new notification by logging in: Settings ➔ Notifications ➔ Settings
2. Enter a name for the notification and select the option SMS, as in the figure below.

    ![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-2TY21BQD.png){height="" width=""}

1. Click on the Save button and wait for the window to reload. If it closes, go back to the notification registration report and select the action button Edit the newly created notification.

1. Select the type of Notification that will be sent by SMS. 
The types of notifications that can be sent by SMS are:
    * Access behavior
    * Workstation alerts
    * Expiration of certificates
    * About remote sessions
    * Password operations
    * Password backup
    * Audit of commands
    * Equipment connectivity
    * About protected information
    * Operations with credentials
    * Monitoring

1. Then, in the tab **Contacts**, add the users who should receive these notifications by SMS

    :::(warning) (Caution)
    Users selected to receive this type of notification must have their mobile phone numbers registered on senhasegura.
    :::

1. Click on **Save** to finish.