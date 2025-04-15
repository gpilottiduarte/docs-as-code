# Sessões com ocorrências detectadas

Neste documento, você vai encontrar todas as informações sobre a tela **Sessões com ocorrências detectadas** que exibe um relatório que combina todos os registros de sessões em que foram detectadas algum comando auditado.

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior.**  
2. No menu lateral, selecione **Audited command logs > Sessões com ocorrências detectadas.**

***

## **Barra superior**

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [**Agendar relatório**](v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## **Campos de busca**

| Item | Descrição |
| :---- | :---- |
| **Cód. da sessão** | Campo de texto que filtra as sessões por seu código único de identificação. |
| **Usuário local** | Campo de texto que filtra os comandos pelo nome de usuário senhasegura. |
| **Dispositivo remoto** | Campo de texto que filtra os comandos pelo dispositivo-alvo do comando. |
| **Início da sessão** | Campo que filtra os comandos pela data da sessão. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora inicial do intervalo. |
| **até** | Campo que filtra os comandos pela data da sessão. Utilize esse campo para inserir a data final do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora final do intervalo.  |

## **Campos do relatório**

* **Identificação da sessão**: código único de identificação da sessão.  
* **Usuário local.**  
* **Dispositivo remoto.**  
* **Credencial**: credencial utilizada na sessão.  
* **Início:** data e hora de início da sessão. Formatos: `DD/MM/AAAA` e `HH:MM`.  
* **Término:** data e hora de término da sessão. Formatos: `DD/MM/AAAA` e `HH:MM`.  
* **Tempo**: duração da sessão. Formato: `HH:MM:SS`.  
* **Eventos:** quantidade de ocorrências na sessão.  
* **Score**: pontuação da sessão.  
* **Ação:** nessa coluna, você acessa:  
  * **Visualizar log de eventos:** representado pelo ícone de lupa, abre a tela **Log de eventos**.
  * **Ícone dos três pontos verticais:** abre um menu suspenso com as opções **Vídeo da sessão** e **Logs da sessão.**  
      
    

:::(info) (Info)  
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::
