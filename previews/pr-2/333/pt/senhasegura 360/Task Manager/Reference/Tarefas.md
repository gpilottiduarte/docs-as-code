# Tarefas

Neste documento, você vai encontrar todas as informações sobre as telas **Tarefas**, **Cadastro de task** e **Executar tarefa** do **Task Manager**. 

## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Tarefas**.
---
Nessa seção, você encontra todas as informações sobre a tela **Tarefas** que exibe um relatório com todas as tarefas que você criou ou que foram compartilhadas com o seu usuário.

## Barra superior

| **Item**| **Descrição**|
|----|----|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.|
| **Atualizar**| Representado pelo ícone da seta no sentido anti-horário, atualiza a página.|
| **Exibir ações**| Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página.|
| **Nova**| Representado pelo ícone de soma, abre a tela **[Cadastro de task](/v3-33/docs/pt/task-manager-tasks#tela-cadastro-de-task)**.|
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV**| Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports).|

## Campos de busca
| **Item**| **Descrição**|
|----|----|
| **Nome**| Campo que filtra as tarefas pelo nome cadastrado.|
| **Criada por**| Campo que filtra as tarefas pelo nome do usuário que as criou.|
| **Data de inclusão** | Campo que filtra as tarefas pelo período em que foram incluídas no senhasegura. Utilize esse campo para inserir a data inicial do período de inclusão da tarefa. Formato DD/MM/AAAA. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **até**| Campo que filtra as tarefas pelo período em que foram incluídas no senhasegura. Utilize esse campo para inserir a data final do período de inclusão da tarefa. Formato DD/MM/AAAA. A seta que aponta para baixo abre um calendário para seleção da data desejada.|
| **Ativo**| Campo que filtra as tarefas por seu estado de ativação. As opções disponíveis são **Sim** e **Não**.|
| **Sistema**| Campo que filtra as tarefas pelo sistema em que a tarefa foi cadastrada para ser executada.|
| **Ambiente**| Campo que filtra as tarefas pelo ambiente em que a tarefa foi cadastrada para ser executada.|
| **Tags**| Campo que filtra as tarefas pelas palavras-chave cadastradas.

## Campos do relatório

