AttentionIt's possible to access the application logs, previously stored in files and indexed in Elasticsearch, directly from the second cluster. These reports contain approximately 10\.000 records.

You can manage the state of your senhasegura instance application with the `orbit application` command.


```
mt4adm@vmdf-giskard:~$ sudo orbit application --help
Usage: orbit application [<command>]

Application settings tools.

Arguments:
[<command>]    Control the application services status:
                [start|stop|restart|status|primary|version]

Flags:
    --help       Show context-sensitive help.

    --version    Show the application components versions
    --force      Force the command execution, never prompt
    --show

```
* ***start:*** Activates the instance for users' use.
* ***stop:*** Inactivates the instance for users' use.
* ***restart:*** Restart the services used to distribute the Web application, except the database, proxy systems and services started by Cron.
* ***status:*** Displays the status of this instance.
* ***primary:*** Sets this instance to Primaryin a cluster scenario.
* ***version:*** Displays the installed version of the Orbini platform and senhasegura.

## Application status

The `orbit application status` command displays the status of each primary function of the instance. Being:

* ***Application:*** Status of the instance as to its activation. *Active*to be available for the user's use and *Inactive*to be unavailable for the user's use;
* ***Replication:*** Replication/cluster status of this instance. *Active*indicates you are a cluster member, and *Inactive*indicates you are not part of a cluster;
* ***Instance:*** Role of the instance in the cluster. *Primary*for the main instance, *Secondary*for support instance (Slave);


```
mt4adm@vmdf-giskard:~$ sudo orbit application status

Application: Active
Replication: Inactive
Instance:    Primary

```
## Inactivate instance usage

The `orbit application stop` command inactivates the application for user use. This action doesn't affect the activation of the license or the execution of the robots in the instance.

This action is equivalent to activating the instance in the menu **Orbit Config Manager \> Settings \> Application**.


```
mt4adm@vmdf-giskard:~$ sudo orbit application stop
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Inactive
Replication: Inactive
Instance:    Primary

```
## Activate the use of the instance

The `orbit application start` command activates the application for user use. This action does not affect the activation of the license or the execution of the robots on the instance.

This action is equivalent to activating the instance in the menu **Orbit Config Manager \> Settings \> Application**.


```
mt4adm@vmdf-giskard:~$ sudo orbit application start
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Active
Replication: Inactive
Instance:    Primary

```
## Set the instance as primary

The `orbit application master` command configures the instance as a Primary instance. If the instance is inactive, it will be automatically activated and raised to Primary.

AttentionThe Primary instance is responsible for the execution of unique services that are not executed in the other instances of the Cluster.

InfoThis command is only used for cluster mode environment.InfoThis functionality is also available on the **Orbit Config Manager** screen (if the instance is not the master, a button will be available to assume this position). For more details, see the [How to create a cluster](/v3-32/docs/installation-data-replication-how-to-create-a-cluster) documentation.
```
mt4adm@vmdf-giskard:~$ sudo orbit application master
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Active
Replication: Inactive
Instance:    Primary

```
## Restart application services

The `orbit application restart` command restarts the services used to distribute the Web application, except the database, proxy systems, and services started by Cron. Restarts only the services used by the Webserver.


```
mt4adm@vmdf-giskard:/home/mt4adm## sudo orbit application restart
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y█

Application: Active
Replication: Inactive
Instance:    Primary

```
## Get the installed version

The `orbit application version` command presents the **Orbini**instance and framework version. Its operation is similar to the `orbit version` command, described previously.


```
mt4adm@vmdf-giskard:~$ sudo orbit application version
Applications
Orbini           5.10.13.27
senhasegura      3.2.0.1

```
