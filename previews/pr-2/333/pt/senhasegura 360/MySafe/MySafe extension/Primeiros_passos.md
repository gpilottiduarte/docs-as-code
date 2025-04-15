# Primeiros passos

Para garantir a integração correta das senhas e anotações armazenadas no **MySafe** e acessíveis ao seu usuário, você deve primeiro instalar a extensão e depois habilitá-la no **senhasegura**. Neste documento, você encontra um guia passo a passo sobre como realizar essas tarefas.

:::(info) (Info)
Atualmente, o suporte para a extensão está limitado aos navegadores Google Chrome, Opera, Brave e Microsoft Edge. Suporte para outros navegadores está previsto para versões futuras.
:::

:::(warning) (Atenção)
Se o servidor **senhasegura** estiver usando um certificado autoassinado, você deve iniciar o navegador com a flag `chrome.exe --ignore-certificate-errors`. Certifique-se de fechar o navegador antes de inserir a flag.
:::

## Requisitos

- **senhasegura** versão 3.30 ou mais recente.
- URL da aplicação preenchida pelo administrador na tela **Orbit Config Manager**. Acesse o documento sobre **Como controlar a aplicação > Dados gerais da aplicação** para mais informações.
- URL da aplicação preenchida pelo administrador em **MySafe > Admin > Opções de Compartilhamento > URL Base** sem o `https://`. Acesse o documento **Como configurar o MySafe** para mais informações.

    :::(warning) (Atenção)
    Se o aplicativo estiver se comunicando com um cofre **MySafe** em um ambiente multi-tenant, você deve inserir a URL do tenant sem o `https://` em **MySafe > Admin > Opções de Compartilhamento > URL Base**.
    **Exemplo**: `teste.mt4.dev`
    :::

***
## Instalar a extensão

Para instalar a extensão em seu navegador, siga os passos abaixo:

1. Baixe a extensão na Google Chrome Web Store usando o link [senhasegura MySafe - webstore](https://chromewebstore.google.com/detail/senhasegura-mysafe/fjbkdjfgiikcecefpbbijmhfnbijjacc).
::: (info) (Info)
Todos os navegadores homologados podem obter a extensão através da Google Chrome Web Store.
:::
2. Clique em **Adicionar ao Chrome** no canto superior direito da tela para instalar a extensão e, em seguida, fixe-a na barra de ferramentas do seu navegador.

## Habilitar a extensão

Depois de instalar a extensão, você precisará habilitá-la no **senhasegura** para gerenciar efetivamente as senhas e anotações disponíveis no **MySafe**. Para habilitar a extensão, siga os passos abaixo:

1. No **senhasegura**, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **+ Integrações > Meus apps**.
::: (info) (Info)
Você também pode acessar a página **Meus apps** clicando no seu nome de usuário no canto superior direito do **senhasegura**. No menu suspenso, clique em **Meus apps**, representado pelo ícone de chave.
:::
3. No canto superior direito, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **Nova chave**.
4. Na janela **Meus apps**, preencha:
   - **Nome\***: insira um nome para o aplicativo.
   - **Data de expiração**: no primeiro campo, insira manualmente a data de expiração para a chave de autorização ou clique na seta para baixo para selecionar as datas a partir de um calendário. No segundo campo, insira manualmente o horário de expiração ou clique na seta para baixo para selecionar um horário a partir de uma lista de horários.
    ::: (info) (Info)
    Se você não definir uma data e hora de expiração, a chave expirará apenas se você sair do aplicativo ou revogar a chave manualmente.
    :::
     - **Tipo da aplicação\***: marque **Extensão**.
::: (info) (Info)
Os itens com asterisco são obrigatórios.
:::
5. Clique em **Salvar**.
6. Na tela **Meus apps**, você verá um código QR e um código que pode ser inserido manualmente.
::: (warning) (Atenção)
Como a chave de autorização gerada é para uso único, você não poderá visualizá-la mais de uma vez. Em caso de perda ou qualquer outro problema, recomendamos que você revogue a chave e gere uma nova. Para mais informações, acesse os documentos sobre [Como revogar uma chave de autorização para uma aplicação](/v3-33/docs/pt/mysafe-myapps-how-to-revoke-an-authorization-key) e [Como gerar uma chave de autorização para uma aplicação](/v3-33/docs/pt/mysafe-myapps-how-to-generate-an-authorization-key).
:::
7. Clique no ícone da extensão **MySafe** na barra de ferramentas do seu navegador para abri-la e selecione **Ler QR code da página**. Alternativamente, você pode copiar manualmente o código abaixo do QR code na tela **Meus apps** e colá-lo no campo **Código de ativação** da extensão. Clique no ícone de olho para visualizar o código inserido.
8. Na tela da extensão **MySafe**, clique em **ENVIAR**.
9. Após o código ser lido, você receberá um e-mail com um código de ativação de 8 dígitos.
10. Insira o código de ativação de 8 dígitos no campo indicado na tela da extensão **MySafe**.
11. Clique em **ENVIAR**.

::: (warning) (Atenção)
Como informado no e-mail, você tem 5 minutos para usar o código de ativação de 8 dígitos. Se necessário, clique em **Reenviar código** na tela da extensão **MySafe** para receber um novo código por e-mail.
:::
A extensão **MySafe** está pronta para uso.

---
Você ainda tem dúvidas? Entre em contato com a  [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.