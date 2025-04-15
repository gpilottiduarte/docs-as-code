# Sobre Oracle wallet

## O que é uma Oracle Wallet?

Uma Oracle Wallet é um conjunto de arquivos que funcionam como uma carteira para o armazenamento de chaves privadas, certificados e credenciais de autenticação.

Os arquivos presentes na wallet são criptografados e protegidos por uma senha para garantir apenas acessos autorizados ao seu conteúdo.
Para saber mais sobre a Oracle Wallet acesse a documentação da [Oracle](https://docs.oracle.com/cd/E92519_02/pt856pbr3/eng/pt/tsvt/concept_UnderstandingOracleWallet.html?pli=ul_d96e224_tsvt){target=`_blank`}.

## Por que utilizar uma Oracle Wallet?

Por ser um repositório seguro de credenciais de autenticação, a Oracle Wallet foi criada para resolver problemas relacionados à segurança e gestão de credenciais em ambientes Oracle e é comumente utilizado para armazenar certificados .

No caso do Database Proxy, as etapas de autenticação são realizadas utilizando SSL, portanto as wallets são necessárias para armazenar os certificados envolvidos em todas as pontas.
Existem duas formas para se criar uma Oracle Wallet:

* **ORAPKI**: ferramenta CLI disponível no OracleDB, está disponível apenas para usuários que possuam uma licença válida do Oracle.
* **OpenSSL**: usuários que não possuam uma licença do Oracle podem utilizar esta ferramenta para criar seus certificados.

## Como a autenticação Database Proxy Oracle funciona?

![autenticacao_oracle.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/autenticacao_oracle%281%29.png){height="" width=""}