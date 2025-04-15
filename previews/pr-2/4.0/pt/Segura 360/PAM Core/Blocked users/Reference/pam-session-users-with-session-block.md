# Usuários bloquedos

Este documento fornece informações sobre a tela do relatório **Usuários com bloqueio de sessão**, que mostra a lista de usuários que foram bloqueados durante o uso de uma sessão.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Usuários bloqueados**.

---
## Menu de ações

| Item  | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os usuários bloqueados por seu código de identificação dentro do Segura. |
| **Identificação de sessão** | Campo de texto | Filtro os usuários bloqueados pelo código identificador da sessão. |
| **Status** | Menu suspenso | Filtra os usuários bloqueados por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |
| **Bloqueado** | Campo de texto | Filtra os usuários bloqueados pelo nome do usuário que foi bloqueado. |
| **Autor** | Campo de texto | Filtra os usuários bloqueados pelo nome do usuário que efetuou o bloqueio. |
| **Desbloqueador** | Campo de texto | Filtra os usuários bloqueados pelo nome do usuário que efetuou o desbloqueio. |
| **Data/hora bloqueio** | Seletor de data | Filtra os usuários bloqueados pelo período em que o bloqueio foi efetuado. |

## Campos do relatório

* **Id**: número de identificação da ordem dos registros no relatório.  
* **Código.**  
* **Identidade de sessão.**  
* **Status.**  
* **Bloqueado.**  
* **Data/hora bloqueio.**  
* **Autor.**  
* **Data/hora desbloqueio**: data e hora que o desbloqueio foi efetuado.  
* **Desbloqueador.**  
* **Ações:**  
  * **Bloquear/Liberar interatividade**: libera a interação do usuário para reiniciar e utilizar a sessão.
    :::(info) (**Info**)
    Caso o valor do campo **Status** seja **Inativo**, nenhuma opção estará disponível na coluna **Ações**.
    :::

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.  
:::
