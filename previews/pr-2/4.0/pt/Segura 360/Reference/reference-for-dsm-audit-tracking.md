# Referência para Audit Tracking

Dentro do Segura os Logs das operações do DSM através do **Audit Tracking**. Acesse-o pelo caminho **Grid Menu > DevOps Secret Manager > Eventos> Audit Tracking**.

## Barra superior

| Item                          | Descrição                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

Ao clicar em Mostrar filtros, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                             | Descrição                                                                                           |
| -------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Código**                | Código da operação no Segura. Por exemplo:`G6gC8IwB0bkgU1_dUh5x`.                           |
| **Operação**             | Tipo de operação. Por exemplo:**Secret criada.**                                              |
| **Entidade**               | Entidade que foi modificada na operação. Por exemplo:**Secret.**                              |
| **Cód. da Entidade**      | Código da entidade no Segura.                                                                   |
| **Nome da entidade**       | Nome da entidade.                                                                                     |
| **Origem**                 | Origem, dentro do DSM, da operação. Por exemplo: **DSM-Secret.**                                   |
| **Usuário**               | Usuário que executou a operação.                                                                   |
| **Nome do usuário**       | Username do usuário que executou a operação.                                                       |
| **Período de execução** | Abre um calendário para escolha da data inicial do filtro pelo período de execução da operação. |
| **até**                   | Abre um calendário para escolha da data final do filtro pelo período de execução da operação.   |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

O relatório é mostrado logo abaixo, em formato de lista, contendo os seguintes campos:

* **Código.**
* **Operação.**
* **Entidade.**
* **Cód. da entidade.**
* **Nome da entidade.**
* **Origem.**
* **Usuário.**
* **Nome de usuário.**
* **IP**: endereço de IP do usuário que realizou a execução.
* **Alteração**: alteração que foi feita na execução.
* **Data/Hora**: data e hora da execução, exibida no formato `DD/MM/AAAA HH:MM`.

## Janela de atualização de automação

Na coluna **Ação**, ao clicar em **Detalhes**, representado pelo ícone de lupa, você tem a opção de visualizar detalhes daquela operação.

Na janela **Audit Traking**, você terá as seguintes informações:

| Item                   | Descrição                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Código**           | Código da operação no Segura. Por exemplo:`G6gC8IwB0bkgU1_dUh5x`.                                        |
| **Origem**            | Origem, dentro do DSM, da operação. Por exemplo:**DSM-Secret.**                                                 |
| **Operação**        | Tipo de operação. Por exemplo:**Secret criada.**                                                                |
| **IP**                | Endereço de IP de onde foi executada a operação.                                                                |
| **Data/Hora**         | Data e hora em que foi executada a operação.                                                                     |
| **Usuário**          | Usuário que executou a operação. Será mostrado o nome do usuário seguido, entre parênteses, do seu username. |
| **Cód. da Entidade** | Código da entidade no Segura.                                                                                |
| **Entidade**          | Entidade que foi modificada na operação. Por exemplo:**Secret**.                                                |
| **Nome da entidade**  | Nome da entidade que foi modificada na operação. Por exemplo:**AWS**.                                           |

As alterações serão mostradas de acordo com as alterações feitas. Assim, você terá os campos conforme mostrados aqui.

* Na primeira tabela você pode conferir o que foi modificado. Por exemplo: **Credenciais em nuvem - Auto-renovação** seguido pelas células que indicam o **DE:PARA** do que foi modificado.

| Item        | Descrição |
| --------- | ----------------------------------------------------------------------- |
| **De**        | Mostra como era o campo antes da modificação. Por exemplo:Disabled    |
| **Para** | Mostra como o campo ficou após a modificação. Por exemplo:**Ativo** |

Para campo que for modificado através de uma operação, vai ser adicionado uma tabela seguinte esse modelo, facilitando assim a visualização do que foi modificado e como foi modificado.