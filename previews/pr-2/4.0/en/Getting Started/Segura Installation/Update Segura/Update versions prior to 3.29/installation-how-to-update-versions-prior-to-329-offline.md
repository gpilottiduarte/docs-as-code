# How to update offline versions prior to 3.29

Customers with versions prior to 3.29 of senhasegura who wish to update their application offline to version 3.29 or later must follow the instructions provided in this article.

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
## How to update offline versions prior to 3.29
:::(Warning) (Caution)
Before updating senhasegura, always run a snapshot on your hypervisor and [backup using the Orbit CLI](/v4/docs/orbit-cli-how-to-configure-backup).
:::
:::(Warning) (Caution)
If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. [Learn more in our documentation](/v4/docs/arbitrator-remove-arbitrator).
:::

To update senhasegura offline, follow these steps:

1. In another machine with access to the internet, download the update package to a separate device:
```Shell
wget https://repo:HpRh0BVMNVAq@repo.senhasegura.com/bullseye-se-update.sh --no-check-certificate

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
6. In our example, we named the update file `bullseye-se-update.sh`, so our command is:
```Shell
sudo chmod +x bullseye-se-update.sh
```

7. Run the package using the following command:
```Shell
sudo bash <update_file_name>
```

8. Run the following command to reboot the device:
```Shell
sudo orbit shutdown --reboot
```
9. Run the package one more time using the following command:
```Shell
sudo bash <update_file_name>
```
10. Type **Y** to agree with the EULA terms.
11. After running the update file, return to `resolv.conf` and remove the '**#**' symbol from all previously modified lines.

12. Run the following command to reboot the device:
```Shell
sudo orbit shutdown --reboot
```
13. After the reboot is complete, run the following command and type **Y** to confirm:
```Shell
sudo orbit application init
```

14. A message in the terminal will indicate that the update was successful. To check the current version, run the following command:
```Shell
sudo orbit version
```

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).