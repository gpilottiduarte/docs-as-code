# How to install the Network Connector agent on Microsoft Azure

In this document, you will find a step-by-step guide on how to install the **Network Connector** on Microsoft Azure.

## Install the Network Connector agent on Microsoft Azure

1. Access [Azure](https://portal.azure.com).
2. Navigate to **Container Instances** and click **Create**.
3. In the section **Basics**, make the following settings:
	* In **Container name**, enter **primary/secondary** and the agent's door.
	* Under Image source, choose **Other registry**.
	* **Image type**: `Public`.
	* **Image**: `registry.senhasegura.io/network-connector/agent-v2:<senhasegura latest version>`.
	* **OS Type**: `Linux`.
	* **Size**: `1 vCPU, 1 GB memory, 0 GPUs`.
4. In the section **Networking**, change the **Networking Type** for **Private** and configure the network on which the **Network Connector** will operate. It is not necessary to define ports in the section **Ports**.
5. In the section **Advanced**, make the following changes:
	* **Restart Policy**: Always.
	* Configure the environment variables as:
		* `SENHASEGURA_FINGERPRINT`: Fingerprint as seen on senhasegura. Leave the option Mark as secure in **Yes**.
		* `SENHASEGURA_AGENT_PORT`: Port defined in the senhasegura interface.
		* `SENHASEGURA_ADDRESSES`: IPs of machines running senhasegura.
		* `SENHASEGURA_AGENT_SECONDARY`: As `true` or `false`.
6. Finalize other settings as per your needs.
7. Click **Review + create**.
8. Click **Create** to finish the process.

The agent will automatically start and connect to the senhasegura server.

Watch the video of installing the [Network Connector agent on Microsoft Azure](https://www.youtube.com/watch?v=tDrtui_y4co).

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).