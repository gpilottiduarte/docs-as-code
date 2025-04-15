# How to generate Oracle Wallet

This document provides step-by-step information on how to generate an oracle user wallet to be used via Oracle Database Proxy.

:::(warning) (**Attention**)
It takes some steps to configure the Oracle database so that it is accessible via **Database proxy**, these steps must be performed by the administrator user.
:::

## Requirements

* Administrator user has performed the necessary steps to configure the Oracle Database.

---
## Generate Oracle Wallet  
The complete authentication process for DB Proxy with Oracle is done via SSL. As a result, the Segura user must authenticate using a certificate in their IDE to establish the connection. Additionally, the Segura user must have a wallet, which should be stored on their workstation.

1. On senhasegura, in the navigation bar, hover over the **User Menu**.  
2. Select **My certificate**.  
3. On the certificate screen, click on **Oracle Wallet**, located at the bottom of the screen.  
   1. Segura will perform the wallet generation process.  
4. Refresh the screen, and the **Oracle Wallet** button will appear in the **Downloads section**.  
   1. Click on **Oracle Wallet**.  
   2. A download with the file `.zip` will start.  
   3. Once the download is complete, extract the file to the path configured on your workstation.

The downloaded file will be used to configure the IDE of your choice, access the [How to configure IDEs for the end user to connect to Oracle DB](/v4/docs/pam-session-how-to-configure-ides-for-the-end-user-to-connect-to-oracle-db) document.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.