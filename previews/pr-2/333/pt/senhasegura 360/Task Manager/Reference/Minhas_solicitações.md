# Minhas solicitações

Neste documento, você vai encontrar todas as informações sobre as telas **Minhas solicitações** e **Detalhes da solicitação** do **Task Manager**.

## Requisitos
* Uma execução de tarefa solicitada. Para mais informações, acesse a seção [Executar tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#executar-uma-tarefa) do documento sobre Como gerenciar tarefas.

## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Minhas solicitações**. 

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
  - **Detalhes**:  representado pelo ícone de lupa, abre a tela [**Detalhes da solicitação**](/v3-33/docs/pt/task-manager-my-requests#tela-detalhes-da-solicitação)

:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

---
### Tela Detalhes da solicitação

Nesta seção, você encontra todas as informações sobre a tela **Detalhes da solicitação** que exibe os detalhes de uma solicitação selecionada.  
:::(Info) (Info)
Caso você esteja cadastrado como usuário aprovador de algum grupo de acesso, você também pode visualizar os detalhes de uma solicitação através do caminho **Task Manager > Minhas aprovações >** Uma solicitação de aprovação na lista **>** Coluna **Ação >  Ícone dos três pontos verticais > Detalhes** (representado pelo ícone de lupa)  **> Detalhes da solicitação**.
:::

| **Item**| **Descrição**|
|----|----|
| **Solicitante**| Nome e username, entre parênteses, do usuário que fez a solicitação. |
| **Tipo de operação** | Informação sobre o tipo de operação solicitada, que pode ser manual ou agendamento recorrente. |
| **Estado**| Estado da solicitação. As opções possíveis são *Pendente, Aprovada, Reprovada* e *Expirada*. |
| **Código**| Código de identificação da solicitação.|
| **Grupo de acesso** | Nome do grupo de acesso em que a solicitação está cadastrada.|
| **Solicitado em**  | Data e hora da solicitação.|
| **Validade**| Data e hora de expiração da solicitação.|
| **Aprovações**| Número de aprovações dessa solicitação.|
| **Reprovações**| Número de reprovações dessa solicitação.|

#### Seção Respostas
Essa seção exibe as informações das respostas às suas solicitações. 

| **Item**| **Descrição**|
|----|----|
| **Aprovador**| Nome e username, entre parênteses, do usuário aprovador.|
| **Nível**| Nível em que o aprovador atuará. As opções possíveis são *Nível 1, Nível 2* e *Nível 3*. |
| **Resposta**| Estado da resposta do aprovador à solicitação. As opções disponíveis são *Não respondida, Aprovada* e *Reprovada*. |
| **Data**| Data e hora da resposta à solicitação.|
| **Justificativa**  | Justificativa da resposta à solicitação.|

#### Seção Justificativa
Essa seção exibe os campos relacionados aos motivos de solicitação de execução de tarefa.

| **Item**| **Descrição**|
|----|----|
| **Código de governança** | Código de governança inserido no momento de solicitação. |
| **Motivo**| Motivo escolhido durante a solicitação.|

#### Seção Detalhes da solicitação

Essa seção exibe texto simples com informações como código e nome da tarefa, o dispositivo em que ela será executada, a credencial utilizada e os dias e períodos de execução.

