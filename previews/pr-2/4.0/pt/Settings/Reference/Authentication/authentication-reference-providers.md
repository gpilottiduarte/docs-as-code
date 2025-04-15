# Provedores

Este documento fornece informações sobre a tela do relatório **Provedores** que exibe detalhes sobre os provedores de autenticação.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Provedores.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra pelo nome do provedor de autenticação no Segura. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código:** o código de identificação do provedor no sistema.  
* **Provedor:** nome do provedor de autenticação.  
* **Ordem:** número que indica a sequência de prioridade dos provedores de autenticação usados pelo sistema.   
* **Ativo.**  
* **Autenticação externa:** indica se o método de autenticação utiliza serviços de terceiros para verificar as credenciais. Os provedores classificados como **Sim** redirecionam o usuário para uma interface externa, enquanto os classificados como **Não** realizam o processo de autenticação internamente.  
* **Ações:**  
  * **Desativar:** desativa um provedor de autenticação.  
  * **Ativar:** ativa o provedor de autenticação.  
  * **Editar:** abre a tela **Provedores de autenticação** em modo de edição.
:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.
:::

## Provedores de autenticação
Esta seção fornece informações sobre a tela **Provedores de autenticação** onde usuários podem editar um provedor de autenticação.
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do provedor de autenticação. |
| **Ordem** | Seletor de quantidade | Sim | Indica a prioridade do provedor de autenticação. |

