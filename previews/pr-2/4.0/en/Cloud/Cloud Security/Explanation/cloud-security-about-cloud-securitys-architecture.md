# About Cloud Security’s architecture

In this article, you’ll find an overview of **Cloud Security’s** multi-tenant architecture and a definition of its three key levels of components.

![Captura de tela 2023-11-24 115241.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202023-11-24%20115241.png){height="" width=""}

## Organization
An organization is the first level in the multi-tenant architecture of **Cloud Security**. Each organization is a self-contained entity that has its own set of tenants.

At the organization level, there is always at least one administrator. By default, when an organization is created, it comes with one tenant associated with it. 

## Tenant
A tenant is the second level of the multi-tenant architecture. It represents a completely isolated and segregated environment within an organization.

Every organization must have at least one tenant, and each tenant is always affiliated with one organization. Furthermore, each tenant must have at least one administrator.

## Users

Users are the individuals who perform actions within the tenants. Users can be part of one or more tenants, either within the same organization or across different organizations.

Users within **Cloud Security** can have different roles, which determine their access and responsibilities. Here are the key roles within the multi-tenant architecture:

| **Role** | **Description** |
| --- | --- |
| **Cloud Security - Tenant Administrator** | This role is responsible for the overall management and has Admin access to the Tenant.  |
| **Cloud Security - Tenant Auditor** | This role has *Read-only* access to **Cloud Security’s** audit reports. |
| **Cloud Entitlements - Basic User** | This role has basic access to Segura **Cloud Entitlements** resources. |
| **Cloud Entitlements - Administrator** | This role has full access to **Cloud Entitlements** resources. |
| **Cloud Entitlements - Auditor** | This role has *Read-only* access to all **Cloud Entitlements** pages. |
