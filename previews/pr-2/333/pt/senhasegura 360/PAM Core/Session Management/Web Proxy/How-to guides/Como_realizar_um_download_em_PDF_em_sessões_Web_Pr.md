# Como realizar um download em PDF em sessões Web Proxy HTTP/HTTPS

Neste documento, você encontra um guia passo a passo sobre como realizar o download em PDF em uma sessão HTTP/HTTPS no Web Proxy.

## Requisitos

* Ter uma sessão web cadastrada e disponível.
* Ter o campo **Habilitar transferência de arquivos para Download?** habilitado. Para maiores informações de como habilitar este campo, acesse o documento [Parâmetros do sistema - Sessão Remota](/v3-33/docs/pt/pam-session-proxy-settings).

---
## Acessar a sessão
Interface da Web senhasegura pode iniciar sessões de proxy de diferentes páginas:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas**.

ou

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Web**.

ou

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Desktop**.
2. No menu lateral, selecione **Página Inicial**.
3. Na seção **Credenciais mais utilizadas**, selecione na lista a sessão a ser acessada.

Seja qual for o caminho, escolha na lista a sessão web que deseja acessar.

1. Clique no ícone de **computador**, **Iniciar sessão**.
2. Acesse a página que deseja realizar o download.
3. Clique com o botão direito do mouse.
4. Escolha a opção **Save as PDF**.
5. Salve no diretório **Home** e mantenha o mesmo nome gerado.

:::(warning) (**Atenção**)
Caso o nome ou localização do arquivo seja alterada, o usuário não conseguirá realizar o download do PDF salvo.
:::
Um banner com o aviso de conclusão de download será exibido no canto inferior direito da tela. Você poderá abrir o arquivo **PDF** através do link de atalho no banner ou acessando a pasta onde o arquivo foi salvo.

---
### Próximos passos:
[Sessões web](/v3-33/docs/pt/pam-session-web-sessions)
[Como cadastrar um novo parâmetro de sessão web](/v3-33/docs/pt/pam-session-how-to-register-a-new-web-session-parameter)
[Configuração Personalizada - Parâmetro de sessões web](/v3-33/docs/pt/pam-session-about-customize-settings-web-sessions-parameters)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.