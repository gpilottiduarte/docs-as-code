# Como realizar uma conexão RDP Proxy utilizando Multihop

Este documento fornece informações sobre o passo a passo para realizar uma conexão com o servidor Segura utilizando o Multihop.

Para facilitar o acesso ao dispositivo alvo use uma sintaxe de conexão que contenha a credencial de acesso ao destino.

## Requisitos

* Ter um aplicativo de RDP instalado na máquina.

---
## Conectar com Multihop
Existem algumas variações de sintaxe possíveis para a conexão, para realizá-las substitua as strings pelos dados pedidos, conforme tabela abaixo:
**String**|**Descrição**
|---|---|
`usuario_senhasegura`|Usuário do cofre Segura.
`credencial`|Usuário da credencial que você deseja usar para acesso.
`dominio`|Domínio do dispositivo que será acessado.
`dispositivo_alvo`|Hostname ou endereço IP do dispositivo que você deseja acessar.
`mfa_token`|Código de token para autenticação do acesso.

#### Conexão contendo o usuário e o dispositivo
`usuario_senhasegura[credencial@dispositivo_alvo]`

#### Conexão contendo o usuário, dispositivo e domínio
`usuario_senhasegura[dominio\credencial@dispositivo_alvo]`

#### Conexão contendo o usuário, dispositivo e token de acesso
`usuario_senhasegura[dominio\credencial@dispositivo_alvo]mfa_token`

:::(info) (**Info**)
Os usuários com tokens MFA configurados também serão apresentados ao prompt de token na próxima etapa.
:::

:::(info) (**Info**)
É possível realizar o bloqueio ou a interrupção da sessão e do usuário enquanto a sessão está ativa, para saber como realizar essa ação acesse o documento [Como bloquear um usuário durante uma sessão](/v4/docs/pt/pam-session-how-to-block-a-user-during-a-session).
:::


---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.