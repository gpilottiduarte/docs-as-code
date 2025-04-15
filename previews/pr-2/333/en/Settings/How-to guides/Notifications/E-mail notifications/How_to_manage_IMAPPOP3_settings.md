# How to manage IMAP/POP3 settings

To manage e-mails efficiently in a system, it's essential to configure the IMAP (Internet Message Access Protocol) or POP3 (Post Office Protocol 3\) protocols correctly. These protocols are responsible for communication between the e-mail client (such as a web browser or e-mail application) and the e-mail server, allowing e-mails to be received, organized, and accessed.

IMAP allows e-mails to be synchronized across multiple devices, with the inbox being accessed simultaneously from different locations. POP3, on the other hand, downloads e-mails to the device and deletes them from the server. This can be useful for users who prefer to access their e-mails offline or who want a local copy of all their e-mails.

Setting up IMAP or POP3 requires information such as the server address, username, and password, as well as checking compatibility with the latest version of the protocol and the availability of security, such as SSL/TLS. The choice between IMAP and POP3 depends on the user's needs, since IMAP synchronizes e-mails on multiple devices, while POP3 downloads e-mails to the device, deleting them from the server, ideal for offline access or local copying.

## Configure an IMAP/POP3 account

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> IMAP configuration / POP3.**  
3. In the **IMAP/POP3 Accounts** report, click on **View actions**, represented by the three vertical dots in the top bar, and select **New** from the drop-down menu.  
4. In the **POP3 account** window, fill in the following fields:  
   1. **Account name**: fill in the name of your account.  
   2. **Keep copy in server**: select **Yes** to keep a copy on the server or **No** to delete the message from the server as soon as it is downloaded to senhasegura.  
   3. **Automatic check**: select **Yes** to perform automatic verification of new messages or **No** to perform verification manually only.  
   4. **Enabled**: select whether you want to create an active account. By default, this option is set to **Yes**.  
5. In the **Server configuration** section, fill in the fields:  
   1. **Address**: host's imap/pop3 address.  
   2. **Port**: the host's IMAP or POP3 listening port.  
   3. **Protocol**: drop-down menu. Choose which server you want to use: **IMAP** or **POP3**.  
   4. **Use Network Connector?**: select **Yes** to use the Network Connector to connect to the incoming message server.  
      1. If you select **Yes** for this option, you must select the **Network Connector** you want to use by selecting it from the **Network Connector** drop-down menu next to the option.  
      2. You must have a previously configured Network Connector.  
   5. **Credential for authentication**: select the credential that will be used to authenticate yourself on the message receiving server.  
   6. **Skip certificate**: ignores the server's certificate. This is set to **Yes** by default.  
   7. **Use safe connection**: use a secure connection to the server. By default, this is set to **Yes**.  
   8. **Secure connection type**: indicate the security protocol that will be used for the connection: **TLS** or **SSL**.  
6. Click **Save**.

## Edit an IMAP/POP3 account

You can edit the settings of an IMAP/POP3 account previously registered with senhasegura. To do this, follow the steps below:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> IMAP configuration / POP3**.  
3. In the **IMAP/POP3 Accounts** report, in the **Action** column, click **Edit account**, represented by the pencil and paper icon.  
4. The **POP3 Account** window will open in edit mode.  
5. Change the information you want and click **Save**.

## View the inbox of an IMAP/POP3 account

To view the inbox of just one account, follow the steps below:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \>  IMAP configuration / POP3**.  
3. In the **IMAP/POP3 Accounts** report, in the **Action** column, click on the three vertical dots and select **View inbox** from the drop-down menu.  
4. You will be taken to the **Inbox** report, containing all incoming messages.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).