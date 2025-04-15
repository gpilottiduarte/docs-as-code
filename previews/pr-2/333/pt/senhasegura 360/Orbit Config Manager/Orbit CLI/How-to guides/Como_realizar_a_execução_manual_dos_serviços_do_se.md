# Como realizar a execução manual dos serviços do senhasegura

Os serviços do senhasegura são responsáveis pela execução das tarefas assíncronas de todos os módulos do sistema.
:::(Info) (Info)
Por padrão, apenas a instância primária do cluster tem a capacidade e permissão para executar todos os serviços. Os outros membros do cluster estão limitados a executar tarefas relacionadas aos módulos operacionais. As tarefas relacionadas a backup e chave mestra são reservadas apenas para o membro principal.
:::
Se for necessário executar manualmente um serviço para fins de observação ou depuração, utilize o comando `sudo orbit execution` na instância principal. Este comando é usado para interagir com os processos de execução da aplicação. 
```
mt4adm@vmdf-giskard:~$ sudo orbit execution --help
Usage: orbit execution --code=STRING

Application execution process tool.

Flags:
  -h, --help             Show context-sensitive help.

  -c, --code=STRING      The Execution Process ID
  -t, --task=STRING      The Execution Task ID
  -o, --option=STRING    The Execution Process extra options
  -v, --verbose          Enable verbose mode
  -d, --debug            Enable debug mode
      --force            Force the command execution, never prompt
  ```
As algumas opções disponíveis são:

* `-c`, `--code=STRING`: Especifica o ID numérico do processo de execução que você deseja acionar. Este ID pode ser encontrado em **Configurações > Processos de Execução**.
* `-t`, `--task=STRING`: Especifica o ID da tarefa de execução. Este parâmetro é aplicável apenas se o serviço alvo tiver uma tarefa programada. As tarefas programadas podem ser encontradas em **Configurações > Serviços > Robôs e Tarefas > Tarefas**.
* `-o`, `--option=STRING`: Permite especificar opções extras para o processo de execução, se necessário.
* `-v`, `--verbose`: Habilita o modo verbose para fornecer uma saída mais explicativa.
* `-d`, `--debug`: Ativa o modo de depuração para registrar informações detalhadas para fins de solução de problemas.
* `--force`: Força a execução do comando sem solicitar confirmação.

Exemplo de saída com o processo de execução com o ID 56, fornecendo uma saída detalhada e registros de depuração:
``` 
mt4adm@vmdf-giskard:~$ sudo orbit execution --code 56 --verbose --debug
[2021-01-10 20:55:48 9.34Mb]: Preparing execution. PID 13158
[2021-01-10 20:55:49 9.84Mb]: Starting the change schedule for expired passwords
[2021-01-10 20:55:49 10.17Mb]: Finished
[2021-01-10 20:55:49 10.16Mb]: Finishing PID 13158
mt4adm@vmdf-giskard:~$
``` 
