# First steps with MySafe web

Welcome to **MySafe**, the corporate password manager by Segura that allows you to securely store and manage your information.

This document provides a step-by-step guide to start using **MySafe** web for storing and managing corporate passwords, whether personal or team-based, such as credentials for your corporate email or the company’s social media accounts. Additionally, it offers guidance on how to use saved passwords to access websites and fill in login fields practically and securely, eliminating the need to memorize or expose confidential information.

**MySafe** also includes a browser extension and the Segura mobile app integrated with **MySafe**, enabling you to log in automatically to websites, apps or computer programs securely and efficiently. More information in [How to log in using the MySafe extension](/v4/docs/how-to-log-in-using-the-mysafe-extension). and How to log in using MySafe in the Segura app

## Requirements

* Connection to the Segura server via local network or VPN.  
* Initial username and password provided by the system administrator. If you encounter issues with the URL or your initial access credentials, consult the system administrator.

---
## Access MySafe web for the first time

1. Access the Segura URL provided by the administrator.  
2. On the login screen, enter your initial username and password.  
3. On your first login, change your password as prompted.  
4. To enhance your account security, enable multi-factor authentication, which will require a temporary token for every access.   
5. On Segura,  in the navigation bar, hover over the **Products menu** and select **MySafe**.

**Result:** you’ve accessed **MySafe** web and securely set up your account.

## Manage passwords in MySafe web

Now that you’ve configured your account and have access to **MySafe**, you can begin managing your passwords.

### Import passwords from LastPass or Keeper to MySafe

If you have passwords saved in another manager, such as LastPass or Keeper, import them to **MySafe**:

1. Access LastPass or Keeper and follow the instructions to export your passwords in `.csv` format.  
2. Access **MySafe \> Batch import**.  
3. Click **Import**.  
4. Select **LastPass** or **Keeper**.  
5. Upload the exported `.csv` file.  
6. Click **Save**.

::: (warning) (Attention)
Permanently delete the downloaded file from your device after the import to prevent third parties from accessing your passwords.
:::

**Result:** you’ve imported your passwords into **MySafe** and can use them securely.


### Import passwords from other managers or locations (such as spreadsheets or notes)

If you have passwords stored in another manager or locations like an Excel spreadsheet or notepad, adapt the information to the format accepted by **MySafe** before importing:

1. Access **MySafe \> Batch import**.  
2. Click **Import**.  
3. Select **Password**.  
4. On the **Add new batch import** screen, click **Template file** to download the spreadsheet in the `.xlsx` format accepted by **MySafe**.  
5. Fill in the spreadsheet as shown in the following example.

**Example:**  
If your notes or exported spreadsheet has password details like this:

| Website | User | Password |
| ----- | :---: | ----- |
| https://www.instagram.com/accounts/login | marketing@email.com | dw5d78D\*$AFJ |

In the **MySafe** template spreadsheet, input the information in the corresponding columns:

| Name\* | URL | Username\* | Password\* |
| ----- | ----- | ----- | ----- |
| \[Company’s\] Instagram  | `https://www.instagram.com/accounts/login` | marketing@email.com | dw5d78D\*$AFJ |

Add optional details such as **Tags, Notes, Users**, and **Groups** as needed. More information about these fields in [How to manage passwords on MySafe web](/v4/docs/how-to-manage-passwords-on-mysafe-web).

6. After completing the spreadsheet with the required fields **(Name, Username**, and **Password**), save it in an accessible location on your computer.  
7. Return to the **Add new batch import** screen.  
8. Upload the `.xlsx` template in the upload field.  
9. Click **Save**.

::: (warning) (Attention)
Permanently delete the file from your device after the import to prevent third parties from accessing your passwords.
:::
**Result:** you’ve completed the `.xlsx` template and securely imported your passwords into **MySafe**.

## Add password

You can manually add passwords to **MySafe**:

1. On the **MySafe web Home** screen, click **Add password**.  
2. Fill in the required fields:  
   * **Name**\*: enter a name to identify the password. Example: **Corporate email**.  
   * **Username**\*: enter the username associated with the account. Example: **davidmiller@company.com**.  
   * **Password**\*: enter the password. More information in How to generate safe passwords with **MySafe**.  
   * **URL**: enter the website address. Example: **https://email.empresa.com/account/login**  
3. Click **Save** to store the information securely.

**Result:** you’ve manually added a password to **MySafe** and can use it securely.

## Log in using MySafe

You can access websites, apps, or computer programs using login information stored in **MySafe** in three ways:

1. **Use the MySafe extension**

   The **MySafe** browser extension allows you to log in practically and securely through saved and auto-filled credentials. More information in [How to log in using the MySafe extension](/v4/docs/how-to-log-in-using-the-mysafe-extension).

2. **Use MySafe in the Segura mobile app**

   When accessing **MySafe** through the Segura mobile app, you can log in practically and securely using saved and auto-filled credentials. More information in How to log in using MySafe in the Segura app.  
   

3. **Use MySafe web**

If you prefer using **MySafe** web:

1. Access **MySafe \> Passwords**.  
2. Find the desired password or use the search filters. Example: Enter **Corporate Email** in the **Name** filter.  
3. Click **Actions \> View Password**.  
4. On the **Password Details** screen:  
   1. In the **URL** field, click **Go to URL** to open the site, app, or program in a new tab.  
   2. Copy the **Username** and paste it into the corresponding login field.  
   3. Click **Copy Password** and paste it into the login field.  
5. Complete the login process.

**Result:** you’ve securely logged in using a password stored in **MySafe**.

### Next steps

Explore other features available to maximize productivity and secure your data:

* **Share passwords**: send passwords to other users. More information in How to manage passwords using MySafe web and How to manage the external share of an item.  
* **Connect additional devices**: use the **MySafe** browser extension or Segura mobile app to manage your passwords and autofill login fields. More information in [How to log in using the MySafe extension](/v4/docs/how-to-log-in-using-the-mysafe-extension). and How to log in using MySafe in the Segura app.  
* **Manage notes**: add and manage important notes securely. More information in How to manage notes in MySafe web.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
