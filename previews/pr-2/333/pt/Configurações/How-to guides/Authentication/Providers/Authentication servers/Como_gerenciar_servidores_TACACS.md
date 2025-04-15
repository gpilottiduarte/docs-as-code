# Como gerenciar servidores TACACS

TACACS (*Terminal Access Controller Access-Control System*) é um protocolo de autenticação remota usado para comunicar informações entre um servidor de rede e um cliente. Originalmente desenvolvido pela Cisco Systems, o protocolo foi criado para controlar o acesso a terminais e serviços de rede, permitindo que os administradores de sistemas restrinjam as opções de comandos disponíveis para os usuários. O TACACS permite que as senhas sejam gerenciadas de forma centralizada, o que é ideal para sistemas que acessam muitos dispositivos de rede diferentes.

O senhasegura permite que você utilize servidores TACACS para autenticar-se, para isso basta apenas configurá-lo dentro da sua instância do senhasegura.

## Cadastrar novo servidor

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > Tacacs > Servidores**.
3. Clique em **Exibir ações**, representado pelo ícone dos três pontos, e selecione **Novo**.
4. Na janela **Servidor TACACS** preencha os campos:
   1. **Hostn**ame: IP ou hostname do seu servidor TACACS.
   2. **Porta**: porta em que o seu servidor TACACS está escutando.
   3. **Ativo**: Selecione Sim para cadastrar seu servidor como ativo no senhasegura.
   4. **Secret key**: chave secreta do seu servidor TACACS.
   5. **Timeout(s)**: cadastre o tempo de timeout que o senhasegura irá aguardar a resposta do servidor TACACS.
   6. **Máx. Tentativas**: cadastre a quantidade máxima de tentativas que o seanhsegura realizará no servidor TACACS.
5. Clique em **Salvar**.

## Alterar um servidor

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > Tacacs > Servidores**.
3. No relatório **Servidores TACACS** identifique aquele que você deseja alterar.
4. Na coluna **Ação**, clique em Alterar, representado pelo ícone do lápis e papel.

A janela **Servidor TACACS** será aberta em modo de edição. Altere as informações que você deseja e clique em **Salvar**.

:::(info) (Info)
Caso a secret key não seja alterada, o valor atual será mantido no cadastro.
:::

## Testar autenticação

No senhasegura você pode testar a autenticação do seu servidor TACACS. Para isso, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > Tacacs > Servidores**.
3. No relatório **Servidores TACACS** identifique aquele que você deseja testar a autenticação.
4. Na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Testar autenticação**.
5. Na janela **Teste de autenticação TACACS** insira o **Nome do usuário** e a **Senha do usuário** que você deseja testar a autenticação.
6. Clique em **Testar Autenticação**.

Uma mensagem indicará se a autenticação obteve sucesso.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).