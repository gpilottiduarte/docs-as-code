# Configurar containers do Docker

## Configurar contêineres Docker
1. Realize o login no host Docker via SSH
2. Vá para o diretório **opt**
```
cd /opt/
```

1. Descompacte o arquivo **manifests**

```
tar -xzvf /tmp/manifests.tar.gz

```

1. Vá para o diretório **manifests**

```
cd manifests/

```

:::(info) (Info)
Verifique o arquivo README para saber mais sobre arquivos e instruções.
:::

Você tem duas opções de implantação: docker-compose e o script de inicialização do container. Recomendamos fortemente o uso do docker-compose.

---

## Configurar variáveis Docker

Defina o parâmetro do kernel necessário para o contêiner Elasticsearch

1. Configure as variáveis Docker

```
sysctl -w vm.max_map_count=262144
echo 'vm.max_map_count=262144' >> /etc/sysctl.conf

```

---

## Iniciar variáveis Docker

### Host Docker com acesso à Internet

:::(warning) (Cuidado)
O host Docker precisa ter acesso ao `registry.senhasegura.io`.
:::

### Usar docker-compose (recomendado)

Você precisa ter o [docker-compose](https://docs.docker.com/compose/install/) instalado em seu host Docker.

O arquivo `docker-compose.yml` contém tudo o que é necessário para executar o cluster do Galera e os contêineres do Elasticsearch.

1. Vá para o diretório **docker-compose**

```
cd /opt/manifests/docker-compose

```

2. Inicie os contêineres

```
docker-compose up -d

```

:::(info) (Info)
Você pode gerenciar os dois contêineres ao mesmo tempo com os comandos `docker-compose stop`, `docker-compose start` e `docker-compose restart`.

Você também pode ver os logs de ambos os contêineres simultaneamente com o comando `docker-compose logs -f`.
:::

---

### Usar o script

O script `startup.sh` contém tudo o que é necessário para executar o cluster do Galera e os contêineres do Elasticsearch.

1. Vá para o diretório **docker**

```
cd /opt/manifests/docker

```

2. Execute o script **startup**

```
./startup.sh

```

:::info (Info)
Você pode ver os logs dos contêineres individualmente com os comandos `docker logs -f garbd-senhasegura-arbiter` e `docker logs -f elasticsearch-senhasegura-arbiter`.
:::

---

### Host Docker sem acesso à Internet

Use esta opção se o host Docker não tiver acesso à Internet.

1. Vá para o diretório **opt**

```
cd /opt/

```

2. Descompacte o arquivo **docker-images**

```
tar -xzvf docker-images.tar.gz

```

3. Carregue ambas as imagens no docker executando o seguinte comando:

```
bash /opt/docker-images/docker-load-images.sh

```

4. Verifique se as imagens foram importadas com sucesso com comando:

```
docker images

```

:::(Info) (Info)
Eles devem aparecer no topo da lista.
:::

1. Vá ao diretório docker-compose

```
cd /opt/manifests/docker-compose

```

2. Inicie os contêineres

```
docker-compose up -d

```

---

## Validar a instalação

Para verificar se tudo está funcionando corretamente, execute o seguinte comando nas duas instâncias do senhasegura:

```
orbit cluster arbiter status

```

Resultado esperado:

```
senhasegura cluster arbiter

Status: ENABLED
Arbiter IP address: 192.168.0.5

Galera Cluster arbiter (garbd) status: Connected, OK
Elasticsearch arbiter status: Connected, OK

Troubleshooting guides is available at <https://d.senhasegura.io/woam2aet>

```

---

## Troubleshooting

Se você encontrar algum problema, tente o seguinte artigo: [Arbitrator Troubleshooting](/v3-33/docs/arbitrator-troubleshooting)

Se ainda não conseguir encontrar o seu problema, pode envia-lo para o nosso [Community](https://community.senhasegura.io/?utm_source=HelpCenter&utm_medium=Article&utm_campaign=ArbitratorInstallation)