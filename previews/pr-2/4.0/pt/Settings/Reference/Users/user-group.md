# Grupos de usuários

Este documento fornece informações sobre a tela do relatório **Grupos de usuários**, que exibe informações sobre grupos de usuários.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Grupos de usuários.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo grupo de usuários** | Botão | Direciona para a tela **Grupos de usuários**. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação do grupo de usuários no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome do grupo de usuários. |
| **Data de registro** | Seletor de data | Filtra os registros pelo período em que foram criados. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome**.  
* **Data de registro.**  
* **Ativo.**  
* **Grupo de sincronização:** nome do grupo de sincronização do *Active Directory* relacionado ao grupo de usuários.  
* **Ações:**  
  * **Atualizar grupo de usuários**: abre a tela **Grupos de usuários** em modo de edição.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Grupos de usuários

Esta seção fornece informações sobre a tela **Grupos de usuários**.

### Aba Configurações

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do grupo de usuários. |
| **Situação** | Botões de opção | Sim | Ativa ou desativa o status do grupos de usuários. |
| **Descrição** | Campo de texto | Não | Descrição do grupo de usuários. |

### Aba Usuários

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Abre o modal **Usuários**. |
| **Usuários** | Tabela | Não | Lista os usuários adicionados ao grupo e suas informações: *Cód., Nome, Nome de usuário, E-mail, Tipo de criação, Adicionado por* e *Adicionado em.* |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona todos os registros na tabela e habilita o botão **Remover selecionados**. |

#### Modal Usuários

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Busca pelo usuário de acordo com os caracteres digitados. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tabela. |
| **CÓD** | Campo de texto | Código de identificação do usuário no Segura. |
| **NOME** | Campo de texto | Nome pessoal do usuário no Segura. |
| **NOME DE USUÁRIO** | Campo de texto | Nome de usuário do usuário no Segura. |
| **E-MAIL** | Campo de texto | Endereço de e-mail do usuário no Segura. |
| **TIPO DE CRIAÇÃO** | Campo de texto | Tipo de criação do usuário no Segura. |

### Aba Grupo de acesso

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Abre o modal **Grupos**. |
| **Grupos** | Tabela | Lista os grupos de usuário adicionados e suas informações: *Cód, Nome, Tipo, Adicionado por, Perfil* e *Aprovação.* |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tabela e habilita o botão **Remover selecionados**. |

#### Modal Grupos

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Busca os grupos de acordo com os caracteres digitados. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tabela. |
| **CÓD** | Campo de texto | Código de identificação do grupo de usuários no Segura. |
| **NOME** | Campo de texto | Nome do grupo de usuários no Segura. |
| **TIPO** | Campo de texto | Módulo Segura ao qual o grupo de usuários está vinculado. |

### Aba Revisão

Esta aba exibe um resumo das configurações do cadastro do novo grupo de usuários com botões para **Voltar** ou **Salvar.**