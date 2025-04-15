# How to update senhasegura offline

::: (error) (Important)
If you’re using a version prior to 3.29 and wish to update senhasegura to version 3.29 or later, please refer to the article [How to update versions prior to 3.29](/v3-32/docs/installation-how-to-update-versions-prior-to-329-offline).
:::
::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating senhasegura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article [How to configure Zabbix via Orbit CLI](/v3-32/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

If your vault isn’t connected to the internet, follow the steps in this guide to update your application offline.

## Requirements

* Set the correct server time.
* Take a snapshot before the update.
* The Arbitrator must be removed from the cluster (only for environments with an Arbitrator).

:::(Warning) (Application unavailable during update)
When senhasegura initiates the update process, it will be unavailable until the activity is complete.
:::

* * *

## Take a snapshot

Snapshots should be taken only when senhasegura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a senhasegura instance using the following command:
```Shell
sudo orbit shutdown
```
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your senhasegura instance and update the application.

* * *
## How to update senhasegura offline 
:::(Warning) (Caution)
Before updating senhasegura, always run a snapshot on your hypervisor and [backup using the Orbit CLI](/v3-32/docs/orbit-cli-set-up-backup-schedule).
:::
:::(Warning) (Caution)
If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. [Learn more in our documentation](/v3-32/docs/arbitrator-remove-arbitrator).
:::

To update senhasegura offline, follow these steps:

1. In another machine with access to the internet, download the update package to a separate device:
```Shell
wget https://storage.googleapis.com/senhasegura-packages-sp/packages/bookworm-stable-se-update.sh

```
2. Create a folder for the update files inside the `/var/update` directory.  Use the following command:
```Shell
sudo install -d /var/update -g mt4adm -o mt4adm
```
3. Upload the file downloaded in step 1 to senhasegura's server (via `scp`, for example):
```Shell
scp -P 59022 <update_file_name>  mt4adm@<IP>:/var/update
```
4. Add a "**#**" symbol to comment every line in `resolv.conf` to prevent it from trying to connect to the internet during the update:
```Shell
sudo vim /etc/resolv.conf
```
5. Give the user permission to run the update file:
```Shell
sudo chmod +x <update_file_name>
```
6. In our example, we named the update file `bookworm-stable-se-update.sh`, so our command is:
```Shell
sudo chmod +x bookworm-stable-se-update.sh
```

7. Run the package using the following command:
```Shell
sudo bash <update_file_name>
```
8. Type **Y** to agree with the EULA terms.

9. After running the update file, return to `resolv.conf` and remove the '**#**' symbol from all previously modified lines.

10. Run the following command to reboot the device:
```Shell
sudo orbit shutdown --reboot
```
11. After the reboot is complete, run the following command and type **Y** to confirm:
```Shell
sudo orbit application init
```

12. A message in the terminal will indicate that the update was successful. To check the current version, run the following command:
```Shell
sudo orbit version
```

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).