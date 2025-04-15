# Referência para comandos do Orbit CLI

Este artigo descreve os comandos e funcionalidades disponíveis no **Orbit**.
:::(Warning) (Cuidado)
Caso você esteja em uma arquitetura de cluster, é importante saber que as ações realizadas em uma instância não são refletidas em todas as outras instâncias. Para os comandos que podem infligir no funcionamento do cluster, é necessário que você execute manualmente os comandos em cada uma das instâncias.
:::
:::(Warning) (Cuidado)
Os comandos abaixo podem reiniciar serviços essenciais para o funcionamento da aplicação, gerando uma indisponibilidade momentânea. Configurações inválidas podem ocasionar indisponibilidades irreversíveis. Você sempre será alertado da possibilidade de indisponibilidade e questionado se deseja prosseguir com a execução dos comandos.
:::
## Comandos disponíveis
Os comandos disponíveis no **Orbit** vêm acompanhados de uma descrição detalhada de suas funcionalidades.
:::(Info) (Info)
O comando `orbit`, se executado sem nenhuma instrução, irá exibir sua sintaxe padrão.
:::
:::(Info) (Info)
Caso você tente executar um comando sem elevação, você receberá uma mensagem de alerta: '**This program must be run with root permissions!**'
:::
```
# sudo orbit --help
Usage: orbit <command>

Orbit is the senhasegura console created to provide tools for system configuration and administrative routines.

Commands:
  application           Application settings tools.
  api                   A2A settings tools.
  network               Network settings tools
  domum-gateway         Domum Gateway settings tools
  network-connector     senhasegura Network Connector settings tools
  hostname              Change the server hostname. Changing the hostname you will need reboot of the server.
  dns                   The Domain Name System (DNS) management tools
  ntp                   The Network Time Protocol (NTP) management tools
  upgrade               Upgrade the system by installing/upgrading packages
  backup                Application backup settings
  cluster               High Availability and Disaster Recovery settings tools
  sync                  Files and application directories synchronize configuration
  webssl                Webserver SSL certificates management tools
  locale                Language and locale settings
  partition             File system partitions management tools
  disk                  Disks management tools
  zabbix                Zabbix client configuration
  proxy                 Application access proxy settings
  email-oauth2-proxy    Email OAuth2 Proxy settings
  fajita                Fajita access proxy management tools
  rdpgate               RDP Gate access proxy management tools
  snmp                  Simple Network Management Protocol (SNMP) management tools
  firewall              System Firewall management tools
  shutdown              Power-off or reboot the machine safely.
  execution             Application execution process tool.
  services              Manage senhasegura services
  security              System security management tools
  version               Print version information and quit
  healthcheck           Health Check tools
  apt-fix               Reconfigure the senhasegura main repository

Flags:
  -h, --help    Show context-sensitive help.

Run "orbit <command> --help" for more information on a command.
```
### Ajuda adicional
Para obter informações detalhadas sobre um comando específico, utilize a seguinte sintaxe:
orbit `--help`.

Por exemplo, para exibir informações detalhadas sobre o uso e as opções disponíveis para o **comando dns**, execute:
`orbit dns --help`.


