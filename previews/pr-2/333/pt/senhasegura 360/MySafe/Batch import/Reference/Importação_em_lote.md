# Importação em lote

Neste documento, você vai encontrar todas as informações sobre a tela **Importação em lote** do **MySafe** que exibe um relatório com as importações de senhas e anotações realizadas.

### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados e selecione **MySafe**.
2. No menu lateral, selecione **Importação em lote**.


***

## Campos de busca

|**Item**|**Descrição**|
|---|---|
**Código**| Campo que filtra as importações pelo seu código único de identificação.
**Nome do arquivo**|Campo que filtra as importações pelo nome do arquivo que foi importado.
**Usuário**| Campo que filtra as importações pelo nome do usuário que fez a importação.
**Período de importação**|Campo que filtra as importações pelo período em que foram realizadas. Formato DD/MM/AAAA. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário.
**até**|Campo que filtra as importações pelo período em que foram realizadas. Formato DD/MM/AAAA. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário.

## Campos do relatório

* **Código**.
* **Nome do arquivo**.
* **Usuário**.
* **Tipo**: coluna que exibe a origem da importação. As opções possíveis são *Last Pass, Keeper, Senha* e *Anotação*.
* **Data de criação**.
* **Início da execução**: coluna que exibe o início da importação.
* **Fim da execução**: coluna que exibe o término da importação.
* **Status**: coluna que exibe o status da importação. As opções possíveis são *Aguardando*,  *Finalizado* e *Erro ao processar*.
* **Andamento**: coluna que exibe uma barra que indica o andamento da importação.
* **Erro**: coluna que informa a presença ou ausência de erro no processo de importação. As opções possíveis são **Sim** e **Não**.
* **Ação**: nessa coluna, você acessa:
    * **Detalhes do processo**: representado pelo ícone de lista, abre a tela **[Detalhes da importação](/v3-33/docs/pt/mysafe-import-process-details#tela-detalhes-da-importação)** que exibe um registro com todos os detalhes da importação selecionada.
    * **Download**: representado pelo ícone de download, baixa o arquivo importado.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

### Tela Detalhes da importação

Nesta seção, você vai encontrar todas as informações sobre a tela **Detalhes da importação** que exibe um registro com todos os detalhes da importação selecionada.

|**Item**|**Descrição**|
|---|---|
**Código**.
**Arquivo**|Campo que exibe o nome do arquivo que foi importado.
**Data da solicitação**| Campo que exibe a data e hora em que a importação foi feita.
**Solicitante**| Campo que exibe o nome do usuário que fez a importação.
**Tipo**|Campo que exibe a origem da importação. As opções possíveis são *Last Pass, Keeper, Senha* e *Anotação*.
**Locale**| Campo que exibe o Idioma configurado no senhasegura no momento da importação.
**Mensagem**|Campo que exibe uma ensagem com informações sobre o status do arquivo. Em caso de erro, ele estará descrito neste campo.
**Status**|Campo que exibe o status do arquivo importado. As opções possíveis são *Aguardando*,  *Finalizado* e *Erro ao processar*.
**Linhas**|Campo que exibe a quantidade de linhas existentes no arquivo.
**Usuários**|Campo que exibe a quantidade de usuários existentes no arquivo.
**Linhas com erro**|Campo que exibe a quantidade de linhas em que ocorreu algum erro durante o processamento.
**Início**| Campo que exibe a data e hora inicial do processamento do arquivo.
**Final**|Campo que exibe data e hora final do processamento do arquivo.
**Andamento**|Campo que exibe a porcentagem de conclusão da importação do arquivo.
**Erro**| Campo que informa a presença ou ausência de erro no processamento do arquivo. As opções possíveis são **Sim** e **Não**.
**Baixar arquivo de log**|Botão que realiza o download do arquivo de log com informações detalhadas de cada linha existente no arquivo que foi importado.
