# Como transferir um arquivo em sessões Web Proxy RDP

Neste documento, você encontra um guia passo a passo sobre como realizar a transferência de arquivos uma sessão web proxy RDP no senhasegura.

## Requisitos

* Ter uma sessão Web Proxy RDP disponível.
* Ter o campo Habilitar transferência de arquivos para Download? e Habilitar transferência de arquivos para Upload? habilitados. Para maiores informações de como habilitar este campo, acesse o documento Parâmetros do sistema - Sessão Remota.

---
## Acessar a sessão

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** > **Todas**.
3. Na lista selecione uma sessão que seja do tipo web.
    1. Clique no ícone representado por um **computador**, **Iniciar sessão**.

Ao iniciar uma sessão RDP Web e os parâmetros **Habilitar transferência de arquivos para Download?** e o **Habilitar transferência de arquivos para Upload?** estiverem habilitados, o Web Proxy disponibilizará uma unidade mapeada na sessão de destino, o driver **G (por padrão)** mapeado e denominado por senhasegura.

:::(info) (**Info**)
Caso a letra **G** já esteja sendo utilizada em sua máquina por algum driver, acesse o documento [Como configurar uma sessão remota (proxy)](/v3-33/docs/pt/pam-session-configure-remote-session-proxy) para saber como realizar a troca.
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
## Próximos passos:
[Sessões web](/v3-33/docs/pt/pam-session-web-sessions)
[Como cadastrar um novo parâmetro de sessão web](/v3-33/docs/pt/pam-session-how-to-register-a-new-web-session-parameter)
[Configuração Personalizada - Parâmetro de sessões web](/v3-33/docs/pt/pam-session-about-customize-settings-web-sessions-parameters)

Você ainda tem dúvidas? Entre em contato com a Comunidade senhasegura.