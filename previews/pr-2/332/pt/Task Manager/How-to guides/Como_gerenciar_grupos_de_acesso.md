# Como gerenciar grupos de acesso

Neste documento, você encontra um guia passo a passo sobre como criar, alterar, clonar e reprocessar grupos de acesso no **Task Manager**.

## Caminho para acesso
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Configurações > Grupos de acesso.**


* * *


## Criar grupo de acesso
Para criar um grupo de acesso que limitará as tarefas com as quais os usuários poderão interagir no **Task Manager**, siga os passos abaixo:


1. No canto superior direito da tela **Grupos de acesso**, clique no menu **Exibir ações**, representado pelo três pontos verticais, e selecione **Novo**.
2. Na tela **Cadastro de grupo de acesso**:
    1. **Nome do grupo de acesso***: nome legível para o grupo de acesso cadastrado.
    2. **Ativo***: marque Sim ou Não para definir se o grupo de acesso estará ativo ou inativo.
    3. **Descrição**: escreva uma descrição para esse grupo de acesso.

     :::(Info) (Info)
    Os usuários sincronizados terão suas permissões substituídas se a sincronização estiver ativada. Verifique seus grupos de sincronização para alterações.
    :::
    4. Na aba **Configurações**:
    5.  1. **Requer justificativa para executar tarefa**: marque a caixa de seleção para exigir que o solicitante da tarefa insira um motivo para sua execução.
        2. **Requer aprovação para executar tarefa**: marque a caixa de seleção para definir que a execução da tarefa ocorra somente mediante aprovação.
        3. **Aprovações necessárias para executar**: insira um numeral que indica o número mínimo de aprovações necessárias para execução da tarefa solicitada. Campo habilitado apenas se o campo **Requer aprovação para executar tarefa for marcado**.
        4. **Reprovações necessárias para cancelar**: insira um numeral que indica o número mínimo de reprovações necessárias para que a execução da tarefa solicitada não ocorra. Campo habilitado apenas se o campo **Requer aprovação para executar tarefa for marcado**.
        5. **Aprovação em níveis**: marque a caixa de seleção para exigir que a aprovação da solicitação seja feita em níveis. 
        6. **Usuário pode baixar arquivos resultantes da task**: marque a caixa de seleção para possibilitar que os usuários do grupo de acesso baixem arquivos resultantes da task.
        7. **Usuário deve fornecer motivo para baixar arquivos resultadas da task**: marque a caixa de seleção para exigir que os usuários forneçam um motivo para baixar os arquivos resultantes da task.
        8. **Obrigatório especificar código de governança ao justificar?***: marque **Sim** ou **Não** para definir se os usuários deverão fornecer um código de governança ao justificar a solicitação de execução da tarefa. 
        9. **Sempre adicionar o gestor do usuário aos aprovadores?***: marque **Sim** ou **Não** para definir se o gestor do usuário deverá ser sempre adicionado aos aprovadores.


    6.  Na aba **Critérios**:
   
        1.  **Dispositivo (sep. por vírgula):** insira os dispositivos, separados por vírgula, onde a tarefa será executada.
        2.  **Ambientes***: utilize as caixas de seleção para selecionar os ambientes onde a tarefa será executada.
        3.  **Sistemas***: utilize as caixas de seleção para selecionar os sistemas onde a tarefa será executada.

    7.  Na aba **Usuários**:
         1.  **Usuários +**: clique no ícone de soma para abrir a tela **Usuários do sistema**, selecione os usuários que serão adicionados ao grupo de acesso e clique em **Adicionar**.

    :::(Info) (Info)
    Usuários que estão inseridos em mais de um grupo de acesso terão as configurações aplicadas do grupo mais restritivo.
    :::
    8.  Na aba **Aprovadores**:
        1.  **Aprovadores +**: clique no ícone de soma para abrir a tela **Aprovadores**, selecione os aprovadores que serão adicionados ao grupo de acesso e clique em **Adicionar**.
       

       
    



    :::(Warning) (Atenção)
    Caso você tenha escolhido a aprovação em níveis para esse grupo de acesso, após adicionar, pelo menos dois aprovadores, defina o nível de aprovação de cada um, na coluna **Nível**. O nível escolhido indica a etapa de aprovação em que cada aprovador será notificado após a solicitação de execução de tarefa.
    :::



    :::(Info) (Info)
    O usuário deve ter o perfil mínimo PAM Operator para que tenha acesso à tela de aprovação de fluxo.
    :::
    
    :::(Info) (Info)
    Os itens com asterisco são obrigatórios.
    :::

