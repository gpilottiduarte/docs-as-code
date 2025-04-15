# Requirements

To ensure efficient data replication in a cluster, you must meet the following requirements: 

* [Update](/v3-32/docs/installation-how-to-update-cluster) all instances in the cluster and ensure they are using the same version of the software.
* [Activate the licenses for the instances on the Affinity Portal](/v3-32/docs/installation-how-to-activate-the-senhasegura-license).
* Ensure proper connectivity between all machines. For detailed information, access the articles on [how to configure network interfaces and hostnames](/v3-32/docs/installation-how-to-set-up-the-network-and-change-the-hostname).
* Ensure the following [firewall](/v3-32/docs/installation-firewall-requirements) ports are open among all instances:

    *     TCP (22, 443, 3306, 4444, 4567, 4568, 59022 e 9300).
    *     UDP (4567).

