# Como gerenciar configurações SMTP

Para permitir o envio eficiente de notificações em um sistema de notificação por e-mail, é essencial configurar corretamente os parâmetros SMTP (*Simple Mail Transfer Protocol*). O SMTP é o protocolo padrão usado para enviar e-mails pela Internet e requer especificações de configuração precisas para garantir conectividade e segurança adequadas. Inicialmente, você precisa definir o endereço do servidor SMTP, que pode ser fornecido pelo seu provedor de serviços de e-mail ou pela sua infraestrutura interna.

## Configurar um servidor SMTP

1.No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.
2. No menu lateral, selecione **E-mail > Configuração SMTP.**
3. No relatório **Configuração SMTP**, clique no botão **Adicionar**.
4. Na tela **Configuração SMTP**:
   * **Nome da conta**: preencha o nome da sua conta.  
   * **Ativo**: selecione se deseja criar uma conta ativa. Por padrão, esta opção está definida como **Sim**.  
   * **E-mail do Remetente**: endereço de e-mail que será usado como remetente.  
   * **E-mail de resposta (Reply-To)**: endereço de e-mail que será usado para encaminhar respostas ao e-mail de notificação.  
   * **E-mail de retorno (Return-Path)**: endereço de e-mail que será usado para encaminhar mensagens de erro de entrega de notificação.  
   * **E-mail de confirmação**: endereço de e-mail que será usado para confirmar a leitura.  
   * **Conta padrão**: selecione **Sim** se quiser que esta conta se torne a conta padrão do Segura.  
   * **Enviar confirmação de leitura**: selecione **Sim** se quiser receber uma confirmação de leitura do e-mail de notificação.  
   * **Obrigar o uso da configuração**: selecione **Sim** se quiser usar as configurações na seção de configuração.  
   * **Habilitar rodapé**: selecione **Sim** se quiser habilitar o rodapé para ser enviado com o e-mail de notificação.  
5. Na seção **Configuração do servidor SMTP**, preencha os campos:  
   * **Host SMTP**: endereço do servidor SMTP para envio de mensagens de e-mail.  
   * **Porta**: porta para escuta do servidor SMTP.  
   * **Usar conexão segura?**: selecione **Sim** se quiser usar um método de criptografia ao enviar e-mails.  
   * **Tipo de conexão segura**: selecione qual protocolo de criptografia você deseja usar:  
     * **SSL**: *Secure Sockets Layer* é um protocolo de segurança essencial que estabelece uma conexão criptografada entre um servidor web e um navegador, garantindo que todos os dados transmitidos sejam mantidos privados e seguros.  
     * **TLS**: *Transport Layer Security* é um protocolo de segurança avançado que evoluiu do SSL para fornecer comunicação ainda mais segura entre servidores web e navegadores.  
   * **Usar autenticação?**: selecione **Sim** se quiser usar autenticação de credenciais para o servidor SMTP.  
   * **Ignorar erro de certificado**: selecione **Sim** para ignorar erros de certificado.  
   * **Usar Network Connector?**: selecione **Sim** para usar o Network Connector para se conectar ao servidor SMTP.  
     * Se você selecionar **Sim** para esta opção, deve selecionar o Network Connector que deseja usar, escolhendo-o no menu suspenso Network Connector ao lado da opção.  
     * Você deve ter um **Network Connector** previamente configurado.  
   * **Credencial para autenticação**: selecione uma credencial para usar na autenticação no servidor SMTP.  
     * Observe que se você selecionou **Sim** para o campo **Usar autenticação?**, você deverá uma credencial nesta opção.  
6. Clique em **Enviar**.

## Editar um servidor SMTP

Você pode alterar as configurações de um servidor SMTP previamente registrado no Segura. Para fazer isso, siga os passos abaixo:

1.No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.
2. No menu lateral, selecione **E-mail > Configuração SMTP.**
3. No relatório de **Configuração SMTP**, identifique o servidor que você deseja editar, clique no botão **Ações** e selecione **Editar**.
4. A tela **Configuração SMTP** será aberta no modo de edição.  
5. Altere as informações desejadas e clique em **Enviar**.

## Testar a configuração de um servidor SMTP

Você pode testar a configuração de um servidor SMTP para garantir que esteja corretamente configurado. Para fazer isso, siga os passos abaixo:

1.No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.
2. No menu lateral, selecione **E-mail > Configuração SMTP.**
3. No relatório de **Configuração SMTP**, identifique o servidor que você deseja editar, clique no botão **Ações** e selecione **Testar configuração**.
4. Na janela **Teste de E-mail - Conta**, preencha os campos:  
   * **Enviar para**: preencha o endereço de e-mail para o qual deseja enviar o e-mail de teste.  
   * **Assunto**: preencha o assunto da mensagem de teste. Por padrão, este campo é preenchido com a string `MENSAGEM DE TESTE!`  
   * **Mensagem**: preencha a mensagem de teste que deseja enviar. Por padrão, este campo é preenchido com a string `ATENÇÃO: ESTA É UMA MENSAGEM DE TESTE!`  
5. Clique em **Enviar**.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).