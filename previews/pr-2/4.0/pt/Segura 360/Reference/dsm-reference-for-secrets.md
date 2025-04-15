# Referência para segredos

Você pode acessar o relatório de listagem de segredos através do caminho **Product Menu > DevOps Secret Manager > Gestão de segredos > Segredos.**

:::(warning) (Atenção)
Para visualizar os segredos, você precisa fazer parte de um grupo de acesso que tenha permissão para gerenciar segredos, caso contrário, você poderá registrar um segredo não poderá visualizá-lo nos filtros e nos dashboards.
:::

Na tela **Segredos**, você encontrará as seguintes informações:

## Barra superior

| Item                          | Descrição                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| **Mostrar filtros**     | Representado pelo botão em forma de lupa, esconde ou mostra as opções de filtro.          |
| **Atualizar**           | Representado pela seta em sentido anti-horário, atualiza as informações na tela.          |
| **Exibir ações**      | Representado pelos três pontos verticais, abre um menu suspenso com três opções.         |
| **Novo segredo**        | Abre a janela de registro para um novo segredo.                                              |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                              |
| **Agendar relatório**  | Identificado pelo ícone de relógio, abre o formulário para agendar relatório.            |

Ao clicar em **Mostrar filtros**, representado pelo ícone de lupa, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                          | Descrição                                                                                                                                                                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Nome**                | Nome do segredo cadastrado.                                                                                                                                                                                                                                                                            |
| **Engine**              | Menu suspenso com a opção para filtrar os resultados de acordo com a **Engine** utilizada no segredo. As opções são *Ansible, Generic, GitLab* e *Kubernets*.                                                                                                                            |
| **Ambiente**            | Menu suspenso com os ambientes cadastrados no Segura.                                                                                                                                                                                                                                             |
| **Status**              | Menu suspeso com as opções **Ativo** e **Inativo**. Indica o estado do segredo no Segura.                                                                                                                                                                                            |
| **Erro**                | Menu suspenso com as opções **Sim** e **Não**. Indica se o segredo contém ou não algum tipo de erro. Por padrão vem selecionada a opção **Todos**. Note que a opção **Todos** só está disponível caso você não selecione **Sim** ou **Não** no menu suspenso. |
| **Identidade**          | Nome da identidade cadastrada no Segura.                                                                                                                                                                                                                                                          |
| **Versão**             | Pesquisar todos os segredos que possuem esta versão.                                                                                                                                                                                                                                                  |
| **Data de expiração** | Abre um calendário para que seja escolhida a data inicial do intervalo que será usado para o filtro por data de expiração do segredo.                                                                                                                                                              |
| **até**                | Abre um calendário para que seja escolhida a data final do intervalo que será usado para o filtro por data de expiração do segredo.                                                                                                                                                                |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Na listagem de segredos, você ainda tem os seguintes campos:

* **Código**: código de cadastro do segredo no Segura.
* **Nome**.
* **Engine**.
* **Ambiente**.
* **Tags**: tags cadastradas para o segredo.
* **Status**.
* **Erro**.
* **Identidade**.
* **Versão**.
* **Data de expiração**.
* A coluna **Ação** contém as opções de **Gerenciamento de segredos**.