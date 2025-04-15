# RemoteApp

**RemoteApp** is a connection made via protocol channels that establishes an open channel directly on the desired binary. When authentication is required, it can be performed using binary arguments or the automation macro.

Using Terminal Services and Remote Desktop Services, you can perform role-based actions that allow you to:

* Launch RemoteApp and desktop connection in a web browser.
* Connect the user to the website hosted on the TS Web Access server.
* Connect the user to the website and display a list of available RemoteApp programs.
* Connect the user to the remote desktop of any server on which the user has the required TS Web Access permissions.

The operator user will be isolated to the RemoteApp binary in the RDP or SSH session. If the user minimizes the application window, other applications can’t be used. Additionally, if the RemoteApp binary is closed, the session will be terminated.

:::(warning) (**Attention**)
For RemoteApp, the Audited Command feature **won’t** be available.
:::