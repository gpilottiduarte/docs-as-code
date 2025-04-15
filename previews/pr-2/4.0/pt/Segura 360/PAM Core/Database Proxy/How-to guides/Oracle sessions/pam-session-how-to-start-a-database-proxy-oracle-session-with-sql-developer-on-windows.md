# Como iniciar uma sessão Database Oracle com o SQL Developer no Windows

Neste documento, você encontra um passo a passo sobre como utilizar o gerenciador SQL Developer no sistema operacional Windows em uma sessão de Database Proxy.

:::(error) (**Importante**)
Esse processo consiste em configurações na conexão do banco de dados e no aplicativo. Consulte e siga os passos dos documentos sobre do [Database Proxy para Oracle – Guia de configuração](/v4/docs/pt/pam-session-oracle-database-configurations) para saber todos os passos.
:::

## Requisitos

* Baixe a versão 21.8 do [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Baixe a versão mais recente do [Oracle sqlcl](https://www.oracle.com/br/database/sqldeveloper/technologies/sqlcl/){target=`_blank`}
* Baixe a versão mais recente do [SQL Developer](https://www.oracle.com/database/sqldeveloper/technologies/download/){target=`_blank`}
* Instalar no client os pacotes: instantclient-basic

---
## Iniciar sessão com SQL Developer

Após os baixar os pacotes extraia ambos para a mesma pasta.

A tabela mostra as strings presentes no arquivo e suas definições:

**String**|**Valor**
---|---
`chcp 65001`|Codificação da página para UTF-8.
`PATH=<caminho do instantclient>`|Variável de ambiente windows onde é necessário incluir o caminho do instantclient.
`SET TNS_ADMIN=<caminho da pasta dos arquivos .ora>`|Variável de ambiente para indicação do caminho dos arquivos `tnsnames.ora` e `sqlnet.ora`.
`sqldeveloper`|Chamada de inicialização da IDE.

Criar o seguinte arquivo `.bat` na pasta raiz de instalação do SQL Developer para inicializar:

```bash
chcp 65001
PATH=<caminho do instantclient>
SET TNS_ADMIN=<caminho da pasta dos arquivos .ora>
sqldeveloper
```

Após executar o `.bat` é necessário configurar a conexão:

Abra a aplicação SQLDeveloper.

1. Na tela inicial, no canto superior esquerdo, clique no ícone do sinal de adição, **Nova conexão**.
2. Na janela pop-up que se abre, **Selecionar Conexão do Banco de Dados**, preencha as informações:
    1. **Nome**: adicione um nome para a conexão.
    2. **Tipo de Banco de Dados**: Oracle.
    3. Na aba **Informações do usuário**, no campo **Tipo de Autenticação** selecione a opção **SO**.
    4. No campo **Tipo de Conexão**, selecione a opção **JDBC Personalizado**.
3. Na aba **Detalhes**, preencha o campo **Personalizar URL de JDBC** com a seguinte informação.
    1. `jdbc:oracle:oci:/@<identificador>`
        :::(info) (**Info**)
        Substitua pelo identificador inserido no arquivo `tnsnames.ora`.
        :::
4. Clique em **Testar**.
5. Após o teste no canto inferior esquerdo aparecerá a mensagem **Status: Com sucesso**.
6. Clique em **Conectar**.

Feito isso, o usuário pode se conectar ao banco de dados Oracle por meio do Database Proxy Segura.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.