# How to change default passwords

By using the `orbit security command`, you can change the default password for administrative users, the web interface administrator user (`mt4web`), and SSH access (`mt4adm`).

## Requirements

* Access to the admin console of the senhasegura instance.  
* Administrator user privileges.

The `orbit security` command has built-in help, which can be accessed via the terminal. To consult this help, type `orbit security --help`. The output of this command will be as shown below.

```bash
Usage: orbit security <command>
System security management tools
Commands:
  security password
  security hardening-normalize
  security dbpass
  security reset-admin
Flags:
  -h, --help    Show context-sensitive help.
```

## Manage SSH admin user

You have two tools to manage the passwords of the SSH admin user: `password` and `pwgen`.

### Change the mt4adm password to a new value

To make this change, use the `orbit security password` command. The output of this command will be as shown below:

```bash
This action will change the password for the system default user account
Changing password: mt4adm
New password: *********
Retype new password: *********
Are you sure you want to proceed: and
Done!
No errors reported
Changing password: senhasegura
Done!
No errors reported
```

### Change the mt4adm password to a random value

To make this change, use the `orbit security --pwgen` command. The output of this command will be as shown below:

```bash
This action will change the password for the system default user account
Changing password: mt4adm
Are you sure you want to proceed: and
Done!
No errors reported

The random generated password was: a*Y9z75#
Changing password: senhasegura
Done!
No errors reported
```

## Manage Web Interface admin user

Similarly, you have two tools that are responsible for managing the administrator user of the senhasegura web interface. Both are used via the command line.

### Reset the web interface admin account of the web interface

To make this change, use the `orbit security reset-admin` command. The output of this command will be as shown below.

```bash
This action will change the application admin user password to the initial value. Are you sure you want to proceed?
Change Admin Passwords
Admin User Password Reset Successfully!
```

### Rename the web interface admin user to `mt4web`

:::(warning) (Attention)  
Before performing the reset, it's essential to rename the web interface admin user.
:::

To rename the administrator account, use the `orbit security rename-admin` command. The orbit will ask for a confirmation with the message: `Are you sure you want to proceed:` Type `Y` or `y`  to proceed.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).