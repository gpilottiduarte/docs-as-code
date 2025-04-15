# Manutenção senhasegura com Arbitrator

Este artigo fornece informações essenciais para usuários que vão realizar manutenção no senhasegura usando um Arbitrator na arquitetura.

:::(warning) (Atenção)
Ao manipular o cluster ou executar ações nas instâncias do senhasegura, como atualizações e ajustes do sistema, remova o Arbitrator primeiro. Após concluir toda a manutenção, ligue o Arbitrator novamente.
Leia como remover o Arbitrator do cluster.
:::

## Remover o Arbitrator para manutenções no senhasegura

Ambientes que usam um Arbitrator têm algumas peculiaridades relacionadas à interrupção do banco de dados. Para manter a integridade do banco de dados, não é permitido interromper manualmente o status do serviço MySQL ou desligar as instâncias. Para evitar problemas com diferentes linhas do tempo de sincronização, o contêiner do Arbitrator deve ser temporariamente removido do cluster antes de interromper o banco de dados. 
Consulte o artigo [como remover o Arbitrator do cluster](/v3-33/docs/arbitrator-remove-arbitrator) para obter instruções detalhadas.

A remoção do Arbitrator do cluster não afeta sua função principal, que é garantir a disponibilidade do ambiente em caso de falha de um nó. Em um cenário real de incidente, a interrupção da comunicação entre os nós do cluster ocorrerá abruptamente sem causar problemas com diferentes linhas do tempo.

Para testes de Disaster Recovery (DR), é recomendado simular incidentes reais, como o desligamento abrupto de instâncias usando um virtualizador (usando um instantâneo) e a interrupção da comunicação via rede.