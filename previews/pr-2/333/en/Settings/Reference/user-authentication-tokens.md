# User authentication tokens

In this document, you’ll find all the information about the **User authentication tokens** section of senhasegura settings.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Multi-factor authentication \> User authentication tokens**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the **Schedule report** form. |

## Search filters

| Item | Descrição |
| :---- | :---- |
| **User** | Name of the user who owns the token |
| **Username** | Username of the token owner. |
| **Validated** | Drop-down menu that filters tokens by their validation status. Available options are **Yes** and **No**. |

## Report fields

* **Checkbox:** used for batch operations in the footer.  
* **User.**  
* **Username.**  
* **Set on**: displays the date when the token was set. The date is given in the format `DD/MM/YYYY and HH:MM`  
* **Validated**.  
* **Relay on IP**: trusted IP that waives the use of the token.   
* **Trust to**: maximum date for access without token. The date is given in the format `DD/MM/YYYY and HH:MM`  
* **Action:** in this column, you have the option:  
  *  **Delete token**: represented by the trash can icon, it deletes the user's token from senhasegura.