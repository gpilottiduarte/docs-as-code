# Backup

In this article, you’ll find the backup options supported by Segura.


::: (info) (Info)
For users employing a backup agent, it’s recommended to install the agent on the same server as the remote directory designated for storing backup files.
:::
::: (warning) (Important)
You’ll receive an email or a SIEM notification if the system loses access to the remote backup directory.
:::
:::(warning) (Secrets Backup Location)

Always ensure backups are saved in a different location to protect sensitive information and maintain business continuity.
For Segura with the crypto appliance, backups should not be stored on the appliance itself because:

1. **Single Point of Failure**: If the appliance fails, you could lose both the data and the backup.
2. **Limited Recovery Options**: In the event of a hardware or software malfunction, having backups on an external device ensures that you have multiple avenues for data recovery.
3. **Best Practices**: Store backups in a separate, secure location to comply with data protection standards and ensure availability.

:::

## Backup options

### Backup of secrets (Break the Glass)

The backup of secrets encrypts all confidential data, allowing storage on an external device distinct from the Segura instance. The Break the Glass procedure is intended for emergencies, granting access to credentials solely via a master key.

::: (error) (Important)
This backup isn’t for system recovery but serves as a means for customers to retrieve credentials if Segura becomes completely unavailable.
:::


### System Backup

The system backup periodically stores Segura system information, including data, settings, software, applications, and access records aligned with the customer's security policies.

::: (warning) (Caution)
Reconstruction is time-consuming and demands significant disk space.
:::


### Video backup of proxy sessions
 Encrypts all video recordings of Segura proxy sessions.

::: (info) (Info)
Segura recommends allocating a remote backup size of at least 150% of the space size in the /var directory of your Segura instance. For example, if your /var size is 10GB on the Segura server, it’s suggested to have at least 15GB for remote backup. This will help you plan for future recordings based on your usage frequency.
:::