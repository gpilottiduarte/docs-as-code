# Referência para grupos de acesso

Os grupos de acesso dentro do senhasegura DevOps Secret Manager estão acessíveis através do caminho **Grid Menu > DevOps Secret Manager > Controle de acesso > Grupos de acesso.**

## Barra superior

| Campo                         | Descrição                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| **Mostrar filtros**     | Representado pelo botão em forma de lupa, esconde ou mostra as opções de filtro.             |
| **Atualizar**           | Representado pela seta em sentido anti-horário, atualiza as informações na tela.             |
| **Exibir ações**      | Representadopelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo grupo**          | Representado pelo símbolo de adição. Abre a janela de cadastro de um novo grupo de acesso.   |
| **Imprimir relatório** | Representadopelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representadopelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representadopelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

Ao clicar em Mostrar filtros, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Campo                                         | Descrição                                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Código**                             | Código do grupo de acesso cadastrado no senhasegura.                                                                        |
| **Nome**                                | Nome do grupo de acesso.                                                                                                     |
| **Usuários podem visualizar secrets?** | Menu suspenso. Filtra de acordo com a permissão dos usuários para visualizar secrets. Pode assumir os valores deSimouNão. |
| **Ativo**                               | Menu suspenso. Filtra de acordo com o estado do grupo de acesso. Pode assumir os valores de **Sim** ou **Não**.                        |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parametros.

Abaixo, temos o campo de listagem que contém todos os grupos, filtrados ou não, que são apresentados com os seguintes campos:

* **Código.**
* **Nome.**
* **Usuários podem visualizar secrets?**.
* **Requer justificativa**: indica se esse grupo de acesso requer uma justificativa do usuário para ser visualizado.
* **Requer aprovação:** indica se esse grupo de acesso requer uma aprovação de um usuário aprovador para ser visualizado.
* **Aprovação em níveis:** indica se esse grupo de acesso requer aprovação em diferentes níveis.
* **Permitir emergencialmente sem aprovação:** indica se o grupo de acesso permite que o usuário tenha permissão emergencial, ignorando a necessidade de aprovação.
* **Ativo.**

## Janela de Cadastro do grupo de acesso

Na coluna **Ação**, ao clicar no ícone de **Atualizar** abre a janela **Cadastro de grupos de acesso**.

| Campo                             | Descrição                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------- |
| **Nome do grupo de acesso** | Nome do grupo cadastrado no senhasegura.                                         |
| **Ativo**                   | Status do grupo de acesso no senhasegura. Por padrão vem marcado como **Sim**. |
| **Descrição**             | Descrição do grupo de acesso.                                                  |

### Aba configurações

Na seção **Configuração de visualização de secrets**:

| Campo                                                                 | Descrição                                                                                                                                                                                   |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Usuários podem visualizar secrets?**                              | caixa de seleção. Permite selecionar se os usuários que fazem parte desse grupo de acesso terão acesso à visualização de secrets.                                                      |
| **Requer justificativa**                                             | caixa de seleção. Permite selecionar se os usuários que fazem parte desse grupo de acesso terão que preencher uma justificativa para a visualização.                                    |
| **Requer aprovação**                                               | caixa de seleção. Permite selecionar se os usuários que fazem parte desse grupo de acesso precisarão de uma aprovação para a visualização.                                            |
| **Aprovações necessárias**                                        | Permite indicar quantas aprovações são necessárias para que o acesso seja liberado.                                                                                                       |
| **Reprovações necessárias para cancelar**                         | Permite indicar quantas reprovações são necessárias para o acesso seja negado.                                                                                                            |
| **Aprovação em níveis**                                           | caixa de seleção. Permite indicar se a aprovação deverá ser em níveis.                                                                                                                  |
| **Obrigatório especificar o código de governança ao justificar?** | Permite indicar se os usuários que fazem parte desse grupo de acesso terão que preencher a justificativa com um código de governança.<br />Pode assumir os valores **Sim** ou **Não**. |
| **Sempre adicionar o gestor do usuário aos aprovadores?**           | Permite indicar se o gestor do usuário será adicionado automaticamente como usuário aprovador para aquela justificativa.<br />Pode assumir os valores **Sim** ou **Não**.               |

### Aba critérios

#### Na seção Aplicação:

