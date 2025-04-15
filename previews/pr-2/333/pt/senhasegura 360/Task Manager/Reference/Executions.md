# Executions

Neste documento, você vai encontrar todas as informações sobre a tela **Executions** do **Task Manager** que exibe um relatório contendo todas as solicitações de execuções cadastradas e disponíveis ao seu usuário.

## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Executions**.

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
| **Código**| Campo que filtra as solicitações de execuções pelo seu código numérico de identificação. Esse código é gerado no momento em que o botão **Executar tarefa** é acionado na tela **Tarefas**.|
| **Tarefa**| Campo que filtra as solicitações de execuções pelo nome da tarefa cadastrado.|
| **Erro**| Campo que filtra as solicitações de execuções com ou sem erro. As opções disponíveis são **Sim** e **Não**. Limpe o campo para visualizar a opção **Todos**.|
| **Processado**| Campo que filtra as solicitações de execuções com base em seu status de processamento. As opções disponíveis são **Sim** e **Não**. Limpe o campo para visualizar a opção **Todos**.|
| **Solicitante**| Campo que filtra as solicitações de execuções pelo nome do usuário que a solicitou.|
| **Data de solicitação** | Campo que filtra as solicitações de execuções pelo período em que foram solicitadas. Utilize esse campo para inserir a data inicial do período de solicitação de execução da tarefa. Formato: DD/MM/AAAA. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **até**| Campo que filtra as solicitações de execuções pelo período em que foram solicitadas. Utilize esse campo para inserir a data final do período de solicitação de execução da tarefa. Formato: DD/MM/AAAA. A seta que aponta para baixo abre um calendário para seleção da data desejada. |

## Campos do relatório

- **Código**.
- **Tarefa**.
- **Total:** total de operações realizadas. Por exemplo, se você executou a tarefa em dois dispositivos, duas operações foram realizadas, e portanto, esse campo mostrará o número 2.
- **Processado**.
- **Erro**.
- **Estado:** estado da execução da tarefa. As opções disponíveis são *Executada, Aprovada, Reprovada* e *Pendente*.
- **Solicitante**.
- **Data de solicitação**.
- **Ambiente:** o ambiente cadastrado para execução da tarefa.
- **Sistema:** o sistema cadastrado para execução da tarefa.
- **Tags:** palavras-chaves cadastradas para ajudar a identificar e filtrar a tarefa.
- **Tipo de execução:** indica se a execução da tarefa é do tipo **Agendada** ou **Pontual**.
- **Ação:** nessa coluna, você acessa:
    - **Visualizar operações**: representado pelo ícone de três barras horizontais, abre a tela [**Operações**](/v3-33/docs/pt/task-manager-operations), onde é possível visualizar as operações realizadas na execução selecionada.