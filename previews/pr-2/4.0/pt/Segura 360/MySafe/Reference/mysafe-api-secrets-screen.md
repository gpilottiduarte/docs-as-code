# Segredos de API


Este documento fornece informações sobre a tela do relatório **Segredos de API** que exibe os segredos de API acessíveis ao seu usuário do **MySafe** e possibilita realizar ações como visualizar, adicionar, editar, compartilhar, desativar e ativar os itens.

## Caminho para acesso

1. No Segura, na barra de navegação, clique no **Menu de produtos** e selecione **MySafe**.  
2. No menu lateral, selecione **Segredos de API**.

---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar segredo de API.** |
| **Ativar** | Botão | Disponível após a seleção de pelo menos um item, ativa múltiplos itens simultaneamente.  |
| **Desativar** | Botão. | Disponível após a seleção de pelo menos um item, desativa múltiplos itens simultaneamente. |
| **Compartilhar** | Botão | Disponível após a seleção de pelo menos um item, compartilha múltiplos itens simultaneamente.  |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os segredos de API pelo código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra os segredos de API pelo nome de identificação. |
| **Url** | Campo de texto | Filtra os segredos de API pelo endereço da aplicação em que estão cadastrados. |
| **Tags** | Campo de texto | Filtra os segredos de API pelas palavras-chave associadas. |
| **Compartilhada** | Menu suspenso | Filtra os segredos de API pelo status de compartilhamento. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos.** |
| **Proprietário** | Campo de texto | Filtra os segredos de API pelo nome do usuário que os adicionou. |
| **Último uso** | Campo de texto | Filtra os segredos de API pelo período em que foram visualizados.  |
| **Status** | Menu suspenso | Filtra os segredos de API pelo seu status de ativação. As opções são **Ativo** ou **Inativo.** Limpe o campo para habilitar a opção **Todos.** |

## Campos do relatório

* **Caixa de seleção**: usada para ações em lote.  
* **Código**.  
* **Nome**.  
* **URL**.  
* **Tags**.  
* **Compartilhada**.  
* **Proprietário**.  
* **Último uso**.  
* **Status**.  
* **Ações**:   
  * **Visualizar segredo de API**: abre a tela **Detalhes do segredo de API** com todas as informações sobre o segredo de API.  
  * **Compartilhar:** abre a tela **Compartilhar.**  
  * **Editar:** abre a tela **Editar segredo de API.**  
  * **Desativar:** abre um pop-up de confirmação com as opções **Sim** ou **Não.**  
    

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Tela Detalhes do segredo de API

#### Aba Geral

Nesta aba, usuários visualizam informações gerais do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação do segredo de API. |
| **Proprietário** | Usuário que adicionou o segredo de API.  |
| **ID do cliente** | Código de identificação da aplicação cliente (`Client ID`) no fluxo de autorização OAuth 2.0. |
| **Copiar**  | Copia o `Client ID` para a área de transferência.  |
| **Client Secret** | Senha `(Client Secret)` utilizada para autenticar a aplicação cliente no fluxo de autorização OAuth 2.0. |
| **Exibir** | Exibe ou oculta o `Client secret.` |
| **Copiar** | Copia o `Client secret` para a área de transferência. |
| **URL** | Endereço da aplicação onde o segredo de API está cadastrado. |
| **Método** | Método HTTP usado para realizar a chamada de API. |
| **Tags** | Palavras-chave associadas ao segredo de API. |
| **Observações** | Informações gerais sobre o segredo de API. |

::: (warning) (Atenção)  
Ao clicar em **Copiar**, a informação é adicionada à área de transferência e outros programas podem acessá-la.  
:::

#### Aba Compartilhamento

Esta aba exibe informações sobre o compartilhamento do item com outros usuários **MySafe.**

| Item | Descrição |
| :---- | :---- |
| **Membro** | Nome do usuário **MySafe** com acesso ao segredo de API. |
| **Pode visualizar** | Permissão de visualização sobre os detalhes do segredo de API. Sempre que um segredo de API é compartilhado, essa coluna fica marcada com **Sim**. |
| **Pode editar** | Permissão de edição sobre os detalhes do segredo de API. As opções são **Sim** ou **Não**. |

### Tela Compartilhar

Nesta tela, usuários podem selecionar as opções **Interno** para compartilhar seus segredos de API com usuários **MySafe** por tempo indeterminado ou **Externo** para compartilhar segredos de API temporariamente com pessoas que não possuem conta no **MySafe.**

#### Compartilhamento interno

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Usuários** | Menu suspenso | Busca usuários **MySafe** por nome ou grupos pessoais. |
| **Permissão de acesso** | Caixa de seleção | Define as permissões de acesso ao segredo de API. As opções são **Pode visualizar** (padrão) e **Pode editar**.   |
| **Remover usuário** | Botão | Remove o usuário selecionado. |

#### Compartilhamento externo/único

#### Pré-requisitos

* Permissão de **Compartilhamento externo** concedida pelo administrador do **MySafe**. Saiba mais em [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe).

---

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome** | Texto | Não | Exibe o nome de identificação do segredo de API. |
| **Tipo** | Texto | Não | Exibe o tipo do item. As opções são *Senha, Arquivo, Anotação* e *Segredo de API*. |
| **E-mail do destinatário** | Campo de texto | Sim | Insere o(s) email(s) da(s) pessoa(s) com quem o segredo de API será compartilhada. |

<br>
**Seção Detalhes de compartilhamento**

A **Data de validade** está condicionada às permissões definidas pelo administrador no menu **Administração global \> Opções de compartilhamento.** 

Se o administrador definiu a data de validade em **1 hora**, o usuário que tentar selecionar uma data superior a 1 hora, por exemplo, 24 horas, receberá uma mensagem de erro informando que o período selecionado excede o limite máximo definido pelo administrador.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Data de validade**\* | Menu suspenso | Sim | Seleciona o período em que o item compartilhado ficará disponível para acesso. As opções são *1 hora, 24 horas, 1 semana, 30 dias* e *Customizado*. A opção **Customizado** habilita os campos de data e hora para seleção personalizada de uma data de validade. |
| **Máximo de acessos**\* | Botão de opção | Sim | Define quantas vezes o destinatário poderá acessar o item compartilhado dentro do período estabelecido. As opções são *Sem limite, Compartilhamento único* e *Customizado*.  Por padrão, a opção **Compartilhamento único** exibe o numeral **1**.  A opção **Customizado** habilita a seleção de um numeral que define a quantidade de vezes que a pessoa poderá acessar o item compartilhado. Digite o número ou utilize o seletor de quantidade. |


### Telas Adicionar/Editar segredo de API

As telas **Adicionar segredo de API** e **Editar segredo de API** compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome**\* | Campo de texto | Sim | Nome de identificação do segredo de API. |
| **URL\*** | Campo de texto | Sim | Endereço da aplicação onde o segredo de API será usado. |
| **ID do cliente\*** | Campo de texto | Sim. | Código `(Client ID)` utilizado para identificar a aplicação cliente no fluxo de autorização OAuth 2.0. |
| **Client secret** | Campo de texto | Não  | Senha `(Client Secret)` utilizada para autenticar a aplicação cliente no fluxo de autorização OAuth 2.0. |
| **Identificador** | Campo de texto | Não | *String* única definida pelo usuário para identificar o segredo de API. |
| **Método** | Campo de texto | Não | Método HTTP utilizado para chamar a API. |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar o segredo de API. |
| **Anotações** | Campo de texto | Não | Informações gerais sobre o segredo de API. |

## 