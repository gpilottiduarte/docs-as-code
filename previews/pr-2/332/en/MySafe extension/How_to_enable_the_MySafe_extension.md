# How to enable the MySafe extension

This tutorial provides a step-by-step guide on how to enable the **MySafe** extension.

:::(info) (**Info**)
Currently, support for the extension is limited to Google Chrome, Opera, Brave and Microsoft Edge. Support for other browsers is planned for future versions.
:::

:::(Warning) (Caution)
In case the senhasegura server uses a self-signed certificate, you need to launch the browser with the flag `chrome.exe --ignore-certificate-errors`.
Make sure to close the browser before entering the flag.
:::

## Requirements

* senhasegura version 3.30 or newer.

* URL filled in the **Orbit Config Manager** screen.

    :::(Warning) (Caution)
    In case the URL is not correctly configured, the extension won't be able to establish communication with the vault. For more information about **Orbit Config Manager** settings, access the document on [How to manage the application](/v3-32/docs/orbit-cli-how-to-manage-the-application).
    :::



## Install the extension

1. Download the extension from the Google Chrome Web Store using the following link:  [senhasegura MySafe - webstore](https://chromewebstore.google.com/detail/senhasegura-mysafe/fjbkdjfgiikcecefpbbijmhfnbijjacc).
2. Click **Add to Chrome** in the upper left corner of the screen to install the extension and fix it on your browser's toolbar.


## Enable the extension
To enable the **MySafe** extension, follow the steps below:

    1. On senhasegura, in the upper left corner, click on the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **+ Integrations > My Apps**.
    
  :::(Info) (Info)
    You can also access the **My apps** page by clicking on your username in the upper right corner of the senhasegura web platform. In the dropdown menu, click **My apps**, represented by the key icon.
 :::
 
3. In the upper right corner, click on **View actions**, identified by the three vertical dots, and select **New key**.
4. In the **My apps** window, complete the information:
    1. **Name***: enter a name for the application.
    2. **Expiration date**: in the first field, enter the expiration date for the authorization key, and the time in the second field. In each field, there’s a downward arrow you can click. In the first field, clicking on the arrow will display a calendar, and in the second field, you’ll view a list of times. 

       
    :::(Info) (Info)
    If you don't set an expiration date, the key will only expire if you exit the application or manually revoke the key.
    :::

    c.    **Application type***: mark **Extension**.
    
    :::(Info) (Info)
   The items with an asterisk are mandatory.
    :::

5. Click **Save**.
6. On the **My apps** screen, you’ll see a QR code and a manually enterable code. 
    
    :::(Warning) (Caution)
    The generated authorization key is for single-use only. Therefore, you can’t view it more than once. In case of loss or any other issue, you’ll need to revoke the key and generate a new one. For more information, access [How to revoke an authorization key for an application](/v3-32/docs/mysafe-myapps-how-to-revoke-an-authorization-key-for-an-application).

    :::
8. Open the extension, select the option to **Read QR code from the page**, or manually copy the code below the QR code and paste it into the **Activation Code** field. 
9. Click **Send**.
10. After the code is read, you’ll receive an email with an 8-digit activation code.
11. Insert the 8-digit activation code in the indicated field on the **MySafe** extension screen.
12. Click **SEND**. 

    :::(Warning) (Caution)
    As informed in the email, you have 5 minutes to use the 8-digit activation code. If needed, click **Resend** code on the **MySafe** extension screen to receive a new code by email.



    :::
  
        

The **MySafe** extension is now ready to use.

## **Next**
[How to add a password using the MySafe extension](/v3-32/docs/mysafe-extension-access)

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.