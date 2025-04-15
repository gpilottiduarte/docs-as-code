# About data recovery in Segura

Segura uses [MariaDB Galera Cluster](https://mariadb.com/kb/en/what-is-mariadb-galera-cluster/){target=`_blank`} as a high-availability cluster technology to ensure the integrity and continuity of data.

## Incremental State Transfers 
In situations of temporary interruption in replication between cluster members, the default configuration allows for a tolerance of approximately 3 hours. During this period, the cluster automatically performs Incremental State Transfers (IST) for resynchronization, sending only the affected incremental data. 

It’s important to emphasize that this approach eliminates the need for manual intervention, as the cluster is designed to handle resynchronization automatically during temporary interruptions.

## State Snapshot Transfers 
In cases of more prolonged interruptions, the adopted solution is to conduct a complete data transfer, known as State Snapshot Transfers (SST). This approach ensures that all cluster members are synchronized, preserving data consistency based on resynchronization from a member with reliable data.

Overall, the Segura cluster is robust and intelligent enough to resolve resynchronization automatically by autonomously executing a complete data transfer (SST).

For instructions on how to manually perform an SST, please refer to the article [How to perform a SST manually](/v4/docs/installation-how-to-perform-a-sst-manually).
