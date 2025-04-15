# Referência para variáveis CI/CD

Você pode acessar o relatório **Variáveis de CI/CD** através de **Product Menu > DevOps Secret Manager > CI/CD > Variáveis**. As variáveis que estiveram cadastradas no Segura serão listadas na tela principal.

## Barra superior

| Item                     | Descrição                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Mostrar filtros**     | Identificado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Identificado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Identificado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Identificado pelo ícone de relógio, abre o formulárioAgendar relatório.                      |

Ao clicar em **Mostrar filtros**, representado pelo ícone de lupa, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca.

## Campos de busca

| Item                   | Descrição                                                                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**           | Código de registro da variável na plataforma do Segura.                                                                                                                                                     |
| **Nome da variável** | Nome que a variável foi registrada na plataforma do Segura.                                                                                                                                                  |
| **Valor**             | Valor da variável. Refere-se às informações dinâmicas que são manipuladas durante o processo de integração contínua e entrega contínua para controlar e personalizar o fluxo de trabalho de automação. |
| **Estado**            | Menu suspenso com a opções: *Aprovado manualmente, Aprovado automaticamente, Rejeitado automaticamente, Rejeitado manualmente* e *Pendente de revisão*.                                                              |
| **Aplicação**       | Aplicação a qual a variável em questão está atrelada.                                                                                                                                                         |
| **Sistema**           | Sistema ao qual a variável em questão está atrelada.                                                                                                                                                            |
| **Ambiente**          | Ambiente ao qual a variável em questão está atrelada.                                                                                                                                                           |
| **Criada em**         | Abre um calendário para que você escolha a data inicial para o filtro de registro da variável na plataforma do Segura.                                                                                     |
| **Até**              | Abre um calendário para que você escolha a data exata para o final do filtro de registros de variáveis.                                                                                                         |
| **Ativo**             | Menu suspenso com as opções **Sim** e **Não**. Indica se a variável está ativa na plataforma do Segura.                                                                                                             |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Na listagem do filtro, você ainda encontra a coluna **Ação** com a opção **Detalhes da variável**, representada pela ícone de relatório. Ao clicar nessa opção, se abre a tela de **Detalhes da variável**.

## Janela de Detalhes da variável

| Item             | Descrição                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Variável**   | Nome que a variável foi registrada na plataforma do Segura.                                                                                                                                                  |
| **Aplicação** | Aplicação a qual a variável em questão está atrelada.                                                                                                                                                         |
| **System**      | Sistema ao qual a variável em questão está atrelada.                                                                                                                                                            |
| **Environment** | Ambiente ao qual a variável em questão está atrelada.                                                                                                                                                           |
| **Valor**       | Valor da variável. Refere-se às informações dinâmicas que são manipuladas durante o processo de integração contínua e entrega contínua para controlar e personalizar o fluxo de trabalho de automação. |