# Como realizar o gerenciamento de disco

Este artigo descreve o procedimento para o gerenciamento de disco em um ambiente virtual utilizando o `orbit disk`.

## Comando orbit disk
O comando `orbit disk` fornece ferramentas para o gerenciamento de discos, incluindo a expansão de discos virtuais e a obtenção de informações sobre suas partições.
```
orbit disk --help
Usage: orbit disk
Disks management tools
Flags:
-h, --help: Show context-sensitive help.
--force: Force the command execution, never prompt
Actions:
--expand: Process of disk expansion
--show: Show disk information
```
### Expansão de Disco
Para expandir um disco virtual e consumir novos espaços alocados no hipervisor, utilize o argumento `--expand`.
:::(Warning) (Cuidado)
O procedimento de expansão de disco é muito delicado. É recomendável que a instância esteja em modo de manutenção e que tenha sido realizado um backup e snapshot do servidor.
:::
```
orbit disk --expand
The disk expansion process is extremely delicate, be sure to take a snapshot
of the server before performing this procedure.
All previously unallocated disk resources will be distributed across current
partitions.
Are you sure you want to expand the disk: y
Done!
No errors reported
```