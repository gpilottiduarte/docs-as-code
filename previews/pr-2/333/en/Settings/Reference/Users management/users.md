# Users

In this document, you’ll find all the information about the **Users** report, which displays information about users registered in senhasegura.

## **Access path**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings.**  
2. In the side menu, select **User Management \> Users.**

## **Top bar**

| Item | Description |
| ----- | ----- |
| **Show filters** | Represented by the magnifying glass icon, shows or hides the search fields present on the screen. |
| **Refresh** | Represented by the counterclockwise arrow icon, refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, displays a drop-down menu with possible actions for the page. |
| **New** | Represented by the plus icon, opens the **User** screen that allows the registration of new users. |
| **Print report** | Represented by the printer icon, opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, downloads the report. |
| **Schedule report** | Represented by the clock icon, opens the **Schedule report** form. |

## **Search fields**

| Item | Description |
| ----- | ----- |
| **ID** | Text field. Filters by the user's registration code in senhasegura. |
| **Name** | Text field. Filters by the user's name in senhasegura. |
| **Username** | Text field. Filters by the user's username in senhasegura. |
| **Department** | Drop-down menu. Allows you to select the departments registered in senhasegura to filter them. |
| **E-mail** | Text field. Filters by the user's email address. |
| **Creation type** | Drop-down menu. Allows you to select the user's creation type to filter them. |
| **Enabled** | Drop-down menu. Allows you to select the user's status in senhasegura to filter them. Can be **Yes** or **No**. |

## **Report fields**

* **ID.**  
* **Name.**  
* **Username.**  
* **E-mail.**  
* **Custom code.**  
* **Creation type.**  
* **Created in:** displays the user's creation date in the `DD/MM/YYYY HH:MM` format   
* **Last login:** displays the date of the user's last login in the `DD/MM/YYYY HH:MM` format   
* **Enabled.**  
* In the **Action** column, you have two options:  
  * **Edit**: represented by the pencil and paper icon, opens the **User** window.  
  * By clicking on the three vertical dots, you have two options:  
    * **History**: represented by the clock icon, opens the **User history** window.  
    * **Forget user**: represented by the **X** icon, forgets the user.

## **User Window**

The **User** window consists of three tabs and is used for registering new users and changing their data.

### **Settings Tab**

| Item | Description |
| ----- | ----- |
| **Name\*** | Text field. User's name in senhasegura. Example: `Test`. |
| **Username\*** | Text field. User's username in senhasegura. Example: `testsenhasegura`. |
| **Password** | Text field. User's password in senhasegura. By default, this field will be disabled. |
| **Set current password** | Checkbox. By clicking this box, the **Password** field will be enabled, and you can set the user's password. |
| **Show password** | Checkbox. Displays the user's password. |
| **Generate a password** | Link. Clicking this link generates a random password that is inserted into the user's **Password** field. |
| **Department** | Drop-down menu. Allows you to select a department to link the user to. |
| **E-mail** | Text field. User's email address. Example: `test@test.com`. |
| **Telephone** | Text field. User's phone number. Example: `+55 51 123456789`. |
| **Status** | *Radio button*. User's status in senhasegura. Can be **Active** or **Inactive**. |
| **Ignore multi-factor authentication?** | *Radio button*. Selects whether the user will ignore multi-factor authentication or not. **Note**: This option is only displayed if the edited user is not the logged-in user |
| **Add \+** | Button that allows adding a drop-down menu for selecting the User group to which the user will belong. It's possible to register more than one user group. |
| **Trash can icon** | Deletes the selected user group. |

### **Roles Tab**

In the **Roles** tab, you find the button to add roles, represented by the plus sign next to the word **Roles**. Clicking on the plus sign opens the **Roles** modal.

## **Roles**

| Item | Description |
| :---- | :---- |
| **Trash can icon** | Deletes the role. |
| **Role** | Name of the role in senhasegura. |
| **Built-in** | Indicates if the role is one of the default installation roles of senhasegura. Can be **Yes** or **No**. |
| **Description** | Brief description of the role's functionality in senhasegura. |

## **Roles Modal**

**Search fields**

| Item | Description |
| :---- | :---- |
| **Role** | Text field. Filters by the role name in senhasegura. |
| **Built-in** | Text field. |

**Report fields**

| Item | Description |
| :---- | :---- |
| **Role** | Name of the role in senhasegura. |
| **Built-in** | Indicates if the role is one of the default installation roles of senhasegura. Can be **Yes** or **No**. |
| **Description** | Brief description of the role's functionality in senhasegura. |

### **Access Group Tab**

The **Access Group** tab is divided according to the modules. Each module comprises a session of the tab composed of checkboxes that refer to the access groups registered in senhasegura. In this tab, the access groups registered in senhasegura will be presented.

| Item | Description |
| :---- | :---- |
| **Title** | Each module is presented separately, with its name in bold. |
| **Checkboxes** | Selects the access group to which the user will be part of. It can be more than one. Each access group is presented below the module title and according to the name registered in senhasegura. |

