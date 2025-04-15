# Tokens

Este documento fornece informações sobre o relatório **Tokens**, que exibe as informações sobre os tokens de usuários que são utilizados para autenticação em consultas à API do Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Serviços \> API \> Tokens.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Cliente** | Campo de texto | Filtra pelo nome do cliente do token. |
| **Token** | Campo de texto | Filtra pelo valor do token. |
| **Acesso limitado** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Validade** | Campo de data | Filtra os registros pela sua data de validade. |

## Campos do relatório
* **Código:** código do token no Segura.  
* **Cliente.**  
* **Token.**  
* **Acesso limitado.**  
* **Validade:** mostra a data de validade do token no formato `DD/MM/AAAA HH:MM`.  
* **IPs:** endereços de IP que estão permitidos ao token.  
* **Recursos:** recursos associados ao token.

:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.
:::

