# Multi-tenant

In software architecture, multi-tenant refers to a single instance of software that serves multiple clients or tenants, where each tenant is logically separate from the others. Each tenant can have its own custom configurations, data, and functionalities, but they all share the same infrastructure and application instance.

## Main features

### Data isolation

Each tenant has its data isolated from the other tenants, preventing one tenant from accessing the data of another. Segura performs this segregation in the database layer for application information and in the directory layer for credential backups.

### Identity and access management

With a multi-tenant architecture, we have robust access control, ensuring that only authorized users in a given tenant can access its data and functionalities.

### Encryption

Encryption protects data at rest and in transit in the multi-tenant architecture. Data specific to each tenant is encrypted with different keys, reinforcing separation and security.

### Personalized security settings

It’s possible to allow each tenant to customize its own security settings, aligning with different compliance requirements and internal policies.  
