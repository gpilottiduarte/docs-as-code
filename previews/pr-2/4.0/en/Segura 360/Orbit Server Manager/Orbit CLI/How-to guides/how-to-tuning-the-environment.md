# How to tuning the environment

The tuning of the environment is performed by changing environment properties of the PHP Webserver, database and engine. This way, all service architecture will work in a way more adequate to the hardware resources available in this instance.

Tuning settings should always be performed at the end of a new instance deployment, or when there is a hardware resizing that could affect the server's CPU and RAM.

This same configuration can be done through the menu **Orbit Server Manager \> Server \> System tuning**.

:::(info) (**Info**)
If you are not aware of the variables handled by this command, we recommend that you use tuning via the **Orbit web interface**. Through the web interface Orbit itself will calculate the best server usage scenario.
:::

:::(Warning) (**Attention**)
This command will restart the PHP Webserver, Database and Engine services. Improper configuration of values may **stop the operation**.
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

By default, Segura is installed with a tuning profile for two CPUs and 4G RAM. You can list the applied tuning values with the argument `–show`.

```Text
mt4adm@vmdf-giskard:~$ sudo orbit tuning --show
 DB Connections:          750
 DB Buffer Pool Size:     768M
 Number of threads:       8
 Worker processes:        2
 Process connections:     75
```

You can define all the variables through the other arguments.


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

Likewise, you can change only a few parameters, if necessary. But regardless of which parameter is affected, all services will be restarted.


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

