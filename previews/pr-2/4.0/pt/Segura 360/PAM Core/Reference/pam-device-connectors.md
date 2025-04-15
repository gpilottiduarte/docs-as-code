# Connectors

Este documento fornece informações sobre a tela do relatório **Network Connector**, onde é possível adicionar e configurar os conectores de rede.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Dispositivos.**  
2. No menu lateral, selecione **Configurações > Network Connector > Connectors.**

---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela [Novo Network Connector](/v4/docs/pt/new-network-connector). |
| **Ações** | Menu suspenso | Exibe as opções, *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de cadastro do conector de rede. |
| **Nome** | Campo de texto | Filtra pelo nome do conector de rede. |
| **IP** | Campo de texto | Filtra pelo endereço IP do conector de rede. |
| **Porta** | Campo de texto | Filtra pelo número da porta do conector de rede. |
| **Data de cadastro** | Seletor de data | Filtra pela data de cadastro do conector de rede. |
| **Última mudança** | Seletor de data | Filtra pela data da última mudança ocorrida. |
| **Status** | Menu suspenso | Filtra os conectores por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código**.  
* **Nome**.  
* **IP.**  
* **Porta.**  
* **Data de cadastro.**  
* **Última mudança.**  
* **Status**.  
* **Ações**:  
  * **Detalhes**: abre a tela **Connectors - Detalhes**.  
  * **Editar**: abre a tela [Atualizar Network connector](/v4/docs/pt/new-network-connector).

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Detalhes de Network Connector

Esta tela exibe as informações detalhadas do conector de rede selecionado.

### Seção Geral

| **Item** | **Descrição** |
| :---- | :---- |
| **Nome** | Exibe o nome cadastrado para o conector. |
| **Endereço** | Exibe o endereço de IP cadastrado para o conector. |
| **Ativo** | Exibe se o conector está ativo. As opções são **Sim** e **Não**. |

### Seção Agents

| Item | Descrição |
| :---- | :---- |
| **Nome** | Exibe o nome cadastrado para o agente. |
| **Porta** | Exibe o número da porta cadastrada para o agente. |
| **Fingerprint** | Exibe o *fingerprint* cadastrado para o agente. |