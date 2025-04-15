This article details the **Domum Remote Access** architecture and gateway regions.



---

## Architecture

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665074966304.png)Communication architecture between the remote user and the senhasegura instance through Domum 

Domum provides secure access to web sessions coming from third\-party desktops. The devices connect to senhasegura’s gateway using the HTTPS protocol without needing a VPN. senhasegura, in turn, establishes a secure connection with the company’s resources.

Companies can use the Domum module to create, enforce, and monitor their own Privileged Remote Access rules tailored to their needs.

This diagram shows how different organizations can use a senhasegura Host to connect to their corporate senhasegura instances without creating conflicts between gateways.

  


  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1683814444166.png)Connection through the senhasegura Host 



---

## Unsupported features

**Domum Remote Access** doesn´t support the following features:

* **RDP Proxy**: Windows Remote Desktop isn’t compatible with Domum's RDP proxy functionality.
* **SSH Proxy**: tools such as Putty and other SSH\-based applications aren’t supported by Domum's SSH proxy feature.
* **Windows Remote Access via mobile phone**: Domum doesn't support remote access to Windows systems via mobile phones.



---

## Domum Gateway regions

Domum uses infrastructure from the Google Cloud Platform (GCP). To ensure the best possible performance, each instance of your senhasegura Domum Gateway connects to its nearest region.

Currently available regions:

* Frankfurt, Germany
* Sydney, Australia
* São Paulo, Brazil
* Dammam, Saudi Arabia

  


