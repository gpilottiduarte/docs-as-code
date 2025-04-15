# Agendamentos

Neste documento, você vai encontrar todas as informações sobre as telas  **Agendamentos** e **Agendar tarefa** do **Task Manager**. 

## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Tarefas >** Uma tarefa da lista **>** Coluna **Ação > Ícone dos três pontos verticais > Agendamentos** (representado pelo ícone do relógio).

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
| **Código**| Campo que filtra as tarefas por código númerico de identificação da tarefa.|
| **Task**| Campo que filtra as tarefas por seu nome cadastrado.|
| **Criado por**| Campo que filtra as tarefas pelo usuário que criou o agendamento.|
| **Estado**| Campo que filtra as tarefas pelo seu estado. As opções disponíveis são *Aguardando aprovação, Aprovado, Reprovado* e *Cancelado*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**.
- **Task**.
- **Dias**: os dias selecionados para execução da tarefa.
- **Períodos**: os períodos do dia selecionados para execução da tarefa.
- **Intervalo**: o intervalo, em minutos, horas, dias ou meses, selecionado para execução da tarefa.
- **Criado por**.
- **Estado**.
- **Ação**: nessa coluna, você acessa:
  - **Cancelar agendamento**: representado pelo ícone de lixeira, abre uma janela pop-up de **Confirmação** para cancelamento do agendamento com as opções **Sim** e **Não**. Disponível para os agendamentos com estados **Aprovado** e **Aguardando aprovação**.

## Botão de ação


* **Agendar execução**: localizado no canto inferior direito da tela, abre a tela [**Agendar tarefa**](/v3-33/docs/pt/task-manager-schedules#tela-agendar-tarefa).


:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

---
### Tela Agendar tarefa
Nesta seção, você encontra todas as informações sobre a tela **Agendar tarefa** que possibilita a configuração de um agendamento de execução de tarefa.

| **Item**| **Descrição**|
|----|----|
| **Motivo**| Campo para inserção do motivo de execução da tarefa. A seta que aponta para baixo abre uma lista com todos os motivos cadastrados.|
| **Governance code** | Campo para inserção do código de governança utilizado para registrar solicitação de acesso.|
| **Justificativa** | Campo para inserção de texto descritivo com a justificativa de execução da tarefa.|

:::(Info) (Info)
Os campos acima podem ser obrigatórios caso a [configuração do **Grupo de acesso**](/v3-33/docs/pt/task-manager-how-to-manage-access-groups) em que a tarefa está inserida demande o seu preenchimento. Nesses casos, os nomes dos campos virão acompanhados de um asterisco.
:::

| **Item**| **Descrição**|
|----|----|
| **Dias para execução**| Caixas de seleção que possibilitam a escolha dos dias em que a tarefa deverá ser executada.|
| **Períodos para execução**| Caixas de seleção que possibilitam a escolha dos períodos do dia em que a tarefa deverá ser executada.|
| **Intervalo mínimo entre as execuções** | Dois campos que possibilitam a escolha do intervalo mínimo entre as execuções da tarefa. No primeiro campo, selecione um numeral entre 1 e 60. No segundo campo, selecione *Minutos, Horas, Dias* ou *Meses*. |
