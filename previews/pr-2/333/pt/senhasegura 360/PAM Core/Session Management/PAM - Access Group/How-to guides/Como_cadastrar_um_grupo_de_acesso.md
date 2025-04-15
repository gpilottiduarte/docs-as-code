# Como cadastrar um grupo de acesso

Neste documento você encontra um guia passo a passo sobre como cadastrar grupos de acesso e suas regras no módulo PAM Core.

## Requisitos

* Ser um usuário administrador.
---

## Cadastrar grupo de acesso
:::(info) (**Info**)
Para maiores informações sobre o significado dos campos no cadastro do grupo de acesso, acesse o documento de referência, [Grupos de acesso - relatório](/v3-33/docs/pt/pam-session-access-groups-report).
:::

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione PAM Core.
2. No menu lateral selecione **Acesso** >  **Grupos de acesso**.
3. Clique no ícone de três pontos verticais, localizado no canto superior direito da tela, e selecione **+ Novo**.
4. Na janela **Cadastro de grupo de acesso** que se abre, preencha os campos obrigatórios, identificados pelo asterisco:
    1. **Nome do grupo de acesso***: digite o nome para identificação do grupo.
    2. **Ativo***: selecione a opção Sim.
    3. **Descrição**: escreva uma descrição para o grupo, se desejar.
5. Na aba **Configurações**, selecione as configurações desejadas para o grupo.
6. Na aba **Critérios**, preencha os campos disponíveis e selecione o **Site***, **Tipo de dispositivo*** e **Tipo de credencial*** que farão parte do grupo.
7. Na aba **Usuários**, clique no ícone de soma, localizado ao lado da palavra **Usuários**, e adicione aqueles que farão parte do grupo.
8. Na aba **Aprovadores**, clique no ícone de soma, localizado ao lado da palavra **Aprovadores** e adicione aqueles que serão os aprovadores do grupo.
    :::(info) (**Info**)
    Para que o aprovador tenha acesso à tela de aprovação é necessário que ele tenha o perfil mínimo de PAM Operator.
    :::
9. Na aba **Restrição de acesso**, configure as permissões que serão válidas para o grupo.
10. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema e o grupo criado aparecerá na lista de grupos da tela **Grupos de acesso**.

:::(info) (**Info**)
Por padrão, quando um usuário pertence a  mais de um grupo com diferentes configurações de acesso, o senhasegua segue a regra de restrição por credencial e dispositivo. Para alterar o padrão e fazer com que o senhasegura siga a regra do grupo mais restritivo, acesse o documento [Como desabilitar a regra de restrição por credenciais e dispositivos](/v3-33/docs/pt/pam-session-how-to-deactivate-the-restriction-rule-by-credential-and-devices).
:::

---
## Próximos passos:
[Parâmetros do sistema - Controle de acesso](/v3-33/docs/pt/pam-session-system-parameters-access-control)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.