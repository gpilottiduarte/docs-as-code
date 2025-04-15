# Como gerenciar secrets

Este documento fornece informações sobre como usar o **Segura DevOps Secret Manager (DSM)** para gerenciar *secrets*. Fornecendo instruções passo a passo sobre as principais tarefas, como adicionar *secrets*, visualizá-los e editá-los, comparar versões diferentes, rotacionar chaves de acesso e visualizar históricos de erro.

:::(error) (Alerta)  
Para visualizar os *secrets*, você precisa fazer parte de um grupo de acesso que tenha permissão para gerenciar *secrets*, caso contrário, você poderá registrar um *secret*, mas não poderá visualizá-lo nos filtros e nos *dashboards*.  
:::

## Cadastrar um secret

Para cadastrar um *secret*, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Gestão de Secrets \> Secrets**.  
3. Clique no botão **Adicionar** para adicionar um novo secret.

### Aba Configurações

1. **Nome**: nome do *secret* para gestão dentro do Segura.  
2. **Identidade**: identificador do *secret*. É através deste identificador que as aplicações conseguiram encontrar o arquivo ou variável que será criado.  
3. **Engine**: *engine* a ser utilizada. A *engine* padrão é **Generic**.  
4. **Ambiente**: ambiente do *secret*.  
5. **Ativo**: indica se o *secret* está disponível para ser utilizado pelas aplicações. Por padrão está marcado como **Sim**.  
6. **Data de expiração**: dia e hora em que o *secret* será automaticamente inativado.  
7. **Tags**: definidas pelo usuário para segregação de dados e filtros internos.  
8. **Descrição**: descrição de uso do *secret*.

### Aba Credenciais em nuvem

:::(info) (Info)
Estas credenciais são oriundas do **Cloud IAM**.  
:::

1. Clique no botão **Adicionar** para adicionar uma nova credencial em nuvem ao *secret*.  
2. No modal **Credenciais**, selecione as credenciais em nuvem que farão parte do *secret* e clique em **Adicionar**.  
3. A credencial será adicionada à tabela **Cloud Credentials** e você poderá visualizar as informações da credencial.  
4. Adicionalmente você pode modificar os campos:  
   1. **ID da chave de acesso.**  
   2. **Secret da chave de acesso.**

### Aba Credenciais

:::(info) (Info)
Estas credenciais são oriundas do **PAM Core**.  
:::

1. Clique no botão **Adicionar** para adicionar uma nova credencial do **PAM** ao *secret*.  
2. No modal **Credenciais**, selecione as credenciais que farão parte do *secret* e clique em **Adicionar**.  
3. A credencial será adicionada à tabela **Credenciais** e você poderá visualizar as informações da credencial.  
4. Adicionalmente você pode modificar os campos:  
   1. **Hostname.**  
   2. **Nome de usuário.**  
   3. **Senha.**  
   4. **IP.**  
   5. **Informações adicionais.**  
   6. **Campos adicionais para autenticação.**

### Aba Credenciais efêmeras

1. Clique no botão **Adicionar** para adicionar uma nova credencial efêmera ao *secret*.  
2. No modal **Credenciais efêmeras**, selecione as credenciais efêmeras que farão parte do *secret* e clique em **Adicionar**.

### Aba Chave/Valor

1. Clique no botão **Adicionar** para adicionar um novo par chave/valor ao *secret*.  
2. Ao clicar no botão de soma, dois campos aparecem na listagem abaixo:  
   1. **Chave**: preencha com o valor do nome da chave.  
   2. **Valor**: preencha com o valor da chave.

### Aba Auto-renovação

Nessa aba, você deverá estipular um tempo para renovação de *secrets* para:

1. **Credenciais em nuvem.**  
2. **Credenciais efêmeras.**  
3. **Credenciais.**

Você gerencia esses intervalos de tempo através dos parâmetros: **Ativo** e **Minutos entre cada renovação.**

Com tudo pronto, clique em **Continuar**.

### Importante

