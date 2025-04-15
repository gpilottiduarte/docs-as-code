# How to change a domain user's password in AD

In this article, you will find a step-by-step guide on how to change passwords for domain users on the Active Directory (AD) server.

:::(info) (**Info**)
By following the steps in this tutorial, permission will only be given to **one selected user**. To grant permission **to a group**, access [How to change a domain user's permission in AD](/v3-32/docs/executions-how-to-change-a-domain-users-permission-in-ad) document.
:::

### Requirements

* Be an administrator user or have administrative privileges to change Active Directory.
* Have the Active Directory User and Computers installed.

---
## Change Password

1. At the **Active Directory (AD)**, find the group whose permission you want to edit.
    1. Click on the group folder.
2. In the list of group’s users, located on the right.
    1. Choose the user, right-click, and select **Properties**.
3. In the new window, click on the **Security** tab.
    1. Select **Everyone**.
    2. Click **Advanced**.
4. On the **Permissions** tab, click **Add**.
    1. In the new window, click **Select a principal**.
        1. Enter the user who will have permission to change the password in the field **Enter the object name select (examples)**.
        2. Click **OK**.
    2. Scroll down to the bottom, and click **Clean all**.
    3. Scroll back to the top, and select only **Change Password**, **Reset password**, **Read pwdLastSet**, and **Record pwdLastSet**.
    4. Click **OK**.
5. When returning to the tab screen **Permissions**:
    1. Click **Apply**, and then **OK**.

### Confirm the change

1. Go to **senhasegura**, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list, select the credential that you modified in AD.
    1. In the **Action** column, click on the icon represented by the **three vertical dots**, and click **Edit**.
    2. In the **Credential** window, click **Execution Settings**.
    3. See that the **Change plugin** field has the value of **LDAP**, and the user in the **Authentication credential** field is registered in AD.
4. Click **X** to close the window.

---
Do you still have questions? Reach out to the [senhasegura community](https://community.senhasegura.io/){target=`_blank`}.