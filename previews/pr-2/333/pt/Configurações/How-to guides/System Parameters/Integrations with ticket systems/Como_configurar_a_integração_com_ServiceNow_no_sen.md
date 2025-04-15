# Como configurar a integração com ServiceNow no senhasegura

Este guia mostra como configurar a integração entre senhasegura e **ServiceNow** usando a **API REST**.

## Requisitos

* Dados de autenticação da API do ServiceNow:  
  * URL da API.  
  * Usuário.  
  * Senha.

## Configurar o ServiceNow

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistemas \> Integrações com sistema de tickets.**  
3. No relatório  **Integrações com sistema de tickets,** na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket,** selecione **ServiceNow**.  
5. Na janela **Cadastro de integração com sistema de ticket**, preencha os campos:  
   * **Nome da integração**: nome da integração no senhasegura.  
   * **Ativo**: selecione **Sim.**  
   * **URL da API**: URL do ServiceNow.  
   * **Usuário**: usuário no ServiceNow com permissão para consultar tickets.  
   * **Senha**: senha do usuário ServiceNow.  
6. Clique em **Salvar**.

:::(info) (Info)
* A integração usa o endpoint `/api/now/table/` e o  fluxo de aprovação aceita solicitações apenas para *tickets* com status **Em andamento**.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).