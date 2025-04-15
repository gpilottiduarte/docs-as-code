# How to log in using the MySafe extension

The **MySafe** extension offers convenience and security by automatically filling in login fields on websites with your saved credentials. This eliminates the need to memorize or store passwords in unsafe locations like spreadsheets or notepads.

This document provides a step-by-step guide for logging in to websites using the **MySafe** extension.

## Requirements

* The **MySafe** extension installed, activated and pinned on the browser toolbar. More information in [First steps with the MySafe extension](/v4/docs/mysafe-extension-first-steps).
* The option **Automatically fill login fields?** enabled in the **Settings** screen. More information in [Settings](/v4/docs/mysafe-extension-settings).

---

## Use auto-fill

If you already have saved passwords in **MySafe**, follow the steps below:

1. Access the desired website. Example: `https://github.com/`  
2. Wait for the **MySafe** extension to automatically fill the login fields.  
3. Proceed to log in.

## Select from multiple saved credentials for the same website

If you have multiple credentials saved in **MySafe** for the same website and wish to choose one, follow the steps below:

**Example:**  
You have two GitHub accounts, one personal `githubpersonal@email.com` and one for work `githubcorporate@company.com`, and want to log in with one of them.

1. Access the desired website’s login page. Example:  https://github.com/login  
2. Clear the login fields (**username** and **password**).  
3. Click on one of the login fields.  
4. Choose one of the options:  
   1. View the list of available credentials for the site. Example: githubpersonal@email.com and  `githubcorporate@company.com`.  
   2. Click on the desired credential. Example: `githubcorporate@company.com`.  
   3. Wait for the **MySafe** extension to automatically fill in the fields.  
   4. Proceed to login.  
5. Type keywords in one of the login fields. Example: type `company` in the **Username** field.  
   1. View all credentials that match the entered keyword.  
   2. Click on the desired credential. Example:  `githubcorporate@company.com`.  
   3. Wait for the **MySafe** extension to automatically fill in the fields.  
   4. Proceed to login.

:::(info) (Info)  
 By default, if multiple credentials are saved for the same website, the extension fills the login fields with the last credential used for the site.  
 :::

## Use the “Go to URL” option

If you want to access a website directly from the **MySafe** extension and auto-fill your credentials, follow the steps below:

1. In the extension’s bottom menu, click **MySafe**.  
2. In the password list, identify the desired password card or use the search bar.  
3. Click **Go to URL**.  
4. On the login page:   
   1. Wait for the fields to be auto-filled.  
   2. Or type keywords in one of the login fields to search among other credentials.  
5. Proceed to log in.

## Use the extension’s “Fill credentials” option

If you want to use a password other than the suggested one, follow the steps below:

**Example**:  
Use Google credentials to log in to GitHub.

1. Access the desired website’s login page. Example:  `https://github.com/login`  
2. In the extension’s bottom menu, click **MySafe**.  
3. In the passwords list, identify the desired password card or use the search bar.  
4. Click **Fill Credentials** and wait for the login fields to be populated with the selected password’s details.  
5. Proceed to log in.

:::(info) (Info)
**Multi-factor authentication**
For all the login types mentioned, if your account uses multi-factor authentication and you have configured the **secret key (TOTP)** in **MySafe**, follow these steps after entering your login information:
1. Open the **MySafe** extension.
2. Click on the card of the password used for login.
3. Copy the **TOTP** .
4. Paste it into the indicated field.
5. Proceed to log in.
:::


---

Do you still have questions? Reach out to the [Segura community](https://community.Segura.io/).
