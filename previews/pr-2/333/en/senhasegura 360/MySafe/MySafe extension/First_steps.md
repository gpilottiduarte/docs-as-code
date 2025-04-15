# First steps

To ensure seamless integration of the passwords and notes stored in **MySafe** and accessible to your user, you must first install the extension and then enable it on **senhasegura**. This document provides a step-by-step guide to accomplish this.

:::(info) (Info)
Currently, support for the extension is limited to Google Chrome, Opera, Brave, and Microsoft Edge. Support for other browsers is planned for future versions.
:::

:::(warning) (Attention)
If the **senhasegura** server uses a self-signed certificate, you must launch the browser with the flag `chrome.exe --ignore-certificate-errors`. Make sure to close the browser before entering the flag.
:::

## Requirements

- **senhasegura** version 3.30 or newer.
- Application URL filled by the administrator in the **Orbit Config Manager** screen. Access the document on **How to control the application > General application data** for more information.
- Application URL filled by the administrator in **MySafe > Admin > Sharing Options > Base URL** without the `https://`. Access the document on **How to configure MySafe** for more information.

    :::(warning) (Attention)
    If the application is communicating with a **MySafe** vault in a multi-tenant environment, you should enter the tenant URL without the `https://` in **MySafe > Admin > Sharing Options > Base URL**. 
    **Example**: `teste.mt4.dev`
    :::

## Install the extension

To install the extension in your web browser, follow the steps below:

1. Download the extension from the Google Chrome Web Store using the link **senhasegura MySafe - webstore**.
::: (info) (Info)
All supported browsers can obtain the extension through the Google Chrome Web Store.
:::
2. Click **Add to Chrome** in the upper right corner of the screen to install the extension and, then, fix it on your browser's toolbar.

## Enable the extension

Once you’ve installed the extension, you’ll need to enable it on **senhasegura** to effectively manage the passwords and notes information available in **MySafe**. To enable the extension, follow the steps below:

1. On **senhasegura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **+ Integrations > My Apps**.

::: (info) (Info)
You can also access the **My apps** page by clicking on your username in the upper-right corner of **senhasegura**. In the dropdown menu, click **My apps**, represented by the key icon.
:::
3. In the upper right corner, click **View actions**, represented by the three vertical dots, and select **New key**.
4. In the **My apps** window, fill in:
   - **Name***: enter a name for the application.
   - **Expiration date**: in the first field, manually enter the expiration date for the authorization key or click the downward arrow to select the dates from a calendar. In the second field, manually enter the expiration time or click the downward arrow to select a time from a list of times.
    ::: (info)(Info)
    If you don't set an expiration date and time, the key will only expire if you exit the application or manually revoke the key.
    :::
   - **Application type***: check **Extension**.
::: (info) (Info)
The items with an asterisk are mandatory.
:::
5. Click **Save**.
6. On the **My apps** screen, you’ll view a QR code and a manually enterable code.
::: (warning) (Attention)
As the generated authorization key is for single use only, you can’t view it more than once. In case of loss or any other issue, we recommend that you revoke the key and generate a new one. For more information, access the documents on [How to revoke an authorization key for an application](/v3-33/docs/mysafe-myapps-how-to-revoke-an-authorization-key-for-an-application) and [How to generate an authorization key for an application](/v3-33/docs/mysafe-myapps-how-to-generate-an-authorization-key).
:::
7. Click the **MySafe** extension icon on your browser toolbar to open it and select **Read QR code from the page**. Alternatively, you can manually copy the code below the QR code on the **My apps** screen and paste it into the **Activation Code** field of the extension.
8. Click the eye icon to show the code entered.
9. On the **MySafe** extension screen, click **SEND**.
10. After the code is read, you’ll receive an email with an 8-digit activation code.
11. Insert the 8-digit activation code in the indicated field on the **MySafe** extension screen.
12. Click **SEND**.

::: (warning) (Attention)
As informed in the email, you have 5 minutes to use the 8-digit activation code. If needed, click **Resend code** on the **MySafe** extension screen to receive a new code by email.
:::
The **MySafe** extension is now ready to use.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.

