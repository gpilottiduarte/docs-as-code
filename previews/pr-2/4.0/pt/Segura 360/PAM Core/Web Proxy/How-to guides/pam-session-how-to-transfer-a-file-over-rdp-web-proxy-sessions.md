# Como transferir um arquivo em sessões Web Proxy RDP

Este documento fornece informações sobre o passo a passo para realizar a transferência de arquivos uma sessão web proxy RDP no Segura.

## Requisitos

* Ter uma sessão Web Proxy RDP disponível.
* Ter o campo Habilitar transferência de arquivos para Download? e Habilitar transferência de arquivos para Upload? habilitados. Para maiores informações de como habilitar este campo, acesse o documento Parâmetros do sistema - Sessão Remota.

---
## Acessar a sessão

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** > **Todas credenciais**.
3. Na lista selecione uma sessão que seja do tipo web.
    1. Clique em **Iniciar sessão**.

Ao iniciar uma sessão RDP Web e os parâmetros **Habilitar transferência de arquivos para Download?** e o **Habilitar transferência de arquivos para Upload?** estiverem habilitados, o Web Proxy disponibilizará uma unidade mapeada na sessão de destino, o driver **G (por padrão)** mapeado e denominado por Segura.

:::(info) (**Info**)
Caso a letra **G** já esteja sendo utilizada em sua máquina por algum driver, acesse o documento [Como configurar uma sessão remota (proxy)](/v4/docs/pt/pam-session-configure-remote-session-proxy) para saber como realizar a troca.
:::

Por meio desse drive mapeado, o usuário terá acesso aos arquivos carregados no destino e transferirá os arquivos do dispositivo conectado para download na estação de trabalho.

### Para realizar o upload

1. Arraste um arquivo da estação de trabalho de origem para a janela do navegador que hospeda a sessão.
2. Aparecerá uma barra de progresso para esse upload no canto inferior direito da sessão.
3. Ao final da transferência, este arquivo estará disponível na pasta raiz do **driver G**.

### Para realizar o download

1. Copie um arquivo do dispositivo alvo para a pasta `G:\Download`.
2. Aparecerá uma janela de download no canto inferior direito do navegador e uma mensagem será exibida na janela quando o arquivo for transferido.

---
Você ainda tem dúvidas? Entre em contato com a Comunidade Segura.