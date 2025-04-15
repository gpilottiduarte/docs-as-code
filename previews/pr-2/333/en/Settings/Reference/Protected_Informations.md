# Protected Informations

In this document, you'll find all the information about the **Protected Informations** report, which displays information about the protected personal information contained in senhasegura.

:::(error) (Attention\!) 
This feature has been discontinued as of senhasegura version 3.26. Use **MySafe** to add and share your personal information. 
:::

## **Access Path**

1. In senhasegura, in the upper left corner, click on the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Protected Informations**.

## **Top Bar**

| Item | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, displays or hides the search fields present on the screen. |
| **Refresh** | Represented by the counterclockwise arrow icon, refreshes the page. |
| **Show actions** | Represented by the three vertical dots icon, displays a dropdown menu with possible actions for the page. |
| **Print report** | Represented by the printer icon, opens a new page to print the report. |
| **Export CSV** | Represented by the paper sheet icon, downloads the report. |
| **Schedule report** | Represented by the clock icon, opens the **Schedule report**form. |

## **Search Fields**

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters by the protected information code as registered in senhasegura. |
| **Type** | Drop-down menu. Filters according to the type of protected information. Can be **Access Credential** or **Digital Certificate**. |
| **Name** | Text field. Filters by the name of the protected information as registered in senhasegura. |
| **Owner** | Text field. Filters by the name of the user who owns the protected information. |
| **Integrity** | Drop-down menu. Filters according to the integrity of the protected information. Can be *Empty*, *Corrupted*, or *Intact*. |
| **Last backup** | Date field. Filters according to the date of the last backup performed. This field will be the initial date of the filter. |
| **until** | Date field. Filters according to the date of the last backup performed. This field will be the final date of the filter. |
| **Status** | Dropdown menu. Filters according to the state of the protected information in senhasegura. Can be **Enabled** or **Disabled**. |

## **Report Fields**

* **ID.**  
* **Type.**  
* **Name.**  
* **Owner.**  
* **Category**: indicates the category in which the privileged information was registered. Can be **Shared** or **Personal**.  
* **Created in:** indicates the date and time the protected information was created. It is presented in the format `DD/MM/YYYY HH:MM:SS`  
* **Last change**: indicates the date and time the protected information was last modified. It is presented in the format `DD/MM/YYYY HH:MM:SS`  
* **Last backup:** indicates the date and time the last backup of the protected information was performed. It is presented in the format `DD/MM/YYYY HH:MM:SS`  
* **Enabled.**  
* **Integrity.**

:::(info) (Info)   
The report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.   
:::