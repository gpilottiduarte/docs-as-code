# Passwords

In this document, you’ll find detailed information about **MySafe**’s **Passwords** page.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.  
2. In the side menu, select **Passwords**.

***
## **Top bar**

| Item | Description |
| ----- | ----- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Add password** | Represented by the plus sign, it opens the **[Add password](/v3-33/docs/mysafe-passwords-screen#addedit-password-screen)** screen. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## **Search fields**

| Item | Description |
| ----- | ----- |
| **ID** | Field that filters passwords by their unique identification code. |
| **Name** | Field that filters passwords by their name.  |
| **URL** | Field that filters passwords by the URL of the website where it is registered.  |
| **Username** | Field that filters passwords by the associated username.  |
| **Tags** | Field that filters passwords by associated keywords.  |
| **Shared** | Field that filters passwords by their sharing status. The available options are **Yes** and **No**. Click **Clear** to enable the **All** option. |
| **Owner** | Field that filters passwords by the name of the user who registered it.  |
| **Last use** | Field that filters passwords by the period during which the password was viewed. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar.  |
| **until** | Field that filters passwords by the period during which the password was viewed. Format `MM/DD/YYYY`. Use this field to enter the end date of the period. The downward arrow opens a calendar.  |
| **Enabled** | Field that filters passwords by their activation status. The available options are **Yes** and **No**. Click **Clear** to enable the **All** option. |

## **Report fields**

* **Checkbox**: used for batch actions.  
* **ID**.  
* **Name**.  
* **URL**.  
* **Username.**  
* **Tags**.  
* **Shared**.  
* **Owner**.  
* **Last use.**  
* **Enabled**.  
* **Acton**: in this column, you’ll find the following options:  
  * **View password:** represented by the key icon, it opens the **Password details** screen with all information about the password.  
  * **Three vertical dots icon:** opens a dropdown menu with the options: *Share, Edit, Disable*, and *[Information history](/v3-33/docs/mysafe-passwords-screen#password-history-information-screen)*.

::: (info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.  
:::

## **Bottom buttons**

* **Enable**: button used for batch activation.  
* **Disable**: button used for batch deactivation.  
* **Share**: button used for batch sharing.

## **Password details screen**  

In this section, you’ll find all the information about the **Password details** screen.

| Item | Description |
| ----- | ----- |
| **Name** | Name assigned to the password. |
| **URL** | URL of the website where the password is registered. |
| **Username** | Username associated with the credential. |
| **Token** | TOTP associated with the password for multi-factor authentication. |
| **Owner** | The user who registered the password. |
| **Last use** | The date and time when the password was last used. |
| **Tags** | Keywords associated with the password. |
| **Notes** | Observations about the password. |
| **View password** | Represented by the asterisk icon,  it opens the **View password** pop-up window. As a security measure, use the **Contrast** bar to view the password. |
| **Copy password** | Represented by the two sheets of paper icon, it copies the password to the user's clipboard. Once the password is copied, the button turns green and its label changes to “**Copied!**” for a few seconds. |

::: (warning) (Atenção)  
By clicking **Copy password**, the information will be added to the clipboard and other programs will be able to access it.

:::

#### **Users with access to information section**

| Item | Descrição |
| ----- | ----- |
| **Member** | Name of the **MySafe** user with access to the password. |
| **Can view?** | Indicates viewing permission for the password details. By default, whenever a password is shared, this column is marked with **Yes**. |
| **Can edit?** | Indicates editing permission for the password details. The available options are **Yes** and **No.** |

### **Add/Edit password screen**

In this section, you’ll find all the information about the **Add password** and **Edit password** screens, which have the same fields.

| Item | Description |
| ----- | ----- |
| **Name**\* | Field for entering a name for the password. |
| **Username**\* | Field for entering a username associated with the credential.  |
| **URL** | Field for entering the URL of the site where the credential will be used.  |
| **Password** | Field for entering the password being created or edited. The **eye** icon shows the password.  |
| **Generate a password** | Located next to the **Password** field, it generates a secure password for you.  |
| **Three vertical dots icon** | To the right of the **Generate a password** button, it opens a box to define password parameters. Each of the following options has a checkbox available: *Password length, Uppercase, Lowercase, Numbers*, and *Symbols*. The **Confirm** button saves the definitions selected. |
| **Password strength** | Represented by four horizontal lines, indicates the strength of the password. Four green lines indicate maximum strength, while one green line indicates minimum strength. |
| **Secret key (TOTP)** | The secret key used to generate a TOTP for accounts that require multi-factor authentication. |
| **Tags** | Keywords associated with the password. |
| **Notes** | Observations about the password. |
| **Eye icon** | Present only on the **Edit password screen**, an icon that shows information about who added the password and when, as well as who made the last change and when. |

::: (info) (Info)  
The items with an asterisk are mandatory.  
::: 

### **Password history information screen**

In this section, you’ll find all the information about the screen where you can view the version histories of a password.

## **Search fields**

| Item | Description |
| ----- | ----- |
| **Name or URL** | Field that filters passwords by their name or URL.  |
| **Author** | Field that filters passwords by the user who made a change. |
| **Version** | Field that filters passwords by their version change.  |
| **History date** | Field that filters passwords by the period during which the change was made. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar. |
| **until** | Field that filters passwords by the period during which the change was made. Format `MM/DD/YYYY`. Use this field to enter the end date of the period. The downward arrow opens a calendar. |

## **Report fields**

* **Name or URL**.  
* **Author**.  
* **Version**.  
* **History date.**  
* **Action**: in this column, you access  
  * **View password**: represented by the magnifying glass icon, it opens the **[Password details](/v3-33/docs/mysafe-passwords-screen#password-details-screen)** screen.

::: (info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.  
:::
