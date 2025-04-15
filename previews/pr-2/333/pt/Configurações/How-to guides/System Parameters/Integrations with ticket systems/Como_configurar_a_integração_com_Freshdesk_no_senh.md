# Como configurar a integração com Freshdesk no senhasegura

Este guia mostra como configurar a integração entre senhasegura e Freshdesk usando a **API REST**.

## Requisitos

* Dados de autenticação da API do Freshdesk:  
  * URL da API.  
  * Usuário ou API Key.  
  * Senha.

## Configurar a integração

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema \> Integrações com sistema de tickets.**  
3. No relatório  **Integrações com sistema de tickets,** na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket,** selecione **Freshdesk**.  
5. Na janela **Cadastro de integração com sistema de ticket**, preencha os campos:  
   * **Nome da integração**: nome para a integração.  
   * **Ativo**: status da integração, selecione **Sim**.  
   * **URL da API**: URL principal do Freshdesk.  
   * **Usuário / API Key**: usuário ou API Key Freshdesk com permissão para consultar tickets.  
   * **Senha**: senha do usuário Freshdesk.  
6. Clique em **Salvar.**

:::(info) (Info)  
A integração usa o endpoint `/api/v2/tickets` e aceita solicitações apenas para tickets com status **Aberto** ou **Pendente**.  
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).