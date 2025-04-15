# Requisitos para o GO legacy

Este artigo descreve os requisitos para a instalação e o funcionamento adequado do **GO Endpoint Manager for Windows** na versão Legacy (3.26 ou anterior)

* * *

## **Requisitos**

* Permissão de administrador na workstation do usuário.
* nclusão do **GO Endpoint Manager for Windows** como [exceção nas regras do antivírus](/v3-33/docs/pt/go-windows-antivirus-exclusions).
* Inclusão do GO Endpoint Manager for Windows como exceção no processo de hardening do sistema.

:::(Error) (Importante)
Se você não incluir o GO Endpoint Manager para Windows como exceção no processo de hardening do sistema ele não funcionará.
:::

* * *

## Requisitos de hardware - Workstations

Para o funcionamento do **GO Endpoint Manager for Windows**, são necessários, no mínimo, os seguintes recursos de hardware:

| Item | Specification |
| --- | --- |
| **CPUs** | 4 CPUs |
| **RAM** | 4 GB of RAM |

* * *

## Dependências

Para o funcionamento do **GO Endpoint Manager for Windows** são necessários os seguintes recursos de desenvolvimento:
 
| Item | Specification |
| --- | --- |
| **.NET** | Microsoft .NET Framework 4.8 |
| **Bibliotecas** | Bundle Microsoft Visual C++ Redistributable for Visual Studio (2015, 2017, 2019 e 2022) versões x86 e x64. |

:::(Warning) (Cuidado)
As versões descontinuadas de sistemas operacionais podem não suportar atualizações do Microsoft .NET, o que pode resultar em uma incompatibilidade do sistema.
:::

* * *

## Versões suportadas

Os seguintes sistemas operacionais dão suporte para o **GO Endpoint Manager for Windows** na versão Legacy (3.26 ou anterior):

:::(Info) (Info)
O **GO Endpoint Manager for Windows** foi desenvolvido para Windows Server e Workstations de 64 bits.
:::

| Sistema operacional  | Especificação |
| --- | --- |
| Windows Server  | 2019 (64-bit)|
| Windows Server  | Versão 1803 e superior (64-bit)|
| Windows Server  | 2016 (64-bit)|
| Windows Server | 2012 R2 (64-bit) |
| Windows Server  | 2012 (64-bit) |
| Windows Server  | 2008 R2 SP1 (64-bit).*|
| Windows 10 | Versão 1607 e superior (64-bit) |
| Windows 8.1 | 64-bit |
| Windows 7 | 64-bit* |

*Para ambientes Windows Server 2008 R2 SP1 e Windows 7, é preciso [configurar o SSL/TLS](/v3-33/docs/pt/go-windows-how-to-configure-ssltls).

:::(Warning) (Cuidado)
Caso necessite de uma versão não suportada, solicite suporte para outra versão no site [senhasegura suggestions](https://senhasegura.com/suggestions/){target="_blank"}.
:::