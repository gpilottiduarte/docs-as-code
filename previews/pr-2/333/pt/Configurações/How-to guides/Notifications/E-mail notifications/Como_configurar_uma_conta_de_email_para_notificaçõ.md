# Como configurar uma conta de email para notificações

A configuração de uma conta de e-mail no senhasegura permite que o aplicativo envie notificações sobre diferentes ações, como a alteração de uma senha antes do vencimento de um certificado ou um acesso suspeito, por exemplo.

É importante incluir endereços de e-mails válidos porque os aprovadores recebem solicitações de acesso por e-mail. Da mesma forma, os solicitantes recebem suas respostas de reprovação ou aprovação.

## Requisitos

- **tenant_id, client_secret, client_id:** OAuth2 do provedor de e-mail escolhido.

O processo de registro da solução senhasegura é feito com as APIs do provedor escolhido.

:::(Info) (Info)
Acesse os links abaixo para obter as informações de `client_id`, `client_secret` e `tenant-id` para API e assim registrar a solução senhasegura junto ao provedor de e-mail.
- Office 365: [Office 365 Quickstart Register App](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).
- Office 365: [How to find your Microsoft Entra tenant ID.](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-find-tenant)
- Google Mail Workspace: [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/oauth2/native-app?hl=pt-br).
:::

:::(Warning) (Important)
Você pode obter um resumo e informações sobre os comandos possíveis executando `orbit email-oauth2-proxy –help`.
:::

## Como utilizar o comando `email-oauth2-proxy`

Após obter os valores `client_id`, `client_secret` e `tenant-id`, configure a solução senhasegura, em especial o componente `email-oauth2-proxy`. No exemplo abaixo, estamos usando as etapas necessárias para configurar o senhasegura com o serviço Microsoft Office 365.

1. Acesse o servidor senhasegura utilizando `SSH` com a porta `59022`.
2. Faça o login com o usuário administrativo `mt4adm`.
3. Utilize o comando `orbit email-oauth2-proxy register`, com o `client_id`, `client_secret` e o `tenant-id` e os seguintes parâmetros:

```
orbit email-oauth2-proxy register \
 --imap-server-address=outlook.office365.com \
 --imap-server-port=993 \
 --smtp-server-address=smtp.office365.com \
 --smtp-server-port=587 \
 --smtp-server-starttls \
 --oauth2-token-url="https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token " \
 --oauth2-permission-url="https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize " \
 --oauth2-scope="https://outlook.office365.com/IMAP.AccessAsUser.All https://outlook.office365.com/SMTP.Send offline_access " \
 --oauth2-flow="client_credentials" \
 --oauth2-client-id="CLIENT_ID" \
 --oauth2-client-secret="CLIENT_SECRET" \
 --force
```

Abaixo, você pode conferir um exemplo de um arquivo de configuração para o Microsoft Office 365:

```shell
[emailproxy]
delete_account_token_on_password_error = True
encrypt_client_secret_on_first_use = False
allow_catch_all_accounts = True

[IMAP-2993]
server_address = outlook.office365.com
server_port = 993

[SMTP-2465]
server_address = smtp.office365.com
server_port = 587
starttls = True

[@]
redirect_uri = http://<endereço_do_seu_vault>/email-oauth2-proxy-authorize/
redirect_list_address = http://127.0.0.1:8801/
token_url = https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token
permission_url = https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize
oauth2_scope = https://outlook.office365.com/IMAP.AccessAsUser.All https://outlook.office365.com/POP.AccessAsUser.All https://outlook.office365.com/SMPT.Send offline_access
client_id = CLIENT_ID
client_secret = CLIENT_SECRET
oauth2_flow = client_credentials
```

## Como configurar o serviço de SMTP do senhasegura

Depois da configuração inicial do componente `email-oauth2-proxy`, você deve configurar o serviço de SMTP do senhasegura. Para isso, siga os passos abaixo:

:::(Info) (Info)
É necessário ter uma conta **SMTP** ativa e com o campo **Conta padrão** configurado como **Sim** para que o sistema de SMTP possa enviar e-mails.
:::

1. Na plataforma senhasegura, no canto superior direito, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Configuração SMTP.**
3. Crie uma nova configuração do serviço SMTP.
4. Preencha os campos de acordo com os valores da sua conta:
    1. **Nome da conta**: nome da sua conta (por exemplo, **Office365**).
    2. **Ativo**: deixe selecionada a opção **Sim** para ativar a conta.
    3. **E-mail do remetente**: endereço de e-mail que será usado para enviar e-mails.
    4. **E-mail de resposta (Reply-To)**: endereço de e-mail que receberá os e-mails de resposta.
    5. **E-mail de retorno (Return-Path)**: endereço de e-mail de retorno, em caso de erro no envio.
    6. **E-mail de confirmação**: endereço de e-mail para confirmação do envio.
