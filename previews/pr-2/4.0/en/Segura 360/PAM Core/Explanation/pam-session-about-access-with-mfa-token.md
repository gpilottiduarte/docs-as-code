# About access with MFA token

Multi-factor authentication is an extra layer of security added to your account. With it, you can log in with the password and additionally with the code sent to a device.

To configure an MFA token, access the [Add multi-factor authentication](/v4/docs/how-to-add-multi-factor-authentication) document.
If MFA access is configured, you’ll be prompted for the token when you log in to Terminal Proxy and RDP Proxy. If you configure it to request an MFA token even when starting proxy sessions, you’ll be prompted again.

The access workflow and emergency access settings will also be applied if necessary.

:::(warning) (**Attention**)
Depending on the User Security Posture, using MFA to start a session may be required or required more frequently.
:::