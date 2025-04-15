# CA Service Desk Manager

Neste documento você irá encontrar informações sobre o relatório para integração de ticket usando **CA Service Desk Manager.**

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em Grid Menu, representado pelos nove quadrados, e selecione Configurações.  
2. No menu lateral, selecione **Parâmetros de sistema \> Integrações com sistema de tickets**.  
3. Na barra superior, clique em **Exibir ações** em selecione **Novo**.  
4. Na janela **Cadastro de integração com sistema de ticket,** selecione **CA Service Desk Manager.**

## Informações gerais

* O **`Request Method`** determina qual método de integração será utilizado: **Rest API** ou **SQL Server**.  
* Campos comuns: **Usuário** e **Senha**  
* Campos condicionais para o método **Rest API**: **URL da API**.  
* Campos condicionais para o método **SQL Server**: *DB Host, DB Name, DB Instance e DB Host Port.*

| Campo | Descrição |
| ----- | ----- |
| **Nome da integração** | Nome identificador da integração. |
| **Ativo** | Status da integração. Pode ser **Sim** ou **Não**. |
| **Request Method** | *Radio buttons.* Método de requisição. Pode ser **Rest API** ou **SQL Server**. |
| **Usuário** | Nome de usuário para autenticação. |
| **Senha** | Senha para autenticação. |
| **DB Host** | Endereço do servidor de banco de dados. |
| **DB Name** | Nome do banco de dados. |
| **DB Instance** | Instância do banco de dados. |
| **DB Host Port** | Porta do servidor de banco de dados. |
| **URL da API** | Endpoint da API do CA Service Desk Manager. |
