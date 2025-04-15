# Políticas de acesso

Este documento fornece informações sobre a tela do relatório **Políticas de acesso**, que exibe a lista de grupos e políticas criados no módulo **PAM Core**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Políticas de acesso.**

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela de cadastro de [Políticas de acesso](/v4/docs/pt/pam-session-access-policies-registration). |
| **Sincronizar** | Botão | Reprocessar as políticas cadastradas. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra os grupos pelo nome cadastrado. |
| **Parte da senha** | Menu suspenso | Filtra os grupos pelo tipo de visibilidade de senha permitido no grupo. As opções são **1ª parte**, **2ª  parte** e **Senha completa**. |
| **Visualizar** | Menu suspenso | Filtra os grupos pela permissão de visualização da senha. As opções são **Sim** ou **Não**. |
| **Aprovação para visualizar** | Menu suspenso | Filtra os grupos para requerer aprovação para visualizar uma senha. As opções são **Requer aprovação** e **Não requer aprovação**. |
| **Sessão** | Menu suspenso | Filtra os grupos pela informação se o grupo tem alguma restrição para acessar a sessão. As opções são **Sim** e **Não**. |
| **Aprovação para sessão** | Menu suspenso | Filtra os grupos  pela informação se o grupo precisa de algum tipo de aprovação para acessar a sessão. As opções são **Requer aprovação** e **Não requer aprovação**. |
| **Alterar expiração** | Menu suspenso | Filtra os grupos pela informação se é permitido alterar a data de expiração do grupo. As opções são **Sim** e **Não**. |
| **Status** | Menu suspenso | Filtra os grupos por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Parte da senha.**  
* **Permissão.**  
* **Aprovação.**  
* **Justificativa.**  
* **Alterar expiração.**  
* **Tipo.**  
* **Critérios.**  
* **Status.**  
* **Ações:**  
  * **Editar:** abre a tela de cadastro [Políticas de acesso](/v4/docs/pt/pam-session-access-policies-registration) para que sejam realizadas as alterações necessárias.  
  * **Clonar:**  cria uma  cópia com as mesmas características do registro escolhido. Clique **Sim** na caixa de confirmação para realizar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::