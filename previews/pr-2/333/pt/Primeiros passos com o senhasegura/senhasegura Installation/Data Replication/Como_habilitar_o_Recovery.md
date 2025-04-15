# Como habilitar o Recovery

O senhasegura oferece uma funcionalidade chamada **Recovery**, que permite a ativação manual ou automatizada de instâncias por meio de requisições HTTPS. Essa funcionalidade é útil para monitorar e controlar remotamente as instâncias, ativando ou desativando-as conforme necessário, evitando assim que uma instância em manutenção ou indisponível receba tráfego.


## Como habilitar o Recovery

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Orbit Config Manager**.

2. No menu lateral, selecione **Configurações** e, em seguida, **Recuperação**.
3. Ative o parâmetro **Permitir ativação remota do sistema**.
4. No campo **IPs de origem permitidos para ativação remota do sistema**, adicione os IPs autorizados para fazer requisições.


:::(Warning) (Atenção)
Quando estiver usando máscaras de sub-rede, deve-se adotar a notação CIDR, por exemplo, `192.168.1.0/24`.
:::

:::(error) (Importante)
É recomendado habilitar somente os IPs que efetivamente irão administrar a aplicação.
 
:::
5. Clique em **Salvar**.
6. Repita estes passos em todos os membros do cluster.





## Monitoramento de instâncias
Os IPs cadastrados na configuração de **Recovery** podem acessar a URL de monitoramento `https://mysenhasegura/flow/orbit/mntr`, obtendo informações sobre o estado atual da instância, indicado por códigos de status HTTP:



| Status |Descrição |
| --- | --- |
|**HTTP 200** |Aplicação ativa e disponível. |
| **HTTP 203** | Aplicação ativa, mas não é a principal. |
| **HTTP 403**| Aplicação inativa e indisponível. |
| **HTTP 451** | Licença de ativação expirada. |
|**HTTP 503** | Aplicação indisponível. |


## Ativação e inativação automática

É possível permitir que um sistema externo controle a ativação e inativação automática das instâncias. Por exemplo, ativar uma instância como primária para um data center de contingência. 

Esse tipo de controle é feito com as seguintes URLs:


### Ativar
`GET
 /flow/orbit/mntr/activate`

Ao ativar uma instância, ela se torna disponível para os usuários, mas isso só ocorre se a licença de ativação estiver válida. Após uma ativação bem-sucedida, a instância, que anteriormente era a principal no cluster, deixa de desempenhar  esse papel, e a nova instância ativada assume como principal. É importante observar que as outras instâncias não são desativadas automaticamente durante esse processo.

Exemplo: `https://mysenhasegura/flow/orbit/mntr/activate`

::: (info) (Info)
O botão de Recovery serve para interromper e reiniciar o Elasticsearch em situações de emergência, quando é preciso assumir a instância secundária de forma independente.

:::

### Desativar
`GET
/flow/orbit/mntr/deactivate`

Ao desativar uma instância ela se tornará indisponível e sua utilização será impedida. Se essa instância for a principal, ela será desativada sem que outro membro do cluster seja eleito como novo principal. É importante destacar que essa ação não ativará outras instâncias, mesmo se estiverem inativas.


Exemplo: `https://mysenhasegura/flow/orbit/mntr/deactivate`

::: (Warning) (Atenção)
É importante manter um controle preciso sobre quais instâncias estão em funcionamento e quais estão desativadas no cluster. Evite o risco de desativar acidentalmente todas as instâncias, o que poderia interromper as operações dos usuários.

:::

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

