# Arquivos

Este documento fornece informações sobre a tela do relatório **Arquivos** que exibe os arquivos acessíveis ao seu usuário do **MySafe** e possibilita visualizar, adicionar, editar, compartilhar, desativar, ativar e restaurar versões anteriores dos itens.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **MySafe**.  
2. No menu lateral, selecione **Arquivos**.

---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar arquivo.** |
| **Ativar** | Botão | Disponível após a seleção de pelo menos um item, ativa múltiplos itens simultaneamente.  |
| **Desativar** | Botão | Disponível após a seleção de pelo menos um item, desativa múltiplos itens simultaneamente. |
| **Compartilhar** | Botão | Disponível após a seleção de pelo menos um item, compartilha múltiplos itens simultaneamente. |
| **Ações** | Menu suspenso | Exibe as opções *Importação em lote, Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os arquivos pelo código de identificação no Segura. |
| **Arquivo** | Campo de texto | Filtra os arquivos pelo nome de identificação. |
| **Tags** | Campo de texto | Filtra os arquivos pelas palavras-chave associadas. |
| **Compartilhada** | Campo de texto | Filtra os arquivos pelo status de compartilhamento. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Proprietário** | Campo de texto | Filtra os arquivos pelo nome do usuário que os adicionou ao **MySafe**. |
| **Último uso** | Seletor de data | Filtra os arquivos pelo período em que foram visualizados.  |
| **Status** | Menu suspenso | Filtra os arquivos pelo seu estado de ativação. As opções são **Ativo** ou **Inativo.** Limpe o campo para habilitar a opção **Todos.** |

## Campos do relatório

* **Caixa de seleção**: usada para ações em lote.  
* **Código**.  
* **Arquivo**.  
* **Tamanho**: tamanho do arquivo em B, KB ou MB.  
* **Tags**.  
* **Compartilhada**.  
* **Proprietário**.  
* **Último uso**.  
* **Status**.  
* **Ações**:   
  * **Visualizar arquivo**: abre a tela **Detalhes do arquivo** com todas as informações sobre o arquivo.  
  * **Compartilhar:** abre a tela **Compartilhar.**  
  * **Editar:** abre a tela **Editar arquivo.**  
  * **Desativar:** abre um pop-up de confirmação com as opções **Sim** ou **Não.**  
  * **Histórico:** abre a tela do histórico de versões do item. 

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Tela Detalhes do arquivo

#### Aba Geral

Nesta aba, usuários visualizam informações gerais do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação do arquivo. |
| **Proprietário** | Usuário que adicionou o arquivo.  |
| **Último uso** | Data e hora em que o arquivo foi baixado pela última vez.  |
| **Tags** | Palavras-chaves associadas ao arquivo. |
| **Observações** | Informações gerais sobre o arquivo. |
| **Baixar** | Baixa o arquivo para o dispositivo do usuário. |

#### Aba Compartilhamento

Esta aba exibe informações sobre o compartilhamento do item com outros usuários **MySafe.**

| Item | Descrição |
| :---- | :---- |
| **Membro** | Nome do usuário **MySafe** com acesso ao arquivo. |
| **Pode visualizar** | Permissão de visualização sobre os detalhes do arquivo. Sempre que um item é compartilhado, essa coluna fica marcada com **Sim**. |
| **Pode editar** | Permissão de edição sobre os detalhes do arquivo. As opções são **Sim** ou **Não**. |

### Tela Compartilhar

Nesta tela, usuários podem selecionar as opções **Interno** para compartilhar seus arquivos com usuários **MySafe** por tempo indeterminado ou **Externo** para compartilhar arquivos temporariamente com pessoas que não possuem conta no **MySafe.**

#### Compartilhamento interno

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Usuários** | Menu suspenso | Busca usuários **MySafe** por nome ou grupos pessoais. |
| **Permissão de acesso** | Caixa de seleção | Define as permissões de acesso ao arquivo. As opções são **Pode visualizar** (padrão) e **Pode editar**.   |
| **Remover usuário** | Botão | Remove o usuário selecionado. |

