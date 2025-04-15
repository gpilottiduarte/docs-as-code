# Como transferir arquivos entre sessões Web HTTP/HTTPS

Neste documento, você encontra um guia passo a passo sobre como realizar a transferência de arquivos entre sessões Web HTTP/HTTPS.

### Requisitos

* Ter sessões HTTP/HTTPS criadas. Para saber mais, acesse a documentação de [criação de dispositivos](/v3-33/docs/pt/pam-devices-management).
* Ter uma credencial com acesso às sessões HTTP/HTTPS. Para saber mais, acesse o documento de [criação de credenciais](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura).

***

## Transferir um arquivo

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas**. 
3. Na lista de credenciais presente na página, vá até a sessão que você deseja.
4. Clique no ícone representado pelo **computador (Iniciar sessão)**.
5. Dentro da sessão iniciada, clique para fazer o download de algum arquivo durante o acesso.
    1. Alternativamente, clique com o botão direito do mouse no arquivo que deseja salvar e clique em **Salvar** ou **Salvar como PDF**.
6. Selecione a pasta **Downloads**. Salve o arquivo nesta pasta para que possa ficar disponível para outra sessão HTTP/HTTPS.
    :::(warning) (**Cuidado**)
    Ao salvar certifique-se de que está salvando o arquivo na pasta **Downloads**. Se o arquivo for salvo na pasta Home ou outra pasta, ele não ficará disponível para a transferência entre as sessões.
    :::
7. Renomeie o arquivo caso necessário.
8. Clique em **Salvar**. Uma mensagem irá aparecer no canto inferior direito, indicando a transferência do arquivo.
9. Encerre a sessão.
10. O arquivo esta disponível na pasta **Download** para ser acessado por outra sessão HTTP/HTTPS.

:::(info) (**Info**)
O arquivo salvo fica disponível na pasta por **2 (dois) dias**. Após esse período ele será excluído automaticamente.
:::
***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.