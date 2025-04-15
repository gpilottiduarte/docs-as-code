# How to manage passwords using the MySafe extension

This document provides a step-by-step guide on how to manage your passwords stored in **MySafe** using the browser extension.

## Requirements

* The **MySafe** browser extension installed and activated in your browser. More information in [First steps with the MySafe extension](/v4/docs/mysafe-extension-first-steps).

:::(error) (Alert)  
 Due to third-party application security mechanisms, we cannot guarantee the automatic detection of username and password fields by the **MySafe** extension on all websites. However, we’re continuously improving the extension to expand support for an increasing number of sites.  
 :::

## Add a password when logging into a site (automatically)

## Requirements

* The option **Enable automatic password save suggestion** activated in the **Settings** screen. More information in [Settings](/v4/docs/mysafe-extension-settings).
---
Follow the steps below if you know the login credentials for the desired site:

1. Access the desired website. Example: `https://github.com/`  
2. Enter your username and password to log in.  
3. Click **Yes** in the pop-up "**Add a new password to MySafe?**".

:::(info) (Info)  
 When you add your password to **MySafe**, your credentials will be auto-filled for future logins on this site.  
 :::

## Add a password manually

To add a password manually using the **MySafe** extension, follow the steps below:

1. In the bottom menu of the **MySafe** extension, click **Add item**.  
2. On the **Add password** screen, fill in:  
    :::(error) (Alert)  
    The items with an asterisk are required.
     :::
   1. **Name**\*: name to identify the password.  
   2. **URL**\*: website address where the password will be used. This field is automatically filled with the address of the website being accessed at the time the password is created. Clear the field to enter a different address.  
   3. **Username**\*: username associated with the password.  
   4. **Password**: enter the password.  
      1. Click **Show** to view the entered password.  
      2. Click **Generate** to generate an automatic password based on criteria defined in the **Configure** option.  
      3. Click **Configure** to set the password generation criteria.  
      4. Check the password strength in the progress bar. Four green bars indicate the password is very strong, while one red bar means the password is weak and can be easily discovered.  
         :::(warning) (Attention)  
          Generate strong passwords with at least 12 characters, uppercase letters, lowercase letters, digits, and symbols.  
         :::

   5. **Secret**:  if your account is protected by multi-factor authentication, enter the secret key to generate the temporary token (TOTP).  
      1. Click **Show** to view the entered secret key.  
      2. Click **QR code** to scan the secret key from a QR code.

       :::(error) (Alert)  
       * The secret key must be at least 10 characters long and include uppercase letters A-Z and numbers 2-7.
       * Ensure your device's clock is synchronized with the correct time. Time discrepancies may affect TOTP generation and validation.  
       :::


  6. **Tags**: keywords to categorize the password.  
  7. **Notes**: general information about the password.  
3. Click **Save**

## View password details

To view password details using the **MySafe** extension, follow the steps below:

1. In the bottom menu of the **MySafe** extension, click **MySafe**.  
2. In the passwords list, click the desired password card to expand it.  
3. View details such as *Name, URL, Username, Tags, TOTP*, and action buttons to **Copy username**, **Copy password**, **Copy TOTP**, **Edit password**, and **Disable password**.  
4. Click the expanded card to collapse it back to its compact format.

## Edit password

To edit a password using the **MySafe** extension, follow the steps below:

1. In the bottom menu of the extension, click **MySafe**.  
2. In the passwords list, click the desired password card to expand it.  
3. Click **Edit password**.  
4. In the **Edit password** screen, make the necessary changes.  
    :::(info) (Info)  
   Since the **Secret** is sensitive information, it isn’t displayed. Leave the field blank to keep the previous value or enter a new value to update it.  
    :::  
5. Click **Save**.

## Copy username, password, and TOTP

To copy login details using the **MySafe** extension, follow the steps below:

1. In the bottom menu of the extension, click **MySafe**.  
2. In the passwords list, click the password card to expand it and click the desired option:  
   1. **Copy username**.  
   2. **Copy password**.  
   3. **Copy TOTP**. Available only if a secret key is associated.

:::(warning) (Attention)  
Copied login details are temporarily stored in your device's clipboard and may be accessed by other programs.  
 :::

## Disable password

To disable a password using the **MySafe** extension, follow the steps below:

1. In the bottom menu of the extension, click **MySafe**.  
2. In the passwords list, click the desired password card to expand it:  
3. Click **Disable password**.  
4. Click **Yes** in the confirmation pop-up window.

:::(info) (Info)  
To enable a password, access the **MySafe** web version. More information in [How to manage passwords using MySafe web](/v4/docs/how-to-manage-passwords-on-mysafe-web).  
 :::
---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
