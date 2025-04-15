# Como instalar o Network Connector

Neste documento, você encontra um guia passo a passo de como instalar o **Network Connector**.

A instalação e configuração do **Network Connector** é dividida entre as etapas:

1. Configuração do **Network Connector *Server***.
2. Cadastro dos agentes no senhasegura **PAM**.
3. Obter o **Network Connector *Fingerprint***.
4. Instalar o **Network Connector *Agent***.
5. Definir a versão do **Network Connector *Agent***.
    
## Requisitos

* Para 250 conexões simultâneas por SNC ativa - **1 GB de memória, 1 VCPU, placa de rede de 1GB, pelo menos 40GB de armazenamento disponível**.
* Para 750 conexões simultâneas por SNC ativa - **Memória de 2 GB, 2 VCPU e placa de rede de 1 GB, pelo menos 40GB de armazenamento disponível**.   
* Para 1500 conexões simultâneas por SNC ativa - **Memória de 4 GB, 4 VCPU e placa de rede de 1 GB, pelo menos 40GB de armazenamento disponível**.

O *Server* precisa ser configurado apenas uma vez. O agente, por sua vez, deve ser instalado e configurado em todas as redes que o senhasegura não possui acesso.

## 1. Configurar o Network Connector Server

A configuração do **Network Connector Server** é realizada nas instâncias do senhasegura com o comando `orbit network-connector`.

:::(info) (Info)
Rode o comando `orbit network-connector --help` para conhecer todas as opções disponíveis para este comando.
:::

Para que esses comandos tenham o resultado esperado, é necessário ter acesso de administrador `sudo` ao servidor senhasegura e a porta `TCP/51445` deve estar liberada, para que o agente se comunique com o servidor.

:::(warning) (Importante)
Para instalações em cluster, é necessário realizar a configuração do **Network Connector Server** em todos os nós. Para isso, basta repetir os passos acima em cada nó do cluster.
:::

Siga os passos abaixo para instalar e configurar o **Network Connector Server**:

1. Acesse cada instância senhasegura do cluster via terminal e rode o comando `sudo orbit network-connector setup`.
2. Entre a tecla `Y`, para confirmar a operação.

A operação pode ser bem sucedida e retornar uma mensagem de sucesso:

```
senhasegura Network Connector Server is ready!

Use this fingerprint in senhasegura Network Connector Agents setup: "FINGERPRINT"

In case you need it, instructions for starting senhasegura Network Connector Agents are available in our help center.

See at https://d.senhasegura.io/skme2rugfyizbw9

NOTE: If this environment is in cluster mode, run "sudo orbit network-connector setup" on secondary nodes as well
```

Ou mal sucedida e retornar um dos erros abaixo:

```
Can't continue setup.

This node is a Secondary in cluster and senhasegura Network Connector Server needs to be initialized in Primary node.

Please run "sudo orbit network-connector setup" in Primary node first.

==================================or=====================================

Whoops! An error was found in application setup.

Check if application database is running and file replication between nodes is working without errors.

==================================or=====================================

Whoops! An error was found!

Unable to determine which fingerprint senhasegura Network Connector Agents needs to connect in this server, try again later.

==================================or=====================================
 
Whoops! Could not replicate settings to cluster nodes

Check if all cluster nodes are available, file replication is working and try again.
```

## 2. Cadastrar Network Connector Agents no senhasegura

Após ativar o **Network Connector Server**, acesse a interface web do senhasegura e siga os passos abaixo:

1. No senhasegura, acesse a página de Connectors, através do caminho **Grid menu** > **Dispositivos** > **Configurações** > **Network Connector** > **Connectors**.
2. Na coluna Ação, clique no ícone **Alterar**.
3. Clique na aba **Agentes**.
4. Clique no botão **Agentes +**.
5. Adicione todos os agentes que pretende instalar, preenchendo os campos **Nome** e **Porta**. A porta deve estar entre 30000 e 30999.
6. Clique no botão **Salvar**.

## 3. Obter Network Connector Fingerprint

Para instalar os agentes, é necessário possuir o *fingerprint* gerado durante o processo de configuração do **Network Connector *Server***.

Para copiar o fingerprint, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelo ícone dos nove quadrados. > **Dispositivos** > **Configurações** > **Network Connector** > **Connectors**.
2. Na coluna **Ação**, clique na opção **Detalhes**.
3. Ao abrir a janela, clique no ícone identificado por um olho para revelar o **fingerprint**.
4. Selecione e copie o **fingerprint**.

## 4. Instalar Network Connector Agent

Para instalar o **Network Connector *Agent*** é necessário ter conhecimento básico de [Docker](https://docs.docker.com/engine/) e [Docker Compose](https://docs.docker.com/compose/).

Além disso, é necessário que o ambiente onde o agente e o servidor Linux (qualquer distribuição) tenha o [Docker Compose Standalone](https://docs.docker.com/compose/install/other/) instalado e configurado. Ao instalar o [Docker Compose](https://docs.docker.com/compose/install/) no servidor Linux, utilize o **Linux Standalone binary**.

:::(warning) (Importante)
O Network Connector Agent não deve ser instalado nas instâncias do senhasegura.
:::

Para instalar o **Network Connector Agent**, siga os passos abaixo:

1. Na máquina Linux que cumpre os requisitos descritos acima e que esteja em uma rede que o senhasegura não possui acesso.
2. Escreva o arquivo `docker-compose.yml` com as configurações do agente (exemplos abaixo).
	* Atenção para os campos:
    	* `SENHASEGURA_FINGERPRINT`: valor obtido anteriormente.
    	* `SENHASEGURA_AGENT_PORT`: defina uma porta entre 30000 e 30999 para este agente. Escolha uma que não esteja em uso.
    	* `SENHASEGURA_ADDRESSES`:
        	* Em casos de instalação standalone: endereço de IP da instância. Exemplo: `192.168.10.20`.
        	* Em casos de instalação em cluster: endereços de IP das instâncias do senhasegura, separado por vírgula, sem espaço. Exemplo: `192.168.10.20,192.168.10.21`.
    	* `SENHASEGURA_AGENT_SECONDARY`: campo opcional. Pode ser `true` ou `false`.
3. Execute o comando `sudo docker-compose up -d`.

Exemplo do arquivo `docker-compose.yml`:

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

:::(info) (Info)
Você pode acompanhar os logs de execução do agente utilizando o comando `sudo docker-compose logs -f`.
:::

## 5. Definir a versão do agente

É possível definir a versão do agente a ser utilizada, alterando a versão da imagem de contêiner. A escolha é determinada dentro do arquivo `docker-compose.yml`.

Se você deixar, conforme os exemplos acima, com a opção *latest*, estará utilizando a última versão disponível do agente: `image: "registry.senhasegura.io/network-connector/agent-v2:latest"`.

Para utilizar o agente em outras versões, utilize `image: "registry.senhasegura.io/network-connector/agent-v2:3.32"`.

:::(info) (Info)
Procure manter a versão do agente equivalente à versão do senhasegura utilizada pelo agente no momento.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).