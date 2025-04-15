# How to check the senhasegura version

In this document, you’ll find detailed instructions on how to check the senhasegura version. To ensure the integrity and compatibility of the environment, it’s essential to perform this verification.

:::(Warning) (Attention)
It’s crucial to ensure that all members of a cluster are on the same version to avoid conflicts and ensure the smooth operation of the environment.
:::


## Check the version
Access the terminal or command prompt of the operating system where the senhasegura instance is installed.
Use the command `sudo orbit version`.

This command will return the current version of the senhasegura instance installed on the system.

Example output:
```
mt4adm@giskard:~$ sudo orbit version
[sudo] password for mt4adm:
senhasegura Orbit Command-Line Interface
Version 3.31.1-4
+--------------------+--------+
| APPLICATION PACKAGES | VERSION |
+--------------------+--------+
| orbini-fwk | 3.31.1-9 |
| senhasegura-pam | 3.31.1-5 |
+--------------------+--------+
```
:::(Info) (Info)
When requesting technical support, always include the senhasegura version information, t. This will help the support team better understand the context and provide more effective assistance.
:::


