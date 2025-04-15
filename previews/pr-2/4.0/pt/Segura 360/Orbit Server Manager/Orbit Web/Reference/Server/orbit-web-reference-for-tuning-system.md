# Tuning da configuração do servidor

Este documento fornece informações sobre o relatório **Tuning da configuração do servidor** que apresenta informações sobre o  processo de tuning do servidor.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Orbit Server Manager**.  
2. No menu lateral, selecione **Servidor \> Tuning do sistema**.

## Tuning da Configuração do Servidor

Esse formulário permite ajustar configurações críticas para o desempenho do servidor, incluindo limites de conexão e uso de recursos no banco de dados, servidor web e clusters.

### Configuração Geral

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Perfil de uso do sistema** | Menu suspenso | Seleciona o perfil de uso padrão para ajustar as configurações conforme o cenário. Pode ser *Normal*, *Alto* ou *Muito alto*. |

### Banco de Dados

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Current** | Campo de texto | Exibe o limite atual de conexões simultâneas permitidas no banco de dados. |
| **Conexões (max\_connections)** | Campo de texto | Permite alterar o limite máximo de conexões simultâneas permitidas no banco de dados. |
| **Current** | Campo de texto | Exibe o valor atual para o tamanho do buffer do mecanismo de armazenamento InnoDB para otimização do desempenho. |
| **Buffer de InnoDB** | Campo de texto | Permite alterar o tamanho do buffer do mecanismo de armazenamento InnoDB para otimização do desempenho. |

### Servidor Web

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Current** | Campo de texto | Exibe o valor atual para o número de processos configurados para o servidor web. |
| **Processos** | Campo de texto | Permite alterar o número de processos configurados para o servidor web. |
| **Current** | Campo de texto | Exibe o valor atual para o limite de processos filho usados para gerenciar conexões simultâneas no servidor web. |
| **Processos filho** | Campo de texto | Permite alterar o limite de processos filho usados para gerenciar conexões simultâneas no servidor web. |

### Cluster de Banco de Dados

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Current** | Campo de texto | Exibe o valor atual para o número de threads configuradas para otimizar o desempenho em clusters de banco de dados. |
| **Threads** | Campo de texto | Permite alterar o número de threads configuradas para otimizar o desempenho em clusters de banco de dados. |

