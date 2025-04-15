# How to manage IMAP/POP3 settings

To manage e-mails efficiently in a system, it's essential to configure the IMAP (Internet Message Access Protocol) or POP3 (Post Office Protocol 3\) protocols correctly. These protocols are responsible for communication between the e-mail client (such as a web browser or e-mail application) and the e-mail server, allowing e-mails to be received, organized, and accessed.

IMAP allows e-mails to be synchronized across multiple devices, with the inbox being accessed simultaneously from different locations. POP3, on the other hand, downloads e-mails to the device and deletes them from the server. This can be useful for users who prefer to access their e-mails offline or who want a local copy of all their e-mails.

Setting up IMAP or POP3 requires information such as the server address, username, and password, as well as checking compatibility with the latest version of the protocol and the availability of security, such as SSL/TLS. The choice between IMAP and POP3 depends on the user's needs, since IMAP synchronizes e-mails on multiple devices, while POP3 downloads e-mails to the device, deleting them from the server, ideal for offline access or local copying.

## Configure an IMAP account

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **E-mail > IMAP Configuration / POP3**.
3. Click the **New** button to create a new IMAP service configuration.
4. In the **POP3/IMAP account registration** pop-up window, fill in the fields:
    1. **Account name:** enter the e-mail account name.
    2. **Keep copy in server:** check **Yes.**
    3. **Automatic check:** check **Yes.**
    4. **Enabled:** check **Yes.**
5. In the **Server configuration** section, fill in the fields:
    1. **Address:** enter the localhost address: `127.0.0.1`.
    2. **Port:** enter the port to be used: `2993`.
    3. **Protocol:** select **IMAP** from the drop-down menu.
    4. **Use Network connector:** enable, if needed.
    5. **Network Connector**: select the Network Connector from the dropdown menu.
    6. **Credential for authentication:** enter the credential that will be used to authenticate with the IMAP server.
    7. **Skip certificate?:** check **Yes.**
    8. **Use safe connection:** check **No.**
    9. **Secure connection type:** leave it disabled (blank).
    10. **Use Network Connector?**: indicate whether or not you want to use the Network Connector.
:::(Info) (Info)
- By keeping the **Network Connector** field blank, the default Network Connector, as defined in **Settings > System Parameters > Global > Application > Network Connector**, will be used.
- This parameter will only take effect if there is any configured **Network Connector**.
:::
6. Click **Save**.

## Edit an IMAP/POP3 account

You can edit the settings of an IMAP/POP3 account previously registered with Segura. To do this, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **E-mail > IMAP Configuration / POP3**.
3. In the **IMAP Configuration / POP3** click the **Action** button and select **Edit account** from the dropdown menu.  
4. The **IMAP Configuration / POP3** screen will open in edit mode.  
5. Change the information you want and click **Save**.

## View the inbox of an IMAP/POP3 account

To view the inbox of just one account, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **E-mail > IMAP Configuration / POP3**.
3. In the **IMAP Configuration / POP3** click the **Action** button and select **View inbox** from the dropdown menu.  
4. You will be taken to the **Inbox** report, containing all incoming messages.

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).