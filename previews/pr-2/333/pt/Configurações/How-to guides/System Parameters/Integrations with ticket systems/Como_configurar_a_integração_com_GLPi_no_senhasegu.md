# Como configurar a integração com GLPi no senhasegura

Este guia mostra como configurar a integração entre senhasegura e GLPi ITSM usando a **API REST**.

## Requisitos

* Dados de autenticação da API do BMC Helix (Remedy):  
  * URL da API do GLPi ITSM.  
  * Usuário GLPi ITSM.  
  * Token da aplicação GLPi ITSM.  
  * Senha GLPi ITSM.

## Configurar o GLPi ITSM

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistemas \> Integrações com sistema de tickets.**  
3. No relatório  **Integrações com sistema de tickets,** na barra superior, clique em **Exibir ações** e selecione **Novo.**  
4. Na janela **Cadastro de integração com sistema de ticket,** selecione **GLPi ITSM.**  
5. Na janela **Cadastro de integração com sistema de ticket**, preencha os campos:  
   * **Nome da integração:** nome da integração no senhasegura.  
   * **Ativo:** selecione **Sim**  
   * **URL da API:** URL da API do GLPi ITSM.
   * **Usuário:** usuário com acesso aos tickets no GLPi ITSM.  
   * **Application token:** token de autenticação no GLPi ITSM  
   * **Senha:** senha do usuário GLPi ITSM.  
6. Clique em **Salvar**.

:::(info) (Info)

É necessário que a opção **Habilitar login com credenciais** esteja habilitada nas configurações de API do GLPi.

:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).