# Adicionar grupo de acesso

Criar um grupo de acesso ajudará nas definições de permissão e fluxo de aprovações dos usuários.

## **Criar grupo de acesso**

Para criar um grupo de acesso siga para o menu: **Cloud IAM** > **Controle de acesso** > **Grupos de acesso**.

1. Nas ações da página, clique na opção **Novo grupo**.  
2. No formulário inclua o nome do grupo e se ele estará ativo ou não.
3. Na aba **Configurações,** selecione as permissões:  
   * Se os membros deste grupo poderão criar e editar outros usuários no Cloud IAM dos provedores. Selecione quais tipos de usuário podem ser criados e editados pelos membros do grupo.  
   * Se poderão excluir outros usuários. Selecione quais tipos de usuário podem ser excluídos pelos membros do grupo.  
   * Se poderão criar e editar contas.  
   * Se poderão excluir contas.  
   * Se poderão criar credenciais.  
   * Se poderão excluir credenciais.  
4. Selecione um **Template** para criação de usuários, ou seja, caso esse grupo tenha permissão de criar usuários deverá criá-los seguindo o padrão estabelecido no template escolhido;
:::(info) (Info)
  Para saber mais sobre os templates, veja o documento [Adicionar template](/v4/docs/pt/add-template).  
:::
5. Defina se este grupo necessitará de aprovação para realizar suas atividades. Para isso selecione ou não as caixas:  
   * **Requer justificativa:** para realizar suas atividades os membros deverão descrever por que a querem realizar.  
   * **Requer aprovação:** necessita que a caixa anterior seja selecionada, e fará com que os membros realizem suas atividades após o envio de uma solicitação e aprovação, por outro usuário, desta.  
     * Selecione quantas **aprovações necessárias** para que o usuário possa realizar sua atividade solicitada.  
     * Selecione a quantidade de **reprovações necessárias** para cancelar a solicitação, ou seja, para que o usuário não tenha permissão para realizar a atividade.  
     * Selecione se haverá **aprovação em níveis**, ou seja, após a aprovação de um membro inferior, um membro superior poderá aprovar ou não a solicitação.  
     * Defina se será obrigatório especificar **código de governança** ao justificar.  
     * E se sempre os **gestores serão incluídos** na lista de aprovadores do grupo.  
6. Na aba **Critérios**, defina com quais entidades os membros do grupo poderão interagir. O critério pode ser:  
   * Nome da entidade que você deseja que os membros do grupo vejam.  
   * Uma máscara contendo o nome da entidade, por exemplo, Segura.
:::(info) (Info)
Você pode inserir um \* (asterisco) se quiser que os membros do grupo tenham acesso ilimitado.
:::

### Em Visualização de usuários:

Nomes de usuários (comma-separeted) o preenchimento deve ser realizado com uma tag seguindo este exemplo:  
\[\#USERNAME\#\]

### Em Visualização de contas de serviço

Nomes de usuários (comma-separeted) o preenchimento deve ser realizado com uma tag seguindo este exemplo:  
\[\#USERNAME\#\]
:::(info) (**Info**)
Você pode inserir um \* (asterisco) se quiser que os membros do grupo tenham acesso ilimitado.
:::

1. Na guia **Usuários** insira os membros do grupo de acesso;  
2. Na guia **Aprovadores** insira os usuários que serão aprovadores das requisições dos membros do grupo de acesso;  
3. Na guia **Restrição de acesso*,*** determinar os dias e horários onde os usuários que são membros deste grupo de acesso poderão visualizar senhas ou conduzir sessões remotas. Você também pode determinar datas para um período de acesso mais restrito;  
   * **Dias de permissão de acesso:** dias da semana em que os usuários que são membros do grupo poderão realizar as atividades.  
   * **Horários de permissão de acesso:** horários onde os usuários membros do grupo conseguirão realizar as atividades.  
   * **Período de permissão de acesso:** período determinado onde os usuários que são membros do grupo poderão realizar as atividades;

  4\. Para finalizar clique em **Salvar**.