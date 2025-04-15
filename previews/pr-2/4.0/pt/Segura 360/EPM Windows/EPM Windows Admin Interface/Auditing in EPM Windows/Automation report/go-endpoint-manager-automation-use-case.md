# Caso de uso automação

Neste artigo você aprenderá sobre um caso de uso de automação: como cadastrar automação RemoteApp para SQL Management Studio para utilizar no EPM Windows.

:::(Warning) (Cuidado)
As automações do RemoteApp só aparecem para o usuário se o usuário fizer parte do grupo de acesso associado a credencial que permite usar o RemoteApp.
:::

* * *

## Passo 1: Cadastrar RemoteApp

1. Na plataforma Segura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **PAM Core.**
2. No menu lateral, selecione **Configurações ➔ Acesso ➔ RemoteApp.**
3. Localize através do campo de busca a automação com o nome “SQL Management Studio - SQL Authentication” e clique em **Filtrar.**
4. Na coluna **Ação** clique no ícone de **Editar**, identificado pelo ícone do lápis e papel.
5. Edite o campo **Caminho do aplicativo** conforme o caminho do seu aplicativo. Este caminho difere conforme a versão instalada.
6. Clique em **Salvar.**

:::(Warning) (Cuidado)
O parâmetro **-P [password]** funciona apenas em versões anteriores a 18.0 SSMS.
:::

* * *

## Passo 2: Criar credencial para adicionar o RemoteApp
### Requisito

* Registrar o [dispositivo](https://docs.Segura.io/v4/docs/pam-devices-management#add-a-new-device) onde a automação será executada.

:::(Info) (Info)
Se a credencial já existir, edite ela adicionando a automação RemoteApp editada anteriormente.
:::

1. Na plataforma Segura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **PAM Core.**
2. Acesse **Credenciais ➔ Todas.**
3. Clique no menu de ações em **+Novo.**
4. Preencha os campos do formulário **Cadastro da credencial.**
    1. Preencha com **Nome do usuário** que acessa o dispositivo.
    2. Selecione qual **Tipo** de senha entre as opções, **Usuário do domínio**, **Administrador local**, ou **Usuário Local.**
    3. **Domínio:** preencha com o domínio do dispositivo caso tenha um.
    4. **Dispositivo:** selecione o dispositivo onde a automação será executada.
    5. **Informação Adicional:** adicione outras informações importantes. 
    6. **Situação:** defina se está credencial estará ativa ou não.
    7. **Senha:** preencha com a senha com que você acessa o dispositivo.
    8. **Tags:** defina tags para ajudar na busca pela credencial.
5. Vá até a aba **Configurações da sessão.**
6. Clique em **Macro de automação (RemoteApp)+.**
7. Adicione a automação que você criou.
8. Clique em **Salvar.**

:::(Info) (Info)
A interação do usuário é bloqueada até terminar de ser executada a automação.
:::

* * *

## Executar automação

1. Acesse a área de trabalho da workstation.
2. Inicie o aplicativo **GO Automation.**
3. Selecione a automação que deseja executar.
4. Clique com o botão direito na automação e depois em **Executar.**
5. Selecione a credencial que será utilizada pelo script da automação.
6. Espere a automação ser executada.

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura.](https://community.Segura.io/)