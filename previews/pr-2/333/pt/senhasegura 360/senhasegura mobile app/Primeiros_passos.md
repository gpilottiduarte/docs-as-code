# Primeiros passos

Faça o download do aplicativo móvel **senhasegura** na Google Play Store através do link: [aplicativo móvel senhasegura](https://play.google.com/store/apps/details?id=com.senhasegura&pli=1)

***
Neste documento, você encontra um guia passo a passo sobre como começar a utilizar o aplicativo móvel **senhasegura**.

:::(Info) (Info)
Atualmente, o aplicativo móvel senhasegura é integrado apenas ao cofre do **MySafe**. 
:::


## Requisitos

- senhasegura a partir da versão 3.31.
- Sistema operacional Android a partir da versão 10.
- URL da aplicação preenchida pelo administrador na tela do **Orbit Config Manager**.
- Autorização para uso do aplicativo definida pelo administrador em **Grid Menu > SISTEMA > Configurações > Parâmetros do sistema > Controle de acesso > Aplicativo móvel**.
- Email associado ao seu usuário senhasegura.

:::(Warning) (Atenção)

* Caso a URL da aplicação não esteja corretamente configurada, o aplicativo não será capaz de se comunicar com o cofre. Acesse o documento [Como controlar a aplicação > Dados gerais da aplicação](/v3-33/docs/pt/orbit-web-how-to-control-the-application#dados-gerais-da-aplicação) para mais informações sobre as configurações do **Orbit Config Manager**.

<br>
* Para que o aplicativo se comunique com o cofre, o administrador também deverá inserir a URL base em **MySafe > Admin > Opções de compartilhamento > Url base**. 
    * Caso o aplicativo esteja se comunicando com um cofre do **MySafe** em cenário de multi-tenant, insira a URL do tenant sem o *https://*.

:::



## Instalar o aplicativo senhasegura

Para instalar o aplicativo no seu dispositivo móvel, faça o download na Google Play Store através do link:  [aplicativo móvel senhasegura](https://play.google.com/store/apps/details?id=com.senhasegura&pli=1) e instale-o no seu dispositivo móvel.

## Habilitar o aplicativo móvel senhasegura

Antes de conectar o aplicativo à sua conta, é necessário habilitá-lo no senhasegura. Siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **+ Integrações > Meus apps**.

:::(Info) (Info)
Você também pode acessar a página **Meus apps** clicando no seu nome de usuário no canto superior direito de qualquer tela do senhasegura. No menu suspenso, clique em **Meus apps**, representado pelo ícone de chave.
:::


3. No canto superior direito da página **Meus apps**, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione **Nova chave**.
4. Na janela **Meus apps**, preencha:
   - **Nome***: insira um nome para o aplicativo.
   - **Data de expiração**: no primeiro campo, insira a data de expiração da chave e no segundo campo, insira a hora. Em cada campo, há uma seta para baixo na qual você pode clicar. No primeiro campo, clicar na seta exibirá um calendário e, no segundo campo, você verá uma lista de horários.

    :::(Info) (Info)
    Se você não definir uma data de expiração, a chave de autorização expirará somente se você sair do aplicativo ou revogar manualmente a chave.
    :::
	
   - **Tipo de aplicativo***: marque **Aplicativo móvel**.

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::


5. Clique em **Salvar**.

## Primeiro acesso ao aplicativo móvel senhasegura

Após habilitar o aplicativo no senhasegura, você pode realizar o primeiro acesso em seu dispositivo móvel. Siga os passos abaixo:

1. Após clicar em **Salvar** na tela **Meus apps** do senhasegura, você visualizará um QR code e um código por escrito. Estes códigos estabelecem a conexão entre o aplicativo e o senhasegura.
2. Clique no ícone do aplicativo móvel **senhasegura** na tela do seu dispositivo móvel.
3. Na parte inferior da tela inicial do aplicativo, clique em **Ler QR code**.
4. Conceda permissão para que o aplicativo use a câmera do seu dispositivo móvel.
5. Posicione o QR code dentro da área indicada na tela do seu dispositivo móvel. Uma vez detectado, o aplicativo irá gerar uma chave com acesso exclusivo ao endpoint de login, e a leitura do QR code será iniciada automaticamente.

6. Opcionalmente, se estiver enfrentando problemas com a câmera do seu dispositivo, clique no link **Não consegue ler? Clique aqui para digitar o código**.
    1. Você será imediatamente direcionado para uma tela na qual poderá colar manualmente o código copiado da tela **Meus apps** do **MySafe**.
    2. Assim que o código for detectado, o aplicativo gerará uma chave com acesso exclusivo ao endpoint de login, e a leitura do código será iniciada automaticamente.


:::(Warning) (Atenção)
* Enquanto os códigos estiverem na tela do senhasegura, você terá 1 hora para utilizá-los. Se o tempo expirar, volte para a tela **Meus apps** e gere uma nova chave seguindo os passos descritos na seção [Habilitar o aplicativo móvel senhasegura](/v3-33/docs/pt/senhasegura-mobile-app-first-steps#habilitar-o-aplicativo-móvel-senhasegura) deste documento.

<br>
* Para evitar uma longa lista de chaves expiradas, você pode revogá-las. Acesse [Como revogar uma chave de autorização de uma aplicação](/v3-33/docs/pt/mysafe-myapps-how-to-revoke-an-authorization-key), para mais informações.

:::

6. Após a leitura do QR code ou código manual, você receberá um email com um código de ativação de 8 dígitos.
7. Insira o código de ativação de 8 dígitos no campo **Inserir código** na tela do aplicativo móvel **senhasegura**. Se o código estiver correto, você será direcionado automaticamente para a tela **Aprovação pendente** ou **Termos de serviço**.

:::(Warning) (Atenção)
Como informado no email, você tem 5 minutos para usar o código de ativação de 8 dígitos.
:::

:::(Info) (Info)
A tela **Aprovação pendente** aparecerá apenas se o administrador do **MySafe** tiver configurado o parâmetro **Solicitar aprovação de dispositivo*** como **Sim**.
:::

8. Aguarde o aplicativo enviar os dados do dispositivo para o senhasegura e, se necessário, o administrador aprovar seu acesso.

:::(Info) (Info)
* As informações sobre a aplicação como *ID, Nome, Tipo, Dispositivo, Versão, Data de criação* e *Data de expiração* podem ser visualizadas em um relatório na tela **Meus apps** do **MySafe**.
:::

10. Role para baixo e leia os **Termos de serviço** até o final.
11. Se concordar, clique em **Aceitar**.
12. Você será direcionado para a tela **Produtos**.

O aplicativo móvel **senhasegura** agora está pronto para uso.

:::(Info) (Info)
Caso seu acesso seja rejeitado, você verá uma mensagem na parte inferior da tela do aplicativo móvel informando sobre a rejeição do acesso. Nesse caso, entre em contato com o administrador da plataforma da sua empresa.
:::


## Próximos acessos ao aplicativo móvel senhasegura

Enquanto a chave de autorização do aplicativo móvel **senhasegura** ainda estiver ativa (não expirada ou revogada), você pode acessar o aplicativo com um simples login. Siga os passos abaixo:

1. Clique no ícone do aplicativo **senhasegura** na tela do seu dispositivo móvel.
2. Na tela **Bem-vindo ao senhasegura**, clique em **Login**.
3. Utilize a autenticação padrão definida pelo seu dispositivo – *Biometria, FaceID* ou *PIN*, por exemplo.

 :::(Info) (Info)
Por medida de segurança, caso você não tenha logado no aplicativo móvel senhasegura nas últimas 24 horas, um novo token de autenticação será enviado para seu email. Além disso, independente de ter feito login nas últimas 24 horas, um token de autenticação também será enviado semanalmente para seu email. Nesses casos, ao tentar fazer o login, você será direcionado para a tela em que deverá inserir o token recebido por email.
:::

5. Assim que a autenticação for concluída, você será direcionado para a tela **Produtos**.

O aplicativo móvel **senhasegura** já está pronto para uso.

:::(Info) (Info)
Caso a chave de autorização do aplicativo tenha sido revogada ou expirada, siga as etapas descritas nas seções [Habilitar o aplicativo senhasegura](/v3-33/docs/pt/senhasegura-mobile-app-first-steps#habilitar-o-aplicativo-móvel-senhasegura) e, em seguida, [Primeiro acesso ao aplicativo senhasegura](/v3-33/docs/pt/senhasegura-mobile-app-first-steps#primeiro-acesso-ao-aplicativo-móvel-senhasegura) deste documento.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
