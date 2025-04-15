# Como configurar a integração com Freshdesk no Segura

Este guia mostra como configurar a integração entre Segura e Freshdesk usando a **API REST**.

## Requisitos

* Dados de autenticação da API do Freshdesk:  
  * URL da API.  
  * Usuário ou API Key.  
  * Senha.

## Configurar a integração

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Políticas de segurança e rede > ITSM**.
3. No relatório  **ITSM** clique no botão **Adicionar**.
4. Na janela **Cadastro de integração com sistema de ticket,** clique no botão **Freshdesk**.  
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

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).