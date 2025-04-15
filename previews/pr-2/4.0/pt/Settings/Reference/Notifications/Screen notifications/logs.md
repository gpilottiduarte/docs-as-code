# Logs

Este documento fornece informações sobre a tela **Notificações**, que apresenta as informações sobre os parâmetros de notificações em tela de forma e por usuário.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Notificações em tela \> Logs.**

## Menu de Ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nova notificação** | Botão | Direciona para a janela **Criar notificação** para que seja criada uma nova notificação. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Data de exibição** | Campo de data | Filtra os registros pelo período em que foram exibidos. |
| **Título** | Campo de texto | Filtra a notificação pelo título da notificação. |
| **Texto** | Campo de texto | Filtra a notificação pelo texto no corpo da mensagem. |

## Campos do relatório

* **Código.**  
* **Título.**  
* **Texto.**  
* **Autor:** nome do usuário que foi o autor da notificação.  
* **Data Exibição:** data em que a notificação foi exibida ao usuário.  
* **Tempo Exibição:** indica qual o tempo de exibição, em segundos, que a notificação apareceu na tela do usuário.  
* **Ações**:  
  * **Visualizar Notificações por Usuário**: abre a janela **Notificações por usuário.**  
  * **Reenviar**: reenvia a notificação.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Criar notificação

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Título** | Campo de texto | Sim | Título da notificação. |
| **Texto** | Campo de texto | Sim | Mensagem do corpo da notificação. |
| **Tempo de exibição (ms)** | Campo de texto | Sim | Tempo em que a notificação será apresentada na tela do usuário. |
| **Usuários a notificar** | Menu suspenso | Não | Seleciona quais usuários irão receber a notificação. Pode ser selecionado mais de um usuário. |