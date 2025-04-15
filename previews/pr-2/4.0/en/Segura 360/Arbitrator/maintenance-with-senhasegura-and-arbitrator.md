# Maintenance with Segura and Arbitrator

This article provides essential information for users who will perform maintenance on Segura that uses an arbitrator in the architecture.

:::(warning) (Caution)
When manipulating the cluster or performing actions on Segura instances, such as system updates and adjustments, remove the Arbitrator first. After completing all maintenance, turn on the Arbitrator again.
Read [how to remove Arbitrator from the cluster](/v4/docs/arbitrator-remove-arbitrator).
:::

## Remove Arbitrator for Segura maintenances

Environments that use an arbitrator have some peculiarities related to database interruption. To maintain the integrity of the database, it is not allowed to manually stop the MySQL service status or shut down the instances. To avoid problems with different synchronization timelines, the arbitrator container must be temporarily removed from the cluster before stopping the database. Consult the article [how to remove Arbitrator from the cluster](/v4/docs/arbitrator-remove-arbitrator) for detailed instructions.

Removing the arbitrator from the cluster does not affect its main function, which is to ensure the availability of the environment in case of a failed node. In a real incident scenario, the interruption of communication between the cluster nodes will occur abruptly without causing problems with different timelines.

For Disaster Recovery (DR) tests, it’s recommended to simulate real incidents, such as abrupt instance shutdowns using a virtualizer (using a snapshot), and the interruption of communication via network.
