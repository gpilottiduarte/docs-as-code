# Executor triggers

A trigger is an action performed into the client module. It can be executed by the executor plugin supported by the client module's technology. This architecture enables our developers to create new plugins and triggers to every target system that support some kind of automated interaction.

By default, the following modules can trigger to start an execution operation:

## PAM triggers

| Trigger | Description |
| ----- | ----- |
| Credential enable | Enable a locked credential into a target device. Can also be used to perform a JIT credential creation. |
| Credential disabling | Disable a target credential after Segura Proxy usage. Can also be used to perform a JIT credential destruction. |
| Password change | Change some credential or SSH key secret. |

## DevOps Secret Manager

| Trigger | Description |
| ----- | ----- |
| Automation | DSM secret automation triggers. |

## Certificate Manager

| Trigger | Description |
| ----- | ----- |
| Certificate disabling | Revoke a target SSL certificate into the target device. |
| Certificate publishing | Publish a target SSL certificate into the target device. |

## Task Manager

| Trigger | Description |
| ----- | ----- |
| Task Manager | Automated tasks into target devices that can be scheduled or executed by user request. |

## Provisioning

| Trigger | Description |
| ----- | ----- |
| New group | Group creation at target system |
| New user | User creation at target system |
| Group delete | Group deletion at target system |
| User delete | User deletion at target system |
| User delete in group | Removing a user from a group at target system |