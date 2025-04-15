# Shared items email

In this document, you’ll find detailed information regarding the email and screens where an item is shared with a person who does not have a **MySafe** account.

## Access email

When an item from **MySafe** is temporarily shared with a person who doesn’t have a **MySafe** account, that person receives an email notifying them of the share with the subject "**A new record has been shared with you**."

In the body of the email, the recipient will see a senhasegura box with the details of the shared item.

| Item                  | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| **Introduction**      | Introductory message informing the name of the person who shared the item.                              |
| **Name**              | Name of the shared item.                                                                                  |
| **Type**              | Type of the shared item. Possible options are **Password**, **Note**, **File**, and **API secret**.       |
| **Expiration date**   | Date and time when the link to access the item will expire. Formats `MM/DD/YYYY` and `HH:MM:SS`.          |
| **Maximum views**     | The maximum number of times the item can be accessed through the provided link until expiration.         |
| **Access now**        | Button that directs the recipient to the authentication screen.                                           |
| **Link**              | Alternative access link in case the **Access now** button doesn’t work.                                   |

---

## Email with authentication token

After clicking **Access now** or copying and pasting the link into their browser, the recipient will receive another email with the subject **MySafe - your authentication token**.

In the body of the email, the recipient will see a senhasegura box with the details of the access token.

| Item                  | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| **Introduction**      | Introductory message informing the authentication token expiration date.                                |
| **Authentication token** | 8-digit authentication token that must be copied and pasted into the authentication screen.            |

---

## Authentication screen

In possession of the **authentication token**, the user must paste it into the authentication screen, which contains the following information:

| Item                   | Description                                                                                             |
|------------------------|---------------------------------------------------------------------------------------------------------|
| **Token**              | Text box for entering the authentication token.                                                        |
| **Authentication token** | Text box for entering the 8-digit authentication token. If desired, the user can use the **Virtual keyboard** button to type the token. |
| **Didn’t receive it? Click here to resend** | Clickable text for resending the authentication token in case it wasn’t received. Once clicked, the text changes to "Didn’t receive it? Sent!" |
| **Enter**              | Button that directs to the screen with the details of the shared item.                                 |



## Shared password screen

When accessing a temporarily shared item of type **password**, the recipient will be directed to a screen displaying the following details:

| Item                  | Description                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| **Name**              | Located below **MySafe**, displays the name of the password.                                           |
| **Expiration time**   | Field that displays the date and time when access to the password will expire. Formats `MM/DD/YYYY` and `HH:MM:SS`. |
| **Remaining views**   | Field that displays the number of times the password can still be accessed through the provided link until it expires. |
| **Url**               | Field displaying the URL of the site where the password will be used, along with an external link icon that directs to the site. |
| **Username**          | Field displaying the name of the user associated with the credential, and the two sheets of paper icon that copies this information. |
| **Password**          | Field that displays the password. This information is sensitive. The eye icon reveals the password, and the two sheets of paper icon copies the password to the clipboard. |
| **Token**             | Field displaying the TOTP token associated with the password in case of a multi-factor authentication account, and a clock showing the token's validity. |
| **Notes**             | Field that displays general notes about the credential, along with an icon to view the notes on another screen and another icon to copy them to the clipboard. |



## Shared API secret screen

When accessing a temporarily shared item of type **API secret**, the recipient will be directed to a screen displaying the following details:

| Item                  | Description                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| **Name**              | Located below **MySafe**, displays the name of the API secret.                                         |
| **Expiration time**   | Field that displays the date and time when access to the API secret will expire. Formats `MM/DD/YYYY` and `HH:MM:SS`. |
| **Remaining views**   | Field that displays the number of times the API secret can still be accessed through the provided link until it expires. |
| **Url**               | Field that displays the URL of the website where the API secret will be used, along with an external link icon that directs to the website. |
| **Method**            | Field that displays the HTTP method in the API call.                                                   |
| **Client ID**         | Field that displays the Client ID and the two sheets of paper icon to copy the API secret to the clipboard. |
| **Client secret**     | Field that displays the Client secret. This information is sensitive. The eye icon reveals the content, and the two sheets of paper icon copies it to the clipboard. |
| **Notes**             | Field that displays general notes about the API secret, along with an icon to view the notes on another screen and another icon to copy them to the clipboard. |



## Shared file screen

When accessing a temporarily shared item of type **file**, the recipient will be directed to a screen displaying the following details:

| Item                  | Description                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| **Name**              | Located below **MySafe**, displays the name of the file.                                               |
| **Expiration time**   | Field that displays the date and time when access to the file will expire. Formats `MM/DD/YYYY` and `HH:MM:SS`. |
| **Remaining views**   | Field that displays the number of times the file can still be accessed through the provided link until it expires. |
| **Download**          | Field that displays the file's name and the download icon to download the file to the user’s device.     |
| **Notes**             | Field that displays general notes about the file, along with an icon to view the notes on another screen and another icon to copy them to the clipboard. |



## Shared note screen

When accessing a temporarily shared item of type **note**, the recipient will be directed to a screen displaying the following details:

| Item                  | Description                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| **Name**              | Located below **MySafe**, displays the name of the note.                                               |
| **Expiration time**   | Field that displays the date and time when access to the note will expire. Formats `MM/DD/YYYY` and `HH:MM:SS`. |
| **Remaining views**   | Field that displays the number of times the note can still be accessed through the provided link until it expires. |
| **Note**              | Field that displays the content of the note along with an icon to view the notes on another screen and another icon to copy them to the clipboard. |

