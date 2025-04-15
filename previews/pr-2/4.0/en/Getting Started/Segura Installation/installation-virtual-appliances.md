# Virtual Appliances

In this article, you'll find the minimum requirements to run the Segura application virtually, as well as the available formats and supported Cloud Service Providers (CSPs). 

It's important to note that actual requirements may vary depending on usage conditions, such as the number of running sessions, recordings, and other factors. For detailed information, refer to the [Technical Specifications](/v4/docs/general-information-Segura-technical-specification) article. 

For instructions on how to download a Virtual Appliance, refer to the [How to download a Virtual Appliance](/v4/docs/installation-how-to-download-a-virtual-appliance).

:::(Warning) (Caution) 
Always use the latest version of the Segura Virtual Appliance.
:::
## Requirements
When opting to install Segura using the Virtual Appliance model, make sure to meet the following requirements:

| Item | Requirement |
| --- | --- |
| **vCPUs** | 8 |
| **Memory** | 16 GB |
| **Hard Drive** | 250 GB|
| **Network** | Gigabit 1000 Mbps |

:::(Error) (Important) 
By default, the virtual instance of *Segura* comes configured with **2 vCPUs**, **4 GB of RAM**, and **100 GB** of hard drive. However, to ensure proper performance, it's crucial to adjust these values to meet the mentioned minimum requirements.
:::

:::(Error) (Important Hardware Requirement Notice for HA)
When deploying Segura in a clustered environment, particularly for high availability (HA) setups, it is crucial to ensure that **all instances (members) in the cluster have identical hardware specifications**. 

**Mismatched hardware configurations among cluster members can lead to performance inconsistencies and reliability issues.**

For reference, please review our [Minimum Hardware Requirements](#) article to ensure each instance meets the necessary standards.
:::

## Available Virtual Appliance formats
- OVA.
- VMDK.
- RAW.
- VHD.
- QCOW2

:::(Info) (Info)
Segura doesn't offer Virtual Appliances in ISO file format.
:::
## Supported Cloud Service Providers
- AWS.
- GCP.
- Azure.
