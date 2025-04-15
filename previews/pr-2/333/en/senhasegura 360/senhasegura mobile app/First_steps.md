# First steps

Download the senhasegura mobile app on Google Play Store through the link: [senhasegura mobile app](https://play.google.com/store/apps/details?id=com.senhasegura).
***


This document provides a step-by-step guide on how to start using the senhasegura mobile app.

:::(Info) (Info)
The current version of the **senhasegura** mobile app is only integrated with the **MySafe** vault.
:::

## Requirements


* senhasegura version 3.31 or newer.
* Android operational system version 10 or newer.
* URL filled by the administrator in the **Orbit Config Manager** screen.
* Authorization for app usage defined by the administrator in **Grid Menu > SYSTEM > Settings > System parameters > System parameters > Access control > Mobile app**.
* Email associated with your senhasegura user.

***
:::(Warning) (Attention)
* If the URL is not correctly configured, the mobile app won’t be able to communicate with senhasegura. Access the document [How to control the application > General application data](/v3-33/docs/orbit-web-how-to-control-the-application#general-application-data) for more information about **Orbit Config Manager** settings.

<br>

* For the app to communicate with the vault, the administrator must enter the base URL in **MySafe > Admin > Sharing Options > Base Url**. 
    * If the application is communicating with a **MySafe** vault in a multi-tenant scenario, enter the tenant URL without the *https://*. 
:::


## Install the senhasegura mobile app 

To install the app, download it on Google Play Store through the link: [senhasegura mobile app](https://play.google.com/store/apps/details?id=com.senhasegura) and install it on your mobile device.

## Enable the senhasegura mobile app 
Before connecting the mobile app to your account, you need to enable it on senhasegura. Follow the steps below:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **+ Integrations > My apps**.

:::(Info) (Info)
You can also access the **My apps** page by clicking on your username in the upper-right corner of senhasegura. In the drop-down menu, click **My apps**, represented by the key icon.
:::

3. In the upper-right corner of the **My apps** page, click **View actions**, represented by the three vertical dots icon, and select **New key**.
4. In the **My apps** window, fill in:
    1. **Name***: enter a name for the application.
    2. **Expiration date**: in the first field, enter the expiration date for the authorization key, and the time in the second field. In each field, there’s a downward arrow you can click. In the first field, clicking on the arrow will display a calendar, and in the second field, you’ll view a list of times. 

    :::(Info) (Info)
     If you don't set an expiration date, the authorization key will only expire if you log out of the app or manually revoke the key.
    :::
   
    3. **Application type***: check **Mobile app**. 


:::(Info) (Info)
The items with an asterisk are mandatory.
:::

5. Click **Save**.


## First access to the senhasegura mobile app
After enabling the integration of the mobile app with senhasegura, you’re ready to make your first access on your mobile device. Follow the steps below:

1. After clicking **Save** on the senhasegura’s **My apps** screen, you’ll view a QR code and a written code.  These codes establish the connection between the mobile app and senhasegura.
2. Click the **senhasegura** mobile app icon on your mobile device screen.
3. At the bottom of the mobile app initial screen, click **Scan code**.
4. Allow the app to use your mobile device's camera. 
5. Place the QR code inside the indicated area on your mobile device screen. Once detected, the app generates a key with exclusive access to the login endpoint, and the QR code scanning will start automatically. 
6. Optionally, if you’re having trouble with your device camera, click the **Can’t read it? Click here to type the code** link.
    1. You’ll be immediately directed to a screen where you can enter the code copied from the **My apps** screen of **MySafe**
    2. Once the code is detected, the app generates a key with exclusive access to the login endpoint, and the code scanning starts automatically. 

:::(Warning) (Attention)
* While the codes are on the senhasegura screen, you have 1 hour to use them. If the time expires, go back to the **My apps** screen and generate a new key following the steps described in the [Enable the senhasegura mobile app](/v3-33/docs/senhasegura-mobile-app-first-steps#enable-the-senhasegura-mobile-app) section of this document.
<br>
* To avoid having a long list of expired keys, you may revoke them. For more information, access the document on [How to revoke an authorization key for an application](/v3-33/docs/mysafe-myapps-how-to-revoke-an-authorization-key-for-an-application). 
:::

6. After the code is read, you’ll receive an email with an 8-digit activation code.
7. Enter the 8-digit activation code in the **Insert code** field on the **senhasegura** mobile app screen. If the code is correct, you’ll be automatically directed to the **Pending approval** or **Terms of service** screen.


:::(Warning) (Attention)
As informed in the email, you have 5 minutes to use the 8-digit activation code. If needed, click **Resend code** on the mobile app screen to receive a new code by email.
:::

:::(Info) (Info)
Users will only see the **Pending Approval** screen if the administrator has set the **Require device approval*** parameter as **Yes**.
:::

8. Wait for the app to send the device data to senhasegura and, if necessary, for the administrator to approve your access.

:::(Info) (Info)
* The information about the application such as its *ID, Name, Type, Device, Version, Creation date* and *Expiration date* can be viewed in a report on the **My apps** screen of **MySafe**.
:::

9. Scroll down and read the **Terms of service** until the end.
10. If you agree with it, click **Accept**. 
11. You’ll be directed to the **Products** screen.

The **senhasegura** mobile app is now ready to use.

:::(Info) (Info)
In case your access is rejected, you’ll view a message at the bottom of the mobile app screen informing you of the access rejection. In this case, contact the platform administrator in your company.
:::

## Next accesses to the senhasegura mobile app

While the authorization key for the senhasegura mobile app is still active (not expired or revoked), you can access the app with a simple login. Follow the steps below:
1. Click the **senhasegura** mobile app icon on your mobile device screen.
2. On the **Welcome to senhasegura** screen, click **Login**.
3. Use the standard authentication defined by your device - *Biometrics, FaceID*, or *PIN*, for example.

:::(Info) (Info)
For security reasons, if you haven't logged into the **senhasegura** mobile app in the last 24 hours, a new authentication token will be sent to your email. Additionally, regardless of whether you have logged in within the last 24 hours, an authentication token will also be sent to your email weekly. In these cases, when trying to log in, you’ll be directed to the screen on which you’ll need to insert the token received by email.
:::

4. Once the authentication is completed, you’ll be directed to the **Products** screen.

The **senhasegura** mobile app is now ready to use.

:::(Info) (Info)
If the authorization key for the application has been revoked or expired, follow the steps described in the [Enable the senhasegura mobile app](/v3-33/docs/senhasegura-mobile-app-first-steps#enable-the-senhasegura-mobile-app) and then, [First access to the senhasegura mobile app](/v3-33/docs/senhasegura-mobile-app-first-steps#next-accesses-to-the-senhasegura-mobile-app) sections of this document.
:::

*** 
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
