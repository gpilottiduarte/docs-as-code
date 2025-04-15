# Importação em lote

Este documento fornece informações sobre a tela do relatório **Importação em lote**, que exibe as operações de importação em lote de usuários.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Importação em lote.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Importar** | Botão | Direciona para a tela **Adicionar arquivo**. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código da operação de importação em lote no Segura. |
| **Nome do arquivo** | Campo de texto | Filtra pelo nome do arquivo importado. |
| **Usuário** | Campo de texto | Filtra pelo nome do usuário que realizou a importação em lote. |
| **Período de importação** | Campo de data | Filtra os registros pelo período em que foram importados. |

## Campos do relatório

* **Código.**  
* **Nome do arquivo.**  
* **Usuário.**  
* **Data criação:** data de criação da importação em lote.  
* **Início da execução:** data de início da execução da importação em lote.  
* **Fim da execução:** data de fim da execução da importação em lote.  
* **Tempo:** duração da execução.  
* **Situação:** status da execução.  
* **Erro:** ocorrência de erro na execução.  
* **Ações:**  
  * **Detalhes do processo:** abre a tela **Processamento da importação em lote.**  
  * **Download:** baixa o arquivo de importação em lote.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Adicionar arquivo

Essa seção fornece informações sobre a tela **Adicionar arquivo.**

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Planilha de usuários** | Campo de upload | Sim | Arquivo de importação no formato `.csv` a ser carregado. |
| **Arquivo de modelo** | Botão | Não | Baixa uma planilha de modelo de importação. |

## Detalhes do processo

Essa seção fornece informações sobre a tela **Processamento da importação em lote**.

* **Código**: código de identificação da operação de importação em lote no Segura.  
* **Arquivo**: nome do arquivo utilizado na operação de importação em lote.  
* **Andamento**: porcentagem de conclusão da importação.  
* **Data da solicitação**: data da solicitação da operação de importação em lote, no formato `DD/MM/AA HH:MM`.  
* **Solicitante**: nome do usuário que solicitou a operação em lote.  
* **Locale**: idioma do arquivo de importação em lote.  
* **Situação**: situação atual da solicitação de importação em lote.
