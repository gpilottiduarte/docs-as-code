# About RDP RemoteApp

An **RDP RemoteApp** connection is performed by protocol channels.
The connection is established and a channel is opened directly on the desired binary. If the binary requires authentication, it can be done through binary arguments or by the automation macro.

The operator user will be isolated from the RemoteApp binary in the RDP session. If the user minimizes the application window, other applications cannot be used. Additionally, if the user closes the RemoteApp binary, the session will be terminated.

:::(warning) (**Attention**)
For RemoteApp, the audited command feature won’t be available.
:::

To configure RemoteApp you need to configure the macro, access the How to configure a RemoteApp document to perform this action.

In the report, you can access all macros and RemoteApps registered on senhasegura. Note that the configuration is populated with the location of the binary and, as arguments, the masks will be applied to username, password, hostname, and additional information.

Finally, configure a [credential](/v3-33/docs/pam-how-to-set-up-a-credential-in-senhasegura) with the RemoteApp macro to use and, if necessary, provide the device access credential.

When you log in using senhasegura RDP Proxy, if the credential has a RemoteApp configured, the available options for access will be displayed to the user, but, if the credential is configured to restrict access only to the remote application, then the option to access the system won’t be displayed.

:::(warning) (**Attention**)
In Windows environments, it’s important to create stricter security policies. To better understand and download the complete guide, access the [About security settings for RDP Proxy and RemoteApp](/v3-33/docs/pam-session-about-security-settings-for-rdp-proxy-and-remoteapp) document.
:::
