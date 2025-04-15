# Arbitrator update

To update Segura in one environment with an Arbitrator, follow the steps below:

1. Create new Arbitrator config files

```console
orbit cluster arbiter create-config
```

2. Transfer the manifests.tar.gz file to the machine Docker host

```console
scp /var/tmp/Segura-cluster-arbiter/manifests.tar.gz mt4adm@192.168.0.5:/tmp/
```

3. Go to the **opt** directory

```console
cd /opt/
```

4. Delete the old manifests folder

```console
rm -rf manifests
```

5. Unzip the new manifests

```console
tar -xzvf /tmp/manifests.tar.gz
```

6. Go to docker-compose directory

```console
cd manifests/docker-compose
```

7. Start the containers

```console
docker-compose up -d
```

8. Verify if the containers are running

```console
orbit cluster arbiter status
```

Expected result:

```console
Segura cluster arbiter

Status: ENABLED
Arbiter IP address: 192.168.0.5

Galera Cluster arbiter (garbd) status: Connected, OK
Elasticsearch arbiter status: Connected, OK

Troubleshooting guides is available at https://d.Segura.io/woam2aet
```