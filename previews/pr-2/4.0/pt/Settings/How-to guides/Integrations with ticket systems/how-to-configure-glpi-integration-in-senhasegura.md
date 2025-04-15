# Como configurar a integração com GLPi no Segura

Este guia mostra como configurar a integração entre Segura e GLPi ITSM usando a **API REST**.

## Requisitos

* Dados de autenticação da API do GLPi ITSM:  
  * URL da API do GLPi ITSM.  
  * Usuário GLPi ITSM.  
  * Token da aplicação GLPi ITSM.  
  * Senha GLPi ITSM.

## Configurar o GLPi ITSM

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Políticas de segurança e rede > ITSM**.
3. No relatório  **ITSM** clique no botão **Adicionar**.
4. Na janela **Cadastro de integração com sistema de ticket,** e clique no botão **GLPi ITSM.**  
5. Na janela **Cadastro de integração com sistema de ticket**:  
   * **Nome da integração:** nome da integração no Segura.  
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

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).