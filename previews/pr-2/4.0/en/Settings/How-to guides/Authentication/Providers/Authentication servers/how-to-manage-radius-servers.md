# How to manage RADIUS servers

RADIUS (Remote Authentication Dial-In User Service) is a network protocol that offers centralized authentication and authorization services for users connecting to and using a network resource. Thus, the RADIUS protocol becomes an alternative to consider when discussing system security, since it allows user credentials to be managed centrally, making it easier to implement strict security policies. Segura allows you to use RADIUS servers, all you have to do is configure them within your Segura instance.

## Register new server

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication > Radius > Servers**.  
3. Click the **Add** button.
4. In the **Servers** window, fill in the fields:
   1. **Hostname**: IP or hostname of your RADIUS server.
   2. **Port**: port on which your RADIUS server is listening.
   3. **Enabled**: select Yes to register your server as active in Segura.
   4. **Secret key**: your RADIUS server's secret key.
   5. **Timeout(s)**: enter the timeout time that Segura should wait for a response from the RADIUS server.
   6. **Max attempts**: enter the maximum number of attempts that Segura will make on the RADIUS server.
5. Click on **Save**.

## Edit a server

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication > Radius > Servers**.  
3. In the **RADIUS Servers** report, identify the one you want to change.
4. Click the **Actions** button and select **Edit**.

The **Servers** window will open in edit mode. Change the information you want and click **Save**.

:::(info) (Info)
If the secret key isn't changed, the current value will be kept in the register.
:::

## Test authentication

On Segura, you can test the authentication of your RADIUS server. To do this, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication > Radius > Servers**.  
3. In the **RADIUS Servers** report, identify the one you want to change.
4. Click the **Actions** button and select **Test authentication**.
5. In the **RADIUS Authentication Test** screen, enter the **Username** and **Password** of the user you want to test authentication on.
6. Click **Test Authentication**.

A message will indicate whether authentication was successful.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).