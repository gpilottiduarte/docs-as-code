# RDP Proxy

Segura **RDP Proxy** is a service available on port 3389 through the RDP protocol that will audit target RDP connections.

It mediates all the functionalities available in a common RDP connection between a Microsoft Windows device, without interfering with the user's operator experience, but with all the security and audit guarantees of Segura.

Any device that offers the RDP protocol connection can be connected as long as it’s aligned with the security levels offered, while Segura acts as a server (in communication between the user's workstation with the Segura), or as a client (in communication between the Segura and the target server device).

1. Support for Windows RDP version 5.2 and higher.
2. Support for Microsoft®Windows®Server 2003 and higher.
3. Support for Linux XRDP servers version 0.9.x and higher.
4. Support para RAIL session connection.

:::(warning) (**Attention**)
In Windows environments, it’s important to create stricter security policies. To better understand and download the complete guide, access the [About security settings for RDP Proxy and RemoteApp](/v4/docs/pam-session-about-security-settings-for-rdp-proxy-and-remoteapp) document.
:::

## Supported protocols

* RDP versions 5.2 or higher.


:::(info) (**Info**)
Segura authenticates on the target device using the native protocols for the requested session.
:::