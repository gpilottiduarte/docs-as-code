# Referência para execuções

Você pode acessar o relatório de listagem de execuções através do caminho **Product Menu > PAM Core > Provisionamento dinâmico > Execuções.**

## Barra superior

| Item                          | Descrição                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Identificado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Identificado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Identificado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Identificado pelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

## Campos de busca

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                        | Descrição                                                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Profile**           | Menu suspenso com as opções dos perfis já cadastrados no Segura.                                                                                               |
| **Data de registro**  | Abre um calendário para que você possa escolher a data exata da execução. Esta será a data inicial do filtro.                                                     |
| **até**              | Abre um calendário para que você possa escolher a data exata da execução. Esta será a data final do filtro para os itens.                                         |
| **Data de criação** | Abre um calendário para que você possa escolher a data inicial exata de criação da execução. Esta será a data inicial de criação para o filtro para os itens. |
| **até**              | Abre um calendário para que você possa escolher a data final exata de criação da execução. Esta será a data final de criação para o filtro para os itens.     |
| **Data de exclusão** | Abre um calendário para que você possa escolher a data inicial exata de exclusão da execução. Esta será a data inicial de criação para o filtro para os itens. |
| **até**              | Abre um calendário para que você possa escolher a data final exata de exclusão da execução. Esta será a data final de exclusão para o filtro para os itens.     |
| **Erro**              | Menu suspenso com as opções para filtrar as execuções de acordo com o status de erro. Pode ser**Sim** ou **Não**.                                     |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

## Campos do relatório

Os resultados são exibidos em listagem conforme abaixo:

* **Profile**.
* **Nome de usuário**: nome de usuário de quem fez a execução.
* **Data de registro.**
* **Data de criação.**
* **Data de exclusão.**
* **Criado**: data da criação da execução.
* **Removido**: data de remoção da criação.
* **Erro**.
* **TTL**: número referente ao intervalo de validade da execução.
* **Ativo**: indica se a execução está ativa ou inativa.
* Na coluna **Ação**, ao clicar no ícone de lupa, você será direcionado para a janela de **Logs de provisionamento**.

### Relatório de logs de provisionamento

| Item                                                                       | Descrição                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Detalhes de depuração da última execução do provisionamento** | Detalha a última execução.                                                                                                                                                                                                                       |
| **Informações do template de criação `<Nome do Template>`**    | Informações sobre o template utilizado na criação da execução. Para maiores detalhes, é possível clicar no link**Detalhes da Operação**. Também é possível clicar no nome do template para obter informações sobre o template. |
| **Informações do modelo de exclusão `<Nome do Template>`**      | Informações sobre o template utilizado na exclusão da execução. É possível clicar no nome do template para obter informações sobre o template.                                                                                             |