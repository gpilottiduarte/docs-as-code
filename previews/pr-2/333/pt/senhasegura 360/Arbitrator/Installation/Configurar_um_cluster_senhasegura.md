# Configurar um cluster senhasegura

## Configurar um cluster senhasegura

:::(warning) (Cuidado)
Durante esse processo, seu cluster senhasegura pode ficar instável ou indisponível.
:::

Você deve ter o seguinte ambiente para poder executar as ações abaixo:

- Instância primária do senhasegura: 192.168.0.8
- Instância secundária do senhasegura: 192.168.0.9
- Máquina Linux com Docker host: 192.168.0.5

:::(info) (Info)
Siga a ordem e espere terminar cada comando antes de passar para a próxima etapa.
:::

1. Defina o cluster com o Arbitrator:

    :::(Info) (Info)
    Caso você não tenha um cluster configurado e funcional, o comando abaixo também irá
    realizar a montagem do mesmo. Sendo assim, não é necessário configurar o cluster previamente.
    :::

    - Digite o comando abaixo na instância **primária** do cluster:

        ```
        orbit cluster config --nodes=192.168.0.8,192.168.0.9 --ip=192.168.0.8 --arbiter=192.168.0.5 --segment=0 --latency="high"
        ```

    - Execute o comando abaixo para iniciar o cluster na instância **primária**:

        ```
        orbit cluster start
        ```

    - Digite o comando abaixo na instância **secundária** do cluster:

        ```
        orbit cluster config --nodes=192.168.0.8,192.168.0.9 --ip=192.168.0.9 --arbiter=192.168.0.5 --segment=0 --latency="high"
        ```
    - Execute o comando abaixo para iniciar o cluster na instância **secundária**:

        ```
        orbit cluster start
        ```
    
2. Configure o Elasticsearch

    :::(Info) (Info)
    Esse processo pode levar vários minutos.
    :::

    - Digite o comando abaixo na instância **primária** do cluster:

        ```
        orbit elasticsearch setup
        ```

    - Digite o comando abaixo na instância **secundária** do cluster:

        ```
        orbit elasticsearch setup
        ```
    
3. Reinicie o cluster senhasegura

    :::(Warning) (Cuidado)
    Durante a execução deste processo a base de dados do senhasegura será reinicializada, dessa forma o ambiente poderá passar por uma rápida indisponibilidade.
    :::

    - Digite o comando abaixo na instância **primária** do cluster:

        ```
        orbit cluster stop
        orbit cluster start

        ```

    - Digite o comando abaixo na instância **secundária** do cluster:

        ```
        orbit cluster stop
        orbit cluster start

        ```
    

---

## Transferência de arquivos para o Docker host

:::(Warning) (Cuidado)
Essa configuração só precisa ser realizada em uma das instâncias do senhasegura.
:::

Faça login via SSH (59022) na instância primária do senhasegura e siga as seguintes etapas:

1. Gere o arquivo de configuração do Arbiter e a imagem do Docker

```
orbit cluster arbiter create-config

```

Após este processo, dois arquivos serão criados no caminho:`/var/tmp/senhasegura-cluster-arbiter/`

- **manifests.tar.gz:** contém os arquivos necessários para executar os contêineres do Arbitrator, e facilita se você transferi-los para a máquina remota que executará o Arbitrator. Para obter instruções mais detalhadas, acesse o arquivo README .
- **docker-images.tar.gz:** contém as próprias imagens do contêiner. A transferência deste arquivo é opcional, você pode baixar a imagem diretamente do registro do docker, conforme explicado no arquivo.

2. Transfira o arquivo manifests.tar.gz para docker host via scp
- Docker host com acesso à Internet

O Docker host precisa ter acesso a *[registry.senhasegura.io](http://registry.senhasegura.io/)*.

Transfira o arquivo **manifests.tar.gz** para a máquina com docker e docker-compose:

```
scp /var/tmp/senhasegura-cluster-arbiter/manifests.tar.gz linuxuser@192.168.0.5:/tmp/

```

### Docker host sem acesso à Internet

Para um ambiente offline, você precisa transferir os manifests e os arquivos de imagens do docker para o Docker host.

- Transfira o manifests.tar.gz

```
scp /var/tmp/senhasegura-cluster-arbiter/manifests.tar.gz linuxuser@192.168.0.5:/tmp/

```

- Transfira o docker-images.tar.gz

```
scp /var/tmp/senhasegura-cluster-arbiter/docker-images.tar.gz linuxuser@192.168.0.5:/tmp/

```

---

## Próximos passos

- [Configurar o Docker host](/v3-33/docs/pt/arbitrator-docker-settings)

---

## Troubleshooting

Se você encontrar algum problema, tente o seguinte artigo: [Arbitrator Troubleshooting](/v3-33/docs/arbitrator-troubleshooting)

Se ainda não conseguir encontrar o seu problema, pode enviá-lo para o nosso [Community](https://community.senhasegura.io/?utm_source=HelpCenter&utm_medium=Article&utm_campaign=ArbitratorInstallation)