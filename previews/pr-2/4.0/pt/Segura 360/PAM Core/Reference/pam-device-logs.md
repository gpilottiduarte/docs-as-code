# Logs

Este documento fornece informações sobre a tela do relatório **Logs,** onde é possível visualizar os logs referente ao Network Connector.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Dispositivos.**  
2. No menu lateral, selecione **Configurações > Network Connector > Logs.**

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções, *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra por seu código de identificação dentro do Segura. |
| **Evento** | Campo de texto | Filtra pelo tipo de evento. As opções são: *Creation*, *List* e *Deletion*. |
| **Connector IP** | Campo de texto | Filtra pelo endereço de IP do dispositivo cadastrado como Connector. |
| **Connector port** | Campo de texto | Filtra pela porta que o IP está oferecendo ao serviço de Connector. |
| **Mensagem** | Campo de texto | Filtra pela mensagem de retorno do log. |
| **Code** | Campo de texto | Filtra pelo código do erro ocorrido durante a execução. Se nenhum erro ocorrer, o campo ficará em branco. |
| **Data/Hora** | Seletor de data | Filtra pelo período selecionado. |

## Campos do relatório

* **Código**.  
* **Tipo**.  
* **Connector IP.**  
* **Connector Port.**  
* **Mensagem.**  
* **Code.**  
* **Data/Hora.**  
* **Ações**:  
  * **Detalhes**: abre a tela **Network connector log**.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Network connector log

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Código de identificação dentro do Segura. |
| **Tipo** | Tipo da execução do connector. |
| **Data/Hora** | Data e hora da execução do connector. |
| **Connector address** | Endereço IP do dispositivo cadastrado como Connector. |
| **Connector port** | Número de porta que o IP está oferecendo ao serviço de Connector. |
| **Mensagem** | Mensagem de retorno do log. |
| **Detalhes** | Detalhes da mensagem de retorno do log. |