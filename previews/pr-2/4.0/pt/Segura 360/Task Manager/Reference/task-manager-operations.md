# Operações

**Operações** referem-se às atividades específicas executadas pelo **Task Manager**. Por exemplo, ao realizar uma tarefa que envolve a troca de senhas em múltiplos dispositivos, cada execução dessa tarefa em um dispositivo individual é considerada uma operação distinta. Assim, se a troca de senhas é efetuada em cinco dispositivos, isso resulta em cinco operações separadas, uma para cada dispositivo. Essa abordagem garante:

* Controle detalhado.  
* Monitoramento preciso de todas as ações realizadas.  
* Segurança e conformidade nas atividades gerenciadas pelo **Task Manager**.

Este documento fornece informações sobre as tela do relatório **Operações** que exibe as operações de cada execução de tarefa do **Task Manager**.

## Pré-requisitos

* Permissão de administrador do sistema ou do **Task Manager**.

## Caminhos para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Operações**.

---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca


| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as operações pelo código de identificação no Segura. |
| **Dispositivo** | Campo de texto | Filtra as operações pelo dispositivo em que foram realizadas. |
| **Status** | Campo de texto | Filtra as operações pelo seu estado. As opções são *Agendada, Em execução, Efetuada com sucesso, Erro, Cancelada, Aguardando aprovação* e *Expirada*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código**.  
* **Nome da task**: nome da tarefa em que a operação foi realizada.  
* **Ambiente**: o ambiente cadastrado para a execução da operação.  
* **Sistema**: o sistema cadastrado para execução da operação.  
* **Tags**: palavras-chave associadas à tarefa.  
* **Dispositivo**.  
* **Status**.  
* **Resultado**: resultado da operação.  
* **Ações:**  
  * **Visualizar detalhes**: abre a tela **Detalhes da operação**.

::: (info) (Info)

O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Tela Detalhes da operação

A tela **Detalhes da operação** do **Task Manager** exibe os seguintes detalhes da operação selecionada:

| Item | Descrição |
| :---- | :---- |
| **Informações sobre a credencial e dispositivo** | Tipo da credencial, *username* da credencial, nome do dispositivo e endereço IP do dispositivo. Ex.: **Administrador local \- usrudonopass \[centos (10.66.33.17)\]** |
| **Solicitante** | **Solicitações pontuais**: exibe o nome do usuário solicitante da operação. **Execuções agendadas**: exibe o valor **Task Manager \- Executor**. |
| **Data da solicitação** | Data e hora em que a solicitação foi feita. |
| **Data do agendamento** | Data e hora para as quais a operação foi agendada. Em casos de operações pontuais, a data e hora se referem ao momento em que o usuário solicitou a execução.  |
| **Operação** | Nome da operação. Por padrão, **Task Manager**. |
| **Estado** | Estado da operação. As opções são *Agendada, Em execução, Efetuada com sucesso, Erro, Cancelada, Aguardando aprovação* e *Expirada*. |

#### Registros da tentativa

Esta seção exibe as tentativas de execução da operação e seus dados.

Por exemplo, **1a tentativa, 2a tentativa**, e assim por diante.

| Item | Descrição |
| :---- | :---- |
| **Template** | Nome do template utilizado na operação. |
| **Versão** | Número de versão do template. |
| **Início** | Data e hora do início da operação.  |
| **Fim** | Data e hora do término da operação.  |
| **Erro** | Indica a presença ou ausência de erro durante a execução da operação. As opções são **Sim** ou **Não**. |
| **Mensagem** | Mensagem indicando o estado da operação. Ex.: “**task manager operation executed successfully (operação do task manager executada com sucesso)**”. |
| **Logs** | Exibe os registros dos passos executados na operação. Também é possível visulizar os logs em uma nova aba do navegador ao clicar no ícone de link externo. |