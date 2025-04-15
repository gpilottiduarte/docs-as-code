# Grupos LDAP/AD x Grupos de usuário

Este documento fornece informações sobre a tela do relatório **Grupos AD/LDAP x Grupos de acesso.**

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active directory \> Grupos AD/LDAP x Grupos de acesso.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Adicionar,* que abre a janela **Grupos LDAP/AD***;* *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra pelo nome do grupo no Segura. |
| **Servidor** | Campo de texto | Filtra pelo endereço do servidor LDAP/AD.  |
| **Grupos de usuários** | Campo de texto | Filtra pelo grupo cadastrado pelo usuário no servidor e que servirá de ponte com os grupos do Segura. |
| **Grupos de acesso (Aprovador)** | Campo de texto | Filtra pelos grupos que estão configurados como Aprovador. |
| **Grupos de acesso (Usuário)** | Campo de texto | Filtra pelos grupos que estão configurados como Usuário. |
| **Sincronização ativa** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |
| **Ativo** | Menu suspenso | Filtra pela situação do grupo. Pode ser **Sim** ou **Não**. |

## Campos do relatório
* **Código**.  
* **Nome.**  
* **Servidor.**  
* **Grupos de usuário.**  
* **Última sincronização:**  
* **Sincronização ativa.**  
* **Grupos de acesso (Aprovador).**  
* **Grupos de acesso (Usuário).**  
* **Ativo.**  
* **Ações**:  
  * **Alterar grupo**: abre a janela de **Grupos LDAP/AD** em modo de edição.  
  * **Usuários:** abre o formulário de **Usuários sincronizados**.  
  * **Log de sincronização:** abre o formulário de **Logs de sincronização de grupos LDAP/AD**.  
  * **Teste de sincronização:** abre o formulário **Grupo LDAP/AD** para testar a sincronização.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::