# Como gerenciar provedores OpenID

Neste documento, você encontra um guia passo a passo sobre como adicionar ou remover provedores OpenID no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> OpenID > Provedores**.   

## Adicionar provedor
1. Na página do relatório **Provedores**, clique no botão **Adicionar**.
2. Na janela **Cadastro de provider**:
    1. **Tipo**: no menu suspenso, selecione o tipo de provedor OpenID que será utilizado.
   ::: (info) (Info)
    Atente-se ao fato de que cada provedor irá requerer informações específicas, assim, sempre que for necessário maiores informações, verifique as configurações do provedor.
    :::
    3. **Ativo**: selecione o status do provedor OpenID no momento da criação. Por padrão, sempre é selecionado como **Sim**.
    4. **Ambiente**: selecione o ambiente que o provedor OpenID vai estar.
    5. **ID do cliente**: insira o client ID para conexão. Esse ID é entregue pelo provedor OpenID no momento do cadastro de uma nova aplicação.
    6. **Client secret**: selecone o secret do provedor de autenticação OpenID. Esse secret é entregue pelo provedor OpenID no momento do cadastro de uma nova aplicação.
    7. **Domínio ou IP público para URL de redirecionamento**: insira o domínio ou endereço IP público do Segura. É usado pelo provedor de OpenID para redirecionar o usuário de volta a sua aplicação após a autenticação.
    8. **URL de redirecionamento (Redirect URL):** insira o endpoint específico na sua aplicação para o qual o provedor OpenID irá redirecionar o usuário após a autenticação
    9. **Comentários**: campo para adicionar notas ou observações adicionais sobre a configuração.
3. Na seção **Configuração dos endpoints**:
    1. **OpenID endpoint configuration**: insira o endpoint que configura o OpenID. Esta é a URL base fornecida pelo provedor OpenID. Esta URL descreve os endpoints necessários para interações OpenID. Esta configuração automatiza a descoberta dos endpoints de forma geral.
    :::(info) (Info)
    Este campo é obrigatório apenas se os campos em `URL dos endpoints` **não forem preenchidos**. O usuário deve preencher ao menos um dos dois campos disponíveis: `OpenID endpoint configuration` ou `URL dos demais endpoints`. Caso o campo `URL dos demais endpoints` não seja preenchido, torna-se indispensável que o usuário preencha o campo `OpenID endpoint configuration` para garantir a correta configuração dos serviços.
    :::
4. Na seção **URL dos demais endpoints**:
    1. **Endpoint de autorização:** insira a URL disponibilizada pelo provedor OpenID, usada pela aplicação para enviar solicitações de autorização.
    2. **Token endpoint**: insira a URL disponibilizada pelo provedor OpenID, para onde a aplicação envia solicitações de troca do código de autorização por um token de acesso.
    3. **Userinfo endpoint:** insira a URL disponibilizada pelo provedor OpenID, pela qual a aplicação pode solicitar informações do perfil do usuário autenticado, utilizando o token de acesso.
5. Na seção **Configurações extras do provedor**:
    1. **Endpoint JWK (obrigatório se não existir no endpoint OpenID)**: insira o endpoint onde a aplicação deverá obter as chaves públicas do provedor OpenID para validar a assinatura do token de acesso. Esse campo é obrigatório se essas chaves não estiverem disponíveis no endpoint de configuração do OpenID.
    2. **Issuers adicionais (separados por vírgula):** insira a lista de emissores (issuers) adicionais que são aceitos pela aplicação. Útil quando a aplicação precisa suportar múltiplos provedores OpenID.
6. Clique em **Salvar**.

## Atualizar provider
Para atualizar as informações de um provedor previamente cadastrado, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> OpenID > Provedores**.
3. No relatório Provedores, identifique o registro que você deseja atualizar, clique no botão **Ações** e selecione **Editar**.

:::(info) (Info)
Caso o `client_secret` não seja alterado, a informação atual será mantida.
:::

4. Atualize as informações necessárias e clique em **Salvar**.

## Visualizar detalhes do provider
Para visualizar detalhes do provedor, siga os passos abaixo:

1. No relatório Provedores, identifique o registro que você deseja atualizar, clique no botão **Ações** e selecione **Detalhes do provider**.
2. A janela **Cadastro de provider** será aberta em modo de visualização.
3. Você poderá visualizar diversos detalhes do provedor cadastrado nessa janela. Tais como:  *OpenID endpoint configuration, Endpoint de autorização, Userinfo endpoint, URL de redirecionamento, Token endpoint* e *Comentários*.
4. Para visualizar uma informação por vez, clique no ícone do olho ao lado do campo de texto de cada detalhe.

## Excluir um provider

1. No relatório Provedores, identifique o registro que você deseja atualizar, clique no botão **Ações** e selecione **Desativar**.
2. No modal de confirmação, clique em **Sim** para inativar o provider.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
