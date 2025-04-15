# Como gerenciar uma sessão remota

Neste documento você encontra um guia passo a passo sobre quais são e como utilizar as funções na tela **Sessões Remotas** para gerenciar a sessão que foi realizada.

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >  **Sessões remotas**.
3. Na lista, escolha a sessão desejada e, na coluna **Ação**, clique no ícone correspondente para realizar a ação desejada.

### Live Stream
:::(warning) (**Atenção**)
A partir da versão 3.33 o ícone para visualização do Live Stream (ícone de olho) da sessão só estará disponível para os papéis PAM Administrator, PAM Auditor e System Administrator que possuírem a permissão **PAM.SessionManagement.Livestream**.
:::

1. Clique em ***Live Stream***, representado pelo ícone de **olho**.
    1. Uma janela com o navegador será aberta e será possível assistir a sessão em andamento em tempo real.
    :::(info) (**Info**)
    Durante o andamento da sessão é possível bloquear a interatividade do usuário. Para saber como realizar esta ação acesse o documento [Como bloquear um usuário durante uma sessão](/v3-33/docs/pt/pam-session-how-to-block-a-user-during-a-session).
    :::

### Derrubar sessão

1. Clique em **Derrubar sessão**, representado pelo ícone de **liga/desliga**.
    1. Uma caixa de confirmação será aberta, clique em **Sim** para confirmar a ação.
    2. A janela **Interromper sessão** será aberta com a mensagem de sucesso, confirmando a interrupção.
    :::(info) (**Info**)
    Ao ter clicado em Sim e confirmado a ação a mensagem **“Você foi desconectado”** será exibida pela sessão para o usuário.
    :::

### Logs da Sessão

1. Clique em **Logs da sessão**, representado pelo símbolo de barras horizontais.
    1. Abre a janela **Logs da Sessão** com as informações sobre a sessão.
    :::(info) (**Info**)
    Esta funcionalidade só fica disponível para sessões já finalizadas.
    :::

### Vídeo da Sessão
:::(warning) (**Atenção**)
A partir da versão 3.33 o ícone para visualização do vídeo gravado (ícone de play) da sessão só estará disponível para os papéis PAM Administrator, PAM Auditor e System Administrator que possuírem a permissão P**AM.SessionManagement.Recording**.
:::

1. Clique em **Vídeo da sessão**, representado pelo ícone de **play**.
    1. Abre a janela **Vídeo da Sessão** com informações sobre a sessão e o botão para visualizar a gravação da sessão ou realizar o download do vídeo.
    :::(info) (**Info**)
    Esta funcionalidade só fica disponível para sessões já finalizadas.
    :::

### Impedir expurgo

1. Clique em **Impedir expurgo**, representado pelo símbolo de proibido.
    1. Abre a janela **Impedir expurgo da sessão** para que seja inserido um texto com a descrição/motivo para que o expurgo não seja possível nesta sessão.
    2. Clique em **Impedir expurgo**, para enviar a justificativa.

### Configurar auditores

1. Clique em **Configurar auditores**, representado pelo ícone de **chave**.
    1. Abre a janela **Configuração dos auditores da sessão** para que seja adicionado os usuários que serão auditores desta sessão em específico.
    2. Clique no ícone de **adição** ao lado do texto **Adicionar um novo auditor**.
        1. No dropdown menu que se abre selecione a opção desejada para que seja o auditor.
    3. Para adicionar mais clique novamente no ícone de **adição**.
    4. Clique em **Salvar**.

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.