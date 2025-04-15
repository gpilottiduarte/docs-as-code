# Usuários

Este documento fornece informações sobre a tela **Usuários** no menu **Configurações de tenant**, que exibe detalhes sobre os usuários cadastrados no *tenant* atual.

## Caminho para acesso

1. Acesse **Cloud Security**.  
2. No menu do usuário, clique em **Painel do administrador**.  
3. No menu lateral, clique em **Usuários**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **\+ Adicionar usuário** | Botão | Abre a tela [Adicionar usuário](/v4/docs/pt/users-4#tela-adicionar-usuário). |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Pesquisar** | Campo de texto | Filtra os usuários com base nas palavras inseridas. |
| **Cadastro** | Menu suspenso | Filtra os usuários pelo tipo de cadastro. As opções são: **Completo** e **Incompleto**. |
| **Status** | Menu suspenso | Filtra os usuários pelo *status* do usuário. As opções são: **Habilitado** e **Desabilitado**. |
| **Limpar filtros** | Botão | Limpa os filtros aplicados. |
| **Exportar dados em CSV** | Botão | Abre a janela **Exportar dados em CSV**. |
| **Mostrar/Ocultar colunas** | Botão | Abre um *card* para gerenciar a exibição das colunas no relatório. |

## Campos do relatório

- E-mail: email do usuário.  
- Nome: nome do usuário.  
- Sobrenome: sobrenome do usuário.  
- Número de telefone: número de telefone do usuário.  
- ID: ID do usuário.  
- Cadastro.  
- Visto por último em: data e hora de quando o usuário foi acessado por último.  
- Status.  
- Ações:  
    - Detalhes: Abre a tela [Usuários](/v4/docs/pt/users-4#tela-usuários).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Usuários

| Item | Descrição |
| :---: | ----- |
| **Nome** | Nome do usuário. |
| **Sobrenome** | Sobrenome do usuário. |
| **E-mail** | Email do usuário. |
| **Número de telefone** | Número de telefone do usuário. |
| **Status** | Status da conta do usuário. |

## Seção Funções

| Item | Descrição |
| ----- | ----- |
| **Produto** | Produtos em que o usuário está cadastrado. |
| **Funções** | Funções que o usuário possui no produto. |
| **Descrição** | Descrição da função. |
| **Editar funções** | Botão que permite ao usuário editar as funções. |

## Tela Adicionar usuário

### Aba Usuários

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **E-mail** | Campo de texto | Sim | Campo para inserir o email do usuário a ser adicionado no *tenant*.  |

### Aba Funções

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Selecione os cargos** | Caixa de seleção | Não | Campo para selecionar os cargos do usuário. |

### Aba Revisar

Use a aba **Revisar** para verificar todas as informações inseridas nas abas anteriores.