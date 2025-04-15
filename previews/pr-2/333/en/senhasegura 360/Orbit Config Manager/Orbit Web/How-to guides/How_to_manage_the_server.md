# How to manage the server

This document describes how to verify and explore your server's information.

:::(Info) (Info)
These practices are not directly related to the specific functionalities of senhasegura.
:::

:::(Info) (Info)
In this document, we will focus our attention on the common settings found in **Linux** operating systems.
:::

## Listing hardware information
Through the **Orbit Config Manager > Server > Information** menu, you can view the **server uptime**, **IP**, **CPU Load**, **Memory**, **network interface details**, **DNS configuration**, **firewall rules applied**, and the **NTP service status configuration**.

## Managing disks and partitions
:::(Info) (Info)
It is recommended to allocate a remote backup size that is at least 150% of the space size in `/var` of your senhasegura.

For example, if the size of `/var` is 10GB on thesenhasegura server, it is suggested to have at least 15GB for remote backup. This will help you plan future records based on usage frequency.
:::
Through the **Orbit Config Manager > Server > Disks and Partitions** menu, you can view the partitions mounted on the senhasegura operating system. Possible views include:
* **Disk Usage:** Describes the space usage by partitions.
* **Inode Usage:** Shows the inode usage by partitions. High inode usage can lead to service unavailability.
* **Partitions:** Shows the relationship between virtual and physical partitions, their UUIDs, and partition types.

On this screen, it is possible to add remote partitions using **CIFS** and **NFS** protocols.

Fill in the authentication methods based on the desired protocol. **Orbit** will automatically mount the partition without restarting the instance.
:::(Warning) (Warning)
Pay attention to the partition mounted as `/var`. This partition receives recorded session files and backup files. **Orbit** will monitor the growth and alert through an incident when it is close to depletion.
:::
:::(Warning) (Warning)
Passwords should not contain the characters `\`, `&`, and `!` in remote partition mappings.
:::
### Disk resizing
On the same screen, it is possible to expand the free space of the physical disk in virtual partitions. **Orbit** will coordinate this resizing automatically, without user intervention.
:::(Error) (Alert!)
Take a snapshot of the instance before performing this operation.
:::

The primary disk where senhasegura is installed can be expanded up to 2TB. This size limit is due to the **MBR partition scheme**, chosen as the default by senhasegura to ensure that old virtualizers can host the solution.

To expand the **LVM partition** to sizes greater than 2TB, you must add a new hard disk and resize using the **Orbit** interface.
:::(Warning) (Warning)

* To resize the main disk or add a new disk, you must shut down the instance.
* In a cluster environment, keep each instance with the same hardware profile to avoid replication problems.

:::

### Adding an AWS S3 bucket for backup
This subsection specifically addresses the installation of the **AWS S3** client and the administration format for loading senhasegura backup files.

For general use, the AWS configuration command is the fastest way to set up the **AWS CLI** installation, use `aws configure` for this.

Then enter the **Access Key ID**, **Secret Access Key**, and, if necessary, fill in the rest of the information.

Access keys consist of an access key ID and a secret access key, used to sign programmatic requests you make to AWS. If you don't have access keys, you can create them in the **AWS Management Console**.

1. To start synchronizing data with the bucket, use the following command:
```
aws s3 sync /var/orbini/backup/senhasegura s3://mybucket/folder
```
2. Change the information `//mybucket/folder` according to the bucket configuration used.

Once done, the bucket is configured and ready to receive senhasegura backup data.

3. To automate the backup process via bucket, you need to create a file as follows:
`vim /etc/cron.d/aws_sync` 

4. In this file, enter the following information:
```
*/1 * * * * root /usr/local/bin/aws s3 sync /var/orbini/backup/senhasegura/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
*/10 * * * * root /usr/local/bin/aws s3 sync /var/senhasegura/arz/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
*/1 * * * * root /usr/local/bin/aws s3 sync /srv/cache/coba/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
```

:::(Info) (Info)
If you do not want to back up videos, use the following parameters:
```*/1 * * * * root /usr/local/bin/aws s3 sync /var/orbini/backup/senhasegura/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
*/1 * * * * root /usr/local/bin/aws s3 sync /srv/cache/coba/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
```
:::

5. To apply the settings, save the file and run the command to restart the service used to call backups
`service cron restart`.

