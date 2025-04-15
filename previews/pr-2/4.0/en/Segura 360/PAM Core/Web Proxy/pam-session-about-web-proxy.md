# Web Proxy

The **Web Proxy** presented in the **PAM Core** module is a function provided by Segura that allows users to use some protocols to start sessions.

Segura Web Proxy provides all types of connectivity to target devices through an HTML5 interface with WebSockets that any modern browser can access. You don’t need to install agents on the operator user's workstation.

Because it’s in a browser, the integrations aren’t the same in regular end-to-end dedicated clients. But the main features are provided by quick and practical means.

:::(warning) (**Attention**)
The Segura authentic on the target device using the native protocols of the requested session, providing the user with an already established session, without the risk of exposing the credential used.
:::

All features used by standard protocol clients are available on these connections. Some features may vary slightly in usability from running in a web browser but successfully deliver the same objectives.

As a more flexible channel, without the limitations of clients dedicated to exclusive protocols, Segura Web Proxy allows proxy sessions, including particular protocols and tools, such as X11, VNC, and HTTP/HTTPS websites.

## Supported Web protocols 

* **SSH** and **TELNET**: it has the same functionalities as Segura Terminal Proxy.
* **VNC**: protected access to devices with VNC support.
* **X11**: protected access to devices with X11 support.
* **Citrix VDA**: virtualized access to applications and desktops in a centrally controlled and managed environment.
* **HTTP/HTTPS**: authenticated access to a target website via an embedded, isolated browser.
* **Databases ODBC**: access to databases using Open Database Connectivity (ODBC) allows applications to communicate and interact with different types of databases in a standardized and independent way.
* **RDP**: the difference between RDP Proxy is in uploading and downloading files without the possibility of sharing resources from the source machine. However, it has the same usability for operating remote applications.