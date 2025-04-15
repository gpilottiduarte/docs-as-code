# How to check the instance's health

In this document, you'll find a guide on how to check the health of the Segura instance.

The ``orbit healthcheck`` command retrieves hardware and security information, application data, and logs for analysis during incidents or health instance validations.

```
mt4adm@vmdf-giskard:~$ orbit healthcheck --help
Usage: orbit healthcheck <command>

Health Check tools

Arguments:
 <command> Control the HealthCheck service: [run]

Flags:
 -h, --help Show context-sensitive help.

 --force Force the command execution, never prompt

actions
 --show 
 ```
Example command output:

```mt4adm@vmdf-giskard:~$ sudo orbit healthcheck run
Are you sure you want to proceed: y
Done
Report can be found at /var/tmp/orbit_healthcheck/orbit-healthcheck-B3ECb6a4.zip
```

