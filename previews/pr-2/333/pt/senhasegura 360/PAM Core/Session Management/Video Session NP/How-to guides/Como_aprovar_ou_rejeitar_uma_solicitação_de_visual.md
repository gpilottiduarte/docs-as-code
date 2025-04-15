# Como aprovar ou rejeitar uma solicitação de visualização de vídeo de sessão

Neste documento, você encontra um guia passo a passo sobre como aprovar ou rejeitar uma solicitação de visualização de vídeo de sessão remota feita pelo usuário.

## Requisitos

* Para que o aprovador tenha acesso à tela de aprovação é necessário que ele tenha o perfil mínimo de PAM Operator, PAM Administrator ou System Administrator.

---
## Como cadastrar um aprovador
Para adicionar um aprovador, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, indicado pelos  nove quadrados, e selecione **Configuração**.
2. No menu lateral, selecione **Parâmetros do sistema** > **Aprovadores**.
3. Clique no ícone **Exibir Ações**, identificado pelo três pontos verticais, e selecione a opção **+ Novo**.
4. Adicione as seguintes informações:
    1. Em **Módulo**, selecione o módulo PAM que o usuário aprovador terá acesso.
    2. Em **Aprovadores**, selecione os usuários aprovadores que deseja cadastrar.
5. Clique em **Salvar**.

## Aprovar uma solicitação
Para que exista a necessidade de aprovação para a visualização dos vídeos de sessão no sistema do senhasegura, acesse  **Configurações** > **Parâmetros do sistema** > **Sessão remota**, marque a opção **Ativar fluxo de aprovação para vídeos da sessão?*** como **Sim**.

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >  **Solicitações de vídeo de sessão** > **Minhas aprovações de vídeo de sessão**.
3. Na lista, escolha a sessão desejada e, na coluna **Ação**, clique no ícone em **Aprovar**, representado pelo símbolo de check.
4. Na caixa de confirmação, clique em **Sim** para realizar a ação.

Uma mensagem de confirmação da aprovação será exibida pelo sistema. Agora o usuário terá acesso a visualização do vídeo.

## Rejeitar uma solicitação

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >  **Solicitações de vídeo de sessão** > **Minhas aprovações de vídeo de sessão**.
3. Na lista, escolha a sessão desejada e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais.
4. No menu suspenso, selecione  **Reprovar**, representado pelo X.
5. Na caixa de confirmação, clique em **Sim** para realizar a ação.

Uma mensagem de confirmação da reprovação será exibida pelo sistema. Agora o usuário **não** terá acesso a visualização do vídeo, contudo uma nova tela de solicitação será exibida, sendo possível solicitar novamente a visualização do vídeo.

Essas duas ações podem ser realizadas também pela tela de **Detalhes da solicitação**, acessada através da coluna **Ação**. Para isso, clique no ícone representado pelos três pontos verticais e clique no ícone de **lupa**. Na janela que se abre, no canto inferior direito, escolha entre as opções **Aprovar** ou **Reprovar**.

---
### Próximos passos:
[Minhas aprovações de vídeos de sessão](/v3-33/docs/pt/pam-session-my-session-video-approvals)
[Solicitações](/v3-33/docs/pt/pam-session-requests-video)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.