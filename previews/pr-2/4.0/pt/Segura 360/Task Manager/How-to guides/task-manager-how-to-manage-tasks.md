# Como gerenciar tarefas no Task Manager

Este documento fornece um guia passo a passo para:

* **Administradores** adicionarem e gerenciarem tarefas no **Task Manager**.  
* **Usuários autorizados** executarem tarefas no **Task Manager** de forma pontual.

## Requisitos

* Permissão de administrador do sistema ou do **Task Manager** para adicionar e gerenciar tarefas.  
* Permissão de usuário do sistema para executar tarefas.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Tarefas**.

---
## Executar tarefa

Para executar uma tarefa de forma pontual, você precisa estar incluído em uma política de acesso que contém a tarefa e as permissões necessárias. Siga os passos abaixo:

1. Na tela **Tarefas**, identifique a tarefa desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Executar tarefa**.  
3. Na tela **Executar tarefa**:  
   1. Selecione a **Justificativa**.  
   2. Se necessário, preencha os campos **Governance code** e **Motivo**.  
   3. Clique em **Executar tarefa.**  
4. Após passar pelo fluxo de aprovação, a tarefa será executada automaticamente.

:::(warning) (Atenção)  
Os passos a seguir só podem ser realizados por usuários com permissão de **Administrador do sistema** ou **Administrador do** **Task Manager.**  
:::

---
## Adicionar tarefa

Para adicionar uma tarefa a ser executada pelo **Task Manager**, siga estes passos:

1. No canto superior direito da tela **Tarefas**, clique em **Adicionar**.  
2. Na tela **Adicionar tarefa**, preencha:  
   :::(error) (Alerta)  
   	Os campos marcados com asterisco são obrigatórios.  
   	:::  
   1. Aba **Informações principais**  
      1. **Nome de identificação da tarefa\*:** nome para identificar a tarefa.  
      2. **Ambiente**\*: selecione o ambiente onde a tarefa será executada.  
      3. **Sistema**\*: selecione o sistema onde a tarefa será executada.  
      4. **Tags**\*: palavras-chave para categorizar a tarefa.  
      5. Clique em **Continuar**.  
   2. Aba **Execução**  
      1. **Plugin:** selecione o plugin que irá executar a tarefa.  
      2. **Selecione o template a ser usado**\***:** selecione o template usado para executar a tarefa.  
      3. Clique em **Adicionar** para adicionar variáveis para execução.  
      4. **Identificador:** adicione um nome único para a variável. Exemplo: `SERVICO`  
      5. **Valor:** adicione o valor da variável. Exemplo: `apache2`
      :::(warning) (Atenção)
        * O **Identificador** deve ser referenciado no template entre *hashtags* . Exemplo: [#SERVICO#].  
        * O **Valor** pode ser fixo ou solicitado ao usuário durante a execução da tarefa.  
        * Múltiplas variáveis podem ser configuradas para uma mesma tarefa.
      :::
6. **Utilizar uma credencial cadastrada para acessar todos os dispositivos:** marque essa caixa para selecionar uma credencial de acesso.  
   7. **Credencial de acesso cadastrada no sistema:** selecione a credencial usada para se autenticar no sistema.  
      8. **Utilizar a própria credencial para conectar**: ative ou desative a utilização da credencial de acesso para se autenticar no sistema.  
      9. **Username da credencial:** se preferir, autentique-se com uma credencial que não esteja cadastrada no Segura. Insira o nome de usuário da credencial no campo**.** O Segura usará esse *username* para procurar pela credencial em cada dispositivo em que a tarefa for executada.  
   3. Aba **Dispositivos para execução**  
      1. Clique em **Adicionar** para abrir o modal **Dispositivos** e selecionar os dispositivos onde a tarefa será executada.  
   4. Aba **Revisão**  
      1. Revise as configurações da tarefa.  
3. Clique em **Salvar**.

---
## Editar tarefa

Para editar uma tarefa no **Task Manager**, siga estes passos:

1. Na tela **Tarefas**, identifique a tarefa desejada ou use os filtros de pesquisa.  
2. Clique no **botão** **Ações** e selecione **Editar**.  
3. Na tela **Editar tarefa**, faça as alterações necessárias.  
4. Clique em **Salvar**.

:::(Internal) (Private notes)
## Agendar tarefa
Não encontrei o botão **Agendar/Adicionar** na tela.
:::


--
## Desativar tarefa

Para desativar uma tarefa no **Task Manager**, siga estes passos:

1. Na tela **Tarefas**, identifique a tarefa desejada ou use os filtros de pesquisa.  
2. Clique no **botão** **Ações** e selecione **Desativar**  
3. Clique em **Sim** no *pop-up* de confirmação.

---

## Ativar tarefa

Para ativar uma tarefa no **Task Manager**, siga estes passos:

1. Na tela **Tarefas**, identifique o filtro **Status** e selecione **Inativo.**  
2. Na lista de tarefas  inativas, identifique a tarefa desejada.  
3. Clique no **botão** **Ações** e selecione **Ativar**.  
4. Clique em **Sim** no *pop-up* de confirmação.

---

## Visualizar execuções da tarefa

Para visualizar as execuções de uma tarefa no **Task Manager**, siga estes passos:

1. Na tela **Tarefas**, identifique a tarefa desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Execuções**.  
3. Na tela **Execuções**, visualize as execuções da tarefa.

---
## Visualizar operações das execuções de uma tarefa

Para visualizar as operações de cada execução de uma tarefa no **Task Manager**, siga estes passos:

1. Na tela **Operações**, identifique a operação desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Visualizar detalhes**.  
3. Na tela **Detalhes da operação**, visualize informações da operação.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