* Quando a informação expira ela é deletada. Contudo, algumas informações, como as chaves de acesso, não poderão ser recuperadas.  
* Apenas os usuários que fazem parte do grupo de acesso **PAM Core** ou **Cloud IAM**, podem adicionar credenciais cloud e credenciais para cadastro de um *secret*.  
* As **Credenciais em nuvem** são gerenciadas pelo módulo **Cloud IAM**.  
* As **Credenciais** são gerenciadas pelo **PAM Core**.  
* As **Credenciais efêmeras** são provisionadas pelo Segura diretamente no destino por meio do **Provisionamento Dinâmico**. Após a rotação da credencial, o **DSM** não excluirá as informações antigas de **Credenciais em nuvem** e **Credenciais Efêmeras**.

## Visualizar um secret

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Gestão de Secrets \> Secrets**.  
3. Na listagem, identifique o *secret* que você deseja visualizar e clique no botão **Ações**.  
4. Selecione **Detalhes** para ser direcionado para a tela **Secret**, contendo os detalhes do *secret*.

## Visualizar as versões de um secret

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Gestão de Secrets \> Secrets**.  
3. Na listagem, identifique o *secret* que você deseja visualizar e clique no botão **Ações**.  
4. Selecione **Histórico** para ser direcionado para a tela **Versão do secret**.

Na tela **Versão da Secret** você pode visualizar as seguintes informações sobre o *secret*:

1. **Nome**: nome do *secret*.  
2. **Engine**: *engine* do *secret*. A *engine* padrão é **Generic**.  
3. **Identidade**: identidade do *secret*.  
4. Na seção **Versões**:  
   1. **Versão**: número da versão do *secret*.  
   2. **Data**: data e hora em que esta versão do *secret* foi criada.  
   3. **Ações**:  
      1. **Visualizar**: representado pelo ícone de lupa, abre o formulário de visualização de *secrets*.  
      2. **Compare**: representado pelo ícone duas setas em sentido oposto, abre a janela **Comparação de versões**.

## Editar um secret

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Gestão de Secrets \> Secrets**.  
3. Na listagem, identifique o secret que você deseja visualizar e clique no botão **Ações**.  
4. Selecione **Editar** para ser direcionado para a tela **Configuração da secret**.  
5. Na janela **Configuração da secret**, altere as informações que você precisa alterar e clique em **Salvar** seguindo o mesmo fluxo indicado para o **Cadastro de secret**.

## Comparar duas versões de um secret

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Gestão de Secrets \> Secrets**.  
3. Na listagem, identifique o secret que você deseja visualizar e clique no botão **Ações**.  
4. Selecione **Histórico** para ser direcionado para a tela **Versão da secret**.  
5. Na seção **Versões**, na coluna **Ações**, clique no ícone das duas setas em sentidos opostos para ser direcionado para a tela **Comparação de versões**.  
6. No menu suspenso **From**, selecione a versão inicial que você deseja usar para comparação.  
7. No menu suspenso **To**, selecione a versão que vai ser comparada com a versão selecionada em **From**.  
8. Não é possível comparar uma versão menor com uma versão maior, ou seja, o número da versão em **From** deve ser sempre maior do que o número da versão em **To**.  
9. Depois de selecionadas as versões a serem comparadas, clique em **Compare**.

As alterações serão mostradas de acordo com os campos que foram alterados. A visualização das mudanças entre as versões segue o padrão que temos nos programas de *DIFF*, com as inclusões sendo mostradas em verde e as exclusões sendo mostradas em vermelho.

## Mudar chaves de acesso de um secret

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Gestão de secrets \> secrets**.  
3. Na listagem, identifique o *secret* que você deseja visualizar e clique no botão **Ações**.  
4. Selecione **Rotacionar chaves de acesso** para efetuar a mudança das chaves de acesso do *secret*.

## Visualizar histórico de erros de um secret

É possível visualizar o histórico de erros de um secret acessando **Menu de produtos \> DevOps Secret Manager \> Gestão de secrets \> secrets**.

Para visualizar o histórico de erros, selecione um *secret* na listagem e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais, e selecione a opção de **Visualizar histórico de erros**.

:::(warning) (Atenção)  
A opção para visualizar o histórico de erros será mostrada somente quando ocorrer um erro no *secret*.  
:::