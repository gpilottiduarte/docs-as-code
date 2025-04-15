# How to manage passwords using the MySafe extension

This document provides a step-by-step guide on how to add, edit, view, and copy a password’s information in **MySafe** using the **MySafe** extension. Additionally, it provides instructions on using the **MySafe** extension to seamlessly log in to websites using the credentials stored in **MySafe**.

## Requirements

- The **MySafe** extension installed and activated in your browser. For more information, access the document on [First steps](/v3-33/docs/mysafe-extension-first-steps).

:::(error) (Alert!)
The automatic detection of username and password fields by the **MySafe extension** may not be compatible with all websites, as we rely on the detection standards for these fields. Due to the security mechanisms of third-party applications, we cannot guarantee their functionality in all situations. However, we are continually improving the extension to expand support for a greater number of websites.
:::

---

## Add a password by logging in to a website (automatically)

## Requirements

- The **Enable automatic password saving suggestions** option enabled on the **Settings** screen. Access the [Settings](/v3-33/docs/mysafe-extension-settings) document for more information.

---
Use this method if you know your login credentials. When logging in to the website, the **MySafe extension** will prompt you to add the password automatically. Follow the steps below:

1. In your browser, navigate to the website.
2. Enter your username and password for the website and proceed to log in.
3. After logging in, the **MySafe extension** will prompt you with the question, "**Add a new password to MySafe?**".
4. Click **Yes** to add the password to the vault.
5. To view the added passwords in the **MySafe** extension, click **MySafe**, represented by the key icon in the bottom bar of the extension. Then, locate them within the **Passwords** section.

## Add a password manually via the MySafe extension

To manually add a password to the **MySafe** extension vault, follow the steps below:

1. In the bottom menu of the **MySafe extension**, click **New item**, represented by the plus icon.
2. On the **New password** screen, fill in:
   - **Name***: enter a name for the password.
   - **Url***: enter the URL of the website where the credentials will be used.
   - **Username***: enter the credential’s username.
   - **Password**: enter the credential’s password. Click the eye icon to view the password being typed. Click the refresh icon so that **senhasegura** automatically generates a secure password for you.
   - **Secret key**: if your account is configured to use multi-factor authentication, enter the secret key used to generate the TOTP (Time-based One-Time Password) or click the QR code icon to read the secret key from a QR code on the screen.
   ::: (info) (Info)
   To ensure the feature works correctly, please make sure your device's clock is synchronized with the correct time. Time deviations may affect the generation and validation of the TOTP.
   :::
   ::: (warning) (Attention)
   The secret must contain at least 10 characters and be base32 encoded, that is, it must include only capital letters from A to Z, numbers from 2 to 7, and the character =.
   :::
   - **Tags**: enter keywords associated with the password.
   - **Note**: enter observations about the password.
   :::(Info) (Info)
   The items with an asterisk are mandatory.
   :::

3. Click **Submit**. The message “Password created” confirms the action.
4. To view the added passwords in the **MySafe** extension, click **MySafe**, represented by the key icon in the bottom bar of the extension. Then, locate them within the **Passwords** section.

## Edit a password

To edit a password stored in **MySafe** via the extension, follow the steps below:

1. In the bottom menu of the **MySafe extension**, click **MySafe**, represented by the key icon.
2. Within the **Passwords** section, locate the card of the password you want to edit, or click **Search in vault**, represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click on the password card to expand it.
4. Click **Edit password**, represented by the paper and pencil icon.
5. On the **Edit password** screen, make the necessary changes.
   ::: (Info) (Info)
   As the secret key used to generate the TOTP for multi-factor authentication is considered sensitive information, it isn’t displayed when editing a password’s information. Leave the field empty to keep the previous value or enter a new value to edit it.
   :::

6. Click **Submit**. The message “**Password updated**” confirms the action.

## View a password’s details

To view the details of a password stored in **MySafe** via the extension, follow the steps below:

1. In the bottom menu of the **MySafe** extension, click **MySafe**, represented by the key icon.
2. Within the **Passwords** section, locate the card of the password you want to view, or click **Search in vault**, represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click the password card to expand it and view details such as its **Name, Url, Username, Token, Tags**, and the action buttons to **Copy username**, **Copy password**, and **Edit password**.
4. Click the expanded card to return it to its compact format.

## Copy a password and username

To copy the password and username of your credentials stored in **MySafe** via the extension, follow the steps below:

1. In the bottom menu of the **MySafe** extension, click **MySafe**, represented by the key icon.
2. Within the **Passwords** section, locate the card containing the password whose information you want to copy. Alternatively, click **Search in vault**, represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click the password card to expand it.
4. Click **Copy username**, represented by the two sheets of paper icon.
5. Click **Copy password**, represented by the two sheets of paper icon.
6. The message “**Copied**” confirms both actions.
   ::: (warning) (Attention)
   Clicking **Copy password** and **Copy username** adds the information to your clipboard, allowing other programs to access it.
   :::

## Log in to a website using the MySafe extension

To log in to a website using the credentials stored in **MySafe** via the extension, follow the steps below:

1. In the bottom menu of the **MySafe** extension, click **MySafe**, represented by the key icon.
2. Within the **Passwords** section, locate the card of the password whose credentials you want to use. Alternatively, click **Search in vault**, represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click **Login**, represented by the login icon. This will fill the login fields in the current webpage with the respective credential data.
   ::: (Info) (Info)
   The **Go to URL** button, on the left of the **Login** button, takes you to the URL registered in the selected password card but doesn’t perform the automatic login by itself.

   If the **Automatically fill login fields** setting is enabled, it will be applied when accessing the website. Otherwise, the user will have two options:
   - Manually fill in their credentials on the website.
   - Return to the password manager interface and click the **Login** button on the desired credential.
   :::

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}. 

