# How to configure network interfaces

In this document, you’ll find instructions on how to configure the primary network interface of senhasegura, essential for accessing the web interface, proxies, and web services.

:::(Warning) (Attention)
This functionality replaces the need for localhost login with the orbit user.
:::
## Configuration command
:::(Warning) (Attention)
When configuring the network interface, the server will need to be restarted for the settings to take effect.
:::

1. Access the terminal or command prompt of the operating system where the senhasegura is installed.

1. Execute `sudo orbit network` command to access a series of options to configure the desired network interface.
```
mt4adm@vmdf-giskard:~$ sudo orbit network 
Usage: orbit network

Network settings tools

Flags:
-h, --help Show context-sensitive help.

-i, --interface=STRING
-a, --address=STRING
-m, --netmask=STRING
-g, --gateway=STRING
--force Force the command execution, never prompt

actions
--show
```

## List current configuration

1. Execute `sudo orbit network --show` command  to display important information such as IP address, subnet mask, and gateway.

```
mt4adm@vmdf-giskard:~$ sudo orbit network --show
Networking interface status
============================================================================
Interface eth0
MAC Address = 00:15:5d:3e:73:1c
MTU = 1500
Type = ether
IPv4
     Address = 172.17.182.204
     Broadcast = 172.17.182.207
     Gateway =============================================================================
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Ifac
0.0.0.0         172.17.182.193  0.0.0.0         UG    0      0        0 eth0
172.17.182.192  0.0.0.0         255.255.255.240 U     0      0        0 eth0
============================================================================
```
## Configure interface with DHCP

1. Execute `sudo orbit network` command to configure the interface with DHCP.

```
mt4adm@vmdf-giskard:~$ sudo orbit network
Use the arrow keys to navigate: ↓ ↑ → ←
? Choose an interface to configure:
▸ eth0

? Network settings:
static
▸ dhcp

? Are you sure you want to proceed? [y/N] y
Done!
No errors reported
``` 
:::(Warning) (Attention)
If the IP of senhasegura is configured as DHCP, DNS configuration may not work correctly, especially in OVAs. In these cases, it's necessary to configure a static IP to ensure proper DNS resolution and avoid potential issues.
:::
## Configure interface with static IP

1. Execute `sudo orbit network` command to configure a static IP.

``` 
mt4adm@vmdf-giskard:~$ sudo orbit network
Use the arrow keys to navigate: ↓ ↑ → ←
? Choose an interface to configure:
▸ eth0
? Network settings:
▸ static
dhcp
✔ IP Address: 172.17.182.204
Netmask: 255.255.255.240
Gateway: 172.17.182.193
? Are you sure you want to proceed? [y/N]
Done!
No errors reported
``` 
## Provide configuration details as command-line arguments
To reduce interaction during network interface configuration, you can provide configuration details as arguments directly on the command line.
```
mt4adm@vmdf-giskard:~$ sudo orbit network Ask an admin to verify Duo configuration. The following error is: ***"Unable to connect to Duo".
 --interface=eth0 \
 --address=172.17.182.204 \
 --netmask=255.255.255.240 \
 --gateway=172.17.182.193
 ``` 
This command configures the specified interface (eth0) with the provided IP address, subnet mask, and gateway.

Upon executing this command, there may be additional interaction to confirm the action. For example, choosing the type of network configuration (static or DHCP) and confirming whether to proceed with the provided settings.

After confirmation, the system will apply the specified settings, and you’ll see the completion message:
``` 
Done!
No errors reported
``` 

Thus, the network interface will be configured according to the provided specifications.

## Restart the Server
To apply the settings after configuring the network interface, it’s necessary to restart the server.

1. Execute `shutdown --reboot` command.

``` 
mt4adm@vmdf-giskard:~$ sudo orbit network --reboot
Use the arrow keys to navigate: ↓ ↑ → ←
? Choose an interface to configure:
▸ eth0
? Network settings:
static
▸ dhcp
? Are you sure you want to proceed? [y/N] y
Done!
No errors reported
Stopping database service...
``` 



