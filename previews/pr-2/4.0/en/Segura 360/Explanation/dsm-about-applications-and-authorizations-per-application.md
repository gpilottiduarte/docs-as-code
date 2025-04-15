# About applications and authorizations per application

Segura **DevOps Secret Manager (DSM)** offers administrative teams the ability to establish access segregation policies for applications, where each application can be configured with one or several authorizations, guaranteeing selective access to specific secrets. In addition, DSM automates the generation of reports based on applications, simplifying auditors' search for specific data.

Another essential feature is having multiple dynamic provisioning profiles linked to a single application. With this configuration, when a request is made to create a new authorization, DSM uses this profile to generate ephemeral credentials on the target devices. This includes automatically generating temporary cloud access keys in AWS, Azure, or GCP and instantly registering them as sensitive information.

Furthermore, each application can be configured with a unique authentication method, ensuring that other resources can securely access secrets from a specific authorization.