# About Segura APIs

The **Segura APIs** were developed to provide an interface that allows other applications and tools to integrate with Segura, enabling secure access to vault functionalities and information. These APIs ensure programmatic access and management of data stored in Segura, maintaining the integrity, confidentiality, and auditability of information.

Operating under REST architecture, the Segura APIs:

* Are based on the HTTP protocol.
* Enable stateless communication between client and server.
* Use `GET`, `POST`, `PUT`, `DEL` methods to make requests.
* Support authentication via **AWS**, **OAuth v1.0**, and **OAuth v2.0**.
* Accept URL _form-encoded_ requests.
* Return JSON responses.
* Offer integration capabilities with third-party applications for actions such as querying, creating, updating, activating, and deactivating sensitive information, including credentials, devices, access keys, remote sessions, related users, digital certificates, dashboards, DevOps secrets, and corporate personal and team sensitive information.

## Features

The **Segura APIs** include:

* **RESTful web service**: Segura web service operates under a REST architecture, ensuring standardized and efficient communication.
* **Authentication methods**: the API supports AWS, OAuth v1.0, and OAuth v2.0, ensuring robust authentication and secure access to privileged data.
* **Logging and auditing**: each API request generates detailed logs with essential information such as the date, time, IP address of the origin device, and the client application involved. In order to maintain data security, sensitive information such as passwords and keys remain hidden.
* **Access control**: in addition to OAuth authentication, access control also considers the IP address of the origin device, further enhancing security.
* **Credential management**: client applications can access only the credentials they created or those specifically assigned to them in the Segura settings.
* **Credential types**: the API allows the management of various types of credentials, such as passwords used to access devices, servers, or routers, and RSA keys for SSH connections. Passwords and RSA keys are subject to automatic rotation according to each environment's security policy.
* **Editable entities**: the API allows the editing of various entities, including credentials, devices and personal information, ensuring comprehensive management of privileged data.

## Applicabilites and use cases

**Segura APIs** can be applied in various scenarios, such as:

### Credential management

With the **Credentials** API, organizations can efficiently register and manage credentials, ensuring secure access to devices and critical resources registered in PAM Core. This is particularly valuable when integrated with third-party applications, such as inventory management tools or automation platforms.

**Use case**

A FINTECH needs to ensure that the use of its credentials is secure and audited. Using the Segura API, it can integrate its vulnerability scanning system with the **PAM Core** security platform. With this integration, the tool can consume the credentials already registered in Segura to perform its procedures, ensuring that only authorized employees have secure and controlled access to critical resources.

**Reference document**

* [Credentials](../../../v4/docs/api-a2a-pam-core-credentials/)

\


### Device management

The **Devices** API facilitates the administration and maintenance of devices registered in **PAM Core**, ensuring they remain accessible only to authorized users.

**Use case**

A HEALTHTECH needs to manage various network-connected devices already registered in its CMDB. Using the API, the company can automate these devices' registration and initial configuration, ensuring they are ready for immediate use and in compliance with security standards and industry regulations.

**Reference document**

* [Devices](../../../v4/docs/api-a2a-pam-core-devices/)

\


### Remote session management

The **Remote session** API allows organizations to control and monitor the use of proxy sessions registered in **PAM Core** in an automated and centralized manner. This API facilitates the creation, monitoring, and termination of proxy sessions, offering resources for identity management, access control, and activity auditing.

**Use case**

A payment technology company that processes online financial transactions must ensure communications security between internal systems and business partners. The client has an internally developed system used by employees to perform necessary maintenance accesses. To monitor these accesses without changing how employees work, the company decided to use PAM, maintaining access through the custom application.

By using the Segura **Remote session** API to create an authenticated URL for a web proxy session, the company can seamlessly integrate PAM into its platform. This allows users to be redirected to authenticated sessions, ensuring the security and integrity of financial transactions performed without employees needing to log in directly to Segura. Thus, the company can control and monitor the use of proxy sessions in an automated and centralized manner.

**Reference document**

* [Remote sessions](../../../v4/docs/api-a2a-pam-core-remote-sessions/)

\


### SSH key management

Through the **SSH key** API, organizations can manage SSH keys registered in **PAM Core** in a simple and centralized way, allowing process automation, strengthening security, and ensuring compliance with access policies.

**Use case**

A banking company that implements SSH keys to access Unix/Linux servers can easily manage the keys through the API for registration, querying, or editing, thus ensuring audited and monitored access via Segura.

**Reference document**

* [SSH keys](../../../v4/docs/api-a2a-pam-core-ssh-keys/)

\


### Related user management

The **Related user** API enables the management of associations between Segura users and multiple credential usernames, offering a flexible and customized solution for managing access to devices.

