# Como cadastrar uma credencial de aplicação

Ao [cadastrar uma credencial](/v4/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura) é possível determinar se essa credencial vai ter acesso a todo o sistema do dispositivo alvo ou apenas a determinadas aplicações dentro do dispositivo. Para isso, você deve indicar quais aplicações serão acessadas por essa credencial ao cadastrá-la ou editá-la.

## Como editar uma credencial já existente

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. Selecione, no menu lateral, **Credenciais > Todas credenciais**.
3. Na tela de listagem de credenciais, selecione a credencial que será editada. Na coluna de ação, clique no botão **Ações** e selecione **Editar**.
4. Na tela **Cadastro da credencial**, selecione a aba **Configurações de sessão**.
5. Na subseção **Configuração de aplicativo remoto**, marque **Restringir o acesso apenas para aplicativo remoto**.
6. Na opção **Macro de automação (RemoteApp**), clique no ícone representado pelo símbolo de soma.
7. No opção abaixo, na coluna **RemoteApp**, selecione o aplicativo que a credencial terá acesso, por exemplo, **CMD + Command**. Na coluna **Conectividade** selecione o tipo de protocolo de conexão que será utilizado, por exemplo, **RDP**.
    1. Você pode adicionar quantos aplicativos forem necessários.
8. Clique em **Continuar**, e em **Salvar**.

A partir de agora, sempre que essa credencial for usada, ela terá acesso apenas aquela aplicação indicada.

## Como visualizar credenciais por aplicação

Quando uma credencial é cadastrada com acesso restrito a aplicativos remotos, ela será apresentada na seção **Aplicação** da plataforma Segura.

Para visualizar essas credenciais:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. Selecione, no menu lateral, **Credenciais > Aplicação**.

Na página de listagem serão mostradas todas as credenciais com acesso limitado a aplicativos, separadas por dispositivo de acesso.

## Ações possíveis

As credenciais listadas podem realizar ações, sendo a principal o login automático. Isso é possível através do uso da credencial cadastrada previamente. Para realizar o login, busque a sua credencial e clique em **Iniciar Seção**, na coluna **Ações**.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).