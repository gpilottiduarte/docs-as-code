# Políticas de acesso

Em ambientes complexos do ecossistema de TI, é essencial que administradores estabeleçam limites precisos de permissão em sua infraestrutura garantindo segurança na execução de tarefas críticas.   
Este documento fornece informações sobre a tela do relatório **Políticas de acesso** do **Task Manager** e garante que administradores:

* Selecionem os dispositivos, ambientes e sistemas vinculados às tarefas.  
* Definam exatamente quem pode executar quais tarefas.  
* Estabeleçam fluxos de aprovação personalizados.  
* Criem camadas de proteção inteligentes.

::: (warning) (Atenção)

Os campos de busca e colunas *Parte da senha, Visualizar, Aprovação para visualizar, Sessão, Aprovação para sessão* e *Alterar expiração* não refletem as configurações atuais do **Task Manager**.  
:::

## Rsequisitos

* Permissão de administrador do sistema ou do **Task Manager**.

---
## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Políticas de acesso**.

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar política de acesso**. |
| **Sincronizar** | Botão | Aplica instantamente as configurações feitas nas políticas de acesso.  |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Nome** | Campo de texto | Filtra as políticas de acesso pelo nome de identificação. |
| **Status** | Menu suspenso | Filtra as políticas de acesso por seu estado de ativação. As opções disponíveis são **Ativo** ou **Inativo**. Limpe o filtro para habilitar a opção **Todos**. |

## Campos do relatório

* **Código:** código de identificação da política de acesso no Segura.  
* **Nome**.  
* **Permissão:** tipo de permissão concedida à política de acesso. Esse campo sempre retornará o valor **Executar script**.  
* **Aprovação:** se a opção **Requer aprovação para executar tarefa** estiver ativada, a ação **Executar script** necessitará de aprovação e, portanto, a coluna **Aprovação** terá o valor **Executar script**. Caso contrário, a coluna ficará vazia.  
* **Justificativa:** se a opção **Requer justificativa para executar tarefa** estiver ativada, a ação **Executar script** necessitará de justificativa e, portanto, a coluna **Justificativa** terá o valor **Executar script**. Caso contrário, a coluna ficará vazia.  
* **Tipo:** tipo da política de acesso. Por padrão, o valor sempre será **Task Manager.**  
* **Critérios:** os ambientes e sistemas vinculados à política de acesso.  
* **Status**.  
* **Ações:**  
  * **Editar:** abre a tela **Editar política de acesso**.  
  * **Clonar**: cria uma cópia da política de acesso selecionada. 

::: (info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Telas Adicionar/Editar política de acesso

As telas **Adicionar política de acesso** e **Editar política de acesso** compartilham os mesmos campos.

#### Aba Geral

Nesta aba, administradores inserem informações gerais sobre a política de acesso

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Nome da política de acesso**\* | Campo de texto | Nome para identificar a política de acesso. |
| **Status**\* | Botão *toggle* | Ativa ou desativa a política de acesso. |
| **Descrição** | Campo de texto | Informações gerais sobre a política de acesso. |

#### Aba Configurações

Nesta aba, administradores definem as configurações da política de acesso. 

::: (warning) (Atenção)
Os componentes da seção **Arquivos resultado** não refletem as configurações atuais do **Task Manager**.  
:::

**Seção Configurações** 

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Requer justificativa para executar tarefa** | Botão *toggle* | Não | Define se os usuários inseridos na política de acesso deverão inserir uma justificativa para executar uma tarefa. |
| **Requer aprovação para executar tarefa** | Botão *toggle* | Não | Define se os usuários inseridos na política de acesso deverão passar por um fluxo de aprovação para executar uma tarefa. |
| **Aprovações necessárias para executar** | Seletor de quantidade | Não | Define o número de aprovações necessárias para executar uma tarefa. |
| **Reprovações necessárias para cancelar** | Seletor de quantidade | Não | Define o número de reprovações necessárias para cancelar a execução de uma tarefa. |
| **Aprovação em níveis** | *Toggle* button | Não | Ativa ou desativa aprovação em níveis. |

#### Aba Critérios

Nesta aba, administradores determinam quais tarefas serão associadas a esta política de acesso. Os campos *Dispositivo, Ambientes* e *Sistemas*, descritos abaixo, são utilizados como filtros para conceder acesso às tarefas que possuem as informações cadastradas nesses campos.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Dispositivo** | Botão *toggle* | Não | Habilita ou desabilita o campo de texto **Dispositivo (sep. por vírgula)**. |
| **Dispositivo (sep. por vírgula)** | Campo de texto | Não | Dispositivos onde a tarefa será executada. |
| **Ambientes**\* | Menu suspenso | Sim | Seleciona os ambientes do **Task Manager** onde a tarefa será executada.  |
| **Sistemas**\* | Menu suspenso | Sim | Seleciona os sistemas do **Task Manager** onde a tarefa será executada.  |


#### Aba Usuários

Nesta aba, administradores adicionam os usuários à política de acesso, dando a eles, permissão para solicitar execuções das tarefas vinculadas à política de acesso.

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Adicionar** | Botão | Abre o modal **Usuários.** |
| **Selecionar itens** | Caixa de seleção | Seleciona os usuários na tabela e habilita o botão **Remover selecionados.** |
| **Usuários** | Tabela | Lista os usuários adicionados e suas informações: *Cód., Nome, Nome de usuário, E-mail, Tipo de criação, Departamente, Adicionado por* e *Adicionado em.*  |


#### Aba Aprovadores

Nesta aba, administradores selecionam os usuários responsáveis por aprovar solicitações nesta política de acesso, especificando também seus níveis de aprovação.

::: (warning) (Atenção)
* Apenas usuários com permissão mínima de **PAM Operator** podem aprovar a execução de tarefas.  
* O campo **Sempre adicionar o gestor do usuário aos aprovadores?**\* não reflete as configurações atuais do **Task Manager**.
:::

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar** | Botão | Não | Abre o modal **Usuários.** |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona os usuários na tabela e habilita o botão **Remover selecionados.** |
| **Aprovadores** | Tabela | Não | Lista os usuários adicionados e suas informações: *Cód., Nome, Nome de usuário, E-mail, Tipo de criação, Departamente, Adicionado por* e *Adicionado em* e *Nível.*  |
| **Nível** | Menu suspenso | Não | Define o momento em que o aprovador será acionado para aprovar a solicitação.  |
| **Obrigatório especificar código de governança ao justificar?**\* | Botão *toggle* | Sim | Define a necessidade de inserir um código de governança ao justificar a solicitação de execução da tarefa.  |


#### Aba Revisão

Esta aba exibe um resumo das configurações da política de acesso com botões para **Voltar** ou **Salvar.**