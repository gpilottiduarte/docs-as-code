# Como conectar  o aplicativo móvel senhasegura à sua conta

Este tutorial contém um guia passo a passo sobre como conectar o aplicativo móvel **senhasegura** à sua conta.

:::(Info) (Info)
O aplicativo móvel **senhasegura** é compatível com sistemas operacionais Android versão 10 ou mais recentes.
:::

## Requisitos

* senhasegura versão 3.31 ou mais recente.
* URL preenchida na tela do **Orbit Config Manager**.
* Sistema operacional Android versão 10 ou mais recente.
* Autorização para uso do aplicativo definida em **Grid Menu > Sistema > Configurações > Parâmetros do sistema > Parâmetros do sistema > Controle de acesso > Aplicativo móvel**.

:::(Warning) (Cuidado)
Caso a URL não esteja corretamente configurada, a extensão não será capaz de estabelecer a comunicação com o cofre. Para mais informações sobre as configurações do **Orbit Config Manager**, acesse o documento sobre [Como gerenciar a aplicação](/v3-32/docs/pt/orbit-cli-how-to-manage-the-application).
:::

## Instalar o aplicativo senhasegura

Faça o [download do aplicativo móvel **senhasegura** na Google Play Store](https://play.google.com/store/apps/details?id=com.senhasegura&pli=1) e o instale em seu dispositivo móvel.


## Habilitar o aplicativo móvel senhasegura
Antes de conectar o aplicativo à sua conta, é necessário habilitá-lo no senhasegura. Siga os passos abaixo:



1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **+ Integrações > Meus apps**.

:::(Info) (Info)
Você também pode acessar a tela **Meus apps** clicando no seu nome de usuário no canto superior direito do senhasegura. No menu suspenso, clique em **Meus apps**, representado pelo ícone de chave.
:::

3. No canto superior direito da tela **[Meus apps](/v3-32/docs/pt/mysafe-myapps)**, clique em **Exibir ações**, representado pelo ícone de três pontos verticais, e selecione **Nova chave**.
4. Na tela **Meus apps**, preencha as informações:
    1. **Nome***: insira um nome para o aplicativo.
    2. **Data de expiração**: defina uma data e horário de expiração para a chave de autorização. Insira a data no primeiro campo e a hora no segundo campo. Em cada campo, há uma seta para baixo na qual você pode clicar. No primeiro campo, clique na seta para exibir um calendário e, no segundo campo, para exibir uma lista de horários.

    :::(Info) (Info)
    Se você não definir uma data de expiração, a chave de autorização de acesso só expirará se você sair do aplicativo ou revogar manualmente a chave.
    :::
    3. **Tipo de aplicativo***: marque **Aplicativo móvel**.

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::
  
5. Clique em **Salvar**.

## Primeiro acesso ao aplicativo móvel senhasegura

Após habilitar o aplicativo no senhasegura, você pode realizar o primeiro acesso em seu dispositivo móvel. Siga os passo abaixo:

1. Após clicar em **Salvar** na tela **Meus apps** do senhasegura, você visualizará um QR code. Este código é utilizado para estabelecer a conexão entre o aplicativo e o senhasegura.
2. Clique no ícone do aplicativo móvel **senhasegura** na tela do seu dispositivo móvel.

3. Na parte inferior da [tela inicial do aplicativo](/v3-32/docs/pt/senhasegura-mobile-app-initial-screen), clique em **Ler QR code**.
    1. Você verá imediatamente uma janela pop-up solicitando permissão ao aplicativo para usar a câmera do seu dispositivo para ler o QR code. Escolha permitir enquanto usa o aplicativo ou somente desta vez. 

    :::(Info) (Info)
    Ao selecionar **“Somente desta vez”**, esta janela pop-up será exibida novamente todas as vezes que você precisar escanear um novo código.
    :::

    2. Posicione o QR code dentro da área indicada na tela do seu dispositivo móvel. Uma vez detectado, o aplicativo irá gerar uma chave com acesso exclusivo ao endpoint de login, e a leitura do QR code será iniciada automaticamente.




:::(Warning) (Atenção)
Enquanto o QR code estiver na tela da plataforma senhasegura, você terá 1 hora para escaneá-lo. Se o tempo expirar, volte para a tela **Meus apps** e gere uma nova chave seguindo os passos descritos na seção [Habilitar o aplicativo móvel senhasegura](/v3-32/docs/pt/senhasegura-mobile-app-how-to-connect-the-senhasegura-app#habilitar-o-aplicativo-móvel-senhasegura) deste tutorial.

Para evitar uma longa lista de chaves expiradas, você pode revogá-las. Para mais informações, acesse [Como revogar uma chave de autorização de uma aplicação](/v3-32/docs/pt/mysafe-myapps-how-to-revoke-an-authorization-key).
:::

6. Após a leitura do QR code, você receberá um email com um código de ativação de 8 dígitos.

7. Insira o código de ativação de 8 dígitos no campo **Inserir código** na tela do aplicativo móvel **senhasegura**. 



:::(Warning) (Atenção)
Como informado no email, você tem 5 minutos para usar o código de ativação de 8 dígitos. Se necessário, clique em **Reenviar código** na tela do aplicativo móvel para receber um novo código por e-mail.
:::

8. Se o código estiver correto, você será direcionado para a tela **Aprovação pendente** ou para a tela **Termos de serviço**.

    :::(Info) (Info)
    Caso o administrador tenha determinado que o acesso ao aplicativo **senhasegura** necessite de aprovação, aguarde por essa aprovação na tela **Aprovação pendente**. Após a aprovação, você será direcionado para a tela **Termos de serviço**.

    Caso o administrador não tenha determinado a necessidade de aprovação para acesso ao aplicativo, você será direcionado automaticamente para a tela **Termos de serviço**.
    :::
    :::(Info) (Info)
    Você pode visualizar o status de aprovação em **Grid Menu > Sistema > Configurações > Gestão de usuários > Minhas solicitações**. Os status disponíveis são **PENDENTE, APROVADO, REJEITADO, EXPIRADO** e **CANCELADO**.
    :::

9. Assim que a conexão com o senhasegura for estabelecida, você será direcionado para a tela **Termos de serviço** no aplicativo móvel.

:::(Info) (Info)
Após a conexão, as informações sobre a aplicação como *ID, Nome, Tipo, Dispositivo, Versão, Data de criação* e *Data de expiração* podem ser visualizadas em um relatório na tela **Meus apps** do senhasegura.
:::

10. Role para baixo e leia os **Termos de serviço** até o final.
11. Se concordar, clique em **Aceitar**. 
12. Você será direcionado para a tela **Produtos**.

O aplicativo móvel **senhasegura** agora está pronto para uso.

:::(Info) (Info)
Caso seu acesso seja rejeitado, você verá uma mensagem na parte inferior da tela do aplicativo móvel informando sobre a rejeição do acesso. Nesse caso, gere uma nova chave de autorização de acesso.
:::

## Após o primeiro acesso ao aplicativo móvel senhasegura

Enquanto a chave de autorização de acesso ao aplicativo móvel **senhasegura** ainda estiver ativa (não expirada ou revogada), você pode acessar o aplicativo com um simples login. Siga os passos abaixo:

1. Clique no ícone do aplicativo **senhasegura** na tela do seu dispositivo móvel.
2. Na tela **Bem-vindo ao senhasegura**, clique em **Login**.
3. Utilize a autenticação padrão definida pelo seu dispositivo – Biometria, FaceID ou PIN, por exemplo.

:::(Info) (Info)
Por medida de segurança, caso você não tenha logado no aplicativo móvel **senhasegura** nas últimas 24 horas, um novo token de autenticação será enviado para seu email. Além disso, independente de ter feito login nas últimas 24 horas, um token de autenticação também será enviado semanalmente para seu email. Nesses casos, ao tentar fazer o login, você será direcionado para a tela em que deverá inserir o token recebido por email. 
:::
5. Assim que a autenticação for concluída, você será direcionado para a tela **Produtos**.


O aplicativo móvel **senhasegura** já está pronto para uso.   

:::(Info) (Info)
Caso a chave de autorização do aplicativo tenha sido revogada ou expirada, siga as etapas descritas nas seções [Habilitar o aplicativo senhasegura](/v3-32/docs/pt/senhasegura-mobile-app-how-to-connect-the-senhasegura-app#habilitar-o-aplicativo-móvel-senhasegura) e, em seguida, [Primeiro acesso ao aplicativo senhasegur](/v3-32/docs/pt/senhasegura-mobile-app-how-to-connect-the-senhasegura-app#primeiro-acesso-ao-aplicativo-senhasegura)a deste documento.
:::

:::(Warning) (Atenção)
O uso do aplicativo pode ser removido pelo usuário ou pelos administradores do sistema no senhasegura através do **Grid Menu > Sistema > Configurações > Parâmetros do sistema > Parâmetros do sistema > Controle de acesso > Aplicativo móvel**.
:::

## Próximos passos

[Como gerenciar senhas no MySafe através do aplicativo móvel senhasegura](/v3-32/docs/pt/senhasegura-mobile-app-how-to-manage-passwords-in-mysafe)

[Como gerenciar anotações no MySafe através do aplicativo móvel senhasegura](/v3-32/docs/pt/senhasegura-mobile-app-how-to-manage-notes-in-mysafe)


* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).



