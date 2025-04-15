# Grupos de acesso

Neste documento, você vai encontrar todas as informações sobre as telas **Grupos de acesso** e **Cadastro de grupo de acesso** do **Task Manager**. 

## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Configurações > Grupos de acesso**. 

---

Nesta seção, você encontra todas as informações sobre a tela **Grupos de acesso** que exibe um relatório contendo todos os grupos de acesso cadastrados no **Task Manager**.

## Barra superior

| **Item**| **Descrição**|
|----|----|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.|
| **Atualizar**| Representado pelo ícone da seta no sentido anti-horário, atualiza a página.|
| **Exibir ações**| Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página.|
| **Novo**| Representado pelo ícone de soma, abre a tela **[Cadastro de grupo de acesso](/v3-33/docs/pt/task-manager-access-groups#tela-cadastro-de-grupo-de-acesso)**.|
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV**| Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports).|

## Campos de busca

| **Item**| **Descrição**|
|----|----|
| **Nome**| Campo que filtra os grupos de acesso por seu nome cadastrado.|
| **Parte da senha**| Campo que filtra os grupos de acesso por seu acesso à senha. As opções disponíveis são *1a parte, 2a parte* e *Senha Completa*. Limpe o filtro para habilitar a opção **Todos**. |
| **Visualizar**| Campo que filtra os grupos de acesso por permissão para visualizar a senha. As opções disponíveis são **Sim** ou **Não**. Limpe o filtro para habilitar a opção **Todos**. |
| **Aprovações para visualizar** | Campo que filtra os grupos de acesso por tipo de aprovação para visualização. As opções disponíveis são **Requer aprovação** e **Não requer aprovação**. Limpe o filtro para habilitar a opção **Todos**. |
| **Sessão**| Campo que filtra os grupos de acesso por presença de restrições para acessar a sessão. As opções disponíveis são **Sim** e **Não**. Limpe o filtro para habilitar a opção **Todos**. |
| **Aprovação para sessão** | Campo que filtra os grupos de acesso pela necessidade de aprovação para acessar a sessão. As opções disponíveis são **Requer aprovação** e **Não requer aprovação**. Limpe o filtro para habilitar a opção **Todos**. |
| **Alterar expiração**| Campo que filtra os grupos de acesso por sua permissão de alterar a data de expiração de uma solicitação. As opções disponíveis são **Sim** e **Não**. Limpe o filtro para habilitar a opção **Todos**. |
| **Ativo**| Campo que filtra os grupos de acesso por seu estado de ativação. As opções disponíveis são **Sim** e **Não**. Limpe o filtro para habilitar a opção **Todos**. |

