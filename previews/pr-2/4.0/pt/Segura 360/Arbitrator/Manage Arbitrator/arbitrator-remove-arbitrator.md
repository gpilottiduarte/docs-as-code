# Como remover o Arbitrator

Para remover o **Arbitrator**, proceda conforme as instruções abaixo:

1. Pare todos os contêineres em execução.

```bash
cd /opt/manifests/docker-compose
docker-compose down
```

2. Caso você não utilize o `docker-compose`, será necessário listar os contêineres e parar a execução deles manualmente. 
3. Para listar os contêineres em execução, utilize o comando `docker ps -a`. Você deverá obter uma saída similar à do exemplo abaixo:

```bash
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
3034e9858c2e   ubuntu    "/bin/bash"              10 seconds ago   Running (0) 7 seconds ago              hungry_goodall
```

4. Para parar o container, utilize o comando `docker stop <nome-do-container>`.
5. Para listar novamente os contêineres, utilize o comando `docker ps -a`. Você deverá obter uma saída similar à do exemplo abaixo:

```bash
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
3034e9858c2e   ubuntu    "/bin/bash"              10 seconds ago   Exited (0) 7 seconds ago              hungry_goodall
```

6. Certifique-se de que o contêiner foi parado de fato. Para isso, a coluna `STATUS` deve estar como `Exited`.
7. Após o encerramento da execução dos contêineres, realize a atualização do Segura.

É possível a remoção completa das imagens do Docker, ao invés de apenas parar a execução deles. Para realizar a remoção dessas imagens, proceda com os comandos abaixo:

1. Após parar a execução dos contêineres com os comandos docker-compose down ou `docker stop <meu-container>`, utilize o comando `docker image rmi <image_id>`. Esse comando removerá a imagem de acordo com o ID dela.
2. Você pode remover diversas imagens ao mesmo tempo, para isso utilize o comando `docker images rmi <image_id> <image_id>` repassando os IDs das imagens que você deseja remover.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.senhasegura.io/).