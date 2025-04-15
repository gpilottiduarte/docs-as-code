# Gatilhos de transferência de arquivos

Este documento fornece informações sobre a tela do relatório **Gatilhos de transferência**, que exibe informações sobre os gatilhos de transferência de arquivos.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento** > **Sessões > Gatilhos de transferência.**

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Status** | Menu suspenso | Filtra os gatilhos de transferência por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código**: número de identificação da ordem das auditorias de transferência.  
* **Trigger**: tipo do gatilho.  
* **Status**: status do gatilho.  
* **Alteração**: data e hora da alteração do status.  
* **Autor alteração**: nome do usuário que realizou a alteração.  
* **Data/Hora inativação**: data e hora da inativação do gatilho.  
* **Inativador**: nome do usuário que realizou a inativação.  
* **Ações**: a ação exibida varia de acordo com o status do gatilho que está sendo buscado.  
  * **Desativar**: disponível para gatilhos com status de **Ativo**, usado para inativar um gatilho. Na janela de confirmação clique em **Sim** para confirmar a ação.  
    :::(info) (**Info**)  
    Observe que os gatilhos não são excluídos, apenas desativados. Você pode reativar esses gatilhos filtrando os resultados por **Inativo** no menu suspenso **Status**.  
    :::  
  * **Ativar**: disponível para gatilhos com o status de **Inativo**, usado para habilitar o gatilho. Na janela de confirmação clique em **Sim** para confirmar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.  
:::