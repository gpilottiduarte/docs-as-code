# Como gerenciar tarefas

Neste documento, você encontra um guia passo a passo sobre como criar, alterar, executar, agendar, inativar, ativar e visualizar detalhes de tarefas cadastradas no **Task Manager**.

## Caminho para acessar
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Tarefas**.

---
## Criar uma tarefa

### Requisitos


* Estar incluído em algum grupo de acesso. Para mais informações, acesse o documento sobre [Como gerenciar grupos de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups).

---
Para criar uma tarefa no **Task Manager**, siga os passos abaixo:


1. No canto superior direito da tela **Tarefas**, clique no menu **Exibir ações**, representado pelo três pontos verticais, e selecione **Nova**.
2. Na tela **Cadastro de task**, navegue pelas seguintes abas:
    1. Aba **Informações da task**:
        1. **Nome de identificação da task**: insira um nome legível para identificar a tarefa cadastrada.
        2. **Ambiente***:  clique na seta que aponta para baixo para escolher o ambiente em que a tarefa será executada.
        3. **Sistema***: clique na seta que aponta para baixo para escolher o sistema em que a tarefa será executada.
        4. **Tags**: insira palavras-chave para ajudar a identificar e filtrar a tarefa.
        5. **Plugin**: clique na seta que aponta para baixo para escolher o plugin executor da tarefa.
        6. **Selecione o template a ser usado***: clique na seta que aponta para baixo para escolher o template para executar a tarefa. 
        7. **Nova variável +**: clique no ícone de soma para adicionar uma ou mais variáveis. Após clicar no ícone de soma, insira um **identificador** e um **valor** para a variável. Clique no ícone de **lixeira** para remover uma variável adicionada.
        8. **Utilizar uma credencial cadastrada para acessar todos os dispositivos**: marque a caixa de seleção para definir que uma credencial cadastrada seja utilizada para se autenticar ao dispositivo onde a tarefa será executada. 
        9. **Credencial de acesso cadastrada do sistema**: esse campo é habilitado ao marcar a caixa de seleção acima. Utilize a seta que aponta para baixo para escolher uma das credenciais cadastradas.
        10. **Utilizar a própria credencial para conectar**: marque a caixa de seleção para que a sua própria credencial seja utilizada para se autenticar ao dispositivo onde a tarefa será executada.
        11. **Username da credencial**: a não marcação do campo **Utilizar uma credencial cadastrada para acessar todos os dispositivos** habilita esse campo. Utilize-o para inserir uma credencial que não esteja cadastrada no senhasegura.
    2. Aba **Dispositivos para execução**:
        1. **Dispositivos +**: clique no ícone de soma para abrir a tela **Dispositivos** e vincular um ou mais dispositivos à tarefa criada. 
        2. Clique em **Adicionar** para prosseguir com a adição dos dispositivos ou **Cancelar** para desistir da ação. Clique no ícone de **lixeira** para remover um dispositivo adicionado.
    
    :::(Info) (Info)
   Os itens com asterisco são obrigatórios.
    :::

    :::(Info) (Info)
    Assim que a execução da tarefa é iniciada, é criada uma operação separada para cada dispositivo envolvido. Portanto, cada dispositivo terá seu próprio log de execução, e o sucesso ou falha da execução da tarefa em um dispositivo não impede ou afeta a execução do próximo.
    :::

3. Clique em **Salvar**.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso.”** confirma a ação.



## Alterar uma tarefa
### Requisitos


