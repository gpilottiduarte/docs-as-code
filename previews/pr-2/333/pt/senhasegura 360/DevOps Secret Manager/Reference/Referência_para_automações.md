# Referência para automações

As automações dentro do senhasegura **DevOps Secret Manager** estão acessíveis através do caminho **Grid Menu > DevOps Secret Manager > Automações > Automações.**

Na tela, você encontrará as seguintes informações:

| Item                      | Descrição                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mostrar filtros** | Representado pelo botão em forma de lupa, esconde ou mostra as opções de filtro.                                                                       |
| **Atualizar**       | Representado pela seta em sentido anti-horário, atualiza as informações na tela.                                                                       |
| **Exibir ações**  | Representado pelos três pontos verticais, abre um menu suspenso com quatro opções: *+New, Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                   | Descrição                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**           | Código da aplicação no senhasegura.                                                                                               |
| **Nome**              | Nome da aplicação.                                                                                                                 |
| **Tags**              | Tags cadastradas no senhasegura para aquela aplicação.                                                                             |
| **Aplicação**       | Aplicações às quais a automação se destina.                                                                                     |
| **Secret**            | Secret cadastrado no senhasegura.                                                                                                    |
| **Tag**               | Tags cadastradas na automação.                                                                                                     |
| **Data de criação** | Abre um calendário para que se escolha o intervalo de tempos da busca da automação. Inicie pela data de criação da automação. |
| **até**              | Abre um calendário para que se escolha a data final do intervalo de cadastro da automação.                                        |
| **Ativo**             | Menu suspenso para filtrar de acordo com o estado da automação. Pode ser **Sim** ou **Não**.                                              |

Além dessas opções, você tem dois botões:

* **Filtrar**: aplica os parâmetros que foram passados nos campos.
* **Limpar**: limpa todos os parâmetros.

O relatório é mostrado logo abaixo, em formato de lista, contendo os seguintes campos:

* **Código.**
* **Nome.**
* **Tags.**
* **Aplicações.**
* **Secrets.**
* **Data de criação.**
* **Última execução:** exibe a data e a hora, no formato `DD/MM/AAAA HH:MM` da última execução da automação.
* **Ativo.**

## Janela de atualização de automação

Na coluna **Ação**, ao clicar no ícone representado pelos três pontos verticais, você tem a opção de atualizar ou excluir a automação. A opção de **Atualização** abre a janela Automação.

### Aba Informação

| Item                  | Descrição                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| **Nome**        | Nome da automação.                                                                  |
| **Ativo**       | Botão de opção que pode ser **Sim** ou **Não**. Indica o estado da automação. |
| **Descrição** | Descrição da automação.                                                           |
| **Tags**        | Tags da automação. Digite as tags e as separe com vírgula.                         |

### Aba Gatilho

| Item                    | Descrição                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gatilho +**     | Abre o modal **Gatilhos**. Serve para adicionar gatilhos a automação, ou seja, quando ocorrer este evento, a execução será efetuada. |
| **Aplicação +** | Abre o modal **Aplicações**. Serve para informar quais aplicações serão afetadas quando o gatilho for iniciado.                      |
| **Secret +**           | Abre o modal **Segredos**. Serve para informar quais segredos serão afetados quando o gatilho for iniciado                                   |

Você pode clicar no sinal de soma ao lado de cada palavra. Essa ação abrirá o modal correspondente. Cada modal tem campos diferentes de busca, conforme abaixo.

### Gatilhos

| Item      | Descrição                  |
| --------- | ---------------------------- |
| **Nome** | Filtra pelo nome do gatilho. |

### Aplicação

| Item          | Descrição              |
| ------------- | ------------------------ |
| **Nome**     | Nome da aplicação.     |
| **Sistema**  | Sistema da aplicação.  |
| **Ambiente** | Ambiente da aplicação. |

### Segredos

| Item            | Descrição            |
| --------------- | ---------------------- |
| **Nome**       | Nome do segredo.       |
| **Identidade** | Identidade do segredo. |
| **Engine**     | Engine do segredo.     |

Além dessas opções, você tem dois botões:

* **Filtrar**: aplica os parâmetros que foram passados nos campos. e
* **Limpar**: limpa todos os parâmetros.

Abaixo, temos o campo de listagem que contém todos os segredos, filtrados ou não, que são apresentados com os seguintes campos:

* **Checkbox marcada**: ao clicar na checkbox marcada você irá selecionar todos os campos listados.
* **Checkbox desmarcada:** ao clicar na checkbox desmarcada você irá apagar a seleção atual, seja qual for.

Do lado esquerdo, você entrará uma checkbox. Ao marcar essa checkbox você estará selecionando este item.

Ao final de cada modal, você tem dois botões:

* **Adicionar**: adiciona os gatilhos, aplicações ou segredos selecionados.
* **Cancelar**: cancela a operação.

### Aba Ação

Na seção **Execute este template**:

| Item                        | Descrição                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| **Plugin**                 | Menu suspenso que exibe os plugins disponíveis no senhasegura.                    |
| **Template de ativação** | Menu suspenso que apresenta os templates de ativação cadastrados no senhasegura. |

Na seção **… Nestes dispositivos**:

| Item                    | Descrição                                                                                                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Dispositivo +** | Ao clicar no sinal de adição, adiciona um novo menu suspenso abaixo da palavra **Dispositivo**.                                                                                                                               |
| **Dispositivo**   | Menu suspenso que é adicionado quando você clica no sinal de adição ao lado da palavra **Dispositivo**. Exibe uma listagem com os dispositivos disponíveis no senhasegura.                                                 |
| **Credencial**    | Menu suspenso que é adicionado quando você clica no sinal de adição ao lado da palavra **Dispositivo**. Exibe a listagem com as credenciais disponíveis para conexão de acordo com o dispositivo escolhido no campo anterior. |

## Janela de visualização da automação

Na coluna **Ação**, ao clicar na opção **Detalhes**, representada pelo ícone da lupa, você tem a opção de visualizar os detalhes da automação. Essa ação abrirá a janela de visualização da automação.

| Item                          | Descrição                                        |
| ----------------------------- | -------------------------------------------------- |
| **Código**                  | Código da automação.                            |
| **Nome**                     | Nome da automação.                               |
| **Data de criação**        | Data de criação da automação.                  |
| **Última execução**       | Data da última execução da automação.         |
| **Ativo**                    | Estado da automação.                             |
| **Descrição**              | Descrição da automação.                        |
| **Tags**                     | Tags relacionadas à automação.                  |
| **Gatilhos**                 | Gatilhos atrelados à automação.                 |
| **Aplicações**             | Aplicações atreladas à automação.             |
| **Segredos**                 | Segredos atrelados à automação.                 |
| **Plugin**                   | Plugin utilizado para executar a automação.      |
| **Template**                 | Template utilizada para executar a automação.    |
| **Dispositivo (credencial)** | Dispositivo e credencial atrelados à automação. |