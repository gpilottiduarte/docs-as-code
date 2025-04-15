# How to manage passwords in MySafe through the senhasegura mobile app

This document provides a step-by-step guide on how to add, view, copy, and edit a password’s information in **MySafe** using the **senhasegura** mobile app.

## Requirements

* The senhasegura mobile app connected to your account and enabled on your mobile device. Access the [First steps](/v3-33/docs/senhasegura-mobile-app-first-steps) document for more information.


## Path to access
1. On the**senhasegura** mobile app, click **Products** and select **MySafe**.
2. On the top bar, click the three vertical bars icon and select **Passwords**. 

***


## Add a password

To add a password in **MySafe** through the **senhasegura** mobile app, follow the steps below:

1. In the bottom right corner of the **Passwords** screen, click the plus icon.

1. On the **Add new password** screen, fill in the information:
    1. **Name***: enter a name to identify the password.
    2. **URL***: enter the website URL where the password will be used.
    3. **Username***: enter the credential username.
    4. **Password***: enter the password.
    5. **Secret key (TOTP)**:  if your account is configured to use multi-factor authentication, enter the secret key used to generate the TOTP (Time-based One-Time Password).
    
    :::(Warning) (Attention)
    * To ensure the feature works correctly, please make sure your device's clock is synchronized with the correct time. Time deviations may affect the generation and validation of the TOTP.
	<br>
    * The secret must contain at least 10 characters and be base32 encoded, that is, it must include only capital letters from A to Z, numbers from 2 to 7, and the character =.

    :::
    7. **Tags**: enter keywords associated with the password.
    8. **Notes**: enter observations about the password.

:::(Info) (Info)
The items with an asterisk are mandatory.
:::

3. In the upper-right corner of the **Add new password** screen, click the **check** icon to save the password.

To cancel the action, click the **x** icon in the upper-left corner of the screen.

Once finished, you’ll be directed to the  **Passwords** screen, where you can view all the added passwords listed by name.


## View and/or copy a credential’s information

In this section, you’ll find detailed information on how to view and/or copy a credential’s information, such as its password, username, and TOTP.

## Requirements

* A password saved in **MySafe**. For more information on how to add a password in **MySafe** through the senhasegura mobile app, refer to the section [Add a password](/v3-33/docs/senhasegura-mobile-app-how-to-manage-passwords-in-mysafe#add-a-password) in this document.

To view and/or copy a password in **MySafe** through the **senhasegura** mobile app, follow the steps below:

1. On the **Passwords** screen, locate the password you want to view and click on its name.

1. An expanded card will display other information about the password, such as its **URL**, **TOTP,**, **Tags** and **Notes**, as well as the **View password** and **Copy username** buttons.

1. To view and/or copy the password:
    1. Click **View password**.
    2. At the bottom of the screen, you’ll view a card with the password’s name, a copy button, represented by **the two sheets of paper** icon, and the view button, represented by the **eye** icon.
    3. Click the **eye** icon to view the password.
    4. Click the **two sheets of paper** to copy the password to your clipboard.
    :::(info) (Info)
    You can also copy the password from the card’s compact card version by clicking the two sheets of paper icon.
    :::

    The message **“Password copied”**   at the bottom of the screen confirms the action.
        
<br>

4. To copy the username:
    1. Click **Copy username**.

        The message **“Username copied”** at the bottom of the screen confirms the action.
<br>
5. To copy the TOTP:
    1. Click **Copy TOTP**.
    The message **“TOTP copied”** at the bottom of the screen confirms the action.
:::(info)  (Info)
This button is only available if you have provided a valid secret key when adding a password to **MySafe**.
:::

6. Click outside the card to close it.

:::(Warning) (Attention)
When you copy information, it is added to your clipboard, making it accessible to other applications on your device.
:::


* * *
## Edit a password




## Requirements

* A password saved in **MySafe**. For more information on how to add a password in **MySafe** using the **senhasegura** mobile app, refer to the section [Add a password](/v3-33/docs/senhasegura-mobile-app-how-to-manage-passwords-in-mysafe#add-a-password) in this document.


To edit a password saved in **MySafe** through the **senhasegura** mobile app, follow the steps below:

1. On the **Passwords** screen, locate the password you want to edit.

1. On the right of the password’s name and next to the copy button, click the paper and pencil icon.

1. On the **Edit password** screen, make the necessary changes.


1. In the upper-right corner of the **Edit password** screen, click the **check** icon to save the changes.

To cancel the changes made, click the **x** icon in the upper-left corner of the screen.

The message “**Edited password”** at the bottom of the screen confirms the action.

Once finished, you’ll be directed to the **Passwords** screen, where you can view all the passwords listed by name.

***


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
