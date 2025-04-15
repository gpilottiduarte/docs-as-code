# Como configurar e iniciar uma sessão MS SQL Server com o HeidiSQL

Neste artigo, você encontra um guia passo a passo sobre como configurar e iniciar uma sessão Database Proxy do tipo MS SQL Server no gerenciador de banco de dados HeidiSQL .

:::(warning) (**Cuidado**)
O Database Proxy tem um limite padrão de 2.000 conexões simultâneas. Isso pode ser alterado, mas terá um aumento de provisionamento significativo na memória, levando em conta que cada slot de conexão utiliza cerca de 64kb de memória. Para realizar esse aumento entre em contato com o time de suporte.
:::

## Requisitos

* Ter uma credencial configurada para o uso do Database Proxy. Para saber como cadastrar uma credencial acesse as documentações sobre [Credenciais](/v4/docs/pt/credentials).
* Ter o aplicativo HeidiSQL instalado.

---
## Configurar o banco de dados

1. Abra a aplicação **HeidiSQL**.

1. Na tela inicial, no canto inferior esquerdo clique no botão **Nova**.

1. Na aba **Configurações**, preencha os campos com as seguintes informações:

    3.1. **Tipo de rede**: escolha a opção **Microsoft SQL Server (TCP/IP)**.
    3.2. **Biblioteca**: **MSOLEBDSQL**.
    3.3. **Servidor / IP**: digite o número IP do cofre a ser acessado.
    3.4. **Nome do usuário**: digite as informações conforme exemplo:
`<username_do_cofre>[<username_da_credencial>@<hostname_do_dispositivo>{<porta_do_banco_de_dados>}]`
    3.5. **Senha**: digite sua senha de acesso ao cofre.
    3.6. **Porta**: digite o número da porta padrão do banco de dados (1433), caso utilize um número de porta diferente da padrão, digite o número utilizado.
4. Clique em **Salvar**.

Após esses passos o banco de dados salvo ficará listado no menu lateral da aplicação.

---
## Iniciar a sessão Database Proxy

1. Na aplicação **HeidiSQL**, navegue até o menu lateral esquerdo.

1. De um **duplo clique** no banco de dados que deseja acessar.

1. Ou clique no banco de dados desejado e depois clique em **Abrir**.

Todos os banco de dados configurados estarão disponíveis no menu lateral. 

---
## Próximos passos:
[Como configurar o dispositivo de acesso ao Database Proxy](/v4/docs/pt/pam-session-how-to-configure-the-database-proxy-access-device)
[Database Proxy](/v4/docs/pt/pam-session-database-proxy)

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

