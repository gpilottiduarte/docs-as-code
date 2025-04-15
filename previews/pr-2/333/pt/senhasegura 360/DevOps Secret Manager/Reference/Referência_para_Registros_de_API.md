# Referência para Registros de API

Dentro do senhasegura DevOps Secret Manager você pode consultar os Logs das operações ocorridas via API do DSM através do relatório de **Registros de API**. Acesse-o pelo caminho **Grid Menu > DevOps Secret Manager > Eventos> Registros de API**.

## Barra superior

| Item                     | Descrição                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

Ao clicar em **Mostrar filtros**, representado pelo ícone de lupa, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                           | Descrição                                                                                                                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Evento**               | Menu suspenso. Mostra as opções de eventos possíveis para a API do DSM. São eles: *Atualização, Criação, Excluir* e *Leitura*.                                                                        |
| **Reposta**              | Código HTTP da resposta obtida com a requisição.                                                                                                                                                              |
| **Tipo da entidade**     | Tipo da entidade que foi passada para a requisição da API. Por exemplo:**Secret**.                                                                                                                            |
| **Cód. da entidade**    | Código da entidade no senhasegura.                                                                                                                                                                              |
| **Nome da entidade**     | Nome da entidade. No caso, será o nome da requisição registrada no senhasegura.                                                                                                                               |
| **Cód. da Aplicação** | Código da aplicação. No caso, será o código da aplicação utilizada na requisição à API do DSM.                                                                                                         |
| **Aplicação**          | Nome da aplicação.                                                                                                                                                                                             |
| **Autorização**        | Código de autorização da requisição. Por exemplo: `b637bb60b67841de4cfce490d56884`.                                                                                                                        |
| **IP**                   | Endereço de IP do qual a requisição foi feita.                                                                                                                                                                |
| **Data/Hora**            | Data e hora em que a requisição foi feita. São dois menus suspensos distintos, o primeiro para abrir o calendário e escolher o dia e o segundo com os intervalos de horas e minutos que você pode escolher. |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Os resultados serão mostrados em uma lista logo abaixo dos campos de pesquisa. Na listagem, você ainda tem o campo **Server**, que identifica o servidor que recebeu a requisição à API do DSM.

O relatório é mostrado logo abaixo, em formato de lista, contendo os seguintes campos:

* **Evento**.
* **Reposta**.
* **Tipo da entidade.**
* **Cód. da entidade.**
* **Nome da entidade.**
* **Cód. da aplicação.**
* **Aplicação**.
* **Autorização**.
* **IP.**
* **Server**: endereço de IP do servidor que recebeu a requisição.
* **Data/Hora**: data e hora da requisição, exibida no formado `DD/MM/AAAA HH:MM`.