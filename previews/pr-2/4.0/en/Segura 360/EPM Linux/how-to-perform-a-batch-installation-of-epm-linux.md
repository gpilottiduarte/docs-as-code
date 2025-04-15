# How to perform a batch installation of EPM Linux

It's possible to perform a batch installation of EPM Linux, silently and automatically. This approach removes the need for manual intervention during installation, ensures cross-platform compatibility, and simplifies large-scale deployment.

## Installation script

To perform the batch installation, use the following `shell script`:

```shell
#!/bin/bash
secpack-installer-4.0.0-1.run --quiet -- --IP="10.66.33.48" --BOOTSTRAP_TOKEN="0191b316-aa90y887-738b-8eb4-ffb7a942d87a"
```

In that case, you must pass two parameters:

* `IP`: IP address of your Segura instance.  
* `BOOTSTRAP_TOKEN`: the value of the token obtained from your Segura instance. This is the same as the installation token indicated in the simple installation.

You can save this script in a `.sh` file and run it or type it directly into the terminal. Both methods work in the same way.

## Validate the installation

To validate the installation, run the command: `systemctl status secpack-maestro`

The output should be as follows:

```shell
secpack-maestro.service - Segura security pack daemon
   Loaded: loaded (/etc/systemd/system/secpack-maestro.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2025-01-27 11:45:00 -3; 58s ago
 Main PID: 3348 (secpack-maestro)
   CGroup: /system.slice/secpack-maestro.service
           └─3348 /usr/bin/secpack-maestro
```

Alternatively, check if the rules are synchronized by running the following command `sudo cat /etc/sudoers.d/Segura/`.

The output should be as follows:

```shell
%gonix ALL=(ALL:ALL) /usr/bin/lsusb
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/bin/groups
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/bin/cat
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/sbin/reboot
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/bin/ld
```

The two outputs confirm that the service is working correctly.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).  