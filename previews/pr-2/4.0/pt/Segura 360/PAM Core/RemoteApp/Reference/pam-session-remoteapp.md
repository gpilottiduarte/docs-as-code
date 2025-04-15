# RemoteApp

Este documento fornece informações sobre a tela do relatório **RemoteApp**, que mostra a lista dos *scripts* de RemoteApp que foram cadastrados.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Sessões > RemoteApp.**

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela de cadastro de ***scripts*** **de** **RemoteApp**. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra os RemoteApps pelo nome de identificação do cadastrado. |
| **Caminho do aplicativo** | Campo de texto | Filtra os registros pelo local do aplicativo que será executado. |
| **Parâmetros** | Campo de texto | Filtra pelas máscaras que serão utilizadas pelo aplicativo. |
| **Macro** | Campo de texto | Filtra os registros pelas ações que poderão ser executadas. |
| **Tags** | Campo de texto | Filtra os registros pelas tags cadastradas para identificação. |
| **Status** | Menu suspenso | Filtra os registros cadastrados por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Tipo.**  
* **Caminho do aplicativo.**  
* **Parâmetros.**  
* **Tags.**  
* **Complementar**: indica se existe ou não um macro complementar.  
* **Código.**  
* **Ativo.**  
* **Criação**: data e hora da criação do cadastro.  
* **Autor**: usuário que criou o cadastro.  
* **Ações:**  
  * **Adicionar macro complementar:** abre a tela de cadastro do **RemoteApp** para que seja incluída a macro complementar.  
  * **Editar**: abre a tela de cadastro do **RemoteApp** para que seja realizada a alteração necessária.  
  * **Clonar:** realiza uma cópia exata do registro a ser clonado. Na janela de confirmação clique em **Sim** para confirmar a ação.   
  * **Desativar:** desabilita o cadastro. Na janela de confirmação clique em **Sim** para confirmar a ação.

:::(info) (**Info**)  
O relatório exibe 30 registros por tela, para ir para as próximas telas, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Cadastro de RemoteApp

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome de identificação do *script* a ser cadastrado. |
| **Status** | Botão *toggle* | Não | Ativa ou inativa o status do *script* do RemoteApp. |
| **Tags (separada por,)** | Campo de texto | Não | Palavras para identificação do *script* do RemoteApp. |
| **Caminho do aplicativo** | Campo de texto | Não | Caminho do aplicativo a ser executado. |
| **Parâmetros** | Campo de texto | Não | Máscaras que podem ser utilizadas. Para saber quais são as máscaras possíveis, acesse o documento *Sobre Máscaras para o RemoteApp*. |
| **Script** | Campo de texto | Não | Visualização de como será a execução do script com as ações que foram selecionadas e seus valores. |
| **Ações** | Botão | Não | Conjunto de possíveis ações que podem compor o script. |
| **Propriedades** | Campo de texto | Não | Propriedades de cada ação incluída. As opções disponíveis irão variar de acordo com a ação que foi escolhida no campo Ações. |
| **Descrição** | Campo de texto | Não | Informações gerais sobre o cadastro do RemoteApp. |