# Importar usuários limitados

Este documento fornece informações sobre a tela **Importar usuários limitados** no menu **Gerenciamento**, onde é possível visualizar todas as importações em lote desse tipo que foram realizadas e criar uma nova importação no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Gerenciamento \> Importar usuários limitados**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Importar** | Botão | Direciona para a tela [Importar usuários limitados](/v4/docs/pt/batch-import-limited-users#tela-de-importação). |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra a importação pelo código de identificação. |
| **Nome do arquivo** | Campo de texto | Filtra pelo nome do arquivo utilizado na importação. |
| **Usuário** | Campo de texto | Filtra pelo nome do usuário que realizou a importação. |
| **Período de importação** | Seletor de data | Filtra pela data inicial e final do intervalo de busca. |

## Campos do relatório

- **Código**.  
- **Nome do arquivo**.  
- **Usuário**.  
- **Data de criação**: data e hora da criação do acesso em lote.  
- **Início da execução**: data e hora do início do processo de importação.  
- **Fim da execução**: data e hora do término do processo de importação.  
- **Tempo**: tempo total do processo.  
- **Status**: estado do processo.  
- **Andamento**: exibe o andamento do processo em forma de barra horizontal.  
- **Erro**: indica se houve erro no processo.  
- **Ações:**  
    - **Detalhes do processo**: abre a tela [Detalhes da importação](/v4/docs/pt/batch-import-limited-users#tela-detalhes-da-importação).
    - **Download**: baixa o arquivo importado.

::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela Importar usuários limitados

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Planilha de usuários\*** | Campo de upload | Sim | Exibe o botão **Arraste e solte o arquivo aqui** para selecionar o arquivo de importação. |
| **Fornecer acesso automaticamente após a importação\*** | Botão de opção | Sim | Seleciona o acesso automático para os usuários contidos na planilha. As opções são **Sim** ou **Não**. |
| **Arquivo modelo** | Botão | Não | Inicia o download do arquivo de importação `.xlxs` a ser preenchido. |

## Tela Detalhes da importação

| Item | Descrição |
| ----- | ----- |
| **Código** | Código do acesso. |
| **Arquivo** | Nome do arquivo utilizado na importação em lote. |
| **Data** | Data e hora da importação. |
| **Solicitação** | Nome do usuário que realizou a importação. |
| **Localização** | Idioma escolhido pelo usuário ao importar a planilha na plataforma Segura. |
| **Mensagem** | Mensagem retornada ao final do processo. |
| **Status** | Status do processo. |
| **Linhas** | Número de linhas na planilha de importação em lote. |
| **Usuários** | Número de usuários importados. |
| **Acesso automático** | Indica se o acesso automático foi solicitado na importação em lote. |
| **Linhas com erros** | Número de linhas com erro na planilha de importação em lote. |
| **Início** | Data e hora de início do processo. |
| **Fim** | Data e hora de término do processo. |
| **Progresso** | Percentual de progresso do processo. |
| **Erro** | Indica a presença ou ausência de erro no processo de importação. |