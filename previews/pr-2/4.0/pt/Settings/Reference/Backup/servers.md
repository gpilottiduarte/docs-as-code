# Servidores

Este documento fornece informações sobre o relatório **Servidor de Backup** que apresenta as configurações dos servidores de backup dentro do Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Servidores.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Servidor de backup** para cadastro de um novo servidor. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os registros pelo seu código identificador no Segura. |
| **Modo** | Menu suspenso | Filtra pelo modo de backup no Segura. As opções são **Diretório Local** ou **SSH \- RSYNC.** |
| **Host** | Campo de texto | Filtra pelo host do servidor de backup. |
| **Porta**  | Campo de texto | Filtra pela porta do servidor de backup. |
| **Path** | Campo de texto | Filtra pelo caminho do diretório no servidor de backup. |
| **Ativo** | Menu suspenso | Filtra pelo status do servidor de backup no Segura. As opções são **Sim** ou **Não.** |

## Campos do relatório
* **Código.**  
* **Modo.**  
* **Host.**  
* **Porta.**  
* **Path.**  
* **Ativo.**  
* **Ações**:  
  * **Alterar:** abre a janela **Servidor de Backup** em modo de edição.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Servidor de Backup
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Modo** | Menu suspenso | Sim | Seleciona o modo de backup. As opções são **Diretório Loca**l ou **SSH \- RSYNC**. |
| **Ativo** | Botão de opção | Sim | Indica a situação do servidor de backup no Segura. As opções são **Sim** ou **Não**. |
| **Caminho Diretório** | Campo de texto | Sim | Indica o caminho do diretório de backup no servidor de backup. |



