# How to transfer files in RDP Proxy sessions

In this document, you’ll find a step-by-step guide on how to perform file transfer in RDP Proxy sessions.

senhasegura RDP Proxy uses the native RDP protocol. Therefore, all resources shared between the client side and the server side will work as a normal RDP connection, even with the senhasegura monitoring layers.

---
## Transfer file
:::(warning) (**Attention**)
File transfer must be enabled in **System parameters** at **Remote sessions** to work. For more information on how to perform this action, access the [How to activate remote session file transfer](/v3-33/docs/pam-session-activate-remote-session-file-transfer) document.
:::

1. Open the **Remote Desktop Connection** app of your preference.
2. In the **Computer** field, enter the IP address.
3. On the **User name** field, enter the username used to access the vault.
4. Access **Local Resources**, in the **Local devices and resources** section, click **More** and select the driver to share.

To transfer a file from the client side to the target device, copy the desired file and paste it into a folder from the local machine, located under **This computer**. senhasegura will then record this action, and, if any file transfer plugin is active, it will be triggered before the file reaches the target destination.

For text data stored in the clipboard, the data will be logged to session-indexed texts, but no plugins will be triggered.

You can also transfer local resources to the target machine using Microsoft®Windows® Remote Area Connection.

---
### Next:
[How to connect to a remote device with RDP Proxy](/v3-33/docs/pam-session-how-to-connect-to-a-remote-device-with-rdp-proxy)
[How to make an RDP Proxy connection using Multihop](/v3-33/docs/pam-session-how-to-make-an-rdp-proxy-connection-using-multihop)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.