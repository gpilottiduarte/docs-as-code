# Acessos com tempo incomum

Neste documento, você vai encontrar todas as informações sobre a tela **Acessos com tempo incomum** que exibe um relatório com informações sobre sessões de usuário que apresentam uma duração fora do padrão, comparadas ao histórico de uso do usuário.

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior.**  
2. No menu lateral, selecione **Análise de comportamentos > Acessos com tempo incomum.**
***
## **Barra superior**

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [**Agendar relatório**](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## **Campos de busca**

| Item | Descrição |
| :---- | :---- |
| **Código** | Campo de texto que filtra as sessões pelo seu código único de identificação. |
| **Origem** | Campo de texto que filtra as sessões pelo endereço de IP do usuário que realizou o acesso. |
| **Usuário** | Campo de texto que filtra as sessões pelo nome pessoal do usuário que fez o acesso em horário incomum |
| **Destino** | Campo de texto que filtra as sessões pelo dispositivo ou porta de destino da credencial utilizada. |
| **Credencial** | Campo de texto que filtra as sessões pela credencial com acessos com duração incomum. |
| **Protocolo** | Campo de texto que filtra as sessões pelo protocolo usado nos acessos com duração incomum. |
| **Intervalo de acesso** | Campo que filtra as sessões pelo período em que foram realizadas. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora inicial do intervalo. |
| **até** | Campo que filtra as sessões pelo período em que foram realizadas.  Utilize esse campo para inserir a data final do período de alteração. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora final do intervalo. |
| **Intervalo de duração** | Campo de texto que filtra as sessões pelo intervalo de duração, em segundos, da sessão. Utilize esse campo para inserir um numeral que inicia a filtragem. |
| **até** | Campo de texto que filtra as sessões pelo intervalo de duração, em segundos, da sessão. Utilize esse campo para inserir um numeral que finaliza a filtragem.  |
| **Risco** | Campo de texto que filtra as sessões pela sua pontuação de risco. |

## **Campos do relatório**

* **Código**.  
* **Origem.**  
* **Usuário**.  
* **Destino**.  
* **Credencial**.  
* **Protocolo**.  
* **Início**.  
* **Término**.  
* **Duração**.  
* **Risco**.  
* **Ação:** nessa coluna, você acessa:  
  * **Detalhes das consultas:** representado pelo ícone de lupa, abre a tela **Logs da sessão**.
  * **Vídeo da sessão:** representado pelo ícone de play, abre a tela **Vídeo da sessão**.
    

:::(info)(Info)  
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::