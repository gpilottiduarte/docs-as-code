# Pool de credenciais

Este documento fornece informações sobre a tela do relatório **Pool de credenciais**, que mostra os conjuntos de credenciais compartilhadas (pool) cadastrados no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais > Pool de credenciais.**

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela de cadastro de **pool de credenciais**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra o pool de credencial por seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra o pool de credencial pelo nome cadastrado no Segura. |
| **Status** | Menu suspenso | Filtra o pool de credencial pelo seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código**.  
* **Nome.**  
* **Ativo.**  
* **Ações:**  
  * **Editar:** abre a tela de cadastro **Pool de credenciais** para que sejam realizadas as alterações necessárias.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela de cadastro Pool de credenciais
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome do pool de credenciais. |
| **Status*** | Botão *toggle* | Sim | Ativa ou desativa status do pool de credenciais cadastrada. |
| **Busca** | Caixa de texto | Não | Realiza a busca entre as credenciais adicionadas na tabela. |
| **Adicionar / Remover selecionados** | Botão | Não | Abre a janela das credenciais disponíveis cadastradas no Segura. |
| **Tabela de credenciais** | Tabela | Não | Dados de cada membro do pool de credenciais contendo *os campos caixa de seleção*, *Código, Tipo de credencial, Nome de usuário, Dispositivo* e *Tipo de dispositivo.* |

