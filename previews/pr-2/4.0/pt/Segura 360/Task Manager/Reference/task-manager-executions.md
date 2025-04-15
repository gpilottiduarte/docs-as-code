# Execuções

Este documento fornece informações sobre a tela do relatório **Execuções** do **Task Manager** que possibilita:

* Acompanhar o status de cada tarefa.  
* Identificar rapidamente execuções com erros.  
* Monitorar quem solicitou cada operação.  
* Ter um histórico completo de todas as ações.

## Pré-requisitos

* Permissão de administrador do sistema ou do **Task Manager**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Execuções**.  
   
---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

::: (info) (Info)  
Para exibir todos os filtros, clique em **Mais**.  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação no Segura. Esse código é gerado no momento em que o botão **Executar tarefa** é acionado na tela **Tarefas**. |
| **Tarefa** | Campo de texto | Filtra as execuções pelo nome de identificação da tarefa. |
| **Erro** | Menu suspenso | Filtra as execuções pela presença ou ausência de erro. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Processado** | Menu suspenso | Filtra as execuções com base no status de processamento. As opções disponíveis são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Solicitante** | Campo de texto | Filtra pelo nome do usuário que solicitou a execução da tarefa. |
| **Data de solicitação** | Campo de texto | Filtra pelo período em que as execuções foram solicitadas. |

## Campos do relatório

* **Código**.  
* **Tarefa**.  
* **Total:** número total de operações realizadas. Por exemplo, se a tarefa de atualizar um software foi executada em dois dispositivos, duas operações foram realizadas. Portanto, esse campo mostrará o número **2**.  
* **Processado**.  
* **Erro**.  
* **Estado:** estado da execução da tarefa. As opções são *Executada, Aprovada, Reprovada* e *Pendente*.  
* **Solicitante**.  
* **Data de solicitação**: data e hora em que a execução da tarefa foi solicitada.  
* **Ambiente:** o ambiente cadastrado para execução da tarefa.  
* **Sistema:** o sistema cadastrado para execução da tarefa.  
* **Tags:** palavras-chave associadas à tarefa.  
* **Tipo de execução:** indica se a execução da tarefa é do tipo **Agendada** ou **Pontual**.  
* **Ação:**   
  * **Visualizar operações:** abre a tela **Operações**.

:::(info) (Info)

Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::