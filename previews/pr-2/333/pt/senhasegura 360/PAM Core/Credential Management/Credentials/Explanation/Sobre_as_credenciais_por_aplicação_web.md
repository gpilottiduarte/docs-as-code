# Sobre as credenciais por aplicação web

As credenciais no senhasegura são essenciais para acessar qualquer tipo de módulo ou serviço. Para isso, você pode cadastrar diversos tipos de credenciais. 

Para uma credencial aparecer na listagem de **Credenciais por aplicação web**, o dispositivo ao qual ela for atrelada deve ser um serviço web, tal qual Amazon AWS (`aws.amazon.com`) ou mesmo um site pessoal.  

Para saber como cadastrar uma credencial, acesse a documentação [Como configurar uma credencial no senhasegura](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura). E para cadastrar um dispositivo, acesse a documentação sobre [Como configurar um dispositivo](/v3-33/docs/pt/pam-devices-management).

Abaixo, trataremos sobre as credenciais usadas para aplicações web.

## Credenciais por aplicações web

Uma vez cadastrado o dispositivo e sua credencial atrelada a esse dispositivo, você poderá acessar a página de gerenciamento gerenciamento da mesma através do seguinte caminho:

1. No canto superior esquerdo, clique no **Grid Menu**, identificado pela caixa de nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** > **Web**.
3. Uma página listando todas as credenciais para aplicações web será carregada.

## Ações possíveis

As credenciais listadas podem realizar ações, sendo a principal, o login automático em uma aplicação web. Isso é possível através do uso da credencial cadastrada previamente. Contudo, a conexão estará disponível apenas para as credenciais que apresentarem o ícone do computador na coluna **Ação**. Para se conectar utilizando essa credencial, basta clicar no ícone de **Iniciar Seção**, representado pelo ícone do computador, e aguardar o carregamento da aplicação web, que será aberta em uma nova janela.

:::(Warning) (Importante)
Perceba que, para realizar o acesso em aplicações web, é necessário cadastrar os parâmetros de sessão web indicando como a conexão ocorrerá para que o senhasegura seja capaz de realizar essa autenticação. Para saber como fazer esse cadastro, acesse a documentação sobre [Parâmetros para sessões em aplicações web](/v3-33/docs/pt/pam-session-web-sessions).
:::