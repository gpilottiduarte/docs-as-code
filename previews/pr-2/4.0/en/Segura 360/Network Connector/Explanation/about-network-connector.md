# About Network Connector


**Network Connector** is a Segura module, which allows users to carry out sessions on devices located on networks that do not have connectivity with Segura, or on networks with overlapping IPs.

Furthermore, **Network Connector** supports all types of connections available in Segura, such as `RDP`, `SSH`, `Telnet`, `HTTP/HTTPS`, among others.

This solution is composed of the **Network Connector *Server*** and the **Agent**.

:::(error) (Alert)
The device that has the agent installed must be able to see Segura for the connection to be made.
:::

:::(error) (Alert)
When modifying the destination of the request for a tunnel established by the Agent, the Network Connector becomes incompatible with the use of certificates. This is because, in this context, certificates depend on the destination of the request to perform one of the necessary validations.
:::