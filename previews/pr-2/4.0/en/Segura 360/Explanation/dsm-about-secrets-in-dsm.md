# About secrets in DSM

A secret refers to confidential information such as access keys, cloud credentials, key/value pairs, and credentials used in DevOps environments to grant access to systems like databases, API servers, and cloud services. Managing confidential data in environments like CI/CD pipelines, Infrastructure as Code (IaaC), and automation tools like Ansible can be challenging for developers and security teams. However, Segura’s **DevOps Secret Management (DSM)** module makes it easy to manage secrets by centralizing confidential data in a secure and encrypted vault accessible through a user-friendly interface.

The current DSM module supports different types of secrets, such as usernames, passwords, SSH keys (via integration with the PAM Core module), cloud credentials (via integration with the Cloud IAM module), ephemeral credentials (via dynamic provisioning), and key/value pairs.

Secrets can be accessed by applications, scripts, or through API calls that use access policies for authorization. For example, automation created directly in Segura can inject secrets into systems and environments without modifying application code.