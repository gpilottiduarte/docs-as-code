# How to manage tenants in Segura

# How to manage tenants in Segura

To manage the various tenants in your Segura instance, you can use the orbit tool, the same one used to manage the Segura environment. This tool includes a series of parameters for configuring and managing the tenants.

:::(error) (Alert) 
Your Segura activation key, available on the **Affinity** portal, must have multi-tenant licensing activated, otherwise it will not be possible to handle multi-tenant Segura.
:::

## Requirements

* Access to the [administrative console](http:///v3-33/docs/orbit-cli-about-the-orbit-cli) of the Segura instance that will host the tenants.  
* Administrator access to the Segura instance.  
* Have enabled the proxy 2.0.  
  * To find out how to enable the new proxy, access the [How to manage proxy settings](http:///v3-33/docs/how-to-manage-proxy-settings) document.  
  * Note that if proxy 2.0 hasn’t been enabled, you’ll still be able to execute the multi-tenant commands, but you won’t be able to perform a session on the tenant created since it depends on proxy 2.0.  
* The hardware that will receive multi-tenant must have the following minimum requirements:  
  * 8-core CPU.  
  * 16 GB of RAM.  
  * 256 GB of storage.  
* Access to DNS management is required, as multi-tenant needs a properly configured domain.  
  * Note that for each tenant created, you must create a **type A entry in your DNS** pointing to Segura's IP address.  
  * Each tenant will be accessible by this subdomain. For instance:  
    * `Segura.domain.xyz`  would be your main tenant.  
    * `<tenant_name>.domain.xyz` would be any other tenant.  
  * The multi-tenant environment needs a certificate to be accessible.  
  * The certificate is shared between all tenants.

### Best practices

* Reboot the system at the end of the update process.  
* Use SSL.

## Information on accessing and creating tenants

* Access to each tenant is managed independently to ensure maximum security and isolation.  
* To gain administrative access to a specific tenant, you must create an administrator user directly in that tenant.  
* The main tenant's administrator user's scope of action is limited to their own environment, thus promoting a clear separation of responsibilities and privileges.  
* The creation of tenants is carried out individually to ensure the accuracy and security of each configuration.  
* This process allows for careful review and customization of each tenant, ensuring that all configurations are aligned with the specific needs of each client or department.  
* The individual tenant creation approach reinforces security best practices, allowing granular control over each environment.

:::(error) (Alert)
If you only have one tenant, the access to the main tenant, `Segura`, can be done normally, as in single-tenant scenarios; however, if there are other tenants created, the access will be exclusively through `Segura.yourdomain.com`.
:::

* if you access Segura via the IP address, the tenant that will be accessed will always be the main tenant, `Segura`.  
* The tenant's name may only contain the following characters: `a-z`, `0-9` and `_`.  
* The tenant name cannot start with a number.  
* Reserved words that cannot be used when creating a tenant:  
  * `mt4`.  
  * `Segura`.  
  * `orbit`.  
  * `orbini`.  
  * `tenant`.  
  * `tenancy`.  
  * `none`.

## Create a tenant

The default tenant, created when you first instantiate Segura, will always be named `Segura`. This name cannot be changed.

:::(info) (Info)
The `orbit` command must always be run with administrator privileges, so it will always be run as root using `sudo`. 
:::

To create a new tenant, type the command `sudo orbit tenant create <tenant name>.`

The orbit tenant command accepts flags that modify its default behavior. To find out which flags are accepted, you can type `sudo orbit tenant --help` in the terminal or access [Parameters for the orbit tenant command](http:///v3-33/docs/parameters-for-the-orbit-tenant-command) document.

- Note that you can pass more than one flag at the same time by separating them with a space. For example, `sudo orbit tenant create test --force`

Type `y` at the terminal prompt to proceed with the creation process. To cancel the process, type `N` or `n`, or press `ENTER`.

The output of the command to create the tenant will be as in the example below:

```bash
Are you sure you want to create a new tenant: y
Creating tenant storage
Creating tenant database
Executing database migration process
Changing database passwords
Checking tenant key configuration
Restarting Orbini services...
```

Note that by using the `--force` flag, you won't be asked before creation, so the output of the command with the `--force` flag will look like this:

```bash
Create tenant storage
Create tenant database
Executing database migration process
Changing databse passwords
Checking tenant key configuration
Restarting Orbini services ...
```

:::(info) (Info)
The tenant's name will be the subdomain used to access it. For example, if you have created the tenant test, access will be via `test.yourdomain.com`. 
:::

## Delete a tenant

If necessary, you can delete a previously created tenant. To do this, type `sudo orbit tenant delete <tenant>`. This will delete the tenant you created.

* For example: `sudo orbit tenant delete test` will delete the previously created tenant with the name `test`.

Type `y` at the terminal prompt to proceed with the deletion process. To cancel the process, type `N` or `n` or press `ENTER`. Note that when you use the `--force` flag, you won't be prompted and the command will run without asking any questions. This operation erases all data from the tenant.

The output of the command will be:

```bash
$ sudo orbit tenant delete test
Are you sure you want to delete the tenant paulog? This Action is irreversible.: y
Removing tenant storage
Deleteing tenant database
Restarting Orbini services...
```

## Disable a tenant

If necessary, you can disable a previously created tenant. To do this, type `sudo orbit tenant disable <tenant> name`. This will disable the tenant you created.

- For example: `sudo orbit tenant disable test` will disable the previously created tenant with the name `test`.

Type `y` at the terminal prompt to proceed with the disabling process. To cancel the process, type `N` or `n` or press `ENTER`. Note that when you use the `--force` flag, you won't be prompted, and the command will run without asking any questions.

This operation keeps all the tenant's data, making it possible to undo it by re-enabling the tenant using the enable command.

## Enable a tenant

If you have disabled one of your tenants and want to re-enable it, type the command `sudo orbit tenant enable <tenant name>`. This will enable the tenant.

- For example: `sudo orbit tenant enable test` will enable the previously created tenant with the name `test`.

Type `y` at the terminal prompt to proceed with the enabling process. To cancel the process, type `N` or `n` or press `ENTER`. Note that when you use the `--force` flag, you won't be prompted, and the command will run without asking any questions.

The output of the command to create the tenant will be as in the example below:

```bash
Are you sure you want to proceed: y
Executing database migration process
```

## Synchronize tenants

If necessary, you can proceed to synchronize the tenants. This process aims to synchronize the tenants between the nodes in the cluster.

To synchronize the tenants, type `sudo orbit tenant synchronize test.`

Type `y` at the terminal prompt to proceed with the synchronization process. To cancel the process, type `N` or `n` or press `ENTER`. Note that when you use the `--force` flag, you won't be prompted, and the command will run without asking any questions.

## Reconfigure a tenant

If necessary, you can set up a tenant. To do this, type `sudo orbit tenant configure <tenant name>`.

- For example: `sudo orbit tenant configure test`.

Type `y` at the terminal prompt to proceed with the (re)configure process. To cancel the process, type `N` or `n` or press `ENTER`. Note that when you use the `--force` flag, you won't be prompted, and the command will run without asking any questions.

The output of the command to reconfigure a tenant will be as in the example below:

```bash
Are you sure you want to reconfigure this tenant: y
Creating tenant storage
Executing database migration process
Changing database passwords
Checking tenant key configuration
Restarting Orbini services...
```

This command will redo the entire configuration in the same way as creating a tenant, making it useful when configuration problems occur when creating a tenant.

## Limiting sessions in a tenant

You can set a control on the number of parallel `VNCHTTP` sessions per tenant. This type of action is useful for ensuring a balanced distribution of resources between tenants. This setting is managed exclusively by administrators of the multi-tenant environment.

To configure the session limit for the multi-tenant environment, use the command: `orbit tenant limit-session <total>`.

- For example: if you need to limit the number of simultaneous sessions to 50, type: `orbit tenant limit-session 50`.

The output of the orbit tenant limit-session command will be as follows:

```bash
$ sudo orbit tenant limit-session 50
Are you sure you want to proceed? [y/N] y
```

Type `Y` or `y` to proceed.

:::(info) (Info)
- The configuration defined is valid for all tenants in the environment.  
- The limit is applied per tenant independently.
:::

## List tenants

If necessary, you can list the existing tenants in your Segura instance. To do this, type the command `sudo orbit tenant list`. The tenants will be listed sequentially, displaying each one's code, name, and current status.

The output of the tenant listing command will be as follows:

```bash
+--------------------------------------+------------------+---------+
|                 CODE                 |      TENANT      | STATUS  |
+--------------------------------------+------------------+---------+
| 018debbb-0902-740c-a07b-6cb18d7rfg5b | Segura      | ENABLED |
| 01905595-1ed8-7744-bcb9-afeb87009173 | tenant1          | ENABLED |
| 019055a8-7a9d-769c-8371-8ea3913a4c31 | tenant2          | ENABLED |
+--------------------------------------+------------------+---------+
```

## First access

When you first access the multi-tenant environment, a few steps will be required to access the environment. These are:

1. Accept the EULA (End User License Agreement).  
2. Enter the Segura activation key.  
3. The first access must be made with the Segura default user.

:::(error) (Alert)
In the multi-tenant scenario, the default login user for the tenants created is `mt4web`.
:::

## Logs and SIEM Integration

The Segura Multi-Tenant offers the ability to manage logs individually per tenant, allowing each client to configure their own SIEM destination for monitoring and analyzing logs.

### Main features

* Individual SIEM configuration per tenant.  
* Log isolation between different tenants.  
* Support for multiple log formats.  
* Flexible integration with different SIEM servers

### Benefits

* **Flexibility and Control:** personalized SIEM target configuration per tenant.  
* **Log isolation:** effective separation of logs between different clients.  
* **Compliance**: meeting specific regulatory requirements.  
* **Simplified Management**: independent monitoring per tenant.

### Configuration

#### Configuration file

The configuration file must be created in the `/etc/Segura/syslog/` directory with the name `__tenant_name__.cnf`. This file doesn’t exist by default and must be created for each tenant, ensuring proper separation of the logs. The configuration within the file should follow the format below:

```
plugin=Orbini_Syslog_Cef
use_tcp=1|0
servers=ip1,ip2,ip3
use_network_connector=1|0
network_connector=__id_network_connector__
```

### Configuration parameters

* `plugin`: defines the plugin used to process the logs.  
* `use_tcp`: enable (1) or disable (0) the use of TCP.  
* `servers`: list of SIEM server IPs.  
* `use_network_connector`: enables (1) or disables (0) the use of the **Network Connector**.  
* `network_connector`: network connector ID.

## Important information

### Filesystem

The file system for Segura with multi-tenant will follow the pattern

```
/var/storage/Segura
/var/storage/tenant1
/var/storage/tenant2
```

The name of the folder where the tenant's data will be stored is the same name given to the tenant when it was created.

### Backup

The backup procedures are the same as for the main Segura instance. You can find more information in the backup documentation on the Backup link in the Help Center.

However, the backup directories have changed. Because of the multi-tenant environment, the backups will be stored in a sub-folder within each tenant's folder, so each tenant has its own backup folder, as shown in the example below.

```
/var/storage/Segura/backup
/var/storage/tenant1/backup
/var/storage/tenant2/backup
```

### Password change
To change the password in multi-tenant scenarios, it's necessary to pass the name of the tenant in the commands. 

In this case, for example, the command to rename the web interface administrator account would be `sudo orbit security rename-admin --tenant=tenant_name`.

### Orbit Server Manager

The Orbit settings option, accessed through **Grid Menu > Orbit Server Manager** path, will only be available in the Segura default tenant. In the other tenants, this option won't be available. It is also not possible to add permission to view this option.  