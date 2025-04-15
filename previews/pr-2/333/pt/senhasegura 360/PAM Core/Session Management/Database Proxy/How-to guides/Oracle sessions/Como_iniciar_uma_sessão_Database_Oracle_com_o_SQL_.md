# Como iniciar uma sessão Database Oracle com o SQL Developer no Linux

Neste documento, você encontra um passo a passo sobre como utilizar o gerenciador SQL Developer no sistema operacional Linux em uma sessão de Database Proxy.

:::(error) (**Importante**)
É de suma importância seguir corretamente os passos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy. Acesse os documentos do [Database Proxy para Oracle – Guia de configuração](/v3-33/docs/pt/pam-session-oracle-database-configurations) para realizar os passos necessários.
:::

## Requisitos

* Baixe a versão 21.8 do [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Baixe a versão mais recente do [Oracle sqlcl](https://www.oracle.com/br/database/sqldeveloper/technologies/sqlcl/){target=`_blank`}
* Baixe a versão mais recente do [SQL Developer](https://www.oracle.com/database/sqldeveloper/technologies/download/){target=`_blank`}
* Instalar no client os pacotes: instantclient-basic

---
## Iniciar sessão com aplicativo SQL Developer
Após os baixar os pacotes extraia ambos para a mesma pasta.

:::(warning) (**Atenção**)
Para acesso pelo sistema operacional Linux, além dos passos abaixo deverá este passo onde o caminho do Instant Client deve estar apontado na variável `PATH` e deve ser criada uma variável de ambiente `TNS_ADMIN` que aponta para a pasta dos arquivos `.ora`.
:::

1. Abra a aplicação **SQLDeveloper**.
2. Na tela inicial, no canto superior esquerdo, clique no ícone do sinal de adição, **Nova conexão**.
3. Na janela pop-up que se abre, **Selecionar Conexão do Banco de Dados**, preencha as informações:
    1. **Nome**: adicione um nome para a conexão.
    2. **Tipo de Banco de Dados**: Oracle.
    3. Na aba **Informações do usuário**, no campo **Tipo de Autenticação** selecione a opção **SO**.
    4. No campo **Tipo de Conexão**, selecione a opção **JDBC Personalizado**.
4. Na aba **Detalhes**, preencha o campo **Personalizar URL de JDBC** com a seguinte informação.
    1. `jdbc:oracle:oci:/@<identificador>`
        :::(info) (**Info**)
        Substitua pelo identificador inserido no arquivo `tnsnames.ora`.
        :::
5. Clique em **Testar**.
6. Após o teste no canto inferior esquerdo aparecerá a mensagem **Status: Com sucesso**.
7. Clique em **Conectar**.

Feito isso, o usuário pode se conectar ao banco de dados Oracle por meio do Database Proxy senhasegura.

---
Você ainda temdúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.