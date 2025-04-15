# Como utilizar bulk actions para credenciais

Neste tutorial você aprenderá como realizar a modificação de senhas utilizando a funcionalidade de “bulk action” para credenciais na plataforma do senhasegura.

*Bulk Action* refere-se à capacidade de realizar diversas tarefas ao mesmo tempo, ou seja, em realizar operações em lote.

## Como fazer alterações em credenciais utilizando “bulk action”

1. Na plataforma senhasegura, no canto superior esquerdo, clique em **Grid Menu**, identificado pelo nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas**.
3. Na página de listagem de credenciais, no canto inferior direito, clique em **Bulk Action**.
4. Escolha qual o tipo de alteração será feito. É possível escolher quatro opções: *Atualizar cadastro de credenciais PAM, inativar credenciais PAM, Ativar credenciais PAM, Expirar credenciais PAM*.

## Como atualizar cadastro de credenciais PAM

1. Após selecionar a opção **Atualizar cadastro de credenciais PAM**, clique no botão **Próximo**.
2. Na próxima tela, clique no botão **+**, identificado pelo sinal de soma, ao lado da palavra **Credenciais**.
3. Essa ação abrirá um modal com todas as credenciais ativas. Selecione aquelas que serão atualizadas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Próximo**.
5. Preencha as informações de acordo com a tarefa de modificação que será realizada.

Na seção **Informações** você pode modificar os seguintes atributos:

- Modificar Tipo de Senha.
- Modificar Domínio.
- Modificar Dispositivo.
- Modificar Informação Adicional.
- Modificar Tags.

:::(Info) (Info)
É possível substituir todas as tags existentes ou adicionar novas. Em caso de adição de novas tags, elas são incorporadas às já existentes.
:::

Na seção **Configurações** de execução você pode modificar os seguintes atributos:

- Modificar credencial pai.
- Modificar configuração da troca de senha da credencial.
- Modificar configuração da credencial de reconciliação.

Escolha a opção desejada, preencha os dados que devem ser inseridos nas credenciais selecionadas anteriormente e clique no botão **Próximo**.

Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

## Como inativar credenciais PAM

1. Após selecionar a opção **Inativar credenciais PAM**, clique no botão **Próximo**.
2. Na próxima tela, clique no botão **+**, ****identificado pelo sinal de soma, ao lado da palavra **Credenciais**.
3. Essa ação abrirá um modal com todas as credenciais ativas. Selecione aquelas que serão inativadas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Próximo**.
5. Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

## Como ativar credenciais PAM

1. Após selecionar a opção **Ativar credenciais PAM**, clique no botão **Próximo**.
2. Na próxima tela, clique no botão **+**, ****identificado pelo sinal de soma, ao lado da palavra **Credenciais**.
3. Essa ação abrirá um modal com todas as credenciais inativas. Selecione aquelas que serão ativadas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Próximo**.
5. Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

## Como expirar credenciais PAM

:::(Info) (Info)
Somente credenciais ativas podem ser expiradas.
No caso de expirar credenciais, a data e a hora de expiração serão definidas de acordo com a data do momento da solicitação.
:::

1. Após selecionar a opção **Expirar credenciais PAM**, clique no botão **Próximo**.
2. Na próxima tela, clique no botão **+**, identificado pelo sinal de soma, ao lado da palavra **Credenciais**.
3. Essa ação abrirá um modal com todas as credenciais ativas. Selecione aquelas que serão expiradas e clique em **Adicionar**.
4. Verifique as credenciais selecionadas e clique no botão **Próximo**.
5. Na tela seguinte, verifique e confirme as alterações nas credenciais e clique em **Salvar**.

:::(Warning) (Importante)
Todas as operações em lote precisam ser validadas por um usuário aprovador para surtirem efeito.
:::

:::(Info) (Info)
Para que um usuário tenha privilégios de usuário aprovador, ele deve ser configurado como tal. Para isso, acesse **Grid Menu > Configurações > Parâmetros de sistema > Aprovadores**.
:::

:::(Info) (Info)
O usuário aprovador pode visualizar todas as solicitações feitas através acessando o **Grid Menu > Relatórios > Eventos > Operações em Lote**.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).