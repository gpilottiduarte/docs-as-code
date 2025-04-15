# Força de senha

Este documento fornece informações sobre a tela do relatório **Força de senha**, que mostra as regras cadastradas para cada nível de força de senha.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais > Força de senhas.**

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela de cadastro de **Força de senha**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra a força de senha por seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra a força de senha pelo nome cadastrado no Segura. |
| **Status** | Menu suspenso | Filtra a força de senha pelo seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código**.  
* **Nome.**  
* **Minúsculas:** exibe a quantidade de letras minúsculas permitidas.  
* **Maiúsculas:** exibe a quantidade de letras maiúsculas permitidas.  
* **Números:** exibe a quantidade de números permitidas.  
* **Símbolos:** exibe a quantidade de símbolos permitidos.  
* **Símbolos permitidos:** exibe os símbolos permitidos.  
* **Caractere repetido:** se o registro aceita ou não caráter repetido.  
* **Status.**  
* **Ações:**  
  * **Editar:** abre a tela de cadastro **Força de senha** para que sejam realizadas as alterações necessárias.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela de cadastro Força de senha
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome da força da senha. |
| **Status** | Botão *toggle* | Não | Ativa ou desativa status da força da senha cadastrada. |
| **Letras maiúsculas*** | Seletor de quantidade | Sim | Selecione a quantidade de letras maiúsculas aceitas neste registro. |
| **Letras minúsculas*** | Seletor de quantidade | Sim | Selecione a quantidade de letras minúsculas aceitas neste registro. |
| **Números*** | Seletor de quantidade | Sim | Selecione a quantidade de números aceitos nesse registro. |
| **Símbolo*** | Seletor de quantidade | Sim | Selecione a quantidade de símbolos aceitos nesse registro. |
| **Símbolos permitidos** | Caixa de seleção | Não | Seleciona os símbolos permitidos neste registro. Os símbolos podem ser: `! % @ # ^ & * _` |
| **Permitir caracter repetido?** | Botão *toggle* | Não | Ativa ou desativa a opção para o registro aceitar ou não caracteres repetidos na senha. |

:::(info) (**Info**)  
Ao ir selecionando as quantidades e opções disponíveis o Segura exibe o número de combinações possíveis de acordo com o que for sendo escolhido.  
:::