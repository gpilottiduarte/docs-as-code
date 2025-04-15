# Requirements

* A Docker host (Linux machine*) with:
    * Docker and docker-compose installed
    * 2 vCPUs
    * 2GB RAM
    * 20 GB of storage
:::(Info) (Info)
The /var partition requires a minimum of 85% of the disk space assigned to the docker host server.
:::
* Firewall ports
    * Elasticsearch TCP ports 9300
    * Galera Cluster TCP 3306, 4567, 4568, 4444, and UDP port 4567
* Segura platform version 3.26 or higher
* Segura instances must be on the same version
* Maximum latency of 30ms between Arbitrator and Segura instances

*Not provided by Segura

---

## Related articles

- [Arbitrator Installation](/v4/docs/arbitrator-installation)