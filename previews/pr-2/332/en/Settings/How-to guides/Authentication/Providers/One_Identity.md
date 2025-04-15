# One Identity

The integration of senhasegura with the IGA One Identity Manager solution aims to centralize the control and release of accesses. Based on the concept of Identity Governance and Administration (IGA), it unifies privileged information, mitigating the risks related to the authorization of users to enter different environments with greater control of identity expansion and, consequently, strengthening the cybersecurity posture.

For this, it is necessary to configure the solution:

---
## In senhasegura

You need to register a provider to perform the integration:

1. Go to **Settings ➔ Authentication ➔ Identity Management (IGA) ➔ Providers**
2. Click on the `⁝` icon, select the option + New
![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-NIES60G7.png){height="" width=""}


3. Under Configuration, add the following information:
- Name
- active
- Protocol
- Description
- tag
4. Under Authentication, add the following information:
![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-2H8M95BU.png){height="" width=""}


- authentication method
- Validity Date/Time
- Allowed IPs
- Referrals allowed

---
## Prerequisites

1. Register a SCIM provider as described in the section Setting up a synchronization server from One Identity.

2. Set up a group sync as described in Setting up a synchronization server > Validar link

---
## Installation

After finishing the configuration of the requisites, go through the process of installing and configuring the One Identity Manager Service:

1. Launch the Server Installer program on the administrative workstation
2. In **Database connection**, enter valid connection credentials for the One Identity Manager database
3. In **Server Properties**, specify the server on which you want to install the One Identity Manager Service
4. In **Machine Functions**, select SCIM
5. In **Server Roles**, select the SCIM Connector
6. In **Service Settings**, check the One Identity Manager Service configuration
7. To configure remote installations, click **Next**
8. Confirm the security prompt with **Yes**
9. Select the directory with the installation files in **Select Installation Source**
10. In **Select private key file**, select the file with the private key
11. In **Service Access**, enter the service installation data
12. Click **Next** to start installing the service
13. Click **Finish** on the last page of the server installer

---
## Cloud Sync

When installation is complete, create a project for initial synchronization of a cloud application.

1. Start Launchpad and log into the One Identity Manager database. If you prefer, click Start New Sync
2. Select the **target system** type SCIM Interface, and click Start.
This option will launch the Synchronization Editor project assistant
3. In **System Access**, specify how One Identity Manager can access the target system. Enable **Connect** using the remote connection server
4. Select the server to be used for the connection in the **Work Server** option
5. In **Configuration data**, enter the connection parameters required by the senhasegura SCIM connector to log in to the cloud application, as shown below:
- DNS name/URL of the servers with the senhasegura hostname.
Ex.: `https://vault.senhasegura.com/`
- URI service with iso/scim/v2
- Authentication endpoint or URL with the senhasegura authentication URL. 
Ex: `https://vault.senhasegura.com/iso/oauth2/token`
- Application/client ID with **senhasegura client ID**
- Client secret with **senhasegura Client secret**
- Lease type with customer credentials option
6. Perform connection test in **Check connection settings,** by clicking on **Test**.
7. In **Display Name**, enter a unique display name for the cloud app
8. In **Select Project Template**, add a project template with SCIM sync option
9. In **Restrict access to target system**, select the **Read-only access to target system** option
10. In **Sync Server**, select the sync server to perform the sync
11. To close the project assistant, click on **Finish**