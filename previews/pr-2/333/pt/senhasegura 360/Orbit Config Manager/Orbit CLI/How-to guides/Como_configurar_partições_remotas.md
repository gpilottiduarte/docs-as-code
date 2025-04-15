# Como configurar partições remotas

O comando `orbit partition` permite que você liste, adicione ou remova partições remotas utilizadas para encaminhar o backup de banco de dados, arquivos de sessão e informações criptografadas com a chave mestra.
```
mt4adm@vmdf-giskard:~$ sudo orbit partition --help
Usage: orbit partition

File system partitions management tools

Flags:
      --help                          Show context-sensitive help.

  -l, --local="/srv/backup_remoto"    Local path to mount point
  -h, --remote-host=STRING            Remote host address
  -r, --remote-path=STRING            Remote path to mount
      --type="cifs"                   The filesystem type: [nfs|cifs]
  -o, --options=STRING                Adcional options to mount
  -u, --user=STRING                   Samba credentials username
  -p, --password=STRING               Samba credentials password
  -d, --domain=STRING                 Samba credentials domain
      --remount                       Remount the local partition
      --umount                        Unmount the partition configuration
      --delete                        Unmount and delete the partition configuration
      --force                         Force the command execution, never prompt
      --show
```
## Adicionar uma partição remota CIFS

Para interagir com o protocolo CIFS e suas opções de montagem no ambiente Linux, o pacote cifs-utils do [Debian](https://www.debian.org/) é utilizado no senhasegura. Este pacote é mantido pelos desenvolvedores do [SAMBA](https://www.samba.org/). Para obter informações detalhadas sobre as opções de montagem disponíveis, consulte o [manual oficial  do cifs-utils](https://wiki.samba.org/index.php/LinuxCIFS_utils).

O argumento `–remote-path` deve iniciar com a barra e conter apenas o diretório destino.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit partition
  --local="/srv/backup_remoto"
  --remote-host="192.168.214.37"
  --remote-path="/backup"
  --type="cifs"
  --user="senhasegura"
  --password="@qwemaster88"
  --domain="sandbox.local"
  
Are you sure you want to proceed: y
Done!
No errors reported
``` 
## Remontar uma partição remota registrada
Para remontar uma partição, caso o servidor destino tenha ficado inacessível por um tempo gerando erro na partição remota, utilize o comando `orbit partition –remount`.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit partition --remount
Are you sure you want to proceed: y
Partition remounted with success
- domain=sandbox.local
mount.cifs kernel mount options: ip=192.168.214.37,
unc=\\192.168.214.37\backup,file_mode=0750,dir_mode=0750,
uid=1001,gid=1001,user=senhasegura,domain=sandbox.local,pass=********
``` 
## Desmontar e manter uma partição remota registrada
Para desmontar a partição remota mantendo-a registrada no arquivo `/etc/fstab`, utilize o comando `orbit partition –umount`.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit partition --umount
Are you sure you want to proceed: y
Done!
No errors reported
``` 
## Desmontar e remover uma partição remota registrada
Para desmontar a partição remota, utilize o comando `orbit partition –delete`. Este comando irá desmontar a partição e removê-la do arquivo `/etc/fstab`.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit partition --delete
Are you sure you want to proceed: y
Done!
No errors reported
``` 
