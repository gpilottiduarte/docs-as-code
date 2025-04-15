# Referência para minhas aprovações

Os usuários aprovadores podem visualizar um relatório com as suas aprovações. Esta tela mostra as aprovações do usuário, contendo informações tais como estado, solicitante, motivo e validade entre outras. Você pode acessar o conteúdo das suas aprovações através do caminho **Grid Menu > DevOps Secret Manager > Controle de acesso > Minhas aprovações.**

## Barra superior

| Campo                    | Descrição                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Identificado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Identificado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Identificado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Identificado pelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Campo                      | Descrição                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**               | Filtra pelo código da solicitação no Segura.                                                                                                                                 |
| **Operação**            | Filtra pelo nome da operação que foi solicitada.                                                                                                                                   |
| **Grupo de acesso**       | Filtra pelo grupo de acesso ao qual o solicitante faz parte.                                                                                                                         |
| **Solicitante**           | Filtra pelo nome do solicitante.                                                                                                                                                     |
| **Data de solicitação** | Abre um calendário para que você escolha a data inicial para o filtro. Assim, você irá filtrar todas as solicitações que foram iniciadas a partir desta data.                  |
| **até**                  | Abre um calendário para que você escolha a data final para o filtro. Assim, você irá filtrar todas as solicitações que foram finalizadas até esta data.                       |
| **Estado**                | Menu suspenso. Filtra de acordo com o estado da solicitação. As opções são: *Pendente, Aprovada, Reprovada, Expirada* e *Cancelada*.                                          |
| **Aprovador**             | Filtra pelo nome do usuário que pode analisar a solicitação.Nota: nesta tela, são exibidas apenas as aprovações que o usuário atualmente logado tem permissão para analisar. |
| **Governança**           | Filtra pelo código de governança da solicitação.                                                                                                                                 |
| **Motivo**                | Filtra pelo motivo da solicitação.                                                                                                                                                 |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Abaixo, temos o campo de listagem que contém todos os segredos, filtrados ou não, que são apresentados com os seguintes campos:

* **Código.**
* **Operação.**
* **Grupo de acesso.**
* **Solicitante.**
* **Solicitada em.**
* **Estado.**
* **Validade.**
* **Aprovador.**
* **Governança.**
* **Motivo.**
* Na coluna **Ação** você tem três opções:
  * **Aprovar**: representada pelo ícone de check, aprova a solicitação.
  * **Ícone dos três pontos verticais**: ao clicar no ícone, você abre um menu suspenso com duas opções:
    * **Reprovar**: representado pelo ícone de X, reprova a solicitação.
    * **Detalhes**: representado pelo ícone de lupa, abre a janela **Detalhes da solicitação**.

## Janela de detalhes da solicitação

Ao clicar no ícone de lupa, você é direcionado para a janela de **Detalhes da solicitação**, onde você poderá analisar a solicitação. As informações são mostradas conforme abaixo:

### Seção detalhes da solicitação

| Campo                     | Descrição                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Solicitante**     | Indica o nome do solicitante, o tipo de solicitação que foi feita e o estado atual da solicitação.               |
| **Código**         | Indica o código da solicitação.                                                                                   |
| **Grupo de acesso** | Indica o grupo de acesso ao qual o solicitante faz parte.                                                            |
| **Solicitado em**   | Indica a data e hora em que a solicitação foi feita. Este campo será mostrado no formato `DD:MM:AAAA HH:MM:SS`. |
| **Validade**        | Indica a data e hora de validade da solicitação. Este campo será mostrado no formato `DD:MM:AAAA HH:MM:SS`.     |
| **Aprovações**    | Indica o número de aprovações da solicitação.                                                                   |
| **Reprovações**   | Indica o número de reprovações da solicitação.                                                                  |

### Seção respostas

Na seção respostas, você tem um resumo das respostas dadas pelos usuários aprovadores.

| Campo                   | Descrição                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Aprovador**     | Indica o nome do usuário e o username do usuário aprovador.                                                       |
| **Nível**        | Indica o nível do aprovador. Pode ser de*Nível 1, Nível 2 ou Nível 3.*                                        |
| **Resposta**      | Resposta dada pelo usuário aprovador à solicitação. As opções são: *Aprovado, Reprovado e Não respondida.* |
| **Data**          | Data da resposta do usuário aprovador à solicitação.                                                            |
| **Justificativa** | Justificativa dada pelo usuário aprovador à solicitação.                                                        |

:::(info) (Info)
Em casos onde a aprovações por níveis estiver sendo utilizada, perceba que, caso a configuração estiver definida para uma aprovação, isso implica que é necessária uma aprovação por nível. Por exemplo, se um grupo estiver registrado até o nível 2, será necessária uma aprovação do nível 1 e outra do nível 2. Da mesma forma, se o grupo estiver registrado até o nível 3, será necessário obter aprovações dos níveis 1, 2 e 3. Cada nível de registro requer uma aprovação correspondente.
:::

### Seção justificativa

| Campo                       | Descrição                              |
| --------------------------- | ---------------------------------------- |
| **Código de governança** | Código de governança da solicitação. |
| **Motivo**                 | Motivo da solicitação.                 |

Abaixo destes campos, você também analisa o texto de justificativa que o solicitante enviou junto à solicitação.

### Seção detalhes da solicitação

Indica textualmente qual foi a solicitação feita.

:::(info) (Info)
Caso a solicitação esteja pendente, é possível aprovar ou reprovar essa solicitação. Para isso, no canto inferior direito, selecione **Aprovar** ou **Reprovar**, representados pelos botões verde e vermelho, respectivamente.
:::