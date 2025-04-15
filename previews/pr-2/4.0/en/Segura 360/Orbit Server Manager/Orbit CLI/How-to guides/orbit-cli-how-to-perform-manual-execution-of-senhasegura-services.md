# How to perform manual execution of Segura services

The Segura services are responsible for executing the asynchronous tasks of all system modules.
:::(Info) (Info)
By default, only the primary instance of the cluster has the ability and permission to run all services. The other cluster members are limited to performing tasks related to operational modules. Backup and master key related tasks are reserved for the primary member only.
:::

If you need to manually run a service for observation or debugging purposes, use the `sudo orbit execution` command on the primary instance. This command is used to interact with the application's execution processes.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit execution --help
Usage: orbit execution --code=STRING

Application execution process tool.

Flags:
   -h, --help Show context-sensitive help.

   -c, --code=STRING The Execution Process ID
   -t, --task=STRING The Execution Task ID
   -o, --option=STRING The Execution Process extra options
   -v, --verbose Enable verbose mode
   -d, --debug Enable debug mode
       --force Force the command execution, never prompt
``` 
Some available options are:

* `-c`, `--code=STRING`: Specifies the numeric ID of the running process you want to trigger. This ID can be found in **Settings > Execution Processes**.
* `-t`, `--task=STRING`: Specifies the ID of the running task. This parameter is only applicable if the target service has a scheduled task. Scheduled tasks can be found in **Settings > Services > Robots and Tasks > Tasks**.
* `-o`, `--option=STRING`: Allows you to specify extra options for the execution process, if necessary.
* `-v`, `--verbose`: Enables verbose mode to provide more explanatory output.
* `-d`, `--debug`: Enables debug mode to record detailed information for troubleshooting purposes.
* `--force`: Forces the execution of the command without asking for confirmation.

Example output with the process running with ID 56, providing detailed output and debug logs:
```
mt4adm@vmdf-giskard:~$ sudo orbit execution --code 56 --verbose --debug
[2021-01-10 20:55:48 9.34Mb]: Preparing execution. PID 13158
[2021-01-10 20:55:49 9.84Mb]: Starting the change schedule for expired passwords
[2021-01-10 20:55:49 10.17Mb]: Finished
[2021-01-10 20:55:49 10.16Mb]: Finishing PID 13158
mt4adm@vmdf-giskard:~$
``` 

