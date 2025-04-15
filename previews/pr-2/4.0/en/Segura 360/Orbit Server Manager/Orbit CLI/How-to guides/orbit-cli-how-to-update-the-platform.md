# How to update the solution

With the `orbit upgrade` command, you will be able to update all the Segura platform packages. This includes the operating system packages, proxy, web application, and security settings.
:::(info) (**Info**)
Please validate that your instance can access the official Segura mirror servers using the following URLs:

* [https://deb.senhasegura.com.com/](https://deb.senhasegura.com/)  
* [https://security.senhasegura.com/](https://security.senhasegura.com/)
:::

## **Prepare the update**

Run the command `sudo apt-get update` to update the list of available packages on the official mirror.

Use the `–show` or `–check` arguments to list which packages will be installed.
:::(error) (**Alert**)
Do not execute the command apt-get upgrade .

If you run it, use orbit upgrade  to fix any problem.
:::

The orbit update \--check command will have a exit like the one below:

```Text
mt4adm@vmdf-giskard:~$ sudo orbit upgrade --check
Listing...
fajita-server-Segura-image/updates-buster 1.0.9-10~buster amd64
[upgradable from: 1.0.9-9~buster]
orbini/buster 5.10.13-28~buster all [upgradable from: 5.10.13-27~buster]
orbit-cli/buster 1.1.0-22~buster all [upgradable from: 1.1.0-21~buster]
Segura-app/buster 3.1.11-8~buster all [upgradable from: 3.1.11-7~buster]
xrdp-Segura-image/updates-buster 1.0.9-10~buster amd64
[upgradable from: 1.0.9-9~buster]
```

## **Download update packages to install later**

From version 3.33 onwards, you can download the update packages to install them later. This is useful for keeping your Segura instances available until installation.

To download the package, run orbit upgrade \--download-only and then perform the upgrade with the orbit upgrade  command.

## **Update the solution**

To update Segura, run the command `orbit upgrade`. Orbit will initially validate the binary version `orbit`, and if the need to update it is acted upon before starting the other updates, a message will be displayed containing the update instructions, as shown below:


```Text
mt4adm@vmdf-giskard:~$ sudo orbit upgrade
A new version of your system will be installed.
Are you sure you want to proceed: y

Checking for new versions. Please wait...

A new version of orbit-cli is available.

Run apt-get install orbit-cli before continue.
```

Once the binary `orbit` is updated, run the `orbit upgrade` command again to update all other updates.

The update process will display several messages related to the tasks being performed and restart the services several times during the process. An error message will be displayed at the end of the update cannot be performed. Otherwise, a success message will be displayed.

The orbit upgrade command will shown an exit like the one below:


```Text
mt4adm@vmdf-giskard:~$ sudo orbit upgrade
A new version of your system will be installed.
Are you sure you want to proceed: y█

Checking for new versions. Please wait...

...

[2020-06-17 16:17:18]: Checking firewall...
Firewall normalized
No errors reported

[2020-06-17 16:17:29]: Restarting robots...
Done!
No errors reported

Duration: 4m3.881937248s
```
:::(info) (**Info**)
Always run the `orbit version` command to validate the version that was installed after the upgrade process.
:::


