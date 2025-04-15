# Minhas aprovações

Neste documento, você vai encontrar todas as informações sobre a tela **Minhas aprovações** do **Task Manager** que possibilita que você visualize, aprove ou reprove as solicitações de execuções de tarefas direcionadas ao seu usuário.

## Requisitos
* Ser um usuário aprovador em algum **Grupo de acesso**. Para mais informações, acesse a seção [Criar um grupo de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups#criar-grupo-de-acesso) do documento sobre Como gerenciar grupos de acesso. 



## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Minhas aprovações**. 
---
## Barra superior

| **Item**| **Descrição**|
|----|----|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.|
| **Atualizar**| Representado pelo ícone da seta no sentido anti-horário, atualiza a página.|
| **Exibir ações**| Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página.|
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV**| Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports).|

## Campos de busca

| **Item**| **Descrição**|
|----|----|
| **Código**| Campo que filtra as solicitações pelo seu código identificador.|
| **Operação**| Campo que filtra as solicitações pelo tipo de execução da operação, que podem ser do tipo manual ou agendamento recorrente.|
| **Grupo de acesso** | Campo que filtra as solicitações pelo grupo de acesso em que estão cadastradas.|
| **Solicitante**| Campo que filtra as solicitações pelo usuário que solicitou a execução da tarefa.|
| **Data de solicitação** | Campo que filtra as solicitações por período. Utilize esse campo para inserir a data inicial do período de solicitação de execução da tarefa. Formato DD/MM/AAAA. A seta que aponta para baixo abre um calendário. |
| **até**| Campo que filtra as solicitações por período. Utilize esse campo para inserir a data final do período de solicitação de execução da tarefa. Formato DD/MM/AAAA. A seta que aponta para baixo abre um calendário. |
| **Estado**| Campo que filtra as tarefas pelo seu estado. As opções disponíveis são *Pendente, Aprovada, Reprovada, Expirada* e *Cancelada*. Limpe o campo para habilitar a opção **Todos**.|
| **Governança**| Campo que filtra as solicitações pelo código de governança inserido no momento de solicitação para aprovação.|
| **Motivo**| Campo que filtra as solicitações pelo motivo escolhido no momento de solicitação para aprovação.|

## Campos do relatório

- **Código**.
- **Operação**.
- **Grupo de acesso**.
- **Solicitante**.
- **Solicitada em**: data e hora em que a solicitação foi feita.
- **Estado**.
- **Validade**: data e hora de expiração da solicitação.
- **Governança**.
- **Motivo**.
- **Ação**: nessa coluna, você acessa as seguintes opções:
  - **Aprovar**: representado pelo ícone de check, abre uma janela pop-up de **Confirmação** para aprovação da execução da tarefa com as opções **Sim** e **Não**. 
  - **Ícone dos três pontos verticais**: abre um menu suspenso com as opções **Reprovar** e [**Detalhes**](/v3-33/docs/pt/task-manager-my-requests#tela-detalhes-da-solicitação).

:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::
