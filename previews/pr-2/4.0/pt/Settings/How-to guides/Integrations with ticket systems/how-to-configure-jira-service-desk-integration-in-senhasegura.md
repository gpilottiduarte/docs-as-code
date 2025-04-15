# Como configurar a integração com Jira Service Desk no Segura

Este guia mostra como configurar a integração entre Segura e Jira Service Desk usando a **API REST**.

## Requisitos

* Dados de autenticação da API do Jira Service Desk:  
  * URL da API.  
  * Usuário.  
  * Token da API.

## Configurar o Jira Service Desk

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Políticas de segurança e rede > ITSM**.
3. No relatório  **ITSM** clique no botão **Adicionar**.
4. Na janela **Cadastro de integração com sistema de ticket,** clique no botão **Jira Service Desk**.  
5. Na janela **Cadastro de integração com sistema de ticket**:  
   * **Nome da integração:** nome da integração no Segura.  
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

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).