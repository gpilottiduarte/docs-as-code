# Como realizar uma conexão SSH Multihop via Terminal Proxy 2.0

Este documento fornece informações sobre o passo a passo para realizar uma conexão do tipo SSH com Multihop via Terminal Proxy.

Este tipo de acesso é utilizado para facilitar o acesso ao dispositivo de destino em aplicativos que não fornecem prompts interativos e para realizar um acesso pulando a etapa do senhasehura shell, com isso o Multihop serve para conectar diretamente ao destino sem a necessidade de executar etapas adicionais.

## Requisitos

* Ter um aplicativo do tipo de prompt de comando instalado.

---
## Acesso utilizando Multihop  
Utilize a sintaxe a seguir conforme o acesso desejado, substituindo as strings pelos valores descritos na tabela abaixo:

| **String** | **Descrição** |
| :---- | :---- |
| **usuario_senhasegura** | Usuário do cofre Segura. |
| **instancia_senhasegura** | Hostname ou endereço IP do cofre Segura. |
| **credencial** | Usuário da credencial que você deseja usar para acesso. |
| **dispositivo_alvo** e **IP** | Hostname ou endereço IP do dispositivo que você deseja acessar. |
| **domínio** | Nome do domínio associado ao dispositivo ou credencial. |
| **mfa_token** | Código gerado pelo MFA Token. |

:::(warning) (**Atenção**)  
Quando ocorrer a redefinição ou expiração da sua senha, o terminal irá apresentar uma mensagem avisando que a senha precisa ser trocada e exibir os passos que o usuário deverá realizar para cadastrar uma nova senha através da interface web.  
:::

## Acesso com *multi-tenant*

O acesso por multi-tenant só é possível através do Proxy 2.0.

:::(warning) (**Atenção**)  
Caso o *tenant* não seja informado, o sistema irá considerar o *tenant* “Segura”.  
:::

**Conexão Multihop com *Multi-tenant*:**

`usuario_senhasegura[credencial@dispositivo_alvo]%nome_tenant@instancia_senhasegura`

**Conexão Multihop chave SSH com *Multi-tenant*:**

`usuario_senhasegura[key\credencial@dispositivo_alvo]%nome_tenant@instancia_senhasegura`

**Conexão Multihop credencial de domínio com *Multi-tenant*:**

`usuario_senhasegura[domain\credencial@dispositivo_alvo]%nome_tenant@instancia_senhasegura`

**Conexão Multihop com MFA (TOTP) com *Multi-tenant*:**

`usuario_senhasegura[credencial@dispositivo_alvo]mfa_token%nome_tenant@instancia_senhasegura`

---
## Acesso utilizando Proxy 2.0  
Fazendo o uso do Proxy 2.0 ao realizar um acesso via Terminal Proxy no qual o dispositivo acessado tenha **mais de um** tipo de conectividade cadastrada, ao realizar a conexão o usuário terá uma tela com as opções de protocolo disponíveis para utilização, sendo as opções SSH ou Telnet.S

1. Abra o aplicativo de **prompt de comando** de sua preferência.  
2. Digite os dados de acesso:  
   1. `ssh usuario_senhasegura[credencial@dispositivo_alvo]@instancia_senhasegura\`  
3. Na tela inicial do Segura shell, digite a opção de conectividade desejada:  
   1. SSH porta 22, digite `1` e pressione a tecla **Enter**.  
   2. Telnet porta 23, digite `2` e pressione a tecla **Enter**.  
4. Após escolher, digite:  
   1. `ssh credencial@dispositivo_alvo` ou `ssh credencial@IP` para conectividade SSH.  
   2. `telnet credencial@dispositivo_alvo` ou `telnet credencial@IP` para conectividade Telnet.  
5. Aperte a tecla **Enter**.

Caso o **protocolo** e a **porta** já estejam especificados no acesso, a conexão acontecerá automaticamente:
`ssh usuario_senhasegura[credencial@dispositivo_alvo{ssh.22}]@instancia_senhasegura -p 22`

Após esses passos a conexão a um dispositivo está pronta para o uso.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.