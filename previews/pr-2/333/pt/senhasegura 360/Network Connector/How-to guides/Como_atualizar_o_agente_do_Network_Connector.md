# Como atualizar o agente do Network Connector

Neste documento, você encontra um guia passo a passo sobre como atualizar o agente do **Network Connector**.

## Requisitos

É necessário ter o agente do **Network Connector** instalado. Para isso, siga os passos do documento [Como instalar o Network Connector](/docs/pt/network-connector-how-to-install-network-connector).

## Atualizar o agente do Network Connector

Para atualizar o agente do **Network Connector**, siga os passos abaixo:

1. Acesse o agente do **Network Connector**.
2. Abra o terminal e baixe a última versão do agente utilizando o comando `docker-compose pull`.
2. Reinicie o agente utilizando o comando `docker-compose up -d --remove-orphans`.

:::(Warning) (Importante)
É recomendado manter a versão do agente equivalente à versão do senhasegura utilizada pelo cliente no momento.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).