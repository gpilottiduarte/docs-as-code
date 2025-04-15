# Como verificar a saúde da instância

Neste documento, você encontra um guia sobre como como verificar a saúde da instância Segura.

O comando ``orbit healthcheck`` pega as informações do hardware e do Segura, dados da aplicação e logs para análises durante incidentes ou validações da saúde da instância.

```
mt4adm@vmdf-giskard:~$ orbit healthcheck --help
Usage: orbit healthcheck <command>

Health Check tools

Arguments:
  <command>    Control the HealthCheck service: [run]

Flags:
  -h, --help     Show context-sensitive help.

      --force    Force the command execution, never prompt

actions
  --show
```
Exemplo da saída do comando:
```
mt4adm@vmdf-giskard:~$ sudo orbit healthcheck run
Are you sure you want to proceed: y
Done
Report can be found at /var/tmp/orbit_healthcheck/orbit-healthcheck-B3ECb6a4.zip
```
