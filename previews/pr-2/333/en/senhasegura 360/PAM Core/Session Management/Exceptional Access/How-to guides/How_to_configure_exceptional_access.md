# How to configure exceptional access

In this document, you'll learn how to set up exceptional access in senhasegura.

## Requirements

* Have PAM operator permission in senhasegura
* Be registered in the list of allowed users

---
## Configure exceptional access

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. In the **Actions** column, click the three vertical dots icon, and select the **Exceptional Access option**.
    1. In the **Access restrictions** section, add the following information:
    2. In the **Start field**, add the date and time the access starts.
    3. In the **Duration field**, add the validity period of the access.
    4. In the **Allowed users** field, add the user(s) who will benefit from the access.
4. When adding the user, set the following options:
    1. Select **Start session** to ensure that the user logs in with the credential provided.
    2. Select **View password** to ensure that the user views the password of the credential provided.
    3. Click **Add** to save the system users.
5. Click **Save**.

***
## Next
[How to manage Exceptional access](/v3-33/docs/pam-session-how-to-manage-exceptional-access).

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
