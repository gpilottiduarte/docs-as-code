# Como configurar no Segura uma credencial para utilizar via Database Proxy Oracle

Este documento fornece informações sobre o passo a passo para realizar a configuração de uma credencial para ser usada via Database Proxy Oracle.

Serão necessários quatro passos para configurar o banco de dados Oracle para que este seja acessível via **Database proxy** no Segura, este documento é o **terceiro passo**.

![cluster-passo3.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cluster-passo3.png){height="" width=""}

:::(warning) (**Atenção**)
É de suma importância seguir corretamente a ordem dos documentos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy.
:::

## Requisitos

* Oracle DB Server configurado com a versão mínima 19.0.0.0.0
* Servidor com ORAPKI instalado, para a criação das Wallets.
* Conectividade da workstation do usuário com o Segura nas portas 1521 e 2484.
* Client de Banco de dados instalado.
    * Dbeaver versão mínima: 23.1.0
    * SQLPlus versão mínima: 21.0.0.0.0
    * SQL Developer versão mínima: 23.1.0.097
* Não possuir filtros habilitados para o certificado.

---
## Configurar a credencial
Há duas maneiras de acessar a área de configuração de Credenciais.

A primeira maneira é pelo menu de Ações rápidas, localizado na barra de navegação. Para configurar uma credencial utilizando as ações rápidas, siga os passos abaixo:

1. Clique no ícone **Ações rápidas**, representado por uma folha de papel com o sinal de soma, e selecione **Credencial**.

A segunda maneira é acessando pelo **Menu de produtos**. Para isso, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas credenciais**.
3. No menu de ações clique em **Adicionar**.

Ambas ações abrirão uma nova tela com o formulário de cadastro de credencial. Preencha os dados a seguir para configurar a nova credencial:

Na aba **Informações**, preencha:

1. **Nome do usuário**: escolha o nome de usuário.
2. **Tipo da senha**: escolha **Local Admin** ou **Local User**.
3. **Dispositivo**: escolha o dispositivo do tipo database.
4. **Status**: selecione a opção **Ativa**.
5. **Definir senha atual**: não é necessário criar uma senha, visto que a autenticação será por meio do certificado.

Na aba **Configurações da sessão**, vá na seção **Certificado** e preencha:

1. Na opção **Arquivo do certificado**, clique em **Arraste e solte o arquivo aqui** e faça upload do arquivo de certificado `<CREDENTIAL>.crt` criado anteriormente para a credencial.
2. Na opção **Arquivo Key**, clique em **Arraste e solte o arquivo aqui** e faça upload do arquivo da chave `<CREDENTIAL>.key` criada anteriormente para a credencial.
3. Caso a sua chave possua uma senha, digite-a no campo **Senha da key**.
    :::(warning) (**Atenção**)
    Se o usuário utilizou uma senha para criar o certificado, neste campo será preciso inserir a mesma senha criada pelo usuário.
    :::
4. Vá até a aba **Revisão**.
5. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema, certificando que a credencial está cadastrada.

Finalizando o terceiro passo da configuração do Oracle para ser utilizado via Database Proxy, acesse o documento [Como configurar uma credencial de automação da Oracle wallet](/v4/docs/pt/pam-sessions-how-to-configure-oracle-wallet-automation-credential-cluster) para realizar a quarta parte da configuração.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.