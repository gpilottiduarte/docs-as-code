# Como gerenciar servidores TACACS

TACACS (*Terminal Access Controller Access-Control System*) é um protocolo de autenticação remota usado para comunicar informações entre um servidor de rede e um cliente. Originalmente desenvolvido pela Cisco Systems, o protocolo foi criado para controlar o acesso a terminais e serviços de rede, permitindo que os administradores de sistemas restrinjam as opções de comandos disponíveis para os usuários. O TACACS permite que as senhas sejam gerenciadas de forma centralizada, o que é ideal para sistemas que acessam muitos dispositivos de rede diferentes.

O Segura permite que você utilize servidores TACACS para autenticar-se, para isso basta apenas configurá-lo dentro da sua instância do Segura.

## Cadastrar novo servidor

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Radius \> Tacacs**.    
3. No relatório **Servidores**, clique no botão **Adicionar**.
4. Na janela **Servidores** preencha os campos:
   1. **Hostname**: IP ou hostname do seu servidor TACACS.
   2. **Porta**: porta em que o seu servidor TACACS está escutando.
   3. **Ativo**: Selecione Sim para cadastrar seu servidor como ativo no Segura.
   4. **Secret key**: chave secreta do seu servidor TACACS.
   5. **Timeout(s)**: cadastre o tempo de timeout que o Segura irá aguardar a resposta do servidor TACACS.
   6. **Máx. Tentativas**: cadastre a quantidade máxima de tentativas que o seanhsegura realizará no servidor TACACS.
5. Clique em **Salvar**.

## Alterar um servidor

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Radius \> Tacacs**.   
3. No relatório **Servidores TACACS** identifique aquele que você deseja alterar.
4. Clique no botão**Ações** e selecione **Editar**.

A janela **Servidor TACACS** será aberta em modo de edição. Altere as informações que você deseja e clique em **Salvar**.

:::(info) (Info)
Caso a secret key não seja alterada, o valor atual será mantido no cadastro.
:::

## Testar autenticação

No Segura você pode testar a autenticação do seu servidor TACACS. Para isso, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Radius \> Tacacs**.   
3. No relatório **Servidores TACACS** identifique aquele que você deseja alterar.
4. Clique no botão**Ações** e selecione **Testar autenticação**.
5. Na janela **Teste de autenticação TACACS** insira o **Nome do usuário** e a **Senha** do usuário que você deseja testar a autenticação.
6. Clique em **Testar Autenticação**.

Uma mensagem indicará se a autenticação obteve sucesso.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).