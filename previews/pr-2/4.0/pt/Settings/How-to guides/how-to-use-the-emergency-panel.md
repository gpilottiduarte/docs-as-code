# Como utilizar o painel de emergência

Este artigo oferece um guia detalhado para realizar configurações essenciais no Painel de Emergência. Essa funcionalidade permite:

* Encerrar todas as sessões ativas.  
* Congelar o acesso a dispositivos predefinidos.  
* Bloquear acessos ao Segura, incluindo via API ou EPM, por um período determinado.

## Pré-requisitos

* Papel de [System Administrator](https://portal.document360.io/v3-33/docs/pt/auditing-permissions).  
* [MFA ativado](https://portal.document360.io/v3-33/docs/pt/user-management-add-multi-factor-authentication) para o usuário.

## Encerrar Sessões

:::(error) (Atenção)  
Realizar esta ação encerrará todas as sessões em andamento gerenciadas pelo Segura. Para evitar que novas sessões sejam iniciadas, ative o Congelamento ou Lockdown.  
:::

1. No Segura, passe o mouse sobre o **Painel de Emergência** e selecione **Encerrar sessões**.  
3. Insira o **Token de acesso** gerado pelo MFA.

:::(info) (Info)  
Caso você não tenha um autenticador MFA cadastrado, não será possível realizar a ação. Adicionalmente, o Segura exibirá a tela para cadastro de um autenticador MFA.  
:::

4. Clique em **Validar token**.  
5. Insira a **Justificativa** e, se aplicável, o **Código de governança**.  
6. Clique em Aplicar.

## Ativar o congelamento

:::(info) (Info)  
Caso você não tenha um autenticador MFA cadastrado, não será possível realizar a ação. Adicionalmente, o Segura exibirá a tela para cadastro de um autenticador MFA.  
:::

:::(error) (Atenção)   
Durante o congelamento, os usuários não poderão iniciar sessões em dispositivos predefinidos. Apenas administradores terão acesso durante este período.  
Se a opção **Bloquear durante congelamentos?** estiver ativada no grupo de acesso, todos os dispositivos pertencentes a esse grupo serão congelados.  
:::

1. No Segura, passe o mouse sobre o **Painel de Emergência** e selecione **Congelamento**.  
3. Clique em **Validar token**.  
4. Configure o **Início** e a **Duração** do congelamento.  
5. Insira a **Justificativa** e, se necessário, o **Código de governança**.  
6. Clique em **Salvar**.

## Desativar o congelamento

1. No Segura, passe o mouse sobre o **Painel de Emergência** e selecione **Congelamento**.  
3. Clique em **Validar token**.  
4. Insira a **Justificativa** e, se necessário, o **Código de governança**.  
5. Clique em **Salvar**.

## Ativar o lockdown

:::(error) (Atenção)  
O *lockdown* bloqueia todos os acessos ao Segura, incluindo interface web, chamadas de API e acesso via EPM. Apenas administradores terão acesso ao sistema.  
 :::

:::(warning) (Cuidado)  
Esta ação pode causar *downtime* em serviços que utilizam a API do Segura.  
 :::

Para ativar o *lockdown*, siga os passos abaixo:

1. No Segura, passe o mouse sobre o **Painel de Emergência** e selecione **Lockdown**.   
3. Insira o **Token de acesso** gerado pelo MFA.

:::(info) (Info)  
Caso você não tenha um autenticador MFA cadastrado, não será possível realizar a ação. Adicionalmente, o Segura exibirá a tela para cadastro de um autenticador MFA.  
:::

4. Clique em **Validar token**.  
5. Configure o **Início** e a **Duração** do *lockdown*.  
6. Insira a **Justificativa** e, se necessário, o **Código de governança**.  
7. Clique em **Salvar**.

## Desativar o lockdown

1. No Segura, passe o mouse sobre o **Painel de Emergência** e selecione **Lockdown**.  
3. Clique em **Validar token**.  
4. Insira a **Justificativa** e, se necessário, o **Código de governança**.  
5. Clique em **Salvar**.

## Adicionar notificações ao Painel de Emergência

Para adicionar notificações ao painel de emergência, siga os passos abaixo::

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Notificações \> Notificações globais**.  
3. No relatório **Notificações globais**, clique no botão **Adicionar**.
4. Na tela **Cadastrar notificação**:  
   1. **Nome**: nome da notificação.  
   2. Escolha como o usuário será notificado: *E-mail, Tela* ou *SMS*.  
   3. Marque a opção **Enviar notificações apenas para contatos com acesso às credenciais ou dispositivos**, se necessário.  
   4. Na aba **Notificação**,  clique no botão **Adicionar** para abrir o modal **Notificações**.  
          1. No modal **Notificações**, escreva `Painel de Emergência` e clique em **Filtrar**.
      1. Selecione uma ou mais notificações.  
      2. Clique em **Adicionar**.  
   5. Na aba **Contatos**, clique no botão **Adicionar** para abrir o modal **Contatos.**
      1. No modal **Contatos**, selecione os contatos que receberão as notificações.  
      2. Clique em **Adicionar**.  
5. Na aba **Revisão**, clique em **Salvar**.

---

Dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
