# Referência para o relatório de operações em lote

Para que uma operação em lote seja efetivada, é necessário que um usuário aprovador autorize essa execução. Para visualizar as solicitações pendentes, acesse **Grid Menu > Relatórios > Eventos > Operações em lote**. Os campos abaixo fazem referência ao relatório de busca das solicitações.

## Operações em lote

| Campo                  | Descrição                                                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**           | Código da solicitação.                                                                                                                                             |
| **Ação**            | Menu suspenso que filtra conforme a operação solicitada.                                                                                                            |
| **Status**            | Menu suspenso que filtra pelo estado atual da solicitação.<br />Podendo ser: *Aprovação pendente, Execução pendente, Executando, Sucesso, Erro ou Cancelado*. |
| **Data de criação** | Exibe um calendário que permite escolher a data de criação da solicitação.                                                                                       |
| **até**              | Exibe um calendário que permite escolher a data limite para busca das solicitações.                                                                                |

Para realizar a busca, clique no botão **Filtrar**; para limpar os campos e reiniciar o processo, clique no botão **Limpar**.

A listagem das operações em lote aparecerá abaixo do formulário de filtragem, com os seguintes campos:

* **Código**.
* **Ação**.
* **Status**.
* **Tarefas fechadas**: indica a quantidade de tarefas fechadas naquela operação.
* **Total de tarefas**: indica a quantidade total de tarefas naquela operação.
* **Data de criação**: data de criação da operação.
* Coluna **Ação**:
  * **Detalhes da solicitação**, identificado pelo ícone decarteira de identidade.
  * **Tarefas**, identificado pelo ícone das três barras horizontais.

## Janela Detalhes da solicitação

Ao clicar em Detalhes da solicitação, na coluna Ação, uma janela será aberta. Nessa janela teremos os seguintes campos:

| Campo                   | Descrição                                                                                                                                                                                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Solicitante**   | Apresenta o nome e o nome de usuário do solicitante para aquela operação.<br />Ao lado desse campo é indicado o tipo de operação, no caso, **Operação em lote**. <br />Logo em seguida, você tem o status da operação, podendo ser *Pendente, Aprovada* ou *Reprovada*. |
| **Código**       | Código da solicitação no senhasegura.                                                                                                                                                                                                                                                     |
| **Solicitado em** | Data e hora que foi feita a solicitação. Apresentada no formato `DD/MM/AAAA HH:MM:SS`.                                                                                                                                                                                                   |
| **Validade**      | Indica a validade da solicitação. Apresentada no formato `DD/MM/AAAA HH:MM:SS`.                                                                                                                                                                                                          |
| **Aprovações**  | Indica a quantidade de aprovações que aquela solicitação recebeu.                                                                                                                                                                                                                        |
| **Reprovações** | Indica a quantidade de reprovações que aquela solicitação recebeu.                                                                                                                                                                                                                       |

### Sessão Respostas

Na mesma janela, logo abaixo dos detalhes da solicitação, você terá a sessão **Respostas**, que apresenta os detalhes das respostas que foram dadas à solicitação.

| Campo                   | Descrição                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Aprovador**     | Nome do usuário que aprovou ou reprovou a solicitação.<br />Este campo ainda pode apresentar o texto "**Não respondida"**, indicando que aquele usuário não respondeu a sua solicitação. |
| **Nível**        | Nível do usuário aprovador.                                                                                                                                                                          |
| **Resposta**      | Indica se o usuário em questão já forneceu uma resposta.                                                                                                                                            |
| **Data**          | Data da resposta. Apresentada no formato `DD/MM/AAAA HH:MM:SS`.                                                                                                                                      |
| **Justificativa** | Campo de texto com a justificativa escrita do usuário aprovador. <br />Caso não tenha sido fornecida nenhuma justificativa, o campo ficará em branco.                                               |

### Seção Detalhes da solicitação

Abaixo, você terá os detalhes da solicitação.

| Campo             | Descrição                                                     |
| ----------------- | --------------------------------------------------------------- |
| **Código** | Código da solicitação no senhasegura.                        |
| **Ação**  | Ação que foi indicada na solicitação de operação em lote. |
| **Status**  | Status atualizada da solicitação.                             |
| **Ativo**   | Status da solicitação, podendo ser **Sim** ou **Não**.     |

:::(warning) (Atenção)
Abaixo desses campos, você terá uma sessão que é variável. Assim, os campos apresentados abaixo irão variar de acordo com o módulo em que foi feita a solicitação, tendo um tipo de detalhe diferente para operações em lote para credenciais, dispositivos ou DSM.
:::

#### Entidades afetadas - Dispositivos

Quando você estiver analisando uma operação em lote em dispositivos, esses campos irão aparecer. Mas note que apenas nesse caso é que será possível observar estes campos.

