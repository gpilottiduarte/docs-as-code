# How to set the hostname

In this document, you’ll find the steps on how to set the hostname in Segura.

## View command options
The `Orbit hostname` command allows you to work with the hostname of the operating system of this Segura instance.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit hostname --help
Usage: orbit hostname [<hostname>]

Change the server hostname. Changing the hostname you will need reboot
of the server.

Arguments:
[<hostname>] Setting the server hostname

Flags:
 --help Show context-sensitive help.
 --reboot Reboot the machine
 --force Force the command execution, never prompt
 --show
``` 
## Set a new hostname
You can determine a new hostname by providing the new hostname as the last argument, as described in the command's help.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit hostname vmdf-giskard
Are you sure you want to proceed: y
Done!
No errors reported
``` 
:::(Info) (Info)
After executing the command to apply the new hostname to the instance, please restart the server using the `--reboot` parameter.
:::



