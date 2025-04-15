# Referência para Configurações de replicação

Neste documento, você encontrará todas as informações sobre o menu **Configurações de Replicação** da interface **Orbit Web**.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Orbit Config Manager**.

1. No menu lateral, selecione **Replicação > Configurações**.

### Configurações de replicação

| **Item**                   | **Descrição**                                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------------------------|
| **Modo de operação**          | Deve ser escolhido entre **Autônomo**, **Cluster**, **Cluster** **Externo** e **Ativar Replicação**.                             |
| **Sincronizadores**            | Habilite ou não a opção de sincronizar arquivos.                                                             |
| **Sync timeout (segundos)**    | Especifique em segundos o número máximo de segundos para tentar novamente uma atualização na tabela de sincronização. |

### Membros do Cluster

| **Item**                    | **Descrição**                                                                                      |
|-----------------------------|----------------------------------------------------------------------------------------------------|
| **Membro primário**             | Campo para adicionar o membro primário do cluster.                                                   |
| **Membro adicional 1**          | Campo para adicionar o membro adicional 1 do cluster.                                                |
| **Membro adicional 2**          | Campo para adicionar o membro adicional 2 do cluster.                                                |
| **Membro adicional 3**          | Campo para adicionar o membro adicional 3 do cluster.                                                |
| **Membro adicional 4**          | Campo para adicionar o membro adicional 4 do cluster.                                                |
| **Membro adicional 5**          | Campo para adicionar o membro adicional 5 do cluster.                                                |
| **Membro árbitro**              | Campo para adicionar o membro árbitro do cluster.                                                    |
| **Membros em diferentes datacenters** | Habilite este campo caso os membros do cluster estejam em diferentes datacenters.                  |
| **Latência entre os membros**   | Escolha entre **Baixa**, **Média** e **Alta**, sendo Baixa: 0-10ms, Média: 10-30ms e Alta: > 30ms.              |
| **Segmento de rede**            | Esse campo deve ser preenchido com um número entre **1** e **9**. Os nodes de um mesmo datacenter, devem ser configurados com o mesmo segmento. Deixe em branco caso haja apenas um node em cada datacenter. |
| **Mensagem de exibição da tela de recovery** | Mensagem personalizável para exibição na tela de recovery.                                     |
| **Salvar**                      | Botão para salvar as alterações.                                                                   |