### Basic system services control
Through the **Orbit Web** interface, you can view and control the status of some server services. Through the **Orbit Command Line** interface, you have access to all services, but for security reasons, your choices are limited through the web interface.

Access the **Orbit Config Manager > Server > Services** menu to view and control **CRON**, **Zabbix Agent**, **Open VMWare Tools**, **Database**, and **SSH server** services.
:::(Error) (Alert!)
We do not recommend that CRON, Database, and SSH server services be turned off or restarted unnecessarily. Contact our support if such operations are necessary.
:::

### Changing the application's SSL certificate
:::(Warning) (Warning)
Changing the certificate will restart the Web server service.
:::
:::(Warning) (Warning)
In the default senhasegura installation, a self-signed 512-bit SSL certificate is installed. It is highly recommended that you replace this certificate with a valid market certificate.
:::
Access the **Orbit Config Manager > Server > Certificates** menu to access the screen where you can upload a new pair of certificate files and its key.

Being a valid certificate, it will be listed in the installed certificates relationship in the application.

To apply it, click on the **Install** button for the desired certificate. At this point, **Orbit** will apply the certificate to the Web server and restart the service.
:::(Warning) (Warning)
* The certificate must be of type **PEM**. Being a file with `.crt` extension for the certificate and a file with `.key` extension for the key.
* Certificates of type **DER** or **PKCS#12** (PFX, P7B, and P12) must be converted.

:::
## Network services
### DNS
:::(Warning) (Warning)
Although part of the **Orbit Wizard** process, you can change DNS settings at any time. Just be aware that this action, although it does not restart services on the instance, may put senhasegura in a network situation where it cannot reach devices that were previously accessible.
:::
Accessing the **Orbit Config Manager > Server > Settings** menu gives you access to the DNS configuration fields, where you can enter up to three DNS server addresses, Domain Information, and Search Information.

When making changes, apply them with the **Save** button and wait for **Orbit** to perform the necessary operations.

### NTP
The NTP server can also be changed even after running the **Orbit Wizard** steps. By changing the NTP server, you will be changing the system's time zone.
:::(Warning) (Warning)
Users may be logged out of the platform.
:::
Accessing the **Orbit Config Manager > Server > Settings** menu gives you access to the primary NTP server configuration and secondary NTP server fields.

### Firewall information
Accessing the **Orbit Config Manager > Server > Information** menu gives you access to all firewall rules applied to senhasegura. 
:::(Warning) (Warning)
These rules cannot be modified through the web interface. System updates will always normalize the firewall rules by removing non-standard rules.
:::

### HIDS Blocking (Wazuh)
senhasegura uses an integrated HIDS system based on **Wazuh** to protect server access. It prevents unsuccessful SSH connection attempts, ensuring resource integrity.

After three failed password attempts, the system blocks the IP/host for an increasing period of time: *1 minute*, *10 minutes*, *1 hour*, and *24 hours*.
The block is automatically removed after the timeout period.

The blocked IP/host is added to the senhasegura firewall block list, preventing future connections. The administrator can manually unblock the IP.

The blocked IP will be recorded as an incident and can be viewed in detail by accessing the Grid Menu, indicated by the box of nine squares, **Orbit Config Manager > Application > Incidents**.  

To unblock manually, the administrator must access the Grid Menu, indicated by the box of nine squares, and select the **Orbit Config Manager > Server > Security** menu, find the IP in the block list, and delete the block. 
:::(Info) (Info)
Unblocking may take a few minutes.
:::
:::(Warning) (Warning)
Blocking a senhasegura account due to failed attempts through the web interface is not considered in the Wazuh blocking. However, the blocking occurs following the same criteria, with manual release by the administrator.
:::

### Server tuning
When there is a change in usage profile or hardware configuration, it is recommended to reconfigure the web server and database load parameters so that senhasegura always operates in the best hardware configuration available and within the user's usage profile.

You can perform this maintenance conveniently from the **Orbit Config Manager > Server > System Tuning** menu. On this screen, you can choose between different system usage profiles, which will calculate the best configuration with the available hardware resources.

This calculation may show low or no variation in values if the available hardware is not sufficient for a usage profile change.
:::(Warning) (Warning)
This action will restart the systems and affect senhasegura behavior. Be mindful of downtime.
:::