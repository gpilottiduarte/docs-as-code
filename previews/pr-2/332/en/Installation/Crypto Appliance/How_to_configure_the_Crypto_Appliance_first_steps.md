# How to configure the Crypto Appliance: first steps

In this article, you’ll find the first steps to set up the **Crypto Appliance**.

::: (Warning) (Caution) 

To perform the steps below, you’ll need the unique credentials for your **Crypto Appliance**, which you should have received after purchase. If you don't have them, please request them through our [Support Portal](https://suporte.senhasegura.com.br/en/support/login){target=`_blank`}.
:::
## Requirements

* A physical device.
* A monitor and keyboard.
* 2 network cables.


## Step 1: Connect the iDRAC

1. Connect 1 network cable to the iDRAC (iDRACport).
2. Connect 1 network cable to the interface (port 1).
3. Connect the monitor and keyboard.



## Step 2: Configure the iDRAC Network


1. Turn on the managed system.
2. During the Power-On Self-Test (POST), press `F2`.
3. In the **System Configuration Menu**, select **iDRAC Settings**. This will open the iDRAC settings page.
4. Click **Network**. The network configuration page will be displayed.
5. Configure the network options as follows:
    
    5.1. Under **Enable NIC**, select **Enabled**.
    5.2. From the **NIC Selection** dropdown menu, choose one of the following ports based on your network requirements:

    * **Dedicated**: allows the remote access device to use the dedicated network interface available on the remote access controller. This interface isn’t shared with the host operating system. Note that **Dedicated** options are displayed on blade servers as Chassis (Dedicated).
    * **LOM1**.
    * **LOM2**.
    * **LOM3**: this may not be available depending on the server model and network card selection.
    * **LOM4**: this may not be available depending on the server model and network card selection.

    5.3. In the **Failover Network** dropdown menu, select one of the remaining LOMs. If one network fails, the traffic will be routed through the failover network. This option is disabled if NIC Selection is set to **Dedicated**. 
    5.4. If iDRAC needs to automatically adjust the network duplex mode and speed, choose **Enabled** under **Auto-Negotiation**. This option is available only for the Dedicated mode.


    5.5. Under **Network Speed**, select **10 Mbps** or **100 Mbps**. **1000 Mbps** is available only if the **Auto-Negotiation** option is enabled.
    5.6. Under **Duplex Mode**, select either **Half Duplex** or **Full Duplex**. This option is disabled if **Auto-Negotiation** is set to **Enabled**.

6. Common Settings:
    
    6.1. Register the iDRAC in the DNS if there’s a DNS server in your network infrastructure. These are the basic setup specifications for more sophisticated capabilities like SSO, smart card services, Active Directory, or LDAP directory services. To register the iDRAC:



    * Enable Register DRAC in DNS.
    * Enter the DRAC DNS name.
    * Select **Auto Config Domain Name** to automatically acquire a domain name from DHCP or provide the DNS Domain Name.


7. Configure IPv4 settings following these steps:
    
    7.1. Select **Enabled** for **Enable IPv4**.
    7.2. Select **Enabled** for **Enable DHCP** to automatically assign the IP address, gateway, and subnet mask to iDRAC. Alternatively, select **Disabled** and enter the values for:

    * Static IP Address.
    * Static Gateway.
    * Static Subnet Mask.

8. Configure IPv6 settings by following these steps:
    
    8.1. Select **Enabled** for **Enable IPv6**.
    8.2. To allow DHCPv6 server to automatically assign the IP address, gateway, and subnet mask to iDRAC, select **Enable Auto Configuration**.
    8.3. In the **Static IP Address 1** box, enter the static IPv6 address.
    8.4. In the **Static Prefix Length** box, enter a value between 0 and 128.
    8.5.  In the **Static Gateway** box, enter the gateway address.
    8.6. If using DHCP, enable DHCPv6 to obtain the primary and secondary DNS server addresses from the DHCPv6 server. If necessary, configure the following:



    * In the **Static Preferred DNS Server** box, enter the static IPv6 DNS server address.
    * In the **Static Alternate DNS Server** box, enter the static alternate DNS server address.


9. Click **Back**.
10. Click **Finish**. The **Save Changes** pop-up will appear.
11. Click **Yes** to save the changes. The network information will be saved, and the system will reboot.


::: (warning) (Caution)
After configuring the iDRAC IP address, change the default username and password.
:::

For more information on setting up iDRAC9 with Lifecycle Controller, consult the [Dell documentation](https://www.dell.com/support/kbdoc/en-us/000177212/dell-poweredge-how-to-configure-the-idrac9-and-the-lifecycle-controller-network-ip?lwp=rt){target=`_blank`}.

## Step 3: Configure the device IP address


1. Log in as the `root` user on the login screen.
2. Access the network configuration file at `/etc/network/interfaces` and run the command:
```Shell
sudo vim /etc/network/interfaces
```

3. Locate the line referring to the IP address and uncomment it.
4. Enter the desired IP address for the appliance.
5. To save and exit the text editor (vim), press `Esc`, type `:x`, and `Enter`.
6. Restart the device to apply the settings.


## Step 4: Configure the senhasegura VM

1. In the appliance terminal, run the command `xl list` to get the name of the senhasegura VM (E.g., `senhasegura` or `ss-p`).
2. Next, access the senhasegura VM by running the command `xl console VM [vm name]`. Replace `[vm name]` with the name obtained in the previous step.
3. You’ll be redirected to the senhasegura login screen.
4. Log in with the senhasegura administrative credentials:

* **User**: `mt4adm`
* **Password**: `mt4adm` 

  :::(info) (Info)
  After the first login, you’ll need to create a new password.
  :::


5. Run the command `sudo orbit hostname` to change the default device hostname and generate a valid application activation code. Wait for the success message confirming the operation.

:::(warning) (Caution)
It’s recommended to change the hostname to ensure the successful creation of a valid activation code.
:::

6.  After correctly configuring the network interface, adjust the NTP server to synchronize the server time using the command:

```Shell
sudo orbit ntp --servers=SERVER1,SERVER2 --listen-interface=eth0
```
7. To apply the settings, reboot the device using the command:
```Shell
sudo orbit shutdown --reboot
```

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.
