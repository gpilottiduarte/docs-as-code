# Como baixar um arquivo de conexão local para Putty ou Remote Desktop

É possível utilizar um arquivo local para realizar a conexão SSH via Putty ou uma conexão RDP via Remote Desktop no Windows.

## Como habilitar a opção de baixar arquivos de conexão

Primeiro, é necessário habilitar a opção de realizar uma conexão local. Para isso, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione  **Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema > Global**.
3. Na tela **Global**, selecione a opção **Sessão remota** no submenu à esquerda.
4. Na seção **Geral**, habilite a opção **Habilitar o download para acesso local?**.
5. Clique em **Salvar**.

## Como baixar o arquivo de conexão local

Para realizar o download do arquivo de conexão local, siga os passos abaixo:

1. No canto superior esquerdo, clique em **Menu de produtos**, representado pelos quatro quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas credenciais**.
3. Na listagem de credenciais selecione aquela que você deseja usar para conexão local.
4. Caso seja uma **máquina Linux** a qual você deseja se conectar:
    1. Na coluna **Ações**, clique no botão de mesmo nome, e selecione **Putty** no menu suspenso.
    2. Será feito o download do arquivo de conexão. Este arquivo será do tipo `.bat`, indicando se tratar de um arquivo em lote.
5. Caso seja uma **máquina Windows** a qual você deseja se conectar:
    1. Na coluna **Ações**, clique no botão de mesmo nome, e selecione **Remote Desktop** no menu suspenso.
    2. Será feito o download do arquivo de conexão. Este arquivo estará na extensão `.RDP`, indicando que se trata de um arquivo de conexão do tipo Remote Desktop.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).