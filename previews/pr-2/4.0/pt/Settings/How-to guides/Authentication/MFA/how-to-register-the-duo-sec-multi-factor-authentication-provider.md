# Como cadastrar um provedor de autenticação MFA Duo Security

Este documento descreve o processo sistemático de implementação da autenticação Duo Security no ambiente do Segura. A Duo Security fornece recursos robustos de autenticação multifator (MFA), aprimorando a postura de segurança de sua organização por meio de protocolos avançados de verificação de identidade.

## Requisitos

* Conta Duo Security.  
* Duo Security devidamente cadastrado no senhagura.

## Criar uma aplicação no Duo Security

1. Faça login no **Duo Admin Panel**.  
2. No menu lateral esquerdo, selecione **Applications**.  
3. Clique em **Protect an Application**.  
4. Na barra de pesquisa, digite **Web SDK**.  
5. À direita, clique em **Protect**  para configurar o aplicativo.  
6. Copie o `Client ID`, o `Client Secret`, e a `API hostname`. Você precisará dessas informações para concluir a configuração.  
7. No menu lateral esquerdo, selecione **Settings**.  
8. Preencha as informações relativas ao aplicativo.  
9. Clique em **Save**.

## Cadastrar o Duo Security como provedor MFA no Segura

1. No Segura, passe o mouse sobre o **Menu de Produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **MFA \> Provedores**.  
3. No relatório **Provedores**, clique no botão **Adicionar**.  
4. Na tela **Selecione o provedor**, selecione **Duo Security**.  
5. Na tela Cadastro de provider, preencha os campos:  
   1. **Nome**: nome identificador do provedor Duo Security.  
   2. **Ativo**: escolha se o provedor será criado ativo ou inativo.  
   3. **Endpoint**: cole o valor do campo `API hostname` que foi gerado no Duo security.  
   4. **ID do cliente**: cole o valor do campo `Client ID` que foi gerado no Duo Security.  
   5. **Client Secret**: cole o valor do campo `Client secret` que foi gerado no Duo Security.  
6. Clique em **Salvar**.

## Configurar o Duo como o MFA do usuário

:::(warning) (Atenção)  
A conexão de rede direta entre o Segura e o Duo Security. Proxies não são suportados.  
:::

### Requisitos

* [Aplicativo móvel Duo](https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app#download)  
* [Configurar o DNS](https://docs.Segura.io/v3-33/docs/pt/orbit-cli-how-to-configure-dns)

:::(warning) (Atenção)  
O Segura precisa estar com DNS configurado e um certificado válido para estabelecer a conectividade com o endpoint da DUO. Na configuração do **Orbit**, o campo **URL Application** também deve estar com o DNS da instância.  
:::

### Configurar o Duo Security no Segura

1. Faça login na sua aplicação Duo.  
2. Selecione o método de autenticação **Duo Mobile**.  
3. Selecione seu país na lista suspensa.  
4. Digite seu número de celular.  
5. Clique em **Add phone number**.  
6. Clique em **Yes, it's correct**, para confirmar seu número de telefone.  
7. Clique em **Next**.  
8. Abra o aplicativo **Duo Mobile** em seu telefone.  
9. Adicione a conta digitalizando o QR code mostrado na tela.  
10. Quando você receber a confirmação de que o **Duo Mobile** foi adicionado, clique em **Continue**.  
11. Para finalizar, clique em **Log in with Duo.**

Agora, ao acessar o Segura, você receberá uma notificação *push* no seu aplicativo Duo Mobile para concluir a autenticação.
