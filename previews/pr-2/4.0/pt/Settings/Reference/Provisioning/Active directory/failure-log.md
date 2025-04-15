# Registro de falhas

Este documento fornece informações sobre a tela do relatório **Falhas de autenticação LDAP** que registra as falhas de autenticação LDAP/AD.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active directory \> Registro de falhas.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Cód. Erro** | Campo de texto | Filtra pelo código de erro da autenticação. |
| **Usuário** | Campo de texto | Filtra pelo nome de usuário que realizou a tentativa de autenticação. |
| **Data da tentativa** | Seletor de data | Filtra de acordo com o período estipulado. |

## Campos do relatório
* **Data:** data em que ocorreu a falha de autenticação.  
* **Cód. Erro.**  
* **Erro AD:** código do erro no Active Directory.  
* **Usuário.**  
* **Mensagens:** mensagens de erros recebidas pelo Segura.  
* **Mensagem de erro:** mensagens de erros recebidas pelo Segura exibidas com tratamento para melhor legibilidade.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::