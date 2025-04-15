# Importação em lote

Este documento fornece informações sobre a tela do relatório **Importação em lote** do **MySafe** que exibe as importações de senhas e anotações realizadas e possibilita realizar nova importação, visualizar e baixar as importações realizadas.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Importação em lote**.  
   

---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Importar** | Botão | Direciona para a tela **Adicionar nova importação em lote.** |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |


## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as importações pelo seu código de identificação no Segura. |
| **Nome do arquivo** | Campo de texto | Filtra as importações pelo nome do arquivo que foi importado. |
| **Usuário** | Campo de texto | Filtra as importações pelo nome do usuário que fez a importação. |
| **Período de importação** | Seletor de data | Filtra as importações pelo período em que foram realizadas. |


## Campos do relatório

* **Código**.  
* **Nome do arquivo**.  
* **Usuário**.  
* **Tipo**: exibe a origem da importação. As opções possíveis são *Last Pass, Keeper, Senha* e *Anotação*.  
* **Data de criação**: exibe a data e hora de solicitação da importação.  
* **Início da execução**: exibe a data e hora do início da importação.  
* **Fim da execução**: exibe a data e hora do término da importação.  
* **Tempo**: duração do processo de importação.  
* **Status**: exibe o status da importação. As opções são *Aguardando*, *Finalizado* e *Erro ao processar*.  
* **Andamento**: barra de progresso que indica o andamento da importação.  
* **Erro**: informa a presença ou ausência de erro no processo de importação. As opções são **Sim** e **Não**.  
* **Ações**:  
  * **Detalhes do processo**: abre a tela **Detalhes da importação** que exibe um registro com todos os detalhes da importação selecionada.  
  * **Download**: baixa o arquivo importado.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

### Tela Detalhes do processo

Esta tela exibe um registro com todos os detalhes da importação selecionada.

| Item | Descrição |
| :---- | :---- |
| **Código** | Código de identificação do arquivo importado. |
| **Arquivo** | Nome do arquivo importado. |
| **Data da solicitação** | Data e hora em que a importação foi solicitada. |
| **Solicitante** | Nome do usuário que fez a importação. |
| **Tipo** | Origem da importação. As opções são *LastPass, Keeper, Senha* e *Anotação*. |
| **Mensagem** | Mensagem com informações sobre o status da importação. Em caso de erro, ele estará descrito neste campo. |
| **Status** | Status da solicitação de importação. As opções são *Aguardando*, *Finalizado* e *Erro ao processar*. |
| **Linhas** | Quantidade de linhas existentes na planilha de importação do arquivo. |
| **Usuários** | Quantidade de nomes de usuários existentes no arquivo. |
| **Linhas com erro** | Quantidade de linhas da planilha que apresentaram algum erro durante o processamento. |
| **Início** | Data e hora inicial do processamento da importação. |
| **Final** | Data e hora final do processamento da importação. |
| **Andamento** | Porcentagem de conclusão da importação. |
| **Erro** | Indicação de erro no processamento da importação. As opções são **Sim** ou **Não**. |
| **Baixar arquivo de log** | Botão para baixar o arquivo de log com informações detalhadas de cada linha existente no arquivo que foi importado. Disponível para importações com status **Finalizado**. |

### Tela Adicionar nova importação em lote

A tela **Adicionar nova importação em lote** possibilita a importação de senhas e anotações em lote para o **MySafe** seja a partir de gerenciadores de senha ou utilizando o arquivo de modelo fornecido.

#### Telas Adicionar nova importação em lote - Senha e Anotação

Após clicar em **Senha** ou **Anotação**, a tela exibe:

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Arquivo\*** | Campo de upload | Sim | Arquivo de importação no formato `.csv` a ser carregado.  |
| **Arquivo de modelo** | Botão | Não | Baixa um arquivo de modelo de importação. |

#### Telas Adicionar nova importação em lote - LastPass e Keeper

Após clicar em **LastPass** ou **Keeper**, a tela exibe:

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Arquivo\*** | Campo de upload | Sim | Arquivo baixado do LastPass ou Keeper no formato  `.csv` ou `.json` que será importado para o **MySafe.** |