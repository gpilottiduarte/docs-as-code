# Tokens de autenticação de usuários

Este documento fornece informações sobre a tela do relatório **Tokens de autenticação do usuário** que exibe informações sobre os tokens de autenticação MFA dos usuários.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **MFA \> Tokens de autenticação do usuário.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Excluir tokens** | Botão | Exclui os tokens selecionados. |
| **Excluir tokens e inativar usuários** | Botão | Exclui os tokens e os usuários selecionados. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Usuário** | Campo de texto | Filtra os tokens pelo nome do usuário. |
| **Nome de usuário** | Campo de texto | Filtra os tokens pelo nome de usuário do usuário. |
| **Validado** | Menu suspenso | Filtra os tokens por seu estado de ativação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Checkbox:** usado para as operações em lote no rodapé.  
* **Usuário.**  
* **Nome do usuário.**  
* **Definido em**: exibe a data em que o token foi definido. Formato: `DD/MM/AAAA` e `HH:MM`.
* **Validado**.  
* **Confiar no IP**: endereço de IP confiável e que dispensa a utilização do token.  
* **Confiar até**: data máxima para acesso sem token. Formato: `DD/MM/AAAA` e `HH:MM`.
* **Ações:**  
  * **Excluir token**: exclui o token do usuário do Segura.

:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.
:::