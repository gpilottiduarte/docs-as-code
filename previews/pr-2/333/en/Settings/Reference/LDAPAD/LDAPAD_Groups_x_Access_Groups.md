# LDAP/AD Groups x Access Groups

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> AD/LDAP Groups x Access Groups**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the **Schedule report** form. |

## Search fields

| Item | Description |
| :---- | :---- |
| **Name** | Name of the group in senhasegura according to the name that was registered. |
| **Server** | LDAP/AD server. Refers to the group that was previously registered and chosen. |
| **User groups** | Group registered by the user on the server that will serve as a bridge to the senhasegura groups. |
| **Access groups (Approver)** | Displays which groups are configured as approvers. |
| **Access groups (User)** | Displays which groups are configured as users. |
| **Enabled synchronization** | Drop-down menu to filter by synchronization status. The values can be **All** to display all groups, regardless of synchronization status; **Yes** to display only groups with active synchronization and **No** to display all groups with non-active synchronization. |
| **Enabled** | Drop-down menu to filter by group status. Can be **Yes** or **No**. |

## Report field

In the list you have the following fields:

* **ID.**  
* **Name.**  
* **Server.**  
* **User group.**  
* **Last synchronization:**  
* **Active synchronization.**  
* **Access groups (Approver).**  
* **Access groups (User).**  
* **Enabled.**  
* In the **Action** column, you have two options:  
  * **Edit group**: represented by the pencil and paper icon, opens the **LDAP/AD Groups** window in edit mode.
  * When you click on the button represented by the three vertical dots, the drop-down menu shows three options:  
    * **Users:** opens the **Synchronized Users** form.
    * **Synchronization log:** opens the **LDAP/AD Group Synchronization Logs** form.
    * **Synchronization test:** opens the **LDAP/AD Group** form to test synchronization.

For a reference on the **Users**, **Synchronization Log** and **Synchronization Test** windows, access the document [Group synchronization log](/v3-33/docs/group-synchronization-log).