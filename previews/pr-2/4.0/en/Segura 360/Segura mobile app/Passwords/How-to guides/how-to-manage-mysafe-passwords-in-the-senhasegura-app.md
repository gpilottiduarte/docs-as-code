# How to manage MySafe passwords in the Segura app

This document provides information about how to add and manage passwords saved in **MySafe** using the **Segura** app.

## Requirements

* The **Segura** mobile app connected to your account and enabled on your mobile device. More information in [**First steps with MySafe in the Segura app**](/v4/docs/senhasegura-mobile-app-first-steps).

## Path to access

1. On the **Products** screen of the **Segura** mobile app, select **MySafe**.  
2. In the top bar, in the left corner, click on the side menu and select **Passwords**.

## Add a password manually

To add a password manually using the **Segura** app, follow these steps:

1. In **MySafe \> Passwords**, click **Add** in the bottom-right corner.  
2. On the **Add new password** screen, fill in:  
   	:::(error) (Alert)  
   	The items with an asterisk are required.  
   	:::  
   1. **Name**\*: name to identify the password.  
   2. **Url**\*: website address where the password will be used.   
   3. **Username**\*: username associated with the password.  
   4. **Password**: enter the password.  
      1. Click **Show** to view the entered password.  
      2. Click **Generate** to generate an automatic password based on the criteria defined in the **Configure** option.  
      3. Click **Configure** to set the password generation criteria.  
      4. Check the password strength in the progress bar.   
        :::(warning) (Attention)  
        Generate strong passwords with at least 12 characters, uppercase letters, lowercase letters, digits, and symbols.  
         :::  
   5. **Secret key (TOTP)**:  if your account is protected by multi-factor authentication, enter the secret key to generate the temporary token (TOTP).  
      1. Click **Show** to view the entered secret key.  
      2. Click **QR code** to scan the secret key from a QR code.
      :::(error) (Alert)
         * Enter a secret key at least 10 characters long, including uppercase letters A-Z, and numbers 2-7.
        * Ensure your device's clock is synchronized with the correct time. Time discrepancies may affect TOTP generation and validation.  
         :::  

  6. **Tags**: keywords to categorize the password.  
  7. **Notes**: general information about the password.  
3. Click **Save**.

## View password details

To view password details using the **Segura** app, follow these steps:

1. In the passwords list, identify the desired password card and view its **Name***,* **Username** and the **Copy** and **Edit password** action buttons.  
2. Click the card to expand it.  
3. View details such as Tags*,* TOTP*,* and the **View password, Copy username**, and **Copy TOTP** action buttons.  
4. Click the expanded card to collapse it back to its compact format.

## Edit password

To edit a password using the **Segura** app, follow these steps:

1. In the passwords list, identify the desired password card and click **Edit password**.  
2. In the **Edit password** screen, make the necessary changes.  
    :::(info) (Info)  
   Since the **Secret key (TOTP)** is sensitive information, it isn’t displayed. Leave the field blank to keep the previous value, or enter a new value to update it.  
    :::  
3. Click **Save**.

## Copy login details

To copy login details using the **Segura** app, follow these steps:

1. In the passwords list, click the desired password card and click:  
   1. **Copy username**.  
   2. **Copy password**.  
   3. **Copy TOTP**. Available if a secret key is associated.

        :::(warning) (Attention)  
      Copied login details are temporarily stored in your mobile device's clipboard and may be accessed by        other programs.  
        :::

_____

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).


