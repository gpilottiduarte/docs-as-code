# How to manage TACACS servers

TACACS (Terminal Access Controller Access-Control System) is a remote authentication protocol to communicate information between a network server and a client. Originally developed by Cisco Systems, the protocol controls access to terminals and network services, allowing system administrators to restrict user command options. TACACS allows passwords to be managed centrally, which is ideal for systems that access many network devices.

senhasegura allows you to use TACACS servers to authenticate yourself simply by configuring them within your senhasegura instance.

## Register a new server

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Tacacs > Servers**.
3. Click on **Show actions**, represented by the three dots, and select **New**.
4. In the **TACACS Server** window, fill in the fields:
   1. **Hostname**: IP or hostname of your TACACS server.
   2. **Port**: port on which your TACACS server is listening.
   3. **Enabled**: select Yes to register your server as active in senhasegura.
   4. **Secret key**: your TACACS server's secret key.
   5. **Timeout(s**): Enter the timeout time that senhasegura will wait for a response from the TACACS server.
   6. **Max attempts**: enter the maximum number of attempts that senhasegura will make on the TACACS server.
5. Click on **Save**.

## Edit a server

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Tacacs > Servers**.
3. In the **TACACS Servers** report, identify the one you want to change.
4. In the **Action** column, click **Edit**, represented by the pencil and paper icon.

The **TACACS Server** window will open in edit mode. Change the information you want and click **Save**.

:::(info) (Info)

If you don't change the secret key, the current value will be kept in the register.

:::

## Test authentication

In senhasegura, you can test the authentication of your TACACS server. To do this, follow the steps below:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > TACACS > Servers**.
3. In the **TACACS Servers** report, identify the one you want to test authentication on.
4. In the **Action** column, click on the icon represented by the three vertical dots and select **Test authentication**.
5. In the **TACACS Authentication Test** window, enter the **Username** and **Password** of the user you want to test authentication.
6. Click on **Test Authentication**.

A message will indicate whether authentication was successful.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).