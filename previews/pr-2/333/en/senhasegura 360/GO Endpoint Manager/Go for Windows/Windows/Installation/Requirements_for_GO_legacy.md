# Requirements for GO legacy

This article describes the requirements for the installation and proper functioning of **GO Endpoint Manager for Windows** in legacy version (3.26 or earlier).

* * *

## **Requirements**

* Administrator permission in the user's workstation.
* Inclusion of **GO Endpoint Manager for Windows** as [Antivirus exclusions](/v3-33/docs/go-windows-antivirus-exclusions).
* Inclusion of **GO Endpoint Manager for Windows** as an exception in the system hardening process.

:::(Error) (Important)
If you don't include **GO Endpoint Manager for Windows** as an exception in the system hardening process, it won't work.
:::

* * *

## Hardware requirements - Workstations

The Go Endpoint Manager for Windows requires at least the following hardware resources:

| Item | Specification |
| --- | --- |
| **CPUs** | 4 CPUs |
| **RAM** | 4 GB of RAM |

* * *

## Dependencies

The following development resources are required for **Go Endpoint Manager for Windows** to work:
 
| Item | Specification |
| --- | --- |
| **.NET** | Microsoft .NET Framework 4.8 |
| **Libraries** | Versions x86 and  x64 of the Microsoft Visual C++ Redistributable for Visual Studio (2015, 2017, 2019, and 2022) Bundle |

:::(Warning) (Caution)
Discontinued versions of operating systems may not support Microsoft .NET updates, which may result in system incompatibility.
:::

* * *

## Supported versions

The following operating systems support **Go Endpoint Manager for Windows** in legacy version (3.26 or earlier):

:::(Info) (Info)
The **GO Endpoint Manager for Windows** is designed for Windows Server and 64-bit Workstations.
:::

| Operational system | Specification |
| --- | --- |
| Windows Server  | 2019 (64-bit)|
| Windows Server  | Version 1803 and above (64-bit)|
| Windows Server  | 2016 (64-bit)|
| Windows Server | 2012 R2 (64-bit) |
| Windows Server  | 2012 (64-bit) |
| Windows Server  | 2008 R2 SP1 (64-bit)*|
| Windows 10 | Version 1607 and above (64-bit) |
| Windows 8.1 | 64-bit |
| Windows 7 | 64-bit* |

:::(Info) (Info)
For Windows Server 2008 R2 SP1 and Windows 7 environments, you must configure the SSL/TLS, fot this, access the [How to configure SSL/TLS](/v3-33/docs/go-windows-how-to-configure-ssltls) documentation.
:::

:::(Warning) (Caution)
If you need an unsupported version, request support for another version on the [senhasegura suggestions](https://senhasegura.com/suggestions/){target="_blank"} website.
:::
