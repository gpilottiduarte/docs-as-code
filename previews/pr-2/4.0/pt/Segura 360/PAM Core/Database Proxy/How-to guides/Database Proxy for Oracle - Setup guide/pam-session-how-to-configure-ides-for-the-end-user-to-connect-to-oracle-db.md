# Como configurar as IDEs para o usuário final se conectar ao Oracle DB

Este documento fornece informações sobre o passo a passo para realizar a configuração das IDEs.

Serão necessários seis passos anteriores para configurar o banco de dados Oracle para que este seja acessível via Database proxy no Segura.

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
* Baixe a versão mais recente do [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}

---
## Configurar a IDE
Para realizar o acesso ao Oracle DB utilizando o Database Proxy, é possível utilizar as IDEs homologadas pelo Segura.

São necessárias algumas configurações específicas na workstation do usuário para que este acesso seja possível.

1. Descompacte os arquivos do Instant Client em um diretório a escolha do usuário. Por exemplo: `C:\Users\user1\Documents\instantclient_21_13`.
2. Crie um diretório chamado **oracle_files**, no qual serão centralizados os arquivos de configuração utilizados para a conexão via DB Proxy. Por exemplo: `C:\Users\user1\Documents\oracle_files`.
3. Crie dentro do diretório **oracle_files** o arquivo `tnsnames.ora`, com o conteúdo conforme mostrado abaixo. 

Substitua as strings apresentadas nesta tabela pelos valores correspondentes:

**String**|**Valor**
---|---
`<IP_SENHASEGURA>`|Endereço IP da instância do Segura.
`<USERNAME>`|Username do usuário do Segura.
`<USERNAME_CREDENCIAL>`|Username da credencial de Banco de Dados
`<IP_ORACLE>`|Endereço IP do servidor Oracle
`<NOME_SERVIÇO>`|Nome do serviço de BD Oracle desejado. Pode ser encontrado executando o comando `lsnrctl status` no Oracle DB.
`<USER_WALLET_DIR>`|Deve ser substituído pelo caminho da wallet do usuário, que foi transferido para a workstation do usuário na etapa final da criação de wallet do usuário.

```bash
<IDENTIFICADOR>=
    (DESCRIPTION=
            (ADDRESS=
                (PROTOCOL=TCPS)
                (HOST=<IP_SENHASEGURA>)
                (PORT=2484)
     )
    (CONNECT_DATA=
            (SENHASEGURA=
                (USERNAME=<USERNAME>)
                (CREDENTIAL=<USERNAME_CREDENCIAL>)
                (DEVICE=<IP_ORACLE>)
                (PORT=2484)
                (TOTP=0000))
            (SERVER=DEDICATED)
            (SERVICE_NAME=<NOME_SERVIÇO>)
      )
)
```
:::(warning) (**Atenção**)
Para utilizar o Database Proxy Oracle no multi-tenant é necessário indicar o tenant que será utilizado. Este dado deve ser passado através da linha de comando `(TENANT=XXXXXX)` que deve ser inserida logo após o TOTP, respeitando a indentação existente.
:::

Crie dentro do diretório **oracle_files** o arquivo `sqlnet.ora`, com o seguinte conteúdo:

```bash
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <USER_WALLET_DIR>)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
```

1. Configure as variáveis de ambiente para que apontem para o Instant Client e para os arquivos `tnsnames.ora` e `sqlnet.ora`.
    1. Adicione à variável `$PATH` o caminho para o diretório do Instant Client: Por exemplo: `C:\Users\user1\Documents\instantclient_21_13`
    2. Criar uma nova variável `$TNS_ADMIN`, apontando para o diretório do onde está o arquivo `tnsnames.ora`: Por exemplo: `C:\Users\user1\Documents\oracle_files`

Finalizando esta passo da configuração do Oracle para ser utilizado como um Database Proxy, estará pronto e o usuário final já poderá acessar as sessões.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.