# Operações

Neste documento, você vai encontrar todas as informações sobre as telas **Operações** e **Detalhes da operação** do **Task Manager**. 

## Caminhos para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Executions**.
---
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
5. No menu lateral, selecione **Tarefas >** Uma tarefa na lista **>** Coluna **Ação > Ícone dos três pontos verticais > Executions >** Uma execução na lista **>** Coluna **Ação >  Visualizar operações** (representado pelo ícone de três barras horizontais) **> Operações**.

---

Nessa seção, você encontra todas as informações sobre a tela **Operações**
que exibe um relatório contendo todas as operações realizadas durante a execução de uma tarefa por dispositivo.

## Barra superior

| **Item**| **Descrição**|
|----|----|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.|
| **Atualizar**| Representado pelo ícone da seta no sentido anti-horário, atualiza a página.|
| **Exibir ações**| Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página.|
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV**| Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [Agendar relatório](/v3-32/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports).|

## Campos de busca

| **Item**   | **Descrição**|
|----|----|
| **Código** | Campo que filtra as operações pelo seu código numérico de identificação. |
| **Dispositivo** | Campo que filtra as operações pelo dispositivo em que foram realizadas. |
| **Status** | Campo que filtra as operações pelo seu estado. As opções disponíveis são *Agendada, Em execução, Efetuada com sucesso, Erro, Cancelada, Aguardando aprovação* e *Expirada*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório 

- **Código**.
- **Nome da task**: nome registrado da tarefa em que a operação foi realizada.
- **Ambiente**: o ambiente cadastrado para a execução da operação.
- **Sistema**: o sistema cadastrado para execução da operação.
- **Tags**: palavras-chaves cadastradas para ajudar a identificar e filtrar a operação.
- **Dispositivo**.
- **Status**.
- **Resultado**: resultado da operação.
- **Ação**: nessa coluna, você acessa:
  - **Visualizar detalhes**: representado pelo ícone de lupa, abre a tela **[Detalhes da operação](/v3-32/docs/pt/task-manager-operations#tela-detalhes-da-operação)**, onde é possível visualizar os detalhes da operação selecionada.

:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próximas tela, clique no botão de avançar ao final do relatório.
:::

### Tela Detalhes da operação
Nessa seção, você encontra todas as informações sobre a tela **Detalhes da operação** do **Task Manager** que exibe os detalhes da operação selecionada.

| **Item**| **Descrição**|
|----|----|
| **Informações sobre a credencial e dispositivo** | Tipo da credencial, username da credencial, nome do dispositivo e endereço IP do dispositivo. Ex.: Administrador local - usrudonopass [centos (10.66.33.17)]|
| **Solicitante**| Para solicitações pontuais, esse campo exibe o nome do usuário solicitante da operação. Já em casos de execuções agendadas, o campo exibe o valor **Task Manager - Executor**.|
| **Data da solicitação**| Data e hora em que a solicitação foi feita. Formato: DD/MM/AAAA e HH:MM:SS.|
| **Data do agendamento**| Data e hora para o qual a operação foi agendada. Em casos de operações pontuais, a data e hora se referem ao momento em que o usuário solicitou a execução. Formato: DD/MM/AAAA e HH:MM:SS.|
| **Operação**| Nome da operação.|
| **Estado**| Estado da operação. As opções possíveis são *Agendada, Em execução, Efetuada com sucesso, Erro, Cancelada, Aguardando aprovação* e *Expirada*.|

#### Registros da tentativa
No topo desta seção, é possível visualizar quantas tentativas foram realizadas para execução da operação e a qual tentativa os dados listados se referem. 


Por exemplo, **1a tentativa, 2a tentativa**, e assim por diante.

| **Item**  | **Descrição**|
|----|----|
| **Template** | Nome do template utilizado na operação.|
| **Versão**| Número de versão do template.|
| **Início**| Data e hora do início da operação. Formato DD/MM/AAAA e HH:MM:SS.|
| **Fim**| Data e hora do término da operação. Formato DD/MM/AAAA e HH:MM:SS.                                                     |
| **Erro**| Indica a presença de erro durante a execução da operação. As opções possíveis  são **Sim** e **Não**.|
| **Mensagem** | Mensagem indicando o estado da operação. Ex.: “task manager operation executed successfully (operação do task manager executada com sucesso)”. |

#### Seção Logs

| **Item** | **Descrição**|
|----|----|
| **Logs** | Ícone de link externo representado por uma seta saindo de um quadrado, abre uma nova guia em seu navegador e exibe os registros dos passos executados na operação. Esses registros também podem ser visualizados em uma caixa abaixo da palavra **Logs**. |