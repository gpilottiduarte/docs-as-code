# Novo Network Connector

Este documento fornece informações sobre a tela de formulário **Novo Network Connector**, onde é possível adicionar e configurar os conectores.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Dispositivos.**  
2. No menu lateral, selecione **Configurações > Network Connector > Connectors**   
3. Na tela do relatório clique no menu **Ações > Adicionar.**

:::(info) (**Info**)  
Ao editar um registro existente, a tela **Atualizar Network Connector** será exibida. O conteúdo dessa tela corresponde exatamente ao descrito neste documento.  
:::

---
## Aba Geral

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome de identificação do Network Connector. |
| **Ativo** | Botão de opção | Não | Status de ativação do registro. As opções são **Sim** e **Não**. |

## Aba Autenticação

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **IP*** | Campo de texto | Sim | Endereço de IP para o servidor do conector. |
| **Porta*** | Campo de texto | Sim | Porta para o servidor do conector. |
| **Nome de usuário*** | Campo de texto | Sim | Nome de usuário do servidor do conector.  |
| **Senha*** | Campo de texto | Sim | Senha do usuário do servidor do Connector.  |

:::(info) (**Info**)  
As portas dos agentes devem estar dentro do range 30000-30999.  
:::

## Aba Agentes

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Adicionar/Remover selecionados** | Botão | Não | Adiciona uma linha na tabela. |
| **Agentes** | Tabela | Não | Lista dos agentes adicionados. Contendo o campo *Nome*. |

## Aba Revisão  
Esta seção contém as informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança, já seja feita antes de finalizar o cadastro. As informações estão agrupadas por cada aba respectivamente.