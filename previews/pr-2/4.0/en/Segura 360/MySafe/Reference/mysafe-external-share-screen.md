# External share



This document provides information about the **External share** report screen, which displays the sharing of items with users who don’t have a **MySafe** account.

## Requirements

* External sharing permission granted by the **MySafe** administrator.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Sharing center \> External share**.

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
| **Recipient** | Text field | Filters items by the recipient's email address. |
| **Remaining accesses** | Text field | Filters items by the number of remaining accesses until the sharing expires. |
| **Status** | Dropdown menu | Filters items by their status. The options are *Approved, Finished, Cancelled*, and *Error*. Clear the field to enable the **All** option. |

## Report fields

* **ID**.  
* **Name.**  
* **Type.**  
* **Date:** date and time when the external sharing was made.  
* **Recipient.**  
* **Expiration**: date and time when the sharing link expires.  
* **Remaining accesses:** number of accesses available to the link within the expiration period. The options are **Unlimited** or a **number** indicating the number of times the person can access the link before it expires.  
* **Status**.  
* **Actions**:  
  * **Revoke:** opens the confirmation pop-up to revoke the sharing with options **Yes** or **No.** Available for shares with **Active** status**.** When revoked, the expiration date of the link is updated to the moment the sharing was revoked.  
  * **Forward URL access:** opens the confirmation pop-up to resend the email with the sharing link with options **Yes** or **No**. Available for shares with **Active** status.  
  * **History**: opens the **External sharing history** screen.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

### External sharing history screen

This screen displays information about an item shared with a user who doesn’t have a **MySafe** account.

| Item | Description |
| ----- | ----- |
| **Event** | Displays the action performed on the externally shared item. The options are *Item shared, Item accessed*, *Link resent*, *Sharing expired*, and *Sharing revoked.* |
| **ID** | Displays the event identification code in Segura. |
| **Date** | Displays the date and time of the event. |

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::