# About Actions during a session

This document provides information about actions that can happen **during** a session.

The operator user follows the previous settings and immediate actions from the admin user. The last settings, made before the session, determine how the session will be.  Once the session has started, the settings are irrevocable.

For example, an audit command created or modified won’t be considered for the running sessions. Only after reconnecting the command will be accepted.

## Possible actions
**Execution of audited commands:** Previous commands are acceptable in the session. Every time the operator user executes the command, it gives a score for the risk level of the session and sends a warning to the admin users through SIEM messages. Action can be added to the command, such as execution prohibit, session interruption, or user account deactivation.

**Evaluation of file transfer:** Files transferred from the operator's workstation to the target device and vice versa can be evaluated through plugins. 
:::(Info) (**Info**)
The demand for these plugins should be forwarded to our Commercial team.
:::

**Session live stream:** administrators can follow an ongoing session without the operator’s knowledge. During this, the admins can interrupt the operator’s interaction, who will receive a notification from a known user and can’t start new sessions until further release.
:::(Info) (**Info**)
The preview and lock actions are recorded in the session logs.
:::
:::(Warning) (**Warning**)
The livestream of the session is exclusive to the server connected to the proxy session, and it's not accessible to other members of the Segura cluster. However, recorded logs and videos are still available to all cluster members.
:::
**Session interruption:** The administrator may interrupt an ongoing session without user consent and notice. This action will be recorded in the session logs.

**Elevation of privilege in SSH sessions:** During the SSH session, the user operator can perform elevation of privilege through the SUDO binary. Thus, Segura will capture user interactivity and automate authentication without displaying the access credential password.
