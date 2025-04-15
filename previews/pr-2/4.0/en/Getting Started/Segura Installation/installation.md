# Segura Installation

In this article, you’ll find a step-by-step guide on how to get started with Segura.

## Requirements

* **Define your architecture**: use the articles [High Availability (HA) and Disaster Recovery(DR)](/v4/docs/installation-architecture-high-availability-and-disaster-recovery) and [Supported architectures](/v4/docs/installation-supported-architectures) to determine the most suitable architecture for your Segura deployment.

* **Firewall rules**: create the necessary [firewall rules](/v4/docs/installation-firewall-rules) based on the selected architecture.
 

* * *

## Getting started
Once you've fulfilled the requirements above, you can initiate the installation process by following these five steps:

### Step 1: Choose your appliance type

Begin the installation process by selecting the appliance type that best suits your needs. Segura provides two options:

1. **Virtual Appliance**: if you choose the Virtual Appliance, [download the appropriate version](/v4/docs/installation-virtual-appliances) for your virtualization tool or cloud provider. 
2. **Crypto Appliance (Physical Appliance)**: for the physical appliance, refer to the [Crypto Appliance First Steps](/v4/docs/installation-how-to-configure-the-crypto-appliance-first-steps) and [Crypto Settings](/v4/docs/installation-how-to-configure-addressing-and-snmp-service) articles to guide you through the configuration process.


### Step 2: Configure Segura via CLI

In this step, you'll [configure the network and hostname](/v4/docs/installation-how-to-set-up-the-network-and-change-the-hostname) using the [SSH Administrative user](/v4/docs/installation-admin-users). If needed, follow the instructions in the [How to Access an SSH Admin Session into the Segura Platform](/v4/docs/administration-ssh-access) article.


### Step 3: Configure Segura Web
Using the [Web Administrative user](/v4/docs/installation-admin-users), complete the following tasks:

1. Activate the [License and Affinity Portal](/v4/docs/installation-how-to-activate-the-Segura-license)​.
2. Accept the[ EULA](/v4/docs/installation-eula).
3. Complete the [Wizard steps](/v4/docs/orbit-web-how-to-use-the-wizard).
4. Set up [Backup](/v4/docs/installation-backup-overview) procedures.
5. [Master Key ceremony](/v4/docs/how-to-manage-the-master-key).

### Step 4: Update Segura
For instructions on how to update Segura, refer to the [Update Segura](/v4/docs/installation-update-Segura) article.


### Step 5: Data replication (applicable to two or more members)

:::(Info) (Info)
Skip this step if you’re using a standalone architecture.
:::

If you’re implementing data replication, you’ll have to [configure a cluster](/v4/docs/installation-data-replication-how-to-create-a-cluster). Test the replication by performing a [Disaster Recovery test](/v4/docs/installation-how-to-perform-a-disaster-recovery-test) called **Active-Passive**.

:::(Error) (Important Hardware Requirement Notice for HA)
When deploying Segura in a clustered environment, particularly for high availability (HA) setups, it is crucial to ensure that **all instances (members) in the cluster have identical hardware specifications**. 

**Mismatched hardware configurations among cluster members can lead to performance inconsistencies, reliability issues, and potential system failures.**

For reference, please review our [Minimum Hardware Requirements](/v4/docs/installation-virtual-appliances#requirements) article to ensure each instance meets the necessary standards.
:::

* * *

## Next steps after installation

* [Configure email account](/v4/docs/how-to-manage-smtp-settings)
* [User management](/v4/docs/administration-user-management)


* * *

Do you still have questions? Reach out to the [ Segura Community](https://community.Segura.io/?utm_source=HelpCenter&utm_medium=Menu&utm_campaign=MenuLink).
