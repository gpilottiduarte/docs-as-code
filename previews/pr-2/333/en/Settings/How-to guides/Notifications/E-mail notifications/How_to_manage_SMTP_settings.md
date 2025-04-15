# How to manage SMTP settings

To enable the efficient sending of notifications in an e-mail notification system, it's essential to configure the SMTP (Simple Mail Transfer Protocol) parameters correctly. SMTP is the standard protocol used to send emails over the Internet and requires precise configuration specifications to ensure proper connectivity and security. Initially, you need to define the SMTP server address, which can be provided by your email service provider or your internal infrastructure.

## Setup an SMTP server

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> SMTP Configuration**.  
3. In the **Accounts** report, click on **Show actions**, represented by the three vertical dots in the top bar, and select **New** from the drop-down menu.  
4. In the **SMTP server** **settings** window, fill in the following fields:  
   1. **Account name**: fill in the name of your account.  
   2. **Enabled**: select whether you want to create an active account. By default, this option is set to **Yes**.  
   3. **Sender e-mail**: e-mail address that will be used as the sender.  
   4. **Reply e-mail**: e-mail address that will be used to forward replies to the notification e-mail.  
   5. **Reply e-mail (Return-Path)**: e-mail address that will be used to forward notification delivery error messages.  
   6. **Confirmation mail**: e-mail address that will be used to confirm readership  
   7. **Default account**: select **Yes** if you want this account to become senhasegura's default account.  
   8. **Send read confirmation**: select **Yes** if you want to receive a read confirmation of the notification email.  
   9. **Force settings use**: select **Yes** if you want to use the settings in the configuration section  
   10. **Enable footnote**: select **Yes** if you want to enable the footer to be sent with the notification email.  
5. In the **SMTP server settings** section, fill in the fields:  
   1. **Host SMTP**: address of the SMTP server for sending e-mail messages.  
   2. **Port**: port for listening to the SMTP server.  
   3. **Use safe connection?**: select **Yes** if you want to use an encryption method when sending e-mails.  
   4. **Secure connection type**: select which encryption protocol you want to use:  
      1. **SSL**: Secure Sockets Layer is an essential security protocol that establishes an encrypted connection between a web server and a browser, ensuring that all data transmitted is kept private and secure.  
      2. **TLS**: Transport Layer Security is an advanced security protocol that has evolved from SSL to provide even more secure communication between web servers and browsers.  
   5. **Use authentication**: select **Yes** if you want to use credential authentication for the SMTP server.  
   6. **Ignore certificate error**: select **Yes** to ignore certificate errors.  
   7. **Use Network Connector?**: select **Yes** to use the Network Connector to connect to the SMTP server.  
      1. If you select Yes for this option, you must select the **Network Connector** you want to use by selecting it from the **Network Connector** drop-down menu next to the option.  
         1. You must have a previously configured Network Connector.  
   8. **Credential for authentication**: select a credential to use to authenticate yourself to the SMTP server.  
      1. Note that if you have selected **Yes** for the **Use authentication** field, you must choose a credential in this option.  
6. Click on **Send**.

## Edit an SMTP server

You can change the settings of an SMTP server previously registered with senhasegura. To do this, follow the steps below:

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> SMTP Configuration**.  
3. In the **Accounts** report, in the **Action** column, click **Edit**, represented by the pencil and paper icon.  
4. The **SMTP server** **settings** window will open in edit mode.  
5. Change the information you want and click **Send**.

## Test the configuration of an SMTP server

You can test the configuration of an SMTP server to ensure that it is correctly configured. To do this, follow the steps below:

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> SMTP Configuration**.  
3. In the **Accounts** report, in the **Action** column, click on the three vertical dots and select **Test setting** from the drop-down menu.  
4. In the **Test Email \- Account** window, fill in the fields:  
   1. **Send to**: fill in the e-mail address to which you want to send the test e-mail.  
   2. **Subject**: fill in the subject of the test message. By default, this field is filled in with the string `TEST MESSAGE!`  
   3. Message: fill in the test message you want to send. By default, this field is filled with the string `ATTENTION: THIS IS A TEST MESSAGE!`  
5. Click **Send**.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).