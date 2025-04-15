# How to manage the firewall

One of the many configurations you can do with the **Orbit CLI** is the management of firewalls blocked hosts, performed by the HIDS. Use the `orbit firewall` command to manage hosts attempting to connect to senhasegura via **Secure Shell Protocol (SSH)**.

The `orbit firewall` command can be used with arguments and flags. Example: `orbit firewall [argument] [--flag]`.

:::(info) (Info)
Run `orbit firewall --help` to learn more about all available flags and arguments or access the  [Reference for Firewall command](/v3-33/docs/orbit-cli-firewall-command-reference) documentation.
:::

## Orbit firewall arguments guide

Use the `status` argument to access the currently blocked hosts list. Example: `orbit firewall status`. 

Expected output example:

```shell
Currently blocked hosts
172.18.77.185
```

### Block IPs

To block a specific IP, use the `block` argument with the `--host` flag followed by the target IP and confirm the action. Example: `orbit firewall block --host=172.18.77.185`.

Expected output example:

```shell
Are you sure you want to proceed: y
Done!
No errors reported
```

### Allow IPs

The firewall blocks hosts that failed three SSH connection authentications. If you have tests or false positives being blocked, unblock those IPs and send them to the allowlist.

To grant access to specific IPs, use the `unblock` argument with the `--host` flag followed by the target IP and confirm the action. Example: `orbit firewall unblock --host=172.18.77.185`.

:::(info) (Info)
You can only allow IPs that have been previously blocked. Blocked hosts are denied access to all services (web interface, SSH, RDP, and others).
:::

Expected output example:

```shell
Are you sure you want to proceed: y
Done!
No errors reported
```

To activate or deactivate ICMP from hosts, use the `icmp` argument followed by the `enable` or `disable` command, the target IP. To confirm the action, enter `y`. Example: `orbit firewall icmp enable --ip=172.18.77.185`.

Expected output example:

```shell
Are you sure you want to proceed: y
Done!
No errors reported
```

### Normalize firewall rules

To normalize the firewall rules, use the `orbit firewall normalize`. To confirm the action, enter `y`.

Expected output example:

```shell
Are you sure you want to proceed: y
Firewall normalized
No errors reported
```

:::(info) (Info)
The** Orbit CLI** will automatically run the normalize action with each system update. 
:::

## Allowlists

To add hosts to the allowlist, use the `orbit wazuh whitelist` command, specify all hosts needing server access with the `add` argument, and pass the comma-separated IPs with the `--ips` flag. 

Example: 

```shell
orbit wazuh whitelist add --ips=172.23.213.48,172.23.213.49,172.23.213.50
```

To remove IPs from the **Wazuh** allowlist, use the `orbit wazuh whitelist` command, specify all hosts that don't need access to the server with the `delete` argument, and pass the comma-separated IPs with the `--ips` flag. 

Example: 

```shell
orbit wazuh whitelist delete --ips=172.23.213.48,172.23.213.49,172.23.213.50
```

To print the **Wazuh** allowlist, use the `status` argument. Example: `orbit wazuh whitelist status`.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
