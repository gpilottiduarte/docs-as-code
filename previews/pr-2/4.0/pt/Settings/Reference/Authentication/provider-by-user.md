# Provedor por usuário

Este documento fornece informações sobre a tela do relatório **Usuários por provedor** que exibe detalhes sobre os usuários e seus provedores.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Usuários por provedor.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Novo provedor por usuário**. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código identificador do usuário no Segura. |
| **Usuário** | Campo de texto | Filtra pelo nome pessoal do usuário no Segura. |
| **Nome de usuário** | Campo de texto | Filtra pelo nome de usuário no Segura. |
| **Provedor** | Menu suspenso | Filtra pelo provedor de autenticação. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Usuário.**  
* **Nome do usuário.**  
* **Provedor.**  
* **Ordem:** número que indica a sequência de prioridade dos provedores de autenticação usados pelo sistema.   
* **Ativo.**  
* **Ações:**  
  * **Desativar:** desativa a configuração do provedor para o usuário.  
  * **Editar:** abre a tela **Editar provedor por usuário**.
:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.
:::

## Tela Novo provedor por usuário
Esta seção fornece informações sobre a tela **Novo provedor por usuário.**
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Provedor de Autenticação** | Menu suspenso | Sim | Seleciona o provedor de autenticação associado ao usuário. |
| **Ordem** | Seletor de quantidade | Sim | Indica a prioridade do provedor de autenticação. |
| **Adicionar** | Botão | Não | Abre o modal Usuários. |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona todos os registros na tabela e habilita o botão **Remover selecionados**. |
| **Usuários** | Tabela | Não | Lista os usuários adicionados e suas informações: *Cód, Nome, Nome de usuário, E-mail* e *Departamento.* |
| **NOME DE USUÁRIO** | Campo de texto | Não | Nome de usuário do usuário no Segura. |
| **E-MAIL** | Campo de texto | Não | Endereço de e-mail do usuário no Segura. |
| **DEPARTAMENTO** | Campo de texto | Não | Departamento do usuário no Segura. |

### Modal Usuários
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Busca os grupos de acordo com os caracteres digitados. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tela. |
| **ID** | Campo de texto | Código de identificação do usuário no Segura. |
| **NOME** | Campo de texto | Nome pessoal do usuário no Segura. |
| **NOME DE USUÁRIO** | Campo de texto | Nome de usuário do usuário no Segura. |
| **E-MAIL** | Campo de texto | Endereço de e-mail do usuário no Segura. |
| **DEPARTAMENTO** | Campo de texto | Departamento do usuário no Segura. |

### Tela Editar provedor por usuário
| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Usuário** | Menu suspenso | Sim | Selecione o usuário para o provedor. |
| **Provedor de autenticação** | Menu suspenso | Sim | Selecione o provedor de autenticação a ser vinculado ao usuário. |
| **Ordem** | Seletor numérico | Sim | O número define a sequência de prioridade dos provedores utilizados no sistema. |
| **Ativo** | Botão de rádio | Sim | Selecione o status do provedor por usuário no Segura. |

