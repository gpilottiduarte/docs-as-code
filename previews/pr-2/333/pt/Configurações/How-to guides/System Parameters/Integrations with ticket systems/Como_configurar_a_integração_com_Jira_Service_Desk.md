# Como configurar a integração com Jira Service Desk no senhasegura

Este guia mostra como configurar a integração entre senhasegura e Jira Service Desk usando a **API REST**.

## Requisitos

* Dados de autenticação da API do Jira Service Desk:  
  * URL da API.  
  * Usuário.  
  * Token da API.

## Configurar o Jira Service Desk

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistemas \> Integrações com sistema de tickets**.  
3. No relatório **Integrações com sistema de tickets,** na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket,** selecione **Jira Service Desk**.  
5. Na janela **Cadastro de integração com sistema de ticket**, preencha os campos:  
   * **Nome da integração:** nome da integração no senhasegura.  
   * **Ativo**: selecione **Sim.**  
   * **URL da API**: URL da API do Jira.  
   * **Usuário**: usuário Jira com permissão para consultar tickets.  
   * **API Token**: token gerado na sua conta Atlassian.  
6. Clique em **Salvar.**

:::(info) (Info)
* A integração usa o endpoint `/rest/api/2/issue/` e aceita solicitações apenas para *tickets* com status **Em andamento**.  
* É necessário um [Token de API do Jira Service](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) para esta integração
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).