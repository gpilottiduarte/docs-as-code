# First steps with the MySafe extension

Welcome to the **MySafe** extension\! **MySafe** is a corporate password manager that allows you to securely store and manage your information.  
With the browser extension, you can access and manage your passwords and notes directly from your browser, as well as quickly and securely log in to websites, eliminating the need to memorize or expose your confidential data.

## Requirements

* Access to **MySafe**. More information in [First steps with MySafe web](/v4/docs/first-steps-with-mysafe-web).  
* Segura version 3.30 or later.  
* Supported browsers: Google Chrome, Opera, Brave, Microsoft Edge, and Firefox (version 4.0 or later).  
* **Self-signed certificate:** if the server uses a self-signed certificate, close the browser and restart it with the `\--ignore-certificate-errors` flag. Contact your system administrator for more details.  
* Email associated with your Segura user account.  
* Application URLs configured by the system administrator.
---
## Install the extension

To install the **MySafe** extension in any supported browser:

1. Open your browser’s extension store.  
   1. For Google Chrome, go to [Google Chrome Web Store](https://chromewebstore.google.com/detail/Segura-mysafe/fjbkdjfgiikcecefpbbijmhfnbijjacc).  
2. Search for the **MySafe** extension and add it to your browser.  
3. Pin the extension to the toolbar for easier access.

**Result**: you’ve downloaded, installed, and pinned the **MySafe** extension to your browser.

## Create an authorization for the extension in MySafe 

Now that you’ve installed the **MySafe** extension, you need to create an authorization for it to access your stored passwords and notes.

1. Log in to Segura.  
2. In the navigation bar, hover over the **User menu** in the upper-right corner and select **My apps**.  
3. Click **Add** in the upper-right corner of the **My apps** screen.  
4. On the **Add application** screen, fill in:  
    ::: (error) (Alert)  
    Items with an asterisk are mandatory.  
    :::
   1. **Name**\*: enter a name to identify the extension. Example: **MySafe extension**.  
   2. **Expiration date**: choose a date and time for the authorization to expire, or leave it blank for manual expiration. Example: **01/30/2025** at **03:00 PM.**  
   3. **Application type**\*: select **Extension**.

5. Click **Save**.  
6. Stay on this screen. The generated **QR code** is your authorization to connect the extension to **MySafe** and will be used in the next step.

**Result**: you’ve created the authorization and can use the QR code to connect the extension to **MySafe**.

### Connect the extension to MySafe

Use the authorization to connect the extension to **MySafe** and view and manage your stored passwords and notes directly in the browser extension.

1. With the **QR code** displayed on the **MySafe** web screen, click the **MySafe** extension icon in your browser.  
2. On the extension’s home screen, choose one of the options:  
   1. **Scan QR code from page**: the extension will automatically scan the QR code displayed on the **MySafe** web screen.  
   2. **Enter code manually**: copy the code, paste it into the provided field, and click **SUBMIT**.  
3. Wait a few moments and check the email associated with your **MySafe** user account to retrieve the 8-digit activation code.  
4. Copy and paste the activation code into the specified field in the **MySafe** extension.  
5. Click **SEND**.

**Result**: you’ve connected the browser extension to **MySafe** and can now view and manage your passwords and notes directly from the browser.

## Important notes

* The authorization is valid for 1 hour and displayed only once. After expiration or loss, you must [create a new authorization](/v4/docs/mysafe-extension-first-steps#create-an-authorization-for-the-extension-in-mysafe).
* The 8-digit activation code is valid for 5 minutes. If needed, click **Resend code** in the extension.  
* You can use the extension for 30 consecutive days before needing to reactivate it with a new activation code sent by email. If you don’t use the extension for 7 days, a new activation code will also be required for reconnection.  
* If you experience connection issues, refer to the [Error connecting the browser extension to MySafe](/v4/docs/error-connecting-the-browser-extension-to-mysafe) document.

### Next steps

Now that you’ve installed and connected the extension, explore its features:

* **Automatically log in to websites**. More information in How to log in automatically with the MySafe extension.  
* **Securely manage your passwords and notes**. More information in [How to manage passwords using the MySafe extension](/v4/docs/mysafe-extension-manage-passwords) and [How to manage notes using the MySafe extension](/v4/docs/mysafe-extension-manage-notes).
---
Do you still have questions? Reach out  to the [Segura community](https://community.Segura.io/).