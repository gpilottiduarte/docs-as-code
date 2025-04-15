# Requisitos EPM Windows agent

# Requisitos do agente EPM Windows

Este documento descreve os requisitos para a instalação e operação do **EPM Windows**.

## Requisitos

Para garantir o funcionamento adequado:

1. Adicione o **EPM Windows** às suas [**exclusões de antivírus**](/v4/docs/epm-windows-antivirus-exclusions) .  
2. Inclua o **EPM Windows** como uma exceção nos processos de fortalecimento do sistema.

::: (Warning) (Atenção) 
A falha em incluir o **EPM Windows** nas exceções de fortalecimento do sistema impedirá a operação normal. 
:::

## Especificações de Hardware

| Sessões | Núcleos de CPU | RAM (GB) | Armazenamento (TB) |
| :---- | :---- | :---- | :---- |
| Até 50 | 4 | 4 | \- |
| 50 \- 100 | 8 | 8 | 8 |
| 500 | 16\* | 16 | 16 |

- Requer o parâmetro **`pm.max_children`** configurado para 10\. Para sessões que excedem 500, consulte o suporte do Segura para recomendações personalizadas.

## Dependências

| Componente | Requisito |
| :---- | :---- |
| .NET | Microsoft .NET 8 Desktop Runtime ≥ 8.0.13 |
| Bibliotecas | Microsoft Visual C++ Redistributable (2015-2022) x86/x64 |

::: (warning) (Atenção)
1. O **EPM Windows** requer o .NET Framework v8 como dependência principal.  
2. Versões legadas do sistema operacional podem ter limitações de compatibilidade. 
:::

## Plataformas Suportadas

::: (info) (Info) 
O **EPM Windows** é otimizado para ambientes Windows Server e estações de trabalho x64. 
:::

| SO | Versão | Arquitetura |
| :---- | :---- | :---- |
| Windows Server | 2022 (64-bit) | x64 |
| Windows Server | 2019 (64-bit) | x64 |
| Windows Server | Versão 1803 e posteriores (64-bit) | x64 |
| Windows Server | 2016 (64-bit) | x64 |
| Windows Server | 2012 R2 (64-bit) | x64 |
| Windows Server | 2012 (64-bit) | x64 |
| Windows | 8.1 (64-bit) | x64 |
| Windows | 10 versão 1607 e posteriores (64-bit) | x64 |
| Windows | 11 (64-bit) | x64 |

::: (Info) (Para versões de SO não suportadas) 
1. Visite o [**portal de sugestões do Segura**](https://Segura.com/suggestions) .  
2. Envie uma solicitação oficial de suporte. 
:::