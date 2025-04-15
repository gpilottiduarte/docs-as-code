# System parameters - Security

This document contains detailed information about the **System parameters** page, where you can configure the features from **Security**.

***
## Path to access

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares icon, and then select **Settings**.
2. In the side menu, select **System parameters** > **System parameters** > **Security**.
***

:::(warning) (**Warning**)
All fields are set with a default value, as recommended by senhasegura. However, you can customize your session according to your needs.
:::

### Security tab
**Item**|**Description**
|---|---|
**Force multi-factor authentication to view password?***|Forces the multifactor authentication to view a password. Default option: **No**.
**Time between token requirement for custody (minutes)**|Defines the time interval in which tokens must be requested for password display. It can be 0 until 60 minutes. Default option: **5 minutes**.
**Ignore the 'Trust this computer' option to view password?***|Indicates if the checkbox displayed when logging into the senhasegura environment should be disregarded for examining passwords. Default option: **No**.
**Force multi-factor authentication to start a session?***|Forces the user to use the 2FA token to start proxy sessions. Default option: **No**.
**Time between token requirement for sessions (minutes)**|Defines the time interval in which tokens must be requested to perform a session. Choose from 0 to 60 minutes. Default option: **5 minutes**.
**Ignore the 'Trust this computer' option to start a session?***|Indicates whether the checkbox displayed when logging into the senhasegura environment should be disregarded for examining passwords. Default option: **No**.
**Force secure connection (SSL) on password change executions?***|Forces the use of a secure connection during the password change. Default option: **Yes**.
**Enable password change after session opening?***|Determines whether senhasegura will change the password right after the proxy session starts. Default option: **No**.
**Force certificate authentication for the RDP Proxy?***|Forces a session to be authenticated by a digital certificate when connecting through RDP Proxy. Default option: **No**.
**Force certificate authentication for the SSH/Telnet Proxy?***|Forces a session to be authenticated by a digital certificate when connecting through SSH/Telnet Proxy. Default option: **No**.
**RDP safe mode***|Indicates the security level of target RDP connections. Can be *Automatic*, *RDP*, *NLA*, or *TLS*. By default, **Automatic** is set. With this setting, the client and server will determine the level of security. Since it functions as a bridge, the client in this scenario is the senhasegura platform. To adjust the security level of incoming connections to senhasegura, refer to the RDP Proxy documents.
**Session idle time***|Defines the idle session duration that will trigger an automatic disconnection. You can select a duration between Minutes, Hours, and Days. The number can be 0 to 60. Default option: **1 day**.
**Enable IP filters with permission to start session**|Enables a filter based on the IP address that controls the IP address that has permission to start proxy sessions. Default option: **deactivate**.
**Allowed IPs to start session**|If **Enable IP filters with permission to start session** is active, you can determine a list of IPs, individual or at intervals, that will be allowed to start a proxy session. Default option: **empty**.


### At Encryption section
:::(info) (**Info**)
Note that you must select an HSM device, only if you set the **Encryption mode*** to **HSM**.
:::
**Item**|**Description**
|---|---|
**Encryption mode***|Indicates if the encryption mode will be Default or HSM. Default option: **Default**.
**Select an HSM**|Selects the hardware device used to manage the encryption keys.

