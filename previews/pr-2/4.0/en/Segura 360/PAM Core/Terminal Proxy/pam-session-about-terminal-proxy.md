# Terminal Proxy

The Segura **Terminal Proxy** is a service available on **door 22** that operates under the SSHv2 protocol, which will audit target SSH and TELNET connections and authenticate the Segura user using the same account that the user uses in the web interface. 

This login respects the same account lock and MFA settings. Terminal Proxy has a simplified terminal for consulting credentials and basic file transfer operations. However, its main purpose is to deliver the connection to the remote device.

:::(warning) (**Attention**)
Segura authenticates on the target device using the native protocols of the requested session. Providing the user with an already authenticated session, without the risk of exposing the credential used.
:::

#### Supported protocols

* SSH.
* Telnet.
* SFTP.
* SCP.