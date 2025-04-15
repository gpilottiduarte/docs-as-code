# Acesso incomum

Neste documento, você vai encontrar todas as informações sobre a tela **Acesso incomum** que exibe um relatório que combina todas as ações incomuns dentro do Segura.

## **Caminho para acesso**

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior.**  
2. No menu lateral, selecione **Análise de comportamentos > Acesso incomum.**

***

## **Barra superior**

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário [**Agendar relatório**](/v4/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## **Campos de busca**

| Item | Descrição |
| :---- | :---- |
| **Código** | Campo de texto que filtra as sessões pelo seu código único de identificação. |
| **Origem** | Campo de texto que filtra as sessões pelo endereço de IP do usuário que realizou o acesso. |
| **Destino** | Campo de texto que filtra as sessões pelo dispositivo de destino da credencial utilizada. |
| **Credencial** | Campo de texto que filtra as sessões pela credencial com acessos incomuns. |
| **Protocolo** | Campo de texto que filtra as sessões pelo protocolo usado nos acessos incomuns. |
| **Intervalo de acesso** | Menu suspenso que filtra as sessões pelo período em que foram realizadas. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora inicial final do intervalo. |
| **até** | Menu suspenso que filtra as sessões pelo período em que foram realizadas.  Utilize esse campo para inserir a data final do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora final do intervalo. |
| **Origem?** | Menu suspenso que filtra as sessões com origem incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Destino?** | Menu suspenso que filtra as sessões com destino incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Credencial?** | Menu suspenso que filtra as sessões com credencial incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Horário?** | Menu suspenso que filtra as sessões com horário incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Duração?** | Menu suspenso que filtra as sessões com duração incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Risco** | Campo de texto  que filtra as sessões pela pontuação de risco.  |

## **Campos do relatório**

* **Código**.  
* **Origem.**  
* **Usuário**: nome pessoal do usuário que realizou a sessão.  
* **Destino.**  
* **Credencial.**  
* **Protocolo.**  
* **Início:** data e hora de início da sessão. Formatos: `DD/MM/AAAA` e `HH:MM`.  
* **Término:** data e hora de término da sessão. Formatos: `DD/MM/AAAA` e `HH:MM`.  
* **Duração:** duração da sessão. Formato: `HH:MM:SS`.  
* **Origem?**  
* **Destino?**  
* **Credencial?**  
* **Horário?**  
* **Duração?**  
* **Risco**  
* **Ação:** nessa coluna, você acessa:  
  * **Detalhes das consultas:** representado pelo ícone de lupa, abre a tela **Logs da sessão.**  
  * **Vídeo da sessão:** representado pelo ícone de play, abre a tela **Vídeo da sessão**.

:::(info) (Info)  
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::  