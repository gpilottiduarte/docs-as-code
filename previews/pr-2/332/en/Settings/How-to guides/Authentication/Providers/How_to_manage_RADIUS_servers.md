# How to manage RADIUS servers

RADIUS (Remote Authentication Dial-In User Service) is a network protocol that offers centralized authentication and authorization services for users connecting to and using a network resource. Thus, the RADIUS protocol becomes an alternative to consider when discussing system security, since it allows user credentials to be managed centrally, making it easier to implement strict security policies. senhasegura allows you to use RADIUS servers, all you have to do is configure them within your senhasegura instance.

## Register new server

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Radius > Servers**.
3. Click on **View actions**, represented by the three dots, and select **New**.
4. In the **RADIUS Server** window, fill in the fields:
   1. **Hostname**: IP or hostname of your RADIUS server.
   2. **Port**: port on which your RADIUS server is listening.
   3. **Enabled**: select Yes to register your server as active in senhasegura.
   4. **Secret key**: your RADIUS server's secret key.
   5. **Timeout(s)**: enter the timeout time that senhasegura should wait for a response from the RADIUS server.
   6. **Max attempts**: enter the maximum number of attempts that senhasegura will make on the RADIUS server.
5. Click on **Save**.

## Edit a server

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Radius > Servers**.
3. In the **RADIUS Servers** report, identify the one you want to change.
4. In the **Action** column, click **Edit**, represented by the pencil and paper icon.

The **RADIUS Server** window will open in edit mode. Change the information you want and click **Save**.

:::(info) (Info)
If the secret key isn't changed, the current value will be kept in the register.
:::

## Test authentication

On senhasegura, you can test the authentication of your RADIUS server. To do this, follow the steps below:

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Radius > Servers**.
3. In the **RADIUS Servers** report, identify the one you want to test authentication on.
4. In the **Action** column, click on the icon of the three vertical dots and select **Test authentication**.
5. In the **RADIUS Authentication Test** window, enter the **Username** and **Password** of the user you want to test authentication on.
6. Click **Test Authentication**.

A message will indicate whether authentication was successful.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).