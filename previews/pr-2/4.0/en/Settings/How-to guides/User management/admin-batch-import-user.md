# How to batch import users

Batch Import allows you to quickly create a set of users by uploading a properly filled spreadsheet. This feature is useful for automating the management of large user bases.

Some important points about batch import:

* The import is based on a spreadsheet, according to the import file.  
* Imported spreadsheets are recorded in the system and can be recovered if necessary.  
* Users that do not exist will be created during the import.  
* Users who are already registered in Segura and are reimported will be updated.  
* The quickest way to undo an incorrect import is to correct the spreadsheet and import it again.  
* It is recommended not to import a file with more than a thousand items, as this action can consume many server resources and reduce its performance.

## **Import file**

To download the import template file, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.   
2. In the side menu, select **User Management \> Batch import.**  
3. In the top bar, click on **Import**.
4. To download the file:
    1.  In the **Add file** screen, click on **Template file** button to download the `import_users.xlsx` file.
5. To upload the file:
    1.  In the **Add file** screen you can click or drag the file to the **Drag and drop** section.

## **Filling out the template file**

To perform the import, it is necessary to correctly fill out the import spreadsheet. In the spreadsheet, you’ll find the following fields to fill in:

* **Name**: add the user's name.  
* **Username**: add the user's username.  
    *   **Note**: this field will indicate whether the user will be created or changed.  
* **Password**: add the user's password.  
    *   **Note**: if this field is not filled in, the password will not be updated.  
* **Department**: add the department linked to the user.  
    *   **Note**: if it doesn't exist, the department will be created  
* **E-mail**: add the user's e-mail address.  
* **Phone**: add the user's phone number.  
* **Active**: fill in **Yes** or **No** to inform whether the user is active or not.  
* **Ignore MFA**: fill in **Yes** or **No** to say whether you want to ignore multi-factor authentication.  
* **Roles**: add the permission that the user can execute.  
    *   **Note**: must be an existing role  
* **User group**: add the user group that the collaborator belongs to. 

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).