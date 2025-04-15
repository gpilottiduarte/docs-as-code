# Batch import

Este documento fornece informações sobre a tela do relatório **Importação em lote** que exibe informações sobre o processo de importação em lote.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active directory \> Importação em lote.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Importar** | Botão | Direciona para a tela **Importação em lote** para iniciar o processo de importação em lote. |
| **Ações** | Menu suspenso | Exibe as opções para *Importar*, *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os registros de importação em lote pelo código de identificação da operação no Segura. |
| **Nome do arquivo** | Campo de texto | Filtra os registros de importação em lote pelo nome do arquivo que foi utilizado no processo. |
| **Usuário** | Campo de texto | Filtra os registros de importação em lote pelo nome de usuário que realizou o upload do arquivo de importação em lote. |
| **Período de importação** | Campo de data | Filtra os registros pelo período em que foi feito o upload do arquivo de importação em lote. |

## Campos do relatório

* **Código**.  
* **Nome do arquivo.**  
* **Usuário**  
* **Data de criação**: exibe a data de criação \- quando foi feito o upload do arquivo com o registros \- da operação em lote.  
* **Início da execução**: exibe a data em que o processo foi iniciado.  
* **Fim da execução**: exibe a data em que o processo foi encerrado.  
* **Tempo**: exibe o tempo total que o processo de importação em lote demorou para ser concluído.  
* **Status**: exibe o status do processo de importação em lote. Os valores são: *Aguardando*, *Finalizado* e *Erro ao processar*.  
* **Andamento**: barra de status que exibe o andamento do processo de importação em lote.  
* **Erro**: indica se ocorreu ou não erro. Os valores são: **Sim** ou **Não**.  
* **Ações:**  
  * **Detalhes do processo**: direciona para a tela **Credenciais do dispositivo** com informações detalhadas sobre o processo de importação em lote.  
  * **Download**: faz download do arquivo utilizado na importação em lote.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Credenciais do dispositivo

Nesta tela você encontra as informações sobre o processo de importação em lote.

### Seção Identificação

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Código identificador do processo de importação em lote. |
| **Arquivo** | Campo de texto | Nome do arquivo que foi usado no processo de importação em lote. |

### Seção Detalhes da Solicitação

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Data da solicitação** | Campo de texto | Data de envio (upload) do arquivo de importação em lote. Exibida no formato `DD/MM/AAAA HH:MM`. |
| **Solicitante** | Campo de texto | Nome do usuário que enviou o arquivo de importação em lote. |
| **Locale** | Campo de texto | O idioma (locale) utilizado durante a importação do arquivo em lote está relacionado ao idioma configurado no sistema do usuário no momento da importação, e não ao idioma do arquivo. Por exemplo: se o usuário possui uma planilha em inglês, mas seu sistema está configurado em português, o locale será definido como PT (português). |

### Seção Mensagem e Status

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Mensagem** | Campo de texto | Mensagem do Segura sobre o processo de importação em lote. |
| **Status** | Campo de texto | Status do processamento do arquivo de importação em lote. |

### Seção Linhas Processadas

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Linhas** | Campo de texto | Quantidade de linhas contidas no arquivo de importação de lote. |
| **Grupo AD** | Campo de texto | Quantidade de Grupos AD contidos no arquivo de importação em lote. |
| **Linhas com erro** | Campo de texto | Quantidade de linhas no arquivo de importação em lote em que ocorreu algum tipo de erro. |

### Seção Andamento do Processo

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Início** | Campo de texto | Data de início do processo de importação em lote. Exibida no formato `DD/MM/AAAA HH:MM`. |
| **Final** | Campo de texto | Data de fim do processo de importação em lote. Exibida no formato `DD/MM/AAAA HH:MM`. |
| **Andamento** | Campo de texto | Percentual do andamento do processo de importação em lote. |
| **Erro** | Campo de texto | Indicador de erro no processo de importação em lote. As possibilidades são **Sim** (ocorreu erro) ou **Não** (não ocorreu erro). |