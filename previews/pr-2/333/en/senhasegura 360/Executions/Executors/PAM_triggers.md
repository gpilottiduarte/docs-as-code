A trigger is an action performed into the client module. It can be executed by Executor plugin supported by the client module' technology. This architecture enable our developers to create new plugins and triggers to every target system that support some kind of automated interaction.

By default, the following modules can trigger to start an execution operation:

  




---

## PAM triggers



| Trigger | Description |
| --- | --- |
| Credential enable | Enable an locked credential into a target device. Can also be used to perform a JIT credential creation |
| Credential disabiling | Disable a target credential after senhasegura Proxy usage. Can also be used to perform a JIT credential destruction |
| Password change | Change some credential ou SSH Key secret |



---

## Cloud IAM



| Trigger | Description |
| --- | --- |
| AWS OpsWorks | Used into senhasegura DSM to provide credentials and secrets management in AWS OpsWorks |



---

## DevOps Secret Manager



| Trigger | Description |
| --- | --- |
| Automation | DSM secret automation triggers |



---

## Certificate Manager



| Trigger | Description |
| --- | --- |
| Certificate disabiling | Revoke a target SSL certificate into target device |
| Certificate publishing | Publish a target SSL certificate into target device |



---

## Task Manager



| Trigger | Description |
| --- | --- |
| Task Manager | Automated tasks into target devices that can be scheduled or executed by user request |



---

## Provisioning



| Trigger | Description |
| --- | --- |
| New group | Group creation at target system |
| New user | User creation at target system |
| Group delete | Group deletion at target system |
| User delete | User deletion at target system |
| User delete in group | Removing a user from a group at target system |

  


