# Importação em lote

Este documento fornece informações sobre a tela do relatório **Importação em lote** de **Dispositivos,** que exibe as importações de dispositivos e credenciais realizadas, e possibilita realizar nova importação, visualizar e baixar as importações realizadas.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **PAM Core.**  
2. No menu lateral, selecione **Dispositivos > Todos Dispositivos.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Dispositivos**.  
2. No menu lateral, selecione **Importação em lote.**

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Importar** | Botão | Direciona para a tela de cadastro **Importação em lote.** |
| **Ações** | Menu suspenso | Exibe as opções *Importação em lote, Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as importações pelo seu código de identificação dentro do Segura. |
| **Nome do arquivo** | Campo de texto | Filtra as importações pelo nome do arquivo que foi importado. |
| **Usuário** | Campo de texto | Filtra as importações pelo nome do usuário que fez a importação. |
| **Período de importação** | Seletor de data | Filtra as importações pelo período em que foram realizadas. |

## Campos do relatório

* **Código**.  
* **Nome do arquivo**.  
* **Usuário**.  
* **Data de criação**.  
* **Início da execução**: exibe o início da importação.  
* **Fim da execução**: exibe o término da importação.  
* **Tempo:** exibe o tempo de processamento do arquivo.  
* **Status**: exibe o status da importação. As opções são *Aguardando*, *Finalizado* e *Erro ao processar*.  
* **Andamento**: barra de progresso que indica o andamento da importação.  
* **Erro**: informa a presença ou ausência de erro no processo de importação. As opções são **Sim** e **Não**.  
* **Ações**:  
  * **Detalhes do processo**: abre a tela **Detalhes do processo de importação** que exibe um registro com todos os detalhes da importação selecionada.  
  * **Download**: baixa o arquivo importado.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

---
### Tela de cadastro Importação em lote

Esta seção fornece informações sobre a tela de cadastro **Importação em lote** que possibilita a importação de dispositivos e credenciais em lote.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Planilha de dispositivos*** | Campo de upload | Sim | Arquivo de importação no formato `.csv` a ser carregado.  |
| **Arquivo de modelo** | Botão | Não | Baixa um arquivo de modelo de importação. |

:::(warning) (**Atenção**)  
Leia as instruções sobre como os campos devem ser preenchidos na planilha, as instruções podem ser encontradas no arquivo de modelo. Evite reutilizar planilhas e sempre utilize o modelo mais recente.  
:::

---
### Tela Detalhes do processo de importação

Esta seção fornece informações sobre a tela **Detalhes do processo de importação** que exibe um registro com todos os detalhes da importação selecionada.

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Código de identificação do arquivo importado. |
| **Arquivo** | Nome do arquivo importado. |
| **Data da solicitação** | Data e hora em que a importação foi feita. |
| **Solicitante** | Nome do usuário que fez a importação. |
| **Locale** | Localidade do usuário que fez a importação. |
| **Mensagem** | Exibe uma mensagem com informações sobre o status da importação. Em caso de erro, ele estará descrito neste campo. |
| **Status** | Status do arquivo importado. As opções são *Processando*, *Finalizado* e *Erro ao processar*. |
| **Linhas** | Quantidade de linhas existentes na planilha de importação do arquivo. |
| **Dispositivos** | Quantidade de dispositivos existentes no arquivo. |
| **Credenciais** | Quantidade de credenciais existentes no arquivo. |
| **Linhas com erro** | Quantidade de linhas da planilha que apresentaram algum erro durante o processamento. |
| **Início** | Data e hora inicial do processamento da importação. |
| **Final** | Data e hora final do processamento da importação. |
| **Andamento** | Porcentagem de conclusão da importação. |
| **Erro** | Indicação de erro no processamento da importação. As opções são **Sim** e **Não**. |

