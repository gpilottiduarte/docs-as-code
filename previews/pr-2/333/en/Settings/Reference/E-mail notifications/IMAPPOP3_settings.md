# IMAP/POP3 settings

In this document, you'll find all the information about the **IMAP/POP3 Accounts** report.

## Path to access

1. In senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> IMAP configuration  / POP3**

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **New** | Represented by the plus icon, it opens the I**MAP/POP3 Accounts** screen. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the **Schedule report** form.|

## Search fields

| Item | Description |
| :---- | :---- |
| **Name** | IMAP/POP3 account name. |
| **Secure connection** | Drop-down menu. Indicate whether the account uses a secure connection. This can be **Yes** or **No**. |
| **Automatic check** | Drop-down menu. Indicate whether the account has automatic verification enabled. This can be **Yes** or **No**. |
| **Keep copy** | Drop-down menu. Indicate whether the account keeps a copy on the server. This can be **Yes** or **No**. |
| **Status** | Drop-down menu. Indicate whether the account is active. It can be **Enabled** or **Disabled.** |

## Report fields

* **ID:** código da conta no senhasegura.  
* **Name.**  
* **Secure connection.**  
* **Connection type:** type of connection (SSL or TLS).  
* **Protocol:** account authentication protocol (IMAP or POP3).  
* **Port:** port to which the account connects to receive messages.  
* **Automatic check**  
* **Keep copy in server.**  
* In the **Action** column, you have two options:  
  * **Edit account:** used to change the settings of the account in question. Opens the **POP3 account** window.  
  * **View inbox:** takes you to the account's inbox.

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click on the next button at the end of the report.
:::

## POP3 account window

By clicking on the **Edit account** or **New**, you are taken to the POP3 Account Registration window, which contains the information below.

| Item | Description |
| :---- | :---- |
| **Account name** | IMAP/POP3 account name. |
| **Keep copy in server** | Radio button. Select whether you want to keep a copy of the messages on the server. This can be **Yes** or **No**. |
| **Automatic check** | *Radio button*. Selecione se deseja realizar a verificação automática de novas mensagens. Pode ser **Sim** ou **Não**. |
| **Enabled** | Radio button. Select whether you want to automatically check for new messages. This can be **Yes** or **No**. |
| **Address** | Text fields. Enter the host address of the IMAP/POP3 account. |
| **Port** | Text field. Enter the port on which the IMAP/POP3 account connects to the messaging server. |
| **Protocol** | Drop-down menu. Select the protocol for receiving messages. This can be IMAP or POP3. |
| **Use Network Connector** | Radio button. Indicate whether you want to use the Network Connector to connect the IMAP/POP3 account. This can be **Yes** or **No**. |
| **Network Connector** | Drop-down menu. Select the Network Connector that will be used to connect to the messaging server. **Note**: the drop-down menu is only enabled if you select Yes in the **Use Network Connector** option. |
| **Credential for authentication** | Drop-down menu. Enter the credential to be used for authentication on the messaging server. **Note**: the credential must have been previously registered with senhasegura. |
| **Skip certificate** | Radio button. Indicate whether you want to bypass the authentication certificate. This can be **Yes** or **No**. |
| **Use safe connection** | Radio button. Indicate whether you want to use a secure connection to the messaging server. This can be **Yes** or **No**. |
| **Secure connection type** | Radio button. Indicate the secure connection protocol that will be used to connect the account to the messaging server. This can be **TLS** or **SSL**. |

