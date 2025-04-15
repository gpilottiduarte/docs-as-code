# Minhas solicitações

A tela **Minhas solicitações** do **Task Manager** oferece uma visão detalhada de todos os pedidos de execução realizados.  
Este documento fornece informações sobre o relatório **Minhas solicitações**, permitindo que administradores:

* Acompanhem o status de cada solicitação.  
* Visualizem o histórico de aprovações e reprovações.  
* Tenham transparência sobre suas requisições de execução.

## Requisitos

* Permissão de administrador do sistema ou do **Task Manager**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Minhas aprovações**.

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
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra as solicitações pelo código de identificação no Segura. |
| **Operação** | Campo de texto | Filtra as solicitações pelo tipo de execução da operação, que podem ser do tipo manual ou agendamento recorrente. |
| **Política de acesso** | Campo de texto | Filtra as solicitações pela política de acesso em que estão cadastradas. |
| **Solicitante** | Campo de texto | Filtra as solicitações pelo usuário que solicitou a execução da tarefa. |
| **Data de solicitação** | Seletor de data | Filtra as solicitações pelo período em que foram feitas. |
| **Status** | Menu suspenso | Filtra as solicitações pelo seu estado. As opções são *Pendente, Aprovada, Reprovada, Expirada* e *Cancelada*. Limpe o campo para habilitar a opção **Todos**. |
| **Governança** | Campo de texto | Filtra as solicitações pelo código de governança inserido no momento de solicitação para aprovação. |
| **Justificativa** | Campo de texto | Filtra as solicitações pela justificativa escolhida no momento de solicitação para aprovação. |

## Campos do relatório

* **Código**.  
* **Operação**.  
* **Grupo de acesso**.  
* **Solicitante**.  
* **Solicitada em**.  
* **Estado**.  
* **Validade**: data e hora de expiração da solicitação.  
* **Governança**.  
* **Motivo**.  
* **Ações**:  
  * **Detalhes**: abre a tela [**Detalhes da solicitação**](https://portal.document360.io/v4/docs/pt/task-manager-my-requests#tela-detalhes-da-solicita%C3%A7%C3%A3o)

:::(info) (Info)

O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Tela Detalhes da solicitação

A tela **Detalhes da solicitação** exibe os detalhes de uma solicitação selecionada.

::: (info) (Info)

Aprovadores também podem visualizar os detalhes de uma solicitação em **Task Manager \> Minhas aprovações \>** **Ações \> Detalhes**.  
:::

| Item | Descrição |
| ----- | ----- |
| **Solicitante** | Nome e *username* do usuário que fez a solicitação. |
| **Tipo de operação** | Informação sobre o tipo de operação solicitada, que pode ser manual ou agendamento recorrente. |
| **Estado** | Estado da solicitação. As opções são *Pendente, Aprovada, Reprovada* e *Expirada*. |
| **Código** | Código de identificação da solicitação no Segura. |
| **Política de acesso** | Nome da política de acesso em que a solicitação está cadastrada. |
| **Solicitado em** | Data e hora da solicitação. |
| **Validade** | Data e hora de expiração da solicitação. |
| **Aprovações** | Número de aprovações dessa solicitação. |
| **Reprovações** | Número de reprovações dessa solicitação. |

#### Seção Respostas

Essa seção exibe as informações das respostas às suas solicitações.

| Item | Descrição |
| ----- | ----- |
| **Aprovador** | Nome e *username* do usuário aprovador. |
| **Nível** | Nível em que o aprovador atuará. As opções possíveis são *Nível 1, Nível 2* e *Nível 3*. |
| **Resposta** | Estado da resposta do aprovador à solicitação. As opções disponíveis são *Não respondida, Aprovada* e *Reprovada*. |
| **Data** | Data e hora da resposta à solicitação. |
| **Justificativa** | Justificativa da resposta à solicitação. |

#### Seção Justificativa

Essa seção exibe os campos relacionados aos motivos de solicitação de execução de tarefa.

| Item | Descrição |
| ----- | ----- |
| **Código de governança** | Código de governança inserido no momento de solicitação. |
| **Motivo/Justificativa** | Motivo escolhido durante a solicitação. |

#### Seção Detalhes da solicitação

Essa seção exibe texto simples com informações com as seguintes informações da tarefa:

* **Código**.  
* **Nome**.  
* **Dispositivo**.  
* **Credencial**.  
* **Dias e períodos de execução**.