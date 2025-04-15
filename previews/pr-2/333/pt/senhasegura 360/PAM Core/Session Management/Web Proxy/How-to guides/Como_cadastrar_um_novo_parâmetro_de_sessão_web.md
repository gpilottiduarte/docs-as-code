# Como cadastrar um novo parâmetro de sessão web

Neste documento, você encontra um guia passo a passo sobre como cadastrar um novo parâmetro de sessão web no módulo **PAM Core**.

Quando se precisa iniciar sessões de aplicação web em um dispositivo com conectividade HTTP ou HTTPS, é necessário primeiro criar um parâmetro de sessão, para que o senhasegura saiba autenticar na página da web que iniciará a sessão.

:::(warning) (**Atenção**)
Os parâmetros aqui configurados são somente para o uso de sessões **Web Proxy**.
:::

## Requisitos

* O usuário precisa ter permissão de adição/edição.
* Usuário com o papel de system admin, pam admin ou pam operator.

:::(warning) (**Atenção**)
O senhasegura não possui compatibilidade com a aplicação **GoDaddy**.
:::

---
## Cadastrar novo parâmetro
:::(info) (**Info**)
Para maiores informações sobre o significado dos campos no cadastro do novo parâmetro, acesse o documento de referência, [Sessões web](/v3-33/docs/pt/pam-session-web-sessions).
:::

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Configurações** > **Acesso** >  **Sessões web**.
3. Clique no ícone de três pontos verticais, localizado no canto superior direito da tela, e selecione **+ Novo**.
4. Na janela **Parâmetros de Sessão Web** que se abre, preencha os campos obrigatórios, identificados pelo asterisco:
    1. **Modelo equipamento***: escolha dentre as opções qual será o dispositivo acessado pela sessão.
    2. **Utilizar firefox legado***: selecione a opção *Sim* ou *Não*.
    3. **Ignorar erro de certificado**: selecione a opção *Sim* ou *Não*.
    4. **Login Url**: digite o endereço url que será acessado.
    5. **HTTP Auth Realm**: autenticação HTTP, caso seja exigido pelo site.
    6. **Configuração Personalizada**: clique no ícone de adição e preencha os campos disponíveis.
        :::(info) (**Info**)
        Para maiores informações sobre a Configuração Personalizada, acesse a documentação explicativa, [Sessões web - Configuração personalizada](/v3-33/docs/pt/pam-session-web-sessions#configuração-personalizada-campos){target=`_blank`}.
        :::
    7. **Aguardar (ms)**: digite um número para o tempo de espera.
    8. **Ação**: escolha dentre as opções qual o tipo de ação será realizada.
    9. **Campo**: digite o resultado da inspeção do HTML do campo escolhido ou utilize o jQuery selector para identificar o campo alvo da ação.
        :::(info) (**Info**)
        Para inspecionar um elemento, clique com o botão direito do mouse sobre o elemento que deseja, por exemplo a caixa de texto do login. Na lista clique na opção inspecionar. Na que se abre encontre no código o valor referente ao campo, copie e cole o valor neste campo.
        :::
    10. **Valor**: digite o valor que será utilizado para preencher o campo.
        :::(info) (**Info**)
        É possível utilizar tags que serão substituídas pelos valores da credencial/dispositivo que está acessando o site. Para saber sobre cada tag que pode ser utilizada neste campo acesse o documento [Sessões web - Configuração personalizada](/v3-33/docs/pt/pam-session-web-sessions#configuração-personalizada-campos){target=`_blank`}.
        :::
    11. **Tentativas**: digite o número de vezes que a ação deve ser tentada
    12. **Intervalo (ms)**: tempo de espera para que a ação seja retomada.
    13. Para excluir alguma linha da lista de configuração personalizada, clique no ícone de **lixeira**, ao lado esquerdo do registro escolhido.
5. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema e o novo parâmetro criado aparecerá na lista de grupos da tela Parâmetros de sessões web.

---
## Próximos passos:
[Configuração Personalizada - Parâmetro de sessões web](/v3-33/docs/pt/pam-session-about-customize-settings-web-sessions-parameters)
[Como acessar uma sessão web proxy](/v3-33/docs/pt/pam-session-how-to-access-a-web-proxy-session)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.