# ITSM

Este documento fornece informações sobre o relatório **ITSM**, que exibe informações sobre as integrações com sistemas de *tickets* de suporte que estão cadastradas no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Serviços \> Políticas de segurança e rede \> ITSM.**

## Menu de Ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Cadastro de integração com sistema de ticket** para cadastro de uma nova integração ITSM. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código da integração ITSM no senhadegura |
| **Nome** | Campo de texto | Filtra pelo nome da integração ITSM no Segura. |
| **Sistema** | Menu suspenso | Filtra pelo sistema de tickets da integração. As opções são *Jira Service Desk, Zendesk, ServiceNow, CA Service Desk Manager, BMC Helix (Remedy) e GLPi ITSM.* |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos de relatório

* **Código.**  
* **Nome.**  
* **Sistema.**  
* **Ativo.**  
* **Ações**:  
  * **Editar**: direciona para a tela **Cadastro de integração com sistema de ticket** em modo de edição**.**  
  * **Testar a autenticação**: direciona para a tela **Teste de integração do sistema**.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Cadastro de integração com sistema de ticket

### Seleção de sistema de integração

| Serviço de integração | Ação |
| :---- | :---- |
| **Jira Service Desk** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **Jira Service Desk**. |
| **Zendesk** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **Zendesk.** |
| **Freshdesk** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **Freshdesk**. |
| **ServiceNow** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **ServiceNow**. |
| **CA Service Desk Manager** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **CA Service Desk Manager**. |
| **BMC Helix (Remedy)** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **BMC Helix (Remedy)**. |
| **GLPi ITSM** | Direciona para a tela **Cadastro de integração com sistema de ticket** para o **GLPi ITSM**. |

### Jira Service Desk

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da integração** | Campo de texto | Sim | Nome identificador da integração. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status da integração. |
| **URL da API** | Campo de texto | Sim | Endpoint da API do Jira Service Desk. |
| **Usuário** | Campo de texto | Sim | Nome de usuário para autenticação. |
| **API Token** | Campo de texto | Não | Token de API para autenticação. |

### Zendesk

| Campo | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da integração** | Campo de texto | Sim | Nome identificador da integração. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status da integração. |
| **URL da API** | Campo de texto | Sim | Endereço da API do sistema Zendesk. |
| **Endereço de email** | Campo de texto | Sim | Endereço de email associado à conta Zendesk. |
| **Senha** | Campo de texto | Não | Senha para autenticação. |
| **API token** | Campo de texto | Não | Token de API para autenticação. |

### Freshdesk

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da integração** | Campo de texto | Sim | Nome identificador da integração. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status da integração. |
| **URL da API** | Campo de texto | Sim | Endpoint da API do Jira Service Desk. |
| **Usuário** | Campo de texto | Sim | Nome de usuário para autenticação. |
| **API Token** | Campo de texto | Não | Token de API para autenticação. |

### ServiceNow

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da integração** | Campo de texto | Sim | Nome identificador da integração. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status da integração. |
| **URL da API** | Campo de texto | Sim | Endpoint da API do Jira Service Desk. |
| **Usuário** | Campo de texto | Sim | Nome de usuário para autenticação. |
| **API Token** | Campo de texto | Não | Token de API para autenticação. |

### CA Service Desk Manager

#### Informações gerais

* O **Request Method** determina qual método de integração será utilizado: **Rest API** ou **SQL Server**.  
* Campos comuns: **Usuário** e **Senha**  
* Campos condicionais para o método **Rest API**: **URL da API**.  
* Campos condicionais para o método **SQL Server**: *DB Host, DB Name, DB Instance e DB Host Port.*

| Campo | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da integração** | Campo de texto | Sim | Nome identificador da integração. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status da integração. |
| **Request Method** | Botão de opção | Sim | Método de requisição. As opções são **Rest API** ou **SQL Server**. |
| **Usuário** | Campo de texto | Não | Nome de usuário para autenticação. |
| **Senha** | Botão de opção | Não | Senha para autenticação. |
| **DB Host** | Campo de texto | Não | Endereço do servidor de banco de dados. |
| **DB Name** | Botão de opção | Não | Nome do banco de dados. |
| **DB Instance** | Campo de texto | Não | Instância do banco de dados. |
| **DB Host Port** | Botão de opção | Não | Porta do servidor de banco de dados. |
| **URL da API** | Campo de texto | Não | Endpoint da API do CA Service Desk Manager. |

### GLPi ITSM

| Campo | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da integração** | Campo de texto | Sim | Nome identificador da integração. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status da integração. |
| **URL da API** | Campo de texto | Sim | Endereço da API do sistema GLPi. |
| **Usuário / API Key** | Campo de texto | Sim | Nome de usuário ou chave de API para autenticação. |
| **Application token** | Campo de texto | Sim | Token de aplicação para autenticação. |
| **Senha** | Campo de terto | Não | Senha para autenticação. |
