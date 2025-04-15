# Importação em lote no LDAP/AD

Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações.**  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Importação em lote.**

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Importar** | Abre a janela **Importação em lote** para realizar o upload do arquivo de importação em lote. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Código da operação de importação em lote no senhasegura. |
| **Nome do arquivo** | Nome do arquivo que foi feito o upload. |
| **Usuário** | Usuário que realizou o upload do arquivo de importação em lote. |
| **Período de importação** | Abre um calendário para que você possa selecionar a data inicial do período de tempo em que os resultados serão filtrados. |
| **até** | Abre um calendário para que você possa selecionar a data final do período de tempo em que os resultados serão filtrados.. |

## Campos do relatório

Na listagem de importações, você tem os seguintes campos:

* **Código**.  
* **Nome do arquivo.**  
* **Usuário**  
* **Data de criação**: exibe a data de criação \- quando foi feito o upload do arquivo com o registros \- da operação em lote.  
* **Início da execução**: exibe a data em que a execução foi iniciada.  
* **Fim da execução**: exibe a data em que a execução foi encerrada.  
* **Tempo**: exibe o tempo total que a execução demorou para ser concluída.  
* **Status**: exibe o status da execução. Pode assumir os valores: **Aguardando**, **Finalizado** e **Erro ao processar**.  
* **Andamento**: barra de status que exibe o andamento da execução.  
* **Erro**: indica se ocorreu ou não erro. Pode ser **Sim** ou **Não**.  
* Na coluna **Ação**, você tem duas opções:  
  * **Detalhes do processo**: representado pelo ícone do arquivo, abre a janela de **Detalhes do processo de importação** com informações detalhadas sobre todo o processo de importação em lote.  
  * **Download**: representado pelo ícone da seta voltada para baixo, faz download o arquivo utilizado na importação em lote.

## Janela Detalhes do processo de importação

Ao clicar em **Detalhes do processo**, na coluna **Ação**, a janela de **Detalhes da importação em lote** será aberta. Ela contém os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Código** | Exibe o código do processo de importação no senhasegura. |
| **Arquivo** | Exibe o nome do arquivo utilizado no processo de importação em lote. |
| **Data da solicitação** | Exibe a data em que o arquivo de importação em lote foi carregado para o senhasegura. |
| **Solicitante** | Exibe o nome do usuário solicitante. |
| **Locale** | Exibe o código `locale` em que a planilha foi enviada. **Nota**: `locale` em um sistema de informação refere-se ao conjunto de configurações que definem as preferências regionais. |
| **Mensagem** | Exibe a mensagem de erro ou sucesso em relação ao processo de importação em lote. |
| **Status** | Exibe o status do processo de importação em lote. |
| **Linhas** | Exibe quantas linhas o arquivo tem. |
| **Grupo AD** | Quantidade de linhas que foram importadas com sucesso. |
| **Linhas com erro** | Exibe a quantidade de linhas com erro dentro do arquivo. |
| **Início** | Exibe a data e a hora inicial da operação de importação em lote. Este campo será exibido no formato `DD/MM/AA HH:MM.` |
| **Final** | Exibe a data e a hora final da operação de importação em lote. Este campo será exibido no formato `DD/MM/AA HH:MM.` |
| **Andamento** | Exibe, em formato de porcentagem, o andamento do processo de importação em lote. |
| **Erro** | Indica se ocorreu algum erro no processo de importação em lote. |

## Janela Importação em lote

Ao clicar em **Exibir Ações \> Importar**, uma janela para realizar o upload do arquivo de configuração para importação em lote será aberta. Essa janela contém os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Planilha de informações** | Label indicando que se trata da planilha de informações. |
| **Escolher arquivo** | Botão para realizar o upload do arquivo de importação em lote. Nota: o texto do botão será mostrado de acordo com o idioma do sistema operacional do usuário, sem nenhuma relação com o idioma da instância do senhasegura. |
| **Arquivo de modelo** | Botão para realizar o download do modelo para o arquivo de importação. **Nota**: o idioma da planilha será o mesmo idioma do sistema do usuário. |
| **Importar dados** | Botão para realizar o upload e iniciar o processo de importação em lote. |