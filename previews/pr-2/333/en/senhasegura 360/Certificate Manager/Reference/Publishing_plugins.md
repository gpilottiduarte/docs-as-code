# Publishing plugins

<!-- Fix link -->
Currently, senhasegura uses the plugins below to publish certificates. This article only describes the specific configuration fields of each vendor's plugins. For more information, access [**How to publish a certificate**](/v3-33/docs/certificates-flow-how-to-publish-a-certificate).

## Windows

| Item | Description |
| --- | --- |
| **Store location** | The location of the saved certificate. There’s a drop-down menu displaying two options:  **Local Machine** (where all users accessing the machine get access to the certificate) or **Current User** (only the currently logged-in user gets access).|
| **Port for access for WinRM** | The commonly used port is TCP 5985. It's crucial to verify your firewalls and other security solutions to ensure this port isn't blocked.|
| **Certstore name** | The directory where the certificate will be installed during publication. There’s a dropdown menu containing the most relevant Windows directories.|
| **Certificate password** | This password can be any certificate password that's already saved within PAM. This speeds up the configuration process as it selects a credential that's already in the system.|
| **Manual input password** | Alternatively, if there’s no password saved in PAM, but the user wants to preconfigure a password certificate for multiple devices, it’s possible to add one here.|
| **Set password** | If the **Manual input password** field isn't enabled by default, this checkbox enables typing the password.|
| **Show password** | The checkbox that enables viewing the password.|