* Uma tarefa cadastrada. Para mais informações, acesse a seção [Criar uma tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#criar-uma-tarefa) desse documento.
---

Para alterar uma tarefa cadastrada no **Task Manager**, siga os passos abaixo:

1. Na lista exibida na tela **Tarefas**, identifique a tarefa que deseja alterar ou utilize os filtros para buscá-la.
2. Na coluna **Ação**,  clique em **Alterar**, representado pelo ícone de lápis e papel
3. Na tela **Cadastro de task**, faça as alterações necessárias.
4. Clique em **Salvar**.



Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso”** confirma a ação.


5. Clique no ícone de **X** no canto superior direito da janela para fechá-la.


## Executar uma tarefa

### Requisitos


* Uma tarefa cadastrada. Para mais informações, acesse a seção [Criar uma tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#criar-uma-tarefa) desse documento.
* Um dispositivo associado à tarefa. 

---
Para executar uma tarefa cadastrada no **Task Manager**, siga os passos abaixo:

1. Na lista exibida na tela **Tarefas**, identifique a tarefa que deseja executar ou utilize os filtros para buscá-la.
2. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Executar tarefa**, representado pelo ícone de play.
3. Na tela **Executar tarefa**:
    1. **Motivo**: clique na seta que aponta para baixo para selecionar um dos motivos cadastrados.
    2. **Governance Code**: insira o código de governança.
    3. **Motivo**: insira um texto descritivo com a justificativa para execução da tarefa.

:::(Info) (Info)
Os campos acima podem vir acompanhados de um asterisco para indicar que são obrigatórios. A obrigatoriedade deles é definida durante a [criação de um grupo de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups), na aba **Configurações**.
:::
4. Clique em **Executar tarefa**.

:::(Info) (Info)
Se essa tarefa estiver cadastrada em um grupo de acesso que exige aprovação para execução, você pode obter mais informações sobre como acompanhar o status do fluxo de aprovação no documento [Como gerenciar solicitações](/v3-33/docs/pt/task-manager-how-to-manage-requests).
:::



## Agendar uma tarefa

### Requisitos


* Uma tarefa cadastrada no **Task Manager**. Para mais informações, acesse a seção [Criar uma tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#criar-uma-tarefa) desse documento.

---
Para agendar a execução de uma tarefa cadastrada no **Task Manager**, siga os passos abaixo:



1. Na lista exibida na tela **Tarefas**, identifique a tarefa que deseja agendar ou utilize os filtros para buscá-la.
2. Na coluna **Ação**,  clique no ícone dos três pontos verticais e selecione **Agendamentos**, representado pelo ícone de relógio.
3. Na tela **Agendamentos**, no canto inferior direito, clique em **Agendar execução**. 
4. Na tela **Agendar tarefa**:
    1. **Motivo**: clique na seta que aponta para baixo para selecionar um dos motivos cadastrados.
    2. **Governance Code**: insira o código de governança.
    3. **Justificativa**: insira um texto descritivo com a justificativa para o agendamento da execução da tarefa.
    4. **Dias para execução**: marque as caixas de seleção que indicam os dias que deseja que a execução da tarefa ocorra.
    5.  **Períodos para execução**: marque  as caixas de seleção que indicam os períodos do dia que deseja que a execução da tarefa ocorra.
    6.  **Intervalo mínimo entre as execuções**: defina o intervalo mínimo entre as execuções. No primeiro campo, insira um número de 0 a 60 e no segundo campo, clique na seta que aponta para baixo para escolher entre *Minutos, Horas, Dias* e *Meses*.
        
    :::(Info) (Info)
    Os campos *Motivo, Governance Code* e *Justificativa* podem vir acompanhados de um asterisco para indicar que são obrigatórios. A obrigatoriedade deles é definida durante a [criação de um grupo de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups), na aba **Configurações**.
    :::

5. Clique em **Salvar**.

:::(Info) (Info)
Se essa tarefa estiver cadastrada em um grupo de acesso que exige aprovação para execução, você pode obter mais informações sobre como acompanhar o status do fluxo de aprovação no documento [Como gerenciar solicitações](/v3-33/docs/pt/task-manager-how-to-manage-tasks).
:::



## Inativar uma tarefa

### Requisitos


* Uma tarefa ativa cadastrada no **Task Manager**. Para mais informações, acesse a seção [Criar uma tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#criar-uma-tarefa) desse documento.
---

Para inativar uma tarefa cadastrada no **Task Manager**, siga os passos abaixo:

1. Na lista exibida na tela **Tarefas**, identifique a tarefa que deseja inativar ou utilize os filtros para buscá-la.
2. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Inativar**, representado pelo ícone de lixeira.
3. Na janela pop-up **Confirmação**, você verá uma mensagem similar à seguinte:
**“Você tem certeza que deseja inativar o registro: [nome do registro]?”**
4. Clique **Sim** para confirmar.
A mensagem pop-up **“Sucesso. Tarefa desativada com sucesso”** confirma a ação.
5. Clique no ícone de **X** no canto superior direito da janela para fechá-la.



## Ativar uma tarefa

## Requisitos

* Uma tarefa inativa cadastrada no **Task Manager.** Para mais informações, acesse a seção [Inativar uma tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#inativar-uma-tarefa) desse documento.
---

Para ativar uma tarefa cadastrada no **Task Manager**, siga os passos abaixo:

1. Na tela **Tarefas**, localize o filtro **Ativo** entre os campos de busca e selecione **Não**.
2. Clique em **Filtrar**.
3. Na lista de tarefas inativas, identifique a tarefa que deseja ativar ou utilize os filtros para buscá-la.
4. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Ativar**, representado pelo ícone de check.
5. Na janela pop-up **Confirmação**, você verá uma mensagem similar à seguinte:

**“Você tem certeza que deseja ativar o registro: [nome da tarefa]?”**

6. Clique **Sim** para confirmar.
A mensagem pop-up **“Sucesso. Tarefa ativada com sucesso”** confirma a ação.
8. Clique no ícone de **X** no canto superior direito da janela para fechá-la.


## Visualizar os detalhes de uma tarefa 

## Requisitos


* Uma tarefa cadastrada no **Task Manager**. Para mais informações, acesse a seção [Criar uma tarefa](/v3-33/docs/pt/task-manager-how-to-manage-tasks#criar-uma-tarefa) desse documento.
---

Para visualizar os detalhes de uma tarefa cadastrada no **Task Manager**, siga os passos abaixo:

1. Na lista exibida na tela **Tarefas**, identifique a tarefa que deseja visualizar.
2. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Executions**, representado pelo ícone de três barras horizontais.
3. Na tela **Executions**, visualize um relatório com os seguintes detalhes da tarefa: *Código, Total, Processado, Erro, Estado, Solicitante, Data de solicitação, Ambiente, Sistema, Tags, Tipo de execução* e coluna *Ação*.
4. Na coluna **Ação**, clique em **Visualizar operações**, representado pelo ícone de três barras horizontais. 
5. Na tela **Operações**, visualize um relatório com os seguintes detalhes das operações da tarefa selecionada: *Código, Nome da task, Ambiente, Sistema, Tags, Dispositivo, Status, Resultado* e coluna *Ação*.
6. Identifique a operação cujos detalhes deseja visualizar e, na coluna **Ação**, clique em **Visualizar detalhes**, representado pelo ícone de lupa. 
7. Na tela **Detalhes da Operação**, visualize todos os detalhes da operação como sua credencial e dispositivo, *Solicitante, Data da solicitação, Data do agendamento, Operação* e *Estado*. Visualize também, os detalhes da tentativa de execução da operação como *Template, Versão, Início, Fim, Erro*, mensagem informando se a execução da operação foi concluída ou se houve erro, e *Logs*. 

:::(Info) (Info)
Também é possível visualizar os detalhes de uma tarefa através do caminho **Grid Menu > Task Manager > Executions >** Uma tarefa na lista **>** Coluna **Ação > Visualizar operações** (representado pelo ícone de três barras verticais) **>** Tela **Operações >** Uma operação na lista **>** Coluna **Ação > Visualizar detalhes** (representado pelo ícone de lupa) **>** Tela **Detalhes da operação**.
:::

---
## Próximos passos
[Como gerenciar grupos de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups)
[Como gerenciar solicitações](/v3-33/docs/pt/task-manager-how-to-manage-requests)
[Como gerenciar aprovações](/v3-33/docs/pt/task-manager-how-to-manage-approvals)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
