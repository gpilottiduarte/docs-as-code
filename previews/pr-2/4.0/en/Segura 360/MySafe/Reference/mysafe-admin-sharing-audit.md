# Sharing audit - Global administration

This document provides information about the **Sharing audit** report screen from the **Global administration** menu, which displays details to the administrator about all items temporarily shared by users with people outside of **MySafe**.

## Requirements

* **MySafe** administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Global administration \> Sharing audit**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options *Batch import, Print report, Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters items by their identification code in Segura. |
| **Name** | Text field | Filters items by their identification name. |
| **Type** | Text field | Filters items by their type. The options are *Password, File, Note*, and *API secret*. |
| **Start date** | Date picker | Filters items by the start period of the sharing. |
| **Expiration** | Date picker | Filters items by the sharing expiration period. |
| **Username** | Text field | Filters items by the **MySafe** user who shared the item. |
| **Recipient** | Text field | Filters items by the recipient's email address. |
| **Remaining accesses** | Text field | Filters items by the number of remaining accesses until the sharing expires. |
| **Status** | Dropdown menu | Filters items by their status. The options are *Approved, Finished, Cancelled*, and *Error*. Clear the field to enable the **All** option. |

## Report fields

* **ID**.  
* **Name.**  
* **Type.**  
* **Date:** date and time of the sharing.  
* **Username.**  
* **Recipient.**  
* **Expiration**.  
* **Remaining accesses.**  
* **Status**.  
* **Actions**:  
  * **Revoke:** opens the confirmation pop-up to revoke the sharing with options **Yes** or **No.** Available for shares with **Approved** status. When revoked, the expiration date of the link is updated to the moment the sharing was revoked.  
  * **Forward URL access:** opens the confirmation pop-up to resend the email with the sharing link with options **Yes** or **No**. Available for shares with **Approved** status.  
  * **History**: opens the **External sharing history** screen.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::
