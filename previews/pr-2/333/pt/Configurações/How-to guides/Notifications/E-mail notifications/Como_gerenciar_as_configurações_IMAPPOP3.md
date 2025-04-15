# Como gerenciar as configurações IMAP/POP3

Para gerenciar emails de forma eficiente em um sistema, é essencial configurar corretamente os protocolos IMAP (*Internet Message Access Protocol*) ou POP3 (*Post Office Protocol 3*). Esses protocolos são responsáveis pela comunicação entre o cliente de email (como um navegador web ou um aplicativo de email) e o servidor de email, permitindo que os emails sejam recebidos, organizados e acessados.

O IMAP permite que os emails sejam sincronizados em vários dispositivos, com a caixa de entrada sendo acessada simultaneamente de diferentes locais. Já o POP3 baixa os emails para o dispositivo, apagando-os do servidor, o que pode ser útil para usuários que preferem ter acesso offline aos e-mails ou que desejam ter uma cópia local de todos os seus emails.

A configuração de IMAP ou POP3 exige informações como o endereço do servidor, nome de usuário e senha, além de verificar a compatibilidade com a versão mais recente do protocolo e a disponibilidade de segurança, como SSL/TLS. A escolha entre IMAP e POP3 depende das necessidades do usuário, uma vez que o IMAP sincroniza emails em múltiplos dispositivos, enquanto o POP3 baixa e-mails para o dispositivo, apagando-os do servidor, ideal para acesso offline ou cópia local.

## Configurar uma conta IMAP/POP3

1. No senhasegura, no canto superior esquerdo, clique em **Grid Men**u, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> E-mail \> Configurações IMAP/POP3**.  
3. No relatório **Contas IMAP/POP3**, clique em **Exibir ações**, representado pelos três pontos verticais na barra superior e, no menu suspenso, selecione **Novo**.  
4. Na janela **Cadastro de conta SMTP** preencha os seguintes campos:  
   1. **Nome da conta**: preencha o nome da sua conta.  
   2. **Manter cópia no servidor**: selecione Sim para manter uma cópia no servidor ou Não para apagar a mensagem do servidor assim que for baixada no senhasegura.  
   3. **Verificação automática**: selecione Sim para realizar a verificação automática de novas mensagens ou Não para realizar a verificação apenas de forma manual.  
   4. **Ativo**: selecione se deseja criar a conta ativa. Por padrão, essa opção vem marcada como **Sim**.  
5. Na seção **Configuração do servidor**, preencha os campos:  
   1. **Endereço**: endereço imap/pop3 do host.  
   2. **Porta**: porta para escuta *IMAP* ou *POP3 do host*.  
   3. **Protocolo**: menu suspenso. Escolha qual servidor você irá usar: *IMAP* ou *POP3*.  
   4. **Usar Network Connector?**: selecione **Sim** para utilizar o Network Connector para conexão com o servidor de recebimento de mensagens.  
      1. Caso você selecione **Sim** nesta opção, é necessário selecionar o **Network Connector** que você deseja utilizar selecionando-o no menu suspenso **Network Connector** ao lado da opção.  
      2. É preciso ter um **Network Connector** previamente configurado.  
   5. **Credencial para autenticação**: selecione a credencial que será utilizada para autenticar-se no servidor de recebimento de mensagens.  
   6. **Ignorar certificado**: ignora o certificado do servidor. Por padrão, vem marcada como **Sim**.  
   7. **Usar conexão segura?**: utiliza uma conexão segura com o servidor. Por padrão, vem marcada como **Sim**.  
   8. **Tipo de conexão segura**: indique o protocolo de segurança que será utilizado na conexão: *TLS* ou *SSL*.  
6. Clique em **Salvar**.  
     
   **Alerta**  
   Para que a função de busca de e-mails funcione corretamente, é necessário ativar o processo **Coletor de e-mail**. Para fazer isso, acesse **Configurações \> Processos de Execução** e o ative.

## Alterar uma conta IMAP/POP3

É possível alterar as configurações de uma conta IMAP/POP3 previamente cadastrada no senhasegura. Para isso, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Men**u, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> E-mail \> Configurações IMAP/POP3**.  
3. No relatório **Contas IMAP/POP3**, na coluna **Ação**, clique em **Alterar conta**, representado pelo ícone do lápis e papel.  
4. A janela **Cadastro de conta POP3** será aberta no modo de edição.  
5. Altere as informações que deseja e clique em **Salvar**.

## Visualizar a caixa de entrada de uma conta IMAP/POP3

Para visualizar a caixa de entrada apenas de uma conta, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Men**u, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> E-mail \> Configurações IMAP/POP3**.  
3. No relatório **Contas IMAP/POP3**, na coluna **Ação**, clique nos três pontos verticais e selecione **Ver caixa de entrada** no menu suspenso.  
4. Você será direcionado para o relatório **Caixa de Entrada**, contendo todas as mensagens recebidas.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).