# Como realizar uma conexão SSH Multihop via Terminal Proxy

Neste documento, você encontra um guia passo a passo sobre como realizar uma conexão do tipo SSH com Multihop via Terminal Proxy.

Este tipo de acesso é utilizado para facilitar o acesso ao dispositivo de destino em aplicativos que não fornecem prompts interativos e para realizar um acesso pulando a etapa do **senhasehura shell**, com isso o Multihop serve para conectar diretamente ao destino sem a necessidade de executar etapas adicionais.

## Requisitos

* Ter um aplicativo do tipo de prompt de comando instalado.

---
## Acesso utilizando Multihop
Utilize a sintaxe a seguir conforme o acesso desejado, substituindo as strings pelos valores descritos na tabela abaixo:
**String**|**Descrição**
---|---
`usuario_senhasegura`|Usuário do cofre senhasegura.
`instancia_senhasegura`|Hostname ou endereço IP do cofre senhasegura.
`credencial`|Usuário da credencial que você deseja usar para acesso.
`dispositivo_alvo`|Hostname ou endereço IP do dispositivo que você deseja acessar.
`dominio`|Nome do domínio associado ao dispositivo ou credencial.
`mfa_token`|Código gerado pelo MFA Token.

:::(warning) (**Atenção**)
Quando ocorrer a redefinição ou expiração da sua senha, o terminal irá apresentar uma mensagem avisando que a senha precisa ser trocada e exibir os passos que o usuário deverá realizar para cadastrar uma nova senha através da interface web.
:::

1. Abra o aplicativo de prompt de comando de sua preferência.
2. Digite o seguinte comando desejado para entrar no senhasegura:

#### Conexão padrão apenas com o usuário e o servidor senhasegura:
`ssh usuario_senhasegura@instancia_senhasegura`

#### Conexão Multihop contendo o usuário e o servidor de destino:
Neste exemplo, o senhasegura se conectará diretamente ao servidor de destino sem entregar o terminal intermediário. A credencial e o dispositivo de destino estão entre colchetes.

`ssh usuario_senhasegura[credencial@dispositivo_alvo]@instancia_senhasegura`

Para acessar o dispositivo ou quando uma chave e uma credencial possuírem o mesmo nome, usando a chave SSH, realizando conexões multihop.

`ssh usuario_senhasegura[key\credencial@dispositivo_alvo]@instancia_senhasegura`

:::(warning) (**Atenção**)
Ao realizar um acesso com chave ssh a outro dispositivo sempre utilize a palavra `key\`.
:::

#### Conexão Multihop utilizando credencial de domínio:

`ssh usuario_senhasegura[dominio\credencial@dispositivo_alvo]@instancia_senhasegura`

:::(info) (**Info**)
Para saber como configurar um domínio acesse o documento [Como utilizar credenciais de domínio](/v3-33/docs/pt/pam-how-to-use-domain-credentials).
:::

#### Conexão Multihop contendo o token OTP:
`ssh usuario_senhasegura[credencial@dispositivo_alvo]mfa_token@instancia_senhasegura`

---
## Acesso com multi-tenant
O acesso por multi-tenant só é possível através do Proxy 2.0 , para habilitá-lo acesse o documento [Como gerenciar as configurações do proxy - Habilitar o Proxy 2.0](/v3-33/docs/pt/orbit-cli-how-to-manage-the-proxy-system-settings) para realizar esta ação.

:::(warning) (**Atenção**)
Caso o tenant não seja informado, o sistema irá considerar o tenant “senhasegura”.
:::

#### Conexão Multihop com Multi-tenant:
`usuario_senhasegura[credencial@dispositivo_alvo]%nome_tenant@instancia_senhasegura`

#### Conexão Multihop chave SSH com Multi-tenant:
`usuario_senhasegura[key\credencial@dispositivo_alvo]%nome_tenant@instancia_senhasegura`

#### Conexão Multihop credencial de domínio com Multi-tenant:
`usuario_senhasegura[domain\credencial@dispositivo_alvo]%nome_tenant@instancia_senhasegura`

#### Conexão Multihop com MFA (TOTP) com Multi-tenant:
`usuario_senhasegura[credencial@dispositivo_alvo]mfa_token%nome_tenant@instancia_senhasegura`

---
## Acesso utilizando Proxy 2.0
Fazendo o uso do Proxy 2.0 ao realizar um acesso via Terminal Proxy no qual o dispositivo acessado tenha **mais de um** tipo de conectividade cadastrada, ao realizar a conexão o usuário terá uma tela com as opções de protocolo disponíveis para utilização, sendo as opções SSH ou Telnet.S

1. Abra o aplicativo de prompt de comando de sua preferência.
2. Digite os dados de acesso:
    1. `ssh usuario_senhasegura[credencial@dispositivo_alvo]@instancia_senhasegura`
3. Na tela inicial do senhasegura shell, digite a opção de conectividade desejada:
    1. SSH porta **22**, digite `1` e pressione a tecla **Enter**.
    2. Telnet porta **23**, digite `2` e pressione a tecla **Enter**.
4. Após escolher, digite:
    1. `ssh credencial@hostname` ou `ssh credencial@IP` para conectividade SSH.
    2. `telnet credencial@hostname` ou `telnet credencial@IP` para conectividade Telnet.
5. Aperte a tecla **Enter**.


Caso o **protocolo** e a **porta** já estejam especificados no acesso, a conexão acontecerá automaticamente:
`ssh usuario_senhasegura[credencial@dispositivo_alvo{ssh.22}]@instancia_senhasegura -p 22`

Após esses passos a conexão a um dispositivo está pronta para o uso.

---
O Terminal Proxy do senhasegura também oferece outros tipo de conexões, como:

* [Conexão SSH via Terminal Proxy](/v3-33/docs/pt/pam-session-how-to-make-an-ssh-connection-via-terminal-proxy)
* [Conexão TELNET via Terminal Proxy](/v3-33/docs/pt/pam-session-how-to-make-a-telnet-connection-via-terminal-proxy)
* [Transferência arquivos em sessões Terminal Proxy via SFTP](/v3-33/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp)
* [Transferência de arquivos em sessões Terminal Proxy via SCP](/v3-33/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp)

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.