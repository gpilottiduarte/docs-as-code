# LDAP/AD group synchronization

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Group synchronization**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Item**  | **Description** |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **New** | Represented by the plus icon, it opens the LDAP/AD group. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |

## Search fields

| Item | Description |
| :---- | :---- |
| **Name** | Name of the LDAP/AD group. |
| **Server** | LDAP/AD server. |
| **DN** | In this context, DN refers to Distinguished Name. A DN is a string that uniquely identifies an object in the AD directory, specifying the object's full path, including the object's name and location in the directory's hierarchical structure. Enter the string required to identify the group you are looking for. |
| **Active synchronization** | Drop-down menu that filters according to synchronization status. Choose **All** to apply no filter; **Yes** to filter records with active synchronization and **No** to filter records that do not have active synchronization. |
| **Enabled** | Drop-down menu that filters according to the group's status in senhasegura. It can be **Yes** or **No**. |

## Report fields

In the list of synchronizations, you have the following fields:

* **ID.**  
* **Name.**  
* **Server.**  
* **DN.**  
* **Department.**  
* **Last synchronization:** indicates when the last successful synchronization took place.  
* **Synchronization error:** indicates when the last synchronization error occurred.  
* **Active synchronization.**  
* **Enabled.**  
* In the **Action** column, you have two options:  
  * **Edit group: r**epresented by the pencil and paper icon, opens the **LDAP/AD Groups** window in edit mode**.**  
    * When you click on the button represented by the three vertical dots, the drop-down menu shows three options:  
    * **Users:** opens the **Synchronized Users** form.  
    * **Synchronization log:** opens the **LDAP/AD Group Synchronization Logs** form.  
    * **Synchronization test:** opens the **LDAP/AD Group** form to test synchronization.

## LDAP/AD group window

By selecting the **New group** option, accessed via **View actions \> New group**, or the **Change group** option, accessed via **Action \> Change group**, the **AD/LDAP Group** window will be displayed. This window contains the following fields.

### Settings tab

| Item | Description |
| :---- | :---- |
| **Name** | Text field where you fill in the name of the group. |
| **Server** | Drop-down menu to choose the server on which the search will be performed. |
| **User groups** | Drop-down menu for choosing the user group to which the current group will belong. **Note**: this field is responsible for defining the groups defined for synchronized users. |
| **Enabled** | Radio button for choosing the status of the group when it is created. |
| **Synchronization** | Radio button for choosing whether the group can be automatically synchronized. |
| **DN** | Text field where you must fill in the base DN. |
| **AD user attribute** | Text field for entering the attributes associated with the username. |
| **AD user name attribute** | Text field for linking the user's real name to the respective field in Active Directory. |
| **AD Search** | Text field where you fill in the group's search parameters. |

### Domum tab

| Item | Description |
| :---- | :---- |
| **Enable synchronization** | Radio button to choose whether you want to enable synchronization with senhasegura Domum. |
| **Type** | Radio button for you to choose which type of senhasegura Domum user will be allowed in the group. |
| **Group** | Drop-down menu for choosing the group in senhasegura Domum to which the LDAP/AD group will belong. |

### Roles tab

| Item | Description |
| :---- | :---- |
| **Sum icon** | Open the Role modal. |
| **Role** | Name of the paper chosen. |
| **Built-in** | Text field used to indicate whether the paper is one of the standards provided by senhasegura or whether it is a custom paper created by a user. |
| **Description** | Description of the paper chosen. |

## LDAP/AD Group for synchronization test window

By selecting the **Synchronization test** option in the **Action** column from the **LDAP/AD group synchronization** report, the **LDAP/AD Group** window will open to test the synchronization. This window has the following fields:

| Item | Description |
| :---- | :---- |
| **DN** | Field for entering the base DN parameter that will be tested for synchronization. |
| **Raw View** | Checkbox. If you check this box, the reply will be sent in plain text. |
| **User filter** | Field for entering the user filter parameter |