**Use case**

An IT consulting firm that provides services to multiple organizations needs to efficiently manage its consultants' access to clients' systems and resources. Using the API, the company can associate multiple credential usernames with a single Segura user, simplifying access management and ensuring compliance with clients' security policies.

**Reference document**

* [Related users](../../../v4/docs/api-a2a-related-users/)

\


### Certificate management

The **Certificate Manager** API is designed for organizations of all sizes. It aims to centralize and simplify the certificate management process, including secure certificate import, continuous monitoring, automation of the certificate lifecycle, integration with Certificate Authorities, and publication on web servers.

**Use case**

An e-commerce company operating an online shopping platform must ensure the security of customers' financial transactions. The company can automate the SSL/TLS certificate renewal and monitoring process using the API, avoiding service downtime and ensuring secure and encrypted connections between customers and the web server.

**Reference document**

* [Certificate Manager](../../../v4/docs/a2a-api-certificate-manager/)

\


### Dashboard management

The **Dashboards** API allows the consumption of information compiled in the Segura Dashboards module. Through the API, it is possible to query the information in remote sessions, suspicious actions, and credential dashboards. The queried information can be used to create customized dashboards.

**Use case**

A cybersecurity company providing network monitoring and protection services needs to access and visualize information compiled in dashboards to analyze privileged user activities and identify potential security threats. Using the API, the company can query and analyze data from remote sessions, suspicious actions, and credentials, then create customized dashboards that provide valuable insights for proactively protecting their clients’ IT infrastructure.

**Reference document**

* [Dashboards](../../../v4/docs/api-dashboards/)

\


### Protected information management

This API allows systems integration with Segura's **Protected Information** product, facilitating the query of corporately shared information.

**Use case**

A data security consulting firm serving various organizations can use the API to store and update access passwords to client systems.

**Reference document**

* [Protected information](../../../v4/docs/api-a2a-protected-information/)

\


### DevOps secret management

The **DevOps Secret Manager (DSM)** API provides an agile and secure solution for tools and applications to consume the secrets and credentials used during development and operation in DevOps pipelines in an efficient and controlled manner.

**Use case**

A software development company adopting agile and DevSecOps practices needs to efficiently manage the secrets and credentials used in the development and continuous delivery pipelines. Through the API, **DSM** can deliver access securely to automation tools, ensuring that only authorized applications have access to the secrets needed to perform their tasks securely and efficiently without exposing credentials in their code.

**Reference document**

* [DevOps Secret Manager](../../../v4/docs/a2a-api-dsm/)

\


### MySafe stored item management

The **MySafe** APIs enable secure management of items such as passwords, notes, files, and corporate API secrets stored in the **MySafe** vault, ensuring the integrity and confidentiality of information.

**Use case**

In a consulting firm, a meeting note-taking AI is integrated with the API, allowing automatic note submission to the vault, where they are securely stored and shared with the involved participants for consultation. The API also allows another system to keep access to passwords, API secrets, and notes updated in real-time through integration. This ensures that, for example, if an employee is moved to another area, their access is automatically adjusted.

**Reference document**

* [MySafe](../../../v4/docs/api-mysafe/)

### SCIM APIs

Segura offers APIs in the SCIM (System for Cross-domain Identity Management) standard to provide a standardized way for user identity management and provisioning in the application. These APIs are crucial for the platform as they enable Segura integration with IGA (Identity Governance and Administration) systems, allowing automated and centralized management of users and their access within Segura.

**Use case**

A large bank needs to ensure centralized identity management. When a new employee is hired, their IGA application automatically communicates with the Segura platform via the SCIM API to provision the new user's account, assigning the necessary permissions and access efficiently and quickly. This ensures the new employee has immediate access to essential resources in Segura, eliminating the need for manual configurations and reducing the risk of errors.

**Reference document**

* [SCIM](../../../v4/docs/scim-api/)

\


## Conclusion

With a wide range of functionalities, **Segura APIs** cover everything from credential and device management to remote session monitoring and digital certificate management. These functionalities are applicable in various use cases, from financial organizations needing to secure online transactions to technology companies seeking to automate their development and operations processes.

**Segura APIs** represent not only a crucial tool for enhancing information security but also an opportunity for organizations to increase operational efficiency and ensure compliance with security regulations and standards. By adopting and integrating Segura APIs into their systems and processes, companies can achieve higher levels of data protection and customer trust in an increasingly complex and interconnected digital world.

## First steps

To start using Segura APIs, access the documents below:

* [APIs A2A](../../../v4/docs/apis-a2a/).
* [First steps to MySafe APIs](../../../v4/docs/api-mysafe-first-steps/).
