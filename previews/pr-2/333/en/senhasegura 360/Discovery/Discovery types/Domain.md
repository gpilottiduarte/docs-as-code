# Domain

1. Go to **Discovery ➔ Settings ➔ Discovery;**
2. Click on the icon `⁝`, and choose the option **+ New;**

![chrome_wkKUkjUNku.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_wkKUkjUNku.png){height="" width=""}

1. Select **Domain;**
2. Add the information:

![devices1.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devices1%281%29.png){height="" width=""}

- **Name:** name that will identify the search.
- **Domain:** IP or domain name.
- **DN Base:** domain base name/domain distinguishing name.
- **Enabled:** indicate if you want the device activated or not.
- **Create unique glossary for this discovery:** select if you want an exclusive glossary with the data requested in the search.

## Connection

- **Access credential:** an access credential for the search. Choose an IP, a Hostname, or a Username.

:::(info) (Info)

It is recommended that you use the credentials of a user who has access to the search in question or privileged access.

:::

All credentials registered in senhasegura will be displayed.

- **Configuration password (ex: enable):** password used before performing the authentication of the search process.
- **Force sudo use:** if the user needs to execute the sudo to have the permissions of these searches, the commands will be executed as a superuser.

:::(info) (Info)

The credential filled in the **Access credential** field must have the info `sudo nopasswd`.

:::

- **Access using pool of credentials**
    - **Pool of credentials:** the set of credentials used to perform the verification.
    - **Priority:** the credential set priority.

Higher-priority credential pools take precedence over lower-priority credential pools.

## Searches
![devicesseacher.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicesseacher%282%29.png){height="" width=""}

- **Search for credentials:** if this option is enabled, credentials will be included in the discovery process.
- **Search for device groups:** if this option is enabled, device groups will be included in the discovery process.
- **Search for certificates:** if this option is enabled, digital certificates will be included in the Discovery process.

:::(info) (info)
The Certificates tab will be visible if this field is checked.

:::

- **Find DevOps artifacts:** if this option is enabled, DevOps artifacts will be included in the Discovery process.

:::(info) (info)
The DevOps tab will be visible if this field is checked.

:::

- **Monitor unauthorized access (1-hour intervals):** if this option is enabled, unauthorized access to credentials will be monitored and logs can be viewed in Discovery.
- **Identify accounts in application pools (IIS):** if this option is enabled, credentials in application pools (IIS) will be included in Scan & Discovery.
- **Search FQDN in Windows devices:** if this option is enabled, device search will identify its FQDN and consider it in the discovery process.

:::(info) (Info)

The FQDN will be the unique device identifier if this option is enabled.

:::

## Search parameters
![devicessearch.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicessearch.png){height="" width=""}

- **Account form:** form type used for account search.
- **DN of the credential filter (leave blank to use DN Base):** credential filter domain name.

:::(info) (Info)

If left blank, the base DN will be used.

:::

- **DN of the device filter (leave blank to use DN Base):** device filter domain name.

:::(info) (Info)

If left blank, the base DN will be used.

:::

- **Account name attribute:** name attribute of accounts to be fetched.
- **Hostname attribute:** server name or IP.
- **Account domain:** domain name.
- **Account domain (short name):** simplified domain name (optional).
- **Use SSL?:** indicate whether or not to use an SSL certificate when searching.
- **Member is DN?:** user connection to the domain.
- **Bind requires DN?:** to link the user to the domain
- **DN Bind (leave blank to use DN Base):** domain name of the user doing the search. If left blank, the base DN will be used.

## Filters for search
![devicesfilter.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicesfilter.png){height="" width=""}

- **Credential search filters:** filter to identify the desired credentials.
- **Device search filters:** filter to identify the desired devices.
- **Plugins for discovery:** filter to identify the desired plugins.

When choosing the Windows Plug-in option, senhasegura will attempt to connect to devices using the Windows RPC, Windows WMI, and Windows RM protocols.

## Execution
![devicesexecution.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicesexecution%281%29.png){height="" width=""}

- **Keep scan active after import?:** credential verification that will remain active after credential import or not.
- **Days allowed for execution**: days that will be allowed to perform the execution.
- **Periods allowed for execution**: times that will be allowed for execution.
- **Interval between executions (in hours):** minimum interval, in hours, between scan runs. This criterion takes into account the values informed in the Days allowed for execution and Periods allowed for execution fields.

:::(info) (Info)

It is not recommended to add an interval of fewer than 8 hours.

:::

## Import
![devicesimport.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicesimport%281%29.png){height="" width=""}

- **Create unique glossary for this discovery:** an exclusive glossary with the data requested in the
 search.
