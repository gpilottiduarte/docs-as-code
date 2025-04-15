# Como gerenciar políticas de acesso no Task Manager

Este documento fornece um guia passo a passo sobre como os administradores podem adicionar, editar, clonar e sincronizar políticas de acesso no **Task Manager**.

## Pré-requisitos

* Permissão de administrador do sistema ou do **Task Manager**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Políticas de acesso**.
---
## Adicionar política de acesso

Para adicionar uma política de acesso que define as tarefas e os usuários que poderão executá-las no **Task Manager**, siga estes passos:

1. No canto superior direito da tela **Políticas de acesso**, clique em **Adicionar**.  
2. Na tela **Adicionar política de acesso**, preencha:  
   	:::(error) (Alerta)  
   	Os campos com asterisco são obrigatórios.  
   	:::  
     
   1. **Aba Geral**  
      1. **Nome da política de acesso**\*: insira um nome para identificar a política de acesso adicionada.  
      2. **Status**: ative ou desative a política de acesso.  
      3. **Descrição**: insira uma descrição para essa política de acesso.  
      4. Clique em **Continuar**.  
      
1. Aba **Configurações**

   1. **Requer justificativa para executar tarefa**: ative ou desative a necessidade de o solicitante inserir uma justificativa para executar a tarefa.  
      2. **Requer aprovação para executar tarefa**: ative ou desative a necessidade de aprovação para executar tarefa.  
      3. **Aprovações necessárias para executar:** defina a quantidade de aprovações necessárias para que uma tarefa seja executada.  
      4. **Reprovações necessárias para cancelar:** defina a quantidade de reprovações necessárias para cancelar a execução de uma tarefa.  
      5. **Aprovação em níveis:** ative ou desative a aprovação em níveis.

::: (warning) (Atenção)

Os componentes da seção **Arquivos resultado** não refletem as configurações atuais do **Task Manager**.  
:::

8. Aba **Critérios**:  
   1. **Dispositivo:** ative ou desative a configuração de dispositivos na política de acesso.  
      2. **Dispositivo (sep. por vírgula)**: insira os dispositivos, separados por vírgula, onde a tarefa será executada.  
      3. **Ambientes**\*: selecione o ambiente onde a tarefa será executada.  
      4. **Sistemas**\*: selecione o sistema onde a tarefa será executada.  
      5. Clique em **Continuar.**

   9. Aba **Usuários**:  
      1. Clique em **Adicionar** para abrir o modal **Usuários do sistema** e selecione os usuários que serão adicionados à política de acesso.  
      2. Clique em **Continuar.**

      :::(warning) (Atenção)  
         Se o usuário adicionado à política de acesso do **Task Manager** fizer parte de outra política de acesso do Segura com maiores restrições, ele poderá não visualizar informações dentro do módulo.  
         :::

   10. Aba **Aprovadores**:  
       1. Clique em **Adicionar** para abrir o modal **Usuários do sistema** e selecione os usuários aprovadores das tarefas vinculadas à política de acesso.  
       2. **Nível:** se a **Aprovação em níveis** estiver ativada:  
          * Adicione pelo menos dois aprovadores.  
          * Defina o nível de cada aprovador no fluxo (1, 2 ou 3).  
          * O fluxo de aprovação segue uma ordem sequencial.  
       3. Ative ou desative o campo **Obrigatório especificar código de governança ao justificar?**\* para solicitação de execução da tarefa.

        :::(warning) (Atenção)
        * Apenas usuários com permissão mínima de **PAM Operator** podem aprovar a execução de tarefas.


        * O campo **Sempre adicionar o gestor do usuário aos aprovadores?\*** não reflete as configurações atuais do **Task Manager**.

        :::

5. Clique em **Salvar**.

## Editar política de acesso

Para editar uma política de acesso adicionada no **Task Manager**, siga estes passos:

1. Na tela **Políticas de acesso**, identifique a política de acesso desejada ou use os filtros de busca.  
2. Clique no **botão Ações** e selecione **Editar**.  
3. Na tela **Editar política de acesso**, faça as alterações necessárias.  
4. Clique em **Salvar**.

## Desativar política de acesso

Para desativar uma política de acesso no **Task Manager**, siga estes passos:

1. Na tela **Políticas de acessos**, identifique a política desejada ou use os filtros de pesquisa.  
2. Clique no **botão** **Ações** e selecione **Editar**.  
3. Na tela **Editar política de acesso**, desabilite o botão *toggle* **Status.**  
4. Clique em **Salvar**.

## Ativar política de acesso

Para ativar uma política de acesso inativa no **Task Manager**, siga estes passos:

1. Na tela **Políticas de acessos**, identifique o filtro **Status** e selecione **Inativo.**  
2. Na lista de políticas de acesso inativas, identifique a política de acesso desejada.  
3. Clique no **botão** **Ações** e selecione **Editar**.  
5. Na tela **Editar política de acesso**, habilite o botão *toggle* **Status.**  
6. Clique em **Salvar**.

## Clonar política de acesso

Ao clonar uma política de acesso, você aproveita as configurações da política selecionada, eliminando a necessidade de configurar manualmente uma nova política de acesso.

Para clonar uma política de acesso no **Task Manager**, siga estes passos:

1. Na tela **Políticas de acesso**, identifique a política de acesso desejada ou use os filtros de busca.  
2. Clique no **botão Ações** e selecione **Clonar**.  
3. Clique em **Sim** no *pop-up* de confirmação.  
   

:::(info) (Info)  
A nova política de acesso será exibida com o mesmo nome da política de acesso original, seguida da palavra **(copy)** entre parênteses, juntamente com seu código de idenficação. 
Por exemplo, se você clonou uma política de acesso chamada **Minha política de acesso** cujo código é **1**, a nova política se chamará **Minha política de acesso (copy 1\)**.  
:::

## Sincronizar políticas de acesso

A sincronização de políticas de acesso é o processo de atualização manual das configurações em todas as políticas de acesso cadastradas na base de dados do Segura. Essa função é útil quando você faz mudanças nas configurações de uma política de acesso e deseja aplicá-las imediatamente.

:::(warning) (Atenção)

A sincronização das políticas de acesso atualiza os acessos conforme as novas configurações registradas. Se algum usuário for removido de alguma política, ou adicionado a políticas com mais restrições, ele poderá perder acesso às credencias.  
:::

Para sincronizar as políticas de acesso cadastradas no **Task Manager**, siga estes passos:

1. No canto superior direito da tela **Políticas de acesso**, clique em **Sincronizar**.  
2. Clique em **Sim** no *pop-up* de confirmação.

:::(info) (Info)

A sincronização pode levar alguns segundos a depender da quantidade de políticas de acesso e usuários cadastrados em cada política.  
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
