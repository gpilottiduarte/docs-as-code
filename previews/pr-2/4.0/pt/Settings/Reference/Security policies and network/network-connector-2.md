# Network Connector

Este documento fornece informações sobre o relatório **Network Connector**, que exibe informações sobre o network connector no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Dispositivos**.  
2. No menu lateral, selecione **Configurações \> Network Connector \> Connectors.**

Ou:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione a opção **Políticas de segurança e rede \>** **Network Connector**.

## Menu de Ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Novo network connector**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código identificador do conector. |
| **Nome** | Campo de texto | Filtra pelo nome definido pelo usuário no momento da criação do conector. |
| **IP** | Campo de texto | Filtra pelo endereço de IP do dispositivo cadastrado como conector. |
| **Porta** | Campo de texto | Filtra pela porta do conector. |
| **Data de cadastro** | Campo de data | Filtra de acordo com o período selecionado. |
| **Última mudança** | Campo de data | Filtra os registros pelo período em que foram modificados pela última vez. Exibe apenas os conectores que tiveram alguma mudança nesse intervalo de tempo. |
| **Status** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código**.  
* **Nome**.  
* **IP**.  
* **Porta**.  
* **Data de cadastro**.  
* **Última mudança**.  
* **Status**.  
* **Ações:**  
  * **Detalhes**: abre a janela **Connectors**, que exibe os detalhes do conector.  
  * **Editar**: Abre a janela **Atualizar Network connector**.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Novo Network Connector/Atualizar Network Connector

### Aba Geral

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome identificador do **Network Connector**. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status do network connector. |

### Aba Autenticação

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **IP** | Campo de texto | Sim | Endereço IP do **Network Connector Server**. |
| **Porta** | Campo de texto | Sim | Porta de conexão do **Network Connector Server**. |
| **Nome de usuário** | Campo de texto | Sim | Nome de usuário para autenticação. |
| **Senha** | Campo de texto | Sim | Senha para autenticação. |

### Aba Agentes

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Insere uma nova entrada, em branco, ao final da listagem. |
| **Nome** | Campo de texto | Nome do agente. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros exibidos na tela. |

## Tela Connectors

| Campo | Tipo | Descrição |
| ----- | ----- | ----- |
| **Nome** | Campo de texto | Nome identificador do **Network Connector**. |
| **Endereço** | Campo de texto | Endereço IP ou hostname do **Network Connector Server**. |
| **Ativo** | Campo de texto | Status do **Network Connector**. Pode ser **Sim** ou **Não**. |

### Agents

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Nome do agente. |
| **Porta** | Campo de texto | Porta do agente. |
| **Fingerprint** | Campo de texto | Identificação digital para verificação de integridade do servidor. É apresentada como uma série de asteriscos por questões de segurança. |
