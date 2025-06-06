# Como configurar e iniciar uma sessão PostgreSQL com o DBeaver

Neste documento, você encontra um guia passo a passo sobre como configurar e iniciar uma sessão **Database Proxy** do tipo PostgreSQL no gerenciador de banco de dados DBeaver.

:::(warning) (**Cuidado**)
O Database Proxy tem um limite padrão de 2.000 conexões simultâneas. Isso pode ser alterado, mas terá um aumento de provisionamento significativo na memória, levando em conta que cada slot de conexão utiliza cerca de 64kb de memória. Para realizar esse aumento entre em contato com o time de suporte.
:::

## Requisitos

* Ter uma credencial configurada para o uso do **Database Proxy**. Para saber como cadastrar uma credencial acesse as documentações sobre [Credenciais](/v4/docs/pt/pam-credentials).
* Ter o aplicativo DBeaver instalado.
---

## Configurar o banco de dados

1. Abra a aplicação **DBeaver**.
2. Na tela inicial, no canto superior esquerdo, clique no ícone representado por um plug de tomada e o sinal de adição.
3. Na janela pop-up que se abre, **Conectar a um banco de dados**, selecione o banco de dados PostgreSQL.
4. Clique em **Avançar**.
5. Na aba **Principal**, preencha os campos com as seguintes informações:
    1.  **Host**: digite o número IP do cofre a ser acessado.
    2. **Port**: número da porta padrão do banco de dados, caso utilize um número de porta diferente da padrão, digite o número utilizado.
    3. **Banco de dados**: digite o nome da base de dados que será acessada.
    4. **Autenticação**: escolha a opção Database Native.
    5. **Nome do usuário**: digite as informações conforme escolhido abaixo:
        1. Utilizando **credencial comum**: `username_do_cofre[username_da_credencial@hostname_do_dispositivo{porta_do_banco_de_dados}]`
        2. Utilizando um **MFA** para utenticação, o token deve ser inserido ao final: `username_do_cofre[username_da_credencial@hostname_do_dispositivo{porta_do_banco_de_dados}]tokenMFA`
    6. **Senha**: digite sua senha de acesso ao cofre.
6. Na aba **SSL**, preencha os campos com as seguintes informações:
    1. **Usar SSL**: selecione o checkbox para ativar a opção.
    2. Na seção **Avançado**, no campo** Modo SSL**: selecione **Allow**.
        :::(info) (**Info**)
        Caso seja necessário desabilitar a criptografia, em caso de testes de desenvolvimento, selecione **Disable** para que os dados sejam passados em texto plano.
        :::
7. Clique em **Ok**.

Pelo DBeaver ser um gerenciador de banco de dados que oferece suporte a vários bancos, as configurações do banco de dados ficaram agrupadas em pastas no menu lateral, **Navegador de banco de dados**, clique na pasta referente ao banco de dados **PostgreSQL** e verifique se o banco de dados que foi configurado está presente na lista.

---
## Iniciar a sessão Database Proxy

1. Na aplicação **DBeaver**, navegue até o menu lateral esquerdo, **Navegador de banco de dados**.

1. De um **duplo clique** no banco de dados que deseja acessar.

1. Na janela pop-up de conexão que se abre, digite sua senha de acesso.

1. Clique em **OK**.

Todas as informações do banco de dados estarão disponíveis no menu lateral, abaixo do banco de dados selecionado, no formato de cascata.

---

Você ainda tem dúvidas? Entre em contato com a  [Comunidade Segura](https://community.Segura.io/).
