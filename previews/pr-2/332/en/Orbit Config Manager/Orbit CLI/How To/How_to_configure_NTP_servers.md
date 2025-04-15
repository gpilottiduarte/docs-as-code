# How to configure NTP servers

In this document, you’ll learn how to configure which Network Time Protocol (NTP) servers the instance should query to keep the time synchronized, using the command `orbit ntp`.
:::(Info) (Info)
Changing NTP servers may affect the use of OTP tokens.
:::

## View command options

1. Access the terminal or command prompt of the operating system where the senhasegura instance is installed.

1. Execute `orbit ntp --help` command to view available options and understand how to use the command.
```
mt4adm@vmdf-giskard:~$ sudo orbit ntp --help
Usage: orbit ntp

The Network Time Protocol (NTP) management tools

Flags:
-h, --help Show context-sensitive help.

-s, --servers=SERVERS,... NTP servers list
-l, --listen-interface=STRING NTP listen interface
--force Force the command execution, never prompt

actions
--show
``` 
## List active configuration

1. Execute `sudo orbit ntp --show` command to list the active configuration.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit ntp --show
NTP Status
Servers

a.ntp.br
b.ntp.br
Listen interface eth0

remote refid st t when poll reach delay offset jitter
==========================================================================
*a.ntp.br 200.160.7.186 2 u 34 128 377 5.196 -0.647 0.585
+b.ntp.br 200.160.7.186 2 u 2 128 377 47.750 -3.436 8.249
Tue 09 Jun 2020 04:49:55 PM -03
```
## Configure new servers

1. Execute `orbit ntp` command, and you’ll be prompted to provide the NTP servers you wish to configure.

1. Enter the addresses of the desired NTP servers when prompted by the command. You can provide multiple servers separated by space.

1. Verify that the entered NTP servers are correct and confirm the action when prompted.

After confirming the configuration, verify that the NTP servers have been configured correctly.
``` 

mt4adm@vmdf-giskard:~$ sudo orbit ntp
 --servers=a.ntp.br,b.ntp.br --listen-interface=eth0
Are you sure you want to proceed: y
Done!
No errors reported
``` 