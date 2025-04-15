# Record sessions

This document describes how to configure parameters for session recording in Segura EPM.

## Possible recording session scenarios
The global parameter and the [access policies](/v4/docs/epm-windows-how-to-create-access-policy) are active and related to the recording.
Applications included in the access list will be recorded, including those outside of EPM.
The global parameter is active and there is no existing access list.
Any execution of EPM Windows will be recorded.
When the user starts a JIT process, all their actions are audited by video and forwarded to the Segura server, similar to a RunAs elevation.

## Types of recording with EPM Windows

1. Any execution:
    * Core applications (execute, control panel, network adapters, uninstall).
2. Just-in-time:
    * The entire session is recorded until the user logs off or until the user cancels just in time.
3. Automation:
    * All automation is carried out in the process.

::: (error) (Alert)
Actions performed on Network Adapters and credential withdrawal is not recorded.
:::