#### Compartilhamento externo/único

#### Pré-requisitos

* Permissão de **Compartilhamento externo** concedida pelo administrador do **MySafe**. Saiba mais em [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe).
 ---

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome** | Texto | Não | Exibe o nome de identificação do arquivo. |
| **Tipo** | Texto | Não | Exibe o tipo do item. As opções são *Senha, Arquivo, Anotação* e *Segredo de API*. |
| **E-mail do destinatário** | Campo de texto | Sim | Insere o(s) email(s) da(s) pessoa(s) com quem o arquivo será compartilhada. |

<br>
**Seção Detalhes de compartilhamento**

A **Data de validade** está condicionada às permissões definidas pelo administrador no menu **Administração global \> Opções de compartilhamento.** 

Se o administrador definiu a data de validade em **1 hora**, o usuário que tentar selecionar uma data superior a 1 hora, por exemplo, 24 horas, receberá uma mensagem de erro informando que o período selecionado excede o limite máximo definido pelo administrador.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Data de validade**\* | Menu suspenso | Sim | Seleciona o período em que o item compartilhado ficará disponível para acesso. As opções são *1 hora, 24 horas, 1 semana, 30 dias* e *Customizado*. A opção **Customizado** habilita os campos de data e hora para seleção personalizada de uma data de validade. |
| **Máximo de acessos**\* | Botão de opção | Sim | Define quantas vezes o destinatário poderá acessar o item compartilhado dentro do período estabelecido. As opções são *Sem limite, Compartilhamento único* e *Customizado*.  Por padrão, a opção **Compartilhamento único** exibe o numeral **1**.  A opção **Customizado** habilita a seleção de um numeral que define a quantidade de vezes que a pessoa poderá acessar o item compartilhado. Digite o número ou utilize o seletor de quantidade. |



### Telas Adicionar/Editar arquivo

As telas **Adicionar arquivo** e **Editar arquivo** compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Arquivo**\* | Campo de upload | Sim | Arquivo a ser carregado para o **MySafe**. <br>**Máximo**: 500 MB |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar o arquivo. |
| **Anotações** | Campo de texto | Não | Informações gerais sobre o arquivo. |

### Tela Histórico

Nesta tela, usuários visualizam e restauram as versões anteriores de um arquivo.

### Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Arquivo** | Campo de texto | Filtra as versões do arquivo por nome.  |
| **Autor** | Campo de texto | Filtra as versões do arquivo pelo usuário que realizou alguma alteração. |
| **Versão** | Campo de texto | Filtra as versões do arquivo pelo número da versão. |
| **Data da versão** | Campo de texto | Filtra as versões do arquivo pelo período em que foram alterados.  |

### Campos do relatório

* **Arquivo.**  
* **Tamanho**.  
* **Autor**.  
* **Versão**.  
* **Data da versão**.  
* **Ações**:   
  * **Visualizar arquivo**: abre a tela **Detalhes da versão**.  
  * **Restaurar versão:** restaura o arquivo para a versão selecionada.

:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

#### Tela Detalhes da versão

Nesta tela, usuários visualizam informações sobre a versão selecionada do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação do arquivo. |
| **Criador** | Nome do usuário que adicionou o arquivo ao **MySafe.** |
| **Editor** | Nome do usuário que alterou o arquivo.  |
| **Tags** | Palavras-chave associadas ao arquivo. |
| **Anotações** | Informações gerais sobre ao arquivo. |
| **Data de início** | Data e hora em que o arquivo foi adicionado ao **MySafe**. |
| **Data de fim** | Data e hora em que o arquivo foi alterado. |
| **Baixar** | Botão que abre um pop-up de confirmação com as opções **Sim** ou **Não** para baixar o arquivo . |
| **Restaurar versão** | Botão que retorna o arquivo para a versão selecionada e muda para **“Restaurado\!”** por alguns segundos quando acionado. |
 
