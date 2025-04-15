# Como iniciar uma sessão Oracle com o DBeaver no Linux

Neste documento, você encontra um passo a passo sobre como utilizar o gerenciador DBeaver em uma sessão de banco de dados proxy no sistema operacional Linux.

:::(error) (**Importante**)
É de suma importância seguir corretamente os setes passos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy. Acesse os documentos da [Configuração do banco de dados Oracle](/v3-33/docs/pt/pam-session-oracle-database-configurations) para realizar os passos necessários.
:::

## Requisitos

* Baixe a versão mais recente do [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Baixe a versão mais recente do [DBeaver](https://dbeaver.io/download/){target=`_blank`}
---

## Iniciar o aplicativo DBeaver
Após declarar as variáveis de ambiente, o usuário poderá acessar o DBeaver. Para a  conexão ser do tipo personalizado, siga os passos a seguir:

1. Abra a aplicação **DBeaver**.
2. Na tela inicial, no canto superior esquerdo, clique no ícone representado por um plug de tomada e o sinal de adição.
3. Na janela pop-up que se abre, **Conectar a um banco de dados**, selecione o banco de dados Oracle.
4. Clique em **Avançar**.
5. Na aba **Principal > Custom**, preencha o campo com a seguinte informação:
    1. JDB URL Template: `jdb:oracle:oci:/@<ORACLEDB_HOSTNAME>`
6. Clique em **Configurações de driver**, para substituir a biblioteca padrão pelas adquiridas no **Instant Client** e pelo arquivo **oraclepki.jar** encontrado no diretório **SQLcl**.
    1. Na aba **Biblioteca**, adicione os arquivos.
7. Clique em **OK**.

Feito isso, o usuário pode se conectar ao banco de dados Oracle por meio do Database Proxy senhasegura.

---
## Próximos passos:
[Como configurar e iniciar uma sessão Oracle com o DBeaver no Windows](/v3-33/docs/pt/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura.](https://community.senhasegura.io/)
