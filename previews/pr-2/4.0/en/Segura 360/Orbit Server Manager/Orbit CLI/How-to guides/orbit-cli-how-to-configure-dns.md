# How to configure DNS servers

This article describes how to configure the DNS servers that an instance will query using the command `orbit dns`.

## Command orbit dns
The command `orbit dns` provides tools for managing the DNS system.

```mt4adm@vmdf-giskard:~$ sudo orbit dns --help
Usage: orbit dns

The Domain Name System (DNS) management tools

Flags:
      --help                   Show context-sensitive help.
	-h

  -s, --servers=SERVERS,...    Domain servers list
      --search=SEARCH,...      The domain search list
  -d, --domain=STRING          Domain name
      --force                  Force the command execution, never prompt
      --show
```
## View the current DNS configuration
To list active DNS servers, use the argument `--show`.
```
mt4adm@vmdf-giskard:~$ sudo orbit dns --show
DNS configuration
DNS Servers:
    - 172.17.182.193
Domain: mshome.net
Search:
    - mshome.net
```
## Configure DNS servers
To configure the DNS server list and other options, use the available arguments. The DNS servers will be applied immediately. For example:
```
mt4adm@vmdf-giskard:~$ sudo orbit dns
    --servers=172.17.182.10,172.17.182.11
    --search=mshome.net
    --domain=mshome.net
Are you sure you want to proceed: y
Done!
No errors reported
```