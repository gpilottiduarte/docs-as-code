# Como criar uma wallet do usuário do senhasegura

Neste documento, você encontra um passo a passo sobre como realizar a criação de uma wallet de usuário para ser usada via Database Proxy Oracle.

Serão necessários cinco passos para configurar o banco de dados Oracle para que este seja acessível via **Database proxy** no Segura, este documento é o **segundo passo**.

![cluster_2-PT](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cluster_2-PT.png){height="" width=""}

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
* 

---
## Criar wallet e importar o certificado

O processo completo de autenticação para o DB Proxy com o Oracle é realizado via SSL. Portanto, é necessário que o usuário do Segura também se autentique via certificado, utilizando a sua IDE, para que a conexão seja estabelecida.
Sendo assim, é necessário que o usuário do Segura também possua uma wallet, a qual deverá estar localizada em sua workstation.

Antes da criação da wallet, é necessário gerar o certificado do usuário Segura. Para isso, o usuário deverá acessar o menu **Meu certificado**, dentro das preferências do usuário.

Após gerar um certificado, o usuário deverá baixar o arquivo `.p12`, o qual será posteriormente importado para a sua wallet. O arquivo precisa ser transferido para o local onde será gerada a wallet.

:::(info) (**Info**)
Para saber como coletar o certificado do usuário no Segura acesse o documento, [Como coletar o certificado do usuário no Segura](/v4/docs/pt/pam-session-how-to-collect-the-Segura-user-certificate).
:::

#### Criar wallet e importar certificado
Com o arquivo `.p12` em mãos, deve ser realizada a criação da wallet e a importação do certificado.

Substitua as strings apresentadas nesta tabela pelos valores correspondentes:

**String**|**Valor**
---|---
`<USER_WALLET_DIR>`|Caminho onde a wallet do usuário será gerado. Por exemplo: `/tmp/<NOME_WALLET>`
`<USER_WALLET_PASS>`|Senha a ser atribuída a wallet do usuário.
`<USER_SERVER>.p12`|Nome do arquivo `.p12` do usuário.
`<USER_CERT_PASS>`|Senha do certificado `.p12`. Esta senha está no formulário do Segura, onde o arquivo foi baixado na etapa anterior.

Execute o seguinte comando para criar a wallet e importar o certificado:
```bash
oracle$ orapki wallet create -wallet "<USER_WALLET_DIR>" -pwd <USER_WALLET_PASS> -auto_login
oracle$ orapki wallet import_pkcs12 -pkcs12file <USER>.p12 -pkcs12pwd <USER_CERT_PASS> -wallet "<USER_WALLET_DIR>" -pwd <USER_WALLET_PASS>
```

#### Coletar a wallet gerada e transferir para a workstation do usuário.
Para isso, é possível comprimir a pasta da wallet, a fim de facilitar a transferência.
```bash
oracle$ tar -cvzf orcl_user1-wallet.tar.gz /tmp/<NOME_WALLET>
```

Após a transferência para a workstation do usuário, este deverá extrair o conteúdo e armazená-lo em um local de sua preferência. Este local servirá para configurar a IDE de sua escolha.

Finalizando o segundo passo da configuração do Oracle para ser utilizado via **Database Proxy**, acesse o documento [Como configurar no Segura um dispositivo para utilizar via Database Proxy Oracle](/v4/docs/pt/pam-session-how-to-configure-a-device-in-Segura-to-use-the-database-proxy-with-oracle-cluster) para realizar a terceira parte e continuar a configuração.

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.