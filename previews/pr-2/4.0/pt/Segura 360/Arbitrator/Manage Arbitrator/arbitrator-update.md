# Atualização do Arbitrator

Para atualizar o Segura em um ambiente com Arbitrator, siga os passos abaixo:

1. Criar novos arquivos de configuração do Arbitrator

```console
orbit cluster arbiter create-config
```

2. Transfira o arquivo manifests.tar.gz para o host do Docker da máquina

```console
scp /var/tmp/Segura-cluster-arbiter/manifests.tar.gz mt4adm@192.168.0.5:/tmp/
```

3. Vá para o diretório **opt**

```console
cd /opt/
```

4. Exclua a pasta de manifests antiga:

```console
rm -rf manifests
```

5. Descompacte o novo manifests:

```console
tar -xzvf /tmp/manifests.tar.gz
```

6. Vá para o diretório docker-compose

```console
cd manifests/docker-compose
```

7. Inicie os containers:

```console
docker-compose up -d
```

8. Verifique se os contêineres estão em execução

```console
orbit cluster arbiter status

```

Resultado esperado:

```console
Segura cluster arbiter
Status: ENABLED
Arbiter IP address: 192.168.0.5
Galera Cluster arbiter (garbd) status: Connected, OK
Elasticsearch arbiter status: Connected, OK
Troubleshooting guides is available at https://d.Segura.io/woam2aet
```
