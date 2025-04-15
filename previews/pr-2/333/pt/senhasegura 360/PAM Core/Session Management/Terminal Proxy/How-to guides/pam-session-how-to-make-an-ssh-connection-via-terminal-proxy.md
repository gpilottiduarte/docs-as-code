# Como realizar uma conexão SSH via Terminal Proxy

Neste documento, você encontra um guia passo a passo sobre como realizar uma conexão do tipo SSH via Terminal Proxy.

## Requisitos

* Ter um aplicativo do tipo de prompt de comando instalado na máquina.

---
## Conexão SSH
Para fazer uma conexão SSH a um dispositivo que tenha esta conectividade ligada a uma credencial válida, será preciso executar o comando `ssh` seguido da credencial e do dispositivo como é feito em uma conexão SSH padrão. Siga os passos abaixo:

1. Abra o aplicativo de **prompt de comando** de sua preferência.
2. Digite o seguinte comando para entrar no cofre:
    1. `ssh usuario_senhasegura@instancia_senhasegura`
        :::(info) (**Info**)
        O campo `usuario_senhasegura` é o nome de usuário utilizado para acesso ao cofre. O campo `instancia_senhasegura` pode ser o hostname ou o endereço IP do cofre a ser acessado.
        :::
    2. Aperte a tecla **Enter**.
        :::(info) (**Info**)
        Caso seja o primeiro acesso ao dispositivo um aviso de confiabilidade será exibido, digite `yes` e aperte a tecla Enter. Nos próximos acessos a este dispositivo o aviso não será mais exibido.
        :::
3. Digite sua **senha**.
    1. Aperte a tecla **Enter**.
    :::(warning) (**Atenção**)
    Quando ocorrer a redefinição ou expiração da sua senha, o terminal irá apresentar uma mensagem avisando que a senha precisa ser trocada e exibir os passos que o usuário deverá realizar para cadastrar uma nova senha através da interface web.
    :::
4. Caso esteja cadastrado o uso do **token OTP**, ele será solicitado após inserir sua senha de acesso. Digite o número do token e aperte a tecla **Enter** para que o **senhasegura shell** seja exibido.
5. A tela inicial do **senhasegura shell** será exibida.
6. Digite `list` para que a lista de credenciais e dispositivos disponíveis seja exibida.
    :::(info) (**Info**)
    Se caso já souber a credencial (username) e o dispositivo (hostname ou IP) que deseja acessar não é necessário utilizar o comando `list`.
    :::
6. Após escolher, digite:
    1. `ssh username@hostname` ou `ssh username@IP`
    2. Aperte a tecla **Enter**.

Após esses passos a conexão via SSH a um dispositivo está pronta para o uso.

---
## Acesso com multi-tenant
O acesso por multi-tenant só é possível através do Proxy 2.0, para habilitá-lo acesse o documento [Como gerenciar as configurações do proxy - Habilitar o Proxy 2.0](/v3-33/docs/pt/orbit-cli-how-to-manage-the-proxy-system-settings) para realizar esta ação.

:::(warning) (**Atenção**)
Caso o tenant não seja informado, o sistema irá considerar o tenant “senhasegura”.
:::

#### Conexão ao terminal proxy com Multi-tenant:
`usuario_senhasegura%nome_tenant@instancia_senhasegura`

---
## Acesso utilizando Proxy 2.0
Fazendo o uso do Proxy 2.0 ao realizar um acesso via Terminal Proxy no qual o dispositivo acessado tenha **mais de um** tipo de conectividade cadastrada, ao realizar a conexão o usuário terá uma tela com as opções de protocolo disponíveis para utilização, sendo as opções SSH ou Telnet.

1. Siga os passos descritos na seção Conexão SSH.
2. Na tela inicial do **senhasegura shell**, digite a opção de conectividade desejada:
    1. SSH porta **22**, digite 1 e pressione a tecla **Enter**.
    2. Telnet porta **23**, digite 2 e pressione a tecla **Enter**.
3. Após escolher, digite:
    1. `ssh credencial@hostname` ou `ssh credencial@IP` para conectividade SSH.
    2. `telnet credencial@hostname` ou `telnet credencial@IP` para Sconectividade Telnet.
4. Aperte a tecla **Enter**.

Após esses passos a conexão a um dispositivo está pronta para o uso.

---
## Acesso utilizando chave SSH
Existe também a possibilidade de realizar um acesso com chaves SSH, utilize a sintaxe a seguir conforme o acesso desejado, substituindo as strings pelos valores descritos na tabela abaixo.
:::(info) (**Info**)
Para saber como configurar chaves SSH acesse os documentos sobre este tema disponíveis em [SSH Keys](/v3-33/docs/pt/pam-how-to-set-up-an-ssh-key).
:::
**String**|**Descrição**
---|---
`nome_chave_ssh`|Nome da credencial cadastrada via chave SSH.
`instancia_senhasegura`|Hostname ou endereço IP do cofre senhasegura.
`dispositivo_alvo`|Hostname ou endereço IP do dispositivo que você deseja acessar.

#### Acesso por instância:
`ssh nome_chave_ssh@instancia_senhasegura`

#### Acesso a outro dispositivo:
:::(warning) (**Atenção**)
Ao realizar um acesso com chave ssh a outro dispositivo sempre utilize a palavra `key\`.
:::
`ssh key\nome_chave_ssh@dispositivo_alvo`

#### Acesso a outro dispositivo ou quando uma chave e credencial possuírem o mesmo nome.
`ssh key\nome_chave_ssh@dispositivo_alvo`

:::(warning) (**Atenção**)
Dependendo do sistema operacional utilizado, o uso da barra invertida ( \ ) se faz necessário para que o comando possa funcionar corretamente.
:::

Para realizar um acesso ao dispositivo de destino em aplicativos que não fornecem prompts interativos ou caso não queira passar pela tela do senhasegura shell é utilizado o [Multihop](/v3-33/docs/pt/pam-session-how-to-make-an-ssh-multihop-connection-via-terminal-proxy). Acesse a documentação específica para saber como realizar esse tipo de conexão.

O Terminal Proxy do senhasegura também oferece outros tipos de conexões, como:

* [Conexão SSH Multihop via Terminal Proxy](/v3-33/docs/pt/pam-session-how-to-make-an-ssh-multihop-connection-via-terminal-proxy)
* [Conexão TELNET via Terminal Proxy](/v3-33/docs/pt/pam-session-how-to-make-a-telnet-connection-via-terminal-proxy)
* [Transferência arquivos em sessões Terminal Proxy via SFTP](/v3-33/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp)
* [Transferência de arquivos em sessões Terminal Proxy via SCP](/v3-33/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp)

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.