# How to perform a SST manually

This article provides instructions on how to perform a full data transfer, known as State Snapshot Transfer (SST), manually on the Primary cluster member.


::: (error) (Important)
Only proceed with these steps if you’re certain that no instances of senhasegura are running in your environment.
:::


## How to perform a State Snapshot Transfer manually on the Primary cluster member

### Steps on the Primary member

1. Check the synchronization status:
```Shell
sudo orbit cluster status
```
2. Stop the MariaDB process:
```Shell
sudo systemctl stop mysql
```
3. Remove old cluster control files:
```Shell
sudo rm /var/lib/mysql/galera.cache


sudo rm /var/lib/mysql/grastate.dat


sudo rm /var/lib/mysql/multi-master.info
```
4. Start the MariaDB process:
```Shell
sudo galera_new_cluster
```
### Steps on the secondary member

::: (warning) (Cuidado)
If you operate a cluster with more than one secondary member, apply the steps intended for the secondary member to all of them.
:::

1. Stop the MariaDB process:
```Shell
sudo systemctl stop mysql
```
2. Rename the current database data folder to a backup one:
```Shell
sudo mv /var/lib/mysql /var/lib/mysql-$(date +%d%m%y%H%M)
```
3. Create a new database folder:
```Shell
sudo install -d /var/lib/mysql -o mysql -g mysql
```
4. Confirm that replication is enabled in the configuration file: `galera.cnf`.

5. Edit the configuration file: `/etc/mysql/conf.d/galera.cnf`.
6. Save the file and exit the editor.
7. Open another terminal and monitor the database logs:
```Shell
sudo tailf /var/log/mysql/mysql-error.log
```
8. Start the MariaDB process:
```Shell
sudo systemctl start mysql
```
9. Check if the cluster member count is correct in the database log. For example, if there are 2 members, the message should be: `members = 2/2(joined/total)`.

10. Verify that the synchronization confirmation message is:
```Shell
WSREP: Member 0.0 (vsrv-senhasegura-cert05) synced with group.
```

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.