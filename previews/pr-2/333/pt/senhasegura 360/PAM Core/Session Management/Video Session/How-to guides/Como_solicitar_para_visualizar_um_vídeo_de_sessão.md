# Como solicitar para visualizar um vídeo de sessão

Neste documento você encontra um guia passo a passo sobre como solicitar a visualização de vídeo de uma sessão remota, seja o vídeo via *live stream* ou a gravação.

Para usuários que não possuem permissão de PAM Operator no senhasegura, será necessário fornecer uma justificativa para acessar um vídeo da sessão. Este processo precisará de aprovação e então será liberado para visualização.


:::(info) (**Info**)
Esta solicitação se faz necessária quando o campo **Ativar fluxo de aprovação para vídeos da sessão?** está habilitado.
:::

## Solicitar visualização
:::(warning) (**Atenção**)
A partir da versão 3.33 o ícone para visualização do vídeo gravado (ícone de play) ou Live Stream (ícone de olho) da sessão só estará disponível para os papéis PAM Administrator, PAM Auditor e System Administrator que possuírem a permissão **PAM.SessionManagement.Recording** para gravação e **PAM.SessionManagement.Livestream** para Live Stream.
:::

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >  **Sessões remotas**.
3. Na lista, escolha a sessão desejada e, na coluna **Ação**, clique no ícone de Vídeo da sessão, representado pelo símbolo de **play**.
4. Na janela de **Justificativa**, preencha os campos necessários:
    1. Em **Justificativa**, adicione uma justificativa pelo qual deseja visualizar o vídeo da sessão.
    2. Em **Motivo**, selecione o motivo pelo qual deseja visualizar o vídeo da sessão.
    3. Em **Código de governança**, adicione o código gerado no seu sistema de tickets, caso seja utilizado pela empresa.
    4. Em **Início acesso**, adicione data de início do acesso.
    5. Em **Fim acesso**, adicione o período de validade do acesso.
5. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema e a solicitação será enviada para o usuário aprovador. A visualização só estará disponível quando o aprovador aceitar a solicitação.

:::(warning) (**Atenção**)
O usuário **não** pode aprovar a própria solicitação.
:::

---
### Próximos passos:
[Minhas solicitações de vídeo de sessão](/v3-33/docs/pt/pam-session-my-session-video-requests-2)
[Solicitações](/v3-33/docs/pt/pam-session-requests-video-2)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.