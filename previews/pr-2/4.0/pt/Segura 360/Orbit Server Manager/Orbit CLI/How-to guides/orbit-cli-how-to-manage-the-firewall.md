# Como gerenciar firewalls com o Orbit CLI

Uma das configurações que você pode fazer com o Orbit CLI é o gerenciamento de *hosts* bloqueados pelo *firewall*. Utilize o comando `orbit firewall` para gerenciar os hosts que tentam se conectar ao Segura via Secure Shell Protocol (SSH).

O comando `orbit firewall` deve ser usado com *arguments* e *flags*. Exemplo: `firewall orbit [argument] [--flag]`.

:::(info)(Info)
Execute `orbit firewall --help` para saber mais sobre todos os arguments e flags disponíveis ou acesse a documentação de [referência do Orbit Firewall](/v4/docs/pt/orbit-cli-firewall-command-reference).
:::

## Argumentos do Orbit firewall

Use o argumento `status` para acessar a lista de hosts bloqueados. Exemplo: `orbit firewall status`.

Exemplo de retorno esperado:

```shell
Currently blocked hosts
172.18.77.185
```

### Bloquear um IP

Para bloquear um IP específico, use o argumento `block` com a flag `--host` seguida do IP alvo e confirme a ação. Exemplo: `orbit firewall block --host=172.18.77.185`.

Exemplo de retorno esperado:

```shell
Are you sure you want to proceed: y
Done!
No errors reported
```

### Liberar um IP

O firewall bloqueia hosts que falharam em três autenticações de conexão SSH. Se você tiver testes ou falsos positivos sendo bloqueados, desbloqueie esses IPs com o argumento `unblock` e envie-os para a *allowlist*.

Para conceder acesso a IPs específicos, use o argumento `unblock` com o sinalizador `--host` seguido do IP alvo e confirme a ação. Exemplo: `orbit firewall unblock --host=172.18.77.185`.

:::(info)(Info)
Você só pode permitir IPs que foram bloqueados anteriormente. Os hosts bloqueados têm acesso negado a todos os serviços (interface web, SSH, RDP e outros).
:::

Exemplo de retorno esperado:

```shell
Are you sure you want to proceed: y
Done!
No errors reported
```

Para ativar ou desativar o ICMP em hosts, use o argumento `icmp` seguido do comando `enable` ou `disable` e do IP alvo. Para confirmar a ação, entre `y`. Exemplo: `orbit firewall icmp enable --ip=172.18.77.185`.

Exemplo de retorno esperado:

```shell
Are you sure you want to proceed: y
Done!
No errors reported
```

### Normalizar regras do firewall

Para normalizar as regras do firewall, use `orbit firewall normalize` e confirme a ação.

Exemplo de retorno esperado:

```shell
Are you sure you want to proceed: y
Firewall normalized
No errors reported
```

:::(info)(Info)
O Orbit CLI executará automaticamente a ação de normalização com cada atualização do sistema.
:::

## Allowlists

Para adicionar hosts à lista de permissões, use o comando `orbit wazuh whitelist`, especifique todos os hosts que precisam de acesso ao servidor com o argumento `add` e passe os IPs separados por vírgula com o sinalizador `--ips`.

Exemplo: 

```shell
orbit wazuh whitelist add --ips=172.23.213.48,172.23.213.49,172.23.213.50
```

Para remover IPs da lista de permissões do Wazuh, use o comando `orbit wazuh whitelist`, especifique todos os hosts que não precisam de acesso ao servidor com o argumento `delete` e passe os IPs separados por vírgula com a flag `--ips`.

Exemplo: 

```shell
orbit wazuh whitelist delete --ips=172.23.213.48,172.23.213.49,172.23.213.50
```

Para acessar a allowlist, use o argumento `status`. Exemplo: `orbit wazuh whitelist status`.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
