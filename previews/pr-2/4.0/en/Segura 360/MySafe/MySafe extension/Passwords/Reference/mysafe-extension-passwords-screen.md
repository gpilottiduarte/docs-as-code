# Passwords

This document provides information about the **Password details** card of the **MySafe** extension and the **Add password** and **Edit password** screens.

The **Passwords** section of the **MySafe** extension's home screen shows a list of passwords stored by the user or shared with them. Each password is represented by its own card. By default, the cards are shown in a compact format. Clicking the password name expands the card to show more detailed information about the password and provides options to perform actions such as editing, copying, and disabling.

## Requirements

* An active password. More information in [How to manage passwords using the MySafe extension](/v4/docs/mysafe-extension-manage-passwords).

## Path to access

1. Click the **MySafe** extension in the browser's toolbar.  
2. In the bottom menu, click **MySafe**.  
3. Under **Passwords**, click the desired password.
---

## Compact password card

The following table displays the information and actions available for the password card in its compact format.

| Item | Type | Description |
| ----- | ----- | ----- |
| **Name** | Text | Password identification name. |
| **Go to URL** | Button | Directs to the website where the password is registered. |
| **Fill credentials** | Button | Searches for login fields on the current site and fills them with the selected password's details. If login fields cannot be identified, the error message “**Could not fill login fields**” is displayed. |
| **Copy password** | Button | Copies the password to the clipboard. |

## Expanded password card

The following table displays the information and actions available for the password card in its expanded format.

| Item | Type | Description |
| ----- | ----- | ----- |
| **URL** | Text | Website address where the password is used. |
| **Username** | Text | Username associated with the password. |
| **Tags** | Text | Keywords associated with the password. |
| **TOTP** | Text | Temporary token linked to the password, used as an additional factor in multi-factor authentication (MFA). A **timer** icon shows the countdown for generating a new TOTP, which occurs automatically every 30 seconds.  <br>**Note**: available if a secret key was configured during the password's creation or editing. |
| **Copy username** | Button | Copies the username associated with the password to the clipboard. |
| **Copy password** | Button | Copies the password to the clipboard. |
| **Copy TOTP** | Button | Copies the generated token to the clipboard.  <br>**Note**: available if a secret key was provided when adding or editing the password. |
| **Edit password** | Button | Opens the **Edit Password** screen.  <br>**Note**: available if the user has permission to edit the password. |
| **Disable** | Button | Opens a pop-up confirmation to disable the password, with the **Yes** or **No** options. |

## Add/Edit password screens

The **Add Password** and **Edit Password** screens share the same fields.

### Path to access the Add password screen

1. Click the **MySafe** extension in the browser's toolbar.  
2. In the bottom menu, click **Add item**.

### Path to access the Edit password screen

1. Click the **MySafe** extension in the browser's toolbar.  
2. In the bottom menu, click **MySafe**.  
3. Under **Passwords**, click the desired password card and select **Edit**.

---

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name**\* | Text field | Yes | Password identification name. |
| **URL**\* | Text field | Yes | Website address where the password will be used.  <br>**Note:** this field is automatically filled in with the address of the website accessed during password creation. |
| **Username**\* | Text field | Yes | Username associated with the password. |
| **Password**\* | Text field | Yes | The password being created or edited. |
| **Show** | Button | No | Shows or hides the entered password. |
| **Generate**  | Button | No | Automatically generates a password based on defined criteria. |
| **Configure** | Button | No | Sets the following password criteria: *Length, Numbers, Symbols, Uppercase*, and *Lowercase* letters. |
| **Password strength** | Progress bar | No | Indicates the password's strength.  <br>- **Very strong password**: four green bars. <br>- **Strong password**: three green bars. <br>- **Medium password**: two yellow bars. <br>- **Weak password**: one red bar. |
| **Secret** | Text field | No | Secret key used to generate a temporary token (TOTP \- Time-based One-Time Password) for accounts with multi-factor authentication.  <br>**Note**: the secret key must be at least 10 characters long and include uppercase letters A-Z and numbers 2-7. |
| **Show/Hide** | Button | No | Shows or hides the secret key. |
| **QR code** | Button | No | Scans the secret key generated from a QR code. |
| **Tags** | Text field | No | Keywords to categorize the password. |
| **Note** | Text field | No | General information about the password. |