:::(info) (Info)
The unique glossary will be created with the information provided in ***Device configuration*** and ***Credential configuration***. By choosing this feature, all the devices found by the discovery will be related to the unique glossary.
:::
- **Device configuration:**
    - Site
    - Type
    - Vendor
    - Product
- **Credential configuration:**
    - Type of default credential
    - Type of privileged credential
- **Enable automatic importation of devices and credentials?:** indicates whether the automatic importation of credentials and devices is enabled or not.
- **Credential import:** credential usernames that will be automatically imported (e.g. Administrator).

## Additional tabs
Additional tabs will be displayed only if selected in the Searches tab

### Certificates

If you click on Searches, and the option "Search for certificates" is checked, you will have one more tab:

![devicescertificate.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicescertificate%281%29.png){height="" width=""}

:::(Info) (Info)
Valid extensions for performing a certificate discovery are:
.crt, .cer, .ca-bundle, .p7b, .p7c, .p7s, .pem, .p12, .pfx and .pem

It is possible to discover certificates along with keys, as long as the search takes place in directories in Linux environments.
:::

:::(Warning) (Caution)
**Discovery** imports the key along with the certificate. It is not possible to import keys separately.
:::

**Certificate’s origin**

- Apache
- Nginx
- Tomcat
- Search certificates in directories
- IIS
- Workstation Windows
- IBM Websphere
- Search certificates without login
- Issued by Microsoft CA
- Palo Alto
- Kubernetes
- NetScaler

**Extra settings for certificates search:**

- Import all certificates automatically
- Extra settings for F5/BigIP

**Extra settings for Tomcat**

When selecting the **Tomcat** option, this field will be displayed:
* Tomcat configuration file path

**Extra settings for search in directories**

When selecting the **Search certificates in directories** option, these fields will be displayed:
* Path of the directory where to fetch certificates
* File extensions to look for

**Extra settings for Windows search**

When selecting the **Workstation Windows** option, these fields will be displayed:
* Search local Windows certificates
* Search Windows user certificates
* Search CA's root

**Extra settings for Websphere**

When selecting the **IBM Websphere** option, these fields will be displayed:
* Path of app_server_root websphere
* Credential
* KDB Path websphere to search certificates
* Discovery using credential from vault
* Discovery using pool of credentials

:::(info) (Info)

This option allows certificates with a password and key to be imported into senhasegura.

:::

**Extra settings for search without login**

When selecting the **Search certificates without login** option, this field will be displayed:
* Ports for searching for certificates without login

**Extra settings for Palo Alto (PAN-OS)**

When selecting the **Palo Alto** option, this field will be displayed:

- ***API Key:*** select a user, already registered with senhasegura, that contains the value of the API Key.
- ***Import keys?:*** indicates that when finding the certificates, the keys will be imported to senhasegura as well.

:::(info) (Info)

Go to **Discovery ➔ Certificates ➔ Certificates**, to view the report of found certificates. Use the action button to perform a manual import.

:::

**Extra settings for Kubernetes**

When selecting the **Kubernetes** option, these fields will be displayed:
* API URL
* Kubernetes access token
* Kubernetes access port

**Extra settings for NetScaler search**

When selecting the **NetScaler** option, these fields will be displayed:
* Import key
* API key

### DevOps

If you click on Searches, and the option "Find DevOps artifacts" is checked, you will have one more tab:
![devicesdevops.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicesdevops%281%29.png){height="" width=""}

**Ansible settings**

- **Enable Ansible service:** indicates whether the Ansible service is enabled.
- **Search playbooks:** indicates whether the search for playbooks is enabled.
- **Search roles:** indicates whether role search is enabled.
- **Search hosts:** indicates whether host search is enabled.

**Jenkins' settings**

- **Enable Jenkins service:** indicates if Jenkins searches are enabled in this search.
- **Search jobs:** if this option is enabled, Discovery will search for Jenkins Jobs.
- **Search nodes:** if this option is enabled, Discovery will search for Jenkins nodes.
- **Search users:** if this option is enabled, Discovery will search for Jenkins users.
- **Jenkins' access token:** a token that will be used to access Jenkins.
- **Access port:** Jenkins access port.

**Kubernetes' settings**

- **Enable Kubernetes service:** indicates whether Kubernetes searches are enabled for this search.
- **Search secrets:** if this option is enabled, Discovery will search for Kubernetes Secrets.
- **Bearer token:** indicates whether the bearer of the token is the same as the credential.
- **Credential access Kubernetes:** credential that will be used to access Kubernetes.
- **Access port:** access port to Kubernetes.

:::(info) (Info)

senhasegura has a Kubernetes plugin that allows you to use credentials registered in the vault to use the service, increasing security when using the system. To gain access to the plugin, contact the senhasegura support team.

:::