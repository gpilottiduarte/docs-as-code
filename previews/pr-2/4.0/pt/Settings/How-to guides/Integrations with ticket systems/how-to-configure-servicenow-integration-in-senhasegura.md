# Como configurar a integração com ServiceNow no Segura

Este guia mostra como configurar a integração entre Segura e **ServiceNow** usando a **API REST**.

## Requisitos

* Dados de autenticação da API do ServiceNow:  
  * URL da API.  
  * Usuário.  
  * Senha.

## Configurar o ServiceNow

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Políticas de segurança e rede > ITSM**.
3. No relatório  **ITSM** clique no botão **Adicionar**.
4. Na janela **Cadastro de integração com sistema de ticket,** clique no botão **ServiceNow**.  
5. Na janela **Cadastro de integração com sistema de ticket**, preencha os campos:  
   * **Nome da integração**: nome da integração no Segura.  
   * **Ativo**: selecione **Sim.**  
   * **URL da API**: URL do ServiceNow.  
   * **Usuário**: usuário no ServiceNow com permissão para consultar tickets.  
   * **Senha**: senha do usuário ServiceNow.  
6. Clique em **Salvar**.

:::(info) (Info)
* A integração usa o endpoint `/api/now/table/` e o  fluxo de aprovação aceita solicitações apenas para *tickets* com status **Em andamento**.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).