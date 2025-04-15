# Referência para execuções

As execuções dentro do senhasegura **DevOps Secret Manager** estão acessíveis através do caminho **Grid Menu > DevOps Secret Manager > Automações > Execuções.**

Na tela, você encontrará as seguintes informações:

| Item                 | Descrição                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mostrar filtros** | Representado pelo botão em forma de lupa, esconde ou mostra as opções de filtro.                                                                |
| **Atualizar**       | Representado pela seta em sentido anti-horário, atualiza as informações na tela.                                                                |
| **Exibir ações**  | Representado pelos três pontos verticais, abre um menu suspenso com três opções: *Imprimir relatório, Exportar CSV* e *Agendar relatório*. |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                  | Descrição                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| **Código**     | Código da execução no senhasegura.                                                |
| **Automação** | Nome da automação.                                                                 |
| **Trigger**     | Menu suspenso para filtrar os resultados de acordo com um dos gatilhos utilizados.   |
| **Dispositivo** | Dispositivo onde a execução da automação foi executada.                          |
| **Status**      | Menu suspenso com o status da execução. Pode ser: *Pendente, Sucesso* ou *Erro*. |

Além dessas opções, você tem dois botões:

* **Filtrar**: aplica os parâmetros que foram passados nos campos.
* **Limpar**: limpa todos os parâmetros.

Abaixo, temos o campo de listagem que contém todas as execuções, filtradas ou não, que são apresentadas com os seguintes campos:

* **Código.**
* **Automação.**
* **Gatilho.**
* **Dispositivo.**
* **Status.**
* **Data de criação:** exibe a data e a hora que foi realizada aquela execução. Será exibida no formato `DD/MM/AAAA HH:MM.`
* Na coluna **Ação**, você tem a opção **Detalhes**, representada pelo ícone de lupa.

## Janela de detalhes das execuções da automação

É possível visualizar detalhes da execução. Para isso, na tela de listagem, selecione a execução que você deseja visualizar e clique em **Detalhes**, representado pelo ícone de lupa. Essa janela contém os seguintes campos:

| Item                        | Descrição                                                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**           | Código da execução.                                                                                                                                                                                                  |
| **Automação**       | Nome da automação.                                                                                                                                                                                                    |
| **Gatilho**           | Gatilho da automação. Pode ser mais de um.                                                                                                                                                                            |
| **Data de criação** | Exibe a data e a hora da criação da automação.                                                                                                                                                                      |
| **Dispositivo**       | Dispositivo que a execução foi feita.                                                                                                                                                                                 |
| **Credencial**        | Credencial responsável por efetuar a execução.                                                                                                                                                                       |
| **Detalhes**          | Detalhes da execução.                                                                                                                                                                                                 |
| **Plugin**            | Plugin utilizado pela automação na execução.                                                                                                                                                                        |
| **Template**          | Template utilizado pela automação na execução. Perceba que o nome do template é clicável. Ao clicar nesse link abre-se uma janela de edição do template de execução, contendo informações sobre o template. |
| **Status**            | Status da execução. Pode ser:*Pendente, Sucesso* ou *Erro*.                                                                                                                                                       |
| **Execution**         | Log da execução. Observe que existe um ícone de lupa clicável. Ao clicar neste link, uma nova janela se abrirá, exibindo os detalhes da operação executada.                                                      |

## Janela de detalhes da operação

Caso você queira, é possível visualizar a execução de forma mais detalhada. Para isso, na janela **Execuções de automação**, no campo **Execution**, clique em **Execution Details**, representado pelo ícone de lupa. A janela **Detalhes da operação** abrirá. Essa janela contém as informações sobre os detalhes da execução.

No cabeçalho do relatório você terá os detalhes de credencial, dispositivo e endereço do dispositivo daquela operação. Abaixo, você terá mais informações sobre a operação.

| Item                            | Descrição                                                                                                                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Solicitante**           | Template que solicitou a operação.                                                                                                                                                                                                                     |
| **Data da solicitação** | Data da solicitação da operação.                                                                                                                                                                                                                     |
| **Data do agendamento**   | Data do agendamento da operação. Caso tenha sido agendada.                                                                                                                                                                                             |
| **Operação**            | Nome da operação executada.                                                                                                                                                                                                                            |
| **Estado**                | Estado da operação. Pode ser:*Pendente, Sucesso* ou *Erro*.                                                                                                                                                                                        |
| **1ª tentativa**         | Informa detalhes sobre a 1ª tentativa feita. Esses detalhes incluem:*Início da operação, Fim da operação e*Erro*: *Sim* ou *Não* (em caso de erro, a mensagem de erro é exibida logo abaixo).                                              |
| **Logs**                  | Ao clicar no ícone da seta você será redirecionado para uma janela com os logs da 1ª tentativa da operação, caso existam. Observe que caso não existam **Logs**, o sistema irá informar utilizado a mensagem *"Sem logs para essa tentativa"*. |