# How to backup restore and logs

:::(Warning) (Attention)
The senhasegura backup files are encrypted using **AES-256** encryption. To perform this procedure, you should be in contact with the senhasegura **support team**.
:::

## Restore a backup
:::(Warning) (Attention)
The senhasegura backup files are encrypted. To perform this procedure, you should be in contact with the senhasegura **support team**.
:::

The backups executed are exported to the remote drive of the customer's choice. But a copy of the backup is kept inside the instance to speed up the restore process if necessary.

The senhasegura enginer will execute the backup file opening procedure (decrypt) to get the backup file ready to be restored.

Once the backup file is decrypted, the senhasegura engineer should use the `orbit backup` command line tool to restore the target version.
:::(Error) (Alert!)
This procedure will restore all database data and schema to the desired past time. You should restore all other binaries if performed a system upgrade was between the current time and the selected backup file. The binary application files can be restored using the **Debian APT tool**.
:::

## Logs
You can observe the execution of the backup through the **CRON** schedule in the report **Orbit Config Manager > Logs > Backup**.

## Backup report
In the **Credential Backup report** under **Settings > Backup > Credentials**, you get information if the credential complies with the password policies.

1. **Password Policy:** Lists the password policy related to the credential, as configured. For example:
* Low
* Average
* High
2. **Conformity:**
* **Yes**: In green, if the credential complies with the related policy
* **No**: In red, if the credential does not comply with the related policy
:::(Info) (Info)
At the time of backup, senhasegura checks the composition of the password with the policy and updates the information on whether or not it is adherent.
:::

