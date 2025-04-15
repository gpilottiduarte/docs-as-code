# Anotações


Este documento fornece informações sobre a tela do relatório **Anotações** que exibe as anotações acessíveis ao seu usuário do **MySafe** e possibilita visualizar, adicionar, editar, compartilhar, desativar, ativar e restaurar versões prévias dos itens.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o menu principal, representado pelo ícone dos quatro quadrados, e selecione **MySafe**.  
2. No menu lateral, selecione **Anotações**.

---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar anotação.** |
| **Ativar** | Botão | Disponível após a seleção de pelo menos um item, ativa múltiplos itens simultaneamente.  |
| **Inativar** | Botão | Disponível após a seleção de pelo menos um item, desativa múltiplos itens simultaneamente. |
| **Compartilhar** | Botão | Disponível após a seleção de pelo menos um item, compartilha múltiplos itens simultaneamente. |
| **Ações** | Menu suspenso | Exibe as opções *Importação em lote, Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as anotações pelo código único de identificação. |
| **Nome** | Campo de texto | Filtra as anotações pelo nome de identificação. |
| **Tags** | Campo de texto | Filtra as anotações pelas palavras-chave associadas. |
| **Compartilhada** | Menu suspenso | Filtra as anotações pelo status de compartilhamento. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Proprietário** | Campo de texto | Filtra as anotações pelo nome do usuário que as adicionou. |
| **Último uso** | Seletor de data | Filtra as anotações pelo período em que foram visualizadas.  |
| **Ativo** | Menu suspenso | Filtra as anotações pelo status de ativação. As opções disponíveis são **Sim** ou **Não.** Limpe o campo para habilitar a opção **Todos.** |

## Campos do relatório

* **Caixa de seleção**: usada para ações em lote.  
* **Código**.  
* **Nome**.  
* **Tags**.  
* **Compartilhada**.  
* **Proprietário**.  
* **Último uso**.  
* **Status**.  
* **Ações**:   
  * **Visualizar anotação**: abre a tela **Detalhes da anotação** com todas as informações sobre a anotação.  
  * **Compartilhar:** abre a tela **Compartilhar.**  
  * **Editar:** abre a tela **Editar anotação.**  
  * **Desativar:** abre o pop-up de confirmação com as opções **Sim** ou **Não.**  
  * **Histórico:** abre a tela do histórico de versões do item.  

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Tela Detalhes da anotação

#### Aba Geral

Nesta aba, usuários visualizam informações gerais do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação da anotação. |
| **Proprietário** | Usuário que adicionou a anotação  |
| **Último uso** | Data e hora em que a anotação foi visualizada pela última vez.  |
| **Tags** | Palavras-chaves associadas à anotação. |
| **Visualizar anotação** | Botão que abre o pop-up **Anotação.** Ajuste a barra de **Contraste** para visualizar a anotação.  |
| **Copiar anotação** | Botão que copia a anotação para área de transferência do usuário e muda para **“Copiado\!”** por alguns segundos quando acionado. |

::: (warning) (Atenção)

Ao clicar em **Copiar anotação**, a informação é adicionada à área de transferência e outros programas podem acessá-la.

:::

#### Aba Compartilhamento

Esta aba exibe informações sobre o compartilhamento do item com outros usuários **MySafe.**

| Item | Descrição |
| :---- | :---- |
| **Membro** | Nome do usuário **MySafe** com acesso à anotação. |
| **Pode visualizar** | Permissão de visualização sobre os detalhes da anotação. Sempre que um arquivo é compartilhado, essa coluna fica marcada com **Sim**. |
| **Pode editar** | Permissão de edição sobre os detalhes da anotação. As opções são **Sim** e **Não**. |

### 

### Tela Compartilhar

Nesta tela, usuários podem selecionar as opções **Interno** para compartilhar suas anotações com usuários **MySafe** por tempo indeterminado ou **Externo** para compartilhar anotações temporariamente com pessoas que não possuem conta no **MySafe.**

