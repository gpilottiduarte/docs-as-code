# Sessões PostgreSQL

Atualmente um gerenciador de banco de dados para o PostgreSQL é homogado pelo Segura o DBeaver.

No documento a seguir você encontra os passos necessários para realizar a conexão:

* [Como configurar e iniciar uma sessão PostgreSQL com o DBeaver](/v4/docs/pt/pam-session-how-to-configure-and-start-a-postgresql-session-with-dbeaver)


:::(warning) (**Atenção**)  
Ao utilizar o Database Proxy com PostgreSQL quando **há restrições** de IPs autorizados à autenticar no servidor do banco de dados PostgreSQL, é necessário alterar o arquivo `pg_hba.conf` do PostgreSQL. Este arquivo contém a lista dos IPs quem precisam ser autorizados e **deve** conter os IPs do senhasegura.  
Para saber como incluir os IPs ao arquivo, acesse a documentação [oficial do PostgreSQL](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html){target=`_blank`}.  
:::