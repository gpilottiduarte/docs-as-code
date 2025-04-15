Within an organizational environment, where there are several devices and their respective credentials, it can be difficult to register the entire park in the vault one by one, manually. It may be even more difficult to keep these records up to date with any changes that may occur in the organization's IT environment.

The purpose of this module is to check the network to find devices and their elements like:

* Users
* SSH keys
* Certificates
* Services associated with registered credentials

Discovery can connect to network devices via the SSH, WinRM, WinRPC, and LDAP protocols without installing a local agent. It collects the hostname, IP address, list of credentials, type of privilege, and usage log information, such as date of last access and password change.

WarningDiscovery on senhasegura can also identify all types of credentials (privileged and non\-privileged). Including Windows admin users and users with privileged Linux/Unix accounts (sudo accounts and ID 0\).  


Also, senhasegura discoveries support multi\-ports. In the plugin tab (mentioned below), you can define multiple ports for each type of plugin.

Besides, it is possible to perform the automatic import of the objects found based on predefined glossaries, and even to monitor the unauthorized or suspicious accesses (performed outside the vault) on the network.

Devices that can be found by Discovery are:

* Servers (Linux / Unix, Windows and VMWare)
* Databases (Oracle, SQL, MySQL, PostgreSQL)
* Network devices (Firewall, Routers, Switches, Balancers)
* Work stations.

It is also possible to automatically identify privileged accounts in the following environments:

* Unix
* Linux
* Windows, on local machines or in Active Directory
* Oracle
* MS SQL
* MySQL
* PostgreSQL

## DevOps

It is important to mention that in addition to verifying devices and credentials, it is also possible to verify DevOps platforms such as:

* ***Dockers:*** Containers;
* ***Ansible:*** Playbooks and Roles;
* ***Jenkins:*** Jobs, Nodes and Users;
* ***Kubernetes:*** Secrets;
