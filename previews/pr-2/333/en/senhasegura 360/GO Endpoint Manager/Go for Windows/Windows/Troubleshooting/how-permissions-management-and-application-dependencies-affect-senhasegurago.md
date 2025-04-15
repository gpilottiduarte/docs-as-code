# How permissions management and application dependencies affect senhasegura.go

Some applications have dependencies and interactions with third-party files or applications, such as DLLs, configuration files, or other applications.

For these applications to work correctly, the user must have permission in the operating system to run the application and the application dependencies.

Suppose the administrator of a specific workstation revokes a user's access to the essential dependencies of an application. In that case, that application may display errors or fail to function both when run by the senhasegura.go client and when run directly by the operating system.

These permissions are settings made in the operational system and should not be confused with senhasegura or senhasegura.go client parameters. The senhasegura.go client works as an application management facilitator and respects the permissions established in the operational system.

Example:

The `calculator.exe` application depends on two more specific files, `sum.dll` and `multiplication.dll`. If access permission to the file `multiplication.dll` is removed, the application will run, and the sum operations will be successful, but the multiplication operations will return an error.