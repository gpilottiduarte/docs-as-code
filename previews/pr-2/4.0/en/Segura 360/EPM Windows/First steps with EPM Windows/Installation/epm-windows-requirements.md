# EPM Windows agent requirements

This document describes the requirements for installing and operating **EPM Windows**.

## Requirements

To ensure proper operation:

1. Add **EPM Windows** to your [Antivirus exclusions](/v4/docs/epm-windows-antivirus-exclusions)  
2. Include **EPM Windows** as an exception in system hardening processes

::: (Warning) (Attention) 
Failure to include **EPM Windows** in system hardening exceptions will prevent normal operation. 
:::

## Hardware specifications

| Sessions | CPU Cores | RAM (GB) | Storage (TB) |
| :---- | :---- | :---- | :---- |
| Up to 50 | 4 | 4 | \- |
| 50 \- 100 | 8 | 8 | 8 |
| 500 | 16\* | 16 | 16 |

\* Requires `pm.max_children` parameter set to 10\.  For sessions exceeding 500, consult Segura support for tailored recommendations.

## Dependencies

| Component | Requirement |
| :---- | :---- |
| .NET | Microsoft .NET 8 Desktop Runtime ≥ 8.0.13 |
| Libraries | Microsoft Visual C++ Redistributable (2015-2022) x86/x64 |

::: (warning) (Attention)
1. **EPM Windows** requires .NET Framework 8 as its primary dependency  
2. Legacy OS versions may have compatibility limitations 
:::

## Supported platforms

::: (info) (Info)
**EPM Windows** is optimized for Windows Server environments and x64 workstations. 
:::

| OS | Version | Architecture |
| :---- | :---- | :---- |
| Windows Server | 2022 (64-bit) | x64 |
| Windows Server | 2019 (64-bit) | x64 |
| Windows Server | Version 1803 and later (64-bit) | x64 |
| Windows Server | 2016 (64-bit) | x64 |
| Windows Server | 2012 R2 (64-bit) | x64 |
| Windows Server | 2012 (64-bit) | x64 |
| Windows | 8.1 (64-bit) | x64 |
| Windows | 10 version 1607 and later (64-bit) | x64 |
| Windows | 11 (64-bit) | x64 |

::: (info) (Info)
For unsupported OS versions:
1. Visit [Segura suggestions portal](https://Segura.com/suggestions)  
2. Submit official support request 
:::