# Batch import users

Batch Import is a feature to quickly create a set of users by uploading a spreadsheet.

Important points about importing batches:

- The import is based on an Excel spreadsheet.
- Imported spreadsheets are trademarks in the system and can be recovered.
- Users that do not exist will be created on import.
- Users that are already registered in senhasegura will be updated.
- The fastest way to undo an import is to correct the spreadsheet and import it again.
- It is not recommended to import a spreadsheet with more than a thousand items to prevent excessive consume of the server resources.

## **Template**

Download the Excel template file that is available on the import screen:

1. Access **Settings ➔ User management ➔ Batch import**.
2. Click the `⁝` icon and select **+ Import.**
3. Under **Add file**, click **Template file.**

### **How to fill in the template file**

To sucessfully accomplish the import, it is necessary to understand what information must be entered in the spreadsheet.

:::(Info) (Info)
It is important to check if the entities are correct, otherwise, unnecessary user registration may occur.

:::

Populate the worksheet with the following values:

- **Name**: enter the user's name.
- **Username**: enter a username for login.
- **Password:** enter the password.
If not filled in, the password will not be updated.
- **Department**: enter the department in which the user works.
- **E-mail**: enter an e-mail for the access link to be sent.
- **Telephone**: enter a phone number for the SMS to be sent.
- **Enable**: choose **YES** or **NO** to inform whether the user is active.
- **Bypass MFA**: choose **YES** or **NO**  to enable bypass multi-factor authentication.
- **Roles**: enter the permissions the user can perform.
- **User Group**: enter the user group that the collaborator belongs to.

## **Batch import scenarios**

When importing the file, the following scenarios will be considered:

- **Users not registered:** the records will be registered with the information in the worksheet.
- **Users already registered:** the records will be updated with the information filled in the worksheet

Once completed, return to the home screen and import the spreadsheet.