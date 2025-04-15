# Como iniciar uma sessão Oracle com o DBeaver no Windows

Neste documento, você encontra um passo a passo sobre como utilizar o gerenciador DBeaver em uma sessão de banco de dados proxy no sistema operacional Windows.

:::(error) (**Importante**)
É de suma importância seguir corretamente os setes passos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy. Acesse os documentos da [Configuração do banco de dados Oracle](/v4/docs/pt/pam-session-oracle-database-configurations) para realizar os passos necessários.
:::

## Requisitos

* Baixe a última versão do [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Baixe a última versão do [DBeaver](https://dbeaver.io/download/){target=`_blank`}
---

## Iniciar o aplicativo DBeaver

1. Abra a aplicação **DBeaver**.
2. Na tela inicial, no canto superior esquerdo, clique no ícone representado por um plug de tomada e o sinal de adição.
3. Na janela pop-up que se abre, **Conectar a um banco de dados**, selecione o banco de dados Oracle.
4. Clique em **Avançar**.
5. Acesse **Driver Settings**.
6. Na aba **Libraries**
    1. Altere as bibliotecas para aquelas adquiridas no **Instant Client**.
7. Clique **OK**.
8. Na pasta **DBeaver**, crie um arquivo chamado **start-dbeaver.bat** para declarar variáveis e abrir o DBeaver.
9. No arquivo criado, digite:

```bash
chcp 65001 
set Path=C:\Program Files\Common Files\Oracle\Java\javapath;C:\windows\system32;C:\windows;C:\windows\System32\Wbem;C:\windows\System32\WindowsPowerShell\v1.0\;C:\windows\System32\OpenSSH\;C:\Program Files\PuTTY\;C:\Program Files (x86)\Yarn\bin\;C:\Program Files\nodejs\;C:\Program Files\Amazon\AWSCLIV2\;C:\Program Files\Meld\;C:\Users\user1\AppData\Local\Microsoft\WindowsApps;C:\Users\user1\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\user1\AppData\Local\Programs\Git\cmd;C:\Users\user1\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;C:\Users\user1\Documents\instantclient_21_10 set TNS_ADMIN=C:\Users\user1\Documents\dbproxy\ora-files 
dbeaver
```
10. Salve como **start-dbeaver.bat**.
11. Com este arquivo execute uma conexão do tipo **Personalizada** no DBeaver.
12. Dentro de **Connection settings > Principal > Custom**, preencha o campo com a informação:
    1. **JDBC URL Template**: `jdbc:oracle:oci/@<ORACLEDB_HOSTNAME>`
    2. **Authentication**: escolha a opção desejada.
        :::(warning) (**Atenção**)
        Caso a opção **Oracle Database Native** seja selecionada, os campos **nome de usuário** e **senha** deverão permanecer vazios. O preenchimento destes campos irá ocasionar um erro na conexão.
        :::
13. Clique **Ok**.

Feito isso, o usuário pode se conectar ao banco de dados Oracle por meio do Database Proxy Segura.

---
## Próximos passos:
[Como configurar e iniciar uma sessão Oracle com o DBeaver no Linux](/v4/docs/pt/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux)

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
