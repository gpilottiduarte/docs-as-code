# Introdução

Dentro de um ambiente organizacional, onde se encontram diversos dispositivos e suas respectivas credenciais, pode ser difícil cadastrar todo o parque no cofre um a um, manualmente. Pode ser ainda mais difícil manter esses registros atualizados de acordo com as eventuais mudanças que venham a ocorrer no ambiente de TI da organização.

O objetivo deste módulo é verificar a rede para encontrar dispositivos e seus elementos como:

- Usuários
- Chaves SSH
- Certificados
- Serviços associados a credenciais cadastradas

Discovery é capaz de se conectar-se aos dispositivos da rede por meio de seus protocolos padrão (SSH / TELNET, RDP) sem a necessidade de instalar um agente local. Ele coleta o nome do host, endereço IP, lista de credenciais, tipo de privilégio e informações de registro de uso, como data do último acesso e alteração de senha.

:::(Warning) (Atenção)
O Discovery no Segura também é capaz de identificar todos os tipos de credenciais (privilegiadas e não privilegiadas). Isso inclui os usuários administradores do Windows e usuários com contas privilegiadas Linux/Unix (contas sudo e ID 0).
:::

Além disso, é possível realizar a importação automática dos objetos encontrados com base em glossários pré-definidos, e até mesmo monitorar os acessos não autorizados ou suspeitos (realizados fora do cofre) na rede.

Dispositivos que podem ser encontrados pelo Discovery:

- Servidores (Linux / Unix, Windows e VMWare)

- Base de dados (Oracle, SQL, MySQL, PostgreSQL)

- Dispositivos de rede (Firewalls, Roteadores, Switches, Balancers)

- Workstations.

Também é possível identificar automaticamente contas privilegiadas nos seguintes ambientes:

- Unix

- Linux

- Windows, em máquinas locais ou em Active Directory

- Oracle

- MS SQL

- MySQL

- PostgreSQL

## DevOps

É importante mencionar que além de verificar dispositivos e credenciais, também é possível verificar plataformas DevOps como:

- Dockers - Containers

- Ansible - Playbooks e Roles

- Jenkins - Jobs, Nodes e Usuários

- Kubernetes -- Secrets
