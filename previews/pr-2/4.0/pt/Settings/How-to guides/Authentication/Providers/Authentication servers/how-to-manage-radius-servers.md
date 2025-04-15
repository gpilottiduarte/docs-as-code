# Como gerenciar servidores RADIUS

RADIUS (*Remote Authentication Dial-In User Service*) é um protocolo de rede que oferece serviços centralizados de autenticação e autorização para usuários que se conectam e utilizam um recurso de rede. Assim, o protocolo RADIUS torna-se uma alternativa a ser considerada quando falamos de segurança de sistemas, uma vez que permite que as credenciais dos usuários sejam gerenciadas de forma centralizada, facilitando a implementação de políticas de segurança rigorosas. O Segura permite que você utilize servidores RADIUS, para isso basta apenas configurá-los dentro da sua instância do Segura.

## Cadastrar novo servidor

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Radius \> Servidores**.    
3. No relatório **Servidores** clique em **Adicionar**.
4. Na tela **Servidores** preencha os campos:
   1. **Hostname**: IP ou hostname do seu servidor RADIUS.
   2. **Porta**: porta em que o seu servidor RADIUS está escutando.
   3. **Ativo**: Selecione Sim para cadastrar seu servidor como ativo no Segura.
   4. **Secret key**: chave secreta do seu servidor RADIUS.
   5. **Timeout(s)**: cadastre o tempo de timeout que o Segura deverá aguardar pela resposta do do servidor RADIUS.
   6. **Máx. Tentativas**: cadastre a quantidade máxima de tentativas que o Segura realizará no servidor RADIUS
7. Clique em **Salvar**.

## Alterar um servidor

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Radius \> Servidores**.    
3. No relatório **Servidores RADIUS** identifique aquele que você deseja alterar, clique no botão **Ações** e selecione **Editar**.

A janela **Servidor RADIUS** será aberta em modo de edição. Altere as informações que você deseja e clique em **Salvar**.

:::(info) (Info)
Caso a secret key não seja alterada, o valor atual será mantido no cadastro.
:::

## Testar autenticação

No Segura você pode testar a autenticação do seu servidor RADIUS. Para isso, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Radius \> Servidores**.    
3. No relatório **Servidores RADIUS** identifique aquele que você deseja alterar, clique no botão **Ações** e selecione **Testar autenticação**.
5. Na janela **Teste de autenticação RADIUS** insira o **Nome do usuário** e a **Senha** do usuário que você deseja testar a autenticação.
6. Clique em **Testar Autenticação.**

Uma mensagem indicará se a autenticação obteve sucesso.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).