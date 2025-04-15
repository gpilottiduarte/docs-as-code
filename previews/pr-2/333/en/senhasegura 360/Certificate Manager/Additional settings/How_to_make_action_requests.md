# How to make action requests

This article explains how to request permission to perform specific actions within Certificate Manager and track the status of these requests. This flow occurs only when a user is part of an Access group that requires approval from another user.

The actions a user can request to perform are:

- View certificate passwords
- Sign a certificate
- Renew a certificate
- Publish a certificate

## Requirements

- A Role with the Permissions:
  - **CertificateManager.Requests.Approval.List**
  - **CertificateManager.Requests.Approval.View**

---

## Request to view a password

The flow described in this tutorial applies to all the actions mentioned above. Even if your request is for another action and made from a different location than exemplified below, it doesn't change the product's behavior. Other items of the component allow making requests. Always locate the **Action** column and check the dropdown menu for possible requests.

To request to view a password, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Requests**.
3. Locate the desired request.
4. In the corresponding **Action** column, click on the three vertical dots icon.
5. Select **View key password**; it will prompt a new window.
6. Enter the information:
    6.1 **Justification:** write the reason for requesting to view the password.
    6.2 **Reason:** select one of the registered options.
    6.3 **Governance code:** add a code for control purposes.
7. Select **Justify**.

A 'request sent' message appears on the screen, indicating your approval request has been submitted.

While your request is pending approval, you'll always receive an 'access denied' message if you attempt to act. Once the request is approved, return to the same item and select **View key password** to retrieve the information.

---

## Monitor your requests

To monitor your requests, follow these steps:

1. On the side menu, select **My requests**.
2. From the **Status** search field, select one of the options available.
    2.1 Use any other field to refine the search further.

According to the applied filters, your requests appear on My Requests' main page.

- **Pending request:** indicates that one or more approvers still need to see the request.
- **Approved request:** indicates that you can perform the action.
- **Rejected request:** indicates that one or more approvers have declined your request.
- **Expired request:** every request has a deadline for approval. If it's not approved within the specified time, you must submit the request again.

<!-- Fix callout -->
:::(Info) (Info)
If you're using senhasegura when your request is approved, a pop-up message will appear in the bottom right corner of the screen.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
