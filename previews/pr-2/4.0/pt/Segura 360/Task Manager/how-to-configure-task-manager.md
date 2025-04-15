# Como configurar o Task Manager

Boas vindas ao **Task Manager**, a solução do Segura que facilita a gestão de tarefas críticas com acesso mínimo privilegiado em ambientes de TI.

Este documento fornece um guia passo a passo para que os administradores do sistema possam configurar o **Task Manager** e garantir que:

* Apenas pessoas autorizadas realizem tarefas críticas.  
* Suas operações sejam executadas com o mínimo de privilégios necessários.  
* Cada ação seja rastreável e controlada.

## Requisitos

* Permissão de administrador do sistema ou do **Task Manager**.   
* [Configuração de um dispositivo](https://docs.senhasegura.io/v3-33/docs/pt/pam-devices-management) com porta para acesso remoto de acordo com o sistema.  
* [Configuração de uma credencial](https://docs.senhasegura.io/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura) com permissão para executar scripts remotamente no dispositivo.

---
## Adicionar ambiente

:::(info) (Info)
Caso você já tenha o ambiente desejado adicionado ao Segura, pule esta etapa.  
:::

Para adicionar um ambiente ao Segura, siga estes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Personalização > Segmentação > Ambiente**.  
3. No canto superior direito da tela **Ambiente**, clique em **Adicionar.**  
4. Na tela **Adicionar ambiente**:  
   :::(error) (Alerta)  
   	Os campos com asterisco são obrigatórios.  
   	:::  
   1. **Nome***: insira um nome para identificar o ambiente adicionado.  
   2. **Status**: ative ou desative o ambiente.  
5. Clique em **Salvar**.

:::(info) (Info)
Para editar ou desativar um ambiente, acesse a tela **Ambientes** e clique no **botão Ações**.  
:::

**Resultado:** você adicionou um ambiente ao Segura e pode vinculá-lo a uma tarefa.

---
## Adicionar sistema

:::(info) (Info)
Caso você já tenha o sistema desejado adicionado ao Segura, pule esta etapa.  
:::

Para adicionar um sistema ao Segura, siga estes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Personalização \> Segmentação \> Sistema**.  
3. No canto superior direito da tela **Sistema**, clique em **Adicionar.**  
4. Na tela **Adicionar sistema**:  
   	:::(error) (Alerta)  
   	Os campos com asterisco são obrigatórios.  
   	:::  
   1. **Nome***: insira um nome para identificar o sistema adicionado.  
   2. **Status**: ative ou desative o sistema.  
5. Clique em **Salvar**.

:::(info) (Info)
Para editar ou desativar um sistema, acesse a tela **Sistemas** e clique no **botão Ações**.  
:::

**Resultado:** você adicionou um sistema ao Segura e pode vinculá-lo a uma tarefa.

---
## Adicionar razão de acesso

Para adicionar uma razão que poderá ser usada ao solicitar a execução de uma tarefa no **Task Manager**, siga estes passos:

:::(info) (Info)
A obrigatoriedade da inserção de uma razão de acesso ao solicitar a execução de uma tarefa é definida durante a criação da política de acesso na qual a tarefa está incluída. Saiba mais em **Como gerenciar políticas de acesso**.  
:::

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Razões de acesso**.  
3. No canto superior direito da tela **Razões de acesso**, clique em **Adicionar.**  
4. Na tela **Adicionar razão de acesso**, preencha:  
   	:::(error) (Alerta)  
   	Os campos com asterisco são obrigatórios.  
   	:::  
   1. **Nome***: insira um nome para identificar a razão adicionada.  
   2. **Tipo***: escolha um dos tipos de motivo disponíveis.  
   3. **Status**: ative ou desative a razão de acesso.
5. Clique em **Salvar**.

**Resultado:** você adicionou uma razão de acesso ao **Task Manager** e ela pode ser usada por outros usuários que solicitarem a execução de uma tarefa.

---
## Adicionar template de execução

Para adicionar um template de execução que poderá ser usado ao adicionar uma tarefa no **Task Manager**, siga estes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **SISTEMA > Executions**.  
2. No menu lateral, selecione **Controle de templates > Templates**.  
3. No canto superior direito da tela **Templates**, clique em **Adicionar**.  
4. Na tela **Template de execução,** preencha:  
   	:::(error) (Alerta)  
   	Os campos com asterisco são obrigatórios.  
   	:::  
   1. **Nome***: insira um nome para identificar o template. Exemplo: “Linux \- Reiniciar serviços”.  
   2. **Status**: ative ou desative o template de execução.  
   3. **Visualizar TAGs:** clique para visualizar uma legenda das TAGs que podem ser utilizadas no template e inseridas no campo **Comando**. Veja o exemplo abaixo.  
   4. **Executor***: selecione um dos plugins disponíveis que o template utilizará.  
   5. **Tipo de execução***: selecione **Task Manager**.  
   6. **Playbook**: selecione um dos *playbooks* disponíveis. Disponível quando o **Executor** selecionado for `Ansible`.  
   7. **Inventory**: selecione um dos *inventories* disponíveis. Disponível quando o **Executor** selecionado for `Ansible`.  
   8. **Conteúdo**: insira os comandos que serão executados na tarefa.

Exemplo de utilização de TAGs na criação de templates:

```
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

:::(info) (Info)
No topo da tela **Template de execução**, acesse o GitHub para visualizar todos os templates do módulo **Executions**.  
:::

5. Clique em **Salvar**.

:::(info) (Info)
Para editar, clonar e acessar o histórico das alterações do template, acesse a tela **Templates** e clique no **botão** **Ações**.  
:::

**Resultado:** você adicionou um template de execução no módulo **Executions** e ele pode ser utilizado pelo **Task Manager** para executar uma tarefa.

---
## Adicionar política de acesso

Para adicionar uma política de acesso que define as permissões e limitações das tarefas que os usuários poderão executar no **Task Manager**, siga estes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Políticas de acesso.**  
3. No canto superior direito da tela **Políticas de acesso**, clique em **Adicionar.**  
4. Na tela **Adicionar política de acesso**, preencha:  
   	:::(error) (Alerta)  
   	Os campos com asterisco são obrigatórios.  
   	:::  
1. Aba **Geral**  
   1. **Nome da política de acesso***: insira um nome para identificar a política de acesso adicionada.  
   2. **Status**: ative ou desative a política de acesso.  
   3. **Descrição**: insira uma descrição para essa política de acesso.  
   4. Clique em **Continuar.**

   :::(info) (Info)  
      Os usuários sincronizados terão suas permissões substituídas se a sincronização estiver ativada. Verifique seus grupos de sincronização para alterações.  
      :::

2. Aba **Configurações**  
   1. **Requer justificativa para executar tarefa**: ative ou desative a necessidade de o solicitante inserir uma justificativa para executar a tarefa.  
      1. **Requer aprovação para executar tarefa**: ative ou desative a necessidade de aprovação para executar tarefa.

::: (warning) (Atenção)
Os componentes da seção **Arquivos resultado** não refletem as configurações atuais do **Task Manager**.  
:::

8. Aba **Critérios**  
   1. **Dispositivo:** ative ou desative a configuração de dispositivos na política de acesso.  
      2. **Dispositivo (sep. por vírgula)**: insira os dispositivos, separados por vírgula, onde a tarefa será executada.  
      3. **Ambientes***: selecione o ambiente onde a tarefa será executada.  
      4. **Sistemas***: selecione o sistema onde a tarefa será executada.  
      5. Clique em **Continuar.**

   9. Aba **Usuários**  
      1. Clique em **Adicionar** para abrir o modal **Usuários do sistema** e selecione os usuários que serão adicionados à política de acesso.  
      2. Clique em **Continuar.**

      :::(warning) (Atenção)  
         Se o usuário adicionado à política de acesso do **Task Manager** fizer parte de outra política de acesso do senhasegura com maiores restrições, ele poderá não visualizar informações dentro do módulo.  
         :::

   10. Aba **Aprovadores**  
       1. Clique em **Adicionar** para abrir o modal **Usuários do sistema** e selecione os usuários aprovadores das tarefas vinculadas à política de acesso.  
       2. **Obrigatório especificar código de governança ao justificar?**\*: ative ou desative a necessidade de fornecer um código de governança ao justificar a solicitação de execução da tarefa.

   :::(warning) (Atenção)
    * Após ativar a aprovação em níveis e adicionar pelo menos dois aprovadores, defina o nível de aprovação de cada aprovador na coluna **Nível** da tabela **Aprovadores**. O nível escolhido indica a etapa de aprovação em que este aprovador será notificado após a solicitação de execução de tarefa.
    * Apenas usuários com o permissão mínima de **PAM Operator** podem aprovar a execução de tarefas.
    * O campo **Sempre adicionar o gestor do usuário aos aprovadores?*** não reflete as configurações atuais do **Task Manager**.
    :::

5. Clique em **Salvar**.

**Resultado:** você adicionou uma política de acesso que define os critérios para que outros usuários solicitem a execução de tarefas pelo **Task Manager**.