# Como iniciar uma sessão Database Oracle com o SQL Plus

Neste documento, você encontra um passo a passo sobre como utilizar o gerenciador SQL Plus no sistema operacional Windows ou Linux em uma sessão de Database Proxy.

:::(error) (**Importante**)
Esse processo consiste em configurações na conexão do banco de dados e no aplicativo. Consulte e siga os passos dos documentos sobre a [Database Proxy para Oracle – Guia de configuração](/v4/docs/pt/pam-session-oracle-database-configurations) para saber todos os passos.
:::

## Requisitos

* Baixe a versão mais recente do [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Baixe a versão mais recente do [Oracle sqlcl](https://www.oracle.com/br/database/sqldeveloper/technologies/sqlcl/){target=`_blank`}
* Baixe a versão mais recente do SQL Plus de acordo com o sistema operacional utilizado.
* Instalar no client os pacotes: instantclient-basic e instantclient-sqlplus, de acordo com o sistema operacional utilizado.

---
## Iniciar sessão com SQL Plus no Windows
Após os baixar os pacotes extraia ambos para a mesma pasta.

A tabela mostra as strings presentes no arquivo e suas definições:

**String**|**Valor**
---|---
`chcp 28591`|Código de página para ISO-8859-1.
`SET NLS_LANG=.WE8ISO8859P1`|Seta e interpreta o encode ISO-8859-1.
`SET TNS_ADMIN=<endereço da pasta dos arquivos>`|Seta o caminho dos arquivos `tnsnames.ora` e `sqlnet.ora`. Substitua <endereço da pasta dos arquivos> com o endereço correto.
`sqlplus /@oraproxytcps`|Inicia o sqlplus com a conexão identificada como oraproxytcps do arquivo `tnsnames.ora`.

Crie o seguinte arquivo `.bat` para inicializar o sqlplus.

```bash
chcp 28591
SET NLS_LANG=.WE8ISO8859P1
SET TNS_ADMIN=<endereço da pasta dos arquivos>
sqlplus /@oraproxytcps
```

Após realizar esses passos, para utilizar o **SQL Plus** para realizar a conexão clique duas vezes no arquivo `.bat` criado e a sessão irá inicializar.

## Iniciar sessão com SQL Plus no Linux

Para acesso pelo sistema operacional Linux, é preciso garantir que as variáveis `PATH` e `TNS_ADMIN` aponte para os diretórios corretos na pasta dos arquivos `.ora`.
Tendo isso configurado, basta utilizar a string `sqlplus /@oraproxytc` para conectar.


---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.