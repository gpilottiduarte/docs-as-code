# About architecture and Domum gateway regions

This document provides information about the **Domum Remote Access** architecture and gateway options.

## Architecture

**Domum** provides secure access to web sessions coming from third-party desktops. The devices connect to Segura’s gateway using the HTTPS protocol without needing a VPN. Segura, in turn, establishes a secure connection with the company’s resources.

Companies can use the **Domum** module to create, enforce, and monitor their own Privileged Remote Access rules tailored to their needs.

This diagram shows how different organizations can use a Segura host to connect to their corporate Segura instances without creating conflicts between gateways.
    
![image-1683814444166\(2\)](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1683814444166%282%29.png)


Remote sessions via **Domum** offer features such as session recording, real-time live streaming, command blocking, and behavioral analysis.

## Unsupported features

**Domum Remote Access** doesn't support the following features:
- **RDP Proxy**: Windows Remote Desktop isn’t compatible with **Domum**'s RDP proxy functionality.  
- **Terminal Proxy**: tools such as Putty and other SSH-based applications aren’t supported by **Domum**'s SSH proxy feature.  
- **Windows Remote Access via mobile phone**: **Domum** doesn't support remote access to Windows systems via mobile phones.  
- **Database Proxy**: Database connections aren’t supported by **Domum**.

## Domum Gateway regions'

**Domum** uses infrastructure from the Google Cloud Platform (GCP). To ensure the best possible performance, each instance of your Segura **Domum** Gateway connects to its nearest region.

Currently available regions:

- Dammam, Saudi Arabia
- Frankfurt, Germany  
- Sydney, Australia  
- São Paulo, Brazil  