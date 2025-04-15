# Como montar uma partição de backup via Rsync

Neste artigo você encontra instruções sobre como montar uma partição de backup via Rsync.


## Requisitos

* Um usuário com permissão para usar o Rsync no dispositivo de backup de destino.
* Um diretório dedicado de propriedade do usuário Rsync a ser usado para o backup (por exemplo, `/home/senhauser/backup_rsync`).
* Rsync instalado no servidor de backup.

::: (error) (Importante)
Os backups do Rsync requerem uma chave SSH. Adicione a chave pública do seu usuário root do Segura à lista de chaves autorizadas no dispositivo do usuário de backup.
:::

:::(warning) (Local de Backup de Segredos)

Sempre certifique-se de que os backups sejam salvos em um local diferente para proteger as informações sensíveis e manter a continuidade dos negócios.
Para o Segura com o appliance cripto, os backups não devem ser armazenados no próprio appliance porque:

1. **Ponto Único de Falha**: Se o appliance falhar, você pode perder tanto os dados quanto o backup.
2. **Opções Limitadas de Recuperação**: No caso de um mau funcionamento de hardware ou software, ter backups em um dispositivo externo garante que você tenha múltiplas opções para recuperação de dados.
3. **Melhores Práticas**: Armazene os backups em um local separado e seguro para cumprir com certificações e padrões de proteção de dados e garantir a disponibilidade.

:::

## Como montar uma partição de backup via Rsync

Para montar uma partição de backup via Rsync, siga estes passos:

### Passo 1: Obtenha a chave pública do usuário root

1. Inicie uma sessão SSH no seu servidor Segura como o usuário `mt4adm` usando a porta `59022`.

2. Execute o comando `sudo cat /root/.ssh/id_rsa.pub`:
3. 
    ```Shell
    sudo cat /root/.ssh/id_rsa.pub

    $ ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQChIgNXVHrjq3ECwVytNb9k2liB5vGFNNtTDdwSYaYW/WQ8
    NC0yq70BxcmaQWwFddWfQIQVjMw2WZNkroTsinEZkLHBUN12eMMwNB4izo0iQ70IB8wSj2lQbl/G   AYyzQCZQRo486eFHFJVIaTviDpf32D/O6qz6JGvCpRRzx7owZhuscJGfUesl/q0sCZ9DUn79TLtj/lIC+na4s5c1g/SYyO7IkdwQBkeeXJSasdqwe34gbcvbdf5dL5f00EIIEHclg5tBxmt9UQ2yRXu1   GbkbdFF5tllNdUfgy4Eb7K8kCTm/djb1ljzWiZodtzas+gPWZOHWaV8nAl17Zc1+xeL shbupk

    ```
  
3. Copie a chave pública exibida.
4. Faça login no servidor de backup e cole esta chave pública no arquivo `authorized_keys` do usuário de backup.

    ```Shell
    vim /home/rsync/.ssh/authorized_keys
    ```

5. Confirme a configuração executando:

    ```Shell
    sudo ssh <backup_user@server>
    ```

### Passo 2: Configure o backup do sistema do Segura

1. No canto superior esquerdo da tela, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **Orbit Server Manager**. 

2. Selecione **Configurações > Backup**.
3. Set the **Enable application backup?** parameter to **Yes**. 
4. Defina o parâmetro **Gostaria de habilitar o backup da aplicação?** como **Sim**.
5. Defina o parâmetro **Gostaria de montar uma partição remota?** como **Sim**.
6. Escolha **Enviar para um servidor Linux remoto (via Rsync)** como método de backup.
7. Insira o **Usuário** de backup.
8. Insira o **Hostname** ou **endereço IP** do servidor de backup, por exemplo,  `myserver.com` ou `10.10.1.5`.
9. Insira o **Diretório remoto** de backup (por exemplo, `/files/backup/Segura`).

### Passo 3: Teste o backup Rsync

1. Inicie uma sessão SSH no seu servidor Segura como o usuário `mt4adm` usando a porta `59022`.
2. Execute o comando `sudo orbit backup create`.
3. O comando retornará a confirmação do Rsync e o tempo de transferência.
4. Verifique se você consegue ver os arquivos no **Diretório remoto** especificado para o servidor de backup.

## Logs de backup
Para verificar os logs de backup, siga estas etapas:

1. Inicie uma sessão SSH no seu servidor Segura como o usuário `mt4adm` usando a porta `59022`.
2. Execute o seguinte comando:

```Shell
tail -f /var/log/orbinibkp.log

```

