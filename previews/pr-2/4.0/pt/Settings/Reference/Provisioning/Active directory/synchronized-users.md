# Usuários sincronizados

Este documento fornece informações sobre a tela do relatório **Usuários sincronizados,** que exibe informações sobre a sincronização de usuários LDAP/AD.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active directory \> Usuários sincronizados.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código do usuário sincronizado no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome do usuário. |
| **Nome de usuário** | Campo de texto | Filtra pelo nome de usuário do usuário. |
| **Ativo no grupo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Nome do usuário.**  
* **Nome.**  
* **Grupo**: mostra a qual grupo de sincronização o usuário faz parte.  
* **Criação**: data da primeira sincronização.  
* **Atualização**: mostra a data da última atualização. 
* **Desabilitado**: mostra se o usuário está habilitado ou desabilitado no servidor AD.  
* **Ativo no sistema**: indica o status do usuário no Segura.  
* **Ações**:  
  * **Ver detalhes do usuário**: abre a janela XXX
:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.
:::