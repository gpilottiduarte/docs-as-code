# First steps with MySafe in the Segura app

Welcome to the **Segura** mobile app, which, integrated with **MySafe**, allows you to securely store and manage your corporate passwords and notes directly on your mobile device.

Additionally, you can quickly and securely access websites and fill in login fields, eliminating the need to memorize or expose your confidential data.

## Requirements

* Access to **MySafe**. More information in [First steps with MySafe](/v4/docs/first-steps-with-mysafe-web).  
* Segura version 3.31 or later.  
* Android operating system version 10 or later.  
* Usage authorization granted by the system administrator.  
* Email associated with your Segura user account.  
* Application URLs configured by the system administrator.

---

## Install the app

To install the **Segura** app on your mobile device:

1. Open the [Google Play Store](https://play.google.com/store/apps/details?id=com.Segura&pli=1) and search for **Segura**.  
2. Download and install the app on your mobile device.

**Result**: you’ve downloaded and installed the **Segura** app on your device.

## Create an authorization for the app in MySafe

Now that you’ve installed the **Segura** app, create an authorization for it to access your passwords and notes stored in **MySafe**.

1. Log in to Segura.  
2. In the navigation bar, hover over the **User menu** in the upper-right corner and select **My apps**.  
3. Click **Add** in the upper-right corner of the **My apps** screen.  
4. On the **Add application** screen, fill in:

    ::: (error) (Alert)  
	 Items with an asterisk are required.  
	:::

    1. **Name**\*: enter a name to identify the app. Example: **Segura app**.  
   2. **Expiration date**: choose a date and time for the authorization to expire, or leave it blank for manual expiration. Example: **01/30/2025** at **03:00 PM.**  
   3. **Application type**\*: select **Mobile app**.  
5. Click **Save**.  
6. Stay on this screen. The generated **QR code** is the authorization to connect the app to **MySafe** and will be used in the next step.

**Result**: you’ve created the authorization and can use the QR code to connect the app to **MySafe**.

## Connect the app to MySafe

After creating the authorization, use it to connect the app to **MySafe** and view and manage your passwords and notes directly on your mobile device.

1. With the **QR code** displayed on the **MySafe** web screen, open the **Segura** app on your mobile device.  
2. On the app’s home screen, choose one of the options:  
   1. **Scan QR code**: use your device’s camera to scan the QR code displayed on the **MySafe** web screen.  
   2. **Can’t read it? Click here to type the code**: copy the code into the app, paste it into the **My apps** screen on **MySafe** web, and click **Send**.

    ::: (info) (Info)
    You can copy the code, send it to your email, open it on your computer, and paste it into the **My apps** screen.  
   :::

3. Wait a few moments and check the email associated with your **MySafe** user account to obtain the 8-digit activation code.  
4. Copy and paste the activation code into the specified field on the **Segura** app screen.  
5. Click **SEND**.  
6. Wait to be directed to the **Pending approval** or **Terms of service** screen.

    ::: (info) (Info)  
    The **Pending approval** screen is displayed if the **MySafe** administrator has enabled the **Request device approval\*** option.  
    :::

7. Wait for the app to send your device data to Segura, and if necessary, wait for administrator approval.  
8. Read the **Terms of service** to the end and click **Accept**.  
9. On the **Products** screen, click **MySafe**.

**Result**: you’ve successfully connected the **Segura** app to **MySafe** and can now log in.

::: (error) (Alert)  
 If your access is rejected, contact your system administrator.  
 :::

## Log in to the Segura app

Now that you’ve authorized the app to access your **MySafe**\-stored information, you can log in:

1. Open the **Segura** app and click **Login**.  
2. Use the local authentication configured on your device, such as biometrics, FaceID, or PIN.

**Result**: you’re logged into the app and can view and manage your passwords and notes directly from your mobile device.

## Important information

* The authorization is valid for 1 hour and is displayed only once. After expiration or loss, [create a new authorization](/v4/docs/Segura-mobile-app-first-steps#create-an-authorization-for-the-app-in-mysafe).
* The activation code is valid for 5 minutes. If needed, click **Resend code** in the app.  
* You can use the app for 7 consecutive days before needing to reactivate it with a new activation code sent by email. If you don’t use the app for 24 hours, a new activation code will also be required for reconnection.  
* If you experience connection issues, refer to the [Error connecting the Segura app to MySafe](/v4/docs/error-connecting-the-Segura-app-to-mysafe) document .

### Next steps

Now that you’ve installed and connected the Segura app, explore its features:

* **Securely manage your passwords and notes**. More information in [How to manage MySafe passwords using the Segura app](/v4/docs/how-to-manage-mysafe-passwords-in-the-Segura-app) and [How to manage MySafe notes using the Segura app](/v4/docs/how-to-manage-mysafe-notes-in-the-Segura-app).

---
Do you still have questions? Reach out  to the [Segura community](https://community.Segura.io/).
