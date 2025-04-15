# Como modificar as portas do Database Proxy

:::(error) (**Importante**)
Na instalação do pacote do Database Proxy **esta configuração é automática** com o valor de porta padrão, só realize essa configuração caso o número da porta utilizado no seu banco de dados não seja o padrão.
:::

Neste documento, você encontra um guia passo a passo sobre como realizar a configuração de um banco de dados para que o mesmo funcione como um Database Proxy. **Essa configuração se faz necessária quando as portas utilizadas para os bancos de dados não são os números de portas padrões.**

---
## Requisitos

* Ser um usuário administrador.
* Iniciar uma sessão SSH administrativa para dentro do cofre. Acesse o documento [Como acessar uma sessão de administração SSH dentro do cofre Segura](/v4/docs/pt/administration-ssh-access) para saber como realizá-la.
---

## Configurar o banco de dados
:::(warning) (**Cuidado**)
As linhas de comando abaixo devem ser inseridas em uma sessão **SSH administrativa** inicializada para dentro da plataforma Segura, pelo aplicativo de sua preferência.
:::

1. Inicie a sessão SSH administrativa inicializada para dentro da plataforma Segura.
:::(warning) (**Atenção**)
Os valores `bind-port` e `listen_port`, devem ser preenchidos com o número de porta utilizado pelo seu banco de dados.
:::

#### Para o banco de dados MS SQL Server

1. Na tela inicial da sessão abra o arquivo **proxy-db-mssql.conf**, digite:
    1. `vim/etc/Segura/proxy-db-mssql.conf`
    2. Altere o parâmetro `bind-port` para o valor de acordo com o número de porta utilizada pelo seu banco.
    3. Aperte a tecla **ESC**.
    4. Digite `:wq`.
    5. Aperte a tecla **Enter**.
2. Na tela inicial digite:
    1. `systemctl restart proxy-db-mssql`
3. Encerre a sessão do SSH.

#### Para o banco de dados PostgreSQL

1. Na tela inicial da sessão abra o arquivo **pgbouncer.ini**, digite:
    1. `vim/etc/Segura/proxy/pgbouncer.ini`
    2. Altere o parâmetro `listen_port` para o valor de acordo com o número de porta utilizada pelo seu banco.
    3. Aperte a tecla **ESC**.
    4. Digite `:wq`.
    5. Aperte a tecla **Enter**.
2. Na tela inicial digite:
    1. `systemctl restart proxy-db-postgresql`
3. Encerre a sessão do SSH.

#### Para o banco de dados Oracle

1. Na tela inicial abra o arquivo **proxy-db-oracle.conf**, digite:
    1. `vim/etc/Segura/proxy-db-oracle.conf`
    2. Altere o parâmetro `bind-port` para o valor de acordo com o número de porta utilizada pelo seu banco.
    3. Aperte a tecla **ESC**.
    4. Digite `:wq`.
    5. Aperte a tecla **Enter**.
2. Na tela inicial digite:
    1. `systemctl restart proxy-db-oracle`
3. Encerre a sessão do SSH.

Ao final de todos esses passos, a configuração do banco de dados está finalizada.

---
## Próximos passos:
[Como configurar o dispositivo de acesso ao Database Proxy](/v4/docs/pt/pam-session-how-to-configure-the-database-proxy-access-device)
[Database Proxy](/v4/docs/pt/pam-session-about-database-proxy)

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

