# Como realizar uma conexão SSH via Terminal Proxy 2.0

Este documento fornece informações sobre o passo para realizar uma conexão do tipo SSH via Terminal Proxy 2.0.

## Requisitos

* Ter um aplicativo com SSH Client instalado na máquina.

---
## Conexão SSH  
Para fazer uma conexão SSH a um dispositivo que tenha esta conectividade ligada a uma credencial válida, será preciso executar o comando `ssh` seguido da credencial e do dispositivo como é feito em uma conexão SSH padrão. Siga os passos abaixo:

| **String** | **Descrição** |
| :---- | :---- |
| **usuario_senhasegura** | Nome do usuário usado para acessar o cofre. |
| **instancia_senhasegura** | Hostname ou endereço IP do Segura a ser acessado. |
| **nome_tenant** | Nome do tenant a ser acesso. |
| **credencial** | Usuário da credencial que você deseja usar para acesso. |
| **dispositivo_alvo** e **IP** | Hostname ou endereço IP do dispositivo que você deseja acessar. |

## Acesso com *multi-tenant*

O acesso por multi-tenant só é possível através do Proxy 2.0.

:::(warning) (**Atenção**)  
Caso o *tenant* não seja informado, o sistema irá considerar o *tenant* “Segura”.  
:::

**Conexão ao terminal proxy com Multi-tenant:**

`usuario_senhasegura%nome_tenant@instancia_senhasegura\`

---

## Acesso utilizando Proxy 2.0  
Fazendo o uso do Proxy 2.0 ao realizar um acesso via Terminal Proxy no qual o dispositivo acessado tenha **mais de um** tipo de conectividade cadastrada, ao realizar a conexão o usuário terá uma tela com as opções de protocolo disponíveis para utilização, sendo as opções SSH ou Telnet.

1. Siga os passos descritos na seção Conexão SSH.  
2. Na tela inicial do **Segura shell**, digite a opção de conectividade desejada:  
   1. SSH porta **22**: digite `1` e pressione a tecla **Enter**.  
   2. Telnet porta **23**: digite `2` e pressione a tecla **Enter**.  
3. Após escolher, digite:  
   1. `ssh credencial@dispositivo_alvo` ou `ssh credencial@IP` para conectividade SSH.  
   2. `telnet credencial@dispositivo_alvo` ou `telnet credencial@IP` para Sconectividade Telnet.  
   3. Aperte a tecla **Enter**.

Após esses passos a conexão a um dispositivo está pronta para o uso.

:::(warning) (**Atenção**)  
Dependendo do sistema operacional utilizado, o uso da barra invertida ( \ ) se faz necessário para que o comando possa funcionar corretamente.  
:::

Para realizar um acesso ao dispositivo de destino em aplicativos que não fornecem prompts interativos ou caso não queira passar pela tela do Segura shell é utilizado o [Multihop - Proxy 2.0](/v4/docs/pt/how-to-make-an-ssh-multihop-connection-via-terminal-proxy). Acesse a documentação específica para saber como realizar esse tipo de conexão.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.