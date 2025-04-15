# Firewall rules

To ensure the correct operation of senhasegura, specific firewall rules need to be configured. In this article, you will find the necessary firewall rules along with corresponding source and destination ports.

::: (error) (Important)
In clustered environments, it’s also necessary to configure firewall rules for the Primary application on secondary members.
:::

{{snippet.senhasegura repo EN}}

::: (info) (Info)
We use the following abbreviations in the tables in this article:

* **PRD**: Primary application.
* **MBR**: secondary members of a cluster.
* **USERW**: user workstation.
* **DVC**: devices registered in senhasegura.

:::

## Firewall rules

:::(error) (**Important**)
Currently, senhasegura doesn’t support the use of any other type of proxy other than the [APT proxy](https://community.senhasegura.io/t/how-to-configure-a-proxy-to-update-senhasegura/361){target=`_blank`} for system update packages, and the [Fajita proxy](https://community.senhasegura.io/t/how-to-add-a-proxy-by-command-line/607){target=`_blank`}. Any other uses of senhasegura through some other proxy are not supported.
:::

### Communication between senhasegura and management systems

| Permission | Protocol | Source | Source Port | Destination        | Destination Port |
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

### Communication between management systems and senhasegura

| Permission | Protocol | Source         | Source Port | Destination | Destination Port |
|------------|----------|----------------|-------------|-------------|-------------------|
| ALLOW      | TCP      | BACKUP SERVER  | ANY         | PRD         | 22/SSH            |
| ALLOW      | TCP      | BACKUP SERVER  | ANY         | PRD         | 2049/NFS          |
| ALLOW      | TCP      | BACKUP SERVER  | ANY         | PRD         | 445/SMB           |

### Communication between users and senhasegura

| Permission | Protocol | Source | Source Port | Destination | Destination Port |
|------------|----------|--------|-------------|-------------|-------------------|
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 443/HTTPS         |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 80/HTTP           |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 22/SSH            |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 3389/RDP          |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 1433/MS-SQL           |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 5432/POSTGRES       |
| ALLOW      | TCP      | USERW  | ANY         | PRD         | 1521 or 2484*/OracleDB    |

*SSL/TLS Connection

### Communication between senhasegura and managed devices

| Permission | Protocol | Source | Source Port | Destination | Destination Port |
|------------|----------|--------|-------------|-------------|-------------------|
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
| ALLOW      | TCP      | PRD  | ANY         | PRD         | 1521 or 2484*/OracleDB    |

*SSL/TLS Connection

### Communication between instances of senhasegura (if applicable)

| Permission | Protocol | Source | Source Port | Destination | Destination Port |
|------------|----------|--------|-------------|-------------|-------------------|
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

