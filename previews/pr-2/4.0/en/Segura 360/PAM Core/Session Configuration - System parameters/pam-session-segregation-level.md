# About Segregation levels

## What is a Segregation level?
It’s the action of creating segments inside the system's default parameters for the remote sessions, which facilitates security policy management and possible exceptions on devices that don’t support specific configurations.
For example, some devices that use the RDP protocol don’t support the TLS security level and must be isolated in a separate configuration if the global level isn’t configured in **Automatic** mode. Another example is Linux devices that, by strategic decision or technical limitations, do not support automated privilege elevation with SUDO.

---
## Segregation hierarchy
Segregations respect hierarchy and rewriting order. They override system default settings, acting as a chain of adjustment layers where the next layer will always have the power to rewrite under the previous one:

1. Global parameters (system default)
2. Groups segregated parameter
3. Device segregated parameters
4. Credential segregated parameters
5. Parameters segregated by origin

This way, a parameter defined in the Global layer can be overwritten by Access Group segregation, which can be overwritten by Device segregation, and so on, so this way the Origin segregaton can overwrite all the other ones.

:::(info) (**Info**)
If a group, device, credential and/or origin is included in more than one segregation, the configuration of the oldest segregation (lowest ID) of that type is used.
:::

The segregating layer has the option of keeping the current parameter unchanged. Therefore, there is no obligation to define all parameters for each layer. Note that a session may have to consider some of these rules, all or none at all. It makes the configuration possibilities very flexible.

---
## Applicabilities
It can be done for:

* [Global](/v4/docs/pam-session-configure-remote-session-proxy).
* [Groups](/v4/docs/pam-session-create-segregation-group).
* [Device](/v4/docs/pam-session-create-segregation-device).
* [Credential](/v4/docs/pam-session-create-segregation-credentials).
* [Origin](/v4/docs/pam-session-create-segregation-origin).