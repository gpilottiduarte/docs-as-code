# Requisitos

Este artigo descreve os requisitos para a instalação e o funcionamento adequado do **GO Endpoint Manager for Windows**.

* * *

## **Requisitos Gerais**

* Permissão de administrador na workstation do usuário.
* Inclusão do **GO Endpoint Manager for Windows** como [exceção nas regras do antivírus](/v3-32/docs/pt/go-windows-antivirus-exclusions).
* Inclusão do **GO Endpoint Manager for Windows** como exceção no processo de hardening do sistema.

:::(Error) (Importante)
Se você não incluir o **GO Endpoint Manager for Windows** como exceção no processo de hardening do sistema, ele não funcionará.
:::

* * *

## Requisitos de hardware - Workstations

Para o funcionamento adequado do **Go Endpoint Manager for Windows**, o senhasegura recomenda, no mínimo, os seguintes recursos de hardware:

- Cenário com até 50 sessões simultâneas

| CPU | RAM (GB) |
| --- | --- |
| 4 | 4 |
- Cenário com 50 ou mais sessões simultâneas

| Sessões simultâneas | CPU | RAM (GB) | Disco (TB) |
| --- | --- | --- | --- |
| 50 | 8 | 8 | 8 |
| 100 | 8 | 8 | 8 |
| 500 | 16 (*) | 16 | 16 |
| 1000 | 16 (*) | 16 | 32 |
| 1000 + | 16 (*) | 16 | 64 |

(*)  - variável "pm.max_children" igual a 10

* * *

## Dependências

Para o funcionamento do **GO Endpoint Manager for Windows** são necessários os seguintes recursos de desenvolvimento:
 
| Item | Specification |
| --- | --- |
| **.NET** | Microsoft .NET 6 Desktop Runtime 6.0.11 (ou atualizações do .NET 6) |
| **Bibliotecas** | Bundle Microsoft Visual C++ Redistributable for Visual Studio (2015, 2017, 2019 e 2022) versões x86 e/ou x64. |

:::(Warning) (Cuidado)

* Note que o **Go Endpoint Manager for Windows** necessita do .NET 6 instalado como dependência. É possível executar o PEDM com o .NET 7, desde que o .NET 6 também esteja instalado na máquina.
* As versões descontinuadas de sistemas operacionais podem não suportar atualizações do Microsoft .NET, o que pode resultar em uma incompatibilidade do sistema.

:::

* * *

## Versões suportadas

Os seguintes sistemas operacionais dão suporte para o **GO Endpoint Manager for Windows** na versão 3.27 ou superior:

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
| Windows |10 versão 1607 e superior (64-bit) |
| Windows | 8.1 (64-bit) |

:::(Warning) (Cuidado)
Caso necessite de uma versão não suportada, solicite suporte para outra versão no site [senhasegura suggestions](https://senhasegura.com/suggestions/){target="_blank"}.
:::