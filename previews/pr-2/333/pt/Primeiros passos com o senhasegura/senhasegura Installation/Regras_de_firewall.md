# Regras de firewall

Para garantir o correto funcionamento do senhasegura, é necessário configurar regras específicas de firewall. Neste artigo, você encontra todas as regras de firewall necessárias, bem como as portas de origem e destino correspondentes.


::: (error) (Importante)

Em ambientes em cluster, é necessário realizar as configurações das regras de firewall da instância Primária também nos membros secundários.
:::

{{snippet.senhasegura repo PT}}

::: (info) (Info)

Utilizamos as seguintes abreviações nas tabelas deste artigo:

* **PRD**: instância Primária do senhasegura.
* **MBR**: membros secundários do senhasegura.
* **USERW**: workstation do usuário.
* **DVC**: dispositivos cadastrados no senhasegura


:::


## Regras de firewall 

:::(error) (**Importante**)
Atualmente, o senhasegura não suporta a utilização de nenhum outro tipo de proxy que não seja o [proxy para APT](https://community.senhasegura.io/t/how-to-configure-a-proxy-to-update-senhasegura/361){target=`_blank`} para pacotes de atualização do sistema, e o proxy para o [Fajita](https://community.senhasegura.io/t/how-to-add-a-proxy-by-command-line/607){target=`_blank`}. Quaisquer outros usos do senhasegura através de algum outro proxy não são suportados.
:::

### Comunicação entre o senhasegura e sistemas de gerenciamento


| Permissão  | Protocolo  | Origem  | Porta de origem | Destino         | Porta de destino |
|------------|----------|--------|-------------|--------------------|------------------|
| ALLOW      | UDP      | PRD    | ANY         | NTP SERVER         | 123/NTP          |
| ALLOW      | UDP      | PRD    | ANY         | DNS SERVER         | 53/DNS           |
| ALLOW      | TCP      | PRD    | ANY         | MAIL SERVER        | 420/SMTP         |
| ALLOW      | TCP      | PRD    | ANY         | LDAP SERVER        | 389/LDAP         |
| ALLOW      | TCP      | PRD    | ANY         | LDAP SERVER        | 636/LDAPS        |
| ALLOW      | UDP      | PRD    | ANY         | RADIUS SERVER      | 1812/RADIUS      |
| ALLOW      | TCP      | PRD    | ANY         | TACACS SERVER      | 49/TACACS        |
| ALLOW      | UDP      | PRD    | ANY         | TACACS SERVER      | 49/TACACS        |
| ALLOW      | TCP      | PRD    | ANY         | LOG SERVER         | 514/SYSLOG       |
| ALLOW      | UDP      | PRD    | ANY         | LOG SERVER         | 6514/SYSLOG      |
| ALLOW      | TCP      | PRD    | ANY         | BACKUP SERVER      | 22/SSH           |
| ALLOW      | TCP      | PRD    | ANY         | BACKUP SERVER      | 2049/NFS         |
| ALLOW      | TCP      | PRD    | ANY         | BACKUP SERVER      | 5445/SMB         |

### Comunicação entre os sistemas de gerenciamento e o senhasegura

| Permissão  | Protocolo  | Origem  | Porta de origem | Destino         | Porta de destino |
|------------|----------|--------|-------------|--------------------|------------------|
| ALLOW      | TCP      | BACKUP SERVER  | ANY         | PRD         | 22/SSH            |
| ALLOW      | TCP      | BACKUP SERVER  | ANY         | PRD         | 2049/NFS          |
| ALLOW      | TCP      | BACKUP SERVER  | ANY         | PRD         | 445/SMB           |

### Comunicação entre os usuários e o senhasegura


| Permissão  | Protocolo  | Origem  | Porta de origem | Destino         | Porta de destino |
|------------|----------|--------|-------------|--------------------|------------------|
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 443/HTTPS         |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 80/HTTP           |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 22/SSH            |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 3389/RDP          |

### Comunicação entre o senhasegura e os dispositivos gerenciados

| Permissão  | Protocolo  | Origem  | Porta de origem | Destino         | Porta de destino |
|------------|----------|--------|-------------|--------------------|------------------|
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 22/SSH            |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 23/TELNET         |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 7443/ORACLE       |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 1433/MS-SQL       |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 5432/POSTGRES     |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 3306/MySQL        |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 3389/RDP          |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 135/RPC           |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 139/RM            |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 445/SMB           |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 80/HTTP           |
| ALLOW      | TCP      | PRD    | ANY         | DVC         | 443/HTTPS         |

### Comunicação entre instâncias do senhasegura (se aplicável)

| Permissão  | Protocolo  | Origem  | Porta de origem | Destino         | Porta de destino |
|------------|----------|--------|-------------|--------------------|------------------|
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 22/SSH            |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 3306/MySQL        |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 9300/VRACE        |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 4567/TRAM         |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 4568/BMC          |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 4444/SST do Galera Cluster   |
| ALLOW      | UDP      | PRD    | ANY         | MBR         | 4567/TRAM         |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 80/HTTP           |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 443/HTTPS         |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 4248/senhasegura Sync       |
| ALLOW      | TCP      | PRD    | ANY         | MBR         | 59022/senhasegura SSH       |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 22/SSH            |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 3306/MySQL        |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 9300/VRACE        |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 4567/TRAM         |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 4568/BMC          |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 4444/SST do Galera Cluster   |
| ALLOW      | UDP      | MBR    | ANY         | PRD         | 4567/TRAM         |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 80/HTTP    |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 443/HTTPS  |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 4248/senhasegura Sync  |
| ALLOW      | TCP      | MBR    | ANY         | PRD         | 59022/senhasegura SSH  |

