# Como cadastrar um provedor de autenticação multifator RSA

O RSA SecurID é um sistema de autenticação de dois fatores que oferece maior segurança no acesso a recursos digitais. Ele funciona gerando tokens (códigos numéricos) que mudam a cada 60 segundos. O usuário precisa fornecer sua senha normal e o código de autenticação exibido no aplicativo da RSA.

## Pré-requisitos

* Uma conta devidamente configurada na RSA.

## Configurar sua conta RSA SecurID

1) Acessar a área administrativa do RSA SecurID.  
2) Cadastrar Segura como uma nova aplicação.  
3) Visualizar os detalhes da aplicação e copiar as informações de `Endpoint`, `Client ID` e `Key`.

## Configurar Segura

Atenção Como RSA SecurID é um serviço online, sua instância do Segura deve estar autorizada no firewall para se comunicar com a API do mesmo.

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **MFA \> Provedores.**  
3. No relatório **Provedores,** clique no botão **Adicionar**.  
4. Na tela **Selecione o provedor,** selecione **RSA Authenticator**.  
5. Na tela Cadastro de provider, preencha os campos:  
   1. **Nome**: nome do provedor de autenticação RSA.  
   2. **Ativo**: escolha se o provedor será criado ativo ou inativo.  
   3. **Endpoint**: endpoint do plugin RSA Authenticator.  
   4. **Client ID**: identifidador do cliente.  
   5. **Chave**: chave do cliente.  
6. Clique em **Salvar**.
