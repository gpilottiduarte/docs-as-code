# About credential reconciliation

The secure management of privileged accounts is fundamental to information security. Credential reconciliation is an essential practice for improving the security of artifacts within the Segura platform. This practice makes it possible to protect systems and their data.

***

## What is credential reconciliation?
Credential reconciliation is the process of re-establishing the credential's password to guarantee consistency with the data in the target system.

***

## How does reconciliation work?
* Reconciliation is requested whenever there is a problem when changing the password via the platform.
* Reconciliation can be done manually or automatically.
* Reconciliation requires a registered "service credential". This credential will enable the user to change passwords on several accounts.
* Segura has pre-configured templates, guaranteeing an effective and secure approach to managing privileged access, expanding the password change options available to the user.

For more information, see the documentation on [How to reconcile a credential](/v4/docs/pam-how-to-reconcile-a-credential).

***

## The importance of the reconciliation process 
Credential reconciliation plays a critical role in cybersecurity, especially in controlling privileged access. Some reasons why password reconciliation is essential include the following:

* **Ensuring compliance**: reconciliation helps organizations to comply with security regulations, as it guarantees that credentials are up-to-date and correct in the target systems.
* **Threat detection**: through reconciliation, it’s possible to identify unauthorized changes to privileged accounts, indicating a potential security breach.
* **Preventing unauthorized access**: regular synchronization of credentials helps prevent misuse of privileged accounts, protecting sensitive information and critical resources.
* **Auditing and traceability**: reconciliation makes it possible to record and trace all activities related to credential management, guaranteeing a detailed audit of who accessed which resources and when.

Properly implementing reconciliation solutions in a PAM system is essential to protect against threats and safeguard confidential information from unwanted access.