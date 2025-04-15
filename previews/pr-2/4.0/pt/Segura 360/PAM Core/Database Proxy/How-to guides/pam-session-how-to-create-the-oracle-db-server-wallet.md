# Como realizar a criação da Wallet do servidor Oracle DB

Este documento fornece informações sobre o passo a passo para realizar a criação da wallet do Oracle DB.

Serão necessários seis passos para configurar o banco de dados Oracle para que este seja acessível via Database proxy no Segura, este documento é o **primeiro passo**.

![passo1_alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/passo1_alone%281%29.png){height="" width=""}

:::(warning) (**Atenção**)
É de suma importância seguir corretamente a ordem dos documentos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy.
:::

## Requisitos

* Oracle DB Server configurado com a versão mínima 19.0.0.0.0
* Servidor com ORAPKI instalado, para a criação das Wallets.
* Conectividade da workstation do usuário com o Segura nas portas 1521 e 2484.
* Autoridade certificadora (CA) para a assinatura dos certificados do Oracle DB e da credencial de banco de dados.
* Client de banco de dados instalado.
    * Dbeaver versão mínima: 23.1.0
    * SQLPlus versão mínima: 21.0.0.0.0
    * SQL Developer versão mínima: 23.1.0.097
* Não possuir filtros habilitados para o certificado.

---
## Criar wallet do Oracle

:::(info) (**Info**)
Caso o ambiente Oracle já esteja configurado para utilizar uma Wallet, não é necessária a criação de uma nova. Neste caso, só  é necessário a criação de um certificado.
:::

A primeira wallet a ser criada é a do servidor Oracle. Esta wallet é necessária para a validação do certificado relacionado à credencial gerenciada. Por este motivo, é necessário que ambos sejam assinados pela mesma CA. 

A CA que será utilizada pode ser tanto uma CA interna do Segura, que estão presentes nos arquivos de configuração do DB Proxy, quanto uma CA interna do cliente. É crucial que a mesma CA seja utilizada na assinatura do certificado Oracle quanto nas credenciais.

Substitua as strings apresentadas nesta tabela pelos valores correspondentes:

**String**|**Valor**
---|---
`<ORACLE_SERVER>.key`|Nome do arquivo .key do servidor Oracle.
`<ORACLE_SERVER>.csr`|Nome do arquivo .csr do servidor Oracle.
`'/CN=<ORACLE_SERVER>'`|Nome do servidor Oracle em configuração.
`<CA>.crt`|Nome do arquivo .crt da CA.
`<CA>.key`|Nome do arquivo .key da CA.

### Criar a CA que será utilizada para a assinatura dos certificados do Oracle e das credenciais
:::(warning) (**Atenção**)
Este passo é necessário somente se o cliente não possuir uma CA interna, ou não quiser utilizar a CA do Segura.
:::
Execute o seguinte comando para criar a CA:
```bash
oracle$ openssl genrsa -out <CA>.key 4096
oracle$ openssl req -new -x509 -days 1826 -key <CA>.key -subj '/C=BR/OU=Class 2 Public Primary Certification Authority/O=VeriSign' -out <CA>.crt
```

### Gerar a chave e o certificado do servidor OracleDB
Execute o seguinte comando para gerar a chave e o certificado do servidor:

```bash
oracle$ openssl genrsa -out <ORACLE_SERVER>.key 4096
oracle$ openssl req -new -key <ORACLE_SERVER>.key -out <ORACLE_SERVER>.csr -subj '/CN=<ORACLE_SERVER>'
oracle$ openssl x509 -req -days 730 -in <ORACLE_SERVER>.csr -CA <CA>.crt -CAkey <CA>.key -set_serial 01 -out <ORACLE_SERVER>.crt
```
:::(info) (**Info**)
Os arquivos CAs `CA.crt` e `CA.key` podem ser de origem do usuário ou serem adquiridas no Segura. Independente de qual seja, as CAs devem ser inseridas no Oracle.
:::

### Converter o certificado do Oracle DB para o formato pkcs12
Execute o seguinte comando para converter o certificado criado para o formato pkcs12:

```bash
oracle$ openssl pkcs12 -export -out <ORACLE_SERVER>.p12 -inkey <ORACLE_SERVER>.key -in <ORACLE_SERVER>.crt -chain -CAfile <CA>.crt -passout pass:<ORACLE_CERT_PASS>
```

Criar a Wallet do servidor OracleDB e importar o certificado .p12 para a wallet criada
Substitua as strings apresentadas nesta tabela pelos valores correspondentes:

**String**|**Valor**
---|---
`<ORACLE_WALLET_DIR>`|Caminho onde a wallet do Oracle DB será gerada. Ex: `/u01/app/wallet/<NOME_WALLET>`.
`<ORACLE_WALLET_PASS>`|Senha que será atribuída a wallet do Oracle DB.
`<ORACLE_SERVER>.p12`|Nome do arquivo .p12 gerado no passo anterior.
`<ORACLE_CERT_PASS>`|Senha do certificado .p12.


Execute o seguinte comando para criar uma nova wallet:
```bash
oracle$ orapki wallet create -wallet "<ORACLE_WALLET_DIR>" -pwd <ORACLE_WALLET_PASS> -auto_login
oracle$ orapki wallet import_pkcs12 -pkcs12file <ORACLE_SERVER>.p12 -pkcs12pwd <ORACLE_CERT_PASS> -wallet "<ORACLE_WALLET_DIR>" -pwd <ORACLE_WALLET_PASS>
```

Finalizando o primeiro passo da configuração do Oracle para ser utilizado via Database Proxy, acesse o documento [Como gerar o certificado e chave da credencial de Banco de Dados](/v4/docs/pt/pam-session-how-to-generate-the-database-credentials-certificate-and-key) para realizar a segunda parte e continuar a configuração.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.