5. **Conta padrão**: deve estar marcada como **Sim**.
6. **Enviar confirmação de leitura**: deve estar marcada como **Sim**.
7. **Obrigar o uso da configuração**: deve estar marcada como **Não**.
8. **Habilitar rodapé:** deve estar marcada como **Não**.
9. Na seção **Configuração de servidor SMTP**, indique as configurações abaixo:
    1. **Host SMTP**: indique o endereço do servidor localhost: `127.0.0.1`.
    2. **Porta**: indique a porta configurada através do comando `orbit email-oauth2-proxy register`. No exemplo acima, o valor será `2465`.
    3. **Usar conexão segura?**: deve estar marcada como **Não**.
    4. **Tipo de conexão segura**: deve ser deixada em branco.
    5. **Usar autenticação?**: deve estar marcada como **Sim**.
    6. **Ignorar erro de certificado**: deve estar marcada como **Sim**.
    7. **Usar Network Connector?**: indique se deseja ou não utilizar o Network Connector.
    8. **Network Connector:** indique o Network Connector específico, se aplicável.

:::(Info) (Info)
Ao manter o campo do Network Connector em branco, será utilizado o Network Connector default, definido em **Settings > System parameters > Application > Network Connector**.
:::
:::(Info) (Info)
Este parâmetro só terá efeito caso exista algum Network Connector configurado.
:::


10. Clique em **Enviar**.

## Como testar a configuração

Depois de configurada a conexão SMTP, é necessário testá-la. Para fazer este teste, siga os passos abaixo:

1. Na plataforma senhasegura, no canto superior direito, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações** > **Configurações SMTP**.
3. Na lista de conexões, identifique a conexão criada e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Testar configuração** no menu suspenso.
4. Na janela pop-up **E-mail de teste - Conta**, indique um endereço de e-mail para testar a configuração.

Caso esteja tudo correto, você verá uma mensagem de sucesso.

## Como obter a URL para validar a configuração SMTP

Uma vez configurado o acesso SMTP e testado o envio de mensagens, é possível validar essa configuração. Para isso, você precisa obter a URL de acesso à autorização do componente `email-oauth2-proxy` fazendo uma requisição para API do Microsoft Office 365.

Para isso, siga os passos abaixo:

1. Execute o comando `orbit email-oauth2-proxy logs` no terminal. Na saída do comando, procure pela mensagem **“Please visite the following URL do authenticate account”** para obter a URL de validação.
2. Copie a URL completa e cole em um navegador.
3. Faça login na conta.

Você deverá receber uma mensagem de sucesso, indicando que a autenticação no **Email OAuth 2.0** foi realizada com sucesso.

## Como configurar conta IMAP

Para configurar uma conta IMAP, siga os passos abaixo:

1. Na plataforma senhasegura, no canto superior direito, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Configuração IMAP/POP3.**
3. Crie uma nova configuração do serviço IMAP.
4. Na janela pop-up **Cadastro de conta POP3/IMAP** preencha os campos:
    1. **Nome da conta:** indique o nome da conta de e-mail.
    2. **Manter cópia no servidor:** deixe marcada como **Sim.**
    3. **Verificação automática:** deixe marcada como **Sim.**
    4. **Ativo:** deixe marcado como **Sim.**
5. Na seção **Configuração do servidor,** preencha os campos:
    1. **Endereço:** indique o endereço localhost: `127.0.0.1`.
    2. **Porta:** indique a porta que deverá ser utilizada: `2993`.
    3. **Protocolo:** selecione IMAP no menu suspenso.
    4. **Conector de rede (opcional):** caso seja necessário, indique um conector de rede.
    5. **Credencial para autenticação**: indique a credencial que será usada para autenticação no servidor IMAP.
    6. **Ignorar certificado?:** deixe marcada como **Sim.**
    7. **Usar conexão segura:** deixe marcada como **Não.**
    8. **Tipo de conexão segura:** deixa desabilitada (em branco).
    9. **Usar Network Connector?**: indique se deseja ou não utilizar o Network Connector.
**Network Connector: **indique o Network Connector específico, se aplicável.
:::(Info) (Info)
Ao manter o campo do Network Connector em branco, será utilizado o Network Connector default, definido em **Settings > System parameters > Application > Network Connector**.
:::
:::(Info) (Info)
Este parâmetro só terá efeito caso exista algum Network Connector configurado.
:::

6. Clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).