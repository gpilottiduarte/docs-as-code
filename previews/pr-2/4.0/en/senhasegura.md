# About Segura

## Introduction

Welcome to Segura! This guide will assist you in getting started with understanding what Segura is, its expanded purpose, and the diverse range of modules and products it offers to manage and secure your organization's information access.

### **What is Segura?**

Segura has evolved into a comprehensive Information Access Management (IAM) solution aimed at protecting organizations against a wide spectrum of cybersecurity threats. Initially established as a Privileged Access Management (PAM) solution, Segura now addresses challenges associated with both privileged and general access management. By integrating traditional IAM methods and modern security techniques, Segura secures high-privilege and standard accounts, helping to prevent unauthorized access, misuse, and internal threats, ensuring your organization’s security and compliance.

### **Purpose and importance**

In the traditional Information Access Management (IAM) space in cybersecurity, key solutions include user authentication methods like passwords and multi-factor authentication, user provisioning for managing access rights, Role-Based Access Control (RBAC), Single Sign-On (SSO) for seamless logins across systems, directory services such as LDAP for centralized user data management, identity federation for cross-organizational access, and comprehensive audit and compliance reporting for regulatory adherence. 

Segura encompasses these solutions and more, ensuring that both privileged accounts with administrative access and general user accounts are safeguarded against threats. By managing various types of accounts, ensuring credential security, and monitoring access to critical assets, it enforces segregation of duties and maintains regulatory compliance. This comprehensive approach empowers organizations to streamline access management, enhance security, and efficiently enforce secure processes throughout their IT environments.

---

## How Segura works

### Core concepts
Understanding the core concepts behind Segura is crucial for leveraging its full potential in protecting your organization’s privileged accounts. These concepts form the foundation of Segura’s solution and ensure secure, controlled, and monitored access to critical systems.

- **Privileged Access Management (PAM):** ensures that privileged accounts are protected and their access is controlled and monitored.
- **Credential Vaulting:** the practice of securely storing and managing credentials to prevent unauthorized access.
- **Session Monitoring and Recording:** real-time tracking and recording of privileged sessions to ensure accountability.
- **Role-Based Access Control (RBAC):** granting permissions based on user roles to minimize unauthorized access.
- **Just-in-Time (JIT) Access:** temporarily grants privileged access, which is automatically revoked after a certain period.

### Modules and components overview
The Segura solution is built on a robust architecture designed to enhance the security, scalability, and efficiency of Segura. The additional modules and components of the product suite further improve security across various areas. The suite includes:

#### Privileged account and session management
- **PAM Core:** secure repository for storing and managing credentials.
- **Domum Remote Access:** mediates and monitors user sessions to sensitive systems.
- **MySafe:** provides monitored access to databases, ensuring secure DBA activities.

#### Privilege elevation and delegation management
- **EPM Windows:** manages privileged access on Windows endpoints.
- **EPM Linux:** manages privileged access on Linux endpoints.
- **EPM for MacOS:** manages privileged access on MacOS endpoints.
- **Go AD Bridge Manager:** facilitates integration with Active Directory for unified access management.

#### Secrets management
- **DSM - DevOps Secret Manager:** securely manages secrets and credentials for DevOps environments.

#### Multi cloud
- **CIEM - Cloud Entitlements Manager:** manages cloud entitlements securely.
- **Cloud IAM:** ensures secure identity and access management in cloud environments.

#### Certificate lifecycle management
- **Certificate Manager:** oversees the lifecycle of digital certificates to ensure secure communications.

#### Privileged infrastructure
- **Load Balancer:** distributes network or application traffic to ensure reliability and performance.
- **Crypto Appliance:** provides hardware-based cryptographic operations to secure sensitive data.

By leveraging Segura's powerful modules and components, your organization can ensure secure, monitored, and compliant privileged access management, reducing the risk of cyber threats and enhancing overall security posture.

- - -

## Workflow
The workflow in Segura is designed to provide a secure and efficient way to manage privileged access. Here’s how it typically works:

1. **Login:** Users authenticate via multi-factor authentication to access Segura.
2. **Access Request:** users request access to specific resources based on their roles and permissions.
3. **Approval:** requests are reviewed and approved by authorized personnel if elevated permissions are needed.
4. **Credential Retrieval:** approved users securely retrieve credentials from the Credential Vault.
5. **Session Proxy:** user sessions are mediated through the Session Proxy to ensure secure access and monitoring.
6. **Activity Monitoring:** all activities are monitored and recorded for auditing purposes.
7. **Logout:** users log out, and any temporary permissions granted during the session are revoked.
8. **Audit and Reporting:** administrators can review session recordings, change logs, and user activity reports to ensure compliance and security.

---

## Install Segura

Installing Segura is a straightforward process designed to get you up and running quickly. Before beginning the installation, ensure that your environment meets the necessary system requirements as discussed in the introduction. The installation process involves setting up the Segura platform on your chosen operating system, configuring the initial settings, and verifying the installation.

### System requirements
- **Operating Systems:** Windows, macOS, Linux
- **Hardware:** Minimum 8GB RAM, 200GB storage
- **Network:** Stable internet connection for updates and remote access features

For more details check [Virtual appliances](/v4/docs/installation-virtual-appliances)

### Installation steps

To start the installation, follow these steps:

1. **Define your architecture**: use the articles [High Availability (HA) and Disaster Recovery(DR)](/v4/docs/installation-architecture-high-availability-and-disaster-recovery) and [Supported architectures](/v4/docs/installation-supported-architectures) to determine the most suitable architecture for your Segura deployment.
2. **Firewall rules**: create the necessary [firewall rules](/v4/docs/installation-firewall-rules) based on the selected architecture.
3. **Access Installation Guides:** detailed step-by-step instructions for installing Segura on various operating systems can be found in [Segura Installation Documentation](/v4/docs/installation).
4. **Verification:** verify the installation by accessing Segura using its address in your browser. Ensure that all services are running correctly and that you can log in with the administrator account.

By following these steps, you will have Segura installed and configured, ready to manage and secure your organization's privileged access.

