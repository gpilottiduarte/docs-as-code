# Como executar o procedimento de limpeza do Discovery

Para executar o procedimento de limpeza do Discovery execute o comando `orbit support db-cleanup`.

```jsx
mt4adm@vmdf-giskard:~$ sudo orbit support db-cleanup --help

Usage: orbit support db-cleanup <command>

Delete all data from a given module

Commands:

support db-cleanup discovery      Delete all data from the Discovery module

support db-cleanup certificate    Delete all data from the Certificate Manager module

support db-cleanup cloud          Delete all data from the Cloud IAM module

support db-cleanup dsm            Delete all data from the DevOps Secret Manager module

-h, --help    Show context-sensitive help.
```

