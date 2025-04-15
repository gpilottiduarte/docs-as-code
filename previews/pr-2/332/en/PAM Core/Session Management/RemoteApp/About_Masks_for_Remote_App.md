# About Masks for Remote App

You can use the **masks** below so that, during automation, **RemoteApp** replaces the mask with the information contained in the credential.

**Tag**|**Description**
|---|---|
[username]| Uses the username field of the credential.
[password]| Uses the password field of the credential.
[domain]| Uses the credential domain field.
[add_info]| Uses additional information from the credential.
[hostname]| Uses the device name.
[host_ip]| Uses the device's IP address.
[port]| Search the port registered on the device.

:::(info) (**Info**)
Masks can be used both in the **Parameters** and in the **Macro** field when the **Type** field has the **User simulation** option selected.
:::

To use the masks, access the document [How to register a RemoteApp](/v3-32/docs/pam-session-how-to-register-a-remoteapp).

:::(warning) (**Attention**)
RemoteApp automation for GO Windows supports different masks. For more information, access the [GO Windows Automation](/v3-32/docs/go-endpoint-manager-about-automation) document.
:::
