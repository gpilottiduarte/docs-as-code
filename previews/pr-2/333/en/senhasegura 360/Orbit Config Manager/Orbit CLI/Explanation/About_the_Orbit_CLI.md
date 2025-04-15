# About the Orbit CLI

**Orbit CLI** is the senhasegura console created to provide tools for system configuration and administrative routines.

With this tool, administrators can easily connect to network services, ensure that binaries are always up to date, and perform essential maintenance and configuration operations in a centralized manner. This reduces the complexity of system management, increases operational efficiency, and allows for more agile and secure administration.

## Key Features

1. **System Update:** System update is an exclusive operation of **Orbit CLI**.

1. **Cluster Configuration:** Cluster configuration is an operation that can be performed both through the web interface and **Orbit CLI**.

1. **Network Configuration:** Network configuration is an exclusive operation of **Orbit CLI**.

1. **Backup Configuration:** Backup can be configured both through the web interface and through **Orbit CLI**.

:::(Warning) (Attention)
These operations require elevated privileges, being restricted to users `root` and `mt4adm`. It is important to note that, in the case of user `mt4adm`, it is necessary to execute the command with **superuser permission (sudo)**, otherwise, **Orbit CLI** will return the message:
```
mt4adm@vmdf-senseg:~$ orbit -h
This program must be run with root permissions!
```
:::