# How to update the Network Connector agent

In this document, you’ll find a step-by-step guide on how to update the **Network Connector**.

## Requirements

It’s necessary to have the agent **Network Connector** installed. To do this, follow the steps in the document How to install **Network Connector**.

## Update the Network Connector agent

To update the **Network Connector** agent, follow the steps below:

1. Access the **Network Connector** agent
2. Open the terminal and download the latest version of the agent using the `docker compose pull` command.
2. Restart the agent using the `docker-compose up -d --remove-orphans` command.

::: (warning) (Important) 
It’s recommended to keep the agent version equivalent to the version of senhasegura used by the customer at the time. 
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).