5. Clique em **Salvar**.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso!”** confirma a ação.

:::(Warning) (Atenção)
O senhasegura trabalha com níveis de permissionamento. Se o usuário adicionado ao grupo de acesso do **Task Manager** estiver em outro grupo com maiores restrições, ele poderá não visualizar informações dentro do módulo. 
:::


## Clonar grupo de acesso

Ao clonar um grupo de acesso, você aproveita as configurações do grupo selecionado, eliminando assim a necessidade de configurar manualmente um novo grupo.

## Requisitos

***
* Um grupo de acesso cadastrado no **Task Manager**. Para mais informações, acesse a seção [Criar grupo de acesso](/v3-32/docs/pt/task-manager-how-to-manage-access-groups#criar-grupo-de-acesso) desse documento.

Para clonar um grupo de acesso no **Task Manager**, siga os passos abaixo:

1. Na lista exibida na tela **Grupos de acesso**, identifique o grupo de acesso que deseja clonar ou utilize os filtros para buscá-lo.
2. Na coluna **Ação**, clique no **ícone dos três pontos verticais** e selecione **Clonar**, representado pelo ícone de duas folhas de papel.
3. Na janela pop-up **Confirmação**, você verá uma mensagem similar à seguinte:
**“Tem certeza que deseja gerar uma cópia deste registro?”**
4. Clique **Sim** para confirmar.

A mensagem pop-up **“Sucesso. Dados salvos com sucesso”** confirma a ação.

Na lista exibida na tela **Grupos de acesso**, o novo grupo de acesso será apresentado com o mesmo nome do grupo original, seguido da palavra **(copy)** entre parênteses, juntamente com seu código identificador. Por exemplo, se você clonou um grupo de acesso chamado **Meu grupo**, o novo grupo clonado poderá ser denominado **Meu grupo (copy 25)**.



## Alterar grupo de acesso
## Requisitos


* Um grupo de acesso cadastrado no **Task Manager**. Para mais informações, acesse a seção [Criar grupo de acesso](/v3-32/docs/pt/task-manager-how-to-manage-access-groups#criar-grupo-de-acesso) desse documento.

***
Para alterar um grupo de acesso cadastrado no **Task Manager**, siga os passos abaixo:


1. Na lista exibida na tela **Grupos de acesso**, identifique o grupo de acesso que deseja alterar ou utilize os filtros para buscá-lo.
2. Na coluna **Ação**, clique em **Alterar**, representado pelo ícone de lápis e papel. 
3. Na tela **Cadastro de grupo de acesso**, faça as alterações necessárias.
4. Clique em **Salvar**.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso!”** confirma a ação.



## Reprocessar grupos


O reprocessamento de grupos é o processo de atualização manual das configurações em todos os grupos de acesso cadastrados na base de dados do senhasegura. Essa função é útil quando você faz mudanças nas configurações de um grupo de acesso e deseja aplicá-las imediatamente.

:::(Warning) (Atenção)
Como o reprocessamento dos grupos atualiza os acessos conforme as novas configurações registradas, caso algum usuário seja removido de algum grupo, ou adicionado em grupos com mais restrições, ele poderá perder acesso às credencias.
:::  


## Requisitos


Um grupo de acesso cadastrado no **Task Manager**. Para mais informações, acesse a seção [Criar grupo de acesso](/v3-32/docs/pt/task-manager-how-to-manage-access-groups#criar-grupo-de-acesso) desse documento.
***
Para reprocessar os grupos de acesso cadastrados no **Task Manager**, siga os passos abaixo:

1. No canto inferior direito da tela **Grupos de acesso**, clique em **Reprocessar os grupos**.
2. Na janela pop-up **Confirmação**, você verá uma mensagem similar à seguinte:

**“Atenção: Ao reprocessar os grupos, alguns usuários podem perder acesso às credenciais.
Tem certeza que deseja prosseguir?”**


:::(Info) (Info)
Essa ação pode demorar alguns segundos a depender da quantidade de grupos de acesso e usuários cadastrados em cada grupo.
:::
3. Clique **Sim** para confirmar.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso!”** confirma a ação.
***
## Próximos passos
[Como gerenciar tarefas](/v3-32/docs/pt/task-manager-how-to-manage-tasks)
[Como gerenciar solicitações](/v3-32/docs/pt/task-manager-how-to-manage-requests)
[Como gerenciar aprovações](/v3-32/docs/pt/task-manager-how-to-manage-approvals)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
