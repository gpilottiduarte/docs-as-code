# Sharing options

In this document, you’ll find detailed information about **MySafe**’s **System settings** screen, which enables the administrator to configure MySafe.

## Requirements
* MySafe administrator permission.

## Paths to access

**MySafe**'s **System settings** screen can be accessed through two different paths:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Admin > Sharing options**.

---
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu of the **System settings** screen, select **MySafe**.

---

## Email configuration section

* **Sending account:** field for selecting the email that will send the authentication code so that users can connect **MySafe** to the extension, mobile app, or access a temporarily shared item.

## External share section

* **Enable external share?***: selection buttons to allow external sharing. Available options are **Yes** and **No**.
* **Max. sharing time:** fields for limiting the time an item will be available for access by an external **MySafe** user. Use the first field to enter a number and the second field to enter the period. The available options are *Minutes, Hours, Days*, and *Months*.
* **Base URL:** text box for entering the URL of the MySafe vault that will connect to the extension, mobile app, or the temporarily shared item.

    :::(warning) (Attention)
    * If the application is communicating with a **MySafe** vault in a multi-tenant scenario, the administrator must enter the tenant URL without `https://`.  
    **Example**: `test.mt4.dev`  
    <br>
    * If this field isn’t filled in, operations involving the **MySafe extension**, the **MySafe** section of the **senhasegura** mobile app, and **External** sharing will result in errors.
    :::

:::(info) (Info)
The items with an asterisk are mandatory.
:::

---