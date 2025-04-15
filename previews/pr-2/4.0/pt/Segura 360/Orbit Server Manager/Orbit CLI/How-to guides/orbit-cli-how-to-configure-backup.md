# Como configurar o backup

Através do módulo de backup você pode executar novos backups e restaurar um backup específico.
:::(Warning) (Cuidado)

Os arquivos de backup do senhasegura são protegidos por criptografia. Restaurar um backup pode ter impactos na estrutura de cluster e, em casos extremos, pode resultar na perda do acesso a informações sensíveis. Se precisar realizar uma restauração de backup, por favor, entre em contato com nossa equipe de suporte.
:::

**Comandos:**
  - `backup create`: Cria um novo backup
  - `backup recover`: Recupera o sistema para um ponto de backup
  - `backup time`: Configura o horário diário do backup do sistema

**Flags:**
  - `-h`, `--help`: Mostra ajuda sensível ao contexto.

## Executar, restaurar, e configurar o agendamento de um backup

### Executar um backup

O senhasegura realizará o backup de duas bases de dados geridas pelo [MariaDB](https://mariadb.com/):
- **mt4**: Banco de dados com informações da plataforma.
- **senhasegura**: Banco de dados com informações da plataforma senhasegura.

Execute o comando `orbit backup create` para executar um backup em ambas as bases de dados.
:::(Info) (Info)
Algumas informações foram suprimidas deste log. Mas você verá onde o backup é executado e para onde ele é copiado ao término do processo.
:::
```
orbit backup create
Are you sure you want to perform a data backup now: y
 Orbini Backup 1.1.0.2
 [2024-02-28 15:16:49]: BACKUP INFO Using configuration file '/var/senhasegura/orbinibkp.conf'
 [2024-02-28 15:16:49]: senhasegura DB INFO Starting database backup to /var/orbini/backup/senhasegura/senhasegura-db-2024-02-28_151649mt4.sql.gz
 [2024-02-28 15:16:50]: senhasegura DB INFO Starting database backup to /var/orbini/backup/senhasegura/senhasegura-db-2024-02-28_151650senhasegura.sql.gz
 [2024-02-28 15:17:08]: senhasegura DB INFO Database backup performed successfully
 [2024-02-28 15:17:08]: senhasegura DB INFO Limpando arquivos de backup antigos
 [2024-02-28 15:17:08]: senhasegura FILE INFO Starting db backup files via rsync from the /var/orbini/backup/senhasegura/ with delete source
 [2024-02-28 15:17:08]: senhasegura FILE INFO /var/orbini/backup/senhasegura/ backup successfully performed
Duration: 18.402217738s 
```
### Restaurar um backup
:::(Warning) (Cuidado)
Este procedimento restaura a base de dados por completo, incluindo dados e estrutura, para o período de tempo desejado. Certifique-se de restaurar todos os outros binários da aplicação, caso uma atualização do sistema tenha ocorrido entre o período atual e o período desejado no passado. O binário de aplicação pode ser restaurado usando a ferramenta Debian APT.
:::
Para restaurar o backup você deve ter disponíveis os arquivos de backup originais e ter certeza de que as informações a serem restauradas são de um momento próximo para não impactar o alcance dos dispositivos e garantir a integridade das informações privilegiadas.

Você deve primeiro restaurar a **base mt4** e posteriormente a **base senhasegura**.

```
mt4adm@vmdf-giskard:~$ sudo orbit backup recover
  --database=mt4
  --file=/******/senhasegura-db-2020-06-09_203007mt4.sql.gz

Restoring this file you will replace all the database data.
Are you sure you want to restore this backup file: y

mt4adm@vmdf-giskard:~$ sudo orbit backup recover
  --database=senhasegura
  --file=/******/senhasegura-db-2020-06-09_203007senhasegura.sql.gz

Restoring this file you will replace all the database data.
Are you sure you want to restore this backup file: y
```
### Configurar o agendamento de backup

Este comando oferece a capacidade de definir o momento para a execução do backup. O processo é automatizado para rodar a cada hora, sendo gerenciado pelo agendador de tarefas do sistema operacional Linux, conhecido como "cron". Se um horário específico for estabelecido, o backup será acionado de forma automática nesse momento. 

:::(Info) (Info)
 Caso nenhum horário seja estabelecido, o backup será programado para ocorrer às 5 horas da manhã.
:::

Para utilizar este comando, basta executar `orbit backup time` e especificar o horário desejado com a opção `--hour`, seguindo o formato de 24 horas (0-24). 
Para visualizar o horário atualmente configurado para o backup, utilize a opção `--show`. 
Caso deseje executar o comando sem a necessidade de confirmação adicional, utilize a opção `--force`.

```orbit backup time --hour=STRING
Configure the system backup daily time
Flags:
  -h, --help           Show context-sensitive help.
      --hour=STRING    Backup daily time: 0 to 24
      --show           Show the backup daily time
      --force          Force the command execution, never prompt
```

