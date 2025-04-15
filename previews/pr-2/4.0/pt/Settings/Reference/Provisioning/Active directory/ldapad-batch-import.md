# Importação em lote no LDAP/AD

Este documento fornece informações sobre a tela do relatório **Importação em lote** que exibe informações sobre a importação em lote de servidores LDAP/AD.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active directory \> Importação em lote.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Importar*, *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Código de identificação da operação de importação em lote no Segura. |
| **Nome do arquivo** | Campo de texto | Nome do arquivo que foi feito o upload. |
| **Usuário** | Campo de texto | Usuário que realizou o upload do arquivo de importação em lote. |
| **Período de importação** | Campo de data | Período de filtro para a operação de importação. |

## Campos do relatório
* **Código**.  
* **Nome do arquivo.**  
* **Usuário**  
* **Data de criação**: exibe a data de criação \- quando foi feito o upload do arquivo com o registros \- da operação em lote.  
* **Início da execução**: exibe a data em que a execução foi iniciada.  
* **Fim da execução**: exibe a data em que a execução foi encerrada.  
* **Tempo**: exibe o tempo total que a execução demorou para ser concluída.  
* **Status**: exibe o status da execução. Pode assumir os valores: *Aguardando*, *Finalizado* e *Erro ao processar*.  
* **Andamento**: barra de status que exibe o andamento da execução.  
* **Erro**: indica se ocorreu ou não erro. Pode ser **Sim** ou **Não**.  
* **Ações:**  
  * **Detalhes do processo**: abre a janela de **Detalhes do processo de importação** com informações detalhadas sobre todo o processo de importação em lote.  
  * **Download**: faz download do arquivo utilizado na importação em lote.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Importação em lote

### Detalhes do processo de importação
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Exibe o código do processo de importação no Segura. |
| **Arquivo** | Campo de texto | Exibe o nome do arquivo utilizado no processo de importação em lote. |
| **Data da solicitação** | Campo de texto | Exibe a data em que o arquivo de importação em lote foi carregado para o Segura. |
| **Solicitante** | Campo de texto | Exibe o nome do usuário solicitante. |
| **Locale** | Campo de texto | Exibe o código locale em que a planilha foi enviada. **Nota**: locale em um sistema de informação refere-se ao conjunto de configurações que definem as preferências regionais. |
| **Mensagem** | Campo de texto | Exibe a mensagem de erro ou sucesso em relação ao processo de importação em lote. |
| **Status** | Campo de texto | Exibe o status do processo de importação em lote. |
| **Linhas** | Campo de texto | Exibe quantas linhas o arquivo tem. |
| **Grupo AD** | Campo de texto | Quantidade de linhas que foram importadas com sucesso. |
| **Linhas com erro** | Campo de texto | Exibe a quantidade de linhas com erro dentro do arquivo. |
| **Início** | Campo de texto | Exibe a data e a hora inicial da operação de importação em lote. Este campo será exibido no formato DD/MM/AA HH:MM. |
| **Final** | Campo de texto | Exibe a data e a hora final da operação de importação em lote. Este campo será exibido no formato DD/MM/AA HH:MM. |
| **Andamento** | Campo de texto | Exibe, em formato de porcentagem, o andamento do processo de importação em lote. |
| **Erro** | Campo de texto | Indica se ocorreu algum erro no processo de importação em lote. |

