# How to configure backup

Through the backup module, you can perform new backups, restore a specific backup configure backup schedule.

:::(Warning) (Caution)
The backup files of senhasegura are protected by encryption. Restoring a backup can have impacts on the cluster structure and, in extreme cases, may result in the loss of access to sensitive information. If you need to perform a backup restoration, please contact our support team.
:::

**Commands:**
  - `backup create`: Create a new backup
  - `backup recover`: Recover system to a backup point
  - `backup time`: Configure the system backup daily time

**Flags:**
  - `-h`, `--help`: Show context-sensitive help.

## Execute, restore, and configure backup schedule

### Execute a backup

Senhasegura will backup two databases managed by [MariaDB](https://mariadb.com/):
- **mt4**: Database with platform information.
- **senhasegura**: Database with senhasegura platform information.

Execute the `orbit backup create` command to perform a backup on both databases.

:::(Info) (Info)
Some information has been suppressed from this log. But you will see where the backup is executed and where it is copied to at the end of the process.
:::
```
orbit backup create
Are you sure you want to perform a data backup now: y
Orbini Backup 1.1.0.2
[2024-02-28 15:16:49]: BACKUP INFO Using configuration file '/var/senhasegura/orbinibkp.conf'
[2024-02-28 15:16:49]: senhasegura DB INFO Starting database backup to /var/orbini/backup/senhasegura/senhasegura-db-2024-02-28_151649mt4.sql.gz
[2024-02-28 15:16:50]: senhasegura DB INFO Starting database backup to /var/orbini/backup/senhasegura/senhasegura-db-2024-02-28_151650senhasegura.sql.gz
[2024-02-28 15:17:08]: senhasegura DB INFO Database backup performed successfully
[2024-02-28 15:17:08]: senhasegura DB INFO Cleaning up old backup files
[2024-02-28 15:17:08]: senhasegura FILE INFO Starting db backup files via rsync from the /var/orbini/backup/senhasegura/ with delete source
[2024-02-28 15:17:08]: senhasegura FILE INFO /var/orbini/backup/senhasegura/ backup successfully performed
Duration: 18.402217738s
```

### Restore a backup

:::(Warning) (Caution)
This procedure restores the database completely, including data and structure, for the desired period of time. Make sure to restore all other application binaries, in case a system update has occurred between the current period and the desired period in the past. The application binary can be restored using the Debian APT tool.
:::

To restore the backup, you must have the original backup files available and ensure that the information to be restored is from a nearby moment to not impact the scope of the devices and ensure the integrity of privileged information.

You should first restore the **mt4 base** and subsequently the **senhasegura base**.

```
mt4adm@vmdf-giskard:~$ sudo orbit backup recover
  --database=mt4
  --file=/******/senhasegura-db-2020-06-09_203007mt4.sql.gz

Restoring this file you will replace all the database data.
Are you sure you want to restore this backup file: y

mt4adm@vmdf-giskard:~$ sudo orbit backup recover
  --database=senhasegura
  --file=/******/senhasegura-db-2020-06-09_203007senhasegura.sql.gz

Restoring this file you will replace all the database data.
Are you sure you want to restore this backup file: y
```

### Configure backup schedule

This command provides the ability to set the time for the backup execution. The process is automated to run every hour, managed by the Linux operating system task scheduler, known as "cron". If a specific time is set, the backup will be triggered automatically at that time.

:::(Info) (Info)
If no time is set, the backup will be scheduled to occur at 5 a.m.
:::

To use this command, simply execute `orbit backup time` and specify the desired time with the `--hour` option, following the 24-hour format (0-24).
To view the currently configured time for the backup, use the `--show` option.
If you wish to execute the command without the need for additional confirmation, use the `--force` option.

```
orbit backup time --hour=STRING
Configure the system backup daily time
Flags:
  -h, --help           Show context-sensitive help.
      --hour=STRING    Backup daily time: 0 to 24
      --show           Show the backup daily time
      --force          Force the command execution, never prompt
