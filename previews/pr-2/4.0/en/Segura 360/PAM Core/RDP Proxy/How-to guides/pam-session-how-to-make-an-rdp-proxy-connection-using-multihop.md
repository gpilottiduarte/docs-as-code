# How to make an RDP Proxy connection using Multihop

This document provides information about a step-by-step guide on how to make a connection to a Segura server using Multihop.

To facilitate access to the target device, use a connection syntax that contains the target access credential.

## Requirements

* Have an RDP application installed on the machine.

---
## Connect with Multihop
There are some possible syntax variations for the connection. To perform them, replace the strings with the requested data, as shown in the table below:
**String**|**Description**
|---|---|
**senhasegura_user**|User registered on Segura.
**credential**|Credential that will be used for access.
**domain**|Domain of the device that will be accessed.
**target_device**|IP address or hostname of the device that will be accessed.
**mfa_token**|MFA Token code for access authentication.

#### Connection containing user and device
`senhasegura_user[credential@target_device]`

#### Connection containing user, device, and domain
`senhasegura_user[domain\credential@target_device]`

#### Connection containing the user, device, and access token
`senhasegura_user[domain\credential@target_device]mfa_token`

:::(info) (**Info**)
Users with **MFA Tokens** configured will also be presented with the token prompt in the next step.
:::

:::(info) (**Info**)
It’s possible to block or interrupt the session and the user, while the session is active, to find out how to perform this action, access the [How to block a user during a session](/v4/docs/pam-session-how-to-block-a-user-during-a-session) document.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.