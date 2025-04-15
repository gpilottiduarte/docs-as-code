# Como realizar uma conexão SSH Multihop via Terminal Proxy

Este documento fornece informações sobre o passo a passo para realizar uma conexão do tipo SSH com Multihop via Terminal Proxy.

Este tipo de acesso é utilizado para facilitar o acesso ao dispositivo de destino em aplicativos que não fornecem prompts interativos e para realizar um acesso pulando a etapa do **senhasehura shell**, com isso o Multihop serve para conectar diretamente ao destino sem a necessidade de executar etapas adicionais.

## Requisitos

* Ter um aplicativo do tipo de prompt de comando instalado.

---
## Acesso utilizando Multihop
Utilize a sintaxe a seguir conforme o acesso desejado, substituindo as strings pelos valores descritos na tabela abaixo:
**String**|**Descrição**
---|---
`usuario_senhasegura`|Usuário do cofre Segura.
`instancia_senhasegura`|Hostname ou endereço IP do cofre Segura.
`credencial`|Usuário da credencial que você deseja usar para acesso.
`dispositivo_alvo`|Hostname ou endereço IP do dispositivo que você deseja acessar.
`dominio`|Nome do domínio associado ao dispositivo ou credencial.
`mfa_token`|Código gerado pelo MFA Token.

:::(warning) (**Atenção**)
Quando ocorrer a redefinição ou expiração da sua senha, o terminal irá apresentar uma mensagem avisando que a senha precisa ser trocada e exibir os passos que o usuário deverá realizar para cadastrar uma nova senha através da interface web.
:::

1. Abra o aplicativo de prompt de comando de sua preferência.
2. Digite o seguinte comando desejado para entrar no Segura:

#### Conexão padrão apenas com o usuário e o servidor Segura:
`ssh usuario_senhasegura@instancia_senhasegura`

#### Conexão Multihop contendo o usuário e o servidor de destino:
Neste exemplo, o Segura se conectará diretamente ao servidor de destino sem entregar o terminal intermediário. A credencial e o dispositivo de destino estão entre colchetes.

`ssh usuario_senhasegura[credencial@dispositivo_alvo]@instancia_senhasegura`

Para acessar o dispositivo ou quando uma chave e uma credencial possuírem o mesmo nome, usando a chave SSH, realizando conexões multihop.

`ssh usuario_senhasegura[key\credencial@dispositivo_alvo]@instancia_senhasegura`

:::(warning) (**Atenção**)
Ao realizar um acesso com chave ssh a outro dispositivo sempre utilize a palavra `key\`.
:::

#### Conexão Multihop utilizando credencial de domínio:

`ssh usuario_senhasegura[dominio\credencial@dispositivo_alvo]@instancia_senhasegura`

:::(info) (**Info**)
Para saber como configurar um domínio acesse o documento [Como utilizar credenciais de domínio](/v4/docs/pt/pam-how-to-use-domain-credentials).
:::

#### Conexão Multihop contendo o token OTP:
`ssh usuario_senhasegura[credencial@dispositivo_alvo]mfa_token@instancia_senhasegura`

---
O Terminal Proxy do Segura também oferece outros tipo de conexões, como:

* [Conexão SSH via Terminal Proxy](/v4/docs/pt/pam-session-how-to-make-an-ssh-connection-via-terminal-proxy)
* [Conexão TELNET via Terminal Proxy](/v4/docs/pt/pam-session-how-to-make-a-telnet-connection-via-terminal-proxy)
* [Transferência arquivos em sessões Terminal Proxy via SFTP](/v4/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp)
* [Transferência de arquivos em sessões Terminal Proxy via SCP](/v4/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp)

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.