# Primeiros passos

Neste documento, você encontra um guia passo a passo sobre como configurar o módulo **Task Manager** do senhasegura.

## Requisitos
Para utilizar o módulo **Task Manager**, é necessário:
* [Dispositivo](/v3-33/docs/pt/pam-devices-management) com porta para acesso remoto configurado de acordo com o sistema.
* [Credencial](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura) com permissão para executar scripts remotamente no dispositivo.
* [Cadastro de ambiente](/v3-33/docs/pt/task-manager-first-steps#cadastrar-ambiente).
* [Cadastro de sistema](/v3-33/docs/pt/task-manager-first-steps#cadastrar-sistema)
* [Cadastro de motivo para execução da tarefa](/v3-33/docs/pt/task-manager-first-steps#cadastrar-motivo-para-executar-tarefa).
* [Templates de execução](/v3-33/docs/pt/task-manager-first-steps#cadastrar-template-de-execução).
* [Grupo de acesso para este módulo](/v3-33/docs/pt/task-manager-first-steps#criar-grupo-de-acesso).


## Cadastrar ambiente
:::(Info) (Info)
Caso você já tenha o ambiente desejado cadastrado no senhasegura, a configuração abaixo não é necessária.
:::

Para cadastrar um ambiente no senhasegura, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **SISTEMA > Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema > Segmentação > Ambientes**.
3. No canto superior direito, clique no menu **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo**.
4. Na tela **Cadastrar ambiente**:
    1. **Nome***: insira um nome legível para o ambiente cadastrado.
    2. **Ativo**: marque **Sim** ou **Não** para definir se o ambiente estará ativo ou inativo. 
    :::Info (Info)
    Os itens com asterisco são obrigatórios.
    :::
5. Clique em **Salvar**.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso”** confirma a ação.

:::(Info) (Info)
Na tela **Ambientes**, através da coluna **Ação**, você pode alterar e inativar um ambiente cadastrado. 
- Para alterar, identifique o ambiente desejado na lista ou utilize os filtros para encontrá-lo, e na coluna **Ação**, clique em **Alterar**, representado pelo ícone de lápis e papel. 
- Para inativar o ambiente, na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Inativar**, representado pelo ícone de lixeira. 
:::

---

## Cadastrar sistema
:::(Info) (Info)
Caso você já tenha o sistema desejado cadastrado no senhasegura, a configuração abaixo não é necessária.
:::

Para cadastrar um ambiente no senhasegura, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **SISTEMA > Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema > Segmentação > Sistemas**.
3. No canto superior direito, clique no menu **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo**.
4. Na tela **Cadastrar sistema**:
    1. **Nome***: insira um nome legível para o sistema cadastrado.
    2. **Ativo**: marque **Sim** ou **Não** para definir se o sistema estará ativo ou inativo.

    :::(Info) (Info)
    Os itens com asterisco são obrigatórios.
    :::


5. Clique em **Salvar**.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso”** confirma a ação.

:::(Info) (Info)
Na tela **Sistemas**, através da coluna **Ação**, você pode alterar e inativar um sistema cadastrado.
- Para alterar, identifique o sistema desejado na lista ou utilize os filtros para encontrá-lo, e na coluna **Ação**, clique em **Alterar**, representado pelo ícone de lápis e papel. 
- Para inativar o sistema, na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Inativar**, representado pelo ícone de lixeira. 
:::

---

## Cadastrar motivo para executar tarefa

Para cadastrar um motivo que poderá ser utilizado ao solicitar a execução de uma tarefa no **Task Manager**, siga os passos abaixo:



:::(Info) (Info)
A obrigatoriedade da inserção de um motivo ao solicitar a execução de uma tarefa é definida durante a criação do grupo de acesso no qual a tarefa está incluída. Para mais informações, acesse o documento sobre [Como gerenciar grupos de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups).
:::

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Configurações > Motivos**.
3. No canto superior direito da tela, clique no menu **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo**.
4. Na tela **Cadastro de motivo de task**:
    1. **Nome***: insira um nome legível para o motivo cadastrado.
    2. **Tipo***: clique na seta que aponta para baixo para escolher um dos tipos de motivos cadastrados. 
    3. **Ativo***: marque **Sim** ou **Não** para definir se o motivo estará ativo ou inativo.


    :::(Info) (Info)
    Os itens com asterisco são obrigatórios.
    :::
5. Clique em **Salvar**.

Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso”** confirma a ação.

---
## Cadastrar template de execução
Para cadastrar um template de execução que poderá ser utilizado ao criar uma tarefa no **Task Manager**, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representando pelos nove quadrados, e selecione **SISTEMA > Executions**.
2. No menu lateral, selecione **Configurações > Modelo**.
3. No canto superior direito da tela **Templates de execução**, clique no menu **Exibir ações**, representado pelo três pontos verticais, e selecione **Novo**.
4. Na tela **Template de execução**:
    1. **Nome***: insira um nome legível para o template cadastrado. Exemplo: “Linux - Reiniciar serviços”.
    2. **Ativo**: marque **Sim** ou **Não** para definir se o template estará ativo ou inativo.
    3. **Executor***: clique na seta que aponta para baixo para escolher um dos plugins disponíveis que o template utilizará.
    4. **Tipo de execução***: clique na seta que aponta para baixo e escolha **Task Manager**.
    5. **Playbook**: clique na seta que aponta para baixo para selecionar um playbook disponível.
    6. **Inventory**:  clique na seta que aponta para baixo para selecionar um inventory disponível.
    7. **Conteúdo**: insira os comandos que serão executados na tarefa.

     :::(Info) (Info)
    Os itens com asterisco são obrigatórios.
    :::
	:::(Info) (Info)
    O botão **Visualizar TAGs** apresenta uma legenda das TAGs  que podem ser utilizadas nos templates.
    :::

Segue abaixo um exemplo de utilização de TAGs na criação de templates:
```json
#Verifica o status de todos os serviços
        expect "*$"
        exec "service --status-all"

        #Acesso ao usuário root
        expect "*$"
        exec "sudo su"

        #Insere a senha do usuário root
        expect "*:"
        exec "[#AUTH_PASSWORD#]"

        #Para o serviço
        expect "*#"
        exec "service [#VARIAVEL#] stop"

        #Exibe o status do serviço
        expect "*#"
        exec "service [#VARIAVEL#] status"

        #Reinicia o serviço
        expect "*#"
        exec "service [#VARIAVEL#] restart"

        #Finaliza a execução da task
        expect "*#"
        end
```


:::(Info) (Info)
No topo da tela **Template de execução**, clique no ícone de link externo, representado por uma seta saindo de um quadrado, para ser direcionado ao GitHub, onde é possível visualizar todos os templates do módulo **Executions**.
:::

5. Clique em **Salvar**.



Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso.”** confirma a ação.

:::(Info) (Info)
Na tela **Templates de execução**, através da coluna **Ação**, você pode alterar, clonar e visualizar o histórico das alterações do template. 
- Para alterar, identifique o template de execução desejado na lista ou utilize os filtros para encontrá-lo, e na coluna **Ação**, clique no **ícone dos três pontos verticais** e selecione **Alterar**, representado pelo ícone de lápis e papel. 
- Para clonar o template de execução, na coluna **Ação**, clique no **ícone dos três pontos verticais** e selecione **Clonar**, representado pelo ícone de uma folha de papel sobre outra. Durante esse processo, você pode mudar o nome do template clonado ou manter o mesmo nome do template original seguido da palavra **(copy)** e do código de identificação. 
- Para visualizar o histórico das alterações, no mesmo **ícone dos três pontos verticais**, selecione **Visualizar histórico das alterações do template**.

:::

## Criar grupo de acesso
Para criar um grupo de acesso que limitará as tarefas com as quais os usuários poderão interagir no **Task Manager**, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Task Manager**.
2. No menu lateral, selecione **Configurações > Grupos de acesso**.
3. No canto superior direito da tela, clique no menu **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo**.
4. Na tela **Cadastro de grupo de acesso**:
    1. **Nome do grupo de acesso***: insira um nome legível para o grupo de acesso cadastrado.
    2. **Ativo***: marque **Sim** ou **Não** para definir se o grupo de acesso estará ativo ou inativo.
    3. **Descrição**: insira uma descrição para esse grupo de acesso.


    :::(Info) (Info)
    Os usuários sincronizados terão suas permissões substituídas se a sincronização estiver ativada. Verifique seus grupos de sincronização para alterações.
    :::
    5. Na aba **Configurações**:
        1. **Requer justificativa para executar tarefa**: marque a caixa de seleção para exigir que o solicitante da tarefa insira um motivo para sua execução.
        2. 1. **Requer aprovação para executar tarefa**: marque a caixa de seleção para definir que a execução da tarefa ocorra somente mediante aprovação.
        3. **Aprovações necessárias para executar**: insira um numeral que indica o número mínimo de aprovações necessárias para execução da tarefa solicitada. Campo habilitado apenas se o campo **Requer aprovação para executar tarefa** for marcado.
        4. **Reprovações necessárias para cancelar**: insira um numeral que indica o número mínimo de reprovações necessárias para que a execução da tarefa solicitada não ocorra. Campo habilitado apenas se o campo **Requer aprovação para executar tarefa** for marcado.
        5. **Aprovação em níveis**: marque a caixa de seleção para exigir que a aprovação da solicitação seja feita em níveis. 
        6. **Usuário pode baixar arquivos resultantes da task**: marque a caixa de seleção para possibilitar que os usuários do grupo de acesso baixem arquivos resultantes da task.
        7. **Usuário deve fornecer motivo para baixar arquivos resultadas da task**: marque a caixa de seleção para exigir que os usuários forneçam um motivo para baixar os arquivos resultantes da task. 
        8. **Obrigatório especificar código de governança ao justificar?***: marque **Sim** ou **Não** para definir se os usuários deverão fornecer um código de governança ao justificar a solicitação de execução da tarefa. 
        9. **Sempre adicionar o gestor do usuário aos aprovadores?***: marque **Sim** ou **Não** para definir se o usuário responsável pelo departamento do usuário deve ser consultado automaticamente como um aprovador adicional a este grupo e ser alertado juntamente com os outros aprovadores selecionados na aba **Aprovadores**.

    :::(Info) (Info)
    Os campos *Usuário pode baixar arquivos resultantes da task*, *Usuário deve fornecer motivo para baixar arquivos resultadas da task* e *Sempre adicionar o gestor do usuário aos aprovadores?** serão removidos em versões futuras.
    :::

    5. Na aba **Critérios**:
        1. **Dispositivo (sep. por vírgula)**: insira os dispositivos, separados por vírgula, onde a tarefa será executada.
        2. **Ambientes***: utilize as caixas de seleção para selecionar os ambientes onde a tarefa será executada.
        3. **Sistemas***: utilize as caixas de seleção para selecionar os sistemas onde a tarefa será executada.


    6. Na aba **Usuários**:
        1. **Usuários +**: clique no ícone de soma para abrir a tela **Usuários do Sistema**, selecione os usuários que serão adicionados ao grupo de acesso e clique em **Adicionar**.


    :::(Warning) (Atenção)
    O senhasegura trabalha com níveis de permissionamento. Se o usuário adicionado ao grupo de acesso do **Task Manager** estiver em outro grupo com maiores restrições, ele poderá não visualizar informações dentro do módulo. 
    :::

    7. Na aba **Aprovadores**:
        1. **Aprovadores +**: clique no ícone de soma para abrir a tela **Aprovadores**, selecione os usuários que serão adicionados ao grupo de acesso e clique em **Adicionar**.

    :::(Warning) (Atenção)
    Caso você tenha escolhido aprovação em níveis, após adicionar pelo menos dois aprovadores,  defina o nível de aprovação de cada aprovador na coluna **Nível**. O nível escolhido indica a etapa de aprovação em que este aprovador será notificado após a solicitação de execucação de tarefa. 
    :::



    :::(Info) (Info)
    O usuário deve ter o perfil mínimo PAM Operator para que tenha acesso à tela de aprovação de fluxo.
    :::
:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::

5. Clique em **Salvar**.
Uma janela pop-up com a mensagem **“Sucesso. Dados salvos com sucesso”** confirma a ação.






## Próximos passos

[Como gerenciar grupos de acesso](/v3-33/docs/pt/task-manager-how-to-manage-access-groups)
[Como gerenciar motivos](/v3-33/docs/pt/task-manager-how-to-manage-reasons)
[Como gerenciar tarefas](/v3-33/docs/pt/task-manager-how-to-manage-tasks)


Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).


