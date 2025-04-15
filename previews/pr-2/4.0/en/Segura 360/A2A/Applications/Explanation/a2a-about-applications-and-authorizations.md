# About applications and authorizations in A2A



This document provides an overview of the applications and authorizations used in the **A2A** module, explaining their roles in the secure consumption of the APIs available in Segura.

## Applications 

Applications represent the identities that make calls to the **A2A** APIs. Each application contains detailed information enabling centralized and secure management of these interactions, such as authentication methods, access keys, and authorized scopes.

## Importance of applications

* **Unique identification**: each application has a unique identifier code, ensuring traceability of its interactions.  
* **Custom authentication**: the authentication method is configured to meet the application’s requirements, such as OAuth or AWS.  
* **Centralized management**: applications are configured and managed in a single location, allowing for greater control and visibility.

## Authorizations

Authorizations define the resources and permissions granted to an application to consume APIs, enabling secure and controlled interactions with the services offered by Segura.

## Elements of an authorization

* **Expiration date**: allows configuring the validity of the authorization, limiting its use over time.  
* **System and environment**: associates a specific system and environment with the authorization, simplifying organization and tracking of performed actions.  
* **Authorized resources**: specifies the Segura data the application can access.  
* **Encryption**: provides the option to enable encryption to protect sensitive information during use.  
* **Access permissions**: specifies access levels, such as read-only or read and write, for **PAM** resources like credentials and devices.  
* **Security restrictions**: defines authorized IP addresses, permitted HTTP referrers, and additional validations, such as certificate fingerprinting.

## Relationship between applications and authorizations 

While applications identify who is consuming the APIs, authorizations determine what and how these consumers can access. This separation allows for granular and secure configuration, essential in environments handling critical data.

## Use case 

**Integration of a 


banking administrative system to Segura**

**Primary actor**: Carlos (IT administrator at a bank)

**Summary**: this use case describes how Carlos uses the **A2A** module to integrate an administrative system with Segura. The integration allows for automatic credential synchronization and centralized, auditable access management, meeting compliance requirements in the banking sector.

**Note**: this use case is relevant for financial organizations aiming to connect their administrative system to Segura to improve governance and security in credential and permission management. Ensure the system supports authentication methods like OAuth 2.0 provided by Segura.

**Basic flow:**

1. **Application creation**

   1. Carlos creates an application in the **A2A** module named "Adm Integration."  
   2. He configures the authentication method as OAuth 2.0, ensuring secure and standardized communications.

2. **Authorization definition**

   1. Carlos links the application to a specific authorization.  
   2. He grants access only to **PAM Core** and configures access permissions as **Read and write**.  
   3. To enhance security, Carlos restricts the authorization usage to the server’s IP address.

3. **Credential synchronization**

   1. The bank’s administrative system authenticates with Segura using the configured application.  
   2. User credentials are automatically synchronized between the administrative system and Segura.

4. **Audit and tracking**

   1. All actions performed by the administrative system in Segura are logged for auditing purposes.  
   2. Carlos monitors credential usage to ensure compliance with banking regulations and identify potential security incidents.

**Post-condition**:

The integration is successfully completed, allowing the system to securely and audibly synchronize credentials, optimizing identity management and minimizing risks.



## Conclusion

The configuration of authorizations and applications in **A2A** is essential to ensure secure and efficient integration with systems such as identity and access management solutions. This use case highlights how creating applications linked to specific authorizations enables defining granular permissions, restricting access based on IPs, and ensuring traceability of all activities.

By leveraging these functionalities, IT administrators like Carlos can implement robust integrations, ensuring that only properly authorized access is performed. This approach not only reinforces organizational security but also promotes compliance and efficiency in credential management within complex IT environments.
