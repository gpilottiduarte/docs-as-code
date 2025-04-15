# How to run an application using GO Windows client

**PEDM GO Endpoint Manager for Windows** allows users to run applications normally, with elevation of privileges or by impersonating other users.

Follow the steps below to run an application on the GO client for Windows in all the scenarios described.

1. On the desktop of a *workstation* with the **PEDM GO Endpoint Manager** *client* installed, run **senhasegura.go** (Core).
2. In the first column of the application, click on the **Run** option.
3. Select the application you want to run and right-click.
4. Select one of the execution options:
 	* **Run**: runs the application with elevation of privileges of the user logged into the operating system, according to the general and access list parameters. Uses tokens to authenticate with the senhasegura server. It is not necessary to have a user registered with senhasegura **PAM**.
 	* **Run as impersonated user**: runs the application as another user. It is necessary to have a credential registered in senhasegura **PAM**, referring to the user who is performing the action. Authentication is carried out by senhasegura. Requires [impersonation](/docs/pt/go-endpoint-manager-windows-impersonation).
 	* **Run as user (runas)**: runs the application as another user, using the `run as` Windows service. It is necessary to have a credential registered in senhasegura **PAM**, referring to the user who is performing the action.
 	* **Run as non-elevated user (runas)**: runs the application as another user, but without elevation of privileges, using the `run as` Windows service. It is necessary to have a credential registered in senhasegura **PAM**, referring to the user who is performing the action.

:::(Info)(Info)
For users in access groups that require approval, the application will be executed after authorization from the administrator.
:::

## Run an application outside the GO client

It is also possible to run an application with elevation of privileges outside the **senhasegura.go** *client*, to do this, follow the steps:

1. On the desktop of a *workstation* with the **PEDM GO Endpoint Manager** *client* installed, locate the application you want to run and right-click.
2. Select the `Run with GO Endpoint Manager` option.

## List of available applications

It is possible that not all applications are listed in the senhasegura.go run option. In these cases, follow the steps below:

1. Find the shortcut, or the execution file (`.exe`, `.lnk`, `.msc` and `.msi`), of the desired application in the operating system, click and drag it into the list of senhasegura.go applications.
2. Click the **Update** button.
