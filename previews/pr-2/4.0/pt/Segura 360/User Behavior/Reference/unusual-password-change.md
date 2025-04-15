# Alteração de senha incomum

Neste documento, você vai encontrar todas as informações sobre a tela **Alteração de senha incomum** que exibe um relatório com informações sobre alterações manuais realizadas no registro de credenciais que normalmente são gerenciadas automaticamente pelo **PAM Core**. 

## **Caminho para acesso**

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior.**  
2. No menu lateral, selecione **Análise de comportamentos > Alteração de senha incomum.**

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
| **Código** | Campo de texto que filtra as alterações de senha pelo código único de identificação do usuário. |
| **Origem** | Campo de texto que filtra as alterações de senha pelo endereço de IP do usuário que alterou a senha. |
| **Usuário** | Campo de texto que filtra as alterações de senha pelo nome pessoal do usuário que alterou a senha. |
| **Dispositivo** | Campo de texto que filtra as alterações de senha pelo dispositivo associado à credencial usada. |
| **Nome do usuário** | Campo de texto que filtra as alterações de senha pelo nome de usuário Segura associado à credencial. |
| **Tipo de credencial** | Menu suspenso que filtra as alterações de senha pelo tipo de credencial usada na operação. Limpe o campo para habilitar a opção **Todos.** |
| **Informação Adicional** | Campo de texto  que filtra as alterações de senha pelas informações adicionais associadas à credencial. |
| **Data da mudança** | Campo que filtra as alterações de senha pelo período em que foram feitas. Utilize esse campo para inserir a data inicial do período de alteração. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o filtro **Hora** esteja habilitado, utilize-o para filtrar as alterações pela hora inicial. |
| **até** | Campo que filtra as alterações de senha pelo período em que foram feitas. Utilize esse campo para inserir a data final do período de alteração. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. <br>Caso o filtro **Hora** esteja habilitado, utilize-o para filtrar as alterações pela hora final. |

## **Campos do relatório**

* **Código**.  
* **Origem**  
* **Usuário**.  
* **Dispositivo.**  
* **Nome do usuário**.  
* **Tipo de credencial.**  
* **Informação Adicional.**  
* **Data da mudança:** data em que a alteração de senha foi feita. Formatos `DD/MM/AAAA` e `HH:MM`.  
* **Risco:** pontuação de risco associada a essa operação.  
* **Ação:** nessa coluna, você acessa:  
  * **Histórico:** representado pelo ícone de relógio, abre a tela **Histórico de senhas da credencial** que também pode ser acessada através do caminho **Grid Menu \> PAM Core \> Credenciais \> Todas \> Uma credencial da lista \> Coluna Ação \> Ícone dos três pontos verticais \> Histórico.**  
    

:::(info)(Info)  
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::