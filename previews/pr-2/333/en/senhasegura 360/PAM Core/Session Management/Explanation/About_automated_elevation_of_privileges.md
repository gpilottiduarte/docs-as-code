# About automated elevation of privileges

senhasegura can allow users to perform elevated tasks, such as SUDO, without needing to know the credential's password.

In these cases, users will have their interactivity captured and senhasegura will perform the elevation using the same credential used to authenticate on the target device.

For automated elevation to be used, the **Enable sudo automation in sessions** must be set to **Yes**. To configure remote sessions, access the document [How to configure a remote session (proxy)](/v3-33/docs/pam-session-configure-remote-session-proxy).

Elevation of privileges is valid for Terminal Proxy or terminal sessions via Web Proxy, where before using a privileged command, the user must type `sudo <command>` for it to be executed.

If the elevation of privilege is disabled for the session, you’ll be prompted for the device credential password when attempting to perform the action.