:::(Info) (Info)
Os campos de busca *Parte da senha, Visualizar, Aprovação para visualizar, Sessão, Aprovação para sessão* e *Alterar expiração* serão removidos em versões futuras.
:::
## Campos do relatório
- **Código:** código de identificação do grupo de acesso.
- **Nome**.
- **Parte da senha**.
- **Permissão:** tipo de permissão concedida ao grupo de acesso. Esse campo sempre retornará o valor **Executar script**.
- **Aprovação:** caso a opção **Requer aprovação para executar tarefa** esteja marcada, a ação **Executar script** necessitará de aprovação e, portanto, a coluna **Aprovação** terá o valor **Executar script**. Caso contrário, a coluna ficará vazia.
- **Justificativa:** caso a opção **Requer justificativa para executar tarefa** esteja marcada, a ação **Executar script** necessitará de justificativa e, portanto, a coluna **Justificativa** terá o valor **Executar script**. Caso contrário, a coluna ficará vazia.
- **Alterar Expiração**.
- **Tipo:** tipo do grupo de acesso. Nesse relatório, essa coluna sempre retornará o valor **Task Manager.**
- **Critérios:** os ambientes e sistemas vinculados ao grupo de acesso.
- **Ativo**.
- **Ação:** nessa coluna, você acessa as seguintes opções:
  - **Alterar:** representado pelo ícone de lápis e papel, abre a tela **[Cadastro de grupo de acesso](/v3-33/docs/pt/task-manager-access-groups#tela-cadastro-de-grupo-de-acesso)**, onde é possível editar as configurações do grupo de acesso selecionado.
  - **Ícone dos três pontos verticais:** abre um menu suspenso com a opção **Clonar** que possibilita a geração de uma cópia do grupo de acesso clonado.

:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

### Tela Cadastro de grupo de acesso
Nesta seção, você encontra todas as informações sobre a tela **Cadastro de grupo de acesso** que possibilita a criação ou edição de um grupo de acesso no **Task Manager**.


| **Item** | Descrição |
| ---- | ---- |
| **Nome do grupo de acesso*** | Campo para inserção de um nome legível para o grupo de acesso. |
| **Ativo*** | Campo para selecionar o estado de ativação do grupo. As opções disponíveis são **Sim** e **Não**. |
| **Descrição** | Campo para inserção de uma descrição para o grupo de acesso. |

#### Aba Configurações
Essa aba possibilita a configuração das ações que este grupo de acesso permite e dos controles de acesso que devem ser respeitados no gerenciamento das tarefas. 

**Configurações de execução**

| **Item** | Descrição |
|----|----|
| **Requer justificativa para executar tarefa** | Caixa de seleção para definir se os usuários do grupo de acesso deverão inserir uma justificativa ao solicitarem a execução de uma tarefa. |
| **Requer aprovação para executar tarefa** | Caixa de seleção para definir se as solicitações de execução de tarefa deverão passar por um fluxo de aprovação. |
| **Aprovações necessárias para executar** | Campo para definição do número de aprovações necessárias para uma solicitação de execução de tarefa. Utilize as setas para cima e para baixo ou digite o número manualmente. **Nota**: esse campo só é habilitado quando o campo **Requer aprovação para executar tarefa** é marcado. |
| **Reprovações necessárias para cancelar** | Campo para definição do número mínimo de reprovações necessárias para impedir a execução de uma tarefa. Utilize as setas para cima e para baixo ou digite o número manualmente. **Nota**: esse campo só é habilitado quando o campo **Requer aprovação para executar tarefa** é marcado. |
| **Aprovação em níveis** | Caixa de seleção para definir se as solicitações de execução de tarefa deverão passar pelo fluxo de aprovação em níveis. |

**Arquivos resultado**

:::(Info) (Info)
Essa seção será removida em versões futuras.
:::

Essa seção possibilita a configuração das ações relacionadas aos arquivos resultantes da execução de uma tarefa.

| **Item** | Descrição |
|----------|-----------|
| **Usuário pode baixar arquivos resultantes da task** | Caixa de seleção para definir se os usuários do grupo de acesso poderão baixar arquivos resultantes da task. |
| **Usuário deve fornecer motivo para baixar arquivos resultantes da task** | Caixa de seleção para definir se os usuários deverão fornecer um motivo para baixar os arquivos resultantes da task. |

#### Configurações da solicitação de acesso

Essa seção possibilita a configuração dos pré-requisitos para solicitação de execução de tarefa.

| **Item** | Descrição |
|---------|-----------|
| **Obrigatório especificar código de governança ao justificar?*** | Caixas de seleção para definir se os usuários do grupo de acesso deverão inserir um código de governança ao justificar a solicitação de execução da tarefa. As opções disponíveis são **Sim** e **Não**. |
| **Sempre adicionar o gestor do usuário aos aprovadores?*** | Caixas de seleção para definir se o usuário responsável pelo departamento do usuário deve ser consultado automaticamente como um aprovador adicional a este grupo. Portanto, este usuário será alertado juntamente com os outros aprovadores selecionados na aba **Aprovadores**. As opções disponíveis são **Sim** e **Não**. |

:::(Info) (Info)
O campo **Sempre adicionar o gestor do usuário aos aprovadores?*** será removido em versões futuras.
:::
####  Aba Critérios

Essa aba possibilita a configuração dos critérios que determinam quais tarefas serão associadas a este grupo de acesso. Os campos *Dispositivo, Ambientes* e *Sistemas*, descritos abaixo, são utilizados como filtros para conceder acesso às tarefas que possuem as informações cadastradas nesses campos. 

| **Item** | Descrição |
|---------|-----------|
| **Dispositivo (sep. por vírgula)** | Campo para inserção dos dispositivos, separados por vírgula, onde a tarefa será executada. |
| **Ambientes*** | Lista com todos os ambientes cadastrados no **Task Manager**. Utilize a caixa de seleção **Todos** para selecionar todos os ambientes, ou marque as caixas de seleção dos ambientes que deseja selecionar. |
| **Sistemas*** | Lista com todos os sistemas cadastrados no **Task Manager**. Utilize a caixa de seleção **Todos** para selecionar todos os sistemas, ou marque as caixas de seleção dos sistemas que deseja selecionar. |

#### Aba Usuários

Essa aba possibilita a adição dos usuários que farão parte do grupo de acesso e poderão, portanto, solicitar execuções de tarefa utilizando os dados cadastrados no grupo.

| **Item**| Descrição|
|----|----|
| **Usuários +**| Representado pelo ícone de soma, abre a tela **Usuários do Sistema**, onde é possível buscar e selecionar os usuários que serão adicionados ao grupo de acesso. |
| **Lista dos usuários** | Lista com todos os usuários selecionados para serem adicionados ao grupo de acesso. A lista possui as seguintes colunas: ícone da *lixeira* para remover o usuário selecionado, *Nome, Nome do usuário, E-mail, Tipo de criação, Departamento, Adicionado por* e *Adicionado em*. |

#### Aba Aprovadores
Essa aba possibilita a adição dos usuários que serão responsáveis por aprovar solicitações neste grupo de acesso, especificando também seus níveis de aprovação.

| **Item**| Descrição|
|----|----|
| **Aprovadores +** | Representado pelo ícone de soma, abre a tela **Aprovadores**, onde é possível buscar e selecionar os usuários que serão os aprovadores das solicitações vinculadas a esse grupo de acesso. |
| **Lista dos aprovadores** | Lista com todos os usuários selecionados para serem adicionados como aprovadores do grupo de acesso. A lista exibe as seguintes colunas: ícone da *lixeira* para remover o aprovador selecionado, *Nome, Nome do usuário, E-mail, Tipo de criação, Departamento, Adicionado por, Adicionado em* e *Nível*, que é onde você seleciona o nível, de 1 a 3, em que o aprovador atuará. |

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::