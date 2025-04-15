# Como instalar o agente do Network Connector no Microsoft Azure

Neste documento, você encontra um guia passo a passo sobre como instalar o agente do **Network Connector** no Microsoft Azure. 

## Instalar o agente do Network Connector no Microsoft Azure

Para instalr o agente do **Network Connector** no Microsoft Azure, siga os passos abaixo:

1. Acesse o [portal do Azure](https://portal.azure.com).
1. Navegue até **Container Instances** e clique em **Create**.
1. Na seção **Basics**, faça as seguintes configurações:
	* Em **Container name**, insira **primary/secondary** e a porta do agente.
	* Em Image source, escolha **Other registry**.
	* **Image type**: `Public`.
	* **Image**: `registry.senhasegura.io/network-connector/agent-v2:<versão do senhasegura>`.
	* **OS Type**: `Linux`.
	* **Size**: `1 vCPU, 1 GB de memória, 0 GPUs`.
1. Na seção **Networking**, altere o **Networking Type** para **Private** e configure a rede na qual o **Network Connector** irá operar. Não é necessário definir portas na seção **Ports**.
1. Na seção **Advanced**, faça as seguintes alterações:
	* **Restart Policy**: `Always`.
	* Configure as variáveis de ambiente como:
    	* `SENHASEGURA_FINGERPRINT`: Fingerprint como visto no senhasegura. Deixe a opção `Mark as secure` em **Yes**.
        * `SENHASEGURA_AGENT_PORT`: Porta definida na interface do senhasegura.
        * `SENHASEGURA_ADDRESSES`: IPs das máquinas rodando senhasegura.
        * `SENHASEGURA_AGENT_SECONDARY`: Como `true` ou `false`.
1. Finalize outras configurações conforme suas necessidades.
1. Clique em **Review + create**.
1. Clique em **Create** para finalizar o processo.

O agente será inicializado automaticamente e se conectará ao servidor do senhasegura.

Assista ao vídeo de [instalação do agente do Network Connector no Microsoft Azure](https://www.youtube.com/watch?v=tDrtui_y4co)

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).