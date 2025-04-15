O relatório de eventos centraliza os registros gerados pelas ações dos usuários. Acessando este relatório, você tem acesso a todos os filtros e a possibilidade de combiná\-los para identificar os eventos ocorrendo nas estações de trabalho.



---

## Exibir execuções de sudo

CuidadoEsse relatório registra os comandos da política de acesso que tenham uma gravação atrelada.1. Acesse a plataforma senhasegura.
2. Vá até o **GO Endpoint Manager➔Relatórios➔Linux➔Uso do sudo**, para visualizar o relatório das execuções como sudo:
* **ID:** número identificador do evento.
* **Hostname:** workstation utilizada.
* **Usuário:** usuário responsável pela execução.
* **Impersonado:** usuário alvo da mudança pelo proprietário da sessão.
* **Comando:** comando executado na máquina.
* **Início:** data e hora do início da sessão.
* **Fim:**data e hora do término da sessão.
* **Ação:**é possível visualizar a gravação da sessão.

InfoImpersonação é a ação de assumir um perfil de outro usuário do Linux. No exemplo abaixo, o usuário **john** impersonou a usuária **ashley.**
```
john@Workstation: sudo su
root@Workstation: su ashley
ashley@Workstation:
```
