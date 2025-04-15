# Domum Remote Access

This document provides an overview of **Domum Remote Access**.

## About Domum

The **Domum Remote Access** module is a Privileged Remote Access solution that gives remote users access to an organization’s internal resources. It provides a more secure environment for companies whose business operations often take place outside the company’s office by controlling the access of remote employees, third parties, and customers.

Besides providing secure access to remote employees and third parties, **Domum** is fast and easy to use. It's a VPN-less solution that doesn't require setting up a new network for each user connecting from an external network.

###  User roles in Domum

- Administrators
- Auditors
- Remote users

## Benefits

- User origin management.  
- Specific remote access policies that differ from other PAM users.   
- Secure authentication via a dedicated link and token validation.  
- Remote access monitoring.  
- JIT (Just In Time) accesses for third-party users.

:::(info) (**Info**)
**Domum** fully complies with GDPR and other data protection laws and does not store credentials, sessions, or user data.
:::

## Domum's general workflow

The **Domum** workflow is quite simple and boils down to the administrator user defining and creating privileged remote access policies according to your company's needs. **Domum** will generate these accesses, which the administrator can monitor and control. See below an example of the workflow and its respective steps:

1. The Administrator user defines and configures external accesses.  
2. **Domum** generates a personal link and sends a token via SMS or e-mail.  
3. The user accesses the link.  
4. The **Domum** Gateway communicates with the corporate environment.  
5. The user inserts the token received via SMS or e-mail to log in.  
6. The user has authenticated access to the Segura where he can perform his operations.

:::(info) (**Info**)
The access flow may change depending on the settings.
:::