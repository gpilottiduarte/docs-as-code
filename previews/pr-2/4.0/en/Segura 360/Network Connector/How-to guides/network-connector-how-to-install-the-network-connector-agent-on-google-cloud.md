# How to install the Network Connector agent on Google Cloud


In this document, you will find a step-by-step guide on how to install the **Network Connector** on Google Cloud.

:::(Info) (Info) Use the automatic container configuration functions available in the instance creation interface of Compute Engine to simplify the process. :::

## Create instance on Google Cloud

1. Go to the **Compute Engine** page in the Google Cloud dashboard.
2. Select the option **VM Instances** no menu lateral.
3. Click in **Create Instance** to start the process of creating a new instance
4. On the instance creation screen, define a name for the instance and choose the desired region.
5. Make the following changes to the configuration parameters:
    * Series: E2.
    * Machine Type: e2-small.
6. In **Container**, click on the button **Deploy Container** define the fields:
    * **Container Image** as `registry.senhasegura.io/network-connector/agent-v2:latest`.
    * **Restart policy** as `Always`.
7. In **Environment Variables**, define the fields:
    * `SENHASEGURA_FINGERPRINT`: The fingerprint as seen in senhasegura.
    * `SENHASEGURA_AGENT_PORT`: The port defined in the senhasegura interface.
    * `SENHASEGURA_ADDRESSES`: IPs of machines running senhasegura.
    * `SENHASEGURA_AGENT_SECONDARY`: As `true` or `false`.
8. In `Advanced Configuration` select the option `Management`.
9. Under Metadata, click `Add Item` and enter the following combination:
    * Key: `google-logging-enabled`.
    * Value: `true`.
10. Leave the rest of the settings as default.
11. Click **Create** to finish the process.

The agent of **Network Connector** should automatically connect to senhasegura after these steps.

The created instance will be updated automatically, and it will only be necessary to restart it when there is an update to the container image.

:::(Info) (Info) If necessary, configure the network on which the Network Connector will operate, in the section **Advanced Options** > **Networking**. :::

### Access Logs

To access Network Connector agent logs, follow the steps below:

1. In **Compute Engine** From Google Cloud, navigate to the list of virtual machines and click the instance where the agent is running.
2. Access the logs through the path **Observability** > **Logs**.
    * In **All Logs**, are the logs of **Network Connector** format `client: <log message>`.
    * Use the filter `jsonPayload.message =~ "client: .*"` for easier viewing.


Watch the video of [Network Connector agent installation on Google Cloud](https://www.youtube.com/watch?v=uPJIho2YVXY).

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).