# Consulta incomum

Neste documento, você vai encontrar todas as informações sobre a tela **Consulta incomum** que exibe um relatório com informações sobre todas as visualizações de senhas diferentes das que o usuário usualmente visualiza.

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior.**  
2. No menu lateral, selecione **Análise de comportamentos > Consulta incomum.**
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
| **Código** | Campo de texto que filtra as consultas pelo seu código único de identificação. |
| **Origem** | Campo de texto que filtra as consultas pelo endereço de IP do usuário que fez a consulta da senha. |
| **Usuário** | Campo de texto que filtra as consultas pelo nome pessoal do usuário que fez a consulta da senha |
| **Dispositivo** | Campo de texto que filtra as consultas pelo dispositivo de destino da credencial utilizada. |
| **Credencial** | Campo de texto que filtra as consultas pela credencial utilizada na consulta. |
| **Tipo de credencial** | Menu suspenso que filtra as consultas pelo tipo de credencial utilizada. Limpe o campo para habilitar a opção **Todos.** |
| **Informação Adicional** | Campo que filtra as consultas pelas informações adicionais associadas à credencial. |
| **Intervalo da consulta** | Campo que filtra as consultas pelo período em que ocorreram. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora inicial do intervalo. |
| **até** | Campo que filtra as consultas pelo período em que ocorreram. Utilize esse campo para inserir a data final do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o campo **Hora** esteja habilitado, utilize-o para inserir a hora final do intervalo. |
| **Origem?** | Menu suspenso que filtra as consultas com origem incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Credencial?** | Menu suspens que filtra as consultas com credencial incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Horário?** | Menu suspenso que filtra as consultas com horário incomum. As opções disponíveis são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |
| **Risco** | Campo que filtra as consultas pela sua pontuação.  |

## **Campos do relatório**

* **Código.**  
* **Origem.**  
* **Usuário.**  
* **Dispositivo**.  
* **Credencial.**  
* **Tipo de credencial.**  
* **Informação Adicional.**  
* **Data da Consulta:** data e hora em que a consulta ocorreu. Formatos: `DD/MM/AAAA` e `HH:MM`.  
* **Origem?**  
* **Credencial?**  
* **Horário?**  
* **Risco.**

:::(info) (Info)  
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::  