| Campo                    | Descrição                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| **Código**             | Código da entidade adicionada na solicitação de operação em lote.    |
| **Nome do dispositivo** | Nome do dispositivo afetado na solicitação de operação em lote.       |
| **Gerenciamento**       | Endereço de IP ou hostname do dispositivo.                               |
| **Tipo**                | Tipo do dispositivo afetado na solicitação de operação em lote.       |
| **Fabricante**          | Fabricante do dispositivo afetado na solicitação de operação em lote. |
| **Modelo**              | Modelo do dispositivo afetado na solicitação de operação em lote.     |

#### Justificativa

Quando você estiver analisando uma operação em lote em segredos do DSM, esses campos irão aparecer. Mas note que apenas nesse caso é que será possível observar estes campos.

| Campo                       | Descrição                                        |
| --------------------------- | -------------------------------------------------- |
| **Código de governança** | Código de governança para a operação em lote.  |
| **Motivo**                 | Motivo para a realização  da operação em lote. |

#### Entidades afetadas - Credenciais

Quando você estiver analisando uma operação em lote em credenciais, esses campos irão aparecer. Mas note que apenas nesse caso é que será possível observar estes campos.

| Campo                 | Descrição                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Código**          | Código da credencial afetada pela operação em lote.                              |
| **Nome de usuário** | Nome de usuário da credencial afetada pela operação em lote.                     |
| **Tipo**             | Tipo de credencial afetada pela operação em lote.                                 |
| **Domínio**         | Domínio da credencial afetada pela operação em lote.                             |
| **Dispositivo**      | Dispositivo atrelado à credencial que está sendo envolvida na operação em lote. |

## Janela de tarefas de operação em lote

Ao clicar em **Tarefas**, na coluna **Ação**, uma janela será aberta. Nessa janela teremos a possibilidade de filtrar as tarefas de cada operação em lote. Os campos abaixo fazem referência ao relatório de busca das tarefas da operação em lote.

| Campo                  | Descrição                                                                                                                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**           | Código da tarefa cadastrada no senhasegura.                                                                                                                                                                |
| **Cód. da entidade** | Código da entidade no senhasegura.                                                                                                                                                                         |
| **Status**            | Menu suspenso para filtrar de acordo com o status da aprovação.                                                                                                                                           |
| **Prioridade**        | Menu suspenso para filtrar de acordo com a prioridade da tarefa.                                                                                                                                            |
| **Start date**        | Abre um calendário para inserir a data inicial do intervalo de execução da operação em lote. <br />Esta data indica o início do intervalo.                                                            |
| **até**              | Abre um calendário para inserir a data final do intervalo de início da execução da operação em lote. <br />Esta data indica o final do intervalo.                                                     |
| **Data do fim**       | Abre um calendário para inserir a data inicial do intervalo de execução da operação em lote. <br />Esta data indica o início do intervalo de término das execuções das operações em lote.        |
| **até**              | Abre um calendário para inserir a data final do intervalo de início da execução da operação em lote. <br />Esta data indica o final do intervalo de término das execuções das operações em lote. |

Para realizar a busca, clique no botão **Filtrar**; para limpar os campos e reiniciar o processo, clique no botão **Limpar**.

A listagem das tarefas da operação em lote aparecerá abaixo do formulário de filtragem, com os seguintes campos:

* **Código**.
* **Ação**.
* **Cód. da entidade.**
* **Status**.
* **Prioridade**.
* **Start date.**
* **Data do fim.**
* Coluna **Ação**:
  * **Detalhes**: abre a janela de detalhes da Tarefa de operação em lote.

### Tarefa de operação em lote

Ao clicar no botão **Detalhes**, na coluna **Ação**, você é redirecionado para a janela **Tarefa de operação em lote**. Essa janela possui os seguintes campos:

| Campo                  | Descrição                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **Código**           | Código da tarefa, conforme registrado no senhasegura.                               |
| **Ação**            | Nome descritivo da ação que será executada na tarefa.                             |
| **Estado**            | Estado atual da tarefa.                                                              |
| **Cód. da entidade** | Código da entidade, conforme registrado no senhasegura.                             |
| **Nome da entidade.** | Nome da entidade, conforme registrado no senhasegura.                                |
| **Start date**        | Data inicial do intervalo de execução da operação em lote.                       |
| **Data do fim**       | Data final do intervalo de execução da operação em lote.                         |
| **Mensagens**         | Campo de texto que exibe as mensagens relacionadas com a tarefa.                     |
| **De**                | Campo salientado em vermelho, indicando o valor anterior à solicitação da tarefa. |
| **Para**              | Campo salientado em verde, indicando o valor posterior à solicitação da tarefa.   |