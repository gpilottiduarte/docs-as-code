# Reference for Firewall command

The Orbit CLI firewall configuration command `orbit firewall` is expected to be used with arguments and flags. 

Example:

```shell
orbit firewall [argument] [--flag]
```

This document describes the arguments and flags available with the `firewall` command.

## Arguments

| Argument      | Description                                      |
|---------------|--------------------------------------------------|
| `block`       | Block access for specified hosts or networks.    |
| `unblock`     | Unblock access for specified hosts or networks.  |
| `normalize`   | Normalize firewall rules.                        |
| `status`      | Check the status of the firewall.                |
| `icmp`        | Enable or Disable ICMP protocol in hosts.        | 

## Flags

| Flag              | Description                                       |
|-------------------|---------------------------------------------------|
| `--help`          | Show context-sensitive help.                      |
| `--host`          | Host IP or Network list.                          |
| `--force`         | Force the command execution.                      |
| `--show`          | Show additional information.                      |
| `--ips`           | Exclusive to allowlists. Accepts multiple IPs.    |
