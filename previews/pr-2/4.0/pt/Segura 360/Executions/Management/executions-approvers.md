# Aprovadores

Este documento fornece informações sobre a tela do relatório **Aprovadores,** que exibe os usuários cadastrados como aprovadores no módulo Executions.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Executions**.  
2. No menu lateral, selecione **Gerenciamento > Aprovadores**.

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Aprovadores.** |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os aprovadores pelo seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra os aprovadores pelo seu nome |
| **Nome de usuário** | Campo de texto | Filtra os aprovadores pelo nome de usuário no Segura. |
| **Nível** | Menu suspenso | Filtra os aprovadores pelo nível atribuído ao aprovador. As opções são: *1*, *2* e *3*. Limpe o campo para habilitar a opção **Todos**. |
| **Adicionado por** | Campo de texto | Filtra os aprovadores pelo nome do usuário que cadastrou o aprovador. |
| **Adicionado em** | Seletor de data | Filtra os aprovadores pelo período em que foram cadastrados. |

## Campos do relatório

* **Código**.  
* **Nome.**  
* **Nome de usuário.**  
* **Nível.**  
* **Adicionado por.**  
* **Adicionado em.**  
* **Alterado por:** nome do usuário que alterou o registro.  
* **Alterado em:** data e hora que o registro foi alterado.  
* **Ações:**  
  * **Desativar:** desativa o aprovador. Na caixa de confirmação clique **Sim** para confirmar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Aprovadores

Esta tela fornece as informações necessárias para o cadastro de um aprovador.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Módulo** | Menu suspenso | Sim | Módulo do Segura em que o aprovador será cadastrado. O valor sempre será Executions. |
| **Aprovadores** | Tabela | Sim | Dados de cada membro adicionado como aprovador contendo os campos caixa de seleção, Cód., Nome, Nome de usuário, E-mail e Departamento. |
| **Adicionar/Remover selecionados** | Botão | Sim | Abre a lista de usuários do Segura que possuem papel de aprovador para que sejam adicionados. |