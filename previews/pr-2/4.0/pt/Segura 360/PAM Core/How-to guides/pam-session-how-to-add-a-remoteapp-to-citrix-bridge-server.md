# Como adicionar um RemoteApp para o Citrix Bridge Server

Neste documento, você encontra um guia passo a passo sobre como adicionar um RemoteApp para ser utilizado com o Citrix Bridge Server.

## Requisitos

* Endereço da URL do Citrix Store XenApp Services.
* Nome do Citrix Studio Applications.

:::(info) (**Info**)
O nome do aplicativo deve estar como aparece nos aplicativos Citrix Studio. A aplicação Citrix é a que está instalada no servidor Windows que será utilizado.
:::

---
## Cadastrar o RemoteApp para o Citrix

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Configurações** > **Acesso** > **RemoteApp**.
3. Na tela do relatório, no canto superior direito clique no ícone de três pontos verticais e selecione **+ Novo**.
4. Na janela **Cadastro de remoteApp** preencha os campos:
    1. **Nome***: escolha um nome para o cadastro deste RemoteApp.
    2. **Tipo***: escolha o tipo *Simulação de usuário*.
    3. **Ativo**: selecione *Sim*.
    4. **Caminho do aplicativo**: digite o endereço da URL do Citrix XenApp Services e o nome do Citrix Studio Applications separados por uma barra vertical, conforme o exemplo: `https://citrixstore/Citrix/store-name/PNAgent/config.xml|Notepad`
    5. **Parâmetros**: se desejar coloque os parâmetros.
    6. **Macro***: configure a macro com o script a ser executado.
5. Clique em **Salvar**.

Após esses passos é precisa cadastrar a credencial para ser utilizada com este RemoteApp.

---
### Próximos passos
[Como cadastrar uma credencial do Citrix Bridge Server](/v4/docs/pt/pam-session-how-to-add-citrix-bridge-server-credential)
[Como acessar um desktop ou aplicativo Citrix](/v4/docs/pt/pam-session-how-to-access-a-citrix-desktop-or-application)

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.