# Referência para detalhes de tarefas

Sempre que for necessário, você pode acessar os detalhes de cada uma das solicitações para operações em lote que estão esperando a sua aprovação.  Para ter acesso à tela de detalhes de tarefas das solicitações, acesse **Grid Menu > Relatórios > Eventos > Operações em lote.**

## Detalhes da solicitação

Na listagem de solicitações, na coluna **Ação**, é possível visualizar os detalhes daquela solicitação clicando em **Detalhes da solicitação**, identificado pelo ícone da carteira de identidade.

| Campo                     | Descrição                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| **Solicitante**     | Nome do usuário que está realizando solicitando.                         |
| **Bulk operatioon** | Estado da operação em lote. Pode ser *Pendente*, *Aprovada* ou *Reprovada*.     |
| **Código**         | Número de identificação da solicitação a ser aprovada.                |
| **Grupo de acesso** | Grupo de acesso ao qual o usuário que realizou a solicitação faz parte. |
| **Solicitado em**   | Data e hora que a solicitação foi realizada.                             |
| **Validade**        | Data e hora de validade para a solicitação.              |
| **Aprovações**    | Quantidade de aprovações da solicitação.                               |
| **Reprovações**   | Quantidade de reprovações da solicitação.                              |

## Respostas

| Campo                   | Descrição                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| **Aprovador**     | Nome e nome de usuário do usuário aprovador da solicitação.                               |
| **Nível**        | Nível de acesso do usuário aprovador.                                                       |
| **Resposta**      | Resposta à solicitação. Pode ser : *Não respondida*, *Aprovada* ou *Reprovada*. |
| **Data**          | Data da resposta. Se não ocorrer nenhuma resposta, esse campo ficará em branco.             |
| **Justificativa** | Justificativa da ação. Se não ocorrer nenhuma justificativa, esse campo ficará em branco. |

## Seção de detalhes da solicitação

### Seção Informações

| Campo                  | Descrição                                                                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**      | Código da solicitação na plataforma.                                                                                                                                                          |
| **Ação**       | Qual foi a ação solicitada.                                                                                                                                                                    |
| **Status**       | Estado atual da solicitação. Caso a solicitação já tenha esxpirado, será mostrado o último estado da solicitação. Pode ser: *Aprovação pendente*, *Expirada* ou *Reprovada* |
| **Alterações** | Exibe quais foram a alterações solicitadas.                                                                                                                                                    |

### Seção Entidades afetadas

Uma vez que as operações em lote podem ser feitas em diversos artefatos do senhasegura, é bom atentar-se ao fato de que pode-se ter diversos modos de apresentar as informações.

Por exemplo, quando forem segredos oriundos de uma operação em lote no **DevOps Secret Manager (DSM)**, não existirá a seção de **Entidades afetadas**. Portanto, abaixo são mostrados campos para **Credenciais** e **Dispositivos**.

#### Entidades afetadas - Dispositivos

| Campo                         | Descrição                                           |
| ----------------------------- | ----------------------------------------------------- |
| **Código**             | Código da entidade afetada. No caso, do dispositivo. |
| **Nome do dispositivo** | Nome do dispositivo afetado.                          |
| **Gerenciamento**       | Endereço de IP ou hostname do dispositivo.           |
| **Tipo**                | Tipo de dispositivo.                                  |
| **Fabricante**          | Fabricante do dispositivo afertado.                   |
| **Modelo**              | Modelo do dispositivos afetado.                       |

#### Entidades afetadas - Credenciais

| Campo                      | Descrição                                         |
| -------------------------- | --------------------------------------------------- |
| **Código**          | Código da entidade afetada. No caso, a credencial. |
| **Nome do usuário** | Nome do usuário da credencial afetada.             |
| **Tipo**             | Tipo de credencial.                                 |
| **Domínio**         | Domínio da credencial                              |
| **Dispositivo**      | Dispositivo ao qual a credencial está atrelada.    |

:::(Info) (Info)
Para mais informações sobre os campos de registro de um dispositivo, acesse a documentação de [Referência para dispositivos](https://docs.senhasegura.io/v3-33/docs/pt/pam-reference-for-devices).
:::