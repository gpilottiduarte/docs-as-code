# Como habilitar a extensão MySafe

Este tutorial apresenta um passo a passo sobre como habilitar a extensão **MySafe**.

:::(Info) (Info)
Atualmente, o suporte à extensão está limitado aos navegadores Google Chrome, Opera, Brave e Microsoft Edge. A homologação de outros navegadores está prevista para futuras versões.

:::

:::(Warning) (Cuidado)
Caso o servidor do senhasegura utilize um certificado auto assinado, é necessário iniciar o navegador com a flag `chrome.exe --ignore-certificate-errors`.
Certifique-se de fechar o navegador antes de inserir a flag. 

:::

## Requisitos

* Versão senhasegura 3.30 ou mais recente.

* URL preenchida na tela **Orbit Config Manager**.
    

    :::(Warning) (Cuidado)
    Caso a URL não esteja corretamente configurada, a extensão não será capaz de estabelecer a comunicação com o cofre. Para mais informações sobre as configurações do **Orbit Config Manager**, acesse o documento sobre [Como gerenciar a aplicação](https://docs.senhasegura.io/v3-32/docs/pt/orbit-cli-how-to-manage-the-application).
    :::
    


## Instalar a extensão

1. Faça o download da extensão na Google Chrome Store através do link a seguir: [senhasegura MySafe - webstore](https://chromewebstore.google.com/detail/senhasegura-mysafe/fjbkdjfgiikcecefpbbijmhfnbijjacc)
2. No canto superior esquerdo da tela, clique em **Add to Chrome** para fixar a extensão na barra do seu navegador.


## Habilitar a extensão
Para habilitar a extensão **MySafe**, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**. 
2. No menu lateral, selecione **+ Integrações > Meus apps**.

    :::(Info) (Info)
    Você também pode acessar a página **Meus apps** ao clicar no seu nome de usuário no canto superior direito da tela. No menu suspenso, clique em **Meus apps**, representado pelo ícone de chave. 
    :::
4. No canto superior direito, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **Nova chave**.
5. Na janela **Meus apps**, preencha as informações:
    1. **Nome***: insira um nome para a aplicação.
    2. **Data de expiração**:  no primeiro campo, insira a data de expiração da chave e no segundo campo, insira a hora. Em cada campo, há uma seta para baixo na qual você pode clicar. No primeiro campo, clicar na seta exibirá um calendário e, no segundo campo, você verá uma lista de horários.
    
    :::(Info) (Info)
    Caso esses campos não sejam preenchidos, a chave só irá expirar caso você saia da aplicação ou revogue a chave manualmente.
    :::

    c.     **Tipo da aplicação***: marque **Extensão**.

1. Clique em **Salvar** .
7. Na tela **Meus apps**, você verá um QR code e um código digitável. 


    
    :::(Warning) (Cuidado)
      A chave de autorização gerada é de uso único. Sendo assim, você não poderá visualizá-la mais de uma vez. 
      Em caso de perda ou qualquer outro problema, você deverá revogar a chave e gerar outra. Para mais informações, acesse [Como revogar uma chave de autorização para uma aplicação](/v3-32/docs/pt/mysafe-myapps-how-to-revoke-an-authorization-key).

1. Abra a extensão, selecione a opção **Ler QR code da página** ou copie manualmente o código abaixo do QR code e o cole no campo **Código de ativação**. 
2. Clique em **Enviar**.
3. Após o código ter lido, você receberá um email com um código de ativação de 8 dígitos.
4. Insira esse código de ativação de 8 dígitos no campo indicado na tela da extensão **MySafe**.
5. Clique em **ENVIAR**.
    
    :::(Warning) (Atenção)
    Como informado no email, você tem 5 minutos para usar o código de ativação de 8 dígitos. Se necessário, clique em **Reenviar código** na tela da extensão **MySafe** para receber um novo código por email.
    :::



A extensão **MySafe** está pronta para uso.

## Próximos passos
[Como adicionar uma senha através da extensão MySafe](/v3-32/docs/pt/mysafe-extension-add-password)

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.
