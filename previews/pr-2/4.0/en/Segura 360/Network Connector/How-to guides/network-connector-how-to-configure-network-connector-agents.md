# How to configure Network Connector agents


In this document, you’ll find a step-by-step guide on how to configure the **Network Connector Server**.

## Requirements

It's necessary to have the agent **Network Connector** installed. To do this, follow the steps in the document [How to install Network Connector](/docs/en/network-connector-how-to-install-network-connector).

## Configure Network Connector agents

On the machine where the Network Connector primary:

1. Locate the `docker-compose.yml` do agente do **Network Connector**.
2. Change the parameter value `SENHASEGURA_SECONDARY` to false in the primary agent configuration file `docker-compose.yml`.

The file `docker-compose.yml` it should look like this example:

```yml
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

2. Change the parameter value `SENHASEGURA_SECONDARY` to true in the file `docker-compose.yml` configuration of all secondary agents.

The file `docker-compose.yml` it should look like this example:

```yml
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

After configuring the agents in the **Network Connector Server** you can switch agents via an SSH/Telnet connection. Even if you choose to shut down the primary agent, you won’t lose remote access, as the secondary SNC will automatically take over.

## Manage the primary and secondary Network Connector

To turn off the **Network Connector** primary, access the `network-connector-ha-dr-one` and run the `docker-compose down` command. To turn off the **Network Connector** secondary, access the `network-connector-ha-dr-two` and run the `docker-compose down` command.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).