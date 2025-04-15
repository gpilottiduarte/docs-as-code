GO Shell is a GO Endpoint Manager for Windows feature that allows the administrator to manage the execution of only previously allowed commands, thus having greater control over the use and security of the environment.

## Configure GO Shell

1. Go to the platform senhasegura.
2. Go to **GO Endpoint Manager ➔ Policies ➔ Windows ➔ Commands.**
3. Click on the **Action** menu.
4. Choose if a general rule will be applied to all workstations or specific ones.
5. Fill out the form **Register new Windows commands.**
6. On the tab **General**:
	* **Name:** choose a name for the rule of the command.
	* **Enabled:** choose if the rule will be active or not.
	* **Command:** write the command. For example, ipconfig, net session, tasklist, etc.
7. **Save.**



---

## Execute Go Shell

1. Go to your workstation.
2. Run **Core**.
3. Click on **GO****Shell** at the top of the application to open.
4. After registering the command, only senhasegura Shell will be available, and only registered commands can be used.
5. The GO Shell shows up when accessing the CMD through Windows or Windows Shell.

### **Examples of commands:**

Type `goshell --commands` to view the available commands:


```
C:\Program Files\senhasegura\Core>goshell --commands

 • exit
 • clear-host
 • cls
 • clear

```
Type `goshell --help` to view the command options:


```
C:\Program Files\senhasegura\Core>goshell --help

Go shell arguments
 • commands
 • update
 • help

```
Type `goshell --update` to update the list of commands:


```
C:\Program Files\senhasegura\Core>goshell --update
Requesting commands to the server, please wait...
Commands obtained successfully.

```
Message when a command is not available:


```
C:\Program Files\senhasegura\Core> net session
This command is not available.

```


---

## Read more

* [Typical screen](https://docs.senhasegura.io/v3-33/docs/en/general-information-graphical-user-interface#typical-screen)
* [Segregated parameters](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-windows-segregated-configurations)
