# How to configure MySafe

This document provides a step-by-step guide on how to configure settings that enable communication of the **MySafe** vault with the extension and mobile app, as well as sharing items with external users.

## Requirements
- **MySafe** administrator permission.

## Paths to access
**MySafe**'s **System settings** screen can be accessed through two different paths:
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Admin > Sharing options**.

---

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu of the **System settings** screen, select **MySafe**.
---
## Configure MySafe
To configure **MySafe**, follow the steps below:

1. In the **Email configuration** section, fill in:
    1. **Sending account**: choose the email that will send the authentication code so that users can connect MySafe to the extension, mobile app, or access a temporarily shared item.

2. In the **External share** section, fill in:
    1. **Enable external share?***: define if users will be able to share items with people outside of **MySafe**. Available options are **Yes** and **No**.
    2. **Max. sharing time**: define the time limit that an item will be available for access by an external **MySafe** user. Use the first field to enter a number and the second field to enter the period. The available options are *Minutes*, *Hours*, *Days*, and *Months*.
    3. **Base URL**: enter the URL of the **MySafe** vault that will connect to the extension, mobile app, or the temporarily shared item.

:::(warning) (Attention)
* If the application is communicating with a **MySafe** vault in a multi-tenant scenario, the administrator must enter the tenant URL without `https://`.  
**Example**: `test.mt4.dev`  
<br>
* If this field isn’t filled in, operations involving the **MySafe extension**, the **MySafe** section of the **senhasegura** mobile app, and **External** sharing will result in errors.
:::

   :::(info) (Info)
   The items with an asterisk are mandatory.
   :::

3. Click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).