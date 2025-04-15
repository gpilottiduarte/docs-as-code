# Como configurar a integração com Zendesk no Segura

Este guia mostra como configurar a integração entre Segura e Zendesk usando a **API REST**.

## Requisitos

* Dados de autenticação da API do Zendesk:  
  * URL da API.  
  * Endereço de e-mail.  
  * Senha.  
  * Token da API.

  ## Configurar o Zendesk

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Políticas de segurança e rede > ITSM**.
3. No relatório  **ITSM** clique no botão **Adicionar**.
4. Na janela **Cadastro de integração com sistema de ticket,** clique no botão **Zendesk**.  
5. Na janela **Cadastro de integração com sistema de ticket**:  
   * **Nome da integração:** nome da integração no Segura.  
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

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).