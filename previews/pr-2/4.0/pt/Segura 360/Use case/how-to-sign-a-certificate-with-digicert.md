# Como realizar a assinatura de certificado com DigiCert

Este documento detalha o processo de assinatura de um certificado DigiCert no **Segura**, desde a criação da Autoridade Certificadora (CA) até a revogação do certificado.

## Requisitos

* Ter uma conta DigiCert com um usuário e permissões adequadas.  
* Ter um cartão de crédito válido para compra do certificado.  
* Ter um domínio disponível para validação do certificado.

## Configurar a DigiCert no Segura

Para configurar a DigiCert no Segura, você vai precisar dos seus dados de usuário DigiCert.

1. Acesse sua conta [**DigiCert**](https://www.digicert.com/) e faça login.  
2. Acesse  **Account \> User** para encontrar seus dados de usuário, inclusive seu nome de usuário.

## Criar a Autoridade Certificadora (CA) no Segura

1. No **Segura**, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Certificate Manager**.  
2. No menu lateral, selecione **Configurações** \> **Autoridades**.  
3. No menu **Ações**, representado pelos três pontos verticais, selecione **Novo**.  
4. Na janela aberta, escolha a CA da **DigiCert**.  
5. No campo **Nome de usuário**, insira seu nome de usuário.

## Gerar uma API Key

1. Acesse sua conta [**DigiCert**](https://www.digicert.com/) e faça login.  
2. Na sua conta **DigiCert**, vá em **Automation \> API Keys**.  
3. Clique em **Add API Key** para criar uma nova chave para o seu usuário.

## Obter o Account ID

1. Utilize a API Key gerada na etapa anterior para acessar a [API de Account da DigiCert](https://dev.digicert.com/en/certcentral-apis/services-api.html).  
2. A resposta da API será um `JSON` contendo o seu **Account ID**.  
3. Insira os dados no **Segura**, preenchendo os campos da CA com a **API Key** e o **Account ID** obtidos.   
4. Clique em **Salvar**.

## Criar uma organização no Segura

1. No **Segura**, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Certificate Manager**.   
2. No menu lateral, selecione **Configurações \>** **Organizações**.  
3. Para criar uma nova organização, clique no menu **Ações**, representado pelos três pontos verticais e selecione **Novo**.  
4. Preencha os dados da organização, incluindo pelo menos um contato na aba **Contato**, essas informações serão utilizadas posteriormente.   
5. Salve as configurações.

## Gerar um Certificate Signing Request (CSR)

1. No **Segura**, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Certificate Manager**.   
2. No menu lateral, selecione **Certificados > Requisições**.  
3. Para criar um novo CSR, clique no botão **Novo**.  
4. Preencha as informações do certificado:  
   1. **Tipo do Certificado**.  
   2. **Tipo de domínio**.  
   3. **Organização**: selecione a organização criada no passo anterior (exemplo: MT4 Tecnologia LTDA).  
   4. **Nome comum**: insira o domínio que será protegido pelo certificado (exemplo: `www.seudominio.com`).  

    :::(Warning) (Cuidado)
    Este domínio precisa estar acessível na internet para validação.  
    :::

   5. **Validade (em dias)**: Para testes, selecione a opção de até 7 dias para reduzir o custo.  
   6. **Algoritmo de criptografia**: escolha entre **RSA** e **DSA**. Neste exemplo utilizaremos a opção **RSA**.  
   7. **Tamanho da chave criptográfica**: escolha entre **4096**, **2048** e **1024**.  Neste exemplo utilizaremos a opção **4096**.   
   8. **Algoritmo de assinatura de certificado**: escolha entre **SHA256**, **SHA384** e **SHA512**. Neste exemplo utilizaremos a opção **SHA256**. 

    :::(Info) (Info)
    Dados referentes ao certificado RapidSSL Standard DV com validade de até 7 dias custa $1.13.
    :::

    9. **Configurações adicionais**: Marque a opção para utilizar a CA da **DigiCert** criada anteriormente.  
5. Salve as configurações.

## Adicionar fundos na DigiCert

1. Na sua conta **DigiCert**, acesse a seção financeira em **Finances > Deposit Funds**. 
2. Adicione fundos.  
3. Selecione o tipo de certificado desejado.  
4. Insira o valor necessário.  

:::(Info) (Info)
 O certificado RapidSSL Standard DV com validade de até 7 dias custa $1.13. 
:::

5. Preencha os dados do seu cartão de crédito e clique em **Submit**.

## Assinar o CSR

1. No **Segura**, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Certificate Manager**.   
2. No menu lateral, selecione **Certificados > Requisições** e encontre o CSR criado anteriormente.  
3. Clique no menu **Ações** representado pelos três pontos verticais, e solicite a assinatura do CSR em **Solicitar assinatura**.  
   1. Na aba **Geral**, preencha os dados do sistema.  
   2. Na aba **Informações adicionais**, preencha as informações da CA para assinatura do certificado.  
   3. Escolha o tipo de validação de domínio desejado (ex: `DNS TXT`).  
   4. Clique em **Salvar**.  
4. Será gerado um *request* na **DigiCert** e o certificado ficará como **Waiting Signature.**

## Validar o Domínio

1. Na sua conta **DigiCert**, acesse a ordem de compra em **Certificates > Orders**.  
2. Encontre a ordem e clique no número da sua ordem de compra.  
3. Vá em **Prove control over domains**.  
4. A DigiCert irá gerar um código `TXT` único para validação do seu domínio. Copie este código.  
5. Crie um registro `TXT` no seu domínio.  
6. Acesse as configurações de DNS do seu domínio.  
7. Crie um novo registro `TXT` com o código copiado na etapa anterior.  
8. Aguarde a propagação do DNS.

:::(Info) (Info)
A propagação do DNS pode levar um tempo para ser concluída.
:::

9. Verifique o domínio.  
10. Na página da **DigiCert**, clique em **Check site** para que a **DigiCert** valide o seu domínio.  
11. Aguarde a emissão do certificado.

Após a validação do domínio, o certificado será emitido pela **DigiCert** e estará disponível no Segura em alguns minutos.

## Revogar o certificado (se necessário)

1. No **Segura**, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Certificate Manager**.  
2. No menu lateral, selecione **Certificados > Ação > Revogar certificado** e localize o certificado que deseja revogar.  
3. Uma solicitação será enviada para a **DigiCert**.

## Aprovar a solicitação de revogação na DigiCert

1. Acesse sua conta DigiCert e vá em **Certificados \> Requisições**.  
2. Você verá uma solicitação de revogação pendente.  
3. Aprove a solicitação para revogar o certificado.  
4. Após a aprovação, o status do certificado no Segura será alterado para **Revogado**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).