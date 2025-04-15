# Referência para o comando firewall

Espera-se que o comando de configuração do firewall do Orbit CLI `orbit firewall` seja usado com *arguments* e *flags*.

Exemplo:

```shell
orbit firewall [argument] [--flag] 
```

Esse documento descreve os *arguments* e *flags* disponíveis para o comando `firewall` do Orbit CLI.

## Arguments

| Argument      | Descrição                                                     |
|---------------|---------------------------------------------------------------|
| `block`       | Bloqueia o acesso de hosts e redes específicas.               |
| `unblock`     | Desbloqueie o acesso de hosts e redes específicas.            |
| `normalize`   | Normaliza as regras de firewall.                              |
| `status`      | Verifica o status do firewall.                                |
| `icmp`        | Habilita ou desabilita o protocolo ICMP em hosts específicos. | 

## Flags

| Flag              | Descrição                                                    |
|-------------------|--------------------------------------------------------------|
| `--help`          | Mostra opções de argumentos e sinalizadores.                 |
| `--host`          | Recebe o endereço IP do host ou uma *network list*.          |
| `--force`         | Força execução do comando.                                   |
| `--show`          | Mostra informações adicionais.                               |
| `--ips`           | Exclusivo para allowlists. Recebe os IPs a serem executados. |
