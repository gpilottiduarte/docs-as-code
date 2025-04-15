# How to make an SSH connection via Terminal Proxy 2.0

This document provides information about a step-by-step guide on how to make an SSH connection via Terminal Proxy.

## Requirements

* Have a command prompt-type application installed on the machine.

---
## SSH connection  
To make an SSH connection to a device that has this connectivity linked to a valid credential, you’ll need to run the command `ssh` followed by the credential and device as is done in a standard SSH connection. Follow the steps below:

| **String** | **Description** |
| :---- | :---- |
| **senhasegura_user** | Username used to access the vault. |
| **senhasegura_vault** | Hostname or IP address of the Segura to be accessed. |
| **tenant_name** | Name of the tenant to be accessed. |
| **credential** | User of the credential you want to use for access. |
| **target_device** and **IP** | Hostname or IP address of the device you want to access. |

## Multi-tenant access

Multi-tenant access is only possible through Proxy 2.0.

:::(warning) (**Attention**)  
If the tenant isn’t informed, the system will consider the Segura tenant.  
:::

**Connection to the proxy terminal with multi-tenant:**  
`senhasegura_user%tenant_name@senhasegura_vault`

---
## Access using Proxy 2.0

When accessing a device with more than one connectivity type registered through Proxy 2.0 using Terminal Proxy, users will be presented with a protocol selection screen, the options being SSH or Telnet.

1. Follow the steps described in the SSH Connection section.  
2. On the Segura shell home screen, type in the desired connectivity option:  
   1. SSH port **22**, type `1`, and press **Enter**.  
   2. Telnet port **23**, type `2`, and press **Enter**.  
3. After choosing, type:  
   1. `ssh credential@target_device` or `ssh credential@IP` for SSH connectivity.  
   2. `telnet credential@target_device` or `telnet credential@IP` for Telnet connectivity.  
4. Press **Enter**.

After these steps, the connection to a device is ready for use.

:::(warning) (**Attention**)  
Depending on the operating system used, the use of the backslash ( \ ) is necessary for the command to work correctly.  
:::

To access the target device in applications that don’t provide interactive prompts or if you don’t want to go through the Segura shell screen, use the *Multihop*. Access the specific documentation to learn how to make this type of connection.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.