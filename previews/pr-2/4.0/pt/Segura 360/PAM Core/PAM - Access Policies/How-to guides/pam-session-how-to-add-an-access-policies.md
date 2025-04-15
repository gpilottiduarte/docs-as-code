# Como cadastrar uma política de acesso

Neste documento você encontra um guia passo a passo sobre como cadastrar políticas de acesso e suas regras no módulo PAM Core.

## Requisitos

* Ser um usuário administrador.
---

## Cadastrar políticas de acesso

Para preencher os campos de forma correta, saiba mais em [Cadastro de políticas de acesso](/v4/docs/pt/pam-session-access-policies-registration).


1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral selecione **Controle de acesso** >  **Políticas de acesso**.
3. No canto superior direito da tela, clique em **Adicionar**.
4. Na tela de cadastro **Políticas de acesso** que se abre, preencha os campos obrigatórios, identificados pelo asterisco:
5. Na aba **Geral**, preeencha:
    1. **Nome da política de acesso***: digite o nome para identificação do grupo.
    2. **Status***: selecione a opção Sim.
    3. **Descrição**: escreva uma descrição para a política, se desejar.
5. Na aba **Configurações**, selecione as configurações desejadas para o grupo.
6. Na aba **Usuários**, clique em **Adicionar**, e adicione os usuários que farão parte da política.
7. Na aba **Senha**, selecione as configurações desejadas.
8. Na aba **Sessões**, selecione as configurações desejadas.
9. Na aba **Aprovadores**, clique em **Adicionar** e adicione aqueles que serão os aprovadores da política.
    :::(info) (**Info**)
    Para que o aprovador tenha acesso à tela de aprovação é necessário que ele tenha o perfil mínimo de PAM Operator.
    :::
10. Na aba **Critérios**, preencha os campos disponíveis e selecione o **Site***, **Tipo de dispositivo*** e **Tipo de credencial*** que farão parte da política.
11. Na aba **Restrição de acesso**, configure as permissões que serão válidas para o grupo.
12. Clique em **Salvar**.
13. Na aba **Revisão** está todas as configurações realizadas nas abas anteriores.

Uma mensagem de confirmação será exibida pelo sistema e a política criada aparecerá na lista da tela [Políticas de acesso](/v4/docs/pt/pam-session-access-policies).

:::(info) (**Info**)
Por padrão, quando um usuário pertence a  mais de uma política com diferentes configurações de acesso, o senhasegua segue a regra de restrição por credencial e dispositivo. Para alterar o padrão e fazer com que o Segura siga a regra da política mais restritiva, acesse o documento [Como desabilitar a regra de restrição por credenciais e dispositivos](/v4/docs/pt/pam-session-how-to-deactivate-the-restriction-rule-by-credential-and-devices).
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.