# Como configurar o servidor Oracle em cluster com infraestrutura grid

Este documento fornece informações sobre o passo a passo para realizar a configuração do servidor Oracle para que seja utilizado em cluster com infraestrutura em grid.

Serão necessários quatro passos para configurar o banco de dados Oracle para que este seja acessível via **Database proxy** no Segura, este documento é o **primeiro passo**.

![cluster-passo1.drawio.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cluster-passo1.drawio.png){height="" width=""}

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

---
## Configurar a wallet para Oracle em Cluster
O Oracle GRID apresenta problemas com certificados gerados via openssl que precisem ser assinados por uma CA por conta do parâmetro `set_serial`, o qual é obrigatório mas cria uma inconsistência na identificação do CN.
Sendo assim, quando ocorre este cenário é recomendado criar certificados auto-assinados para a credencial do banco de dados.

Para a configurar a wallet do servidor e habilitação do TCPS, execute os passos abaixo com o usuário grid:

#### Criação da Wallet do servidor 
Somente será necessário realizar este passo se não houver nenhuma wallet.
```bash
orapki wallet create -wallet <ORACLE_WALLET_DIR> -pwd <ORACLE_WALLET_PASS> -auto_login
```

#### Adicionar um certificado auto assinado na wallet
```bash
orapki wallet add -wallet <ORACLE_WALLET_DIR> -pwd <ORACLE_WALLET_PASS> -dn "CN=<ORACLE_SERVER>" -keysize 2048 -self_signed -validity 3650
```

#### Checar os certificados da wallet
```	bash
orapki wallet display -wallet <ORACLE_WALLET_DIR>
```

#### Criar certificado auto assinado da credencial do BD
```bash
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout <CREDENTIAL>.key -out <CREDENTIAL>.crt -subj "/CN=<CREDENTIAL>"
```

#### Converter o certificado para .p12
```bash
openssl pkcs12 -export -out <CREDENTIAL>.p12 -inkey <CREDENTIAL>.key -in <CREDENTIAL>.crt -passout pass:<CREDENTIAL_CERT_PASS>
```

#### Importar o .p12 para a wallet
```bash
orapki wallet import_pkcs12 -pkcs12file <CREDENTIAL>.p12 -pkcs12pwd <CREDENTIAL_CERT_PASS> -wallet <ORACLE_WALLET_DIR> -pwd <ORACLE_WALLET_PASS>
```

#### Checar os certificados da wallet
```bash
orapki wallet display -wallet <ORACLE_WALLET_DIR>
```

#### Editar os arquivos para apontar para a wallet e habilitar o TCPS
```bash
vim /u01/app/oracle/product/19.0.0/dbhome_1/network/admin/sqlnet.ora
vim /u01/app/oracle/product/19.0.0/dbhome_1/network/admin/listener.ora
```

#### Reiniciar os listeners e o serviço do Scan
```bash
srvctl stop listener -l listener
srvctl stop scan_listener
srvctl stop scan

srvctl start scan
srvctl start scan_listener
srvctl start listener -l listener

lsnrctl status
```

Finalizando o este passo da configuração, acesse o documento [Como configurar no Segura um dispositivo para utilizar via Database Proxy Oracle](/v4/docs/pt/pam-session-how-to-configure-a-device-in-senhasegura-to-use-the-database-proxy-with-oracle-cluster) para realizar a segunda parte e continuar a configuração.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.