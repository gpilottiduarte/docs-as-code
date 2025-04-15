# Requirements

This article describes the requirements for installing **GO Endpoint Manager for Windows** and its proper functioning.

* * *

## **Requirements**

* An administrator permission in the user's workstation.
* The inclusion of **GO Endpoint Manager for Windows** as [Antivirus exclusions](/v3-33/docs/go-windows-antivirus-exclusions).
* The inclusion of **GO Endpoint Manager for Windows** as an exception in the system hardening process.

:::(Error) (Important)
If you don't include **GO Endpoint Manager for Windows** as an exception in the system hardening process, it won't work.
:::

* * *

## Hardware requirements - Workstations

The **Go Endpoint Manager for Windows** requires at least the following hardware resources:

- Scenario with up to 50 simultaneous sessions

| CPU | RAM (GB) |
| --- | --- |
| 4 | 4 |

- Scenario with 50 or more simultaneous sessions

| Simultaneous sessions | CPU | RAM (GB) | Disk(TB) |
| --- | --- | --- | --- |
| 50 | 8 | 8 | 8 |
| 100 | 8 | 8 | 8 |
| 500 | 16 (*) | 16 | 16 |
| 1000 | 16 (*) | 16 | 32 |
| 1000 + | 16 (*) | 16 | 64 |

(*) - variable "pm.max_children" equal to 10

* * *

## Dependencies

The following development resources are required for **Go Endpoint Manager for Windows** to work:
 
| Item | Specification |
| --- | --- |
| **.NET** | Microsoft .NET 6 Desktop Runtime 6.0.11 (or updates of .NET 6) |
| **Libraries** | Versions x86 and/or x64 of the Microsoft Visual C++ Redistributable for Visual Studio (2015, 2017, 2019, and 2022) Bundle. |

:::(Warning) (Caution)

* Note that **Go Endpoint Manager for Windows** requires .NET 6 installed as a dependency. The PEDM can run with .NET 7 as long as .NET 6 is also installed on the machine.
* Discontinued versions of operating systems may not support Microsoft .NET updates, which may result in system incompatibility.

:::

* * *

## Supported versions

The following operating systems support **Go Endpoint Manager for Windows** version 3.27 or later:

:::(Info) (Info)
The **GO Endpoint Manager for Windows** is designed for Windows Server and 64-bit Workstations.
:::

| Operational system | Specification |
| --- | --- |
| Windows Server  | 2019 (64-bit)|
| Windows Server  | Version 1803 and later (64-bit)|
| Windows Server  | 2016 (64-bit)|
| Windows Server | 2012 R2 (64-bit) |
| Windows Server  | 2012 (64-bit) |
| Windows  | 10 version 1607 and later (64-bit) |
| Windows  | 8.1 (64-bit) |

:::(Warning) (Caution)
If you need an unsupported version, request support for another version on the [senhasegura suggestions](https://senhasegura.com/suggestions/){target="_blank"} website.
:::