| Campo                                        | Descrição                                                                                                                              |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome das aplicações (comma-separeted)** | Nome das aplicações que farão parte do grupo de acesso. Para indicar mais de uma aplicação, insira os nomes separados por vírgula. |
| **Tags das aplicações (comma-separeted)** | Tags das aplicações que farão parte do grupo de acesso. Para indicar um grupo de tags, insira-as separadas por vírgula.              |
| **Line of business**                        | caixa de seleção. Permite indicar as linhas de negócios que as aplicações fazem parte.Permite a seleção de mais de um item.       |
| **Tipo**                                    | caixa de seleção. Tipo de aplicação. Permite a seleção de mais de um item.                                                         |

#### Na seção Autorizações:

| Campo                            | Descrição                                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **sistemas (comma-separeted)**  | Sistemas aos quais o grupo de acesso terá autorização. Para indicar mais de um sistema, insira os nomes separados por vírgula.   |
| **Ambientes (comma-separeted)** | Ambientes aos quais o grupo de acesso terá autorização. Para indicar mais de um ambiente, insira os nomes separados por vírgula. |

#### Na seção Segredos:

| Campo                                      | Descrição                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome das secrets (comma-separated)**    | Segredos que o grupo de acesso terá permissão para acessar. Para indicar mais de um segredo, insira os nomes separados por vírgula.                |
| **Ambientes da secret (comma-separated)** | Ambientes dos segredos que o grupo de acesso terá permissão para acessar. Para indicar mais de um ambiente, insira os nomes separados por vírgula. |
| **Tags das secrets (comma-separated)**    | Tags dos segredos que o grupo de acesso terá permissão para acessar. Para indicar mais de uma tag, insira os nomes separados por vírgula.          |

#### Na seção Usuários:

Esta seção apresenta uma listagem de todos os usuários que fazem parte do grupo de acesso. Estes usuários são apresentados na forma de uma listagem com os seguintes campos:

| Campo                  | Descrição                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| **Ícone de lixeira** | Serve para excluir aquele usuário do grupo de acesso.                    |
| **Cód**              | Código de cadastro do usuário no senhasegura.                           |
| **Nome**              | Nome do usuário no senhasegura.                                          |
| **Nome do usuário**  | Username no senhasegura.                                                  |
| **E-Mail**            | Endereço de e-mail do usuário no senhasegura.                           |
| **Tipo de criação** | Tipo de criação usuário. Pode ser local (...)                          |
| **Departamento**      | Departamento do qual o usuário faz parte.                                |
| **Adicionado por**    | Nome do usuário que adicionou o usuário em questão ao grupo de acesso. |
| **Adicionado em**     | Data e hora em que o usuário foi adicionado ao grupo de acesso.          |

#### Na seção Aprovadores:

Esta seção apresenta uma listagem de todos os usuários que fazem parte do grupo de acesso com papel de usuário aprovador. Estes usuários são apresentados na forma de uma listagem com os seguintes campos:

| Campo                  | Descrição                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Ícone de lixeira** | Serve para remover o usuário do grupo de aprovadores.                                                                          |
| **Cód**              | Código de cadastro do usuário no senhasegura.                                                                                 |
| **Nome do usuário**  | Username no senhasegura.                                                                                                        |
| **E-Mail**            | Endereço de e-mail do usuário no senhasegura.                                                                                 |
| **Tipo de criação** | Tipo de criação usuário. Pode assumir os valoresLocal(...)                                                                   |
| **Departamento**      | Departamento do qual o usuário faz parte.                                                                                      |
| **Adicionado por**    | Nome do usuário que adicionou o usuário em questão ao grupo de acesso.                                                       |
| **Adicionado em**     | Data e hora em que o usuário foi adicionado ao grupo de acesso.                                                                |
| **Nível**            | Menu suspenso. Permite indicar o nível de aprovador que o usuário terá. Pode assumir os valoresNível 1, Nível 2ouNível 3. |

:::(info) (Info)
No rodapé da janela, você pode consultar as informações sobre o grupo de acesso. Para isso, passe o mouse por cima do ícone de olho para mostrar as informações sobre o usuário, data e hora que criou o grupo e o usuário, data e hora que alterou pela última vez às configurações do grupo de acesso.
:::