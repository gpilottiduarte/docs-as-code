# Database Proxy

Este documento, contém informações detalhadas sobre a função e objetivo da utilização de um **Database Proxy** no Segura.

## Conexão com Database Proxy
O **Database Proxy** é um tipo de proxy reverso personalizado para banco de dados. Ele recebe solicitações de clientes como aplicações Web e os encaminha para um servidor de banco de dados usando configurações específicas para banco de dados. 

:::(warning) (**Cuidado**)
O **Database Proxy** tem um limite padrão de 2.000 conexões simultâneas. Isso pode ser alterado, mas terá um aumento de provisionamento significativo na memória, levando em conta que cada slot de conexão utiliza cerca de 64kb de memória. Para realizar esse aumento entre em contato com o time de suporte.
:::

## Aplicado ao Segura
Com o Segura **Database Proxy**, o usuário será capaz de realizar uma sessão a partir de sua própria workstation, realizando o proxy entre o cliente de banco de dados e a sessão.
Permitindo a utilização de um cliente SQL para a execução de sessões, com as seguintes funcionalidades do Segura:

* Filtro de queries.
* Notificação.
* Auditoria.

O Database Proxy terá os novos tipos de conectividade para a credencial, sendo:

* MS SQL Server.
* PostgreSQL.
* Oracle.

:::(Info) (**Info**)
O Banco de dados Oracle possui configurações específicas. Acesse o documento [Configuração do banco de dados Oracle](/v4/docs/pt/pam-session-oracle-database-configurations) para realizar esta configuração.
:::

Atualmente, estes são os bancos de dados e clients homologados pelo Segura.

**Banco de dados**|**Versão**|**Client**
|---|---|---|
Microsoft SQL Server*|à partir de Microsoft SQL Server 2016 |SQL Server Management Studio 19.1.56.0 e DBeaver 23.1.0
PostgreSQL|PostgreSQL 15.3|PG Admin 4 v7.3 e DBeaver 23.1.0
Oracle|Oracle Version 19.0.0.0.0|SQL*Plus Release 21.0.0.0.0, SQL Developer  Versão 23.1.0.097 -  Build 097.1607 e DBeaver 23.1.0


:::(warning) (**Atenção**)
* Devido a compatibilidade do driver, o Database Proxy não poderá ser utilizado com **versões anteriores ao SQL Server 2012**.
:::

Em versões futuras, os outros bancos de dados serão adicionados.

:::(error) (**Importante**)
A partir da versão 3.31 o Database Proxy **é configurado automaticamente** e está pronto para ser utilizado. Caso seu banco de dados utilize números de portas específicas, diferente do número padrão, acesse a documentação Como modificar as portas do Database Proxy para realizar a mudança.
:::