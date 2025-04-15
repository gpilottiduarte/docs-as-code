Neste artigo você encontra descrições das informações apresentadas nos relatórios de replicação de dados. Esses relatórios são utilizados para monitorar os status das instâncias do cluster.   

## Relatório de status da replicação

Para acessar o **Relatório de status da replicação**, vá para **Orbit Config Manager \> Replicação\> Status**. Este relatório fornece as seguintes informações:

### Servidor local



| **Campo** | **Descrição** |
| --- | --- |
| **Estado da replicação** | Indica se a replicação de dados está **Ativada** ou **Desativada**. |
| **Tipo de instância** | Indica se a instância é **Primária**ou **Secundária**. |
| **Modo de operação** | Indica se a operação está **Ativada**ou **Desativada**. |
| **Última sincronização** | Exibe a data e  hora da última sincronização. |
| **Token de autenticação** | Provides the authentication token. |

InfoCaso você utilize um **Servidor remoto**, o relatório também irá apresentar informações sobre ele.

## Relatório Elasticsearch de status do cluster

Para acessar o **Relatório Elasticsearch de status do cluster**, vá para **Orbit Config Manager \> Replicação \> Elasticsearch**. Este relatório fornece as seguintes informações:

### Cluster de pesquisa de dados



| **Campo** | **Descrição** |
| --- | --- |
| **Status** | Informa o status do funcionamento da instância. |
| **Uuid** | Apresenta um identificador único universal para a instância. |
| **Tamanho** | Indica o número de membros do cluster. |
| **Primário** | Identifica a instância primária do cluster. |
| **Versão** | Exibe a versão da instância. |
| **Shards** | Informa o número de Shards e o subconjunto de dados que compõem os dados do cluster. |
| **State****Uuid** | Representa um identificador de estado da instância no cluster. |
| **Tempo esgotado** | Informa se um erro ocorreu em um determinado momento e se a instância demorou para obter uma resposta do cluster. |

### Membros do cluster



| **Campo** | **Descrição** |
| --- | --- |
| **Índice** | Fornece um identificador de índice único para a instância do cluster. |
| **Nome** | Especifica o nome da aplicação do cluster. |
| **Efêmero** | Apresenta um identificador efêmero da instância do cluster. |
| **Endereço** | Informa o IP e a porta da instância. |

### Índices



| **Campo** | **Descrição** |
| --- | --- |
| **Nome** | Informa os nomes dos registros gerados pela instância. |
| **Uuid** | Apresenta um identificador único para o registro gerado. |
| **Tamanho** | Informa o tamanho do registro gerado pelo sistema. |
| **Health** | Informa se o registro está com um funcionamento correto. |
| **Status** | Fornece informações sobre o status de funcionamento da instância. |

