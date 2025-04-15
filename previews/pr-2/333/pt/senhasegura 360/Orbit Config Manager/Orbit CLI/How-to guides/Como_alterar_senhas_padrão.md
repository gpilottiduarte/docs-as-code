# Como alterar senhas padrão

Ao utilizar o comando `orbit security`, você pode alterar a senha padrão dos usuários `mt4adm` e `senhasegura`. 
:::(Info) (Info)
Apenas a senha do usuário `mt4adm` será apresentada ou indicada pelo administrador.
:::
```
mt4adm@vmdf-giskard:~$ sudo orbit security --help
Usage: orbit security <command>

System security management tools

Arguments:
  <command>    Security action: [password]

Flags:
  --help    Show context-sensitive help.

  --pwgen   Generate a random password for the system's default user account
  
  --reset-admin Reset admin user
```
## Alterar a senha mt4adm indicando um novo valor

1. Utilize o comando `password`.

```mt4adm@vmdf-giskard:~$ sudo orbit security password
This action will change the password for the system default user account
Changing password: mt4adm
New password: *********
Retype new password: *********
Are you sure you want to proceed: y
Done!
No errors reported
Changing password: senhasegura
Done!
No errors reported
```
## Alterar a senha mt4adm de forma aleatória

1. Utilize o argumento ``--pwgen``.
```
mt4adm@vmdf-giskard:~$ sudo orbit security password --pwgen
This action will change the password for the system default user account
Changing password: mt4adm
Are you sure you want to proceed: y
Done!
No errors reported

The random generated password was: a*Y9z75#
Changing password: senhasegura
Done!
No errors reported
```
## Resetar a conta admin da interface web

1. Utilize o argumento ``reset-admin``.
```
mt4adm@vmdf-giskard:~$ sudo orbit security reset-admin
This action will change the application admin user password to the initial value. Are you sure you want to proceed?
Change Admin Passwords
Admin User Password Reset Successfully!
```
## Renomear o usuário admin para mt4web
:::(Warning) (Importante)
Antes de efetuar o reset, é imprescindível realizar a renomeação do usuário.
:::

* Para renomear a conta de administrador, use o argumento ``rename-admin``.

* Para resetar a conta do administrador, use o argumento ``reset-admin``.
```
orbit security rename-admin # altera o nome do admin para mt4web
orbit security reset-admin # reseta a senha para o padrão da vm
```



