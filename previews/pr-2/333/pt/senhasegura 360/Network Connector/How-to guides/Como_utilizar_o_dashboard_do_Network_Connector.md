# Como utilizar o dashboard do Network Connector

Neste documento, você encontra um guia passo a passo de como utilizar o dashboard do **Network Connector**, para visualizar dados da situação da conexão, dos agentes e logs.

## Requisitos

É necessário ter o agente do **Network Connector** instalado. Para isso, siga os passos do documento [Como instalar o Network Connector](/docs/pt/network-connector-how-to-install-network-connector).

## Visualizar o dashboard do Network Connector

Para visualizar os dados do dashboard do **Network Connector**, siga os passos abaixo:

1. Acesse a plataforma senhasegura utilizando **SSH** na porta 59022 com o usuário administrativo `mt4adm`.
2. Rode o comando: `sudo orbit network-connector status`.
   
Assim que o comando for executado, a seguinte tela será exibida:

| Item 	| Descrição                                                        	                            |
|-----------|-------------------------------------------------------------------------------------------|
| Name 	| Nome usado para agente.                                          	                            |
| Port 	| Porta usada para o agente.                                       	                            |
| Primary   | Status do agente do conector de rede principal.                  	                        |
| Secondary | Status do agente do conector de rede secundário.                 	                        |
| Offline   | O agente está offline.                                           	                        |
| Online    | O agente está conectado com (número de conexões) (consumo de banda).                      |
| Tunns     | O número de dispositivos e portas conectados ao agente determina os "Tunns". Por exemplo, um dispositivo na porta 22 (192.168.0.10:22) resulta em Tunns igual a 1. Se o mesmo dispositivo usar outra porta, como a 443 (192.168.0.10:443), então Tunns igual a 2. Adicionando outro dispositivo com uma nova porta, Tunns aumenta para 3. |
| Version (P/S) | Versão do agente.                                                                     |

:::(Info) (Info)
Um Tunn não é adicionado se já houver um túnel para o mesmo dispositivo + porta. 
:::

## Visualizar os logs no dashboard do Network Connector

Para acessar os logs gerados pelo **Network Connector Server** no dashboard do **Network Connector**, siga os passos abaixo:

1. Acesse a plataforma senhasegura utilizando **SSH** na porta 59022 com o usuário administrativo `mt4adm`.
2. Digite o seguinte comando: `sudo orbit network-connector status`.
3. Pressione a tecla `2` do teclado e depois `enter`.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).