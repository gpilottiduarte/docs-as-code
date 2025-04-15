# Como configurar a integração com Zendesk no senhasegura

Este guia mostra como configurar a integração entre senhasegura e Zendesk usando a **API REST**.

## Requisitos

* Dados de autenticação da API do Zendesk:  
  * URL da API.  
  * Endereço de e-mail.  
  * Senha.  
  * Token da API.

  ## Configurar o Zendesk

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistemas \> Integrações com sistema de tickets.**  
3. No relatório  **Integrações com sistema de tickets,** na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket,** selecione **Zendesk**.  
5. Na janela **Cadastro de integração com sistema de ticket**, preencha os campos:  
   * **Nome da integração:** nome da integração no senhasegura.  
   * **Ativo:** selecione Sim  
   * **URL da API:** URL da API do Zendesk.  
   * **Endereço de e-mail:** endereço de e-mail do usuário Zendesk com permissão para consultar tickets.  
   * **Senha**: senha do usuário Zendesk.  
   * **API Token**: token OAuth válido.  
6. Clique em **Salvar**.

:::(info) (Info)

* A integração usa o endpoint `/api/v2/tickets/[id].json e o`  fluxo de aprovação aceita solicitações apenas para tickets com status **Aberto** ou **Pendente.**

:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).