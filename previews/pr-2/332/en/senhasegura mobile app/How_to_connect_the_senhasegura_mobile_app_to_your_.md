# How to connect the senhasegura mobile app to your account

This tutorial provides a step-by-step guide on how to connect the **senhasegura** mobile app to your account.


:::(Info) (Info)
The **senhasegura** mobile app is supported on Android operating systems version 10 or newer.
:::

## Requirements

* senhasegura version 3.31 or newer.
* URL filled in the **Orbit Config Manager** screen.
* Android operating system version 10 or newer.
* Authorization for app usage defined in **Grid Menu > SYSTEM > Settings > System parameters > System parameters > Access control > Mobile app**.


:::(Warning) (Caution)
If the URL is not correctly configured, the mobile app won’t be able to establish communication with senhasegura. For more information about **Orbit Config Manager** settings, access the document on [How to manage the application](/v3-32/docs/orbit-cli-how-to-manage-the-application).
:::
## Install the senhasegura mobile app

[Download the **senhasegura** mobile app on Google Play Store](https://play.google.com/store/apps/details?id=com.senhasegura&pli=1) and install it on your mobile device.

## Enable the senhasegura mobile app 

Before connecting the mobile app to your account, you need to enable it on senhasegura. Follow the steps below:

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **+ Integrations > My apps**.
    
    :::(Info) (Info)
    You can also access the **My apps** screen by clicking on your username in the upper right corner of senhasegura. In the drop-down menu, click **My apps**, represented by the key icon
    

3. In the upper right corner of the **My apps** screen, click **View actions**, represented by the three vertical dots icon, and select **New key**.
4. In the **[My apps](/v3-32/docs/mysafe-my-apps)** screen, complete the information: 
    1.     **Name***: enter a name for the application.
    2.     **Expiration date**: define an expiration date and time for the authorization key. Enter the date in the first field and the time in the second field. In each field, there’s a downward arrow you can click. In the first field, clicking on the arrow will display a calendar, and in the second field, you’ll view a list of times. 

    :::(Info) (Info)
    If you don't set an expiration date, the authorization access key will only expire if you exit the application or manually revoke the key.
    :::
    3. **Application type***: mark **Mobile app**.      
    
:::(Info) (Info)
The items with an asterisk are mandatory.
:::

5. Click **Save**.

## First access to the senhasegura mobile app

After enabling the mobile app on senhasegura, you are ready to make your first access on your mobile device. Follow the steps below:

1. After clicking **Save** on the senhasegura’s **My apps** screen, you’ll view a QR code. This code is used to establish the connection between the mobile app and senhasegura.
2. Click the **senhasegura** mobile app icon on your mobile device screen.
3. At the bottom of the [mobile app initial screen](/v3-32/docs/senhasegura-mobile-app-initial-screen), click **Scan code**.
    1. You’ll immediately view a pop-up window asking you to give permission for the app to use your device’s camera to scan the QR code. You can choose to give permission while using the app or only this time. 

    :::(Info) (Info)
    By selecting **“Only this time”**, this pop-up window will be displayed again every time you need to scan a new code.
    :::


    2. Place the QR code inside the indicated area on your mobile device screen. Once detected, the app will generate a key with exclusive access to the login endpoint, and the QR code scanning will start automatically.






:::(Warning) (Attention)
While the QR code is on the  senhasegura screen, you have 1 hour to scan it. If the time expires, go back to the **My apps** screen and generate a new key following the steps described in the [Enable the senhasegura mobile app](/v3-32/docs/senhasegura-mobile-app-how-to-connect-the-senhasegura-app#enable-the-senhasegura-mobile-app) section of this tutorial.

To avoid having a long list of expired keys, you may revoke them. For more information, access [How to revoke an authorization key for an application](/v3-32/docs/mysafe-myapps-how-to-revoke-an-authorization-key-for-an-application). 
:::

6. After the QR code is scanned, you’ll receive an email with an 8-digit activation code.

6. Insert the 8-digit activation code in the **Insert code** field on the **senhasegura** mobile app screen.

:::(Warning) (Caution)
As informed in the email, you have 5 minutes to use the 8-digit activation code. If needed, click **Resend code** on the mobile app screen to receive a new code by email.
:::

8.  If the code is correct, you'll either be directed to the **Pending approval** screen or the **Terms of service** screen.


    :::(Info) (Info)
    If the administrator has determined that access to the **senhasegura** app requires approval, please wait for this approval on the **Pending Approval** screen. After approval, you will be directed to the **Terms of service** screen.
    
    If the administrator has not determined the need for approval to access the app, you will be automatically directed to the **Terms of Service** screen.
    :::

    :::(Info) (Info)
    You can view the approval status on **Grid Menu > SYSTEM > Settings > User management > My requests**. The available statuses are **PENDING, APPROVED, REJECTED, EXPIRED** and **CANCELLED**.
    :::
9.  Once connection with senhasegura is established, you'll be directed to the **Terms of Service** screen on the mobile app.


:::(Info) (Info)
After the connection, the information about the application such as its *ID, Name, Type, Device, Version, Creation date* and *Expiration date* can be viewed in a report on the **My apps** screen of senhasegura.
:::

9. Scroll down and read the **Terms of service** until the end.
10. If you agree with it, click **Accept**. 
11. You’ll be directed to the **Products** screen.

The **senhasegura** mobile app is now ready to use. 

:::(Info) (Info)
In case your access is rejected, you’ll view a message at the bottom of the mobile app screen informing of the access rejection. In this case, generate a new authorization access key. 
:::




## After the first access to the senhasegura mobile app

While the authorization access key for the **senhasegura** mobile app is still active 
(not expired or revoked), you can access the app with a simple login. 
Follow the steps below:

1. Click the **senhasegura** mobile app icon on your mobile device screen.
2. On the **Welcome to senhasegura** screen, click **Login**.
3. Use the standard authentication defined by your device - Biometrics, FaceID, or PIN, for example.

:::(Info) (Info)
For security reasons, if you haven't logged into the **senhasegura** mobile app in the last 24 hours, a new authentication token will be sent to your email. Additionally, regardless of whether you have logged in within the last 24 hours, an authentication token will also be sent to your email weekly. In these cases, when trying to log in, you’ll be directed to the screen on which you’ll need to insert the token received by email.
:::

4. Once the authentication is completed, you’ll be directed to the **Products** screen.

The **senhasegura** mobile app is now ready to use.

:::(Info) (Info)
If the authorization access key for the app has been revoked or expired, follow the steps described in the [Enable the senhasegura mobile app](/v3-32/docs/senhasegura-mobile-app-how-to-connect-the-senhasegura-app#enable-the-senhasegura-mobile-app) and then, [First access to the senhasegura mobile app](/v3-32/docs/senhasegura-mobile-app-how-to-connect-the-senhasegura-app#first-access-to-the-senhasegura-mobile-app) sections of this document.
:::

:::(Warning) (Caution)
App usage can be removed by the user or the system administrators on the senhasegura platform by clicking **Grid Menu > SYSTEM > Settings > System parameters > System parameters > Access control > Mobile app**.
:::

## Next

[How to manage passwords in MySafe through the senhasegura mobile app](/v3-32/docs/senhasegura-mobile-app-how-to-manage-passwords-in-mysafe)

[How to manage notes in MySafe through the senhasegura mobile app](/v3-32/docs/senhasegura-mobile-app-how-to-manage-notes-in-mysafe)
* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
