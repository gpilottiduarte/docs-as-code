# Como realizar o tuning do ambiente

O tuning do ambiente é realizado alterando propriedades de ambiente do webserver, banco de dados e engine do PHP. Desta forma, toda arquitetura de serviço irá trabalhar de maneira mais adequada aos recursos de hardware disponíveis nesta instância.

As configurações de tuning deve ser realizadas sempre ao término de uma implantação de nova instância, ou quando há um redimensionamento de hardware que possa afetar a CPU e memória RAM do servidor.

Esta mesma configuração pode ser realizada através do menu **Orbit Server Manager \> Server \> System tuning**.

:::(info) (**Info**)
Se você não tiver conhecimento das variáveis tratadas por este comando, recomendamos que você utilize o tuning através da **interface Web do Orbit**. Através da interface Web o próprio Orbit irá calcular o melhor cenário de uso do servidor.
:::

:::(Warning) (**Atenção**)
Este comando irá reiniciar os serviços de Webserver, Banco de dados e engine do PHP. A configuração indevida de valores pode **interromper o funcionamento**. 
:::

```Text
mt4adm@vmdf-giskard:~$ sudo orbit tuning --help
Usage: orbit tuning

Application tuning configuration

Flags:
 --help                       Show context-sensitive help.

 --db-max-conn=INT            The maximum number of simultaneous client
                              connections
 --db-buffer-pool=INT         DB buffer pool size (MB)
 --db-thread=INT              Number of threads used to apply write sets
                              when in cluster.
 --ws-workers=INT             The number of worker processes
 --ws-workers-children=INT    The maximum number of connections that each
                              worker process can handle simultaneously
 --force                      Force the command execution, never prompt
 --show
```

Por padrão o Segura é instalado com um perfil de tuning para duas CPUs e 4G RAM. Você pode listar os valores do tuning aplicado com o argumento `–show`.

```Text
mt4adm@vmdf-giskard:~$ sudo orbit tuning --show
 DB Connections:          750
 DB Buffer Pool Size:     768M
 Number of threads:       8
 Worker processes:        2
 Process connections:     75
```

Você pode definir todas as variáveis através dos demais argumentos.

```Text
mt4adm@vmdf-giskard:~$ sudo orbit tuning 
   --db-max-conn=750 
   --db-buffer-pool=768 
   --db-thread=8 
   --ws-workers=2 
   --ws-workers-children=75

The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
Done!
No errors reported
   DB Connections:          750
   DB Buffer Pool Size:     768M
   Number of threads:       8
   Worker processes:        2
   Process connections:     75
```

Você pode inclusive alterar apenas alguns parâmetros se necessário. Mas independente de qual o parâmetro afetado, todos serviços serão reiniciados.


```Text
mt4adm@vmdf-giskard:~$ sudo orbit tuning --db-thread=4
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
Done!
No errors reported
DB Connections:          750
DB Buffer Pool Size:     768M
Number of threads:       4
Worker processes:        2
Process connections:     75
```

