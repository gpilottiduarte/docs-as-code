# System parameters - Security

This document provides information about the **System parameters** form screen, which refers to the security parameters of proxy sessions, on the **Security** tab.

:::(warning) (**Caution**)  
Some features in older versions of Segura are no longer present in this documentation. We suggest that you avoid changing parameters that aren’t in this document.  
:::

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **System Parameters >Global > Security.**

:::(warning) (**Attention**)  
All fields are set with a default value, as recommended by Segura. However, you can customize your session according to your needs.  
::: 

## Security Tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Force multi-factor authentication to view password?*** | Radio button | Yes | Forces the multifactor authentication to view a password.Default option: **No**. |
| **Time between token requirement for custody (minutes)** | Quantity input | No | Defines the time interval in which tokens must be requested for password display. It can range from **0** to **60** minutes. Default option: **5 minutes**. |
| **Ignore the 'Trust this computer' option to view password?*** | Radio button | Yes | Indicates if the checkbox displayed when logging into the Segura environment should be disregarded for examining passwords. Default option: **No**. |
| **Force multi-factor authentication to start a session?*** | Radio button | Yes | Forces the user to use the 2FA token to start proxy sessions. Default option: **No**. |
| **Time between token requirement for sessions (minutes)** | Quantity input | No | Defines the time interval in which tokens must be requested to perform a session. It can range from **0** to **60** minutes. Default option: **5 minutes**.v |
| **Ignore the 'Trust this computer' option to start a session?*** | Radio button | Yes | Indicates whether the checkbox displayed when logging into the Segura environment should be disregarded for examining passwords. Default option: **No**. |
| **Force secure connection (SSL) on password change executions?*** | Radio button | Yes | Forces the use of a secure connection during the password change. Default option: **Yes**. |
| **Enable password change after session opening?*** | Radio button | Yes | Enables Segura to change the password right after the proxy session starts. Default option: **No**. |
| **Force certificate authentication for RDP Proxy?*** | Radio button | Yes | Forces a session to be authenticated by a digital certificate when connecting through RDP Proxy. Default option: **No**. |
| **Force certificate authentication for the SSH/Telnet Proxy?*** | Radio button | Yes | Forces a session to be authenticated by a digital certificate when connecting through SSH/Telnet Proxy. Default option: **No**. |
| **RDP* safe mode** | Dropdown menu | Yes | Indicates the security level of target RDP connections. It can be **Automatic**, **RDP**, **NLA,** or **TLS.** By default, ***Automatic*** is set. With this set, the client and server will determine the level of security. Since it functions as a bridge, the client in this scenario is the Segura platform. To adjust the security level of incoming connections to Segura, refer to the RDP Proxy documents. |
| **Session idle time*** | Quantity input and dropdown menu | Yes | Defines the idle session duration that will trigger an automatic disconnection. You can select a duration between Minutes, Hours, and Days. The number can range from 0 to 60\. Default option: **1 day**. |
| **Enable IP filters with permission to start session** | Checkbox | No | Enables a filter based on the IP address that controls the IP address that has permission to start proxy sessions. Default option: **inactivate**. |
| **Allowed IPs to start session** | Text field | No | If **Enable IP filters with permission to start session** is active, you can determine a list of IPs, individual or at intervals, that will be allowed to start a proxy session. Default option: **Empty**. |

## Encryption section  
:::(info) (**Info**)  
Only if you set the **Encryption mode** to **HSM**, you must select an HSM device.  
:::

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Encryption mode*** | Radio button | Yes | Indicates if the encryption mode will be **Default** or **HSM**. Default option: **Default**. |
| **Select an HSM** | Dropdown menu | No | Selects the hardware device used to manage the encryption keys. |