# Architecture

The architecture of Segura's solutions is designed to provide flexible, secure, and scalable options to meet the diverse needs of clients. By offering SaaS model, Segura ensures that organizations can choose the architecture that best fits their security, compliance, and operational requirements.

## Data center location and security

Segura's SaaS application is operated from Google's secure third-party data centers that boast SOC 2 Type II and SOC 3 Type II certification. These centers are equipped with robust backup power systems, fire suppression mechanisms, and round-the-clock security personnel. Physical access to server rooms is highly restricted, ensuring stringent control over intrusions.

To comply with local regulations such as GDPR and respect national sovereignty, each client's tenant is hosted on geographically proximate servers, ensuring compliance and low-latency performance.

### Geographical availability for SaaS

* North America
* LATAM (Latin America)
* EMEA (Europe, Middle East, and Africa)
* APAC (Asia Pacific)

:::(Info) (Info)
Any region offered by GCP (Google Cloud Platform), check [all regions available](https://cloud.google.com/about/locations/#lightbox-regions-map){target=`_blank`}.
:::

## Communication and integration

All communication between Segura and the client's corporate network is facilitated through the [Network Connector](/v4/docs/network-connector). This connector is implemented as a container that integrates seamlessly with the client's existing network infrastructure.

---

## VPN-less architecture

![image](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1689002215816.png){height="" width=""}

In the VPN-less model, all connectivity inside customer environment is managed via the Network Connector.

### Using Segura Network Connector

Segura offers a [Network Connector](https://docs.Segura.io/v4/docs/network-connector) that can be deployed within a customer's infrastructure. This connector facilitates various tasks such as remote password changes, acts as a proxy for remote access connections, and enables integration with other customer services. It is a critical component for maintaining secure connectivity between the customer’s environment and Segura’s SaaS solutions.

### Using Segura EPM

All communication with the Segura EPM is conducted via HTTPS, ensuring secure connectivity. Managed endpoints are required to have the capability to connect to Segura's SaaS tenant.

---
