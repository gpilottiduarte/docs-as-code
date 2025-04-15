# Passwords

This document provides information about the **Passwords** screen of **MySafe** in the **Segura** mobile app.

## Path to access

1. On the **Products** screen of the **Segura** mobile app, select **MySafe** .  
2. In the top bar, in the left corner, click on the side menu and select **Passwords**.

## Top bar

| Item | Type | Description |
| :---- | :---- | :---- |
| **Side menu** | Dropdown menu | Displays the user profile picture, username, email, and the options *Home, Passwords, Notes,* and *Log out*. |
| **Search** | Button | Opens a text field to search for items saved in **MySafe** . |
| **Products menu** | Dropdown menu | Opens the **Products** screen.  |

## Compact password card

The following table describes the icons and information displayed in the compact version of the password card.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text | Password identification name.  |
| **Username** | Text | Username is associated with the password.  |
| **Copy password** | Button | Copies the password to the clipboard. |
| **Edit password** | Button | Opens the **Edit password** screen. |

## Expanded password card

The following table describes the icons and information displayed in the expanded version of the password card.

| Item | Type | Description |
| :---- | :---- | :---- |
| **URL** | Text | Website address where the password is being used. |
| **Tags** | Text | Keywords associated with the password. |
| **TOTP** | Text | Temporary tokens linked to the password are used as an additional factor in multi-factor authentication (MFA). A time icon displays the countdown for generating a new TOTP, which occurs automatically every 30 seconds. <br> **Note**: available if a secret key has been added for the password.  |
| **View password** | Button | Opens a card at the bottom of the screen with buttons to *Go to URL*, *Copy*, and *View the password*. |
| **Copy username** | Button | Copies the username associated with the password to the clipboard. |
| **Copy TOTP** | Button | Copies the generated token to the clipboard.  <br> **Note**: available if a secret key has been added for the password. |

### Add new password/Edit password screens

The **Add new password** and **Edit password** screens share the same fields.

### Path to access the Add new password screen

1. In the **Passwords** section of the **MySafe** app screen, click **Add** in the bottom-right corner.

### Path to access the Edit password screen

1. In the **Passwords** section of the **MySafe** app screen, identify the password you want to edit.  
2. Click Edit.  
 
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Cancel** | Button | No | Cancels the action and returns to the **Passwords** screen. |
| **Save** | Button | No | Saves the password. |
| **Name**\* | Text field | Yes | Password identification name. |
| **URL** | Text field | No | Website address where the password will be used. |
| **Username**\* | Text field | Yes | Username is associated with the password. |
| **Password**\* | Text field | Yes | The password is being added or edited. |
| **Show/Hide password** | Button | No | Shows or hides the entered password.  |
| **Configure** | Button | No | Defines the following password criteria: *Password length, Uppercase, Lowercase, Numbers*, and *Symbols*. |
| **Generate password** | Dropdown menu | No | Generates an automatic password based on the defined criteria.  |
| **Confirm** | Button | No | Saves the selected criteria for automatic password generation. |
| **Password strength** | Progress bar | No | Indicates password strength. <br> - **Very strong password**: four green bars.<br> - **Strong password**: one red bar, one yellow bar, and one green bar. <br> - **Medium password**: one red bar and one yellow bar. <br> - **Weak password**: one red bar.  |
| **Secret key (TOTP)** | Text field | No | Secret key used to generate a temporary token, TOTP (Time-based One-time password), for accounts requiring multi-factor authentication. <br> **Note**: the key must have at least 10 characters, uppercase letters A-Z, and numbers 2-7.  |
| **Show/Hide secret key (TOTP)** | Button | No | Shows or hides the secret key (TOTP). |
| **Tags** | Text field | No | Keywords to categorize the password. |
| **Notes** | Text field | No | General information about the password. |

