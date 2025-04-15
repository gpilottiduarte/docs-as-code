# Como utilizar bulk actions para credenciais

Neste tutorial você aprenderá como realizar a modificação de senhas utilizando a funcionalidade de “bulk action” para credenciais na plataforma do Segura.

*Bulk Action* refere-se à capacidade de realizar diversas tarefas ao mesmo tempo, ou seja, em realizar operações em lote.

## Como fazer alterações em credenciais utilizando “bulk action”

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Todas credenciais**.
3. Na página de listagem de credenciais, selecione as credenciais desejadas.
4. No canto superior esquerdo, escolha qual o tipo de alteração será feito. É possível escolher quatro opções: *Editar, Ativar, Expirar e desativar*.

## Como atualizar cadastro de credenciais PAM

1. Após selecionar a opção **Editar**, clique no **+ Adicionar**, ao lado da palavra **Credenciais**.
3. Essa ação abrirá um modal com todas as credenciais ativas. Selecione aquelas que serão atualizadas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Continuar**.
5. Preencha as informações de acordo com a tarefa de modificação que será realizada.

Na aba **Detalhes da operação**, seção **Informações**, você pode modificar os seguintes atributos:

- Modificar Tipo de Senha.
- Modificar Domínio.
- Modificar Dispositivo.
- Modificar Informação Adicional.
- Modificar Tags.

:::(Info) (Info)
É possível substituir todas as tags existentes ou adicionar novas. Em caso de adição de novas tags, elas são incorporadas às já existentes.
:::

Na seção **Configurações de execução** de execução você pode modificar os seguintes atributos:

- Modificar credencial pai.
- Modificar configuração da troca de senha da credencial.
- Ativar troca automática
- Utilizar a própria credencial para conectar
- Modificar Configuração da credencial de reconciliação
- Credencial de reconciliação.

Escolha a opção desejada, preencha os dados que devem ser inseridos nas credenciais selecionadas anteriormente e clique no botão **Continuar**.

Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

## Como inativar credenciais PAM

1. Após selecionar a opção **Desativar**, clique no botão **+ Adicionar**.
3. Essa ação abrirá um modal com todas as credenciais ativas. Selecione aquelas que serão inativadas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Continuar**.
5. Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

## Como ativar credenciais PAM

1. Após selecionar a opção **Ativar**, clique no botão **+ Adicionar**.
3. Essa ação abrirá um modal com todas as credenciais inativas. Selecione aquelas que serão ativadas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Continuar**.
5. Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

## Como expirar credenciais PAM

:::(Info) (Info)
Somente credenciais ativas podem ser expiradas.
No caso de expirar credenciais, a data e a hora de expiração serão definidas de acordo com a data do momento da solicitação.
:::

1. Após selecionar a opção **Expirar**, clique no **+ Adicionar**.
3. Essa ação abrirá um modal com todas as credenciais ativas. Selecione aquelas que serão expiradas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Continuar**.
5. Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

:::(Warning) (Importante)
Todas as operações em lote precisam ser validadas por um usuário aprovador para surtirem efeito.
:::

:::(Info) (Info)
Para que um usuário tenha privilégios de usuário aprovador, ele deve ser configurado como tal. Para isso, acesse **Menu de produtos > Configurações > Controle de acesso > Gerenciar aprovadores**.
:::

:::(Info) (Info)
O usuário aprovador pode visualizar todas as solicitações feitas através acessando o **Menu de produtos > Relatórios > Eventos > Operações em lote**.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).