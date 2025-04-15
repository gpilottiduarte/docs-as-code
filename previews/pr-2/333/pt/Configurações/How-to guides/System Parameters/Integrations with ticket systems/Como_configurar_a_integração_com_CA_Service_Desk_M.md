# Como configurar a integração com CA Service Desk Manager no senhasegura

Este guia mostra como configurar a integração entre senhasegura e CA Service Desk Manager usando REST API ou SQL Server.

## REST API

### Requisitos

* Conexão HTTPS entre senhasegura e CA Service Desk Manager  
* Dados de autenticação da API do CA:  
  * URL da API.  
  * Usuário.  
  * Senha.

### Configurar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema \> Integrações com sistema de tickets.**  
3. No relatório **Integrações com sistema de tickets**, na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket**, selecione **CA Service Desk Manager.**  
5. Preencha os campos:  
   * **Nome da integração:** preencha com um nome para a integração.  
   * **Ativo**: indica o status da integração. Preencha como **Sim.**  
   * **Request Method**: selecione Rest API.  
   * **Usuário**: insira um usuário com permissão para consultar tickets.  
   * **Senha**: insira a senha do usuário.  
   * **URL da API**: insira a URL principal da integração.  
6. Clique em **Salvar.**

## SQL Server

### Requisitos

* Conexão SQL Server entre senhasegura e CA Service Desk Manager  
* Dados de autenticação do banco de dados CA:  
  * Usuário.  
  * Senha.  
  * Hostname do banco de dados.  
  * Porta do banco de dados.  
  * Nome do banco de dados.  
  * Instância do banco de dados.

### Configurar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema \> Integrações com sistema de tickets.**  
3. No relatório **Integrações com sistema de tickets**, na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket**, selecione **CA Service Desk Manager.**  
   * **Nome da integração:** preencha com um nome para a integração.  
   * **Ativo**: indica o status da integração. Preencha como **Sim.**  
   * **Request Method**: selecione SQL Server.  
   * **Usuário**: insira um usuário no SQL Server.  
   * **Senha**: insira a senha do usuário no SQL Server.  
   * **DB Host:** *hostname* ou endereço de IP do banco de SQL Server.  
   * **DB Host Port:** porta para conexão com o SQL Server,  
   * **DB Name:** nome do banco de dados.  
   * **DB Instance:** instância do banco de dados.  
5. Clique em **Salvar.**

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).