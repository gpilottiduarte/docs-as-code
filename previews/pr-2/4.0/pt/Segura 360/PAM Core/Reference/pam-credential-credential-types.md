# Tipos de credencial

Este documento fornece informações sobre a tela do relatório **Tipos de credencial** que exibe todos os tipos de credenciais e possibilita gerenciá-las.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **PAM Core.**  
2. No menu lateral, selecione **Gerenciamento** > **Credenciais** > **Tipos de credencial.**

---
## Menu de ações
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela cadastro de **Tipos de credencial**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as credenciais pelo seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra as credenciais pelo nome do tipo de credencial.  |
| **Usuário Local?** | Menu suspenso | Filtra as credenciais pelo status do usuário local, permitindo selecionar apenas credenciais vinculadas a usuários locais ou a usuários externos. As opções são **Sim** e **Não.**Limpe o campo para habilitar a opção **Todos**. **Nota:** usuários locais são aqueles que não podem realizar login em domínios. |
| **Status** | Menu suspenso | Filtra as credenciais pelo status de ativação. As opções são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos.** |

## Campos do relatório
* **Código**.
* **Nome.**
* **Usuário local?.**
* **Status.**
* **Ações:**
  * **Editar:** abre a tela de cadastro **Tipos de credencial** em modo de edição.  
  * **Desativar:** abre uma janela pop-up de confirmação para desativar o tipo de credencial com as opções **Sim** e **Não.**

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Cadastro de tipos de credencial
Nesta seção, você encontra todas as informações sobre a tela **Cadastro de tipos de credencial** que possibilita criar ou editar tipos de credenciais.  

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome identificador do tipo de credencial. |
| **Usuário local?*** | Botão *toggle* | Sim | Ativa ou inativa criação de um tipo de credencial vinculado apenas a um usuário local. |
| **Ativo** | Botão *toggle* | Sim | Ativa ou inativa o tipo de credencial. |