#### Compartilhamento interno

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Usuários** | Menu suspenso | Busca usuários **MySafe** por nome ou grupos pessoais. |
| **Permissão de acesso** | Caixa de seleção | Define as permissões de acesso à anotação. As opções são **Pode visualizar** (padrão) e **Pode editar**.   |
| **Remover usuário** | Botão | Remove o usuário selecionado. |

#### Compartilhamento externo/único

#### Pré-requisitos

* Permissão de **Compartilhamento externo** concedida pelo administrador do **MySafe**. Saiba mais em [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe).
---
| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome** | Texto | Não | Exibe o nome de identificação da anotação. |
| **Tipo** | Texto | Não | Exibe o tipo do item. As opções são *Senha, Arquivo, Anotação* e *Segredo de API*. |
| **E-mail do destinatário** | Campo de texto | Sim | Insere o(s) email(s) da(s) pessoa(s) com quem a anotaçãoserá compartilhada. |

<br>
**Seção Detalhes de compartilhamento**

A **Data de validade** está condicionada às permissões definidas pelo administrador no menu **Administração global \> Opções de compartilhamento.** 

Se o administrador definiu a data de validade em **1 hora**, o usuário que tentar selecionar uma data superior a 1 hora, por exemplo, 24 horas, receberá uma mensagem de erro informando que o período selecionado excede o limite máximo definido pelo administrador.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Data de validade**\* | Menu suspenso | Sim | Seleciona o período em que o item compartilhado ficará disponível para acesso. As opções são *1 hora, 24 horas, 1 semana, 30 dias* e *Customizado*. A opção **Customizado** habilita os campos de data e hora para seleção personalizada de uma data de validade. |
| **Máximo de acessos**\* | Botão de opção | Sim | Define quantas vezes o destinatário poderá acessar o item compartilhado dentro do período estabelecido. As opções são *Sem limite, Compartilhamento único* e *Customizado*.  Por padrão, a opção **Compartilhamento único** exibe o numeral **1**.  A opção **Customizado** habilita a seleção de um numeral que define a quantidade de vezes que a pessoa poderá acessar o item compartilhado. Digite o número ou utilize o seletor de quantidade. |

### 

### 

### Telas Adicionar/Editar anotação

As telas **Adicionar anotação** e **Editar anotação** compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome**\* | Campo de texto | Sim | Nome de identificação da anotação. |
| **Anotação\*** | Campo de texto | Sim | Conteúdo da anotação. **Máximo**: 900 caracteres. |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar a anotação. |

### Tela Histórico

Nesta tela, usuários visualizam e restauram as versões anteriores de uma anotação.

### Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra as versões da anotação pelo nome.  |
| **Autor** | Campo de texto | Filtra as versões da anotação pelo usuário que realizou alguma alteração. |
| **Versão** | Campo de texto | Filtra as anotações pela versão de alteração. |
| **Data da versão** | Seletor de data | Filtra as anotações pelo período em que foram alteradas. |

### Campos do relatório

* **Nome.**  
* **Autor**.  
* **Versão**.  
* **Data da versão**.  
* **Ações**:   
  * **Visualizar arquivo**: abre a tela **Detalhes da versão**.  
  * **Restaurar versão:** restaura a anotação para a versão selecioanda.

:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

#### Tela Detalhes da versão

Nesta tela, usuários visualizam informações sobre a versão selecionada do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação da anotação. |
| **Criador**  | Nome do usuário que adicionou a anotação ao **MySafe.** |
| **Editor** | Nome do usuário que alterou a anotação.  |
| **Tags** | Palavras-chave associadas à anotação. |
| **Data de início** | Data e hora em que a anotação foi adicionada ao **MySafe**. |
| **Data de fim** | Data e hora em que a anotação foi alterada. |
| **Visualizar anotação** | Botão que abre o pop-up **Anotação.** Ajuste a barra de **Contraste** para visualizar a anotação. |
| **Copiar anotação** | Botão que copia a anotação para área de transferência do usuário e muda para **“Copiado\!”** por alguns segundos quando acionado.  |
| **Restaurar versão** | Botão que retorna a anotação para a versão selecionada e muda para **“Restaurado\!”** por alguns segundos quando acionado.  |
