# Como iniciar uma sessão MS SQL Server com o MS SQL Server Management Studio

Neste documento, você encontra um guia passo a passo sobre como iniciar uma sessão Database Proxy do tipo MS SQL Server no gerenciador de banco de dados MS SQL Server Management Studio.

:::(warning) (**Cuidado**)
O Database Proxy tem um limite padrão de 2.000 conexões simultâneas. Isso pode ser alterado, mas terá um aumento de provisionamento significativo na memória, levando em conta que cada slot de conexão utiliza cerca de 64kb de memória. Para realizar esse aumento entre em contato com o time de suporte.
:::

## Requisitos

* Ter uma credencial configurada para o uso do Database Proxy. Para saber como cadastrar uma credencial acesse as documentações sobre [Credenciais](/v3-33/docs/pt/pam-credentials).
* Ter o aplicativo MS SQL Server Management Studio instalado.

---
:::(warning) (**Atenção**)
A visualização do banco de dados ocorre conforme a permissão de visualização de cada usuário. No caso do usuário ter permissão de acesso mas **não possuir** a permissão para visualizar o banco de dados desejado, a conexão da sessão não será realizada. Sessões serão realizadas apenas se o usuário **possuir** permissão de visualização aos bancos de dados.
:::

## Iniciar a sessão Database Proxy

1. Abra a aplicação **MS SQL Server Management Studio**.
2. Na janela pop-up inicial, **Conectar ao Servidor**, na aba **Logon** preencha os campos com as seguintes informações:
    :::(info) (**Info**)
    Caso o pop-up não abra automaticamente, no menu esquerdo **Pesquisador de Objetos**, clique no ícone **Conectar** ou no ícone representado por um plug de tomada.
    :::
3. **Tipo de servidor**: escolha a opção **Mecanismo de Banco de Dados**.
4. **Nome do servidor**: número do IP do cofre que será acessado.
5. **Autenticação**: escolha a opção **Autenticação do SQL Server**.
6. **Logon**: digite as informações conforme escolhido abaixo:
    1. Utilizando **credencial comum**: `username_do_cofre[username_da_credencial@hostname_do_dispositivo{porta_do_banco_de_dados}]`
    2. Utilizando **credenciais de domínio** ao logar na aplicação, o domínio cadastrado na credencial deve constar antes do username da credencial: `username_do_cofre[domínio\username_da_credencial@hostname_do_dispositivo{porta_do_banco_de_dados}]`.
    3. Utilizando um **MFA** para utenticação, o token deve ser inserido ao final: `username_do_cofre[username_da_credencial@hostname_do_dispositivo{porta_do_banco_de_dados}]tokenMFA`
7. **Senha**: digite sua senha de acesso ao cofre.
8. **Criptografia**: selecione **Opcional**.
    :::(info) (**Info**)
    Para versões até 2023 (ou até versão 19) não será necessário preencher este campo, somente para versões 2024 (versão 20).
    :::
9. Clique em **Conectar**.

Ao final de todos esses passos, o acesso ao banco de dados proxy está completo. Verifique no menu lateral, **Pesquisador de objetos**, todas as informações e pastas do banco de dados acessado.

:::(error) (**Importante**)
Devido ao comportamento padrão do MS SQL Server Management Studio de manter conexões em background mesmo após serem desconectadas, as sessões via Database Proxy só serão consideradas como finalizadas para o senhasegura quando o client do MS SQL Server Management Studio for completamente encerrado.
:::


---

Você ainda tem dúvidas? Entre em contato com a [ Comunidade senhasegura](https://community.senhasegura.io/).
