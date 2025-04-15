# Como realizar uma SST manualmente

Este artigo fornece instruções sobre como realizar uma transferência completa de dados, conhecida como Transferência Estatal Instantânea  (SST). 
::: (error) (Importante)  
Somente execute esses passos, caso tenha certeza que nenhuma das instâncias do Segura está em funcionamento em seu ambiente.
:::



## Como realizar uma SST manualmente no membro Primário do cluster

### Passos no membro Primário

1. Verifique o status da sincronização:
```Shell
sudo orbit cluster status
```
2. Pare o processo MariaDB:
```Shell
sudo systemctl stop mysql
```
3. Elimine os arquivos antigos de controle do cluster:
```Shell
sudo rm /var/lib/mysql/galera.cache


sudo rm /var/lib/mysql/grastate.dat


sudo rm /var/lib/mysql/multi-master.info
```
4. Inicie o processo MariaDB:
```Shell
sudo galera_new_cluster
```
### Passos no membro secundário

::: (warning) (Cuidado)
Se você opera um cluster com mais de um membro secundário, aplique os passos destinados ao membro secundário em todos eles.
:::


1. Pare o processo MariaDB:
```Shell
sudo systemctl stop mysql
```
2. Renomeie a pasta de dados do banco de dados atual para uma de backup:
```Shell
sudo mv /var/lib/mysql /var/lib/mysql-$(date +%d%m%y%H%M)
```
3. Crie uma nova pasta de dados do banco de dados:
```Shell
sudo install -d /var/lib/mysql -o mysql -g mysql
```
4. Confirme se a replicação está habilitada no arquivo de configuração: `galera.cnf`.
5. Edite o arquivo de configuração: `/etc/mysql/conf.d/galera.cnf`.

6. Salve o arquivo e saia do editor.
7. Abra outro terminal e monitore os logs do banco de dados:
```Shell
sudo tailf /var/log/mysql/mysql-error.log
```
8. Inicie o processo MariaDB:
```Shell
sudo systemctl start mysql
```
9. Verifique se o número de membros do cluster está correto no log de banco de dados. Por exemplo, se houver 2 membros, a mensagem deve ser:  `members = 2/2(joined/total)`.
 
10. Verifique se a mensagem de confirmação da sincronização é a seguinte:
```Shell
WSREP: Member 0.0 (vsrv-Segura-cert05) synced with group.
```

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.