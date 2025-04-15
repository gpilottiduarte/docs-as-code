# Como configurar os agentes do Network Connector

Neste documento, você encontra um guia passo a passo de como configurar o **Network Connector Server**.

## Requisitos

É necessário ter o agente do **Network Connector** instalado. Para isso, siga os passos do documento [Como instalar o Network Connector](/docs/pt/network-connector-how-to-install-network-connector).

## Configurar os agentes do Network Connector

Na máquina onde foi instalado o **Network Connector** primário:

1. Localize o arquivo `docker-compose.yml` do agente do **Network Connector**.
2. Altere o valor do parâmetro `SENHASEGURA_SECONDARY` para `false` no arquivo de configuração do agente primário `docker-compose.yml`.

O arquivo `docker-compose.yml` deve se parecer com este exemplo:

```yaml
services:
 senhasegura-network-connector-agent:
   image: "registry.senhasegura.io/network-connector/agent-v2:latest"
   restart: unless-stopped
   networks:
 	- senhasegura-network-connector
   environment:
 	SENHASEGURA_FINGERPRINT: "CHANGE_ME"
 	SENHASEGURA_AGENT_PORT: "CHANGE_ME"
 	SENHASEGURA_ADDRESSES: "CHANGE_ME"
 	SENHASEGURA_AGENT_SECONDARY: "false"
networks:
 senhasegura-network-connector:
   driver: bridge
```

2. Altere o valor do parâmetro `SENHASEGURA_SECONDARY` para `true` no arquivo `docker-compose.yml` de configuração de todos os agentes secundários.

O arquivo `docker-compose.yml` deve se parecer com este exemplo:

```yaml
services:
 senhasegura-network-connector-agent:
   image: "registry.senhasegura.io/network-connector/agent-v2:latest"
   restart: unless-stopped
   networks:
 	- senhasegura-network-connector
   environment:
 	SENHASEGURA_FINGERPRINT: "CHANGE_ME"
 	SENHASEGURA_AGENT_PORT: "CHANGE_ME"
 	SENHASEGURA_ADDRESSES: "CHANGE_ME"
 	SENHASEGURA_AGENT_SECONDARY: "true"
networks:
 senhasegura-network-connector:
   driver: bridge
```

Após a configuração dos agentes no **Network Connector Server** você pode trocar os agentes via uma conexão SSH/Telnet. Mesmo que você escolha desligar o agente principal, não perderá o acesso remoto, pois o SNC secundário assumirá automaticamente.

## Gerenciar o Network Connector primário e secundário

Para desligar o **Network Connector** primário, acesse-o `network-connector-ha-dr-one` e rode o comando `docker-compose down`. Para desligar o **Network Connector** secundário, acesse-o `network-connector-ha-dr-two` e rode o comando `docker-compose down`.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).