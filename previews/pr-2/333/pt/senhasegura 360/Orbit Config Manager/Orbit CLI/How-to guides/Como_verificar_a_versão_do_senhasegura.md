# Como verificar a versão do senhasegura

Neste documento, você encontrará instruções detalhadas sobre como verificar a versão do senhasegura. Para garantir a integridade e compatibilidade do ambiente, é essencial realizar essa verificação. 
:::(Warning) (Atenção)
É crucial assegurar que todos os membros de um cluster estejam na mesma versão para evitar conflitos e garantir um funcionamento harmonioso do ambiente.
:::
## Verificar a versão

1. Acesse o terminal ou prompt de comando do sistema operacional onde a instância senhasegura está instalada.
1. Utilize o comando `sudo orbit version`. 

Este comando retornará a versão atual da instância senhasegura instalada no sistema.

Exemplo de saída:
```
mt4adm@giskard:~$ sudo orbit version
[sudo] password for mt4adm:
senhasegura Orbit Command-Line Interface
Version 3.31.1-4

+--------------------+--------+
| APPLICATION PACKAGES | VERSION |
+--------------------+--------+
| orbini-fwk | 3.31.1-9 |
| senhasegura-pam | 3.31.1-5 |
+--------------------+--------+
```
:::(Info) (Info)
Ao solicitar suporte técnico, inclua sempre as informações de versão do senhasegura, isso ajudará a equipe de suporte a compreender melhor o contexto e a oferecer uma assistência mais eficaz.
:::


