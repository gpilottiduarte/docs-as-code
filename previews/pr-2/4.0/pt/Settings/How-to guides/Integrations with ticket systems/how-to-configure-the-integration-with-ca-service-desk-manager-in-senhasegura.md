# Como configurar a integração com CA Service Desk Manager no Segura

Este guia mostra como configurar a integração entre Segura e CA Service Desk Manager usando REST API ou SQL Server.

## Registrar integração

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Políticas de segurança e rede > ITSM**.
3. No relatório  **ITSM** clique no botão **Adicionar**.
4. Na janela **Cadastro de integração com sistema de ticket,** clique no botão **CA Service Desk Manager.** 
5. Na tela **Cadastro de integração com sistema de ticket** voc6e tem dois modos de fazer a requisição: **Rest API** ou **SQL Server**.

## Rest API
### Requisitos

* Conexão HTTPS entre Segura e CA Service Desk Manager  
* Dados de autenticação da API do CA:  
  * URL da API.  
  * Usuário.  
  * Senha.

### Configurar

1. Na tela **Cadastro de integração com sistema de ticket**
   * **Nome da integração:** preencha com um nome para a integração.  
   * **Ativo**: indica o status da integração. Preencha como **Sim.**  
   * **Request Method**: selecione **Rest API.**
   * **Usuário**: insira um usuário com permissão para consultar tickets.  
   * **Senha**: insira a senha do usuário.  
   * **URL da API**: insira a URL principal da integração.  
2. Clique em **Salvar.**

## SQL Server

### Requisitos

* Conexão SQL Server entre Segura e CA Service Desk Manager  
* Dados de autenticação do banco de dados CA:  
  * Usuário.  
  * Senha.  
  * Hostname do banco de dados.  
  * Porta do banco de dados.  
  * Nome do banco de dados.  
  * Instância do banco de dados.

### Configurar

1. Na tela **Cadastro de integração com sistema de ticket**
   * **Nome da integração:** preencha com um nome para a integração.  
   * **Ativo**: indica o status da integração. Preencha como **Sim.**  
   * **Request Method**: selecione **SQL Server**.  
   * **Usuário**: insira um usuário no SQL Server.  
   * **Senha**: insira a senha do usuário no SQL Server.  
   * **DB Host:** *hostname* ou endereço de IP do banco de SQL Server.  
   * **DB Host Port:** porta para conexão com o SQL Server,  
   * **DB Name:** nome do banco de dados.  
   * **DB Instance:** instância do banco de dados.  
2. Clique em **Salvar.**

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).