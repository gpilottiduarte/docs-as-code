# How to update Segura offline

::: (error) (Important)
If you’re using a version prior to 3.33 and wish to update Segura to version 3.33 or later, please refer to the article [How to update versions prior to 3.33](/v4/docs/how-to-update-Segura-in-stages).
:::
::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating Segura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article [How to configure Zabbix via Orbit CLI](/v4/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

If your vault isn’t connected to the internet, follow the steps in this guide to update your application offline.

## Requirements

* **Firewall Rules:** Ensure your firewall settings allow communication with the Segura repositories. Detailed [firewall rules](/v4/docs/installation-firewall-rules) can be found in the documentation.
* **Server Time:** Verify that the server's time is correctly set.
* **(Situational) Arbitrator:** If your environment includes an Arbitrator, remove it from the cluster.
* **Snapshot:** Take a system snapshot before proceeding with the update.
* **Updating Sequentially:** For versions that are at least two releases old, update sequentially as instructed in this [article](/v4/docs/how-to-update-Segura-in-stages).
* **New Segura Repository**: Learn how to set up the [new Segura repository](/v4/docs/installation-how-to-change-Segura-to-use-the-new-repository).

:::(error) (Application unavailable during update)
When Segura initiates the update process, all features will be unavailable until all nodes in the cluster have been fully updated.
:::

* * *

## Take a snapshot

Snapshots should be taken only when Segura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a Segura instance using the following command:
    ```Shell
    sudo orbit shutdown
    ```
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your Segura instance and update the application.

* * *

## How to update Segura offline 
:::(Warning) (Caution)
Before updating Segura, always run a snapshot on your hypervisor and [backup using the Orbit CLI](/v4/docs/orbit-cli-how-to-configure-backup).
:::
:::(Warning) (Caution)
If you use the Segura Arbitrator, remove it from the cluster before updating Segura. [Learn more in our documentation](/v4/docs/arbitrator-remove-arbitrator).
:::

To update Segura offline using a Linux machine, follow these steps and refer to the examples provided below:

1. In another machine with access to the internet, use the link `https://storage.googleapis.com/Segura-packages-sp/packages/bookworm-stable-se-update.sh` to download the update package to a separate device:
    ```bash
    wget https://storage.googleapis.com/Segura-packages-sp/packages/bookworm-stable-se-update.sh
    ```
2. Create a folder for the update files inside the `/var/update` directory.  Use the following command:
    ```bash
    sudo install -d /var/update -g mt4adm -o mt4adm
    ```
3. Upload the file downloaded in step 1 to Segura's server (via `scp`, for example):
    ```bash
    scp -P 59022 <update_file_name>  mt4adm@<IP>:/var/update
    ```
4. Add a "**#**" symbol to comment every line in `resolv.conf` to prevent it from trying to connect to the internet during the update:
    ```bash
    sudo vim /etc/resolv.conf
    ```
5. Give the user permission to run the update file:
    ```bash
    sudo chmod +x <update_file_name>
    ```
6. Execute the file, in our example, we named the update file `bookworm-stable-se-update.sh`, so our command is:
    ```bash
    sudo chmod +x bookworm-stable-se-update.sh
    ```
7. Run the package using the following command:
    ```bash
    sudo bash <update_file_name>
    ```
8. Type **Y** to agree with the EULA terms.

9. After running the update file, return to `resolv.conf` and remove the '**#**' symbol from all previously modified lines.

10. Run the following command to reboot the device:
    ```bash
    sudo orbit shutdown --reboot
    ```
11. After the reboot is complete, run the following command and type **Y** to confirm:
    ```bash
    sudo orbit application init
    ```
12. A message in the terminal will indicate that the update was successful. To check the current version, run the following command:
    ```bash
    sudo orbit version
    ```

* * *

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).