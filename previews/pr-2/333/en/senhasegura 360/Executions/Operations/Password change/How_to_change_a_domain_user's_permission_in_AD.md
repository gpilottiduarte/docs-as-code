# How to change a domain user's permission in AD

In this article, you will find a step-by-step guide on how to perform the permission change for domain users on the Active Directory (AD) server.

:::(info) (**Info**)
By following the steps in this tutorial, permission will be given to **the whole group** of users inserted in the selected folder. To grant permission to **just one user**, access [How to change a domain user's password in AD](/v3-33/docs/executions-how-to-change-a-domain-users-password-in-ad) document.
:::

### Requirements

* Be an administrator user or have administrative privileges to change Active Directory.
* Have the Active Directory User and Computers installed.

---
## Change permission

1. At the **Active Directory (AD)** server, find the group whose permission you want to edit. 
    1. Right-click and choose the option **Delegate control**.
2. In the window **Users or Groups**, click **Add**.
3. In the **Enter the object name to select (examples)** field:
    1. Enter the user who will be allowed to change the password.
4. Click **OK**.
5. Back to the **Users or Groups** screen, click **Next**.
    1. From the list, select **Reset user passwords and force change at next logon**.
6. Click **Next**.
7. Click **Finish**.

#### Confirm the change

1. Go to **senhasegura**. In the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list, select the credential that you modified in AD.
    1. In column **Action**, click on the icon represented by the **three vertical dots**, and click **Edit**.
    2. In the **Credential** window, click **Execution Settings**.
    3. See that the **Change plugin** field has the value of **LDAP**, and the user in the **Authentication credential** field is registered in AD.
4. Click **X** to close the window.

---
Do you still have questions? Reach out to the senhasegura community[https://community.senhasegura.io/](https://community.senhasegura.io/){target=`_blank`}.