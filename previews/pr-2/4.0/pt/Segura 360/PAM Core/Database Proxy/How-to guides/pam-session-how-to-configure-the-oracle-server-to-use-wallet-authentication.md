# Como configurar o servidor Oracle para o uso de autenticação via wallet

Este documento fornece informações sobre o passo a passo para realizar a configuração do servidor Oracle para que aceite conexões via SSL.

Serão necessários seis passos para configurar o banco de dados Oracle para que este seja acessível via Database proxy no Segura, este documento é o **terceiro passo**.

![passo3_alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/passo3_alone%281%29.png){height="" width=""}

:::(warning) (**Atenção**)
É de suma importância seguir corretamente a ordem dos documentos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy.
:::

## Requisitos

* Oracle DB Server configurado com a versão mínima 19.0.0.0.0
* Servidor com ORAPKI instalado, para a criação das Wallets.
* Conectividade da workstation do usuário com o Segura nas portas 1521 e 2484.
* Autoridade certificadora (CA) para a assinatura dos certificados do Oracle DB e da credencial de banco de dados.
* Client de Banco de dados instalado.
    * Dbeaver versão mínima: 23.1.0
    * SQLPlus versão mínima: 21.0.0.0.0
    * SQL Developer versão mínima: 23.1.0.097
* Não possuir filtros habilitados para o certificado.

---
## Configurar o servidor Oracle
Para que o Oracle BD aceite a autenticação via SSL utilizando Oracle Wallet, algumas configurações são necessárias do lado do servidor.

#### Listener Parameter file
Identificar o caminho para os arquivos `sqlnet.ora` e `listener.ora`. No retorno da execução, o campo Listener Parameter File apresentará o caminho atual do arquivo `listener.ora` e o arquivo `sqlnet.ora` estará no mesmo diretório.

```bash
oracle$ lsnrctl status
```

#### sqlnet.ora

Editar o arquivo para aceitar conexões via SSL utilizando Oracle Wallet.
```bash
oracle$ vim /u01/app/oracle/product/19c/dbhome_1/network/admin/sqlnet.ora

WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <ORACLE_WALLET_DIR>)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
```

#### listener.ora
Editar o arquivo para adicionar o seguinte conteúdo:

```bash
oracle$ vim /u01/app/oracle/product/19c/dbhome_1/network/admin/listener.ora

SSL_CLIENT_AUTHENTICATION = TRUE
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <ORACLE_WALLET_DIR>)))
LISTENER = 
	(DESCRIPTION_LIST = 
		(DESCRIPTION = 
			(ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
			(ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
			(ADDRESS = (PROTOCOL = TCPS)(HOST = 0.0.0.0)(PORT = 2484))
		)
)
```

### lsnrctl
Para que as configurações surtam efeito, é necessário reiniciar o serviço.
```bash
oracle$ lsnrctl stop
oracle$ lsnrctl start
```

:::(Warning) (**Atenção**)
Após esta etapa, o Oracle DB Server aceitará conexões SSL através da porta 2484.
Quando a **Autenticação SSL** estiver habilitada, não será possível fazer login com **sysdba** via **sqlplus** utilizando a senha. Certifique-se de avisar o cliente sobre esse comportamento. Outros usuários com privilégios de administrador podem fazer login com senha.
:::

Finalizando o terceiro passo da configuração do Oracle para ser utilizado via Database Proxy, acesse o documento [Como configurar no Segura um dispositivo para utilizar via Database Proxy Oracle](/v4/docs/pt/pam-session-how-to-configure-a-device-in-senhasegura-to-use-the-database-proxy-with-oracle) para realizar a quarta parte e continuar a configuração.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.