- **Código:** código identificador numérico da tarefa.
- **Nome.**
- **Data de inclusão:** data e hora em que a tarefa foi incluída no sistema.
- **Criada por.**
- **Ativo.**
- **Sistema.**
- **Ambiente.**
- **Tags.**
- **Ação:** nessa coluna, você acessa as seguintes opções:
  - **Alterar:** representado pelo ícone de lápis e papel, abre a tela **[Cadastro de task](/v3-33/docs/pt/task-manager-tasks#tela-cadastro-de-task)**, onde é possível editar as configurações da tarefa.
  - **Ícone dos três pontos verticais:** abre um menu suspenso com as opções: *[Executions](/v3-33/docs/pt/task-manager-executions), [Agendamentos](/v3-33/docs/pt/task-manager-schedules), [Executar tarefa](/v3-33/docs/pt/task-manager-tasks#tela-executar-tarefa)* e *Inativar*.

---
:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

### Tela Cadastro de task
Nessa seção, você encontra todas as informações sobre a tela **Cadastro de task** que possibilita a criação de uma tarefa que poderá ser executada através do **Task Manager**.

#### Aba Informações principais

**Seção Informações da task**

Essa seção possibilita a inserção de informações gerais da tarefa.

| **Item**| **Descrição**|
|----|----|
| **Nome de identificação da task***| Nome legível para identificar a tarefa cadastrada.|
| **Ambiente***| Ambiente em que a tarefa será executada.|
| **Sistema***| Sistema em que a tarefa será executada.|
| **Tags**| Palavras-chave para ajudar a identificar e filtrar a tarefa.|

**Seção Template para execução**
Essa seção possibilita a escolha do plugin e template que executarão a tarefa.

| **Item**| **Descrição**|
|----|----|
| **Plugin**| Campo para inserção do plugin utilizado para execução da tarefa. A seta que aponta para baixo abre uma lista com os plugins cadastrados.|
| **Selecione o template a ser usado*** | Campo para inserção do template utilizado para execução da tarefa. A seta que aponta para baixo abre uma lista com os templates do tipo **Task Manager** cadastrados. |

**Seção Variáveis para execução**
Essa seção possibilita a inserção opcional de novas variáveis na execução da tarefa.

| **Item**| **Descrição**|
|----|----|
| **Nova variável +** | Opção para inserção de novas variáveis. O ícone de soma abre os campos **Identificador** e **Valor** onde é possível inserir o identificador e o valor das variáveis. O ícone de **lixeira** exclui a variável adicionada. |

**Seção Credencial para execução**
Essa seção possibilita a inserção da credencial que será utilizada para se autenticar ao dispositivo onde a tarefa será executada. 

| **Item**| **Descrição**|
|----|----|
| **Utilizar uma credencial cadastrada para acessar todos os dispositivos** | Caixa de seleção que define se uma credencial cadastrada deverá ser utilizada para se autenticar ao dispositivo onde a tarefa será executada. **Nota**: a marcação dessa caixa habilita o campo **Credencial de acesso cadastrada do sistema**. |
| **Credencial de acesso cadastrada do sistema**| Campo para inserção da credencial de acesso utilizada para se autenticar ao dispositivo onde a tarefa será executada. A seta que aponta para baixo abre uma lista com as credenciais cadastradas.|
| **Username da credencial**| Campo para inserção de uma credencial que não esteja cadastrada no senhasegura. **Nota**: esse campo fica disponível apenas quando a caixa de seleção do campo **Utilizar uma credencial cadastrada para acessar todos os aplicativos** não é marcada. |
| **Utilizar a própria credencial para conectar**| Caixa de seleção que define se a própria credencial será utilizada para se autenticar ao dispositivo onde a tarefa será executada.|

:::(Info) (Info)
Ao informar o **Username da credencial**, o sistema utilizará essa informação para localizar uma credencial com esse username em cada dispositivo para realizar a autenticação.
:::
#### Aba Dispositivos para execução

| **Item**| **Descrição**|
|----|----|
| **Dispositivos +** | Opção para inserção de dispositivos onde a tarefa será executada. O ícone de **soma** abre a tela **Dispositivos** onde é possível filtrar os dispositivos por *Código, Nome do dispositivo, Gerenciamento, Tipo, Fornecedor, Produto* e *Site*. Utilize a caixa de seleção ao lado do dispositivo para selecioná-lo ou clique sobre a caixa de seleção marcada para selecionar todos os dispositivos listados. Utilize o botão **Adicionar** para prosseguir e o botão **Cancelar** para desistir da ação. |

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::

---
### Tela Executar tarefa

Nesta seção, você encontra todas as informações sobre a tela **Executar tarefa** que possibilita a solicitação de execução de uma tarefa de forma pontual.

:::(Info) (Info)
A opção **Executar tarefa** só estará disponível caso haja um dispositivo associado à execução da tarefa.
:::

| **Item**| **Descrição**|
|----|----|
| **Motivo**| Campo para inserção do motivo de execução da tarefa. A seta que aponta para baixo abre uma lista com todos os motivos cadastrados.|
| **Governance Code** | Campo para inserção do código de governança utilizado para registrar a solicitação de acesso.|
| **Motivo**| Campo para inserção de texto descritivo com o motivo de execução da tarefa.|


:::(Info) (Info)
Os campos acima podem vir acompanhados de um asterisco para indicar que são obrigatórios. A obrigatoriedade deles é definida durante a [criação de um grupo de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups), na aba **Configurações**.
:::


:::(Info) (Info)
Após o preenchimento desse formulário, caso a [configuração do **Grupo de acesso**](/v3-33/docs/pt/task-manager-how-to-manage-access-groups) demande que a execução da tarefa passe por um fluxo de aprovação, você poderá visualizar o estado desse processo, nas telas [**Minhas solicitações**](/v3-33/docs/pt/task-manager-my-requests)** e **[**Detalhes da solicitação**](/v3-33/docs/pt/task-manager-my-requests#tela-detalhes-da-solicitação). 
Já os usuários aprovadores poderão visualizar e gerenciar as solicitações atribuídas a eles nas telas [**Minhas aprovações**](/v3-33/docs/pt/task-manager-my-approvals) e [**Detalhes da solicitação**](/v3-33/docs/pt/task-manager-my-requests#tela-detalhes-da-solicitação).
:::


