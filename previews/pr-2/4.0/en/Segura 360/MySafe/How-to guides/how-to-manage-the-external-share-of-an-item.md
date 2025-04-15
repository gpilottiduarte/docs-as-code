# How to manage the external share of an item

This document provides a step-by-step guide on how to share, resend an access link, revoke, and view the details of items shared temporarily with users outside of **MySafe**. 


## Externally share an item

## Requirements

- Minimum **MySafe user** permission.
- **External share** permission granted by the administrator.

> Administrators, access the document on [How to configure MySafe](/v4/docs/how-to-configure-mysafe) for more information.
___
To temporarily share an item with a person that doesn’t have a **MySafe** account, follow the steps below:

1. On **Segura**, in the upper-left corner, click the **Products menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select the menu of the type of item you want to share. Available options are **Passwords, API secrets, Files,** and **Notes**.
3. On the item screen, identify the item you want to share.
4. In the **Action** column, click **Share**.
5. On the **Share** screen, select the **External** card, represented by the globe icon.
6. On the upper part of the **One time share** screen, view the details of the item to be shared.
7. In the text box below the item’s details, type the email address of the person with whom you want to share the item.
8. In the **Sharing details** section, fill in:

   - **Expiration date***: click the downward arrow to select the period during which the shared item will be available for access. The available options are *1 hour, 24 hours, 1 week, 30 days*, and *Customized*. The **Customized** option enables the date and time fields for a personalized expiration date selection.

   :::(warning) (Attention)
   The expiration date cannot exceed the period defined by the administrator.
   :::

   - **Maximum access***: select an option to define how many times the person will be able to access the shared item within the established expiration date. Available options are *Unlimited, One time share*, and *Customized*. By default, the **One time share** option displays the number **1**. The **Customized** option enables the selection of a number that defines how many times the person will be able to access the shared item. Enter the number manually or use the up or down arrows to select a number.

   :::(info) (Info)
   The items with an asterisk are mandatory.
   :::

9. Click **Save**.



## Revoke external sharing

To revoke the temporary sharing of an item before its automatic expiration, follow the steps below:

## Requirements

- A temporarily shared item with **Approved** status. Access the [Externally share an item](/v4/docs/how-to-manage-the-external-share-of-an-item#externally-share-an-item) section of this document for more information.
---
1. On **Segura**, in the upper-left corner, click the **Products menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Sharing center > External share**.
3. Identify the item whose sharing you want to revoke or use the filters to search for it.
4. In the **Action** column, click **Revoke**, represented by the trash can icon.
5. In the **Confirmation** window, click **Yes**.

The message "**Data saved successfully**" confirms the action, and the column **Status** displays **Cancelled**.

:::(info) (Info)
When revoking a temporary share, the **Expiration** column displays the date and time of the revocation.
:::



## View the history of an externally shared item

## Requirements

- A temporarily shared item. Access the[ Externally share an item](/v4/docs/how-to-manage-the-external-share-of-an-item#externally-share-an-item) section of this document for more information.
---

To view the history of an item shared temporarily with a person who doesn’t have a **MySafe** account, follow the steps below:

1. On **Segura**, in the upper-left corner, click the **Products menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Sharing center > External share**.
3. Identify the item whose sharing history you want to view or use the filters to search for it.
4. In the **Action** column, click the three vertical dots icon and select **History**. For finished or canceled items, click the clock icon.
5. On the **External share history** screen, view the details of the item’s sharing history, such as **Event, ID**, and **Date**.

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.
:::



## Forward URL access

## Requirements

- A temporarily shared item with **Approved** status. Access the [Externally share an item](/v4/docs/how-to-manage-the-external-share-of-an-item#externally-share-an-item) section of this document for more information.
---
If the access to an item has expired and you need to resend the access link, follow the steps below:

1. On **Segura**, in the upper-left corner, click the **Products menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Sharing center > External share**.
3. Identify the item whose link you want to resend.
4. In the **Action** column, click the three vertical dots icon and select **Forward URL access**, represented by a mail icon.

:::(info) (Info)
In case of issues with email delivery, the administrator can also resend the access URL via the path **Grid Menu > Settings > Notifications > Email > Outbox**.  
In the **Sent mail** report, identify the email with the item and, in the **Action** column, click the three vertical dots icon and select **Resend mail**.  
Fill in the information and click **Resend**.  
Track the delivery status in the **Status** column of the **Sent mail** report.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.
