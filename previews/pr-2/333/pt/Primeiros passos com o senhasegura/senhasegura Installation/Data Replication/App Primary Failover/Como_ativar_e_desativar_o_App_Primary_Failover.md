# Como ativar e desativar o App Primary Failover

Neste artigo, você encontrará um guia sobre como ativar o **App Primary Failover**.

## Requisitos
Para ativar com sucesso o **App Primary Failover**, você deve atender aos seguintes requisitos:

* O ambiente deve estar em um cluster.
* O número de membros no cluster deve ser maior ou igual a três, incluindo o Árbitro, quando presente.
* O número de membros no cluster deve ser ímpar.
* Todas as instâncias do senhasegura devem ter conectividade com todos os dispositivos e endpoints necessários.

::: (error) (Importante)

Uma vez que o **App Primary Failover** é ativado, a intervenção manual para selecionar a instância primária não é possível.

:::

::: (info) (Info)
O **App Primary Failover** é executado a cada 60 segundos e os registros podem ser encontrados no arquivo `/var/log/senhasegura/app-primary-failover/app-primary-failover.log`.
:::
## Como ativar o App Primary Failover
Para ativar o **App Primary Failover**, siga estes passos:

1. [Inicie uma sessão SSH com credenciais de administrador](/v3-33/docs/pt/administration-ssh-access).
2. Execute o seguinte comando para iniciar o **App Primary Failover**: 

```Shell
sudo systemctl enable --now app-primary-failover
```

3. Repita as etapas acima para todos os outros membros do cluster.

::: (warning) (Cuidado)
Não aplicar essas etapas a todos os membros do cluster resulta no mau funcionamento do recurso.
:::


## Como desativar o App Primary Failover
Para desativar o **App Primary Failover**, siga estes passos:

1. [Inicie uma sessão SSH com credenciais de administrador](/v3-33/docs/pt/administration-ssh-access).
2. Execute o seguinte comando para parar o **App Primary Failover**:
```Shell
sudo systemctl disable --now app-primary-failover
```

3. Repita as etapas acima para todos os outros membros do cluster.

::: (warning) (Cuidado)
Não aplicar essas etapas a todos os membros do cluster resulta no mau funcionamento do recurso.
:::
