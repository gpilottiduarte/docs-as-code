# About Actions before a session

In this document, you’ll find all the information about actions that can be done before a session begins. The admin user can decide several configurations that determine how the operator will log in and how the session will be used.

## Possible actions
**Device connectivity:** connectivity is important for dashboards, testing, password exchange, and other modules. It also determines the proxy system used for device access.

**Credential activation control:** the credential can be activated and inactivated on demand.

**The password policy for exchange after a session:** the credential can be recycled after use in a proxy session.

**The access group and workflow configuration:** the credential usage workflow into a proxy session and the possibility of emergency use are configured by the administrator in the access groups.

**Macros and RemoteApp credentials:** **Macros** and **RemoteApps** can be configured and made available on specific credentials.

**Global and segregated audited commands:** you can set up Audited Commands for SSH globally. You can also set it up for **Device**, **Credential**, **Access Group**, or **Origins**. Commands can link to Action Triggers, and they take action when executed.

**Security levels per protocol:** each protocol can have version specifications, security level, and encryption algorithm. With Senhasegura, you can set up proxy systems and customize features for different protocols. You can do this globally or for each one individually.

**Ignoring certificate errors:** RDP connections typically present certificate errors during the connection step. The administrator can force only valid certificates or ignore certificate errors at the connection handshake.

**Session functionality:** during the session, the user can perform actions such as transferring text to a file, pressing `Ctrl+Alt+Del`, performing an automated privilege elevation, etc. It's possible to allow or block these actions globally or separately.

**Indexing input and output texts:** if the session requires auditing the typed texts and displayed texts, you can configure whether this audit will be recorded globally or separately. By default, this feature is deactivated. It’s recommended to enable it only on credentials and devices that require it.

**Allow wallpaper in RDP sessions:** some companies use custom wallpapers that contain device information, session, or security policies. By default, wallpaper transferring during **RDP** sessions is disabled to improve the RDP protocol performance.

**Types of Linux and Xterm terminals:** some Linux systems have different  client terminals using Linux or Xterm format. The handling of ANSI codes influences this. You can segregate the device configuration for each terminal.

**Use of personal credentials:** certain devices may let operators use personal credentials not managed by the platform. Yet, they still need to follow other access, control, and audit rules. Under these scenarios, we recommend that you do not index texts typed by the user.

**Concurrent proxy sessions limit:** security policy can be changed to prevent a user from running more than a certain amount of proxy sessions simultaneously.
