# Como alterar senhas padrão

Ao usar o comando `orbit security`, é possível alterar a senha padrão dos usuários administrativos, do usuário administrador da interface da Web (`mt4web`) e do acesso SSH (`mt4adm`).

## Pré-requisitos

* Acesso à console administrativa da instância do Segura.  
* Privilégios de usuário administrador.

O comando `orbit security` conta uma ajuda integrada, que pode ser consultada através do terminal. Para consultar essa ajuda, digite `orbit security --help`. A saída deste comando será como mostrada abaixo.

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

## Gerenciar o usuário administrador de SSH

Você conta com duas ferramentas para gerenciar as senhas do usuário administrador do SSH: `password` e `pwgen`.

### Alterar a senha do usuário `mt4adm` para um novo valor

Para realizar essa alteração, utilize o comando `orbit security password`. A saída deste comando será como mostrado abaixo:

```bash
This action will change the password for the system default user account
Changing password: mt4adm
New password: *********
Retype new password: *********
Are you sure you want to proceed: and
Done!
No errors reported
Changing password: Segura
Done!
No errors reported
```

### Alterar a senha do usuário `mt4adm` para um valor aleatório

Para realizar essa alteração, utilize o comando `orbit security --pwgen`. A saída deste comando será como mostrado abaixo:

```bash
This action will change the password for the system default user account
Changing password: mt4adm
Are you sure you want to proceed: and
Done!
No errors reported

The random generated password was: a*Y9z75#
Changing password: Segura
Done!
No errors reported
```

## Gerenciar o usuário administrador da interface da Web

Do mesmo modo, você tem duas ferramentas que são responsáveis pelo gerenciamento do usuário administrador da interface web do Segura. Ambos são utilizados através da linha de comando.

### Redefinir a conta de administrador da interface da web

Para realizar essa alteração, utilize o comando `orbit security reset-admin`. A saída deste comando será como mostrado abaixo.

```bash
This action will change the application admin user password to the initial value. Are you sure you want to proceed?
Change Admin Passwords
Admin User Password Reset Successfully!
```

## Renomeie o usuário administrador da interface da Web para mt4web

:::(warning) (Cuidado)  
Antes de executar a redefinição, é essencial renomear o usuário administrador da interface da Web.  
:::

Para renomear a conta do administrador, use o comando `orbit security rename-admin`. O orbit solicitará uma confirmação com a mensagem: `Are you sure you want to proceed:` Digite `Y` ou `y` para prosseguir.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).