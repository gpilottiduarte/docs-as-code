# Failure log

In this document you'll find a reference guide for the **Failure Log** on LDAP/AD servers.

## Path to access

1. On senhasegura, in the upper-left corner, click on **Grid Menu**, represented by the nine squares, and select **Settings**.  
2.  In the side menu, select **Authentication \> Active Directory \> Failure log**.

## Barra superior

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |

## Search fields

| Item | Descrição |
| :---- | :---- |
| **Error ID** | Authentication error code. |
| **User** | User who made the authentication attempt |
| **Attempt date** | Opens a calendar to enter the start date of the authentication attempts filter. |
| **until** | Opens a calendar to enter the end date of the authentication attempts filter. |

## Report fields

In the list of authentication failures, you have the following fields:

* **Date:** date on which the authentication failure occurred.  
* **Error ID.**  
* **AD Error:** error code in AD.  
* **User.**  
* **Messages:** error messages received by senhasegura.  
* **Error message:** error messages received by senhasegura displayed with treatment for better readability.