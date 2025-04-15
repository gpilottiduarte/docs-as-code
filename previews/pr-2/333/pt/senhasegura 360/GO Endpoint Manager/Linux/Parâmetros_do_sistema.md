# Parâmetros do sistema

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Configurações➔Parâmetros➔go Linux.**


## Configurações de instalação

* **Permitir a auto-aprovação do link da estação de trabalho?:** indique se uma workstation deve ser automaticamente aprovada ao receber uma licença válida do GO Endpoint Manager.
* **Permitir auto-aprovação do primeiro link do usuário?:** indique se o primeiro acesso de um usuário será automaticamente aprovado, caso o usuário foi aprovado anteriormente em outra máquina com GO Endpoint Manager para Linux.
* **Permitir auto-aprovação de todos os outros links?:** indique se o primeiro login de todos os outros usuários será aprovado automaticamente, caso os usuários tenham sido previamente aprovados em outra máquina com GO Endpoint Manager para Linux.
* **Habilitar vencimento de usuário?:** indique se será obrigatório definir uma data de validade da autorização do usuário.
* **Intervalo de dias para vencimento de usuários:** indique o número de dias para a autorização do usuário expirar após a aprovação.

* * *

## AD Bridge
* **Permitir auto-aprovação do link da estação de trabalho?:** indique se a workstation deve ser automaticamente aprovada ao receber uma licença válida.
* **Domínio:** adicione o domínio da conta configurada.
* **Credencial:** adicione uma credencial existente com privilégios para realizar autenticações e gerenciar o console remotamente do AD. Essa credencial é responsável por executar os comandos no shell que vão ser utilizados para aplicar as políticas, e provisionar usuários, entre outras funcionalidades.
* **LDAP Uri:** adicione o endereço IP do AD.
* **Usar SSL?:** se estiver usando LDAPS, marque como **Sim.**
* **DN Bind:** adicione o nome de usuário usado para se conectar ao serviço LDAP.
* **DN Base:** preencha com o início do caminho que o servidor LDAP usa ao procurar a autenticação do usuário em seu diretório.
* **DN do usuário:** adicione onde o caminho do usuário está localizado.
* **Filtro de usuário:** preencha usando este filtro **(objectClass=user)**
* **UID do usuário:** preencher com esta variável **sAMAccountName**
* **Nome de usuário:** preencha com esta variável **displayName**
* **Caminho do diretório HOME do usuário:** preencha com a home do usuário, por exemplo, **/home/username**
* **Shell do usuário:** preencha com o caminho do shell que será utilizado pelos usuários.
* **Grupo DN:** preencha com um grupo para se autenticar.
* **Filtro de grupo:** preencha usando este filtro **(objectClass=group)**
* **Nome do Grupo:** preencha esta variável com **sAMAccountName**


* * *

## Mensagens

* **Mensagem de execução:** preencha com a mensagem que deverá aparecer para o usuário quando uma aplicação estiver em execução no GO Endpoint Manager para Linux.
* **Mensagem de bloqueio de execução:** preencha com a mensagem que deverá aparecer para o usuário quando uma execução for bloqueada no GO Endpoint Manager para Linux.