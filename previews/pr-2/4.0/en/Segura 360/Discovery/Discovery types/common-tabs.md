# Common tabs

For all types of Discovery

### **Access using credential from vault**

| Field | Description |
| ----- | ----- |
| Access Credential | Enter IP, Hostname or Username. Access credential for the search. All credentials registered in Segura will be displayed |
| Configuration password (ex: enable) | Setup Password |
| Force use of sudo | If this option is enabled, the commands will be executed as super user. The access credential completed in the Access credential field must have `sudo nopasswd` permission |

### **Access using pool of credentials (click \+)**

| Field | Description |
| ----- | ----- |
| Pool of credentials | Credential pool used to scan |
| Priority | Credential pool priority. Higher priority credential pools prevail over lower priority credential pools |

### **Searches tab**

For all types of Discovery.

In the Searches tab you can search for all credentials that are being used by a service, just select the option ***Search Windows Service Accounts***

Mark the objects to be scanned.

### **Search objects configuration**

| Field | Description |
| ----- | ----- |
| Search for credentials | If this option is enabled, credentials will be included in the Discovery process. |
| Search for devices groups | If this option is active, the devices’ groups will be included in the Discovery process. This option is standardly disabled. |
| Search for certificates | If this option is enabled, digital certificates will be included in the Discovery process. The tab Certificates will be visible if this field is marked. |
| Find DevOps artifacts | If this option is enabled, DevOps artifacts will be included in the Discovery process. The tab DevOps tab will be visible. |
| Monitor unauthorized access (1 hour intervals) | If this option is enabled, unauthorized access to credentials will be monitored and logs can be viewed in Discovery. |
| Identify accounts in application pools (IIS) | If this option is enabled, credentials in application pools (IIS) will be included in Scan & Dicovery. |
| Search FQDN in Windows devices | If this option is enabled, the search for devices will identify the its FQDN and consider it in the Discovery process. The FQDN will be the only device identifier if this option is enabled. |
| Identify Windows accounts associated with a service | If this option is enabled, discovery will find and list any nominal credential that is associated with any Windows services. |

### **Search parameters tab**

Only for Domain type.

| Field | Description |
| ----- | ----- |
| Account Form | Form type used for accounts to search |
| DN of the credential filter | (Leave blank to use DN Base) Domain name of the credential filter. If left blank, base DN will be used |
| DN of the device filter | (Leave blank to use DN Base) Domain name of the device filter. If left blank, base DN will be used |
| Account name attribute | Name attribute of accounts to fetch |
| Account domain | Domain Name of Accounts to Fetch |
| Account domain (Short Name) | Simplified Domain Name (optional) |
| Use SSL? | Indicates whether or not to use SSL certificate when searching. Mark Yes or No |
| Member is DN? | Mark Yes or No |
| Bind requires DN? | Mark Yes or No |
| DN Bind | (Leave blank to use DN Base) Domain name of the user who will search. If left blank, the base DN will be used. |

### **Plugins tab**

Only for Devices and Containers types.

Click on the plus icon and fill the plugin field.
:::(info) (**Info**)
To search for Windows service accounts you will need to select a Windows plugin from the Plugins tab.
:::

### **Creating a PostgreSQL discovery**

When the plugin option is selected, discovery will discover credentials within PostgreSQL type databases.

1. Select the module **Discovery ➔ Settings**  
2. Click on the Actions menu and choose the **New** option  
3. Select the option by type of **Device**  
4. Select the **Searches** tab and check the **search for credentials** checkbox  
5. Click on the **Plugins** tab and choose the **PostgreSQL** option  
6. Fill in the other fields and save

In **Discovery ➔ Discovery ➔ Credentials**, the credentials found by discovery will be listed and can be viewed in this report.

### **Execution tab**

In this tab you can configure the period and interval of execution of this discovery configuration. Configurations that may take longer to execute compared to the configured period, will not be executed concurrently. In other words, executions of the same configuration are not carried out in parallel. Only different configurations are performed in parallel.

Be careful to configure very short intervals for configurations that need to look for large network intervals and evaluate various artifacts.

The shortest configurable interval is one hourly run.

### **Credential scan execution**

| Field | Description |
| ----- | ----- |
| Keep credential scan active after import?\* | Indicates whether credential scanning will remain active after importing credentials or not |
| Days allowed for execution | Choose All days or select one or more week days for the execution |
| Periods allowed for execution | Choose All periods or select one or more period of time for the execution |
| Minimum interval between runs (in hours)\* | Minimum interval, in hours, between scans runs. This criterion takes into account the values entered in the Days allowed for execution and Periods allowed for execution fields. |

### **Import tab**

Only for Domain and Device types.

| Field | Description |
| ----- | ----- |
| Enable automatic device and credentials import ? | Indicates whether automatic device and credential import is enabled or not |
| Usernames for importing credentials (click on the plus icon) | Usernames of credentials that will be imported automatically (eg. Administrator). |

### **Certificate tab**

For all types of Discovery that has in Search tab "Search for certificates" marked.

### **Certificate's Orgin**

* Apache  
* Nginx  
* Tomcat  
* Search certificates in directories  
* Microsoft®IIS  
* Workstation Microsoft®Windows®  
* IBM Websphere  
* Search certificates without login  
* Issued by Microsoft®CA  
* Palo Alto Networks®

On this tab there is the option \***Use credential pools to import certificates with keys (only *nix systems)***.  
This option allows certificates with a password and key to be imported into the Segura . Select this option and then indicate the *pool of credentials* for this task.

### **Configuring Palo Alto Networks®scan**

When you select the ***Palo Alto*** option, Segura will scan the certificates inside Palo Alto Networks®, two fields will be displayed:

* ***API Key:*** Select a user, already registered with Segura , that contains the value of the API Key;  
* ***Import keys?:*** Indicates that upon finding the certificates the keys will be imported too into the Segura.

:::(info) (**Info**)
Go to the Discovery menu: **Discovery ➔ Certificates ➔ Certificates** to view the report of certificates found, use the action button to perform a manual import.
:::

:::(Warning) (**Attention**)
 In the Plugins tab when selecting the ***Palo Alto*** plugin, indicate that the access port is the SSH ***22***.
:::


### **DevOps tab**

For all types of Discovery that has in Search tab "Find Devops artifacts" marked.

### **Ansible settings**

| Field | Description |
| ----- | ----- |
| Enable Ansible Service | Indicates if Ansible service is enabled |
| Search playbooks | Indicates whether playbook search is enabled each |
| Search roles | Indicates whether role search is enabled each |
| Search hosts | Indicates if host lookup is enabled |

### **Jenkins settings**

| Field | Description |
| ----- | ----- |
| Enable Jenkins Service | Indicates if Jenkins searches are enabled on this Discovery |
| Search jobs | If this option is enabled, Discovery will search for Jenkins jobs. |
| Search nodes | If this option is enabled, Discovery will search for Jenkins nodes. |
| Search Users | If this option is enabled, Discovery will search for Jenkins users. |
| Jenkins Access Token | Token that will be used to access Jenkins |
| Access port | Jenkins access door |

### **Kubernetes settings**

| Field | Description |
| ----- | ----- |
| Enable Kubernetes Service | Indicates whether Kubernetes searches are enabled in this discovery |
| Search secrets | If this option is enabled, Discovery will search for Kubernetes secrets. |
| Kubernetes Access Credential | Credential that will be used to access Kubernetes |
| Access door | Door for access to Kubernetes |
:::(info) (**Info**)
Segura has a Kubernetes plugin that allows us to use credentials registered in the vault to use the service, increasing security when using the system. To get access to the plug-in, contact the Segura support team.
:::


