# Security criteria for recommendations

In this article, you'll learn more about the specific criteria that **Cloud Entitlements** uses to evaluate the security of your cloud infrastructures.

:::(Info) (Info)
**Cloud Entitlements** uses criteria that vary according to the specific Cloud Service Provider (CSP). 
:::
* * *

## Recommendations for AWS
**Cloud Entitlements** uses the following criteria to monitor the identities registered in AWS accounts and provide security recommendations:


| Criterion | Definition | Identities monitored |
| --- | --- | --- |
| **User MFA** | Determines if the user has enabled multi-factor authentication (MFA). The absence of MFA increases the vulnerability of the account, making it more susceptible to hacking attempts. | Only users.|
| **AdministratorAccess policy** | Assesses whether the identity has the AdministratorAccess policy attached. Excessive permissions can pose a threat as they increase the user's potential to compromise resources. | Users, roles, and groups. |
| **Access to all resources** |  Checks if the identity has access to all resources. It's advisable to grant users access only to the resources they require, as providing excessive access can compromise the environment. | Users, roles, and groups. |
| **Access to all actions** | Verifies if the identity has full permissions within a resource. Excessive permissions can lead to risks and misuse of resources. | Users, roles, and groups. |
| **Password policy** | Checks if the account has a defined password policy. The absence of a password policy can make the environment insecure. | Only users. |
| **Access key lifetime** | Verifies if there is an access key older than the specified period. It's important to rotate users' access keys if they haven't been used for a while or if they've remained the same for an extended period. | Only users. |
|**Access key last use** | Checks for unused access keys within the specified period. Regularly rotating users' access keys helps mitigate potential risks associated with inactive access keys. | Only users.
|**Last console login** |Verifies the last access to the AWS Console and compares it to the specified period. It's recommended to delete and create a new user when necessary, update passwords regularly, or revoke console access when appropriate. | Only users. |
|**Overprivileged access to services**| Checks for unused access to services by users, roles, or groups within the specified period. It's recommended to restrict users' access to the services they actively use, in order to maintain a secure environment. | Users and roles.|


## Recommendations for GCP
**Cloud Entitlements** uses the following criteria to monitor the identities registered within GCP projects and provide security recommendations:



| Criterion | Definition | Identities monitored |
| --- | --- | --- |
| **Administrator privilege** | Verifies whether the identity has the *Owner* role assigned. | Users and Service accounts.|
| **Basic roles** | Verifies whether the identity has GCP *Basic roles* assigned. | Users and Service accounts.|
| **Service Account user role** | Verifies if the user has been assigned the Service Account User role. This role grants the user indirect access to all resources that the associated service account has been authorized to access. | Users and Service accounts. |
| **Service Account Token Creator role** |  Verifies whether the principal has been assigned the *Service Account Token Creator* role. This role allows principals to impersonate service accounts and create authentication methods. | Users and Service accounts. |
| **Service account key lifetime** | Checks if the Service account has an access key older than the specified duration. You can choose a duration of 30, 60, or 90 days. | Only Service accounts.

## Recommendations for Azure
**Cloud Entitlements** uses the following criteria to monitor the identities registered in Azure Active Directory (AD) tenants and provide security recommendations:



| Criterion | Definition | Identities monitored |
| --- | --- | --- |
| **Unique authentication method** | Assesses whether a user is relying on only one authentication method. Microsoft strongly recommends having at least a second authentication method for enhanced identity security. This measure is crucial to prevent unauthorized access and protect against potential attacks.| Only Users.|
| **Administrative access** | Verifies whether the identity holds the role of Global Administrator in your environment's directory. The Global Administrator role is considered super privileged, granting the associated identity extensive powers to modify and interact with any resource and configuration within the AD.| Users, Groups, and Applications.
| **Last login** | Evaluates the most recent login activity of the user in Azure, considering the specified time period outlined in the Cloud Entitlements Security Policies. You can customize this criterion to inspect logins within intervals of 30, 60, or 90 days. |Only Users. |
| **Shadow admin (privilege escalation)** |  Verifies whether the identity possesses any of the following permissions: *Microsoft.Authorization -elevateAccess/Action*, *Microsoft.Authorization-roleDefinitions/write*, *Microsoft.Authorization-roleAssignments/write*. Having these permissions empowers the identity to elevate its own privileges.  | Users, and Applications. |
| **Public domain user** | Examines whether an AD user is registered using a public address associated with domains such as .hotmail, .outlook, .live, and others.  | Only Users.
| **Permissive and caring roles** | The Contributor, Virtual Machine Contributor, and Application Administrator roles should be exclusively assigned to privileged users. These roles grant extensive permissions and should not be assigned to non-privileged identities due to their highly permissive nature.  | Users, Groups, and Applications.