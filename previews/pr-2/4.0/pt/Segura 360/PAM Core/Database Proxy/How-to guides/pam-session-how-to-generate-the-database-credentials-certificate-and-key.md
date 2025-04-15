# Como gerar o certificado e chave da credencial de Banco de Dados

Este documento fornece informações sobre o passo a passo para gerar o certificado e a chave da credencial.

Serão necessários seis passos para configurar o banco de dados Oracle para que este seja acessível via  Database proxy no Segura, este documento é o **segundo passo**.

![passo2_alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/passo2_alone%281%29.png){height="" width=""}

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
:::(error) (**Importante**)
Para realizar esse passo é necessário **ter em mãos a CA** utilizada na assinatura dos certificados do Oracle e das credencias.
:::

## Gerar o certificado e a chave 
Para cada credencial a ser gerenciada pelo Segura, é necessário que seja gerado um certificado correspondente. Este certificado será utilizado pelo Segura para realizar a autenticação no banco de dados. 

É importante que este certificado seja assinado com a mesma CA utilizada para a criação da wallet do servidor Oracle DB.

### Gerar a chave e o certificado da credencial
Substitua as strings apresentadas nesta tabela pelos valores correspondentes:

**String**|**Valor**
---|---
`<CREDENTIAL>.key`|Nome do arquivo .key da credencial. Este arquivo será utilizado posteriormente no cadastro da credencial no Segura.
`<CREDENTIAL>.csr`|Nome do arquivo .csr da credencial. Este arquivo será utilizado posteriormente no cadastro da credencial no Segura.
`'/CN=<CREDENTIAL>'`|A CN do certificado, deve ser o nome exato da credencial a ser cadastrada no Segura.
`<CA>.crt`|Nome do arquivo .crt da CA.
`<CA>.key`|Nome do arquivo .key da CA.

Execute o seguinte comando para gerar a chave e o certificado da credencial:
```bash
oracle$ openssl genrsa -out <CREDENTIAL>.key 4096
oracle$ openssl req -new -key <CREDENTIAL>.key -out <CREDENTIAL>.csr -subj '/CN=<CREDENTIAL>'
oracle$ openssl x509 -req -days 730 -in <CREDENTIAL>.csr -CA <CA>.crt -CAkey <CA>.key -set_serial 01 -out <CREDENTIAL>.crt
```

### Criar no banco de dados a credencial de acesso ao Oracle DB
Execute o seguinte comando para criar no banco de dados a credencial:
```bash
SQL> ALTER SESSION SET "_ORACLE_SCRIPT"=true;
SQL> CREATE USER <CREDENTIAL> IDENTIFIED EXTERNALLY AS 'CN=<CREDENTIAL>'
SQL> GRANT CREATE SESSION TO <CREDENTIAL>
```
:::(info) (**Info**)
A CN da credencial dentro do banco de dados precisa ser idêntica a CN do certificado da credencial.
:::

### Alterar credencial já criada

:::(warning) (**Atenção**)
Esta etapa somente é necessária caso a credencial já esteja criada no Oracle DB e precisa ser alterada para que a mesma seja identificada pela CN utilizada no certificado.
:::

Execute o seguinte comando para alterar:
```bash
SQL> ALTER SESSION SET "_ORACLE_SCRIPT"=true;
SQL> ALTER USER <CREDENTIAL> IDENTIFIED EXTERNALLY AS 'CN=<CREDENTIAL>'
SQL> GRANT CREATE SESSION TO <CREDENTIAL>
```


Finalizando o segundo passo da configuração do Oracle para ser utilizado via Database Proxy, acesse o documento [Como configurar o servidor Oracle para o uso de autenticação via wallet](/v4/docs/pt/pam-session-how-to-configure-the-oracle-server-to-use-wallet-authentication) para realizar a terceira parte e continuar a configuração.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.
