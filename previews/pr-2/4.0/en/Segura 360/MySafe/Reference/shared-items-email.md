# Shared items email

This document provides information about the email and screens where an item is shared with a person who does not have a MySafe account.  

---

## Requirements
* Be the recipient of an item shared by a **MySafe** user.  

---

## Access email
When a MySafe item is temporarily shared with a person who does not have a **MySafe** account, that person receives an email notification with the subject line "**A new piece of information has been shared with you.**"  
In the body of the email, the recipient will see a Segura text box with the following shared item details:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Introduction**    | Introductory message informing the name of the person who shared the new item.                      |  
| **Name**            | Name of the shared item.                                                                           |  
| **Type**            | Type of the shared item. Options include *Password, Note, File*, and *API secret*.                      |  
| **Expiration date** | Date and time when the link to access the item will expire.                                         |  
| **Maximum views**   | Maximum number of times the item can be accessed through the provided link before expiration.       |  
| **Access now**      | Button that redirects the recipient to the authentication screen.                                   |  
| **Link**            | Alternative access link in case the **Access now** button does not work.                             |  



## Authentication token email 
After clicking on **Access now** or copying and pasting the alternative link into a browser, the recipient will receive another email with the subject line "**MySafe - Your authentication token.**"  
In the body of the email, the recipient will see a Segura text box with the following token access details:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Introduction**    | Introductory message informing the validity of the authentication token.                            |  
| **Authentication token** | 8-digit authentication token to be copied and pasted into the authentication screen.            |  



## Authentication screen  
Using the authentication token, the recipient must paste it into the authentication screen, which contains the following information:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Authentication token** | Text box for entering the 8-digit authentication token. Use the Virtual Keyboard button if desired. |  
| **Didn't receive it? Click here to resend** | Clickable text to resend the authentication token if not received. Once clicked, the text changes to "**Didn't receive it? Sent!**" |  
| **Enter**| Button that redirects to the screen with details of the shared item.                                |  



## Shared password screen 
When accessing a temporarily shared item of type **Password**, the recipient will see a screen displaying the following details:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Name**            | Displayed below **MySafe**, it shows the name of the password.                                        |  
| **Expiration time** | Displays the date and time when access to the password will expire.                                 |  
| **Remaining views** | Displays the number of times the password can still be accessed through the provided link before expiration. |  
| **URL**             | Displays the URL of the site where the password will be used. Click the **External link** button to access the site. |  
| **Username**        | Displays the username associated with the password and a **Copy** button to copy the information to the clipboard. |  
| **Password**        | Displays the password. Sensitive information. Click **Show** to view it. Click **Copy** to copy the password to the clipboard. |  
| **Token**           | Displays the TOTP token associated with the password in case of an account with multi-factor authentication and a clock showing the token's remaining time. By default, the token updates every 30 seconds. |  
| **Notes**           | Displays general notes about the password. Click the **External link** button to open the notes in another tab. Click **Copy** to copy the information to the clipboard. |  



## Shared API secret screen
When accessing a temporarily shared item of type **API secret**, the recipient will see a screen displaying the following details:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Name**            | Displayed below **MySafe**, it shows the name of the API secret.                                      |  
| **Expiration time** | Displays the date and time when access to the API secret will expire.                               |  
| **Remaining views** | Displays the number of times the API secret can still be accessed through the provided link before expiration. |  
| **URL**             | Displays the URL of the site where the API secret will be used. Click the "External link" button to access the application where the API Secret is registered. |  
| **Method**          | Displays the HTTP method for the API call.                                                         |  
| **Client ID**       | Displays the `Client ID`. Click **Copy** to copy the information to the clipboard.                    |  
| **Client Secret**   | Displays the `Client Secret`. Sensitive information. Click **Show** to view it. Click **Copy** to copy it to the clipboard. |  
| **Notes**           | Displays general notes about the API secret. Click the **External link** button to open the notes in another tab. Click **Copy** to copy the information to the clipboard. |  



## Shared file screen  
When accessing a temporarily shared item of type **file**, the recipient will see a screen displaying the following details:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Name**            | Displayed below **MySafe**, it shows the name of the file.                                            |  
| **Expiration time** | Displays the date and time when access to the file will expire.                                     |  
| **Remaining views** | Displays the number of times the file can still be accessed through the provided link before expiration. |  
| **Download**        | Displays the file name and a **Download** button to save the file to the device.                    |  
| **Notes**           | Displays general notes about the file. Click the **External link** button to open the notes in another tab. Click **Copy** to copy the information to the clipboard. |  



## Shared note screen  
When accessing a temporarily shared item of type **note**, the recipient will see a screen displaying the following details:  

| **Item**             | **Description**                                                                                     |  
|----------------------|-----------------------------------------------------------------------------------------------------|  
| **Name**            | Displayed below **MySafe**, it shows the name of the note.                                            |  
| **Expiration time** | Displays the date and time when access to the note will expire.                                     |  
| **Remaining views** | Displays the number of times the note can still be accessed through the provided link before expiration. |  
| **Note**            | Displays the note's content. Click the **External link** button to open the note in another tab. Click **Copy** to copy the information to the clipboard. |  